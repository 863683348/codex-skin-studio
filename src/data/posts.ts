// 博客文章数据——中英双语（SEO 资产）
export type BlogPost = {
  slug: string;
  date: string;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  content: { zh: string[]; en: string[] };
};

export const POSTS: BlogPost[] = [
  {
    slug: 'codex-skin-complete-guide',
    date: '2026-08-03',
    title: {
      zh: 'Codex 换肤完全指南：从安装到自定义主题',
      en: 'The Complete Codex Theming Guide: From Install to Custom Themes',
    },
    description: {
      zh: '一份完整的 Codex Skin Studio 使用指南，涵盖 Windows/macOS 安装、主题切换、背景自定义与一键恢复。',
      en: 'A complete guide to Codex Skin Studio: Windows/macOS install, switching themes, custom wallpapers, and one-click restore.',
    },
    content: {
      zh: [
        'Codex Skin Studio 通过 Chrome DevTools Protocol 在本机为 Codex 注入主题，全程不修改官方文件。本文带你走完从安装到自定义的每一步。',
        '第一步：安装。Windows 双击 Setup.exe 安装（无需管理员），macOS 拖入 Applications 后右键打开。前提是先装好 Microsoft Store 版或桌面版 Codex 并登录一次。',
        '第二步：启动。双击「Codex Skin Studio」快捷方式，托盘图标出现后右键即可看到主题菜单。默认主题「功夫女足」已内置，无需选择。',
        '第三步：切换主题。打开「主题库」子菜单，免费主题直接点击应用；PRO 主题需先在「激活 Pro…」输入 License Key。',
        '第四步：自定义背景。托盘「更换背景图」支持导入 16:9 的 jpg/png/webp，工具会自动把焦点调到右侧、左侧留出安全区。',
        '第五步：恢复。任何时候想回到官方外观，双击「完全恢复 Codex」或托盘里的恢复项，界面立即还原。',
        '想更进一步？你可以用任意主题的 theme.json 作为模板，改配色和文案，打造自己的专属风格。',
      ],
      en: [
        'Codex Skin Studio themes Codex locally via Chrome DevTools Protocol, without touching official files. Here is the full walkthrough.',
        'Step 1 — Install. On Windows, run Setup.exe (no admin needed). On macOS, drag to Applications and right-click Open. First install and sign into the Codex desktop app.',
        'Step 2 — Launch. Open the "Codex Skin Studio" shortcut; right-click the tray icon to see the theme menu. The default "Kung Fu Women\u2019s Football" theme is built in.',
        'Step 3 — Switch themes. Use the "Theme Library" submenu: free themes apply on click; PRO themes need a License Key via "Activate Pro...".',
        'Step 4 — Custom wallpaper. "Change Background" imports 16:9 jpg/png/webp, automatically focusing right and keeping a safe area on the left.',
        'Step 5 — Restore. Return to the official look anytime via "Fully Restore Codex" in the tray.',
        'Go further: use any theme.json as a template, tweak colors and copy, and craft your own signature style.',
      ],
    },
  },
  {
    slug: 'what-is-cdp-injection',
    date: '2026-08-01',
    title: {
      zh: '什么是 CDP 注入？为什么它比改文件更安全',
      en: 'What Is CDP Injection and Why It\u2019s Safer Than Editing Files',
    },
    description: {
      zh: '用大白话解释 CDP 注入的原理、安全边界，以及为什么它能在不破坏 Codex 的前提下自由换肤。',
      en: 'A plain-language explainer of CDP injection: how it works, its security boundary, and why theming without touching files is safer.',
    },
    content: {
      zh: [
        'CDP 是 Chrome DevTools Protocol 的缩写，是浏览器/Electron 应用暴露的调试协议。Codex 桌面端基于 Electron，因此也支持它。',
        'Codex Skin Studio 的工作原理：工具启动时在本机打开 Codex 的调试端口（只绑定 127.0.0.1），通过 WebSocket 连接渲染进程，把主题 CSS 注入到页面样式层。',
        '关键区别：改文件方案会直接修改 app.asar 或安装目录，更新即失效、还可能触发校验失败。CDP 注入是纯运行时操作——不碰磁盘、不碰签名、停止即恢复。',
        '安全边界：调试端口只监听本机回环地址，外部网络无法连接；主题包只允许 CSS 与图片，不允许 JavaScript，注入内容经过安全校验器检查。',
        '这就是为什么 12.8K+ 用户敢用它——不是因为它"魔法"，而是因为它把换肤限制在了最薄的样式层。',
      ],
      en: [
        'CDP stands for Chrome DevTools Protocol, the debugging protocol exposed by browsers and Electron apps. The Codex desktop app is Electron-based, so it speaks CDP.',
        'How Codex Skin Studio works: on launch it opens Codex\u2019s debug port locally (bound to 127.0.0.1 only), connects to the renderer over WebSocket, and injects theme CSS into the style layer.',
        'The key difference: file-based theming edits app.asar or install dirs — broken by every update and prone to integrity checks. CDP injection is purely runtime: no disk writes, no signature tampering, instant restore.',
        'Security boundary: the debug port listens on loopback only; theme packages allow CSS and images but no JavaScript, and injected content passes a safety validator.',
        'That is why 12.8K+ users trust it — not magic, just theming constrained to the thinnest layer possible.',
      ],
    },
  },
  {
    slug: 'build-your-own-theme',
    date: '2026-07-28',
    title: {
      zh: '自己动手：十分钟做出第一款主题',
      en: 'DIY: Build Your First Theme in Ten Minutes',
    },
    description: {
      zh: '用 theme.json 做模板，改 6 个颜色变量 + 换一张背景图，就能拥有专属 Codex 主题。',
      en: 'Use theme.json as a template — change 6 color variables, swap a wallpaper, and you own a custom Codex theme.',
    },
    content: {
      zh: [
        '每款主题的核心是一个 theme.json。它定义了背景色、面板色、主色、副色、文字色等变量，以及背景图焦点位置。',
        '准备：复制任意内置主题目录，改个新 id（形如 preset-my-style）。找到 colors 区块，背景/面板/主色/副色/文字这 6 个值就是全局视觉的骨架。',
        '换背景：放一张 16:9 的 jpg 到目录里，把 image 字段指向它，再设置 art.focusX 控制焦点（0.7 左右适合左侧留白给侧栏）。',
        '验证：用托盘「导入主题 ZIP…」导入，或用工具自带的 CSS 安全校验器检查，确保没有非法内容。',
        '提示：深色主题里文字色和面板色对比度要足够；焦点放右侧通常观感最好，因为 Codex 侧栏在左。',
      ],
      en: [
        'Every theme is driven by a theme.json: background, panel, accent, secondary, and text colors, plus wallpaper focus geometry.',
        'Setup: copy any built-in theme folder and give it a new id (e.g. preset-my-style). The colors block — bg/panel/accent/secondary/text — is the skeleton of the whole look.',
        'Wallpaper: drop a 16:9 jpg into the folder, point the image field at it, and set art.focusX to around 0.7 to keep the left clear for the sidebar.',
        'Validate: import it via the tray\u2019s "Import Theme ZIP..." or run the bundled CSS safety validator to ensure nothing illegal slipped in.',
        'Tips: keep enough contrast between text and panel in dark themes; right-side focus usually looks best because the Codex sidebar sits on the left.',
      ],
    },
  },
];
