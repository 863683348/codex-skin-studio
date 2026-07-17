// 注：本站 GitHub 链接指向用户自有 GitHub 账号（用户提供：https://github.com/863683348）。
// 若日后创建了具体仓库（如 codex-skin-studio），可改为该仓库 URL。
export const GITHUB_URL = 'https://github.com/863683348';
export const RELEASE_URL = `${GITHUB_URL}?tab=repositories`;

// 结账链接（Stripe 集成后填写）。留空时，付费方案 CTA 登录后提示“即将上线”。
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL ?? '';
