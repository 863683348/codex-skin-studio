// 服务端邮件发送（Gmail SMTP / nodemailer）
// env: GMAIL_USER / GMAIL_APP_PASSWORD（应用专用密码）/ GMAIL_SMTP_HOST(可选)
import nodemailer from 'nodemailer';
import { generateLicenseKey, type LicenseInfo } from './license-server';

let transporter: nodemailer.Transporter | null = null;

export function getTransporter() {
  if (transporter) return transporter;
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  transporter = nodemailer.createTransport({
    host: process.env.GMAIL_SMTP_HOST || 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });
  return transporter;
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildHtml(lic: LicenseInfo, subscriptionId?: string) {
  const planLabel = lic.plan === 'team' ? 'Team' : 'Pro';
  const subLine = subscriptionId
    ? `<p style="margin:4px 0 0;font-size:13px;color:#666;">Subscription ID: ${esc(subscriptionId)}</p>`
    : '';
  const supportEmail = esc(process.env.GMAIL_USER || 'ahmedlzany423@gmail.com');
  return `<!DOCTYPE html>
<html lang="zh-CN"><body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:24px 0;">
<tr><td align="center">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">
    <tr><td style="background:#1e1e1e;padding:20px 28px;">
      <span style="color:#f5f0e6;font-size:20px;font-weight:bold;letter-spacing:1px;">CODEX SKIN STUDIO</span>
    </td></tr>
    <tr><td style="padding:28px;">
      <h1 style="margin:0 0 8px;font-size:20px;color:#222;">Your ${planLabel} License Key</h1>
      <p style="margin:0 0 4px;font-size:14px;color:#555;">感谢订阅！Here is your License Key for <b>${planLabel}</b>.</p>
      <p style="margin:0 0 20px;font-size:14px;color:#555;">这是你的 <b>${planLabel}</b> 授权密钥。</p>
      <div style="background:#f7f7f7;border:1px dashed #ccc;border-radius:8px;padding:16px 20px;text-align:center;margin-bottom:20px;">
        <div style="font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">License Key</div>
        <div style="font-family:'Courier New',Courier,monospace;font-size:16px;font-weight:bold;color:#1a1a1a;word-break:break-all;">${esc(lic.key)}</div>
      </div>
      <h2 style="font-size:14px;color:#222;margin:20px 0 8px;">How to activate / 如何激活</h2>
      <ol style="margin:0;padding-left:20px;font-size:13px;color:#444;line-height:1.9;">
        <li>Open <b>Codex Skin Studio</b> tray menu (托盘图标) — 打开托盘</li>
        <li>Choose <b>Theme Library</b> then <b>Activate Pro...</b> — 选择「主题库 → 激活 Pro…」</li>
        <li>Paste the key above — 粘贴上面的密钥，10 款 PRO 主题即刻解锁</li>
      </ol>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;border-top:1px solid #eee;padding-top:14px;font-size:13px;color:#666;">
        <tr><td style="padding:2px 0;">Plan / 方案: <b>${planLabel}</b></td></tr>
        <tr><td style="padding:2px 0;">Email / 邮箱: <b>${esc(lic.email)}</b></td></tr>
        <tr><td style="padding:2px 0;">Issued / 签发: ${esc(lic.issued)} &nbsp;·&nbsp; Expires / 有效期至: ${esc(lic.expires)}</td></tr>
        ${subLine}
      </table>
      <p style="margin-top:20px;font-size:12px;color:#999;line-height:1.7;">
        Questions? Contact <a href="mailto:${supportEmail}" style="color:#185FA5;">${supportEmail}</a>
        <br/>如有问题请联系：<a href="mailto:${supportEmail}" style="color:#185FA5;">${supportEmail}</a>
      </p>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
}

export async function sendLicenseEmail(
  lic: LicenseInfo,
  subscriptionId?: string,
): Promise<{ ok: boolean; error?: string; messageId?: string }> {
  const tr = getTransporter();
  if (!tr) return { ok: false, error: 'GMAIL_NOT_CONFIGURED' };
  const user = process.env.GMAIL_USER!;
  const planLabel = lic.plan === 'team' ? 'Team' : 'Pro';
  try {
    const info = await tr.sendMail({
      from: `Codex Skin Studio <${user}>`,
      to: lic.email,
      subject: `Your Codex Skin Studio ${planLabel} License Key`,
      html: buildHtml(lic, subscriptionId),
    });
    return { ok: true, messageId: info.messageId };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

export { generateLicenseKey };
