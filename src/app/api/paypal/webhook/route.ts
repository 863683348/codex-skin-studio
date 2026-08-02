// PayPal Webhook — BILLING.SUBSCRIPTION.* 事件 → 写 Firestore + 自动发 License Key 邮件
// 部署后在 PayPal 开发者后台配置 Webhook URL: https://codex-skin-studio.shop/api/paypal/webhook
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getFirestore } from '@/lib/firebase-admin';
import { generateLicenseKey, type LicenseInfo } from '@/lib/license-server';
import { sendLicenseEmail } from '@/lib/email';

// 证书内存缓存（serverless 实例内复用；TTL 12h）
const certCache = new Map<string, { pem: string; fetchedAt: number }>();
const CERT_TTL_MS = 12 * 60 * 60 * 1000;

async function getCertificatePem(certUrl: string): Promise<string> {
  const now = Date.now();
  const cached = certCache.get(certUrl);
  if (cached && now - cached.fetchedAt < CERT_TTL_MS) return cached.pem;
  const res = await fetch(certUrl, { cache: 'no-store' });
  if (!res.ok) throw new Error('cert fetch failed: ' + res.status);
  const pem = await res.text();
  certCache.set(certUrl, { pem, fetchedAt: now });
  return pem;
}

export async function POST(req: Request) {
  const rawBody = await req.text();
  const webhookId = process.env.PAYPAL_WEBHOOK_ID;
  if (!webhookId) {
    return NextResponse.json({ error: 'WEBHOOK_NOT_CONFIGURED' }, { status: 500 });
  }

  // 解析 header（Next 的 Headers 是小写 key）
  const h = req.headers;
  const headers: Record<string, string> = {};
  for (const [k, v] of h.entries()) headers[k.toLowerCase()] = v;

  // 验证签名：需要先用 cert-url 拿证书再 verify（crypto.verify 的 key 参数要传 cert）
  const certUrl = headers['paypal-cert-url'];
  if (!certUrl) return NextResponse.json({ error: 'MISSING_CERT_URL' }, { status: 400 });
  let pem: string;
  try {
    pem = await getCertificatePem(certUrl);
  } catch {
    return NextResponse.json({ error: 'CERT_FETCH_FAILED' }, { status: 500 });
  }
  const data =
    `${headers['paypal-transmission-id']}|${headers['paypal-transmission-time']}|${webhookId}|${rawBody}`;
  const ok = crypto.verify(
    'RSA-SHA256',
    Buffer.from(data, 'utf8'),
    pem,
    Buffer.from(headers['paypal-transmission-sig'] || '', 'base64'),
  );
  if (!ok) {
    return NextResponse.json({ error: 'INVALID_SIGNATURE' }, { status: 401 });
  }
  // 时间窗口校验（PayPal 建议 5 分钟内）
  const t = Date.parse(headers['paypal-transmission-time'] || '');
  if (Number.isNaN(t) || Math.abs(Date.now() - t) > 300_000) {
    return NextResponse.json({ error: 'STALE' }, { status: 401 });
  }

  // ---- 签名有效，处理事件 ----
  let event: any;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'BAD_JSON' }, { status: 400 });
  }
  const eventType: string = event.event_type || '';
  const resource = event.resource || {};

  const db = getFirestore();
  if (!db) {
    return NextResponse.json({ error: 'FIRESTORE_NOT_CONFIGURED' }, { status: 500 });
  }

  // plan_id → pro/team
  const planPro = process.env.PAYPAL_PLAN_PRO || '';
  const planTeam = process.env.PAYPAL_PLAN_TEAM || '';
  const plan =
    resource.plan_id === planTeam ? ('team' as const) : resource.plan_id === planPro ? ('pro' as const) : null;

  const email: string = resource?.subscriber?.email_address || resource?.payer?.email_address || '';
  const subscriptionId: string = resource.id || '';

  const eventHandled = (() => {
    switch (eventType) {
      case 'BILLING.SUBSCRIPTION.ACTIVATED':
      case 'BILLING.SUBSCRIPTION.APPROVED': {
        if (!plan || !email) return false;
        return true;
      }
      case 'BILLING.SUBSCRIPTION.CANCELLED':
      case 'BILLING.SUBSCRIPTION.SUSPENDED':
      case 'BILLING.SUBSCRIPTION.EXPIRED': {
        if (!email) return false;
        return true;
      }
      default:
        return false;
    }
  })();

  if (!eventHandled) {
    // 未知/无关事件 → 200（PayPal 要求 webhook 快速返回，避免重试风暴）
    return NextResponse.json({ received: true, ignored: eventType });
  }

  try {
    const now = new Date();
    if (eventType === 'BILLING.SUBSCRIPTION.ACTIVATED' || eventType === 'BILLING.SUBSCRIPTION.APPROVED') {
      // 1) 生成 License Key
      const lic: LicenseInfo = generateLicenseKey(email, plan!);
      // 2) 写 Firestore
      await db.collection('subscriptions').doc(email).set(
        {
          email,
          plan: lic.plan,
          paypalSubscriptionId: subscriptionId,
          licenseKey: lic.key,
          licenseIssued: lic.issued,
          licenseExpires: lic.expires,
          status: 'active',
          createdAt: now.toISOString(),
          updatedAt: now.toISOString(),
        },
        { merge: true },
      );
      // 3) 自动发 Key 邮件（失败不阻断，记录 error）
      const mail = await sendLicenseEmail(lic, subscriptionId);
      if (!mail.ok) {
        await db.collection('subscriptions').doc(email).set(
          { mailError: mail.error || 'UNKNOWN', mailSentAt: null, updatedAt: now.toISOString() },
          { merge: true },
        );
      } else {
        await db.collection('subscriptions').doc(email).set(
          { mailError: null, mailSentAt: now.toISOString(), updatedAt: now.toISOString() },
          { merge: true },
        );
      }
    } else {
      // 取消 / 暂停 / 过期 → 标记失效
      const newStatus =
        eventType === 'BILLING.SUBSCRIPTION.CANCELLED'
          ? 'cancelled'
          : eventType === 'BILLING.SUBSCRIPTION.SUSPENDED'
            ? 'suspended'
            : 'expired';
      await db.collection('subscriptions').doc(email).set(
        { status: newStatus, paypalSubscriptionId: subscriptionId, updatedAt: now.toISOString() },
        { merge: true },
      );
    }
  } catch (e) {
    return NextResponse.json({ error: 'HANDLER_FAILED', detail: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }

  return NextResponse.json({ received: true, eventType });
}
