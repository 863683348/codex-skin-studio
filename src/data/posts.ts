// 博客文章数据——中英双语（SEO 资产）
export type PostBlock =
  | string
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | { type: 'cta'; text: string; href: string };

export type BlogPost = {
  slug: string;
  date: string;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  content: { zh: PostBlock[]; en: PostBlock[] };
};

export const POSTS: BlogPost[] = [
  {
    slug: 'what-is-codex-skin-studio',
    date: '2026-08-04',
    title: {
      zh: '什么是 Codex Skin Studio？CDP 注入换肤入门',
      en: 'What Is Codex Skin Studio? A Beginner\'s Guide to CDP Injection Theming',
    },
    description: {
      zh: '用大白话解释 Codex Skin Studio 是什么、CDP 注入如何让你在不修改官方文件的情况下换肤。',
      en: 'A plain-language intro to Codex Skin Studio: what it is, how CDP injection lets you theme Codex without touching official files.',
    },
    content: {
      zh: [
        'Codex Skin Studio 是一款面向 Codex 桌面端的换肤工具，它通过 Chrome DevTools Protocol（CDP）在本机运行时为 Codex 注入主题样式，全程不修改官方安装目录下的任何文件。',
        { type: 'h2', text: '为什么用 CDP 注入而不是改文件？' },
        '传统换肤通常需要编辑 app.asar 或官方资源，每次 Codex 升级都会被覆盖，还可能触发签名校验失败。CDP 注入则是运行时操作，停止工具后界面立即恢复，安全边界更清晰。',
        {
          type: 'ul',
          items: [
            '不修改官方文件：升级后主题依然有效，无需重装',
            '随时一键恢复：停止工具即回到官方界面',
            '更安全：主题包只含 CSS 与图片，不允许 JavaScript',
          ],
        },
        { type: 'h2', text: '工作原理：本地调试端口的妙用' },
        'Codex 桌面端基于 Electron，启动时会在本地开放一个调试端口。Codex Skin Studio 连接这个端口（仅绑定 127.0.0.1），通过 WebSocket 把主题 CSS 和背景图片注入到渲染进程，实现整体视觉变化。',
        { type: 'h2', text: '三步上手' },
        {
          type: 'ul',
          items: [
            '下载安装工具（Windows / macOS）',
            '在主题库选一款主题（如「浪漫玫瑰」或「红白科幻」）点击应用',
            '打开 Codex 即可看到效果；想恢复就右键托盘选择「完全恢复 Codex」',
          ],
        },
        { type: 'h2', text: '主题与价格' },
        '免费版内置 8 款精选主题，涵盖粉系、科幻、暗黑、清新等风格；Pro 版解锁无限自定义配色和背景图，适合打造专属视觉。',
        { type: 'h2', text: '安全与合规' },
        '主题包只包含 CSS 和图片资源，不允许 JavaScript；工具在注入前会走安全校验。这与传统改文件方案最大的区别在于：没有改动官方文件，也就不存在被官方更新破坏的问题。',
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Codex 升级后我的主题会失效吗？', a: '不会。Codex Skin Studio 不改动任何官方文件，升级后主题依然可以正常应用。' },
            { q: '换肤会影响 Codex 的功能或性能吗？', a: '不会。注入的只有 CSS 和背景图片，不涉及逻辑代码，对模型能力、回答质量、任务执行均无影响。' },
            { q: '如何完全恢复到官方界面？', a: '右键托盘图标，选择「完全恢复 Codex」，界面立即还原，无需卸载重装。' },
          ],
        },
        { type: 'h2', text: '从今天开始给你的 Codex 换个皮肤' },
        '无论你是追求效率的开发者，还是想让工作台更有个人风格的创作者，Codex Skin Studio 都能在几分钟内让你的 Codex 焕然一新。',
        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },
      ],
      en: [
        'Codex Skin Studio is a theming tool for the Codex desktop app. It uses Chrome DevTools Protocol (CDP) to inject theme styles locally at runtime, without changing any official installation files.',
        { type: 'h2', text: 'Why CDP Injection Instead of Editing Files?' },
        'Traditional theming usually requires editing app.asar or official resources, which gets overwritten by every Codex update and can trigger signature checks. CDP injection is a runtime-only operation: stop the tool and the UI instantly reverts, with a clearer safety boundary.',
        {
          type: 'ul',
          items: [
            'No official files touched: themes survive Codex updates',
            'One-click restore: stop the tool and the UI reverts instantly',
            'Safer by design: theme packages contain only CSS and images, no JavaScript',
          ],
        },
        { type: 'h2', text: 'How It Works: The Local Debug Port' },
        'The Codex desktop app is Electron-based and opens a local debug port on launch. Codex Skin Studio connects to this port (bound to 127.0.0.1 only) and injects theme CSS and wallpaper images into the renderer process over WebSocket, changing the entire look.',
        { type: 'h2', text: 'Get Started in Three Steps' },
        {
          type: 'ul',
          items: [
            'Download and install the tool (Windows / macOS)',
            'Pick a theme from the gallery (like "Romantic Rose" or "Red Sci-Fi") and click apply',
            'Open Codex to see the result; to revert, right-click the tray icon and choose "Fully Restore Codex"',
          ],
        },
        { type: 'h2', text: 'Themes & Pricing' },
        'The free tier ships with 8 curated themes covering pink, sci-fi, dark, and clean aesthetics. Pro unlocks unlimited custom colors and wallpapers for a signature visual.',
        { type: 'h2', text: 'Safety & Compliance' },
        'Theme packages contain only CSS and image assets — no JavaScript is allowed. The tool runs a safety validator before injection. Because no official files are ever modified, official updates can never break your skin.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Will my theme break after a Codex update?', a: 'No. Codex Skin Studio never touches official files, so themes keep working across updates.' },
            { q: 'Does theming affect Codex functionality or performance?', a: 'No. Only CSS and wallpaper images are injected — no logic code — so model capability, answer quality, and task execution are unaffected.' },
            { q: 'How do I fully restore the official UI?', a: 'Right-click the tray icon and choose "Fully Restore Codex". The UI reverts instantly — no uninstall or reinstall needed.' },
          ],
        },
        { type: 'h2', text: 'Give Your Codex a Fresh Look Today' },
        'Whether you are a productivity-focused developer or a creator who wants a personal touch, Codex Skin Studio can transform your Codex in minutes.',
        { type: 'cta', text: 'Browse the Theme Gallery →', href: '/en/gallery' },
      ],
    },
  },
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
  {
    slug: 'how-to-install-codex-skin-studio-macos',
    date: '2026-08-05',
    title: {
      zh: 'macOS 安装 Codex Skin Studio 完整教程',
      en: 'How to Install Codex Skin Studio on macOS',
    },
    description: {
      zh: '在 macOS 上三步装好 Codex Skin Studio：下载 → 启动注入 → 选皮肤。含"无法打开"等常见问题解决。',
      en: 'Three steps to install Codex Skin Studio on macOS: download, launch injection, pick a skin. Covers "cannot be opened" and other common issues.',
    },
    content: {
      zh: [
        '在 macOS 上安装 Codex Skin Studio，把 OpenAI Codex 桌面端换成你喜欢的皮肤——只需三步：下载安装包 → 启动注入 → 选皮肤。',
        { type: 'h2', text: '安装前准备' },
        {
          type: 'ul',
          items: [
            'macOS（M 芯片或 Intel 均可）',
            '已安装 OpenAI Codex 桌面端',
            '磁盘空间约 200MB',
          ],
        },
        { type: 'h2', text: '三步安装' },
        { type: 'h2', text: '第 1 步：下载' },
        '打开 codex-skin-studio.shop → 点「下载 macOS 版」→ 得到安装包（.dmg 或 .zip）。',
        { type: 'h2', text: '第 2 步：安装' },
        '双击打开 → 拖到 Applications 文件夹（或按提示运行安装脚本）。首次打开若提示"未识别的开发者"，到 系统设置 → 隐私与安全性 → 点「仍要打开」。',
        { type: 'h2', text: '第 3 步：启动 + 选皮肤' },
        '打开 Codex Skin Studio → 点「启动注入」→ 自动连接 Codex 桌面端 → 在皮肤库选一款（浪漫玫瑰 / 财神 / 红白科幻 / 清透定制…）→ 立即生效。',
        { type: 'h2', text: '常见问题' },
        {
          type: 'ul',
          items: [
            '提示"无法打开"：到 系统设置 → 隐私与安全性 → 仍要打开。macOS 对未公证的应用会拦截，这是正常流程。',
            '装完没效果：确认 Codex 桌面端已完全退出再启动注入；或重启 Codex。',
            '会改 Codex 官方文件吗：不会——用 CDP 注入主题，不改官方文件，卸载即还原。',
            'M 芯片有兼容问题吗：已适配 Apple Silicon；如有问题到官网反馈。',
          ],
        },
        { type: 'cta', text: '免费下载 macOS 版', href: 'https://codex-skin-studio.shop' },
      ],
      en: [
        'Installing Codex Skin Studio on macOS to theme your OpenAI Codex desktop app takes three steps: download, launch injection, pick a skin.',
        { type: 'h2', text: 'Before you start' },
        {
          type: 'ul',
          items: [
            'macOS (Apple Silicon or Intel)',
            'OpenAI Codex desktop app installed',
            '~200MB free disk space',
          ],
        },
        { type: 'h2', text: 'Three steps' },
        { type: 'h2', text: 'Step 1: Download' },
        'Open codex-skin-studio.shop → click "Download for macOS" → get the installer (.dmg or .zip).',
        { type: 'h2', text: 'Step 2: Install' },
        'Double-click → drag to Applications (or run the setup script). If macOS warns "unidentified developer", go to System Settings → Privacy & Security → "Open Anyway".',
        { type: 'h2', text: 'Step 3: Launch + pick a skin' },
        'Open Codex Skin Studio → click "Start injection" → it connects to the Codex desktop app → pick a skin (Romantic Rose / Fortune God / Red Sci-Fi / Clear Custom...) → applies instantly.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'ul',
          items: [
            '"Cannot be opened"? Go to System Settings → Privacy & Security → Open Anyway. macOS blocks unnotarized apps; this is normal.',
            'No effect after install? Fully quit Codex before starting injection; or restart Codex.',
            'Does it modify official Codex files? No — themes are injected via CDP; nothing official is changed. Uninstall restores the original.',
            'Apple Silicon issues? Optimized for Apple Silicon; report issues on the site.',
          ],
        },
        { type: 'cta', text: 'Download for macOS free', href: 'https://codex-skin-studio.shop' },
      ],
    },
  },
];