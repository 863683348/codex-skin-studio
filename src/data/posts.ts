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
];