// GitHub 身份：当前指向用户自有账号（用户提供：https://github.com/863683348）。
// 建议在 GitHub 上创建具体仓库（如 codex-skin-studio）后，设置环境变量
// NEXT_PUBLIC_REPO_URL 指向该仓库
// （例如 https://github.com/863683348/codex-skin-studio），
// 以便「查看 GitHub / Star」等链接指向可审计的真实仓库，提升 E-E-A-T 与下载信任度。
export const GITHUB_URL = 'https://github.com/863683348';
export const REPO_URL = process.env.NEXT_PUBLIC_REPO_URL ?? GITHUB_URL;
export const RELEASE_URL = `${GITHUB_URL}?tab=repositories`;
export const STAR_URL = `${REPO_URL}/stargazers`;

// 结账链接（Stripe 集成后填写）。留空时，付费方案 CTA 登录后提示“即将上线”。
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL ?? '';
