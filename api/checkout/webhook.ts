import type { VercelRequest, VercelResponse } from '@vercel/node';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!stripeSecretKey) {
    return res.status(503).json({ error: 'STRIPE_NOT_CONFIGURED' });
  }

  try {
    const Stripe = await import('stripe');
    const stripe = new Stripe.default(stripeSecretKey, {
      apiVersion: '2026-06-24.dahlia',
    });

    // 验证 webhook 签名
    const sig = req.headers['stripe-signature'] as string | undefined;
    let event;
    if (webhookSecret && sig) {
      const buf = Buffer.from(JSON.stringify(req.body));
      try {
        event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
      } catch {
        return res.status(400).json({ error: 'Invalid signature' });
      }
    } else {
      // 没有配置 webhook secret 时直接使用 body（仅开发调试用）
      event = req.body;
    }

    // 处理 checkout.session.completed 事件
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const userId = session.metadata?.userId ?? session.client_reference_id;

      if (userId) {
        // 这里执行支付成功后的逻辑，例如：
        // - 用 Firebase Admin SDK 为用户添加 custom claim
        // - 或写入 Firestore 记录用户订阅状态
        // 因为当前项目是静态站点，建议后续在 webhook 中集成 Firebase Admin
        console.log(`Payment completed for user: ${userId}, session: ${session.id}`);
      }

      console.log(`Checkout session completed: ${session.id}`);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
}
