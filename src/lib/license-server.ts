// 服务端 License Key 生成（HMAC-SHA256）
// 必须与客户端 engine/windows/scripts/license-dream-skin.ps1 内嵌的 secret 一致
// env LICENSE_HMAC_SECRET 可覆盖（覆盖时必须同步改客户端 ps1）
import crypto from 'crypto';

const CLIENT_SECRET = 'CSS1:a7c3e91d4f6b2a8e5c0d9f3b7a1e6c4d8f2b5a0e9c3d7f1b4a8e6c2d0f5b9a3e7c';
const SECRET = process.env.LICENSE_HMAC_SECRET || CLIENT_SECRET;

export function b64url(buf: Buffer) {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function dateStr(d = new Date()) {
  return (
    d.getFullYear().toString() +
    String(d.getMonth() + 1).padStart(2, '0') +
    String(d.getDate()).padStart(2, '0')
  );
}

export type LicenseInfo = {
  key: string;
  email: string;
  plan: 'pro' | 'team';
  issued: string;
  expires: string;
};

export function generateLicenseKey(email: string, plan: 'pro' | 'team', days = 365): LicenseInfo {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error('invalid email');
  if (!['pro', 'team'].includes(plan)) throw new Error('plan must be pro|team');
  const today = new Date();
  const issued = dateStr(today);
  const payload = `${email}|${plan}|${issued}`;
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('hex').slice(0, 24);
  const key = `CSS1-${sig}-${b64url(Buffer.from(payload, 'utf8'))}`;
  const expires = new Date(today.getTime() + days * 86400000).toISOString().slice(0, 10);
  return { key, email, plan, issued, expires };
}

export function verifyLicenseKey(key: string) {
  const m = /^CSS1-([0-9a-f]{24})-([A-Za-z0-9_-]+)$/.exec(key);
  if (!m) return { valid: false as const, reason: 'BAD_FORMAT' };
  const b64p = m[2].replace(/-/g, '+').replace(/_/g, '/');
  const payload = Buffer.from(b64p, 'base64').toString('utf8');
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('hex').slice(0, 24);
  if (sig !== m[1]) return { valid: false as const, reason: 'SIG_MISMATCH' };
  const [email, plan, issued] = payload.split('|');
  const expires = new Date(
    Number(issued.slice(0, 4)),
    Number(issued.slice(4, 6)) - 1,
    Number(issued.slice(6, 8)),
  );
  expires.setDate(expires.getDate() + 365);
  return {
    valid: true as const,
    email,
    plan: plan as 'pro' | 'team',
    issued,
    expires: expires.toISOString().slice(0, 10),
    expired: new Date() > expires,
  };
}
