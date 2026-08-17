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
  {
    slug: 'how-to-install-codex-skin-studio-windows',
    date: '2026-08-06',
    title: {
      zh: 'Windows 安装 Codex Skin Studio 完整教程',
      en: 'How to Install Codex Skin Studio on Windows',
    },
    description: {
      zh: '在 Windows 上三步装好 Codex Skin Studio：下载 → 启动注入 → 选皮肤。含 SmartScreen 拦截、杀毒软件误报等 Windows 专属问题解决。',
      en: 'Three steps to install Codex Skin Studio on Windows: download, launch injection, pick a skin. Covers SmartScreen warnings and antivirus false positives.',
    },
    content: {
      zh: [
        '在 Windows 上安装 Codex Skin Studio，给 OpenAI Codex 桌面端换皮肤——三步完成：下载安装包 → 启动注入 → 选皮肤。本教程覆盖 Windows 专属的 SmartScreen、杀软误报等问题。',
        { type: 'h2', text: '安装前准备' },
        {
          type: 'ul',
          items: [
            'Windows 10 / 11（64 位）',
            '已安装 OpenAI Codex 桌面端',
            '磁盘空间约 200MB',
          ],
        },
        { type: 'h2', text: '三步安装' },
        { type: 'h2', text: '第 1 步：下载' },
        '打开 codex-skin-studio.shop → 点「下载 Windows 版」→ 得到安装包（.exe 或 .zip）。',
        { type: 'h2', text: '第 2 步：安装' },
        '双击运行安装程序 → 按提示完成安装（默认安装在 Program Files）。若出现蓝色 SmartScreen 提示"Windows 已保护你的电脑"→ 点「更多信息」→「仍要运行」：这是因为安装包尚未获得微软代码签名证书，属正常流程。',
        { type: 'h2', text: '第 3 步：启动 + 选皮肤' },
        '打开 Codex Skin Studio → 点「启动注入」→ 自动连接 Codex 桌面端 → 在皮肤库选一款（浪漫玫瑰 / 财神 / 红白科幻 / 清透定制…）→ 立即生效。',
        { type: 'h2', text: '常见问题' },
        {
          type: 'ul',
          items: [
            'SmartScreen 拦截：点「更多信息 → 仍要运行」。未签名安装包被拦截是 Windows 默认策略。',
            '杀毒软件报毒/误报：主题注入只读本地进程，不联网不改官方文件；可在杀软中加白名单（教程见官网 FAQ）。',
            '装完没效果：确认 Codex 桌面端已完全退出再启动注入；或重启 Codex。',
            '会改 Codex 官方文件吗：不会——用 CDP 注入主题，不改官方文件，卸载即还原。',
            'Windows 7 支持吗：不支持，需要 Windows 10/11 64 位。',
          ],
        },
        { type: 'cta', text: '免费下载 Windows 版', href: 'https://codex-skin-studio.shop' },
      ],
      en: [
        'Installing Codex Skin Studio on Windows to theme your OpenAI Codex desktop app takes three steps: download, launch injection, pick a skin. This guide also covers Windows-specific SmartScreen and antivirus issues.',
        { type: 'h2', text: 'Before you start' },
        {
          type: 'ul',
          items: [
            'Windows 10 / 11 (64-bit)',
            'OpenAI Codex desktop app installed',
            '~200MB free disk space',
          ],
        },
        { type: 'h2', text: 'Three steps' },
        { type: 'h2', text: 'Step 1: Download' },
        'Open codex-skin-studio.shop → click "Download for Windows" → get the installer (.exe or .zip).',
        { type: 'h2', text: 'Step 2: Install' },
        'Run the installer and follow the prompts (defaults to Program Files). If SmartScreen shows "Windows protected your PC" → click "More info" → "Run anyway". The installer is not yet Microsoft code-signed, so this is a normal step.',
        { type: 'h2', text: 'Step 3: Launch + pick a skin' },
        'Open Codex Skin Studio → click "Start injection" → it connects to the Codex desktop app → pick a skin (Romantic Rose / Fortune God / Red Sci-Fi / Clear Custom...) → applies instantly.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'ul',
          items: [
            'SmartScreen warning? Click "More info" → "Run anyway". Unsigned installers are blocked by default on Windows.',
            'Antivirus false positive? Injection only reads the local process — no network, no official file changes. Add an exception if needed (see FAQ on the site).',
            'No effect after install? Fully quit Codex before starting injection; or restart Codex.',
            'Does it modify official Codex files? No — themes are injected via CDP; nothing official is changed. Uninstall restores the original.',
            'Windows 7 support? No — requires Windows 10/11 64-bit.',
          ],
        },
        { type: 'cta', text: 'Download for Windows free', href: 'https://codex-skin-studio.shop' },
      ],
    },
  },
  {
    slug: 'codex-skin-theme-troubleshooting-guide',
    date: '2026-08-06',
    title: {
      zh: 'Codex Skin Studio 主题排错指南：注入后没反应、报错、卡顿怎么办',
      en: 'Codex Skin Studio Theme Troubleshooting Guide: No Effect, Errors, or Lag',
    },
    description: {
      zh: '换上主题后界面没变化、Windows 报 SmartScreen、杀软误报、注入后卡顿？这篇排错指南按症状分类，给出可立即执行的修复步骤。',
      en: 'Theme not applying, SmartScreen warning, antivirus false positive, or lag after injection? This troubleshooting guide sorts issues by symptom with steps you can run now.',
    },
    content: {
      zh: [
        '换上主题后界面没变化、Windows 弹出 SmartScreen、杀软误报、注入后卡顿——这些是 Codex Skin Studio 用户最常遇到的问题。本文按症状分类，给出可立即执行的修复步骤，无需重装。',
        { type: 'h2', text: '注入后界面没有任何变化' },
        { type: 'ul', items: [
          '确认已完全退出 Codex：任务栏图标右键退出，而不只是关闭窗口',
          '重新点击主题库里的「应用主题」按钮',
          '检查本机调试端口是否被其他调试工具占用',
          '重启 Codex Skin Studio 后再注入一次',
        ] },
        { type: 'h2', text: 'Windows 弹出 SmartScreen 警告' },
        { type: 'ul', items: [
          '点击「更多信息」→「仍要运行」即可继续',
          '未签名的安装包默认会被系统拦截，这是正常的安全提示，不是病毒',
          '如需彻底消除，可对安装包做代码签名后再分发',
        ] },
        { type: 'h2', text: '杀毒软件误报' },
        { type: 'ul', items: [
          'CDP 注入只读取本机进程，无网络请求、不修改官方文件',
          '在杀软中将工具目录加入白名单（详见站点 FAQ）',
          '若仍不放心，可改用免安装版，解压即用',
        ] },
        { type: 'h2', text: '注入后 Codex 卡顿或闪烁' },
        { type: 'ul', items: [
          '降低背景图分辨率，超大图片会拖慢渲染',
          '关闭动态模糊等重特效',
          '先换用轻量主题验证注入链路是否正常',
        ] },
        { type: 'h2', text: '升级 Codex 后主题失效' },
        { type: 'ul', items: [
          'CDP 注入是运行时操作，升级后需重新应用',
          '它不修改官方文件，因此升级不会破坏主题',
          '重新点一次「应用」即可恢复效果',
        ] },
        { type: 'h2', text: 'macOS 上主题不生效' },
        { type: 'ul', items: [
          '确认已授予辅助功能与屏幕录制权限',
          '完全退出 Codex 再注入',
          '检查是否同时运行了多个 Codex 实例',
        ] },
        { type: 'h2', text: '常见问题 FAQ' },
        { type: 'faq', items: [
          { q: '它会修改官方 Codex 文件吗？', a: '不会。主题通过 CDP 注入本机渲染进程，停止工具后即恢复，全程不触碰官方安装目录。' },
          { q: '卸载后会残留吗？', a: '无残留。工具不写注册表、不改系统文件，删除目录即可彻底移除。' },
          { q: '支持哪些系统？', a: 'Windows 10/11 64 位与 macOS 12 及以上。' },
          { q: '主题能多人共享吗？', a: '可以。主题包只是 CSS 与图片，发给同事即可直接应用。' },
        ] },
        { type: 'cta', text: '下载免费版试用', href: 'https://codex-skin-studio.shop' },
      ],
      en: [
        'No visual change after applying a theme, a SmartScreen warning on Windows, an antivirus false positive, or lag after injection are the most common issues Codex Skin Studio users hit. This guide groups fixes by symptom with steps you can run immediately, no reinstall required.',
        { type: 'h2', text: 'No visual change after injection' },
        { type: 'ul', items: [
          'Make sure Codex is fully quit: right-click the tray icon and exit, do not just close the window',
          'Click the Apply button on the theme in the library again',
          'Check whether the local debug port is occupied by another debugging tool',
          'Restart Codex Skin Studio and inject once more',
        ] },
        { type: 'h2', text: 'Windows shows a SmartScreen warning' },
        { type: 'ul', items: [
          'Click More info then Run anyway to continue',
          'Unsigned installers are blocked by default; this is a normal safety prompt, not a virus',
          'For a clean distribution, code-sign the installer before sharing',
        ] },
        { type: 'h2', text: 'Antivirus false positive' },
        { type: 'ul', items: [
          'CDP injection only reads the local process: no network, no official file changes',
          'Add the tool folder to your antivirus allowlist (see the site FAQ)',
          'If still uneasy, use the portable build that runs without installation',
        ] },
        { type: 'h2', text: 'Codex lags or flickers after injection' },
        { type: 'ul', items: [
          'Lower the background image resolution; oversized images slow rendering',
          'Disable heavy effects such as dynamic blur',
          'Try a lightweight theme first to confirm the injection path works',
        ] },
        { type: 'h2', text: 'Theme stops working after a Codex update' },
        { type: 'ul', items: [
          'CDP injection is a runtime operation, so re-apply after an update',
          'It does not modify official files, so updates cannot break the theme',
          'Click Apply once to restore the look',
        ] },
        { type: 'h2', text: 'Theme not applying on macOS' },
        { type: 'ul', items: [
          'Confirm Accessibility and Screen Recording permissions are granted',
          'Fully quit Codex before injecting',
          'Check for multiple running Codex instances',
        ] },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'faq', items: [
          { q: 'Does it modify official Codex files?', a: 'No. Themes inject via CDP into the local render process and revert on stop; official install directories are never touched.' },
          { q: 'Any leftovers after uninstall?', a: 'None. The tool writes no registry keys and changes no system files; delete the folder to remove it fully.' },
          { q: 'Which systems are supported?', a: 'Windows 10/11 64-bit and macOS 12 or later.' },
          { q: 'Can themes be shared?', a: 'Yes. A theme is just CSS and images, so you can send it to a colleague and they can apply it directly.' },
        ] },
        { type: 'cta', text: 'Download the free build', href: 'https://codex-skin-studio.shop' },
      ],
    },
  },
  {
    slug: 'romantic-rose-theme-guide',
    date: '2026-08-07',
    title: {
      zh: '浪漫玫瑰主题详解：粉色美学指南',
      en: 'Romantic Rose Theme Explained: A Pink Aesthetic Guide',
    },
    description: {
      zh: '浪漫玫瑰是 Codex Skin Studio 最受欢迎的粉系主题：玫瑰粉、奶油白与柔和灰的配色逻辑，为什么粉色主题对暗色模式友好，以及它适合谁。',
      en: 'The Romantic Rose theme is Codex Skin Studio\'s most-loved pink preset. This guide covers the rose-pink palette logic, why pink works in dark mode, and who it fits best.',
    },
    content: {
      zh: [
        '浪漫玫瑰是 Codex Skin Studio 主题库里人气最高的粉系主题，也是很多人第一次给 Codex 换肤时选的那一款。它不只是一层粉色皮肤，配色里其实有讲究：玫瑰粉负责氛围，奶油白负责留白，柔灰负责代码可读性。这篇把它的设计逻辑讲清楚，顺便聊聊粉色主题在暗色模式里为什么意外地好用。',
        { type: 'h2', text: '浪漫玫瑰的配色逻辑' },
        {
          type: 'ul',
          items: [
            '背景：深酒红偏黑的底色，不是亮粉——长时间盯代码不刺眼',
            '主色：玫瑰粉与豆沙粉，用于按钮、高亮和活动状态',
            '文字：奶油白与浅灰，保证对比度足够读代码',
            '代码语义色：柔和粉紫与暖黄，字符串和关键字一眼可分',
          ],
        },
        '一句话总结：氛围交给粉色，可读性交给灰白。这也是它和"纯粉色壁纸"类主题最大的区别。',
        { type: 'h2', text: '为什么粉色主题在暗色模式里好用' },
        '很多人担心粉色伤眼，实际恰恰相反。浪漫玫瑰的底不是纯黑而是深酒红，比纯黑底的蓝光更少；粉色作为强调色出现在按钮和光标上，不会整屏铺满。对晚上写代码的人来说，这种"暖暗色"比冷黑底更容易入睡。',
        { type: 'h2', text: '它适合谁' },
        {
          type: 'ul',
          items: [
            '想要工作区有个人风格、又不想影响可读性的开发者',
            '喜欢粉色/温柔系审美的设计师与创作者',
            '拍桌面分享、录屏时想让画面更有辨识度的人',
            '重度暗色模式用户，想换个比纯黑更柔和的底色',
          ],
        },
        { type: 'h2', text: 'Codex 主题推荐：按心情选' },
        '如果你在几款主题之间犹豫，按场景选最省事：写代码求专注选浪漫玫瑰（暖暗色、低干扰）；喜欢科幻感选红白科幻；想要喜庆氛围选财神；追求极简通透选清透定制。所有主题都在主题库里一键套用，不满意随时换。',
        { type: 'h2', text: '如何换上浪漫玫瑰' },
        '打开 Codex Skin Studio → 启动注入 → 主题库 → 选「浪漫玫瑰」→ 立即生效。想恢复官方界面，右键托盘选「完全恢复 Codex」即可，不残留任何改动。',
        { type: 'h2', text: '常见问题' },
        {
          type: 'faq',
          items: [
            { q: '浪漫玫瑰会改 Codex 官方文件吗？', a: '不会。它和其他主题一样通过 CDP 在运行时注入，停止工具即还原，官方安装目录零改动。' },
            { q: '粉色主题看代码久了会累吗？', a: '浪漫玫瑰的底是深酒红而非亮粉，强调色只用在按钮和光标上，长时间阅读的负担比纯黑底更小。' },
            { q: '主题库里的浪漫玫瑰免费吗？', a: '免费版包含浪漫玫瑰在内的 8 款精选主题；Pro 解锁自定义配色与背景图。' },
          ],
        },
        { type: 'cta', text: '去主题库看看', href: 'https://codex-skin-studio.shop/zh/gallery' },
      ],
      en: [
        'The Romantic Rose theme is the most-loved pink preset in the Codex Skin Studio library, and for many people it is the first skin they ever put on Codex. It is more than a pink coat of paint, though. The palette is doing quiet work: rose pink carries the mood, cream white handles the whitespace, and soft gray keeps the code readable. This guide explains the design logic, and why pink themes turn out to be surprisingly good in dark mode.',
        { type: 'h2', text: 'The Romantic Rose palette, decoded' },
        {
          type: 'ul',
          items: [
            'Background: a deep wine-dark base, not bright pink — easy on the eyes for long sessions',
            'Primary: rose and dusty pink for buttons, highlights, and active states',
            'Text: cream white and light gray to keep contrast high enough for code',
            'Syntax colors: soft pink-purple and warm yellow so strings and keywords read instantly',
          ],
        },
        'One-line summary: pink sets the mood, gray keeps it readable. That is the difference between this theme and a "pink wallpaper" preset.',
        { type: 'h2', text: 'Why pink works in dark mode' },
        'People worry pink strains the eyes. In practice it is the opposite. The Romantic Rose base is deep wine, not pure black, so it emits less blue light; pink appears only as an accent on buttons and the cursor instead of covering the whole screen. For late-night coding, this kind of warm dark palette is easier to wind down from than a cold black one.',
        { type: 'h2', text: 'Who it fits' },
        {
          type: 'ul',
          items: [
            'Developers who want a personal workspace without hurting readability',
            'Designers and creators who like soft, feminine aesthetics',
            'Anyone recording screenshots or clips who wants a recognizable look',
            'Heavy dark-mode users who want something softer than pure black',
          ],
        },
        { type: 'h2', text: 'Codex theme recommendation by mood' },
        'If you are stuck between themes, pick by scenario: Romantic Rose for focused, low-distraction work; Red Sci-Fi for a futuristic feel; Wealth God for festive vibes; Clear Custom for a minimal look. Every theme applies in one click from the gallery, and you can switch any time.',
        { type: 'h2', text: 'How to apply it' },
        'Open Codex Skin Studio → Start injection → theme gallery → pick Romantic Rose → it applies instantly. To revert, right-click the tray icon and choose "Fully restore Codex". No residue, no changes to official files.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Does Romantic Rose modify official Codex files?', a: 'No. Like every theme here, it injects at runtime via CDP and reverts when you stop the tool. Nothing in the official install is touched.' },
            { q: 'Is a pink theme tiring for long coding sessions?', a: 'The base is deep wine, not bright pink, and the accent color is limited to buttons and the cursor, so it is easier on the eyes than pure black.' },
            { q: 'Is Romantic Rose free?', a: 'Yes. The free build includes 8 curated themes, Romantic Rose among them. Pro unlocks custom colors and background images.' },
          ],
        },
        { type: 'cta', text: 'Browse the theme gallery', href: 'https://codex-skin-studio.shop/en/gallery' },
      ],
    },
  },
  {
    slug: 'fortune-god-theme-guide',
    date: '2026-08-08',
    title: {
      zh: '财神打工版主题：红金配色的中式美学',
      en: 'Fortune God Theme: Red and Gold Chinese New Year Aesthetic',
    },
    description: {
      zh: '财神打工版是 Codex Skin Studio 主题库里最有辨识度的红金主题：传统中式配色如何融入暗色编辑器，为什么红色配金色看代码不刺眼，以及它适合谁。',
      en: 'The Fortune God theme brings a red-and-gold Chinese New Year aesthetic to Codex. This guide explains how the traditional palette works in a dark editor, why it stays readable, and who it fits.',
    },
    content: {
      zh: [
        '财神打工版是 Codex Skin Studio 主题库里最有"年味"的一款：大面积的深红打底，金色做强调，按钮和活动状态带一点传统描金的味道。很多人第一眼觉得它太喜庆，装上之后才发现红金配色在暗色编辑器里意外的协调。这篇把财神主题的配色逻辑拆开讲，顺便聊聊它到底适合谁。',
        { type: 'h2', text: '红金配色的设计逻辑' },
        {
          type: 'ul',
          items: [
            '背景：深红近黑的底，不是亮红——红色压暗之后反而耐看',
            '强调色：金色与鎏金黄，用于按钮、高亮和光标',
            '文字：米白与浅暖灰，在红底上保持足够对比度',
            '代码语义色：保留了暖色系的区分度，关键字和字符串依然一眼可分',
          ],
        },
        '一句话总结：红色负责氛围，金色负责聚焦，灰白负责可读。它和"把壁纸换成红底"的简单换肤最大的区别就在这里——整套配色是重新调过的。',
        { type: 'h2', text: '财神主题在暗色模式里的表现' },
        '有人担心红金太抢眼，伤眼。实际用下来正好相反：深红底的亮度比纯黑略高一点，但比亮红低得多；金色只出现在按钮、光标和活动标签上，不会整屏晃。长时间写代码时，这种暖色暗底比冷黑底更舒服，尤其适合晚上加班的人——顺带有点"开工大吉"的心理暗示。',
        { type: 'h2', text: '它适合谁' },
        {
          type: 'ul',
          items: [
            '想要工作区有辨识度、又不想牺牲可读性的开发者',
            '喜欢中式美学、春节氛围或国风设计的创作者',
            '录屏、直播、发桌面截图时想让画面一眼难忘的人',
            '暗色模式重度用户，想换换口味又怕太花哨的人',
          ],
        },
        { type: 'h2', text: 'Codex 暗色主题推荐：财神 vs 其他' },
        '如果你在几款暗色主题里纠结，按场景选：想要喜庆、有记忆点选财神；追求柔和专注选浪漫玫瑰；喜欢科幻感选红白科幻；想要极简通透选清透定制。所有主题都在主题库里一键套用，不满意随时换。',
        { type: 'h2', text: '如何换上财神主题' },
        '打开 Codex Skin Studio → 启动注入 → 主题库 → 选「财神打工版」→ 立即生效。想恢复官方界面，右键托盘选「完全恢复 Codex」即可，不残留任何改动。',
        { type: 'h2', text: '常见问题' },
        {
          type: 'faq',
          items: [
            { q: '财神主题会改 Codex 官方文件吗？', a: '不会。它和其他主题一样通过 CDP 在运行时注入，停止工具即还原，官方安装目录零改动。' },
            { q: '红金配色看代码久了会累吗？', a: '财神的底是压暗的深红而非亮红，金色只用于强调元素，长时间阅读的负担与普通暗色主题相当。' },
            { q: '财神主题是免费的吗？', a: '免费版包含财神在内的 8 款精选主题；Pro 解锁自定义配色与背景图。' },
          ],
        },
        { type: 'cta', text: '去主题库看看财神', href: 'https://codex-skin-studio.shop/zh/gallery/preset-fortune-god' },
      ],
      en: [
        'The Fortune God theme is the most recognizable red-and-gold preset in the Codex Skin Studio library, and it is the one people screenshot first. At a glance it looks festive, almost loud. Then you actually code in it and realize the red is darkened down, the gold is used sparingly, and the whole thing settles into something calm. This guide explains the palette logic, why it works in a dark editor, and who it fits.',
        { type: 'h2', text: 'The red-and-gold palette, decoded' },
        {
          type: 'ul',
          items: [
            'Background: deep red, almost black — not bright red. The darkness is what makes it wearable',
            'Accent: gold and gilded yellow for buttons, highlights, and the cursor',
            'Text: cream white and warm light gray, tuned for contrast on red',
            'Syntax colors: warm-toned distinctions preserved, so keywords and strings still read instantly',
          ],
        },
        'One-line summary: red sets the mood, gold directs the eye, gray keeps it readable. That is the difference between this theme and a simple red wallpaper swap.',
        { type: 'h2', text: 'Why the Fortune God theme works in dark mode' },
        'The concern is always the same: will red and gold be too much? In practice the opposite happens. The base is a darkened red, brighter than pure black but far calmer than bright red; gold appears only on buttons, the cursor, and active labels. For long sessions, this warm dark palette is gentler than a cold black one, and there is something quietly satisfying about a lucky-coin cursor at 2am.',
        { type: 'h2', text: 'Who it fits' },
        {
          type: 'ul',
          items: [
            'Developers who want a distinctive workspace without hurting readability',
            'Creators who like Chinese aesthetics, festive vibes, or guofeng design',
            'Anyone recording screens or streaming who wants a memorable look',
            'Dark-mode regulars who want a change that is not just another black theme',
          ],
        },
        { type: 'h2', text: 'Dark codex theme picks: Fortune God vs the rest' },
        'If you are stuck between dark themes, pick by scenario: Fortune God for festive, memorable vibes; Romantic Rose for soft, focused work; Red Sci-Fi for a futuristic feel; Clear Custom for minimal clarity. Every theme applies in one click from the gallery, and you can switch any time.',
        { type: 'h2', text: 'How to apply it' },
        'Open Codex Skin Studio → Start injection → theme gallery → pick Fortune God → it applies instantly. To revert, right-click the tray icon and choose "Fully restore Codex". No residue, no changes to official files.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Does Fortune God modify official Codex files?', a: 'No. Like every theme here, it injects at runtime via CDP and reverts when you stop the tool. Nothing in the official install is touched.' },
            { q: 'Is red and gold tiring for long coding sessions?', a: 'The base is darkened red, not bright red, and gold is limited to accent elements, so the load is comparable to a regular dark theme.' },
            { q: 'Is Fortune God free?', a: 'Yes. The free build includes 8 curated themes, Fortune God among them. Pro unlocks custom colors and background images.' },
          ],
        },
        { type: 'cta', text: 'See Fortune God in the gallery', href: 'https://codex-skin-studio.shop/en/gallery/preset-fortune-god' },
      ],
    },
  },
  {
    slug: 'red-sci-fi-cyberpunk-theme-guide',
    date: '2026-08-09',
    title: {
      zh: '红白科幻主题：赛博朋克风格完全指南',
      en: 'Red Sci-Fi Theme: A Complete Cyberpunk Style Guide',
    },
    description: {
      zh: '红白科幻主题怎么用最出效果？配色逻辑、适合人群、与其他暗色主题的对比，以及一键应用与还原的方法。',
      en: 'How to get the most out of the Red Sci-Fi theme: the color logic, who it fits, how it compares with other dark themes, and how to apply and revert it in one click.',
    },
    content: {
      zh: [
        '红白科幻是 Codex Skin Studio 主题库里最有「未来感」的一款：暗红底、亮白高光、锐利的几何线条，一眼就能认出是赛博朋克风格。这篇把它拆开讲清楚，包括配色逻辑、适合谁、怎么和其他暗色主题做选择，以及应用与还原的完整步骤。',
        { type: 'h2', text: '红白科幻主题的配色逻辑' },
        '它的核心不是「红 + 白」两个颜色，而是「暗红底 + 亮白焦点 + 高对比边框」三件套。暗红底在深色模式下比纯黑更有层次，又不刺眼；亮白只出现在代码高亮、当前行、按钮和焦点框这些关键位置；边框和高亮线用高对比度把界面边界切得干净利落。这种设计模仿了科幻 HUD（抬头显示）的视觉语言，所以第一眼就有「飞船仪表盘」的感觉。',
        {
          type: 'ul',
          items: [
            '暗红底：比纯黑更有温度，长时间盯屏不疲劳',
            '亮白高光：集中在代码与焦点元素，阅读效率不降',
            '几何边框：高对比分隔，窗口层级一目了然',
            '低饱和辅助色：变量名、字符串、注释仍有区分度',
          ],
        },
        { type: 'h2', text: '适合谁用' },
        {
          type: 'ul',
          items: [
            '喜欢赛博朋克 / 科幻美学的开发者，想要桌面也有氛围感',
            '录屏、直播的创作者，需要一眼辨识的独特界面',
            '深色模式老用户，想要一个不是「又一个黑色主题」的选项',
            '对红色不敏感、想要高能量工作环境的人',
          ],
        },
        { type: 'h2', text: 'Codex 主题推荐怎么选' },
        '如果你在几款暗色主题之间纠结，按场景选：红白科幻适合想要未来感、科技氛围的人；浪漫玫瑰偏柔和专注；财神主题走节日喜庆路线；极简清晰适合只想要干净界面的人。每一款都能在主题库一键应用、随时切换，不用卸载重装。',
        { type: 'h2', text: '为什么它在深色模式下特别稳' },
        '有人会担心红色伤眼，实际体验是反的。暗红底比亮红温和得多，白色高光保证了文本对比度，长时间编码和看文档都不会累。赛博朋克风格常被误以为「花哨」，但这套主题把装饰控制在边框和焦点上，代码本身始终是最清晰的区域。',
        { type: 'h2', text: '怎么应用与还原' },
        '打开 Codex Skin Studio → 开始注入 → 主题库 → 选红白科幻 → 立即生效。想恢复就右键托盘图标选「完全恢复 Codex」，不留任何残留，不修改官方文件。',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: '红白科幻主题会修改 Codex 官方文件吗？', a: '不会。它和其他主题一样通过 CDP 运行时注入，停止工具即恢复，官方安装目录不被触碰。' },
            { q: '红色背景长时间编码会累吗？', a: '底是暗红不是亮红，白色高光保证对比度，疲劳程度和普通深色主题相当。' },
            { q: '红白科幻主题免费吗？', a: '免费版包含 8 款精选主题，红白科幻在内。Pro 解锁自定义配色与背景图。' },
          ],
        },
        { type: 'cta', text: '在主题库查看红白科幻', href: 'https://codex-skin-studio.shop/zh/gallery/preset-red-sci-fi' },
      ],
      en: [
        'Red Sci-Fi is the most futuristic theme in the Codex Skin Studio gallery: dark red base, bright white highlights, sharp geometric borders, instantly recognizable as cyberpunk. This guide breaks it down, covering the color logic, who it fits, how to choose between dark themes, and how to apply and revert it.',
        { type: 'h2', text: 'The color logic behind Red Sci-Fi' },
        'It is not really "red plus white". It is three layers: a dark red base, bright white focal points, and high-contrast borders. The dark red base gives more depth than pure black without being harsh; white appears only on code highlights, the current line, buttons and focus rings; borders slice the interface into clean regions. It borrows the visual language of sci-fi HUDs, so it reads as a spaceship instrument panel at first glance.',
        {
          type: 'ul',
          items: [
            'Dark red base: warmer than pure black, easier on the eyes over long sessions',
            'Bright white highlights: concentrated on code and focus elements, readability stays high',
            'Geometric borders: high-contrast separation, window hierarchy at a glance',
            'Low-saturation accents: variables, strings and comments stay distinguishable',
          ],
        },
        { type: 'h2', text: 'Who it fits' },
        {
          type: 'ul',
          items: [
            'Developers who like cyberpunk or sci-fi aesthetics and want a workspace with atmosphere',
            'Creators recording screens or streaming who want a memorable, distinctive interface',
            'Dark-mode regulars looking for something that is not just another black theme',
            'People who enjoy an energetic, high-contrast environment and are fine with red',
          ],
        },
        { type: 'h2', text: 'How to pick between dark codex themes' },
        'Choose by scenario: Red Sci-Fi for futuristic, tech vibes; Romantic Rose for soft, focused work; Fortune God for festive energy; Clear Custom for minimal clarity. Every theme applies in one click from the gallery, and you can switch any time.',
        { type: 'h2', text: 'Why it holds up in dark mode' },
        'The worry is always "will red hurt my eyes". In practice the opposite happens. The base is darkened red, far calmer than bright red, and the white highlights keep text contrast high, so long coding and reading sessions stay comfortable. Cyberpunk sounds flashy, but the decoration is limited to borders and focal points; the code itself is always the clearest part of the screen.',
        { type: 'h2', text: 'How to apply it' },
        'Open Codex Skin Studio → Start injection → theme gallery → pick Red Sci-Fi → it applies instantly. To revert, right-click the tray icon and choose "Fully restore Codex". No residue, no changes to official files.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Does Red Sci-Fi modify official Codex files?', a: 'No. Like every theme here, it injects at runtime via CDP and reverts when you stop the tool. Nothing in the official install is touched.' },
            { q: 'Is a red background tiring for long coding sessions?', a: 'The base is darkened red, not bright red, and white highlights keep contrast high, so the load is comparable to a regular dark theme.' },
            { q: 'Is Red Sci-Fi free?', a: 'Yes. The free build includes 8 curated themes, Red Sci-Fi among them. Pro unlocks custom colors and background images.' },
          ],
        },
        { type: 'cta', text: 'See Red Sci-Fi in the gallery', href: 'https://codex-skin-studio.shop/en/gallery/preset-red-sci-fi' },
      ],
    },
  },
  {
    slug: 'clear-custom-minimalist-theme-guide',
    date: '2026-08-10',
    title: {
      zh: '清透定制主题：极简美学设计指南',
      en: 'Clear Custom Theme: A Minimalist Design Guide',
    },
    description: {
      zh: '清透定制是主题库里最安静的一款：柔和浅色底、克制的强调色、几乎没有装饰。设计逻辑、适合谁，以及和深色主题怎么选。',
      en: 'Clear Custom is the quietest theme in the gallery: soft light base, restrained accents, almost no decoration. The design logic, who it fits, and how to choose between it and dark themes.',
    },
    content: {
      zh: [
        '如果你在找一款 clear custom codex theme，大概率是看腻了高饱和配色，想要一个不抢注意力、长时间编码不累的界面。清透定制就是 Codex Skin Studio 主题库里那款"最安静"的主题：浅色底、克制的强调色、几乎没有装饰。这篇讲它的设计逻辑、适合谁，以及怎么和深色主题做选择。',
        { type: 'h2', text: '清透定制主题的设计逻辑' },
        '它和"干净"的关系不是删掉颜色，而是把颜色用在刀刃上。核心三件套：柔和浅色底、低饱和强调色、极简分隔线。',
        {
          type: 'ul',
          items: [
            '柔和浅色底：不是纯白，带一点暖调，长时间看屏幕不刺眼',
            '低饱和强调色：只有变量、字符串、关键字这些语义位置有颜色，其余保持中性',
            '极简分隔线：用细线而不是色块区分区域，界面更透气',
            '字体权重对比：标题、正文、代码用字重和字距区分，不靠颜色堆砌',
          ],
        },
        '这种设计理念直接来自极简主义排版：信息层级靠留白和字重，而不是靠五彩斑斓。minimalist theme 爱好者第一眼看过去会觉得"什么都没有"，但用一小时后会发现，想找的东西都在它该在的位置。',
        { type: 'h2', text: '适合谁用' },
        {
          type: 'ul',
          items: [
            '浅色模式老用户，想要一款不刺眼的亮色主题',
            '长时间写代码、读文档的人，讨厌高对比界面带来的视觉疲劳',
            '对屏幕录制、截图有要求的人，低饱和主题录出来的视频更耐看',
            '想要"工作感"而不是"游戏感"桌面的人',
          ],
        },
        '如果你在深色和浅色之间摇摆，一个实用建议：白天用清透定制，晚上切到任意暗色主题。Codex Skin Studio 切换主题不需要重启，随时换。',
        { type: 'h2', text: '清新主题和其他亮色主题的区别' },
        '主题库里同类的亮色主题不多，清透定制和它们的差异在"克制"两个字上。别的主题可能用渐变、阴影、高光来提升质感，清透定制几乎不用这些技巧，它相信内容本身的秩序感。这对极简主义者是加分项，对喜欢视觉丰富度的人则是减分项。选之前先问自己：你是想让界面消失，还是想让界面好看？前者选清透定制。',
        { type: 'h2', text: '怎么应用与还原' },
        '打开 Codex Skin Studio → 开始注入 → 主题库 → 选清透定制 → 立即生效。想还原就右键托盘图标选「完全恢复 Codex」，不留残留、不修改官方文件。主题库里的所有主题都支持一键切换，你可以在清透定制和暗色主题之间来回试，直到找到自己最舒服的组合。',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: '清透定制主题免费吗？', a: '免费。免费版包含 8 款精选主题，清透定制在内。Pro 解锁自定义配色与背景图。' },
            { q: '浅色主题会不会更伤眼？', a: '关键在亮度而不在色温。清透定制的底是柔和暖白而不是纯白，配合低饱和强调色，长时间使用比高对比深色主题更放松，但这因人而异，建议白天浅色、晚上深色。' },
            { q: '它能和深色主题随时切换吗？', a: '能。所有主题都通过运行时注入，切换即时生效，不需要重启 Codex，也没有残留。' },
            { q: '清透定制会修改 Codex 官方文件吗？', a: '不会。它和其他主题一样通过 CDP 运行时注入，停止工具即恢复，官方安装目录不被触碰。' },
          ],
        },
        { type: 'cta', text: '在主题库查看清透定制', href: 'https://codex-skin-studio.shop/zh/gallery/preset-clear-custom' },
      ],
      en: [
        'If you are hunting for a clear custom codex theme, you are probably tired of saturated colors and want an interface that stays out of the way during long coding sessions. Clear Custom is the quietest theme in the Codex Skin Studio gallery: soft light background, restrained accents, almost no decoration. This guide covers its design logic, who it fits, and how to choose between it and a dark theme.',
        { type: 'h2', text: 'The design logic behind Clear Custom' },
        '"Clean" here does not mean removing color; it means spending color carefully. Three layers do the work: a soft light base, low-saturation accents, and minimal separators.',
        {
          type: 'ul',
          items: [
            'Soft light base: off-white with a warm tint, easier on the eyes than pure white',
            'Low-saturation accents: color appears only on semantic positions like variables, strings and keywords; everything else stays neutral',
            'Minimal separators: thin lines instead of color blocks, so the interface breathes',
            'Weight-based hierarchy: headings, body and code are separated by weight and spacing, not by color noise',
          ],
        },
        'The idea comes straight from minimalist typography: hierarchy via whitespace and weight, not via a rainbow. A minimalist theme fan will look at it and think "nothing is going on", then an hour later realize everything they need is exactly where they expect it.',
        { type: 'h2', text: 'Who it fits' },
        {
          type: 'ul',
          items: [
            'Light-mode regulars who want a bright theme that does not glare',
            'People who read code and docs for hours and hate the fatigue of high-contrast UIs',
            'Anyone who records screens or takes screenshots, since low-saturation themes look calmer on video',
            'People who want a work-feel desktop rather than a game-feel one',
          ],
        },
        'If you keep flip-flopping between light and dark, try this: Clear Custom during the day, any dark theme at night. Switching themes in Codex Skin Studio takes no restart.',
        { type: 'h2', text: 'How it differs from other light themes' },
        'The gallery does not have many light themes, and the difference between Clear Custom and the rest is restraint. Other themes lean on gradients, shadows and glows for polish; Clear Custom uses almost none of that, trusting the natural order of the content. That is a plus for minimalists and a minus for people who want visual richness. Ask yourself one question before picking: do you want the interface to disappear, or do you want it to look impressive? If the former, Clear Custom is the pick.',
        { type: 'h2', text: 'How to apply and revert' },
        'Open Codex Skin Studio, start the injection, open the theme gallery, pick Clear Custom, done. To revert, right-click the tray icon and choose full restore: no residue, no modification of official files. Every theme in the gallery supports one-click switching, so you can go back and forth between Clear Custom and dark themes until you find the combination you like.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Is Clear Custom free?', a: 'Yes. The free build includes 8 curated themes, Clear Custom among them. Pro unlocks custom colors and background images.' },
            { q: 'Is a light theme harder on the eyes?', a: 'It depends on brightness, not color temperature. Clear Custom uses a warm off-white base with low-saturation accents, which many people find more relaxing than high-contrast dark themes over long sessions. Still, it varies; light during the day, dark at night is the safest split.' },
            { q: 'Can I switch to a dark theme at any time?', a: 'Yes. All themes are injected at runtime, switching is instant, no restart, no residue.' },
            { q: 'Does Clear Custom modify official Codex files?', a: 'No. Like every theme, it injects at runtime via CDP; stopping the tool restores everything, and the official install directory is never touched.' },
          ],
        },
        { type: 'cta', text: 'See Clear Custom in the gallery', href: 'https://codex-skin-studio.shop/en/gallery/preset-clear-custom' },
      ],
    },
  },
  {
    slug: 'inspiration-universe-theme-guide',
    date: '2026-08-11',
    title: {
      zh: '灵感小宇宙主题：星空背景创意空间',
      en: 'Inspiration Universe Theme: Creative Space Backgrounds',
    },
    description: {
      zh: '灵感小宇宙是主题库里最受创作者欢迎的星空主题：低饱和深蓝底、星云渐变、微光粒子。这篇讲它为什么适合编码、怎么搭配，以及画廊里的同族变体。',
      en: 'Inspiration Universe is the most popular starfield theme in the gallery: low-saturation deep blue, nebula glow, faint particles. Why it works for coding, how to pair it, and which variants share the same look.',
    },
    content: {
      zh: [
        '灵感小宇宙是目前主题库里最受创作者欢迎的一款灵感小宇宙 Codex 主题，深蓝星空底、浮动的星云和微光粒子，把 Codex 桌面变成一片安静的创意空间。这篇讲讲它为什么适合写代码、怎么搭配，以及同一套星空视觉在画廊里还有哪些变体。',
        { type: 'h2', text: '为什么星空背景适合 Coding' },
        '写代码的时候，视觉噪音是最贵的干扰。灵感小宇宙用的是低饱和深蓝星空：大面积暗色底让代码高亮更突出，星云的渐变又不会抢走注意力。它属于 space theme 里"耐看型"的代表，第一眼惊艳，用两周也不腻。',
        '对比纯黑主题，星空底的层次感好很多：编辑器区域有微弱的景深，窗口切换时不会觉得死板。对比花哨的动态壁纸，它又足够安静，不会在长会话里持续分散注意。',
        { type: 'h2', text: '主题里的细节' },
        {
          type: 'ul',
          items: [
            '背景：深空蓝渐变 + 星云光晕，带轻微明暗流动',
            '高亮：星云紫和暖金做代码高亮点缀，暗色下对比度充足',
            '粒子：极轻的浮动微光，频率低到不会让人分心',
            '配套：同色系窗口边框与滚动条，整体观感统一',
          ],
        },
        '这套配色对深夜编码尤其友好：蓝紫光波长短，比白底和亮色主题更不容易刺激眼睛。',
        { type: 'h2', text: '怎么搭配使用' },
        '配合暗色代码主题：编辑器内用 Dark+ 或 One Dark 这类暗色主题，和星空底是同族色系，衔接自然。配合亮色代码主题：不建议，亮色编辑器在星空底上会显得突兀。窗口透明度：如果工具支持，把透明度调到 80% 左右，星空渐变透过来，效果最好。',
        { type: 'h2', text: '画廊里的星空家族' },
        '灵感小宇宙不是孤品。画廊的星空分类下还有几款同族变体：偏冷的「深空探索」、偏紫的「星云幻想」、偏暖的「暮色银河」。如果你喜欢星空氛围但觉得默认款太蓝，可以试试这几款。想先看效果再决定？画廊 preset-inspiration 有实时预览。',
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            { q: '灵感小宇宙主题适合长时间编码吗？', a: '适合。低饱和深蓝底对眼睛刺激小，星云渐变不抢注意力，是高强度会话里少数能长期使用的创意主题。' },
            { q: '它和纯黑主题比哪个好？', a: '看需求。纯黑对比度最高但层次少；星空底有景深和细节，长时间使用更耐看。写代码追求沉浸感选星空，追求极简选纯黑。' },
            { q: '星空主题会不会很花哨？', a: '默认款很克制：粒子稀疏、渐变缓慢，只有在全屏壁纸场景才看得出动态。如果你还是嫌吵，画廊里还有静态星空变体。' },
            { q: '这个主题要钱吗？', a: '免费版内置的主题就包含它，Pro 解锁的是自定义配色和背景图。' },
          ],
        },
        { type: 'cta', text: '到画廊看灵感小宇宙的实时效果', href: '/zh/gallery/preset-inspiration' },
      ],
      en: [
        'Inspiration Universe is the most popular pick among creators in the theme gallery: a deep blue starfield, drifting nebula glow, faint floating particles, turning the Codex desktop into a quiet creative space. This guide covers why it works for writing code, how to pair it, and which variants of the same starfield look live in the gallery.',
        { type: 'h2', text: 'Why a starfield works for coding' },
        'Visual noise is the most expensive distraction while coding. Inspiration Universe leans on a low-saturation deep blue starfield: the large dark base makes code highlighting pop, while the nebula gradient never fights for attention. It is the "easy on the eyes" end of the space theme spectrum. Impressive on day one, still pleasant after two weeks.',
        'Compared to a pure black theme, the starfield has more depth: the editor area carries a faint sense of perspective, and window switching does not feel flat. Compared to flashy animated wallpapers, it is quiet enough to survive long sessions.',
        { type: 'h2', text: 'What is inside the theme' },
        {
          type: 'ul',
          items: [
            'Background: deep-space blue gradient with nebula glow and subtle light drift',
            'Highlights: nebula purple and warm gold accents for code, strong contrast on dark',
            'Particles: very light floating glints, sparse enough to stay out of the way',
            'Extras: matching window borders and scrollbar in the same palette',
          ],
        },
        'The blue-purple palette is especially friendly for late-night coding. Shorter wavelengths are easier on the eyes than white backgrounds or bright themes.',
        { type: 'h2', text: 'How to pair it' },
        'With a dark code theme, use Dark+ or One Dark inside the editor. Same color family, seamless transition. With a light code theme, skip it, a bright editor on a starfield looks jarring. Window transparency: if your tool supports it, drop opacity to around 80% and let the nebula show through. That is the setup that looks best.',
        { type: 'h2', text: 'The starfield family in the gallery' },
        'Inspiration Universe is not a one-off. The space category in the gallery holds several siblings: the cooler "Deep Space Explorer", the purple-leaning "Nebula Fantasy", the warmer "Twilight Galaxy". If you like the vibe but find the default too blue, those are worth a look. Want to see it before installing? The gallery preset page has a live preview.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Is Inspiration Universe good for long coding sessions?', a: 'Yes. The low-saturation blue is gentle on the eyes and the nebula does not steal focus. It is one of the few creative themes that survives heavy daily use.' },
            { q: 'Starfield or pure black?', a: 'Depends. Pure black has the highest contrast but less depth; the starfield adds texture and stays pleasant over time. Immersion pick the starfield, minimalism pick pure black.' },
            { q: 'Is it too flashy?', a: 'The default is restrained: sparse particles, slow gradients, motion only obvious in fullscreen wallpaper mode. If it is still too busy, the gallery has static starfield variants.' },
            { q: 'Does it cost anything?', a: 'It ships with the free tier. Pro unlocks custom colors and backgrounds.' },
          ],
        },
        { type: 'cta', text: 'See Inspiration Universe live in the gallery', href: '/en/gallery/preset-inspiration' },
      ],
    },
  },  {
    slug: 'purple-night-theme-guide',
    date: '2026-08-12',
    title: {
      zh: '紫夜限定主题：紫色神秘氛围深度解析',
      en: 'Purple Night Theme: A Deep Dive into the Purple Mystery',
    },
    description: {
      zh: '紫夜限定是主题库里最能营造神秘氛围的一款 Codex 主题：深紫夜幕、霓虹点缀、暗色系里最出挑的紫色主题。这篇拆解它的配色逻辑、适合谁用、怎么和暗色代码主题搭配。',
      en: 'Purple Night is the most atmospheric dark theme in the gallery: a deep violet night, neon accents, and the boldest purple theme in the dark lineup. This guide breaks down its palette logic, who it suits, and how to pair it with a dark code theme.',
    },
    content: {
      zh: [
        '紫夜限定是一款 Purple Night Codex 主题，主题库里神秘感拉满的那一个：深紫夜幕打底，紫罗兰和霓虹粉做点缀，把整个 Codex 桌面罩进一层夜色滤镜。这篇聊它的配色逻辑、它适合谁，以及为什么它在暗色主题里独一档。',
        { type: 'h2', text: '紫色为什么是"暗色之王"' },
        '暗色主题很多，但大多数是黑灰底。紫色是光谱里唯一既深又有情绪的颜色：压得住亮度，又比纯黑多一层氛围。紫夜限定用低明度的深紫做底，编辑器区接近蓝紫，窗口边框和滚动条是同色系的渐变，整体像一个安静的深夜房间，而不是一块纯黑面板。',
        '对写代码来说，深紫底和大多数语法高亮的兼容性意外地好：绿色、金色、粉色在紫底上的对比度都够，不会像在纯黑上那样刺眼。这是 purple theme 和 dark theme 最大的区别，不是颜色偏好，是实际可读性。',
        { type: 'h2', text: '主题里的细节' },
        {
          type: 'ul',
          items: [
            '背景：深紫夜幕渐变，带细微的星点纹理',
            '高亮：紫罗兰主色 + 霓虹粉强调，代码区块层次分明',
            '边框：窗口边缘带紫色光晕，切窗时有轻微呼吸感',
            '配色：紫色主题里最耐看的低饱和方案，长时间不累眼',
          ],
        },
        '紫夜限定在画廊里的定位是"氛围向暗色主题"。相比红白科幻的激进和清透定制的极简，它走的是沉浸路线：适合深夜写代码、直播、以及想要桌面有"场景感"的人。',
        { type: 'h2', text: '怎么搭配才好看' },
        '配暗色代码主题用 One Dark 或 Dark+，紫色系底色和它们兼容性最好。配浅色代码主题就跳过，亮色编辑器放在深紫桌面上会很突兀。窗口透明度如果你用的工具支持，可以降到 85% 左右，让紫夜底色透出来，这是它最出效果的状态。',
        '桌面壁纸建议选深色系，深紫、深蓝、或者纯黑都行。亮色壁纸会把紫夜的氛围感冲掉。图标主题可以保持默认，紫夜的光晕已经足够撑起视觉。',
        { type: 'h2', text: '谁适合用紫夜限定' },
        '喜欢深夜写代码的人。直播或录屏想要一个让人记住的界面的人。以及那些觉得纯黑太无聊、但浅色又太亮的人。它不激进、不花哨，但一眼就能认出这不是默认主题。',
        '如果你拿不定主意，去画廊的 preset-purple-night 预览页看一眼实时效果再装。主题不贵，装错也不心疼，但先看效果永远比装了再卸省事。',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: '紫夜限定适合长时间写代码吗？', a: '适合。低饱和深紫比纯黑多一点层次，又比亮色主题温和得多，长时间使用不容易累。它属于氛围向但可用的暗色主题。' },
            { q: '紫夜和纯黑比怎么样？', a: '纯黑对比度最高但氛围感弱；紫夜多一层神秘感和深度，代价是理论对比度略低。追求极致对比选纯黑，追求氛围选紫夜。' },
            { q: '这个主题太花哨吗？', a: '默认状态很克制：星点纹理是静态的，光晕只在窗口边框。和那些动态壁纸主题比，它安静得多。' },
            { q: '紫夜限定要钱吗？', a: '免费版内置的主题就包含它，Pro 解锁的是自定义配色和背景图。' },
          ],
        },
        { type: 'cta', text: '到画廊看紫夜限定的实时效果', href: '/zh/gallery/preset-purple-night' },
      ],
      en: [
        'Purple Night is the Purple Night Codex theme with the most mystery in the gallery: a deep violet night, violet and neon pink accents, wrapping the whole Codex desktop in a layer of night. This guide covers its palette logic, who it suits, and why it stands alone among dark themes.',
        { type: 'h2', text: 'Why purple owns the dark end' },
        'Most dark themes are black and gray. Purple is the one color on the spectrum that is both deep and moody: it holds brightness down and adds atmosphere that pure black cannot. Purple Night uses a low-lightness deep violet base, editor area leaning blue-purple, window borders and scrollbar in the same gradient family. It reads as a quiet late-night room, not a flat black panel.',
        'For coding, a deep violet base works with most syntax highlighting better than expected: greens, golds, pinks all keep enough contrast on purple, without the harshness of pure black. That is the real difference between a purple theme and a dark theme. Not taste, readability.',
        { type: 'h2', text: 'What is inside the theme' },
        {
          type: 'ul',
          items: [
            'Background: deep violet night gradient with a faint star speckle texture',
            'Highlights: violet primary with neon pink accents, clear code hierarchy',
            'Borders: window edges carry a purple glow with a slight breathing effect',
            'Palette: one of the most comfortable low-saturation purple schemes, easy on the eyes in long sessions',
          ],
        },
        'In the gallery, Purple Night sits in the "moody dark" lane. Against Red Sci-Fi\'s aggression and Clear Custom\'s minimalism, it goes immersive: for late-night coding, streaming, and anyone who wants their desktop to feel like a scene.',
        { type: 'h2', text: 'How to pair it' },
        'Use One Dark or Dark+ inside the editor. Same color family, seamless transition. With a light code theme, skip it, a bright editor on a deep violet desktop looks jarring. If your tool supports window transparency, drop opacity to around 85% and let the purple base show through. That is the setup that shows it off best.',
        'Desktop wallpapers should stay dark: deep purple, deep blue, or plain black. A bright wallpaper kills the whole mood. Keep the icon theme default, the purple glow carries the visuals on its own.',
        { type: 'h2', text: 'Who it suits' },
        'People who code late at night. People who stream or record and want an interface people remember. People who find pure black boring and light themes too bright. It is not aggressive or flashy, but nobody mistakes it for a default theme.',
        'If you are on the fence, check the live preview on the preset-purple-night gallery page before installing. Themes are cheap and uninstalling is easy, but seeing it first beats install-then-remove.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Is Purple Night good for long coding sessions?', a: 'Yes. The low-saturation violet adds depth over pure black without the harshness of bright themes. It is a moody dark theme that stays usable for hours.' },
            { q: 'Purple Night or pure black?', a: 'Pure black has the highest contrast but zero atmosphere. Purple Night trades a little theoretical contrast for depth and mystery. Contrast purist, go black. Mood first, go purple.' },
            { q: 'Is it too flashy?', a: 'The default is restrained: static star speckles, glow only on window borders. Compared to animated wallpaper themes, it is quiet.' },
            { q: 'Does it cost anything?', a: 'It ships with the free tier. Pro unlocks custom colors and backgrounds.' },
          ],
        },
        { type: 'cta', text: 'See Purple Night live in the gallery', href: '/en/gallery/preset-purple-night' },
      ],
    },
  },  {
    slug: 'azure-virtual-diva-theme-guide',
    date: '2026-08-13',
    title: {
      zh: '青蓝虚拟歌姬主题：虚拟偶像风格解析',
      en: 'Azure Virtual Diva Theme: Virtual Idol Style Breakdown',
    },
    description: {
      zh: '青蓝虚拟歌姬是主题库里最"二次元"的一款 Codex 主题：天蓝发色、舞台灯光、偶像企划的氛围直接搬上桌面。这篇拆解它的配色逻辑、适合谁用、怎么搭配才不显中二。',
      en: 'Azure Virtual Diva is the most anime-flavored theme in the gallery: sky-blue hair, stage lighting, and virtual idol energy on your desktop. This guide breaks down its palette logic, who it suits, and how to pair it without going full cosplay.',
    },
    content: {
      zh: [
        '青蓝虚拟歌姬是一款 Azure Virtual Diva Codex 主题，主题库里最接近虚拟偶像企划的一款：天蓝主色、舞台感高光、一点霓虹点缀，把 Codex 桌面装点成演唱会后台。这篇聊它的配色逻辑、适合谁、以及怎么搭配才不显中二。',
        { type: 'h2', text: '天蓝为什么是偶像色' },
        '虚拟偶像的视觉语言里，天蓝是"初代目"色：清澈、明亮、有距离感又不冷。青蓝虚拟歌姬用低饱和天蓝做底，窗口边框带舞台灯光感的浅色高光，滚动条和强调色走同色系。整体像一场还没开场的演唱会，干净、亮堂、带一点期待感。',
        '和紫夜的深沉不同，青蓝走的是"透明感"路线：明度高、对比温和、色彩偏冷。它不是暗色主题，是那种白天看心情会变好的亮色二次元主题。',
        { type: 'h2', text: '主题里的细节' },
        {
          type: 'ul',
          items: [
            '背景：天蓝渐变，带细小的星光纹理，像舞台追光',
            '高亮：白色为主，天蓝和浅紫做辅助，代码区块清晰',
            '边框：窗口边缘带舞台灯光感的光晕',
            '配色：二次元主题里少见的低饱和方案，长时间看不腻',
          ],
        },
        '在画廊里，青蓝虚拟歌姬的定位是"偶像企划主题"。相比红白科幻的激进、紫夜的沉浸，它走的是明亮可爱路线：适合喜欢二次元文化、虚拟偶像、以及想让桌面看起来"有点企划感"的人。',
        { type: 'h2', text: '怎么搭配才好看' },
        '配浅色代码主题最合适，GitHub Light 或 One Light 都行，亮色编辑器放在天蓝桌面上很和谐。配暗色代码主题会有点跳，但也不是不能看。桌面壁纸建议选浅色系，天蓝、白色、或者浅紫，深色壁纸会把透明感冲掉。',
        '图标主题可以保持默认。青蓝的舞台光晕已经足够有辨识度，不需要再叠加视觉元素。窗口透明度降到 90% 左右，让天蓝底色透出来，这是它最出效果的状态。',
        { type: 'h2', text: '谁适合用青蓝虚拟歌姬' },
        '喜欢二次元和虚拟偶像的人。直播或录屏想要一个明亮、让人记住的界面的人。以及那些觉得默认主题太无聊、但暗色主题又太压抑的人。它不深沉、不炫技，但一眼就能认出这是"企划限定"。',
        '如果你拿不定主意，去画廊的 preset-virtual-diva 预览页看一眼实时效果再装。先看效果永远比装了再卸省事。',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: '青蓝虚拟歌姬适合写代码吗？', a: '适合。它是亮色主题，代码可读性好，低饱和天蓝长时间看不累。比纯白柔和，比暗色轻快，是那种写累了抬头看一眼会开心的主题。' },
            { q: '这是二次元主题吗？', a: '是。它就是为虚拟偶像风格设计的，天蓝主色加舞台灯光感，整个氛围就是偶像企划。不喜欢二次元的人可能get不到，但喜欢的人会觉得正中下怀。' },
            { q: '太花哨吗？', a: '默认状态很克制：星光是静态的，光晕只在窗口边框。比动态壁纸主题安静得多，只是配色比较出挑。' },
            { q: '青蓝虚拟歌姬要钱吗？', a: '免费版内置的主题就包含它，Pro 解锁的是自定义配色和背景图。' },
          ],
        },
        { type: 'cta', text: '到画廊看青蓝虚拟歌姬的实时效果', href: '/zh/gallery/preset-virtual-diva' },
      ],
      en: [
        'Azure Virtual Diva is the Azure Virtual Diva Codex theme with the most idol energy in the gallery: sky-blue primary, stage-light highlights, a touch of neon, turning your Codex desktop into a concert backstage. This guide covers its palette logic, who it suits, and how to pair it without going full cosplay.',
        { type: 'h2', text: 'Why sky blue is an idol color' },
        'In virtual idol visual language, sky blue is the first-gen color: clear, bright, approachable without being cold. Azure Virtual Diva uses a low-saturation sky-blue base, window borders with pale stage-light highlights, scrollbar and accents in the same family. It reads like a concert that has not started yet. Clean, bright, a little anticipation.',
        'Where Purple Night goes deep, Azure goes translucent: higher lightness, gentler contrast, cooler tones. This is not a dark theme. It is the light anime theme that makes a daytime session feel better.',
        { type: 'h2', text: 'What is inside the theme' },
        {
          type: 'ul',
          items: [
            'Background: sky-blue gradient with fine star speckles, like stage follow spots',
            'Highlights: white primary with sky-blue and light purple accents, clear code hierarchy',
            'Borders: window edges carry a stage-light glow',
            'Palette: a rare low-saturation anime scheme, easy to live with for long sessions',
          ],
        },
        'In the gallery, Azure Virtual Diva sits in the "idol project" lane. Against Red Sci-Fi\'s aggression and Purple Night\'s immersion, it goes bright and cute: for anime fans, virtual idol followers, and anyone who wants their desktop to feel like a project.',
        { type: 'h2', text: 'How to pair it' },
        'Use a light code theme, GitHub Light or One Light work best. A bright editor on a sky-blue desktop is harmonious. A dark code theme will look slightly off but still usable. Desktop wallpapers should stay light: sky blue, white, or pale purple. A dark wallpaper kills the transparency feel.',
        'Keep the icon theme default. The stage glow carries the identity on its own. Window transparency around 90% lets the sky-blue base show through, which is the setup that shows it off best.',
        { type: 'h2', text: 'Who it suits' },
        'Anime and virtual idol fans. People who stream or record and want a bright, memorable interface. People who find default themes boring and dark themes too heavy. It is not deep or flashy, but nobody mistakes it for a stock theme.',
        'If you are on the fence, check the live preview on the preset-virtual-diva gallery page before installing. Seeing it first beats install-then-remove.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Is Azure Virtual Diva good for coding?', a: 'Yes. It is a light theme with solid readability, and the low-saturation sky blue is easy on the eyes for hours. Softer than pure white, lighter than dark themes. The kind of theme that makes you smile when you look up from a long session.' },
            { q: 'Is this an anime theme?', a: 'Yes. It was designed for virtual idol style, sky-blue primary plus stage-light atmosphere, the whole vibe is an idol project. People who do not care about anime may not get it. People who do, will feel seen.' },
            { q: 'Is it too flashy?', a: 'The default is restrained: static stars, glow only on window borders. Compared to animated wallpaper themes, it is quiet. The palette is what stands out.' },
            { q: 'Does Azure Virtual Diva cost money?', a: 'The free tier includes it. Pro unlocks custom colors and background images.' },
          ],
        },
        { type: 'cta', text: 'See Azure Virtual Diva live in the gallery', href: '/en/gallery/preset-virtual-diva' },
      ],
    },
  },
  {
    slug: 'stage-black-gold-theme',
    date: '2026-08-14',
    title: {
      zh: '舞台黑金主题：高级感配色完整指南',
      en: 'Stage Black Gold Theme: Premium Color Guide',
    },
    description: {
      zh: '舞台黑金是主题库里最讲克制的一款 Codex 暗色主题：纯黑打底、香槟金点缀。这篇把配色的每个 hex 拆开讲，聊黑金为什么难做、怎么搭配、以及什么情况下别用。',
      en: 'The stage black gold codex theme, palette hex by hex: why black and gold is harder to get right than it looks, how to pair it, and when to skip it.',
    },
    content: {
      zh: [
        '舞台黑金是主题库里最显贵的一款 stage black gold codex theme：纯黑打底，香槟金点缀，光线像空舞台上的一束追光。没有霓虹，没有互相打架的渐变。这篇把配色的 hex 一个个拆开讲，说清黑金为什么比看起来难做，以及什么人不该用它。',
        { type: 'h2', text: '黑金为什么比看起来难做' },
        '金其实不是一个颜色，是一种反光行为。现实里的金靠高光和暗部的落差撑起来，屏幕上只有一个个平面色值，所以金必须用一段很窄的低饱和黄褐去假装，大致落在 #c8a45c 附近。饱和度往上一点变芥末，明度往下一点变土褐，可用区间窄得离谱。这也是网上大部分黑金配色看着廉价的原因。',
        '另一半是克制。真金看起来贵，是因为量少。金色一旦覆盖超过屏幕的十分之一，它就从点缀变成主色，整体立刻往夜总会方向跑。舞台黑金把金限制在窗口边框、活动标签下划线和光标上，别的地方一点不给。',
        { type: 'h2', text: '配色拆解：一个个 hex' },
        {
          type: 'ul',
          items: [
            '底色 #141414：不是纯黑，带一点暖，长时间看比 #000 舒服',
            '面板 #2a2a2a：侧栏和标题栏用，不画边框也能分出层次',
            '强调色 #c8a45c：香槟金，只出现在活动边框、光标、链接',
            '暗金 #8a7038：hover 和按下状态，把金压回去，避免界面闪',
            '文字 #ece7dd：暖白而不是纯白，色温和金色对得上',
          ],
        },
        '值得单独说的是为什么用 #141414 而不是 #000000。纯黑配亮字在 OLED 和不少便宜 IPS 屏上会出现光晕，字的边缘发虚。近黑底能挡掉大部分。你眼睛看不出这点色差，但两小时之后身体知道。',
        { type: 'h2', text: '怎么搭配 black gold theme 才不显土' },
        '编辑器主题用 Dark+ 或者 GitHub Dark。它们偏中性冷调，听着像和暖金冲突，实际上基本不冲突，因为金从来不进代码区，只待在界面框架上。避开 Monokai 这类字符串是黄绿色的方案，一个窗口里两种黄，看着像配错了而不是配过。',
        '壁纸就用纯 #141414，或者一张只有单一光源的深色照片。花哨壁纸会把追光那点意思冲掉，主题也就不成立了。图标主题保持默认，彩色文件夹图标是毁掉黑金最快的方式。',
        '如果你的环境支持窗口透明，92% 到 95% 是合适区间。再低下去，细窄的金色边框跟窗后的东西对比度就不够了。',
        { type: 'h2', text: '谁适合这款 Codex 暗色主题' },
        '夜里干活的人。录屏或者直播、希望画面看起来是设计过的人。还有看腻了默认蓝灰的人。它首先是一款能长时间用的 dark codex theme，其次才是风格表达，这个顺序不能反。',
        '不适合的情况也说清楚：房间很亮就别用。低调暗色主题需要可控光线，白天的光打在黑面板上，屏幕直接变镜子。另外如果你依赖界面里的颜色编码，git 状态色、语言图标色、彩色终端输出，这套主题会跟你反着来，它要的是界面安静。',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: '舞台黑金适合长时间写代码吗？', a: '适合，但有个前提。#141414 的近黑底配暖白字，比纯黑配纯白省眼睛。前提是环境光可控，房间太亮的时候，任何暗色主题都是赔本的。' },
            { q: '黑金和纯黑该选哪个？', a: '纯黑更保险，金色给界面一个锚点。习惯了金色代表活动状态之后，你会少花时间找当前焦点在哪个面板。这是好看之外一个很小但真实的收益。' },
            { q: '会和我的代码主题打架吗？', a: '只有你的代码主题偏黄才会。中性暗色方案都没问题，两种黄同屏就不行。' },
            { q: '这款主题要钱吗？', a: '黑金舞台归在 Pro 档。免费版内置 8 款主题，覆盖粉系、科幻、暗黑、清新四个分类。' },
          ],
        },
        '真正的建议是先看预览。在预览页跟一套配色待五分钟，比看任何文章都准，包括这篇。',
        { type: 'cta', text: '到 codex-skin-studio.shop 画廊看黑金舞台主题', href: '/zh/gallery/preset-andy-lau' },
        { type: 'cta', text: '浏览全部主题 →', href: '/zh/gallery' },
      ],
      en: [
        'The stage black gold codex theme is the one preset in the gallery that reads as expensive. Pure black base, champagne gold accents, light behaving like a single spotlight on an empty stage. No neon, no gradients fighting each other. This guide walks the palette hex by hex, explains why black and gold is harder to get right than it looks, and says plainly who should skip it.',
        { type: 'h2', text: 'Why black and gold is harder than it looks' },
        'Gold is not really a color, it is a behavior. In the physical world it works because of the gap between highlight and shadow. On a screen you only have flat values, so gold has to be faked with a narrow band of desaturated yellow-brown, somewhere around #c8a45c. Raise the saturation and it turns to mustard. Drop the lightness and it goes to mud. The usable window is tiny, which is why most black-and-gold attempts online look cheap instead of premium.',
        'The second half is restraint. Real gold reads as expensive because there is so little of it. Once gold covers more than a tenth of the screen it stops being an accent and becomes a theme color, and the whole thing drifts toward casino. This preset keeps gold on window borders, the active tab underline, and the caret. Nothing else gets any.',
        { type: 'h2', text: 'The palette, hex by hex' },
        {
          type: 'ul',
          items: [
            'Base #141414: near-black with a trace of warmth, easier to sit with than #000',
            'Panel #2a2a2a: sidebar and title bar, enough separation without drawing a border',
            'Accent #c8a45c: champagne gold, only on active borders, caret, and links',
            'Dim gold #8a7038: hover and pressed states, gold pulled back so the UI does not flicker',
            'Text #ece7dd: warm off-white rather than pure white, matched to the gold temperature',
          ],
        },
        'The choice worth explaining is #141414 instead of #000000. Pure black under bright text produces halation on OLED panels and on plenty of cheap IPS ones, where letter edges bloom slightly. A near-black base removes most of that. You will not consciously see the color difference. You will notice it after two hours.',
        { type: 'h2', text: 'How to pair a black gold theme' },
        'For the editor itself, Dark+ or GitHub Dark. Both lean neutral-cool, which sounds like a fight with warm gold and mostly is not, because the gold never enters the code area. Avoid Monokai and anything with a strong yellow-green string color. Two different yellows in one window look like a mistake rather than a decision.',
        'Wallpaper: flat #141414, or a very dark photo with one light source. Busy wallpaper kills the spotlight idea and the theme stops meaning anything. Keep the icon theme default. Colored folder icons are the fastest way to ruin a black gold theme.',
        'If your setup supports window transparency, 92 to 95 percent is the range. Go lower and the thin gold borders lose contrast against whatever sits behind the window.',
        { type: 'h2', text: 'Who it suits, and when to skip it' },
        'It suits people who work at night, people who record or stream and want a frame that looks deliberate, and anyone tired of blue-gray defaults. It is a usable dark codex theme first and a style statement second, and that order matters.',
        'Skip it in a bright room. Low-key dark themes need controlled light, and daylight on a black panel turns the screen into a mirror. Skip it also if you rely on interface color coding: git status colors, per-language icon tints, colored terminal output. This theme wants the interface quiet and it will fight you on that.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Is the stage black gold theme good for long coding sessions?', a: 'Yes, with one condition. The #141414 base with warm off-white text is easier on the eyes than pure black with pure white. The condition is ambient light. In a bright room, any dark theme costs you more than it gives.' },
            { q: 'Black gold or plain black?', a: 'Plain black is the safer default. Gold gives the interface an anchor. Once you learn that gold means active, you spend less time hunting for which pane has focus. Small, real, separate from how it looks.' },
            { q: 'Will it clash with my code theme?', a: 'Only if your code theme leans yellow. Neutral dark schemes are fine. Two yellows on one screen are not.' },
            { q: 'Does this theme cost anything?', a: 'The black-gold stage preset sits in the Pro tier. The free tier ships eight themes across the pink, sci-fi, dark, and fresh categories.' },
          ],
        },
        'The honest advice is to look before you commit. Five minutes with a palette on a preview page tells you more than any writeup, including this one.',
        { type: 'cta', text: 'See the black-gold stage theme in the codex-skin-studio.shop gallery', href: '/en/gallery/preset-andy-lau' },
        { type: 'cta', text: 'Browse all themes →', href: '/en/gallery' },
      ],
    },
  },
  {
    slug: 'codex-vs-cursor-vs-trae-editor-themes',
    date: '2026-08-14',
    title: {
      zh: 'Codex vs Cursor vs Trae：AI 编程工具界面颜值对比，谁的主题更好看',
      en: 'Codex vs Cursor vs Trae: Which AI Code Editor Looks Best?',
    },
    description: {
      zh: 'Codex、Cursor、Trae 三款 AI 编程工具都能写代码，但界面质感天差地别。这篇从主题生态、自定义能力、暗色模式三个维度对比，告诉你哪款最好看、怎么换肤最省事。',
      en: 'Codex, Cursor and Trae all write code for you, but their interfaces feel very different. We compare theming ecosystems, customization depth, and dark-mode polish to answer which AI code editor looks best — and how to skin each one.',
    },
    content: {
      zh: [
        '选 AI 编程工具，大家比模型、比价格，很少有人先看界面。但你要在编辑器里坐八个小时，代码写得再聪明，一个辣眼睛的主题也能把你的耐心磨光。这篇把 Codex 桌面端、Cursor、Trae 三款主流 AI 编辑器放在一起，从主题生态、自定义能力、暗色模式三个维度对比，最后给换肤方案。',
        { type: 'h2', text: '三款编辑器一眼看完' },
        {
          type: 'ul',
          items: [
            'Codex 桌面端：OpenAI 出品，界面克制干净，主打专注；主题全靠社区工具补位',
            'Cursor：VS Code 血统，主题市场直接继承 VS Code 生态，选择最多',
            'Trae：国内团队出品，IDE 级功能整合，主题相对封闭但自带几套质感不错的暗色',
          ],
        },
        '三款都能写代码，但"看起来怎么样"是另一回事。Codex 桌面端没有官方主题商店，Cursor 靠 VS Code 生态躺赢，Trae 在封闭生态里自己做设计。下面逐个说。',
        { type: 'h2', text: 'Codex 桌面端：为专注而生的克制界面' },
        'Codex 桌面端的默认界面走的是"少即是多"路线：深色面板、克制的强调色、几乎没有装饰。它把注意力留给对话和代码，这是 OpenAI 一贯的设计哲学。但代价是——你想换个样子的时候，官方没有主题商店，设置里能改的只有字号和深浅模式。',
        '这时候就需要第三方工具补位。Codex Skin Studio 通过 CDP（Chrome DevTools Protocol）向运行中的 Codex 桌面端注入主题样式，不改任何官方文件，关掉即还原，升级 Codex 也不会丢主题。内置 8 款精选主题，从粉系的浪漫玫瑰、暗黑系的舞台黑金，到科幻系的红白赛博朋克都有。',
        { type: 'cta', text: '看看 8 款精选 Codex 主题 →', href: '/en/guides/best-codex-themes' },
        { type: 'h2', text: 'Cursor：VS Code 血统，主题选择最多的赢家' },
        'Cursor 本质上是 VS Code 的分支，所以它白捡了 VS Code 十几年积累的主题生态：VS Code 市场里上万款主题，装个扩展就能用。这是 Cursor 在"好不好看"这件事上的最大优势——选择多到挑花眼。',
        '代价是它骨子里还是编辑器不是"AI 产品"：主题改的是语法高亮和 UI 配色，AI 面板（Chat、Composer）的样式和编辑器主体常常脱节，混搭感明显。而且 Cursor 的暗色模式是对 VS Code 默认暗色的微调，谈不上设计感。',
        { type: 'h2', text: 'Trae：封闭生态里的设计课代表' },
        'Trae 是国内团队的 AI IDE，整合了构建、调试、终端，想做成"全家桶"。主题方面它没接 VS Code 市场，走封闭路线，自带几套暗色主题，默认那套深蓝黑质感确实在线，适合不喜欢折腾的人。',
        '短板也很明显：主题数量少、不能导入第三方主题、自定义只能改改强调色和字体。如果你对界面有自己的想法，Trae 给不了你太多空间。',
        { type: 'h2', text: '直接对比：主题生态 / 自定义 / 暗色模式' },
        {
          type: 'ul',
          items: [
            '主题数量：Cursor（上万款）> Codex 桌面端（8 款官方 + 社区工具扩展）> Trae（个位数内置）',
            '自定义深度：Cursor 改 JSON 配置，上限高；Codex 用 Codex Skin Studio 换肤，无需碰配置文件；Trae 只能改强调色',
            '暗色模式质感：Trae 默认最佳，Codex 靠第三方主题反超，Cursor 中规中矩',
            '换肤成本：Codex 最低（工具一键套用）；Cursor 需要装扩展；Trae 基本没有可换的',
          ],
        },
        '结论：喜欢折腾选 Cursor，不想折腾又要质感选 Trae，想在"克制的底色上换一套喜欢的皮"选 Codex 桌面端 + 换肤工具。',
        { type: 'h2', text: '如果还是拿不定主意' },
        '说点实际的。为 AI 功能换编辑器的开发者，通常只关心三件事：模型好不好用、价格合不合适、每天坐着舒不舒服。前两件事网上评测一大把，第三件很少有人认真讲。Cursor 靠 VS Code 生态赢下主题选择，但 AI 面板和编辑器主体常常像两个软件；Trae 开箱即用最省心，但想改没得改；Codex 桌面端一开始就刻意做减法——这反而意味着你给它加的任何东西（包括用 Codex Skin Studio 换上的整套主题）都像是有意为之，而不是继承来的。',
        { type: 'h2', text: 'Codex 桌面端怎么换主题' },
        'Codex Skin Studio 目前支持 macOS 和 Windows：下载安装 → 点「启动注入」→ 在主题库挑一款（或上传自定义背景）→ 立即生效。全程不改官方文件，不满意一键还原。',
        { type: 'cta', text: '免费下载，给 Codex 换身新衣服', href: '/en/download' },
        { type: 'cta', text: '看 Codex 换肤完整教程 →', href: '/en/blog/codex-skin-complete-guide' },
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: '哪款 AI 编辑器的主题最好看？', a: '看需求：想要最多选择选 Cursor（继承 VS Code 生态）；想要开箱即用的质感选 Trae；想要"克制底色 + 换皮自由"选 Codex 桌面端配换肤工具。' },
            { q: 'Codex 桌面端能换主题吗？', a: '官方没有主题商店，但可以用 Codex Skin Studio 这类工具通过 CDP 注入主题，不改官方文件，支持 macOS 和 Windows。' },
            { q: '换肤会不会影响 Codex 更新？', a: '不会。主题是运行时注入的，不修改任何官方文件，Codex 更新后主题依然可用，关掉工具即完全还原。' },
            { q: 'Cursor 的主题能用到 Codex 上吗？', a: '不能直接复用，两者底层不同。不过 Codex Skin Studio 的主题风格（粉系、科幻、暗黑、清新）覆盖了 Cursor 市场里最热门的几类审美。' },
          ],
        },
        '最后说一句：界面好不好看没有标准答案，但"能不能换"是硬指标。挑编辑器的时候，把主题生态也放进对比清单，别等到看腻了才发现没得换。',
        { type: 'cta', text: '浏览全部 Codex 主题 →', href: '/en/gallery' },
      ],
      en: [
        'When people pick an AI coding tool, they compare models, pricing, and context windows — rarely the interface. But you sit in the editor for eight hours a day, and a poorly designed theme will grind your patience down faster than any model limitation. This guide puts the three mainstream AI editors — Codex desktop, Cursor, and Trae — side by side on theming ecosystems, customization depth, and dark-mode polish, and ends with a concrete skinning playbook for each.',
        { type: 'h2', text: 'The three editors at a glance' },
        {
          type: 'ul',
          items: [
            'Codex desktop (OpenAI): a restrained, focused interface with no official theme store — theming is handled by community tools',
            'Cursor: a VS Code fork, which means it inherits the entire VS Code extension theme marketplace',
            'Trae (ByteDance): an all-in-one AI IDE with a closed theming system and a handful of genuinely well-designed dark themes',
          ],
        },
        'All three write code for you. How they look is a completely different question. Codex ships with a deliberately minimal look, Cursor wins on sheer choice by inheriting VS Code, and Trae does its own design inside a closed ecosystem. Let us go one by one.',
        { type: 'h2', text: 'Codex desktop: a clean slate built for focus' },
        'The Codex desktop app follows a "less is more" philosophy: dark panels, restrained accents, almost no decoration. It keeps your attention on the conversation and the code, which is classic OpenAI design thinking. The trade-off is that there is no official theme store — the settings panel lets you change font size and light/dark mode, and that is about it.',
        'That gap is exactly where third-party tools step in. Codex Skin Studio themes the running Codex desktop app via CDP (Chrome DevTools Protocol) loopback injection. It does not modify any official files, everything reverts when you quit the tool, and your themes survive Codex updates. It ships with 8 curated presets spanning pink, sci-fi, dark, and fresh styles — from Romantic Rose and Stage Black Gold to Red Sci-Fi Cyberpunk.',
        { type: 'cta', text: 'See the 8 curated Codex themes →', href: '/en/guides/best-codex-themes' },
        { type: 'h2', text: 'Cursor: VS Code DNA and the biggest theme library' },
        'Cursor is a VS Code fork, so it inherits one enormous advantage: the VS Code marketplace, with tens of thousands of themes you can install in one click. If choice is what you want, Cursor wins outright — the hard part becomes picking one and sticking with it.',
        'The cost is that Cursor still feels like an editor, not an AI product. Themes change syntax highlighting and UI colors, but the AI surface — the chat and composer panels — often looks disconnected from the rest of the window. Its dark mode is a slight retune of VS Code default dark, and the whole experience rarely feels "designed".',
        { type: 'h2', text: 'Trae: the design pick of a closed ecosystem' },
        'Trae is ByteDance\'s AI IDE, bundling build, debug, and terminal into a single package. It deliberately does not plug into the VS Code marketplace; theming is closed, with a handful of built-in dark themes. The default deep blue-black scheme genuinely looks polished, and for people who never want to touch theme settings, it is the best out-of-the-box experience of the three.',
        'The downside is equally clear: few themes, no third-party imports, and customization limited to accent color and font. If you have opinions about how your editor should look, Trae gives you almost no room to express them.',
        { type: 'h2', text: 'Side by side: themes, customization, dark mode' },
        {
          type: 'ul',
          items: [
            'Theme count: Cursor (tens of thousands) > Codex desktop (8 official + community skinning tools) > Trae (single-digit built-ins)',
            'Customization depth: Cursor edits JSON configs, high ceiling; Codex swaps skins through a tool without touching config files; Trae is accent-color only',
            'Dark-mode polish: Trae ships best by default, Codex catches up via third-party themes, Cursor is competent but generic',
            'Effort to reskin: Codex is lowest (one-click apply); Cursor needs extension browsing; Trae has almost nothing to swap',
          ],
        },
        'The short version: pick Cursor if you love tweaking, pick Trae if you want polish with zero effort, and pick Codex desktop with a skinning tool if you want a focused base that you can dress up whenever you feel like it.',
        { type: 'h2', text: 'If you are still undecided' },
        'Here is the practical version. Developers who switch editors for AI features usually care about three things: model access, pricing, and daily comfort. The first two are covered by a thousand reviews; the third one rarely gets a serious mention. Cursor wins the theme lottery by inheriting VS Code, but pays for it with an AI surface that can feel like a different app bolted onto the editor. Trae looks great out of the box and costs nothing to maintain, but there is no room to make it yours. Codex desktop starts minimal, and deliberately so — which means whatever you add to it, including a full theme from Codex Skin Studio, reads as intentional rather than inherited.',
        { type: 'h2', text: 'How to theme the Codex desktop app' },
        'Codex Skin Studio supports macOS and Windows: download and install → click "Start injection" → pick a theme in the library (or upload your own background) → applied instantly. No official files are touched, and one click restores the official look.',
        { type: 'cta', text: 'Download free and reskin Codex', href: '/en/download' },
        { type: 'cta', text: 'Read the complete Codex skinning guide →', href: '/en/blog/codex-skin-complete-guide' },
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Which AI editor has the best themes?', a: 'Depends on what you want: most choice goes to Cursor (it inherits the VS Code ecosystem); best out-of-the-box polish goes to Trae; and the "focused base with free skinning" pick goes to Codex desktop paired with a skinning tool.' },
            { q: 'Can you theme the Codex desktop app?', a: 'There is no official theme store, but tools like Codex Skin Studio inject themes over CDP without modifying official files, on macOS and Windows.' },
            { q: 'Does reskinning Codex break updates?', a: 'No. Themes are applied at runtime via injection and never touch official files, so themes survive Codex updates, and quitting the tool fully restores the original look.' },
            { q: 'Can Cursor themes be used in Codex?', a: 'Not directly — they are built on different foundations. But Codex Skin Studio presets (pink, sci-fi, dark, fresh) cover the most popular aesthetic categories in the Cursor marketplace.' },
          ],
        },
        'One last note: whether an interface looks good is subjective, but whether you can change it is not. Put the theming ecosystem on your comparison checklist before you commit — do not wait until you are bored of the default to find out there is no way out.',
        { type: 'cta', text: 'Browse all Codex themes →', href: '/en/gallery' },
      ],
    },
  },
  {
    slug: 'codex-theme-light-dark-modes',
    date: '2026-08-15',
    title: {
      zh: "Codex 主题的亮色暗色到底怎么适配？一篇讲透",
      en: "Which Modes Do Codex Themes Support? A Light/Dark Guide",
    },
    description: {
      zh: 'Codex 主题怎么适配亮色和暗色？这篇讲透亮色暗色模式的工作原理、哪些主题默认支持双模式、自定义主题为什么要两套配色都写，以及切换时怎么避免刺眼。',
      en: 'How do Codex themes handle light and dark mode? This guide explains light/dark adaptation, which themes support both modes by default, why custom themes need two palettes, and how to switch without eye strain.',
    },
    content: {
      zh: [
        "后台收到最多的提问，不是\"哪个颜色好看\"，而是\"我的主题怎么不会自动跟着系统切换\"。今天把 Codex 主题亮色暗色（codex theme light dark mode）这件事从头讲透。",
        {
                "type": "h2",
                "text": "一套主题，为什么非要配两套颜色"
        },
        "白天在亮色界面下看久了眼睛容易累，到了晚上暗色反而更舒服。这不是玄学，是大多数编辑器用户的真实使用节奏。light dark mode 适配，就是让同一套主题在两种环境下都成立，而不是让你每天手动去改设置。",
        {
                "type": "h2",
                "text": "双模式是怎么定义出来的"
        },
        "每个主题文件里其实藏着两份配色表，一份叫 light，一份叫 dark，背景、前景、边框、语法高亮各管各的。",
        "如果你打开自定义主题的设置页，看到两套色板，别嫌麻烦，它们各有各的用途。",
        {
                "type": "h2",
                "text": "跟随系统：prefers-color-scheme 怎么声明"
        },
        "Codex 主题支持三种模式：强制亮色、强制暗色、自动。自动模式依赖 CSS 的 `prefers-color-scheme` 媒体查询，系统亮它就显示亮色，系统暗它就切暗色，不需要你点任何东西。主题文件里的声明大致长这样：",
        "```",
        "@media (prefers-color-scheme: dark) {",
        "  :root { /* 暗色变量覆盖 */ }",
        "}",
        "```",
        "一句话总结：只要主题声明了这个查询，你的编辑器就会跟着操作系统的深浅色走。",
        {
                "type": "h2",
                "text": "哪些内置主题默认支持双模式"
        },
        "这一版内置主题里，下面这几款默认就带完整的 light/dark 双套配色：",
        {
                "type": "ul",
                "items": [
                        "Codex 官方默认主题",
                        "石墨风（Graphite）",
                        "晚霞（Dusk）",
                        "纸墨（Ink Paper）",
                        "森林（Forest）"
                ]
        },
        "安装后在设置里把模式切到\"自动\"，马上就能看到效果。想看更多样式，可以逛逛",
        {
                "type": "cta",
                "text": "/zh/gallery",
                "href": "/zh/gallery"
        },
        {
                "type": "h2",
                "text": "自定义主题时，两套配色都要写的真正原因"
        },
        "很多人自定义主题只写了一套颜色，结果切到另一模式后，界面要么发白要么发黑，文字直接看不见。原因不复杂：主题框架会在两种模式之间切换变量，你没定义的那套变量会回落到默认值，对比度当场崩掉。两套都写上，等于给两种环境都准备了合理参数，切换时不会翻车。",
        {
                "type": "h2",
                "text": "切换时怎么避免刺眼过渡"
        },
        "从亮变暗只花一帧，整个屏幕闪一下，眼睛很难受。我常用的做法：",
        {
                "type": "ul",
                "items": [
                        "别用瞬时切换，让过渡动画控制在 150–300 毫秒",
                        "暗色背景别用纯黑，带一点蓝灰的深色，能明显缓解眩光",
                        "两个模式里保持高亮色同一色相，只调明度",
                        "切换完先看语法高亮，确认没有跟背景撞色的文字"
                ]
        },
        "**Codex 主题怎么跟随系统自动切换？**",
        "在主题设置里把模式选成\"自动\"，主题会读取系统的 prefers-color-scheme，跟着深浅色走。",
        "How do I make my Codex theme follow the system? Pick \"auto\" in the theme settings and it will listen to prefers-color-scheme.",
        "**我自定义的主题切到暗色后文字看不清，怎么办？**",
        "多半只写了亮色那套变量。去",
        {
                "type": "cta",
                "text": "/guides/customize",
                "href": "/guides/customize"
        },
        "Text is unreadable in dark mode on my custom theme. You likely only defined the light variables. Head to /guides/customize and fill in the dark set.",
        "**内置主题全都支持双模式吗？**",
        "不是全部，上面列的五款默认支持，其余的在设置里确认一下就行。",
        "Do all built-in themes support both modes? Not all. The five listed above do; check the settings for the rest.",
        "想要更多配色灵感，回到",
        {
                "type": "cta",
                "text": "Codex 主题站首页",
                "href": "/"
        }
],
      en: [
        "The question I get most in the theme store inbox is not \"which colors look nice.\" It's \"why doesn't my theme follow my system automatically?\" Let me walk you through how codex theme light dark mode actually works, from the two color tables to the switch animation.",
        {
                "type": "h2",
                "text": "Why one theme needs two color schemes"
        },
        "In the morning I want a bright workspace. At night, the same screen feels like it's screaming at me. That's not a preference thing, it's a rhythm most editor users share. A Codex theme with proper light dark mode support gives you two working setups, so you never have to dig into settings just to change the lighting.",
        {
                "type": "h2",
                "text": "How a dual-mode theme is put together"
        },
        "Inside every theme file there are two color tables hiding. One is called light, the other dark. They handle background, foreground, borders and syntax highlight independently.",
        "If you open the customizer and see two palettes, don't be annoyed. They each earn their keep.",
        {
                "type": "h2",
                "text": "Following the system: prefers-color-scheme"
        },
        "Codex themes ship with three modes: force light, force dark, and auto. Auto relies on the CSS `prefers-color-scheme` media query. When your OS is light, the theme stays light; flip the OS to dark and the theme follows. No clicks needed.",
        "```",
        "@media (prefers-color-scheme: dark) {",
        "  :root { /* dark variable overrides */ }",
        "}",
        "```",
        "That's the whole trick. If the theme declares this query, your editor follows the system scheme.",
        {
                "type": "h2",
                "text": "Which built-in themes support both modes by default"
        },
        "Five built-ins ship with a complete light/dark pair out of the box:",
        {
                "type": "ul",
                "items": [
                        "Codex default theme",
                        "Graphite",
                        "Dusk",
                        "Ink Paper",
                        "Forest"
                ]
        },
        "Pick \"auto\" in the settings and you can see the effect immediately. For more styles, browse",
        {
                "type": "cta",
                "text": "/zh/gallery",
                "href": "/zh/gallery"
        },
        {
                "type": "h2",
                "text": "The real reason to write both palettes when you customize"
        },
        "People often define one palette and call it done. Then they flip to the other mode and the interface turns into a whiteout or a black hole. The theme framework swaps variables between the two schemes, and anything you left undefined falls back to the default. That's when contrast falls apart. Writing both palettes is just giving both environments sane parameters so the switch never breaks.",
        {
                "type": "h2",
                "text": "Avoiding the harsh flash on switch"
        },
        "Going from light to dark in one frame makes the whole screen blink. It stings. What works for me:",
        {
                "type": "ul",
                "items": [
                        "Skip instant switching. Let the transition run 150 to 300 milliseconds.",
                        "Avoid pure black in dark mode. A deep blue-gray is much easier on the eyes.",
                        "Keep the same hue for highlight colors in both modes, only adjust lightness.",
                        "Check syntax highlights right after switching. Make sure no text collides with the background."
                ]
        },
        "**How do I make my Codex theme follow the system?**",
        "Pick \"auto\" in the theme settings. The theme reads prefers-color-scheme and follows the OS. 我的 Codex 主题怎么跟随系统？在设置里选\"自动\"即可。",
        "**Text is unreadable in dark mode on my custom theme.**",
        "You probably only wrote the light variables. Head to",
        {
                "type": "cta",
                "text": "/guides/customize",
                "href": "/guides/customize"
        },
        "**Do all built-in themes support both modes?**",
        "Not all of them. The five listed above do, and the rest can be checked in the settings. 内置主题都支持双模式吗？不是全部，上面列的五款默认支持。",
        "If you want more color inspiration, head back to the",
        {
                "type": "cta",
                "text": "Codex theme store homepage",
                "href": "/"
        }
],
    },
  },

  {
    slug: 'pink-codex-theme-tour',
    date: '2026-08-16',
    title: {
      zh: "Codex 粉系主题速览：温柔工作台怎么搭",
      en: "Codex Pink Themes Quick Tour: Build a Soft, Focused Workspace",
    },
    description: {
      zh: 'Codex 粉系主题（codex pink theme）盘点：粉色调为什么适合长时间编码、内置粉色 preset 有哪些、怎么把任意主题调成粉色系，以及粉色搭配暗色模式的小技巧。',
      en: 'A codex pink theme quick tour: why pink palettes work for long coding sessions, which built-in pink presets exist, how to recolor any theme pink, and tips for pairing pink with dark mode.',
    },
    content: {
      zh: [
        "粉色常被当成\"不够极客\"的颜色，但真正把 codex pink theme 装过的人都知道：粉色工作台对长时间编码意外地友好。今天把内置粉系主题翻一遍，再教你怎么把任意主题调成粉色系。",
        {
                "type": "h2",
                "text": "为什么粉色适合编码"
        },
        "编辑器天天看，配色选的不是\"好看\"，是\"不累\"。粉色的问题在于高饱和粉看久了刺眼，但低饱和的玫瑰粉、豆沙粉反而比纯白和纯黑更舒服：",
        {
                "type": "ul",
                "items": [
                        "低饱和粉背景降低对比刺激，眼睛不容易疲劳",
                        "粉色与代码默认的蓝绿紫语法色不冲突，高亮依旧清晰",
                        "长时间盯着写代码，暖色调比冷色调更容易让注意力停留"
                ]
        },
        "一句话：粉色不是卖萌，是一种被低估的护眼方案。",
        {
                "type": "h2",
                "text": "内置粉色 preset 盘点"
        },
        "主题库里分了一个专门的 pink 分类，下面这几款都是直接能装的：",
        {
                "type": "ul",
                "items": [
                        "preset-yang-simin（杨思敏主题）：玫红+浅粉渐变，配旗袍红裙插画，浪漫里带点复古",
                        "preset-dilraba（迪丽热巴主题）：偏明亮的粉调，适合喜欢活泼一点工作台的开发者"
                ]
        },
        "两款都做了暗色模式适配，晚上切暗色不会闪白。想看完整图库和效果预览，去",
        {
                "type": "cta",
                "text": "/zh/gallery",
                "href": "/zh/gallery"
        },
        {
                "type": "h2",
                "text": "没有现成粉色？自己调一个"
        },
        "内置 preset 不够粉？自定义主题里改三组变量就够了：背景、前景、强调色。记住三个数值参考：",
        {
                "type": "ul",
                "items": [
                        "背景用低饱和粉：色相 330-350°，饱和度 15-25%，明度 90% 以上",
                        "前景文字用深灰紫，别用纯黑，纯黑在粉底上对比太硬",
                        "强调色（选中、光标、按钮）用玫红或珊瑚粉，饱和度 60-70%，一眼能找到"
                ]
        },
        "改完保存，重启生效。想照着官方教程一步步来，翻",
        {
                "type": "cta",
                "text": "/guides/customize",
                "href": "/guides/customize"
        },
        {
                "type": "h2",
                "text": "粉色 + 暗色模式的搭配技巧"
        },
        "很多人担心粉色只有亮色好看，其实暗色粉才是隐藏宝藏：",
        {
                "type": "ul",
                "items": [
                        "暗色背景用深紫粉（明度 15% 左右），不是纯黑，保持粉调",
                        "语法高亮在暗粉底上选淡粉、淡黄、薄荷绿，对比柔和",
                        "把强调色统一成亮玫红，夜间写代码找光标不费劲"
                ]
        },
        "**粉色主题会不会影响专注力？** 高饱和粉色会，低饱和不会。选背景饱和度 20% 以内的粉，专注力和白底没有差别。",
        "**Codex 内置粉色 preset 只有两款吗？** 目前 pink 分类下是这两款，但社区皮肤里还有更多粉色系，图库里都能翻到。",
        "**粉色主题适合暗色模式吗？** 非常适合。暗粉底比纯黑底更暖，夜间长时间编码眼睛更放松。",
        "想让整个工作台都换成粉色系，回",
        {
                "type": "cta",
                "text": "Codex 主题库首页",
                "href": "/"
        }
      ],
      en: [
        "Pink gets dismissed as not-nerdy-enough, but anyone who has actually run a codex pink theme knows: a pink workspace is surprisingly good for long sessions. Let's tour the built-in pink presets, then cover how to recolor any theme pink.",
        {
                "type": "h2",
                "text": "Why pink works for coding"
        },
        "You pick an editor color scheme for comfort, not for looks. High-saturation pink is harsh, but low-saturation rose and dusty pink are easier on the eyes than pure white or pure black:",
        {
                "type": "ul",
                "items": [
                        "Low-saturation pink backgrounds lower contrast strain, eyes tire less",
                        "Pink does not fight the default blue, green, purple syntax colors, highlighting stays readable",
                        "Warm palettes hold attention better than cold ones over hours of staring at code"
                ]
        },
        "In short: pink is not cute, it is an underrated eye-saver.",
        {
                "type": "h2",
                "text": "Built-in pink presets"
        },
        "The theme library keeps a dedicated pink category. These two are install-ready:",
        {
                "type": "ul",
                "items": [
                        "preset-yang-simin: rose and blush gradient with a cheongsam illustration, romantic with a retro twist",
                        "preset-dilraba: a brighter pink tone, for developers who want a livelier desk"
                ]
        },
        "Both ship with dark-mode palettes, so switching at night will not flash white. Browse the full gallery and previews at",
        {
                "type": "cta",
                "text": "/gallery",
                "href": "/gallery"
        },
        {
                "type": "h2",
                "text": "No pink preset? Recolor any theme"
        },
        "If the built-ins are not pink enough, edit three variable groups in any custom theme: background, foreground, accent. Three reference values:",
        {
                "type": "ul",
                "items": [
                        "Background: low-saturation pink, hue 330-350°, saturation 15-25%, lightness above 90%",
                        "Foreground: dark gray-purple, not pure black, pure black is too hard against pink",
                        "Accent (selection, cursor, buttons): rose or coral, saturation 60-70%, easy to spot"
                ]
        },
        "Save and restart. For the official step-by-step, check",
        {
                "type": "cta",
                "text": "/guides/customize",
                "href": "/guides/customize"
        },
        {
                "type": "h2",
                "text": "Pink meets dark mode"
        },
        "People assume pink only works in light mode. Dark pink is the hidden gem:",
        {
                "type": "ul",
                "items": [
                        "Dark background: deep purple-pink at around 15% lightness, not pure black, keep the pink tone",
                        "Syntax colors: pale pink, pale yellow, mint green on dark pink, soft contrast",
                        "Accent: a single bright rose, so the cursor is easy to find at night"
                ]
        },
        "**Does a pink theme hurt focus?** High-saturation pink does. Low-saturation pink does not. Keep the background under 20% saturation and focus is identical to a white background.",
        "**Are there only two built-in pink presets?** That is the pink category right now, but community skins include more pink options, all browsable in the gallery.",
        "**Is pink good for dark mode?** Very. Dark pink is warmer than pure black, so eyes relax more during late-night sessions.",
        "Ready to go full pink? Head back to",
        {
                "type": "cta",
                "text": "the theme store homepage",
                "href": "/"
        }
      ]
    },
  },
  {
      "slug": "codex-sci-fi-theme-tour",
      "date": "2026-08-17",
      "title": {
          "zh": "Codex 科幻主题速览：未来感工作台怎么搭",
          "en": "Codex Sci-Fi Themes Quick Tour: Build a Futuristic Workspace"
      },
      "description": {
          "zh": "Codex 科幻主题（codex sci-fi theme）盘点：哪些内置 preset 自带未来感、深色科幻配色怎么搭、霓虹强调色的正确用量，以及暗色模式下的可读性陷阱。",
          "en": "A codex sci-fi theme quick tour: which built-in presets feel futuristic, how to build a dark sci-fi palette, the right amount of neon accent, and readability traps in dark mode."
      },
      "content": {
          "zh": ["科幻主题是 Codex 主题里最“出片”的一类，但也是最容易翻车的一类。霓虹色滥用、对比度崩坏、长时间盯屏眼睛发酸，都是常见问题。今天把内置科幻 preset 翻一遍，再讲清楚未来感配色到底怎么搭才不伤眼。",{"type":"h2","text":"哪些内置 preset 自带科幻感"},"主题库里没有单独的 sci-fi 分类，但深色系里好几款都是天然科幻底子：",{"type":"ul","items":["gothic-void-expedition（哥特虚空远征）：深紫黑底 + 青绿高亮，太空探索气质，字符几乎全透明发光","cyber-neon（赛博霓虹）：黑底 + 品红/青色双霓虹，夜店感强，适合喜欢高饱和的用户","monokai-stone（Monokai 石）：经典 Monokai 的暗色变体，霓虹含量低，属于“克制科幻”","tokyo-night 系列：东京夜配色，深蓝底 + 粉紫高亮，很多开发者觉得这是最耐看的科幻风"]},"想直接看效果图，去",{"type":"cta","text":"/zh/gallery","href":"/zh/gallery"},{"type":"h2","text":"科幻配色三原则"},"未来感不等于满屏霓虹。真正耐看的科幻工作台，通常遵守三条原则：",{"type":"ul","items":["背景要暗但不要纯黑：纯黑在暗室里看久了眼睛发酸，深蓝或深紫（10-15% 亮度）更舒适","霓虹只做高亮和强调色：语法高亮、光标、选中区用霓虹，大面积文字保持低饱和灰","冷暖成对出现：青色配品红、蓝配紫，成对对比才像“科幻”，单一霓虹色会显得廉价"]},"一句话：科幻感来自背景和强调色的对比关系，不来自霓虹色数量。",{"type":"h2","text":"暗色模式下的可读性陷阱"},"深色科幻主题最大的坑是注释和次要文本看不清。霓虹色背景上，灰色注释几乎消失。装完主题先检查三处：",{"type":"ul","items":["注释色：至少 4.5:1 对比度，不能比背景只亮一点点","选中区：半透明霓虹高亮，避免整行实色挡住文字","光标：换一个与语法高亮不同色的霓虹，别混在一起"]},"这三处调好，科幻主题就能从“好看但没法干活”变成“好看又能干活”。",{"type":"h2","text":"怎么把任意主题调成科幻风"},"不想换主题？自定义模式改三组变量就够了：背景改成深蓝或深紫，前景保持低饱和灰，强调色换成霓虹青或品红。改动量比想象中小，效果却立竿见影。","调完记得对比度检查：注释 4.5:1、正文 7:1，这是 WCAG 的底线，也是“科幻不伤眼”的底线。",{"type":"h2","text":"FAQ"},"**科幻主题会伤眼睛吗？** 高饱和霓虹大面积铺开会。正确的做法是把霓虹限制在高亮和强调色，背景保持深蓝或深紫的暗色，这样既出效果又护眼。","**Codex 内置哪些科幻主题？** 深色系里的 gothic-void-expedition、cyber-neon、monokai-stone 和 tokyo-night 系列都是科幻底子，社区还有更多，全部能在图库浏览。","**霓虹色该用多少？** 原则是“少而精”：语法高亮、光标、选中区用霓虹，正文和背景保持低饱和。霓虹越多，长时间盯屏越累。","想要完整图库和效果预览，回到",{"type":"cta","text":"主题商店首页","href":"/"}],
          "en": ["Sci-fi themes are the most photogenic category in the Codex theme store, and also the easiest to get wrong. Neon overload, crushed contrast, sore eyes after an hour of work — all classic. This quick tour runs through the built-in futuristic presets and explains how to build a sci-fi palette that still reads well at hour six.",{"type":"h2","text":"Which built-in presets feel sci-fi"},"There is no dedicated sci-fi category, but several dark presets are natural sci-fi bases:",{"type":"ul","items":["gothic-void-expedition: deep purple-black with teal highlights, space-exploration energy","cyber-neon: black background with magenta and cyan double-neon, nightclub energy","monokai-stone: a dark variant of classic Monokai, low neon, the restrained sci-fi option","tokyo-night series: deep blue base with pink and purple highlights, the one many devs find most comfortable"]},"For the full gallery with previews, head to",{"type":"cta","text":"/en/gallery","href":"/en/gallery"},{"type":"h2","text":"Three rules for sci-fi palettes"},"Futuristic does not mean wall-to-wall neon. Workable sci-fi workspaces follow three rules:",{"type":"ul","items":["Dark but not pure black: deep blue or purple at 10-15% lightness is easier on the eyes than #000","Neon only for highlights and accents: syntax colors, cursor, selection; body text stays low-saturation gray","Pair warm and cool: cyan with magenta, blue with purple. A single neon color reads as cheap, a pair reads as sci-fi"]},"The sci-fi feel comes from the contrast between background and accent, not from the neon count.",{"type":"h2","text":"Readability traps in dark mode"},"The biggest trap in dark sci-fi themes is comments and secondary text vanishing. On a neon-tinted background, gray comments disappear. After installing any dark theme, check three spots:",{"type":"ul","items":["Comment color: at least 4.5:1 contrast against the background","Selection: semi-transparent neon highlight, not a solid bar over the text","Cursor: a neon different from the syntax colors so it never blends in"]},"Fix those three and a sci-fi theme stops being 'pretty but unusable' and becomes 'pretty and usable'.",{"type":"h2","text":"Recolor any theme sci-fi"},"Do not want to switch? The custom editor only needs three variables: background to deep blue or purple, foreground to low-saturation gray, accent to neon cyan or magenta. Less work than you would expect, and the effect is instant.","Run the contrast check when done: 4.5:1 for comments, 7:1 for body text. That is the WCAG floor and the floor for 'sci-fi without sore eyes'.",{"type":"h2","text":"FAQ"},"**Do sci-fi themes hurt your eyes?** High-saturation neon spread everywhere does. The fix is to confine neon to highlights and accents and keep the background dark blue or purple — stylish and easy on the eyes.","**Which sci-fi themes are built into Codex?** In the dark group: gothic-void-expedition, cyber-neon, monokai-stone, and the tokyo-night series. The community has more, all browsable in the gallery.","**How much neon is too much?** Less is more: neon on syntax highlights, cursor, and selection; low-saturation colors for everything else. More neon means more eye strain over time.","For the full gallery and previews, head back to",{"type":"cta","text":"the theme store homepage","href":"/"}]
      }
  },
  {
    slug: 'codex-dark-theme-tour',
    date: '2026-08-18',
    title: {
      zh: "Codex 暗黑主题速览：沉稳工作台怎么搭",
      en: "Codex Dark Themes Quick Tour: Build a Calm, Focused Workspace",
    },
    description: {
      zh: "Codex 暗黑主题（codex dark theme）盘点：哪些内置 preset 适合长时间编码、暗色配色怎么搭不刺眼、暗色模式下的可读性陷阱，以及如何把任意主题调成暗黑风。",
      en: "A codex dark theme quick tour: which built-in presets suit long coding sessions, how to build a dark palette that does not sting the eyes, the readability traps in dark mode, and how to recolor any theme dark.",
    },
    content: {
      zh: [
        "暗黑主题几乎是每个深夜编码者的默认选择，但「暗」也有讲究。纯黑背景在暗室里看久了眼睛发酸，配色没搭好还会让注释糊成一团。今天把内置暗黑系 preset 翻一遍，再讲清楚暗色配色到底怎么搭才不伤眼。",
        { type: 'h2', text: '哪些内置 preset 属于暗黑风' },
        { type: 'ul', items: [
          'preset-purple-night（紫夜限定）：深紫底 + 微光，神秘但不刺眼，夜间编码很舒服',
          'gothic-void-expedition（哥特虚空远征）：深紫黑底 + 青绿高亮，太空探索气质',
          'cyber-neon（赛博霓虹）：黑底 + 品红/青双霓虹，喜欢高饱和的可以选',
          'tokyo-night 系列：深蓝底 + 粉紫高亮，很多开发者觉得最耐看',
          'monokai-stone（Monokai 石）：经典 Monokai 暗色变体，霓虹含量低，属于「克制暗黑」',
        ] },
        { type: 'cta', text: '看看紫夜限定效果 →', href: '/zh/gallery/preset-purple-night' },
        { type: 'h2', text: '暗色配色怎么搭才不刺眼' },
        { type: 'ul', items: [
          '背景深但别纯黑：深蓝或深紫（10-15% 亮度）比 #000 更护眼',
          '文字用低饱和灰，别用纯白，纯白在暗底上对比太硬',
          '强调色只放一处高亮：选中、光标、按钮用同一个霓虹，别到处撒',
        ] },
        { type: 'h2', text: '暗色模式下的可读性陷阱' },
        { type: 'ul', items: [
          '注释色：至少 4.5:1 对比度，不能只比背景亮一点点',
          '选中区：半透明高亮，别用整行实色挡住文字',
          '光标：换一个和语法高亮不同色的霓虹，别混在一起',
        ] },
        { type: 'h2', text: '怎么把任意主题调成暗黑风' },
        "不想换主题？自定义模式改三组变量就够了：背景改成深蓝或深紫，前景保持低饱和灰，强调色换成单一霓虹。改动量比想象中小，效果却立竿见影。调完记得做对比度检查：注释 4.5:1、正文 7:1，这是 WCAG 的底线。",
        { type: 'cta', text: '跟着官方教程一步步调 →', href: '/guides/customize' },
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: '暗黑主题会比亮色更护眼吗？', a: '看怎么搭。纯黑底反而容易在暗室里刺眼；深蓝或深紫（10-15% 亮度）的背景更舒服。关键是降低对比刺激，而不是一味调暗。' },
          { q: 'Codex 内置哪些暗黑主题？', a: '深色系里的 preset-purple-night、gothic-void-expedition、cyber-neon、tokyo-night 系列和 monokai-stone 都是暗黑底子。社区还有更多，全部能在图库翻到。' },
          { q: '暗色模式最容易踩的坑是什么？', a: '注释和次要文本看不清。装完暗色主题先检查注释对比度、选中区透明度和光标颜色这三处，调好就能从「好看但没法干活」变成「好看又能干活」。' },
        ] },
        { type: 'h2', text: '回到主题库' },
        "想要完整图库和效果预览，回到 Codex Skin Studio 主题库首页，几分钟就能让你的 Codex 换个沉稳的暗黑皮肤。",
        { type: 'cta', text: 'Codex Skin Studio 主题库首页 →', href: '/' },
      ],
      en: [
        "Dark themes are the default for almost everyone who codes late, but 'dark' is a spectrum. A pure-black background stings the eyes in a dark room, and a bad palette turns comments into mush. This quick tour runs through the built-in dark presets, then explains how to build a dark palette that stays readable at hour six.",
        { type: 'h2', text: 'Which built-in presets are dark' },
        { type: 'ul', items: [
          'preset-purple-night: deep purple base with a faint glow, mysterious but easy on the eyes at night',
          'gothic-void-expedition: deep purple-black with teal highlights, space-exploration energy',
          'cyber-neon: black base with magenta and cyan double-neon, for high-saturation fans',
          'tokyo-night series: deep blue base with pink and purple highlights, the one many devs find most comfortable',
          'monokai-stone: a dark variant of classic Monokai, low neon, the restrained dark option',
        ] },
        { type: 'cta', text: 'See Purple Night in action →', href: '/en/gallery/preset-purple-night' },
        { type: 'h2', text: 'How to build a dark palette that does not sting' },
        { type: 'ul', items: [
          'Dark but not pure black: deep blue or purple at 10-15% lightness beats #000',
          'Text in low-saturation gray, not pure white; pure white is harsh against dark',
          'One neon accent only: selection, cursor, buttons share one highlight, do not scatter it',
        ] },
        { type: 'h2', text: 'Readability traps in dark mode' },
        { type: 'ul', items: [
          'Comment color: at least 4.5:1 contrast, not just a hair brighter than the background',
          'Selection: semi-transparent highlight, not a solid bar over the text',
          'Cursor: pick a neon different from the syntax highlight, keep them apart',
        ] },
        { type: 'h2', text: 'How to recolor any theme dark' },
        "Do not want to switch themes? Three variable groups in custom mode do it: background to deep blue or purple, foreground to low-saturation gray, accent to a single neon. The change is smaller than it sounds and the effect is immediate. After editing, run a contrast check: comments 4.5:1, body 7:1. That is the WCAG floor.",
        { type: 'cta', text: 'Follow the official customization guide →', href: '/guides/customize' },
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'Is a dark theme easier on the eyes than light?', a: 'It depends on the build. Pure black actually stings in a dark room; a deep blue or purple at 10-15% lightness is more comfortable. The goal is less contrast shock, not maximum darkness.' },
          { q: 'Which dark themes are built into Codex Skin Studio?', a: 'The dark-family presets are preset-purple-night, gothic-void-expedition, cyber-neon, the tokyo-night series, and monokai-stone. The community gallery has more, all browsable in the theme store.' },
          { q: 'What is the most common dark-mode mistake?', a: 'Comments and secondary text vanishing. After installing any dark theme, check comment contrast, selection transparency, and cursor color. Fix those three and a dark theme goes from pretty-but-unusable to pretty-and-productive.' },
        ] },
        { type: 'h2', text: 'Back to the theme store' },
        "For the full gallery and live previews, head back to the Codex Skin Studio theme store homepage and give your Codex a calm dark skin in a few minutes.",
        { type: 'cta', text: 'Codex Skin Studio theme store homepage →', href: '/' },
      ],
    },
  }
];
