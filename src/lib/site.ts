// GitHub 身份：Codex Skin Studio 官方仓库（含官网 + 换肤引擎 + Release）
// 引擎来源：Fei-Away/Codex-Dream-Skin（MIT，见 engine/SOURCE.md）
export const GITHUB_URL = 'https://github.com/863683348';
export const REPO_URL = process.env.NEXT_PUBLIC_REPO_URL ?? 'https://github.com/863683348/codex-skin-studio';
export const RELEASE_URL = `${REPO_URL}/releases/latest`;
export const STAR_URL = `${REPO_URL}/stargazers`;

// 结账链接（Stripe 集成后填写）。留空时，付费方案 CTA 登录后提示"即将上线"。
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL ?? '';
