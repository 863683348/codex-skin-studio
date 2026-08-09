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
];