// 博客文章数据——中英双语（SEO 资产）
export type PostBlock =  | string  | { type: 'h2'; text: string }  | { type: 'p'; text: string }  | { type: 'ul'; items: string[] }  | { type: 'faq'; items: { q: string; a: string }[] }  | { type: 'cta'; text: string; href: string };export type BlogPost = {  slug: string;  date: string;  title: { zh: string; en: string };  description: { zh: string; en: string };  content: { zh: PostBlock[]; en: PostBlock[] };};export const POSTS: BlogPost[] = [  {    slug: 'what-is-codex-skin-studio',    date: '2026-08-04',    title: {      zh: '什么是 Codex Skin Studio？CDP 注入换肤入门',      en: 'What Is Codex Skin Studio? A Beginner\'s Guide to CDP Injection Theming',    },    description: {      zh: '用大白话解释 Codex Skin Studio 是什么、CDP 注入如何让你在不修改官方文件的情况下换肤。',      en: 'A plain-language intro to Codex Skin Studio: what it is, how CDP injection lets you theme Codex without touching official files.',    },    content: {      zh: [        'Codex Skin Studio 是一款面向 Codex 桌面端的换肤工具，它通过 Chrome DevTools Protocol（CDP）在本机运行时为 Codex 注入主题样式，全程不修改官方安装目录下的任何文件。',        { type: 'h2', text: '为什么用 CDP 注入而不是改文件？' },        '传统换肤通常需要编辑 app.asar 或官方资源，每次 Codex 升级都会被覆盖，还可能触发签名校验失败。CDP 注入则是运行时操作，停止工具后界面立即恢复，安全边界更清晰。',        {          type: 'ul',          items: [            '不修改官方文件：升级后主题依然有效，无需重装',            '随时一键恢复：停止工具即回到官方界面',            '更安全：主题包只含 CSS 与图片，不允许 JavaScript',          ],        },        { type: 'h2', text: '工作原理：本地调试端口的妙用' },        'Codex 桌面端基于 Electron，启动时会在本地开放一个调试端口。Codex Skin Studio 连接这个端口（仅绑定 127.0.0.1），通过 WebSocket 把主题 CSS 和背景图片注入到渲染进程，实现整体视觉变化。',        { type: 'h2', text: '三步上手' },        {          type: 'ul',          items: [            '下载安装工具（Windows / macOS）',            '在主题库选一款主题（如「浪漫玫瑰」或「红白科幻」）点击应用',            '打开 Codex 即可看到效果；想恢复就右键托盘选择「完全恢复 Codex」',          ],        },        { type: 'h2', text: '主题与价格' },        '免费版内置 8 款精选主题，涵盖粉系、科幻、暗黑、清新等风格；Pro 版解锁无限自定义配色和背景图，适合打造专属视觉。',        { type: 'h2', text: '安全与合规' },        '主题包只包含 CSS 和图片资源，不允许 JavaScript；工具在注入前会走安全校验。这与传统改文件方案最大的区别在于：没有改动官方文件，也就不存在被官方更新破坏的问题。',        { type: 'h2', text: '常见问题 FAQ' },        {          type: 'faq',          items: [            { q: 'Codex 升级后我的主题会失效吗？', a: '不会。Codex Skin Studio 不改动任何官方文件，升级后主题依然可以正常应用。' },            { q: '换肤会影响 Codex 的功能或性能吗？', a: '不会。注入的只有 CSS 和背景图片，不涉及逻辑代码，对模型能力、回答质量、任务执行均无影响。' },            { q: '如何完全恢复到官方界面？', a: '右键托盘图标，选择「完全恢复 Codex」，界面立即还原，无需卸载重装。' },          ],        },        { type: 'h2', text: '从今天开始给你的 Codex 换个皮肤' },        '无论你是追求效率的开发者，还是想让工作台更有个人风格的创作者，Codex Skin Studio 都能在几分钟内让你的 Codex 焕然一新。',        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },      ],      en: [        'Codex Skin Studio is a theming tool for the Codex desktop app. It uses Chrome DevTools Protocol (CDP) to inject theme styles locally at runtime, without changing any official installation files.',        { type: 'h2', text: 'Why CDP Injection Instead of Editing Files?' },        'Traditional theming usually requires editing app.asar or official resources, which gets overwritten by every Codex update and can trigger signature checks. CDP injection is a runtime-only operation: stop the tool and the UI instantly reverts, with a clearer safety boundary.',        {          type: 'ul',          items: [            'No official files touched: themes survive Codex updates',            'One-click restore: stop the tool and the UI reverts instantly',            'Safer by design: theme packages contain only CSS and images, no JavaScript',          ],        },        { type: 'h2', text: 'How It Works: The Local Debug Port' },        'The Codex desktop app is Electron-based and opens a local debug port on launch. Codex Skin Studio connects to this port (bound to 127.0.0.1 only) and injects theme CSS and wallpaper images into the renderer process over WebSocket, changing the entire look.',        { type: 'h2', text: 'Get Started in Three Steps' },        {          type: 'ul',          items: [            'Download and install the tool (Windows / macOS)',            'Pick a theme from the gallery (like "Romantic Rose" or "Red Sci-Fi") and click apply',            'Open Codex to see the result; to revert, right-click the tray icon and choose "Fully Restore Codex"',          ],        },        { type: 'h2', text: 'Themes & Pricing' },        'The free tier ships with 8 curated themes covering pink, sci-fi, dark, and clean aesthetics. Pro unlocks unlimited custom colors and wallpapers for a signature visual.',        { type: 'h2', text: 'Safety & Compliance' },        'Theme packages contain only CSS and image assets — no JavaScript is allowed. The tool runs a safety validator before injection. Because no official files are ever modified, official updates can never break your skin.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Will my theme break after a Codex update?', a: 'No. Codex Skin Studio never touches official files, so themes keep working across updates.' },            { q: 'Does theming affect Codex functionality or performance?', a: 'No. Only CSS and wallpaper images are injected — no logic code — so model capability, answer quality, and task execution are unaffected.' },            { q: 'How do I fully restore the official UI?', a: 'Right-click the tray icon and choose "Fully Restore Codex". The UI reverts instantly — no uninstall or reinstall needed.' },          ],        },        { type: 'h2', text: 'Give Your Codex a Fresh Look Today' },        'Whether you are a productivity-focused developer or a creator who wants a personal touch, Codex Skin Studio can transform your Codex in minutes.',        { type: 'cta', text: 'Browse the Theme Gallery →', href: '/en/gallery' },      ],    },  },  {    slug: 'codex-skin-complete-guide',    date: '2026-08-03',    title: {      zh: 'Codex 换肤完全指南：从安装到自定义主题',      en: 'The Complete Codex Theming Guide: From Install to Custom Themes',    },    description: {      zh: '一份完整的 Codex Skin Studio 使用指南，涵盖 Windows/macOS 安装、主题切换、背景自定义与一键恢复。',      en: 'A complete guide to Codex Skin Studio: Windows/macOS install, switching themes, custom wallpapers, and one-click restore.',    },    content: {      zh: [        'Codex Skin Studio 通过 Chrome DevTools Protocol 在本机为 Codex 注入主题，全程不修改官方文件。本文带你走完从安装到自定义的每一步。',        '第一步：安装。Windows 双击 Setup.exe 安装（无需管理员），macOS 拖入 Applications 后右键打开。前提是先装好 Microsoft Store 版或桌面版 Codex 并登录一次。',        '第二步：启动。双击「Codex Skin Studio」快捷方式，托盘图标出现后右键即可看到主题菜单。默认主题「功夫女足」已内置，无需选择。',        '第三步：切换主题。打开「主题库」子菜单，免费主题直接点击应用；PRO 主题需先在「激活 Pro…」输入 License Key。',        '第四步：自定义背景。托盘「更换背景图」支持导入 16:9 的 jpg/png/webp，工具会自动把焦点调到右侧、左侧留出安全区。',        '第五步：恢复。任何时候想回到官方外观，双击「完全恢复 Codex」或托盘里的恢复项，界面立即还原。',        '想更进一步？你可以用任意主题的 theme.json 作为模板，改配色和文案，打造自己的专属风格。',        { type: 'h2', text: '常见问题' },        {          type: 'faq',          items: [            {              q: 'Codex 换肤会修改 Codex 官方文件吗？',              a: '不会。Codex Skin Studio 通过本机 CDP（Chrome DevTools Protocol）在运行时注入主题，不写入也不修改 app.asar 等官方文件，停止后立即恢复原貌。',            },            {              q: 'Codex Skin Studio 免费吗？',              a: '免费版即含 8 款精选主题与亮/暗切换，开箱即用。Pro 解锁无限自定义主题、背景图上传与去水印，Team 在 Pro 基础上增加团队主题共享。',            },            {              q: '支持 Windows 和 macOS 吗？',              a: '支持。Windows 双击 Setup.exe 即可安装（无需管理员）；macOS 拖入 Applications 后右键打开即可，Intel 与 Apple 芯片都兼容。',            },            {              q: '如何切换或恢复主题？',              a: '右键托盘图标打开主题菜单即可实时切换；想回到官方外观，点击「完全恢复 Codex」，界面立即还原，无需卸载重装。',            },            {              q: '主题包里能藏恶意代码吗？',              a: '不能。主题包只允许 CSS 与图片，明确禁止 JavaScript 等可执行内容，且注入内容会经过安全校验器检查。',            },          ],        },
        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: 'macOS 安装教程 →', href: '/zh/blog/how-to-install-codex-skin-studio-macos' },
      ],      en: [        'Codex Skin Studio themes Codex locally via Chrome DevTools Protocol, without touching official files. Here is the full walkthrough.',        'Step 1 — Install. On Windows, run Setup.exe (no admin needed). On macOS, drag to Applications and right-click Open. First install and sign into the Codex desktop app.',        'Step 2 — Launch. Open the "Codex Skin Studio" shortcut; right-click the tray icon to see the theme menu. The default "Kung Fu Women\u2019s Football" theme is built in.',        'Step 3 — Switch themes. Use the "Theme Library" submenu: free themes apply on click; PRO themes need a License Key via "Activate Pro...".',        'Step 4 — Custom wallpaper. "Change Background" imports 16:9 jpg/png/webp, automatically focusing right and keeping a safe area on the left.',        'Step 5 — Restore. Return to the official look anytime via "Fully Restore Codex" in the tray.',        'Go further: use any theme.json as a template, tweak colors and copy, and craft your own signature style.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            {              q: 'Does theming modify Codex official files?',              a: 'No. Codex Skin Studio injects themes at runtime via local CDP (Chrome DevTools Protocol), never writing to or modifying official files like app.asar, and reverts instantly when stopped.',            },            {              q: 'Is Codex Skin Studio free?',              a: 'The free plan includes 8 curated themes plus light/dark switching, ready out of the box. Pro unlocks unlimited custom themes, wallpaper uploads, and removes the watermark; Team adds shared team themes.',            },            {              q: 'Does it support Windows and macOS?',              a: 'Yes. On Windows, run Setup.exe (no admin needed). On macOS, drag to Applications and right-click Open — compatible with both Intel and Apple Silicon.',            },            {              q: 'How do I switch or restore a theme?',              a: 'Right-click the tray icon to open the theme menu and switch live. To return to the official look, click "Fully Restore Codex" — the UI reverts instantly, no uninstall needed.',            },            {              q: 'Can a theme package hide malicious code?',              a: 'No. Theme packages allow only CSS and images and explicitly forbid JavaScript or other executable content, and injected content passes a safety validator.',            },          ],        },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'Install on macOS →', href: '/en/blog/how-to-install-codex-skin-studio-macos' },
        { type: 'cta', text: 'Best Codex Themes 2026 →', href: '/en/guides/best-codex-themes' },
      ],    },  },  {    slug: 'what-is-cdp-injection',    date: '2026-08-01',    title: {      zh: '什么是 CDP 注入？为什么它比改文件更安全',      en: 'What Is CDP Injection and Why It\u2019s Safer Than Editing Files',    },    description: {      zh: '用大白话解释 CDP 注入的原理、安全边界，以及为什么它能在不破坏 Codex 的前提下自由换肤。',      en: 'A plain-language explainer of CDP injection: how it works, its security boundary, and why theming without touching files is safer.',    },    content: {      zh: [        'CDP 是 Chrome DevTools Protocol 的缩写，是浏览器/Electron 应用暴露的调试协议。Codex 桌面端基于 Electron，因此也支持它。',        'Codex Skin Studio 的工作原理：工具启动时在本机打开 Codex 的调试端口（只绑定 127.0.0.1），通过 WebSocket 连接渲染进程，把主题 CSS 注入到页面样式层。',        '关键区别：改文件方案会直接修改 app.asar 或安装目录，更新即失效、还可能触发校验失败。CDP 注入是纯运行时操作——不碰磁盘、不碰签名、停止即恢复。',        '安全边界：调试端口只监听本机回环地址，外部网络无法连接；主题包只允许 CSS 与图片，不允许 JavaScript，注入内容经过安全校验器检查。',        '这就是为什么 12.8K+ 用户敢用它——不是因为它"魔法"，而是因为它把换肤限制在了最薄的样式层。',
        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: '自定义指南 →', href: '/zh/guides/customize' },
      ],      en: [        'CDP stands for Chrome DevTools Protocol, the debugging protocol exposed by browsers and Electron apps. The Codex desktop app is Electron-based, so it speaks CDP.',        'How Codex Skin Studio works: on launch it opens Codex\u2019s debug port locally (bound to 127.0.0.1 only), connects to the renderer over WebSocket, and injects theme CSS into the style layer.',        'The key difference: file-based theming edits app.asar or install dirs — broken by every update and prone to integrity checks. CDP injection is purely runtime: no disk writes, no signature tampering, instant restore.',        'Security boundary: the debug port listens on loopback only; theme packages allow CSS and images but no JavaScript, and injected content passes a safety validator.',        'That is why 12.8K+ users trust it — not magic, just theming constrained to the thinnest layer possible.',
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'Best Codex Themes 2026 →', href: '/en/guides/best-codex-themes' },
      ],    },  },  {    slug: 'build-your-own-theme',    date: '2026-07-28',    title: {      zh: '自己动手：十分钟做出第一款主题',      en: 'DIY: Build Your First Theme in Ten Minutes',    },    description: {      zh: '用 theme.json 做模板，改 6 个颜色变量 + 换一张背景图，就能拥有专属 Codex 主题。',      en: 'Use theme.json as a template — change 6 color variables, swap a wallpaper, and you own a custom Codex theme.',    },    content: {      zh: [        '每款主题的核心是一个 theme.json。它定义了背景色、面板色、主色、副色、文字色等变量，以及背景图焦点位置。',        '准备：复制任意内置主题目录，改个新 id（形如 preset-my-style）。找到 colors 区块，背景/面板/主色/副色/文字这 6 个值就是全局视觉的骨架。',        '换背景：放一张 16:9 的 jpg 到目录里，把 image 字段指向它，再设置 art.focusX 控制焦点（0.7 左右适合左侧留白给侧栏）。',        '验证：用托盘「导入主题 ZIP…」导入，或用工具自带的 CSS 安全校验器检查，确保没有非法内容。',        '提示：深色主题里文字色和面板色对比度要足够；焦点放右侧通常观感最好，因为 Codex 侧栏在左。',      ],      en: [        'Every theme is driven by a theme.json: background, panel, accent, secondary, and text colors, plus wallpaper focus geometry.',        'Setup: copy any built-in theme folder and give it a new id (e.g. preset-my-style). The colors block — bg/panel/accent/secondary/text — is the skeleton of the whole look.',        'Wallpaper: drop a 16:9 jpg into the folder, point the image field at it, and set art.focusX to around 0.7 to keep the left clear for the sidebar.',        'Validate: import it via the tray\u2019s "Import Theme ZIP..." or run the bundled CSS safety validator to ensure nothing illegal slipped in.',        'Tips: keep enough contrast between text and panel in dark themes; right-side focus usually looks best because the Codex sidebar sits on the left.',      ],    },  },  {    slug: 'how-to-install-codex-skin-studio-macos',    date: '2026-08-05',    title: {      zh: 'macOS 安装 Codex Skin Studio 完整教程',      en: 'How to Install Codex Skin Studio on macOS',    },    description: {      zh: '在 macOS 上三步装好 Codex Skin Studio：下载 → 启动注入 → 选皮肤。含"无法打开"等常见问题解决。',      en: 'Three steps to install Codex Skin Studio on macOS: download, launch injection, pick a skin. Covers "cannot be opened" and other common issues.',    },    content: {      zh: [        '在 macOS 上安装 Codex Skin Studio，把 OpenAI Codex 桌面端换成你喜欢的皮肤——只需三步：下载安装包 → 启动注入 → 选皮肤。',        { type: 'h2', text: '安装前准备' },        {          type: 'ul',          items: [            'macOS（M 芯片或 Intel 均可）',            '已安装 OpenAI Codex 桌面端',            '磁盘空间约 200MB',          ],        },        { type: 'h2', text: '三步安装' },        { type: 'h2', text: '第 1 步：下载' },        '打开 codex-skin-studio.shop → 点「下载 macOS 版」→ 得到安装包（.dmg 或 .zip）。',        { type: 'h2', text: '第 2 步：安装' },        '双击打开 → 拖到 Applications 文件夹（或按提示运行安装脚本）。首次打开若提示"未识别的开发者"，到 系统设置 → 隐私与安全性 → 点「仍要打开」。',        { type: 'h2', text: '第 3 步：启动 + 选皮肤' },        '打开 Codex Skin Studio → 点「启动注入」→ 自动连接 Codex 桌面端 → 在皮肤库选一款（浪漫玫瑰 / 财神 / 红白科幻 / 清透定制…）→ 立即生效。',        { type: 'h2', text: '常见问题' },        {          type: 'ul',          items: [            '提示"无法打开"：到 系统设置 → 隐私与安全性 → 仍要打开。macOS 对未公证的应用会拦截，这是正常流程。',            '装完没效果：确认 Codex 桌面端已完全退出再启动注入；或重启 Codex。',            '会改 Codex 官方文件吗：不会——用 CDP 注入主题，不改官方文件，卸载即还原。',            'M 芯片有兼容问题吗：已适配 Apple Silicon；如有问题到官网反馈。',          ],        },        { type: 'cta', text: '免费下载 macOS 版', href: 'https://codex-skin-studio.shop/en/download' },
      { type: 'cta', text: 'Windows 安装教程 →', href: '/zh/blog/how-to-install-codex-skin-studio-windows' },
      ],      en: [        'Installing Codex Skin Studio on macOS to theme your OpenAI Codex desktop app takes three steps: download, launch injection, pick a skin.',        { type: 'h2', text: 'Before you start' },        {          type: 'ul',          items: [            'macOS (Apple Silicon or Intel)',            'OpenAI Codex desktop app installed',            '~200MB free disk space',          ],        },        { type: 'h2', text: 'Three steps' },        { type: 'h2', text: 'Step 1: Download' },        'Open codex-skin-studio.shop → click "Download for macOS" → get the installer (.dmg or .zip).',        { type: 'h2', text: 'Step 2: Install' },        'Double-click → drag to Applications (or run the setup script). If macOS warns "unidentified developer", go to System Settings → Privacy & Security → "Open Anyway".',        { type: 'h2', text: 'Step 3: Launch + pick a skin' },        'Open Codex Skin Studio → click "Start injection" → it connects to the Codex desktop app → pick a skin (Romantic Rose / Fortune God / Red Sci-Fi / Clear Custom...) → applies instantly.',        { type: 'h2', text: 'FAQ' },        {          type: 'ul',          items: [            '"Cannot be opened"? Go to System Settings → Privacy & Security → Open Anyway. macOS blocks unnotarized apps; this is normal.',            'No effect after install? Fully quit Codex before starting injection; or restart Codex.',            'Does it modify official Codex files? No — themes are injected via CDP; nothing official is changed. Uninstall restores the original.',            'Apple Silicon issues? Optimized for Apple Silicon; report issues on the site.',          ],        },        { type: 'cta', text: 'Download for macOS free', href: 'https://codex-skin-studio.shop/en/download' },
      { type: 'cta', text: 'Install on Windows →', href: '/en/blog/how-to-install-codex-skin-studio-windows' },
      ],    },  },  {    slug: 'how-to-install-codex-skin-studio-windows',    date: '2026-08-06',    title: {      zh: 'Windows 安装 Codex Skin Studio 完整教程',      en: 'How to Install Codex Skin Studio on Windows',    },    description: {      zh: '在 Windows 上三步装好 Codex Skin Studio：下载 → 启动注入 → 选皮肤。含 SmartScreen 拦截、杀毒软件误报等 Windows 专属问题解决。',      en: 'Three steps to install Codex Skin Studio on Windows: download, launch injection, pick a skin. Covers SmartScreen warnings and antivirus false positives.',    },    content: {      zh: [        '在 Windows 上安装 Codex Skin Studio，给 OpenAI Codex 桌面端换皮肤——三步完成：下载安装包 → 启动注入 → 选皮肤。本教程覆盖 Windows 专属的 SmartScreen、杀软误报等问题。',        { type: 'h2', text: '安装前准备' },        {          type: 'ul',          items: [            'Windows 10 / 11（64 位）',            '已安装 OpenAI Codex 桌面端',            '磁盘空间约 200MB',          ],        },        { type: 'h2', text: '三步安装' },        { type: 'h2', text: '第 1 步：下载' },        '打开 codex-skin-studio.shop → 点「下载 Windows 版」→ 得到安装包（.exe 或 .zip）。',        { type: 'h2', text: '第 2 步：安装' },        '双击运行安装程序 → 按提示完成安装（默认安装在 Program Files）。若出现蓝色 SmartScreen 提示"Windows 已保护你的电脑"→ 点「更多信息」→「仍要运行」：这是因为安装包尚未获得微软代码签名证书，属正常流程。',        { type: 'h2', text: '第 3 步：启动 + 选皮肤' },        '打开 Codex Skin Studio → 点「启动注入」→ 自动连接 Codex 桌面端 → 在皮肤库选一款（浪漫玫瑰 / 财神 / 红白科幻 / 清透定制…）→ 立即生效。',        { type: 'h2', text: '常见问题' },        {          type: 'ul',          items: [            'SmartScreen 拦截：点「更多信息 → 仍要运行」。未签名安装包被拦截是 Windows 默认策略。',            '杀毒软件报毒/误报：主题注入只读本地进程，不联网不改官方文件；可在杀软中加白名单（教程见官网 FAQ）。',            '装完没效果：确认 Codex 桌面端已完全退出再启动注入；或重启 Codex。',            '会改 Codex 官方文件吗：不会——用 CDP 注入主题，不改官方文件，卸载即还原。',            'Windows 7 支持吗：不支持，需要 Windows 10/11 64 位。',          ],        },        { type: 'cta', text: '免费下载 Windows 版', href: 'https://codex-skin-studio.shop/en/download' },
      { type: 'cta', text: 'macOS 安装教程 →', href: '/zh/blog/how-to-install-codex-skin-studio-macos' },
      ],      en: [        'Installing Codex Skin Studio on Windows to theme your OpenAI Codex desktop app takes three steps: download, launch injection, pick a skin. This guide also covers Windows-specific SmartScreen and antivirus issues.',        { type: 'h2', text: 'Before you start' },        {          type: 'ul',          items: [            'Windows 10 / 11 (64-bit)',            'OpenAI Codex desktop app installed',            '~200MB free disk space',          ],        },        { type: 'h2', text: 'Three steps' },        { type: 'h2', text: 'Step 1: Download' },        'Open codex-skin-studio.shop → click "Download for Windows" → get the installer (.exe or .zip).',        { type: 'h2', text: 'Step 2: Install' },        'Run the installer and follow the prompts (defaults to Program Files). If SmartScreen shows "Windows protected your PC" → click "More info" → "Run anyway". The installer is not yet Microsoft code-signed, so this is a normal step.',        { type: 'h2', text: 'Step 3: Launch + pick a skin' },        'Open Codex Skin Studio → click "Start injection" → it connects to the Codex desktop app → pick a skin (Romantic Rose / Fortune God / Red Sci-Fi / Clear Custom...) → applies instantly.',        { type: 'h2', text: 'FAQ' },        {          type: 'ul',          items: [            'SmartScreen warning? Click "More info" → "Run anyway". Unsigned installers are blocked by default on Windows.',            'Antivirus false positive? Injection only reads the local process — no network, no official file changes. Add an exception if needed (see FAQ on the site).',            'No effect after install? Fully quit Codex before starting injection; or restart Codex.',            'Does it modify official Codex files? No — themes are injected via CDP; nothing official is changed. Uninstall restores the original.',            'Windows 7 support? No — requires Windows 10/11 64-bit.',          ],        },        { type: 'cta', text: 'Download for Windows free', href: 'https://codex-skin-studio.shop/en/download' },
      { type: 'cta', text: 'Install on macOS →', href: '/en/blog/how-to-install-codex-skin-studio-macos' },
      ],    },  },  {    slug: 'codex-skin-theme-troubleshooting-guide',    date: '2026-08-06',    title: {      zh: 'Codex Skin Studio 主题排错指南：注入后没反应、报错、卡顿怎么办',      en: 'Codex Skin Studio Theme Troubleshooting Guide: No Effect, Errors, or Lag',    },    description: {      zh: '换上主题后界面没变化、Windows 报 SmartScreen、杀软误报、注入后卡顿？这篇排错指南按症状分类，给出可立即执行的修复步骤。',      en: 'Theme not applying, SmartScreen warning, antivirus false positive, or lag after injection? This troubleshooting guide sorts issues by symptom with steps you can run now.',    },    content: {      zh: [        '换上主题后界面没变化、Windows 弹出 SmartScreen、杀软误报、注入后卡顿——这些是 Codex Skin Studio 用户最常遇到的问题。本文按症状分类，给出可立即执行的修复步骤，无需重装。',        { type: 'h2', text: '注入后界面没有任何变化' },        { type: 'ul', items: [          '确认已完全退出 Codex：任务栏图标右键退出，而不只是关闭窗口',          '重新点击主题库里的「应用主题」按钮',          '检查本机调试端口是否被其他调试工具占用',          '重启 Codex Skin Studio 后再注入一次',        ] },        { type: 'h2', text: 'Windows 弹出 SmartScreen 警告' },        { type: 'ul', items: [          '点击「更多信息」→「仍要运行」即可继续',          '未签名的安装包默认会被系统拦截，这是正常的安全提示，不是病毒',          '如需彻底消除，可对安装包做代码签名后再分发',        ] },        { type: 'h2', text: '杀毒软件误报' },        { type: 'ul', items: [          'CDP 注入只读取本机进程，无网络请求、不修改官方文件',          '在杀软中将工具目录加入白名单（详见站点 FAQ）',          '若仍不放心，可改用免安装版，解压即用',        ] },        { type: 'h2', text: '注入后 Codex 卡顿或闪烁' },        { type: 'ul', items: [          '降低背景图分辨率，超大图片会拖慢渲染',          '关闭动态模糊等重特效',          '先换用轻量主题验证注入链路是否正常',        ] },        { type: 'h2', text: '升级 Codex 后主题失效' },        { type: 'ul', items: [          'CDP 注入是运行时操作，升级后需重新应用',          '它不修改官方文件，因此升级不会破坏主题',          '重新点一次「应用」即可恢复效果',        ] },        { type: 'h2', text: 'macOS 上主题不生效' },        { type: 'ul', items: [          '确认已授予辅助功能与屏幕录制权限',          '完全退出 Codex 再注入',          '检查是否同时运行了多个 Codex 实例',        ] },        { type: 'h2', text: '常见问题 FAQ' },        { type: 'faq', items: [          { q: '它会修改官方 Codex 文件吗？', a: '不会。主题通过 CDP 注入本机渲染进程，停止工具后即恢复，全程不触碰官方安装目录。' },          { q: '卸载后会残留吗？', a: '无残留。工具不写注册表、不改系统文件，删除目录即可彻底移除。' },          { q: '支持哪些系统？', a: 'Windows 10/11 64 位与 macOS 12 及以上。' },          { q: '主题能多人共享吗？', a: '可以。主题包只是 CSS 与图片，发给同事即可直接应用。' },        ] },        { type: 'cta', text: '下载免费版试用', href: 'https://codex-skin-studio.shop/en/download' },      ],      en: [        'No visual change after applying a theme, a SmartScreen warning on Windows, an antivirus false positive, or lag after injection are the most common issues Codex Skin Studio users hit. This guide groups fixes by symptom with steps you can run immediately, no reinstall required.',        { type: 'h2', text: 'No visual change after injection' },        { type: 'ul', items: [          'Make sure Codex is fully quit: right-click the tray icon and exit, do not just close the window',          'Click the Apply button on the theme in the library again',          'Check whether the local debug port is occupied by another debugging tool',          'Restart Codex Skin Studio and inject once more',        ] },        { type: 'h2', text: 'Windows shows a SmartScreen warning' },        { type: 'ul', items: [          'Click More info then Run anyway to continue',          'Unsigned installers are blocked by default; this is a normal safety prompt, not a virus',          'For a clean distribution, code-sign the installer before sharing',        ] },        { type: 'h2', text: 'Antivirus false positive' },        { type: 'ul', items: [          'CDP injection only reads the local process: no network, no official file changes',          'Add the tool folder to your antivirus allowlist (see the site FAQ)',          'If still uneasy, use the portable build that runs without installation',        ] },        { type: 'h2', text: 'Codex lags or flickers after injection' },        { type: 'ul', items: [          'Lower the background image resolution; oversized images slow rendering',          'Disable heavy effects such as dynamic blur',          'Try a lightweight theme first to confirm the injection path works',        ] },        { type: 'h2', text: 'Theme stops working after a Codex update' },        { type: 'ul', items: [          'CDP injection is a runtime operation, so re-apply after an update',          'It does not modify official files, so updates cannot break the theme',          'Click Apply once to restore the look',        ] },        { type: 'h2', text: 'Theme not applying on macOS' },        { type: 'ul', items: [          'Confirm Accessibility and Screen Recording permissions are granted',          'Fully quit Codex before injecting',          'Check for multiple running Codex instances',        ] },        { type: 'h2', text: 'Frequently asked questions' },        { type: 'faq', items: [          { q: 'Does it modify official Codex files?', a: 'No. Themes inject via CDP into the local render process and revert on stop; official install directories are never touched.' },          { q: 'Any leftovers after uninstall?', a: 'None. The tool writes no registry keys and changes no system files; delete the folder to remove it fully.' },          { q: 'Which systems are supported?', a: 'Windows 10/11 64-bit and macOS 12 or later.' },          { q: 'Can themes be shared?', a: 'Yes. A theme is just CSS and images, so you can send it to a colleague and they can apply it directly.' },        ] },        { type: 'cta', text: 'Download the free build', href: 'https://codex-skin-studio.shop/en/download' },      ],    },  },  {    slug: 'romantic-rose-theme-guide',    date: '2026-08-07',    title: {      zh: '浪漫玫瑰主题详解：粉色美学指南',      en: 'Romantic Rose Theme Explained: A Pink Aesthetic Guide',    },    description: {      zh: '浪漫玫瑰是 Codex Skin Studio 最受欢迎的粉系主题：玫瑰粉、奶油白与柔和灰的配色逻辑，为什么粉色主题对暗色模式友好，以及它适合谁。',      en: 'The Romantic Rose theme is Codex Skin Studio\'s most-loved pink preset. This guide covers the rose-pink palette logic, why pink works in dark mode, and who it fits best.',    },    content: {      zh: [        '浪漫玫瑰是 Codex Skin Studio 主题库里人气最高的粉系主题，也是很多人第一次给 Codex 换肤时选的那一款。它不只是一层粉色皮肤，配色里其实有讲究：玫瑰粉负责氛围，奶油白负责留白，柔灰负责代码可读性。这篇把它的设计逻辑讲清楚，顺便聊聊粉色主题在暗色模式里为什么意外地好用。',        { type: 'h2', text: '浪漫玫瑰的配色逻辑' },        {          type: 'ul',          items: [            '背景：深酒红偏黑的底色，不是亮粉——长时间盯代码不刺眼',            '主色：玫瑰粉与豆沙粉，用于按钮、高亮和活动状态',            '文字：奶油白与浅灰，保证对比度足够读代码',            '代码语义色：柔和粉紫与暖黄，字符串和关键字一眼可分',          ],        },        '一句话总结：氛围交给粉色，可读性交给灰白。这也是它和"纯粉色壁纸"类主题最大的区别。',        { type: 'h2', text: '为什么粉色主题在暗色模式里好用' },        '很多人担心粉色伤眼，实际恰恰相反。浪漫玫瑰的底不是纯黑而是深酒红，比纯黑底的蓝光更少；粉色作为强调色出现在按钮和光标上，不会整屏铺满。对晚上写代码的人来说，这种"暖暗色"比冷黑底更容易入睡。',        { type: 'h2', text: '它适合谁' },        {          type: 'ul',          items: [            '想要工作区有个人风格、又不想影响可读性的开发者',            '喜欢粉色/温柔系审美的设计师与创作者',            '拍桌面分享、录屏时想让画面更有辨识度的人',            '重度暗色模式用户，想换个比纯黑更柔和的底色',          ],        },        { type: 'h2', text: 'Codex 主题推荐：按心情选' },        '如果你在几款主题之间犹豫，按场景选最省事：写代码求专注选浪漫玫瑰（暖暗色、低干扰）；喜欢科幻感选红白科幻；想要喜庆氛围选财神；追求极简通透选清透定制。所有主题都在主题库里一键套用，不满意随时换。',        { type: 'h2', text: '如何换上浪漫玫瑰' },        '打开 Codex Skin Studio → 启动注入 → 主题库 → 选「浪漫玫瑰」→ 立即生效。想恢复官方界面，右键托盘选「完全恢复 Codex」即可，不残留任何改动。',        { type: 'h2', text: '常见问题' },        {          type: 'faq',          items: [            { q: '浪漫玫瑰会改 Codex 官方文件吗？', a: '不会。它和其他主题一样通过 CDP 在运行时注入，停止工具即还原，官方安装目录零改动。' },            { q: '粉色主题看代码久了会累吗？', a: '浪漫玫瑰的底是深酒红而非亮粉，强调色只用在按钮和光标上，长时间阅读的负担比纯黑底更小。' },            { q: '主题库里的浪漫玫瑰免费吗？', a: '免费版包含浪漫玫瑰在内的 8 款精选主题；Pro 解锁自定义配色与背景图。' },          ],        },        { type: 'cta', text: '去主题库看看', href: 'https://codex-skin-studio.shop/zh/gallery' },      ],      en: [        'The Romantic Rose theme is the most-loved pink preset in the Codex Skin Studio library, and for many people it is the first skin they ever put on Codex. It is more than a pink coat of paint, though. The palette is doing quiet work: rose pink carries the mood, cream white handles the whitespace, and soft gray keeps the code readable. This guide explains the design logic, and why pink themes turn out to be surprisingly good in dark mode.',        { type: 'h2', text: 'The Romantic Rose palette, decoded' },        {          type: 'ul',          items: [            'Background: a deep wine-dark base, not bright pink — easy on the eyes for long sessions',            'Primary: rose and dusty pink for buttons, highlights, and active states',            'Text: cream white and light gray to keep contrast high enough for code',            'Syntax colors: soft pink-purple and warm yellow so strings and keywords read instantly',          ],        },        'One-line summary: pink sets the mood, gray keeps it readable. That is the difference between this theme and a "pink wallpaper" preset.',        { type: 'h2', text: 'Why pink works in dark mode' },        'People worry pink strains the eyes. In practice it is the opposite. The Romantic Rose base is deep wine, not pure black, so it emits less blue light; pink appears only as an accent on buttons and the cursor instead of covering the whole screen. For late-night coding, this kind of warm dark palette is easier to wind down from than a cold black one.',        { type: 'h2', text: 'Who it fits' },        {          type: 'ul',          items: [            'Developers who want a personal workspace without hurting readability',            'Designers and creators who like soft, feminine aesthetics',            'Anyone recording screenshots or clips who wants a recognizable look',            'Heavy dark-mode users who want something softer than pure black',          ],        },        { type: 'h2', text: 'Codex theme recommendation by mood' },        'If you are stuck between themes, pick by scenario: Romantic Rose for focused, low-distraction work; Red Sci-Fi for a futuristic feel; Wealth God for festive vibes; Clear Custom for a minimal look. Every theme applies in one click from the gallery, and you can switch any time.',        { type: 'h2', text: 'How to apply it' },        'Open Codex Skin Studio → Start injection → theme gallery → pick Romantic Rose → it applies instantly. To revert, right-click the tray icon and choose "Fully restore Codex". No residue, no changes to official files.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Does Romantic Rose modify official Codex files?', a: 'No. Like every theme here, it injects at runtime via CDP and reverts when you stop the tool. Nothing in the official install is touched.' },            { q: 'Is a pink theme tiring for long coding sessions?', a: 'The base is deep wine, not bright pink, and the accent color is limited to buttons and the cursor, so it is easier on the eyes than pure black.' },            { q: 'Is Romantic Rose free?', a: 'Yes. The free build includes 8 curated themes, Romantic Rose among them. Pro unlocks custom colors and background images.' },          ],        },        { type: 'cta', text: 'Browse the theme gallery', href: 'https://codex-skin-studio.shop/en/gallery' },      ],    },  },  {    slug: 'fortune-god-theme-guide',    date: '2026-08-08',    title: {      zh: '财神打工版主题：红金配色的中式美学',      en: 'Fortune God Theme: Red and Gold Chinese New Year Aesthetic',    },    description: {      zh: '财神打工版是 Codex Skin Studio 主题库里最有辨识度的红金主题：传统中式配色如何融入暗色编辑器，为什么红色配金色看代码不刺眼，以及它适合谁。',      en: 'The Fortune God theme brings a red-and-gold Chinese New Year aesthetic to Codex. This guide explains how the traditional palette works in a dark editor, why it stays readable, and who it fits.',    },    content: {      zh: [        '财神打工版是 Codex Skin Studio 主题库里最有"年味"的一款：大面积的深红打底，金色做强调，按钮和活动状态带一点传统描金的味道。很多人第一眼觉得它太喜庆，装上之后才发现红金配色在暗色编辑器里意外的协调。这篇把财神主题的配色逻辑拆开讲，顺便聊聊它到底适合谁。',        { type: 'h2', text: '红金配色的设计逻辑' },        {          type: 'ul',          items: [            '背景：深红近黑的底，不是亮红——红色压暗之后反而耐看',            '强调色：金色与鎏金黄，用于按钮、高亮和光标',            '文字：米白与浅暖灰，在红底上保持足够对比度',            '代码语义色：保留了暖色系的区分度，关键字和字符串依然一眼可分',          ],        },        '一句话总结：红色负责氛围，金色负责聚焦，灰白负责可读。它和"把壁纸换成红底"的简单换肤最大的区别就在这里——整套配色是重新调过的。',        { type: 'h2', text: '财神主题在暗色模式里的表现' },        '有人担心红金太抢眼，伤眼。实际用下来正好相反：深红底的亮度比纯黑略高一点，但比亮红低得多；金色只出现在按钮、光标和活动标签上，不会整屏晃。长时间写代码时，这种暖色暗底比冷黑底更舒服，尤其适合晚上加班的人——顺带有点"开工大吉"的心理暗示。',        { type: 'h2', text: '它适合谁' },        {          type: 'ul',          items: [            '想要工作区有辨识度、又不想牺牲可读性的开发者',            '喜欢中式美学、春节氛围或国风设计的创作者',            '录屏、直播、发桌面截图时想让画面一眼难忘的人',            '暗色模式重度用户，想换换口味又怕太花哨的人',          ],        },        { type: 'h2', text: 'Codex 暗色主题推荐：财神 vs 其他' },        '如果你在几款暗色主题里纠结，按场景选：想要喜庆、有记忆点选财神；追求柔和专注选浪漫玫瑰；喜欢科幻感选红白科幻；想要极简通透选清透定制。所有主题都在主题库里一键套用，不满意随时换。',        { type: 'h2', text: '如何换上财神主题' },        '打开 Codex Skin Studio → 启动注入 → 主题库 → 选「财神打工版」→ 立即生效。想恢复官方界面，右键托盘选「完全恢复 Codex」即可，不残留任何改动。',        { type: 'h2', text: '常见问题' },        {          type: 'faq',          items: [            { q: '财神主题会改 Codex 官方文件吗？', a: '不会。它和其他主题一样通过 CDP 在运行时注入，停止工具即还原，官方安装目录零改动。' },            { q: '红金配色看代码久了会累吗？', a: '财神的底是压暗的深红而非亮红，金色只用于强调元素，长时间阅读的负担与普通暗色主题相当。' },            { q: '财神主题是免费的吗？', a: '免费版包含财神在内的 8 款精选主题；Pro 解锁自定义配色与背景图。' },          ],        },        { type: 'cta', text: '去主题库看看财神', href: 'https://codex-skin-studio.shop/zh/gallery/preset-fortune-god' },      ],      en: [        'The Fortune God theme is the most recognizable red-and-gold preset in the Codex Skin Studio library, and it is the one people screenshot first. At a glance it looks festive, almost loud. Then you actually code in it and realize the red is darkened down, the gold is used sparingly, and the whole thing settles into something calm. This guide explains the palette logic, why it works in a dark editor, and who it fits.',        { type: 'h2', text: 'The red-and-gold palette, decoded' },        {          type: 'ul',          items: [            'Background: deep red, almost black — not bright red. The darkness is what makes it wearable',            'Accent: gold and gilded yellow for buttons, highlights, and the cursor',            'Text: cream white and warm light gray, tuned for contrast on red',            'Syntax colors: warm-toned distinctions preserved, so keywords and strings still read instantly',          ],        },        'One-line summary: red sets the mood, gold directs the eye, gray keeps it readable. That is the difference between this theme and a simple red wallpaper swap.',        { type: 'h2', text: 'Why the Fortune God theme works in dark mode' },        'The concern is always the same: will red and gold be too much? In practice the opposite happens. The base is a darkened red, brighter than pure black but far calmer than bright red; gold appears only on buttons, the cursor, and active labels. For long sessions, this warm dark palette is gentler than a cold black one, and there is something quietly satisfying about a lucky-coin cursor at 2am.',        { type: 'h2', text: 'Who it fits' },        {          type: 'ul',          items: [            'Developers who want a distinctive workspace without hurting readability',            'Creators who like Chinese aesthetics, festive vibes, or guofeng design',            'Anyone recording screens or streaming who wants a memorable look',            'Dark-mode regulars who want a change that is not just another black theme',          ],        },        { type: 'h2', text: 'Dark codex theme picks: Fortune God vs the rest' },        'If you are stuck between dark themes, pick by scenario: Fortune God for festive, memorable vibes; Romantic Rose for soft, focused work; Red Sci-Fi for a futuristic feel; Clear Custom for minimal clarity. Every theme applies in one click from the gallery, and you can switch any time.',        { type: 'h2', text: 'How to apply it' },        'Open Codex Skin Studio → Start injection → theme gallery → pick Fortune God → it applies instantly. To revert, right-click the tray icon and choose "Fully restore Codex". No residue, no changes to official files.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Does Fortune God modify official Codex files?', a: 'No. Like every theme here, it injects at runtime via CDP and reverts when you stop the tool. Nothing in the official install is touched.' },            { q: 'Is red and gold tiring for long coding sessions?', a: 'The base is darkened red, not bright red, and gold is limited to accent elements, so the load is comparable to a regular dark theme.' },            { q: 'Is Fortune God free?', a: 'Yes. The free build includes 8 curated themes, Fortune God among them. Pro unlocks custom colors and background images.' },          ],        },        { type: 'cta', text: 'See Fortune God in the gallery', href: 'https://codex-skin-studio.shop/en/gallery/preset-fortune-god' },      ],    },  },  {    slug: 'red-sci-fi-cyberpunk-theme-guide',    date: '2026-08-09',    title: {      zh: '红白科幻主题：赛博朋克风格完全指南',      en: 'Red Sci-Fi Theme: A Complete Cyberpunk Style Guide',    },    description: {      zh: '红白科幻主题怎么用最出效果？配色逻辑、适合人群、与其他暗色主题的对比，以及一键应用与还原的方法。',      en: 'How to get the most out of the Red Sci-Fi theme: the color logic, who it fits, how it compares with other dark themes, and how to apply and revert it in one click.',    },    content: {      zh: [        '红白科幻是 Codex Skin Studio 主题库里最有「未来感」的一款：暗红底、亮白高光、锐利的几何线条，一眼就能认出是赛博朋克风格。这篇把它拆开讲清楚，包括配色逻辑、适合谁、怎么和其他暗色主题做选择，以及应用与还原的完整步骤。',        { type: 'h2', text: '红白科幻主题的配色逻辑' },        '它的核心不是「红 + 白」两个颜色，而是「暗红底 + 亮白焦点 + 高对比边框」三件套。暗红底在深色模式下比纯黑更有层次，又不刺眼；亮白只出现在代码高亮、当前行、按钮和焦点框这些关键位置；边框和高亮线用高对比度把界面边界切得干净利落。这种设计模仿了科幻 HUD（抬头显示）的视觉语言，所以第一眼就有「飞船仪表盘」的感觉。',        {          type: 'ul',          items: [            '暗红底：比纯黑更有温度，长时间盯屏不疲劳',            '亮白高光：集中在代码与焦点元素，阅读效率不降',            '几何边框：高对比分隔，窗口层级一目了然',            '低饱和辅助色：变量名、字符串、注释仍有区分度',          ],        },        { type: 'h2', text: '适合谁用' },        {          type: 'ul',          items: [            '喜欢赛博朋克 / 科幻美学的开发者，想要桌面也有氛围感',            '录屏、直播的创作者，需要一眼辨识的独特界面',            '深色模式老用户，想要一个不是「又一个黑色主题」的选项',            '对红色不敏感、想要高能量工作环境的人',          ],        },        { type: 'h2', text: 'Codex 主题推荐怎么选' },        '如果你在几款暗色主题之间纠结，按场景选：红白科幻适合想要未来感、科技氛围的人；浪漫玫瑰偏柔和专注；财神主题走节日喜庆路线；极简清晰适合只想要干净界面的人。每一款都能在主题库一键应用、随时切换，不用卸载重装。',        { type: 'h2', text: '为什么它在深色模式下特别稳' },        '有人会担心红色伤眼，实际体验是反的。暗红底比亮红温和得多，白色高光保证了文本对比度，长时间编码和看文档都不会累。赛博朋克风格常被误以为「花哨」，但这套主题把装饰控制在边框和焦点上，代码本身始终是最清晰的区域。',        { type: 'h2', text: '怎么应用与还原' },        '打开 Codex Skin Studio → 开始注入 → 主题库 → 选红白科幻 → 立即生效。想恢复就右键托盘图标选「完全恢复 Codex」，不留任何残留，不修改官方文件。',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: '红白科幻主题会修改 Codex 官方文件吗？', a: '不会。它和其他主题一样通过 CDP 运行时注入，停止工具即恢复，官方安装目录不被触碰。' },            { q: '红色背景长时间编码会累吗？', a: '底是暗红不是亮红，白色高光保证对比度，疲劳程度和普通深色主题相当。' },            { q: '红白科幻主题免费吗？', a: '免费版包含 8 款精选主题，红白科幻在内。Pro 解锁自定义配色与背景图。' },          ],        },        { type: 'cta', text: '在主题库查看红白科幻', href: 'https://codex-skin-studio.shop/zh/gallery/preset-red-sci-fi' },      ],      en: [        'Red Sci-Fi is the most futuristic theme in the Codex Skin Studio gallery: dark red base, bright white highlights, sharp geometric borders, instantly recognizable as cyberpunk. This guide breaks it down, covering the color logic, who it fits, how to choose between dark themes, and how to apply and revert it.',        { type: 'h2', text: 'The color logic behind Red Sci-Fi' },        'It is not really "red plus white". It is three layers: a dark red base, bright white focal points, and high-contrast borders. The dark red base gives more depth than pure black without being harsh; white appears only on code highlights, the current line, buttons and focus rings; borders slice the interface into clean regions. It borrows the visual language of sci-fi HUDs, so it reads as a spaceship instrument panel at first glance.',        {          type: 'ul',          items: [            'Dark red base: warmer than pure black, easier on the eyes over long sessions',            'Bright white highlights: concentrated on code and focus elements, readability stays high',            'Geometric borders: high-contrast separation, window hierarchy at a glance',            'Low-saturation accents: variables, strings and comments stay distinguishable',          ],        },        { type: 'h2', text: 'Who it fits' },        {          type: 'ul',          items: [            'Developers who like cyberpunk or sci-fi aesthetics and want a workspace with atmosphere',            'Creators recording screens or streaming who want a memorable, distinctive interface',            'Dark-mode regulars looking for something that is not just another black theme',            'People who enjoy an energetic, high-contrast environment and are fine with red',          ],        },        { type: 'h2', text: 'How to pick between dark codex themes' },        'Choose by scenario: Red Sci-Fi for futuristic, tech vibes; Romantic Rose for soft, focused work; Fortune God for festive energy; Clear Custom for minimal clarity. Every theme applies in one click from the gallery, and you can switch any time.',        { type: 'h2', text: 'Why it holds up in dark mode' },        'The worry is always "will red hurt my eyes". In practice the opposite happens. The base is darkened red, far calmer than bright red, and the white highlights keep text contrast high, so long coding and reading sessions stay comfortable. Cyberpunk sounds flashy, but the decoration is limited to borders and focal points; the code itself is always the clearest part of the screen.',        { type: 'h2', text: 'How to apply it' },        'Open Codex Skin Studio → Start injection → theme gallery → pick Red Sci-Fi → it applies instantly. To revert, right-click the tray icon and choose "Fully restore Codex". No residue, no changes to official files.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Does Red Sci-Fi modify official Codex files?', a: 'No. Like every theme here, it injects at runtime via CDP and reverts when you stop the tool. Nothing in the official install is touched.' },            { q: 'Is a red background tiring for long coding sessions?', a: 'The base is darkened red, not bright red, and white highlights keep contrast high, so the load is comparable to a regular dark theme.' },            { q: 'Is Red Sci-Fi free?', a: 'Yes. The free build includes 8 curated themes, Red Sci-Fi among them. Pro unlocks custom colors and background images.' },          ],        },        { type: 'cta', text: 'See Red Sci-Fi in the gallery', href: 'https://codex-skin-studio.shop/en/gallery/preset-red-sci-fi' },      ],    },  },  {    slug: 'clear-custom-minimalist-theme-guide',    date: '2026-08-10',    title: {      zh: '清透定制主题：极简美学设计指南',      en: 'Clear Custom Theme: A Minimalist Design Guide',    },    description: {      zh: '清透定制是主题库里最安静的一款：柔和浅色底、克制的强调色、几乎没有装饰。设计逻辑、适合谁，以及和深色主题怎么选。',      en: 'Clear Custom is the quietest theme in the gallery: soft light base, restrained accents, almost no decoration. The design logic, who it fits, and how to choose between it and dark themes.',    },    content: {      zh: [        '如果你在找一款 clear custom codex theme，大概率是看腻了高饱和配色，想要一个不抢注意力、长时间编码不累的界面。清透定制就是 Codex Skin Studio 主题库里那款"最安静"的主题：浅色底、克制的强调色、几乎没有装饰。这篇讲它的设计逻辑、适合谁，以及怎么和深色主题做选择。',        { type: 'h2', text: '清透定制主题的设计逻辑' },        '它和"干净"的关系不是删掉颜色，而是把颜色用在刀刃上。核心三件套：柔和浅色底、低饱和强调色、极简分隔线。',        {          type: 'ul',          items: [            '柔和浅色底：不是纯白，带一点暖调，长时间看屏幕不刺眼',            '低饱和强调色：只有变量、字符串、关键字这些语义位置有颜色，其余保持中性',            '极简分隔线：用细线而不是色块区分区域，界面更透气',            '字体权重对比：标题、正文、代码用字重和字距区分，不靠颜色堆砌',          ],        },        '这种设计理念直接来自极简主义排版：信息层级靠留白和字重，而不是靠五彩斑斓。minimalist theme 爱好者第一眼看过去会觉得"什么都没有"，但用一小时后会发现，想找的东西都在它该在的位置。',        { type: 'h2', text: '适合谁用' },        {          type: 'ul',          items: [            '浅色模式老用户，想要一款不刺眼的亮色主题',            '长时间写代码、读文档的人，讨厌高对比界面带来的视觉疲劳',            '对屏幕录制、截图有要求的人，低饱和主题录出来的视频更耐看',            '想要"工作感"而不是"游戏感"桌面的人',          ],        },        '如果你在深色和浅色之间摇摆，一个实用建议：白天用清透定制，晚上切到任意暗色主题。Codex Skin Studio 切换主题不需要重启，随时换。',        { type: 'h2', text: '清新主题和其他亮色主题的区别' },        '主题库里同类的亮色主题不多，清透定制和它们的差异在"克制"两个字上。别的主题可能用渐变、阴影、高光来提升质感，清透定制几乎不用这些技巧，它相信内容本身的秩序感。这对极简主义者是加分项，对喜欢视觉丰富度的人则是减分项。选之前先问自己：你是想让界面消失，还是想让界面好看？前者选清透定制。',        { type: 'h2', text: '怎么应用与还原' },        '打开 Codex Skin Studio → 开始注入 → 主题库 → 选清透定制 → 立即生效。想还原就右键托盘图标选「完全恢复 Codex」，不留残留、不修改官方文件。主题库里的所有主题都支持一键切换，你可以在清透定制和暗色主题之间来回试，直到找到自己最舒服的组合。',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: '清透定制主题免费吗？', a: '免费。免费版包含 8 款精选主题，清透定制在内。Pro 解锁自定义配色与背景图。' },            { q: '浅色主题会不会更伤眼？', a: '关键在亮度而不在色温。清透定制的底是柔和暖白而不是纯白，配合低饱和强调色，长时间使用比高对比深色主题更放松，但这因人而异，建议白天浅色、晚上深色。' },            { q: '它能和深色主题随时切换吗？', a: '能。所有主题都通过运行时注入，切换即时生效，不需要重启 Codex，也没有残留。' },            { q: '清透定制会修改 Codex 官方文件吗？', a: '不会。它和其他主题一样通过 CDP 运行时注入，停止工具即恢复，官方安装目录不被触碰。' },          ],        },        { type: 'cta', text: '在主题库查看清透定制', href: 'https://codex-skin-studio.shop/zh/gallery/preset-clear-custom' },      ],      en: [        'If you are hunting for a clear custom codex theme, you are probably tired of saturated colors and want an interface that stays out of the way during long coding sessions. Clear Custom is the quietest theme in the Codex Skin Studio gallery: soft light background, restrained accents, almost no decoration. This guide covers its design logic, who it fits, and how to choose between it and a dark theme.',        { type: 'h2', text: 'The design logic behind Clear Custom' },        '"Clean" here does not mean removing color; it means spending color carefully. Three layers do the work: a soft light base, low-saturation accents, and minimal separators.',        {          type: 'ul',          items: [            'Soft light base: off-white with a warm tint, easier on the eyes than pure white',            'Low-saturation accents: color appears only on semantic positions like variables, strings and keywords; everything else stays neutral',            'Minimal separators: thin lines instead of color blocks, so the interface breathes',            'Weight-based hierarchy: headings, body and code are separated by weight and spacing, not by color noise',          ],        },        'The idea comes straight from minimalist typography: hierarchy via whitespace and weight, not via a rainbow. A minimalist theme fan will look at it and think "nothing is going on", then an hour later realize everything they need is exactly where they expect it.',        { type: 'h2', text: 'Who it fits' },        {          type: 'ul',          items: [            'Light-mode regulars who want a bright theme that does not glare',            'People who read code and docs for hours and hate the fatigue of high-contrast UIs',            'Anyone who records screens or takes screenshots, since low-saturation themes look calmer on video',            'People who want a work-feel desktop rather than a game-feel one',          ],        },        'If you keep flip-flopping between light and dark, try this: Clear Custom during the day, any dark theme at night. Switching themes in Codex Skin Studio takes no restart.',        { type: 'h2', text: 'How it differs from other light themes' },        'The gallery does not have many light themes, and the difference between Clear Custom and the rest is restraint. Other themes lean on gradients, shadows and glows for polish; Clear Custom uses almost none of that, trusting the natural order of the content. That is a plus for minimalists and a minus for people who want visual richness. Ask yourself one question before picking: do you want the interface to disappear, or do you want it to look impressive? If the former, Clear Custom is the pick.',        { type: 'h2', text: 'How to apply and revert' },        'Open Codex Skin Studio, start the injection, open the theme gallery, pick Clear Custom, done. To revert, right-click the tray icon and choose full restore: no residue, no modification of official files. Every theme in the gallery supports one-click switching, so you can go back and forth between Clear Custom and dark themes until you find the combination you like.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Is Clear Custom free?', a: 'Yes. The free build includes 8 curated themes, Clear Custom among them. Pro unlocks custom colors and background images.' },            { q: 'Is a light theme harder on the eyes?', a: 'It depends on brightness, not color temperature. Clear Custom uses a warm off-white base with low-saturation accents, which many people find more relaxing than high-contrast dark themes over long sessions. Still, it varies; light during the day, dark at night is the safest split.' },            { q: 'Can I switch to a dark theme at any time?', a: 'Yes. All themes are injected at runtime, switching is instant, no restart, no residue.' },            { q: 'Does Clear Custom modify official Codex files?', a: 'No. Like every theme, it injects at runtime via CDP; stopping the tool restores everything, and the official install directory is never touched.' },          ],        },        { type: 'cta', text: 'See Clear Custom in the gallery', href: 'https://codex-skin-studio.shop/en/gallery/preset-clear-custom' },      ],    },  },  {    slug: 'inspiration-universe-theme-guide',    date: '2026-08-11',    title: {      zh: '灵感小宇宙主题：星空背景创意空间',      en: 'Inspiration Universe Theme: Creative Space Backgrounds',    },    description: {      zh: '灵感小宇宙是主题库里最受创作者欢迎的星空主题：低饱和深蓝底、星云渐变、微光粒子。这篇讲它为什么适合编码、怎么搭配，以及画廊里的同族变体。',      en: 'Inspiration Universe is the most popular starfield theme in the gallery: low-saturation deep blue, nebula glow, faint particles. Why it works for coding, how to pair it, and which variants share the same look.',    },    content: {      zh: [        '灵感小宇宙是目前主题库里最受创作者欢迎的一款灵感小宇宙 Codex 主题，深蓝星空底、浮动的星云和微光粒子，把 Codex 桌面变成一片安静的创意空间。这篇讲讲它为什么适合写代码、怎么搭配，以及同一套星空视觉在画廊里还有哪些变体。',        { type: 'h2', text: '为什么星空背景适合 Coding' },        '写代码的时候，视觉噪音是最贵的干扰。灵感小宇宙用的是低饱和深蓝星空：大面积暗色底让代码高亮更突出，星云的渐变又不会抢走注意力。它属于 space theme 里"耐看型"的代表，第一眼惊艳，用两周也不腻。',        '对比纯黑主题，星空底的层次感好很多：编辑器区域有微弱的景深，窗口切换时不会觉得死板。对比花哨的动态壁纸，它又足够安静，不会在长会话里持续分散注意。',        { type: 'h2', text: '主题里的细节' },        {          type: 'ul',          items: [            '背景：深空蓝渐变 + 星云光晕，带轻微明暗流动',            '高亮：星云紫和暖金做代码高亮点缀，暗色下对比度充足',            '粒子：极轻的浮动微光，频率低到不会让人分心',            '配套：同色系窗口边框与滚动条，整体观感统一',          ],        },        '这套配色对深夜编码尤其友好：蓝紫光波长短，比白底和亮色主题更不容易刺激眼睛。',        { type: 'h2', text: '怎么搭配使用' },        '配合暗色代码主题：编辑器内用 Dark+ 或 One Dark 这类暗色主题，和星空底是同族色系，衔接自然。配合亮色代码主题：不建议，亮色编辑器在星空底上会显得突兀。窗口透明度：如果工具支持，把透明度调到 80% 左右，星空渐变透过来，效果最好。',        { type: 'h2', text: '画廊里的星空家族' },        '灵感小宇宙不是孤品。画廊的星空分类下还有几款同族变体：偏冷的「深空探索」、偏紫的「星云幻想」、偏暖的「暮色银河」。如果你喜欢星空氛围但觉得默认款太蓝，可以试试这几款。想先看效果再决定？画廊 preset-inspiration 有实时预览。',        { type: 'h2', text: '常见问题 FAQ' },        {          type: 'faq',          items: [            { q: '灵感小宇宙主题适合长时间编码吗？', a: '适合。低饱和深蓝底对眼睛刺激小，星云渐变不抢注意力，是高强度会话里少数能长期使用的创意主题。' },            { q: '它和纯黑主题比哪个好？', a: '看需求。纯黑对比度最高但层次少；星空底有景深和细节，长时间使用更耐看。写代码追求沉浸感选星空，追求极简选纯黑。' },            { q: '星空主题会不会很花哨？', a: '默认款很克制：粒子稀疏、渐变缓慢，只有在全屏壁纸场景才看得出动态。如果你还是嫌吵，画廊里还有静态星空变体。' },            { q: '这个主题要钱吗？', a: '免费版内置的主题就包含它，Pro 解锁的是自定义配色和背景图。' },          ],        },        { type: 'cta', text: '到画廊看灵感小宇宙的实时效果', href: '/zh/gallery/preset-inspiration' },      ],      en: [        'Inspiration Universe is the most popular pick among creators in the theme gallery: a deep blue starfield, drifting nebula glow, faint floating particles, turning the Codex desktop into a quiet creative space. This guide covers why it works for writing code, how to pair it, and which variants of the same starfield look live in the gallery.',        { type: 'h2', text: 'Why a starfield works for coding' },        'Visual noise is the most expensive distraction while coding. Inspiration Universe leans on a low-saturation deep blue starfield: the large dark base makes code highlighting pop, while the nebula gradient never fights for attention. It is the "easy on the eyes" end of the space theme spectrum. Impressive on day one, still pleasant after two weeks.',        'Compared to a pure black theme, the starfield has more depth: the editor area carries a faint sense of perspective, and window switching does not feel flat. Compared to flashy animated wallpapers, it is quiet enough to survive long sessions.',        { type: 'h2', text: 'What is inside the theme' },        {          type: 'ul',          items: [            'Background: deep-space blue gradient with nebula glow and subtle light drift',            'Highlights: nebula purple and warm gold accents for code, strong contrast on dark',            'Particles: very light floating glints, sparse enough to stay out of the way',            'Extras: matching window borders and scrollbar in the same palette',          ],        },        'The blue-purple palette is especially friendly for late-night coding. Shorter wavelengths are easier on the eyes than white backgrounds or bright themes.',        { type: 'h2', text: 'How to pair it' },        'With a dark code theme, use Dark+ or One Dark inside the editor. Same color family, seamless transition. With a light code theme, skip it, a bright editor on a starfield looks jarring. Window transparency: if your tool supports it, drop opacity to around 80% and let the nebula show through. That is the setup that looks best.',        { type: 'h2', text: 'The starfield family in the gallery' },        'Inspiration Universe is not a one-off. The space category in the gallery holds several siblings: the cooler "Deep Space Explorer", the purple-leaning "Nebula Fantasy", the warmer "Twilight Galaxy". If you like the vibe but find the default too blue, those are worth a look. Want to see it before installing? The gallery preset page has a live preview.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Is Inspiration Universe good for long coding sessions?', a: 'Yes. The low-saturation blue is gentle on the eyes and the nebula does not steal focus. It is one of the few creative themes that survives heavy daily use.' },            { q: 'Starfield or pure black?', a: 'Depends. Pure black has the highest contrast but less depth; the starfield adds texture and stays pleasant over time. Immersion pick the starfield, minimalism pick pure black.' },            { q: 'Is it too flashy?', a: 'The default is restrained: sparse particles, slow gradients, motion only obvious in fullscreen wallpaper mode. If it is still too busy, the gallery has static starfield variants.' },            { q: 'Does it cost anything?', a: 'It ships with the free tier. Pro unlocks custom colors and backgrounds.' },          ],        },        { type: 'cta', text: 'See Inspiration Universe live in the gallery', href: '/en/gallery/preset-inspiration' },      ],    },  },  {    slug: 'purple-night-theme-guide',    date: '2026-08-12',    title: {      zh: '紫夜限定主题：紫色神秘氛围深度解析',      en: 'Purple Night Theme: A Deep Dive into the Purple Mystery',    },    description: {      zh: '紫夜限定是主题库里最能营造神秘氛围的一款 Codex 主题：深紫夜幕、霓虹点缀、暗色系里最出挑的紫色主题。这篇拆解它的配色逻辑、适合谁用、怎么和暗色代码主题搭配。',      en: 'Purple Night is the most atmospheric dark theme in the gallery: a deep violet night, neon accents, and the boldest purple theme in the dark lineup. This guide breaks down its palette logic, who it suits, and how to pair it with a dark code theme.',    },    content: {      zh: [        '紫夜限定是一款 Purple Night Codex 主题，主题库里神秘感拉满的那一个：深紫夜幕打底，紫罗兰和霓虹粉做点缀，把整个 Codex 桌面罩进一层夜色滤镜。这篇聊它的配色逻辑、它适合谁，以及为什么它在暗色主题里独一档。',        { type: 'h2', text: '紫色为什么是"暗色之王"' },        '暗色主题很多，但大多数是黑灰底。紫色是光谱里唯一既深又有情绪的颜色：压得住亮度，又比纯黑多一层氛围。紫夜限定用低明度的深紫做底，编辑器区接近蓝紫，窗口边框和滚动条是同色系的渐变，整体像一个安静的深夜房间，而不是一块纯黑面板。',        '对写代码来说，深紫底和大多数语法高亮的兼容性意外地好：绿色、金色、粉色在紫底上的对比度都够，不会像在纯黑上那样刺眼。这是 purple theme 和 dark theme 最大的区别，不是颜色偏好，是实际可读性。',        { type: 'h2', text: '主题里的细节' },        {          type: 'ul',          items: [            '背景：深紫夜幕渐变，带细微的星点纹理',            '高亮：紫罗兰主色 + 霓虹粉强调，代码区块层次分明',            '边框：窗口边缘带紫色光晕，切窗时有轻微呼吸感',            '配色：紫色主题里最耐看的低饱和方案，长时间不累眼',          ],        },        '紫夜限定在画廊里的定位是"氛围向暗色主题"。相比红白科幻的激进和清透定制的极简，它走的是沉浸路线：适合深夜写代码、直播、以及想要桌面有"场景感"的人。',        { type: 'h2', text: '怎么搭配才好看' },        '配暗色代码主题用 One Dark 或 Dark+，紫色系底色和它们兼容性最好。配浅色代码主题就跳过，亮色编辑器放在深紫桌面上会很突兀。窗口透明度如果你用的工具支持，可以降到 85% 左右，让紫夜底色透出来，这是它最出效果的状态。',        '桌面壁纸建议选深色系，深紫、深蓝、或者纯黑都行。亮色壁纸会把紫夜的氛围感冲掉。图标主题可以保持默认，紫夜的光晕已经足够撑起视觉。',        { type: 'h2', text: '谁适合用紫夜限定' },        '喜欢深夜写代码的人。直播或录屏想要一个让人记住的界面的人。以及那些觉得纯黑太无聊、但浅色又太亮的人。它不激进、不花哨，但一眼就能认出这不是默认主题。',        '如果你拿不定主意，去画廊的 preset-purple-night 预览页看一眼实时效果再装。主题不贵，装错也不心疼，但先看效果永远比装了再卸省事。',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: '紫夜限定适合长时间写代码吗？', a: '适合。低饱和深紫比纯黑多一点层次，又比亮色主题温和得多，长时间使用不容易累。它属于氛围向但可用的暗色主题。' },            { q: '紫夜和纯黑比怎么样？', a: '纯黑对比度最高但氛围感弱；紫夜多一层神秘感和深度，代价是理论对比度略低。追求极致对比选纯黑，追求氛围选紫夜。' },            { q: '这个主题太花哨吗？', a: '默认状态很克制：星点纹理是静态的，光晕只在窗口边框。和那些动态壁纸主题比，它安静得多。' },            { q: '紫夜限定要钱吗？', a: '免费版内置的主题就包含它，Pro 解锁的是自定义配色和背景图。' },          ],        },        { type: 'cta', text: '到画廊看紫夜限定的实时效果', href: '/zh/gallery/preset-purple-night' },      ],      en: [        'Purple Night is the Purple Night Codex theme with the most mystery in the gallery: a deep violet night, violet and neon pink accents, wrapping the whole Codex desktop in a layer of night. This guide covers its palette logic, who it suits, and why it stands alone among dark themes.',        { type: 'h2', text: 'Why purple owns the dark end' },        'Most dark themes are black and gray. Purple is the one color on the spectrum that is both deep and moody: it holds brightness down and adds atmosphere that pure black cannot. Purple Night uses a low-lightness deep violet base, editor area leaning blue-purple, window borders and scrollbar in the same gradient family. It reads as a quiet late-night room, not a flat black panel.',        'For coding, a deep violet base works with most syntax highlighting better than expected: greens, golds, pinks all keep enough contrast on purple, without the harshness of pure black. That is the real difference between a purple theme and a dark theme. Not taste, readability.',        { type: 'h2', text: 'What is inside the theme' },        {          type: 'ul',          items: [            'Background: deep violet night gradient with a faint star speckle texture',            'Highlights: violet primary with neon pink accents, clear code hierarchy',            'Borders: window edges carry a purple glow with a slight breathing effect',            'Palette: one of the most comfortable low-saturation purple schemes, easy on the eyes in long sessions',          ],        },        'In the gallery, Purple Night sits in the "moody dark" lane. Against Red Sci-Fi\'s aggression and Clear Custom\'s minimalism, it goes immersive: for late-night coding, streaming, and anyone who wants their desktop to feel like a scene.',        { type: 'h2', text: 'How to pair it' },        'Use One Dark or Dark+ inside the editor. Same color family, seamless transition. With a light code theme, skip it, a bright editor on a deep violet desktop looks jarring. If your tool supports window transparency, drop opacity to around 85% and let the purple base show through. That is the setup that shows it off best.',        'Desktop wallpapers should stay dark: deep purple, deep blue, or plain black. A bright wallpaper kills the whole mood. Keep the icon theme default, the purple glow carries the visuals on its own.',        { type: 'h2', text: 'Who it suits' },        'People who code late at night. People who stream or record and want an interface people remember. People who find pure black boring and light themes too bright. It is not aggressive or flashy, but nobody mistakes it for a default theme.',        'If you are on the fence, check the live preview on the preset-purple-night gallery page before installing. Themes are cheap and uninstalling is easy, but seeing it first beats install-then-remove.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Is Purple Night good for long coding sessions?', a: 'Yes. The low-saturation violet adds depth over pure black without the harshness of bright themes. It is a moody dark theme that stays usable for hours.' },            { q: 'Purple Night or pure black?', a: 'Pure black has the highest contrast but zero atmosphere. Purple Night trades a little theoretical contrast for depth and mystery. Contrast purist, go black. Mood first, go purple.' },            { q: 'Is it too flashy?', a: 'The default is restrained: static star speckles, glow only on window borders. Compared to animated wallpaper themes, it is quiet.' },            { q: 'Does it cost anything?', a: 'It ships with the free tier. Pro unlocks custom colors and backgrounds.' },          ],        },        { type: 'cta', text: 'See Purple Night live in the gallery', href: '/en/gallery/preset-purple-night' },      ],    },  },  {    slug: 'azure-virtual-diva-theme-guide',    date: '2026-08-13',    title: {      zh: '青蓝虚拟歌姬主题：虚拟偶像风格解析',      en: 'Azure Virtual Diva Theme: Virtual Idol Style Breakdown',    },    description: {      zh: '青蓝虚拟歌姬是主题库里最"二次元"的一款 Codex 主题：天蓝发色、舞台灯光、偶像企划的氛围直接搬上桌面。这篇拆解它的配色逻辑、适合谁用、怎么搭配才不显中二。',      en: 'Azure Virtual Diva is the most anime-flavored theme in the gallery: sky-blue hair, stage lighting, and virtual idol energy on your desktop. This guide breaks down its palette logic, who it suits, and how to pair it without going full cosplay.',    },    content: {      zh: [        '青蓝虚拟歌姬是一款 Azure Virtual Diva Codex 主题，主题库里最接近虚拟偶像企划的一款：天蓝主色、舞台感高光、一点霓虹点缀，把 Codex 桌面装点成演唱会后台。这篇聊它的配色逻辑、适合谁、以及怎么搭配才不显中二。',        { type: 'h2', text: '天蓝为什么是偶像色' },        '虚拟偶像的视觉语言里，天蓝是"初代目"色：清澈、明亮、有距离感又不冷。青蓝虚拟歌姬用低饱和天蓝做底，窗口边框带舞台灯光感的浅色高光，滚动条和强调色走同色系。整体像一场还没开场的演唱会，干净、亮堂、带一点期待感。',        '和紫夜的深沉不同，青蓝走的是"透明感"路线：明度高、对比温和、色彩偏冷。它不是暗色主题，是那种白天看心情会变好的亮色二次元主题。',        { type: 'h2', text: '主题里的细节' },        {          type: 'ul',          items: [            '背景：天蓝渐变，带细小的星光纹理，像舞台追光',            '高亮：白色为主，天蓝和浅紫做辅助，代码区块清晰',            '边框：窗口边缘带舞台灯光感的光晕',            '配色：二次元主题里少见的低饱和方案，长时间看不腻',          ],        },        '在画廊里，青蓝虚拟歌姬的定位是"偶像企划主题"。相比红白科幻的激进、紫夜的沉浸，它走的是明亮可爱路线：适合喜欢二次元文化、虚拟偶像、以及想让桌面看起来"有点企划感"的人。',        { type: 'h2', text: '怎么搭配才好看' },        '配浅色代码主题最合适，GitHub Light 或 One Light 都行，亮色编辑器放在天蓝桌面上很和谐。配暗色代码主题会有点跳，但也不是不能看。桌面壁纸建议选浅色系，天蓝、白色、或者浅紫，深色壁纸会把透明感冲掉。',        '图标主题可以保持默认。青蓝的舞台光晕已经足够有辨识度，不需要再叠加视觉元素。窗口透明度降到 90% 左右，让天蓝底色透出来，这是它最出效果的状态。',        { type: 'h2', text: '谁适合用青蓝虚拟歌姬' },        '喜欢二次元和虚拟偶像的人。直播或录屏想要一个明亮、让人记住的界面的人。以及那些觉得默认主题太无聊、但暗色主题又太压抑的人。它不深沉、不炫技，但一眼就能认出这是"企划限定"。',        '如果你拿不定主意，去画廊的 preset-virtual-diva 预览页看一眼实时效果再装。先看效果永远比装了再卸省事。',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: '青蓝虚拟歌姬适合写代码吗？', a: '适合。它是亮色主题，代码可读性好，低饱和天蓝长时间看不累。比纯白柔和，比暗色轻快，是那种写累了抬头看一眼会开心的主题。' },            { q: '这是二次元主题吗？', a: '是。它就是为虚拟偶像风格设计的，天蓝主色加舞台灯光感，整个氛围就是偶像企划。不喜欢二次元的人可能get不到，但喜欢的人会觉得正中下怀。' },            { q: '太花哨吗？', a: '默认状态很克制：星光是静态的，光晕只在窗口边框。比动态壁纸主题安静得多，只是配色比较出挑。' },            { q: '青蓝虚拟歌姬要钱吗？', a: '免费版内置的主题就包含它，Pro 解锁的是自定义配色和背景图。' },          ],        },        { type: 'cta', text: '到画廊看青蓝虚拟歌姬的实时效果', href: '/zh/gallery/preset-virtual-diva' },      ],      en: [        'Azure Virtual Diva is the Azure Virtual Diva Codex theme with the most idol energy in the gallery: sky-blue primary, stage-light highlights, a touch of neon, turning your Codex desktop into a concert backstage. This guide covers its palette logic, who it suits, and how to pair it without going full cosplay.',        { type: 'h2', text: 'Why sky blue is an idol color' },        'In virtual idol visual language, sky blue is the first-gen color: clear, bright, approachable without being cold. Azure Virtual Diva uses a low-saturation sky-blue base, window borders with pale stage-light highlights, scrollbar and accents in the same family. It reads like a concert that has not started yet. Clean, bright, a little anticipation.',        'Where Purple Night goes deep, Azure goes translucent: higher lightness, gentler contrast, cooler tones. This is not a dark theme. It is the light anime theme that makes a daytime session feel better.',        { type: 'h2', text: 'What is inside the theme' },        {          type: 'ul',          items: [            'Background: sky-blue gradient with fine star speckles, like stage follow spots',            'Highlights: white primary with sky-blue and light purple accents, clear code hierarchy',            'Borders: window edges carry a stage-light glow',            'Palette: a rare low-saturation anime scheme, easy to live with for long sessions',          ],        },        'In the gallery, Azure Virtual Diva sits in the "idol project" lane. Against Red Sci-Fi\'s aggression and Purple Night\'s immersion, it goes bright and cute: for anime fans, virtual idol followers, and anyone who wants their desktop to feel like a project.',        { type: 'h2', text: 'How to pair it' },        'Use a light code theme, GitHub Light or One Light work best. A bright editor on a sky-blue desktop is harmonious. A dark code theme will look slightly off but still usable. Desktop wallpapers should stay light: sky blue, white, or pale purple. A dark wallpaper kills the transparency feel.',        'Keep the icon theme default. The stage glow carries the identity on its own. Window transparency around 90% lets the sky-blue base show through, which is the setup that shows it off best.',        { type: 'h2', text: 'Who it suits' },        'Anime and virtual idol fans. People who stream or record and want a bright, memorable interface. People who find default themes boring and dark themes too heavy. It is not deep or flashy, but nobody mistakes it for a stock theme.',        'If you are on the fence, check the live preview on the preset-virtual-diva gallery page before installing. Seeing it first beats install-then-remove.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Is Azure Virtual Diva good for coding?', a: 'Yes. It is a light theme with solid readability, and the low-saturation sky blue is easy on the eyes for hours. Softer than pure white, lighter than dark themes. The kind of theme that makes you smile when you look up from a long session.' },            { q: 'Is this an anime theme?', a: 'Yes. It was designed for virtual idol style, sky-blue primary plus stage-light atmosphere, the whole vibe is an idol project. People who do not care about anime may not get it. People who do, will feel seen.' },            { q: 'Is it too flashy?', a: 'The default is restrained: static stars, glow only on window borders. Compared to animated wallpaper themes, it is quiet. The palette is what stands out.' },            { q: 'Does Azure Virtual Diva cost money?', a: 'The free tier includes it. Pro unlocks custom colors and background images.' },          ],        },        { type: 'cta', text: 'See Azure Virtual Diva live in the gallery', href: '/en/gallery/preset-virtual-diva' },      ],    },  },  {    slug: 'stage-black-gold-theme',    date: '2026-08-14',    title: {      zh: '舞台黑金主题：高级感配色完整指南',      en: 'Stage Black Gold Theme: Premium Color Guide',    },    description: {      zh: '舞台黑金是主题库里最讲克制的一款 Codex 暗色主题：纯黑打底、香槟金点缀。这篇把配色的每个 hex 拆开讲，聊黑金为什么难做、怎么搭配、以及什么情况下别用。',      en: 'The stage black gold codex theme, palette hex by hex: why black and gold is harder to get right than it looks, how to pair it, and when to skip it.',    },    content: {      zh: [        '舞台黑金是主题库里最显贵的一款 stage black gold codex theme：纯黑打底，香槟金点缀，光线像空舞台上的一束追光。没有霓虹，没有互相打架的渐变。这篇把配色的 hex 一个个拆开讲，说清黑金为什么比看起来难做，以及什么人不该用它。',        { type: 'h2', text: '黑金为什么比看起来难做' },        '金其实不是一个颜色，是一种反光行为。现实里的金靠高光和暗部的落差撑起来，屏幕上只有一个个平面色值，所以金必须用一段很窄的低饱和黄褐去假装，大致落在 #c8a45c 附近。饱和度往上一点变芥末，明度往下一点变土褐，可用区间窄得离谱。这也是网上大部分黑金配色看着廉价的原因。',        '另一半是克制。真金看起来贵，是因为量少。金色一旦覆盖超过屏幕的十分之一，它就从点缀变成主色，整体立刻往夜总会方向跑。舞台黑金把金限制在窗口边框、活动标签下划线和光标上，别的地方一点不给。',        { type: 'h2', text: '配色拆解：一个个 hex' },        {          type: 'ul',          items: [            '底色 #141414：不是纯黑，带一点暖，长时间看比 #000 舒服',            '面板 #2a2a2a：侧栏和标题栏用，不画边框也能分出层次',            '强调色 #c8a45c：香槟金，只出现在活动边框、光标、链接',            '暗金 #8a7038：hover 和按下状态，把金压回去，避免界面闪',            '文字 #ece7dd：暖白而不是纯白，色温和金色对得上',          ],        },        '值得单独说的是为什么用 #141414 而不是 #000000。纯黑配亮字在 OLED 和不少便宜 IPS 屏上会出现光晕，字的边缘发虚。近黑底能挡掉大部分。你眼睛看不出这点色差，但两小时之后身体知道。',        { type: 'h2', text: '怎么搭配 black gold theme 才不显土' },        '编辑器主题用 Dark+ 或者 GitHub Dark。它们偏中性冷调，听着像和暖金冲突，实际上基本不冲突，因为金从来不进代码区，只待在界面框架上。避开 Monokai 这类字符串是黄绿色的方案，一个窗口里两种黄，看着像配错了而不是配过。',        '壁纸就用纯 #141414，或者一张只有单一光源的深色照片。花哨壁纸会把追光那点意思冲掉，主题也就不成立了。图标主题保持默认，彩色文件夹图标是毁掉黑金最快的方式。',        '如果你的环境支持窗口透明，92% 到 95% 是合适区间。再低下去，细窄的金色边框跟窗后的东西对比度就不够了。',        { type: 'h2', text: '谁适合这款 Codex 暗色主题' },        '夜里干活的人。录屏或者直播、希望画面看起来是设计过的人。还有看腻了默认蓝灰的人。它首先是一款能长时间用的 dark codex theme，其次才是风格表达，这个顺序不能反。',        '不适合的情况也说清楚：房间很亮就别用。低调暗色主题需要可控光线，白天的光打在黑面板上，屏幕直接变镜子。另外如果你依赖界面里的颜色编码，git 状态色、语言图标色、彩色终端输出，这套主题会跟你反着来，它要的是界面安静。',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: '舞台黑金适合长时间写代码吗？', a: '适合，但有个前提。#141414 的近黑底配暖白字，比纯黑配纯白省眼睛。前提是环境光可控，房间太亮的时候，任何暗色主题都是赔本的。' },            { q: '黑金和纯黑该选哪个？', a: '纯黑更保险，金色给界面一个锚点。习惯了金色代表活动状态之后，你会少花时间找当前焦点在哪个面板。这是好看之外一个很小但真实的收益。' },            { q: '会和我的代码主题打架吗？', a: '只有你的代码主题偏黄才会。中性暗色方案都没问题，两种黄同屏就不行。' },            { q: '这款主题要钱吗？', a: '黑金舞台归在 Pro 档。免费版内置 8 款主题，覆盖粉系、科幻、暗黑、清新四个分类。' },          ],        },        '真正的建议是先看预览。在预览页跟一套配色待五分钟，比看任何文章都准，包括这篇。',        { type: 'cta', text: '到 codex-skin-studio.shop 画廊看黑金舞台主题', href: '/zh/gallery/preset-andy-lau' },        { type: 'cta', text: '浏览全部主题 →', href: '/zh/gallery' },      ],      en: [        'The stage black gold codex theme is the one preset in the gallery that reads as expensive. Pure black base, champagne gold accents, light behaving like a single spotlight on an empty stage. No neon, no gradients fighting each other. This guide walks the palette hex by hex, explains why black and gold is harder to get right than it looks, and says plainly who should skip it.',        { type: 'h2', text: 'Why black and gold is harder than it looks' },        'Gold is not really a color, it is a behavior. In the physical world it works because of the gap between highlight and shadow. On a screen you only have flat values, so gold has to be faked with a narrow band of desaturated yellow-brown, somewhere around #c8a45c. Raise the saturation and it turns to mustard. Drop the lightness and it goes to mud. The usable window is tiny, which is why most black-and-gold attempts online look cheap instead of premium.',        'The second half is restraint. Real gold reads as expensive because there is so little of it. Once gold covers more than a tenth of the screen it stops being an accent and becomes a theme color, and the whole thing drifts toward casino. This preset keeps gold on window borders, the active tab underline, and the caret. Nothing else gets any.',        { type: 'h2', text: 'The palette, hex by hex' },        {          type: 'ul',          items: [            'Base #141414: near-black with a trace of warmth, easier to sit with than #000',            'Panel #2a2a2a: sidebar and title bar, enough separation without drawing a border',            'Accent #c8a45c: champagne gold, only on active borders, caret, and links',            'Dim gold #8a7038: hover and pressed states, gold pulled back so the UI does not flicker',            'Text #ece7dd: warm off-white rather than pure white, matched to the gold temperature',          ],        },        'The choice worth explaining is #141414 instead of #000000. Pure black under bright text produces halation on OLED panels and on plenty of cheap IPS ones, where letter edges bloom slightly. A near-black base removes most of that. You will not consciously see the color difference. You will notice it after two hours.',        { type: 'h2', text: 'How to pair a black gold theme' },        'For the editor itself, Dark+ or GitHub Dark. Both lean neutral-cool, which sounds like a fight with warm gold and mostly is not, because the gold never enters the code area. Avoid Monokai and anything with a strong yellow-green string color. Two different yellows in one window look like a mistake rather than a decision.',        'Wallpaper: flat #141414, or a very dark photo with one light source. Busy wallpaper kills the spotlight idea and the theme stops meaning anything. Keep the icon theme default. Colored folder icons are the fastest way to ruin a black gold theme.',        'If your setup supports window transparency, 92 to 95 percent is the range. Go lower and the thin gold borders lose contrast against whatever sits behind the window.',        { type: 'h2', text: 'Who it suits, and when to skip it' },        'It suits people who work at night, people who record or stream and want a frame that looks deliberate, and anyone tired of blue-gray defaults. It is a usable dark codex theme first and a style statement second, and that order matters.',        'Skip it in a bright room. Low-key dark themes need controlled light, and daylight on a black panel turns the screen into a mirror. Skip it also if you rely on interface color coding: git status colors, per-language icon tints, colored terminal output. This theme wants the interface quiet and it will fight you on that.',        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Is the stage black gold theme good for long coding sessions?', a: 'Yes, with one condition. The #141414 base with warm off-white text is easier on the eyes than pure black with pure white. The condition is ambient light. In a bright room, any dark theme costs you more than it gives.' },            { q: 'Black gold or plain black?', a: 'Plain black is the safer default. Gold gives the interface an anchor. Once you learn that gold means active, you spend less time hunting for which pane has focus. Small, real, separate from how it looks.' },            { q: 'Will it clash with my code theme?', a: 'Only if your code theme leans yellow. Neutral dark schemes are fine. Two yellows on one screen are not.' },            { q: 'Does this theme cost anything?', a: 'The black-gold stage preset sits in the Pro tier. The free tier ships eight themes across the pink, sci-fi, dark, and fresh categories.' },          ],        },        'The honest advice is to look before you commit. Five minutes with a palette on a preview page tells you more than any writeup, including this one.',        { type: 'cta', text: 'See the black-gold stage theme in the codex-skin-studio.shop gallery', href: '/en/gallery/preset-andy-lau' },        { type: 'cta', text: 'Browse all themes →', href: '/en/gallery' },      ],    },  },  {    slug: 'codex-vs-cursor-vs-trae-editor-themes',    date: '2026-08-14',    title: {      zh: 'Codex vs Cursor vs Trae：AI 编程工具界面颜值对比，谁的主题更好看',      en: 'Codex vs Cursor vs Trae: Which AI Code Editor Looks Best?',    },    description: {      zh: 'Codex、Cursor、Trae 三款 AI 编程工具都能写代码，但界面质感天差地别。这篇从主题生态、自定义能力、暗色模式三个维度对比，告诉你哪款最好看、怎么换肤最省事。',      en: 'Codex, Cursor and Trae all write code for you, but their interfaces feel very different. We compare theming ecosystems, customization depth, and dark-mode polish to answer which AI code editor looks best — and how to skin each one.',    },    content: {      zh: [        '选 AI 编程工具，大家比模型、比价格，很少有人先看界面。但你要在编辑器里坐八个小时，代码写得再聪明，一个辣眼睛的主题也能把你的耐心磨光。这篇把 Codex 桌面端、Cursor、Trae 三款主流 AI 编辑器放在一起，从主题生态、自定义能力、暗色模式三个维度对比，最后给换肤方案。',        { type: 'h2', text: '三款编辑器一眼看完' },        {          type: 'ul',          items: [            'Codex 桌面端：OpenAI 出品，界面克制干净，主打专注；主题全靠社区工具补位',            'Cursor：VS Code 血统，主题市场直接继承 VS Code 生态，选择最多',            'Trae：国内团队出品，IDE 级功能整合，主题相对封闭但自带几套质感不错的暗色',          ],        },        '三款都能写代码，但"看起来怎么样"是另一回事。Codex 桌面端没有官方主题商店，Cursor 靠 VS Code 生态躺赢，Trae 在封闭生态里自己做设计。下面逐个说。',        { type: 'h2', text: 'Codex 桌面端：为专注而生的克制界面' },        'Codex 桌面端的默认界面走的是"少即是多"路线：深色面板、克制的强调色、几乎没有装饰。它把注意力留给对话和代码，这是 OpenAI 一贯的设计哲学。但代价是——你想换个样子的时候，官方没有主题商店，设置里能改的只有字号和深浅模式。',        '这时候就需要第三方工具补位。Codex Skin Studio 通过 CDP（Chrome DevTools Protocol）向运行中的 Codex 桌面端注入主题样式，不改任何官方文件，关掉即还原，升级 Codex 也不会丢主题。内置 8 款精选主题，从粉系的浪漫玫瑰、暗黑系的舞台黑金，到科幻系的红白赛博朋克都有。',        { type: 'cta', text: '看看 8 款精选 Codex 主题 →', href: '/en/guides/best-codex-themes' },        { type: 'h2', text: 'Cursor：VS Code 血统，主题选择最多的赢家' },        'Cursor 本质上是 VS Code 的分支，所以它白捡了 VS Code 十几年积累的主题生态：VS Code 市场里上万款主题，装个扩展就能用。这是 Cursor 在"好不好看"这件事上的最大优势——选择多到挑花眼。',        '代价是它骨子里还是编辑器不是"AI 产品"：主题改的是语法高亮和 UI 配色，AI 面板（Chat、Composer）的样式和编辑器主体常常脱节，混搭感明显。而且 Cursor 的暗色模式是对 VS Code 默认暗色的微调，谈不上设计感。',        { type: 'h2', text: 'Trae：封闭生态里的设计课代表' },        'Trae 是国内团队的 AI IDE，整合了构建、调试、终端，想做成"全家桶"。主题方面它没接 VS Code 市场，走封闭路线，自带几套暗色主题，默认那套深蓝黑质感确实在线，适合不喜欢折腾的人。',        '短板也很明显：主题数量少、不能导入第三方主题、自定义只能改改强调色和字体。如果你对界面有自己的想法，Trae 给不了你太多空间。',        { type: 'h2', text: '直接对比：主题生态 / 自定义 / 暗色模式' },        {          type: 'ul',          items: [            '主题数量：Cursor（上万款）> Codex 桌面端（8 款官方 + 社区工具扩展）> Trae（个位数内置）',            '自定义深度：Cursor 改 JSON 配置，上限高；Codex 用 Codex Skin Studio 换肤，无需碰配置文件；Trae 只能改强调色',            '暗色模式质感：Trae 默认最佳，Codex 靠第三方主题反超，Cursor 中规中矩',            '换肤成本：Codex 最低（工具一键套用）；Cursor 需要装扩展；Trae 基本没有可换的',          ],        },        '结论：喜欢折腾选 Cursor，不想折腾又要质感选 Trae，想在"克制的底色上换一套喜欢的皮"选 Codex 桌面端 + 换肤工具。',        { type: 'h2', text: '如果还是拿不定主意' },        '说点实际的。为 AI 功能换编辑器的开发者，通常只关心三件事：模型好不好用、价格合不合适、每天坐着舒不舒服。前两件事网上评测一大把，第三件很少有人认真讲。Cursor 靠 VS Code 生态赢下主题选择，但 AI 面板和编辑器主体常常像两个软件；Trae 开箱即用最省心，但想改没得改；Codex 桌面端一开始就刻意做减法——这反而意味着你给它加的任何东西（包括用 Codex Skin Studio 换上的整套主题）都像是有意为之，而不是继承来的。',        { type: 'h2', text: 'Codex 桌面端怎么换主题' },        'Codex Skin Studio 目前支持 macOS 和 Windows：下载安装 → 点「启动注入」→ 在主题库挑一款（或上传自定义背景）→ 立即生效。全程不改官方文件，不满意一键还原。',        { type: 'cta', text: '免费下载，给 Codex 换身新衣服', href: '/en/download' },        { type: 'cta', text: '看 Codex 换肤完整教程 →', href: '/en/blog/codex-skin-complete-guide' },        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: '哪款 AI 编辑器的主题最好看？', a: '看需求：想要最多选择选 Cursor（继承 VS Code 生态）；想要开箱即用的质感选 Trae；想要"克制底色 + 换皮自由"选 Codex 桌面端配换肤工具。' },            { q: 'Codex 桌面端能换主题吗？', a: '官方没有主题商店，但可以用 Codex Skin Studio 这类工具通过 CDP 注入主题，不改官方文件，支持 macOS 和 Windows。' },            { q: '换肤会不会影响 Codex 更新？', a: '不会。主题是运行时注入的，不修改任何官方文件，Codex 更新后主题依然可用，关掉工具即完全还原。' },            { q: 'Cursor 的主题能用到 Codex 上吗？', a: '不能直接复用，两者底层不同。不过 Codex Skin Studio 的主题风格（粉系、科幻、暗黑、清新）覆盖了 Cursor 市场里最热门的几类审美。' },          ],        },        '最后说一句：界面好不好看没有标准答案，但"能不能换"是硬指标。挑编辑器的时候，把主题生态也放进对比清单，别等到看腻了才发现没得换。',        { type: 'cta', text: '浏览全部 Codex 主题 →', href: '/en/gallery' },      ],      en: [        'When people pick an AI coding tool, they compare models, pricing, and context windows — rarely the interface. But you sit in the editor for eight hours a day, and a poorly designed theme will grind your patience down faster than any model limitation. This guide puts the three mainstream AI editors — Codex desktop, Cursor, and Trae — side by side on theming ecosystems, customization depth, and dark-mode polish, and ends with a concrete skinning playbook for each.',        { type: 'h2', text: 'The three editors at a glance' },        {          type: 'ul',          items: [            'Codex desktop (OpenAI): a restrained, focused interface with no official theme store — theming is handled by community tools',            'Cursor: a VS Code fork, which means it inherits the entire VS Code extension theme marketplace',            'Trae (ByteDance): an all-in-one AI IDE with a closed theming system and a handful of genuinely well-designed dark themes',          ],        },        'All three write code for you. How they look is a completely different question. Codex ships with a deliberately minimal look, Cursor wins on sheer choice by inheriting VS Code, and Trae does its own design inside a closed ecosystem. Let us go one by one.',        { type: 'h2', text: 'Codex desktop: a clean slate built for focus' },        'The Codex desktop app follows a "less is more" philosophy: dark panels, restrained accents, almost no decoration. It keeps your attention on the conversation and the code, which is classic OpenAI design thinking. The trade-off is that there is no official theme store — the settings panel lets you change font size and light/dark mode, and that is about it.',        'That gap is exactly where third-party tools step in. Codex Skin Studio themes the running Codex desktop app via CDP (Chrome DevTools Protocol) loopback injection. It does not modify any official files, everything reverts when you quit the tool, and your themes survive Codex updates. It ships with 8 curated presets spanning pink, sci-fi, dark, and fresh styles — from Romantic Rose and Stage Black Gold to Red Sci-Fi Cyberpunk.',        { type: 'cta', text: 'See the 8 curated Codex themes →', href: '/en/guides/best-codex-themes' },        { type: 'h2', text: 'Cursor: VS Code DNA and the biggest theme library' },        'Cursor is a VS Code fork, so it inherits one enormous advantage: the VS Code marketplace, with tens of thousands of themes you can install in one click. If choice is what you want, Cursor wins outright — the hard part becomes picking one and sticking with it.',        'The cost is that Cursor still feels like an editor, not an AI product. Themes change syntax highlighting and UI colors, but the AI surface — the chat and composer panels — often looks disconnected from the rest of the window. Its dark mode is a slight retune of VS Code default dark, and the whole experience rarely feels "designed".',        { type: 'h2', text: 'Trae: the design pick of a closed ecosystem' },        'Trae is ByteDance\'s AI IDE, bundling build, debug, and terminal into a single package. It deliberately does not plug into the VS Code marketplace; theming is closed, with a handful of built-in dark themes. The default deep blue-black scheme genuinely looks polished, and for people who never want to touch theme settings, it is the best out-of-the-box experience of the three.',        'The downside is equally clear: few themes, no third-party imports, and customization limited to accent color and font. If you have opinions about how your editor should look, Trae gives you almost no room to express them.',        { type: 'h2', text: 'Side by side: themes, customization, dark mode' },        {          type: 'ul',          items: [            'Theme count: Cursor (tens of thousands) > Codex desktop (8 official + community skinning tools) > Trae (single-digit built-ins)',            'Customization depth: Cursor edits JSON configs, high ceiling; Codex swaps skins through a tool without touching config files; Trae is accent-color only',            'Dark-mode polish: Trae ships best by default, Codex catches up via third-party themes, Cursor is competent but generic',            'Effort to reskin: Codex is lowest (one-click apply); Cursor needs extension browsing; Trae has almost nothing to swap',          ],        },        'The short version: pick Cursor if you love tweaking, pick Trae if you want polish with zero effort, and pick Codex desktop with a skinning tool if you want a focused base that you can dress up whenever you feel like it.',        { type: 'h2', text: 'If you are still undecided' },        'Here is the practical version. Developers who switch editors for AI features usually care about three things: model access, pricing, and daily comfort. The first two are covered by a thousand reviews; the third one rarely gets a serious mention. Cursor wins the theme lottery by inheriting VS Code, but pays for it with an AI surface that can feel like a different app bolted onto the editor. Trae looks great out of the box and costs nothing to maintain, but there is no room to make it yours. Codex desktop starts minimal, and deliberately so — which means whatever you add to it, including a full theme from Codex Skin Studio, reads as intentional rather than inherited.',        { type: 'h2', text: 'How to theme the Codex desktop app' },        'Codex Skin Studio supports macOS and Windows: download and install → click "Start injection" → pick a theme in the library (or upload your own background) → applied instantly. No official files are touched, and one click restores the official look.',        { type: 'cta', text: 'Download free and reskin Codex', href: '/en/download' },        { type: 'cta', text: 'Read the complete Codex skinning guide →', href: '/en/blog/codex-skin-complete-guide' },        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'Which AI editor has the best themes?', a: 'Depends on what you want: most choice goes to Cursor (it inherits the VS Code ecosystem); best out-of-the-box polish goes to Trae; and the "focused base with free skinning" pick goes to Codex desktop paired with a skinning tool.' },            { q: 'Can you theme the Codex desktop app?', a: 'There is no official theme store, but tools like Codex Skin Studio inject themes over CDP without modifying official files, on macOS and Windows.' },            { q: 'Does reskinning Codex break updates?', a: 'No. Themes are applied at runtime via injection and never touch official files, so themes survive Codex updates, and quitting the tool fully restores the original look.' },            { q: 'Can Cursor themes be used in Codex?', a: 'Not directly — they are built on different foundations. But Codex Skin Studio presets (pink, sci-fi, dark, fresh) cover the most popular aesthetic categories in the Cursor marketplace.' },          ],        },        'One last note: whether an interface looks good is subjective, but whether you can change it is not. Put the theming ecosystem on your comparison checklist before you commit — do not wait until you are bored of the default to find out there is no way out.',        { type: 'cta', text: 'Browse all Codex themes →', href: '/en/gallery' },      ],    },  },  {    slug: 'codex-theme-light-dark-modes',    date: '2026-08-15',    title: {      zh: "Codex 主题的亮色暗色到底怎么适配？一篇讲透",      en: "Which Modes Do Codex Themes Support? A Light/Dark Guide",    },    description: {      zh: 'Codex 主题怎么适配亮色和暗色？这篇讲透亮色暗色模式的工作原理、哪些主题默认支持双模式、自定义主题为什么要两套配色都写，以及切换时怎么避免刺眼。',      en: 'How do Codex themes handle light and dark mode? This guide explains light/dark adaptation, which themes support both modes by default, why custom themes need two palettes, and how to switch without eye strain.',    },    content: {      zh: [        "后台收到最多的提问，不是\"哪个颜色好看\"，而是\"我的主题怎么不会自动跟着系统切换\"。今天把 Codex 主题亮色暗色（codex theme light dark mode）这件事从头讲透。",        {                "type": "h2",                "text": "一套主题，为什么非要配两套颜色"        },        "白天在亮色界面下看久了眼睛容易累，到了晚上暗色反而更舒服。这不是玄学，是大多数编辑器用户的真实使用节奏。light dark mode 适配，就是让同一套主题在两种环境下都成立，而不是让你每天手动去改设置。",        {                "type": "h2",                "text": "双模式是怎么定义出来的"        },        "每个主题文件里其实藏着两份配色表，一份叫 light，一份叫 dark，背景、前景、边框、语法高亮各管各的。",        "如果你打开自定义主题的设置页，看到两套色板，别嫌麻烦，它们各有各的用途。",        {                "type": "h2",                "text": "跟随系统：prefers-color-scheme 怎么声明"        },        "Codex 主题支持三种模式：强制亮色、强制暗色、自动。自动模式依赖 CSS 的 `prefers-color-scheme` 媒体查询，系统亮它就显示亮色，系统暗它就切暗色，不需要你点任何东西。主题文件里的声明大致长这样：",        "```",        "@media (prefers-color-scheme: dark) {",        "  :root { /* 暗色变量覆盖 */ }",        "}",        "```",        "一句话总结：只要主题声明了这个查询，你的编辑器就会跟着操作系统的深浅色走。",        {                "type": "h2",                "text": "哪些内置主题默认支持双模式"        },        "这一版内置主题里，下面这几款默认就带完整的 light/dark 双套配色：",        {                "type": "ul",                "items": [                        "Codex 官方默认主题",                        "石墨风（Graphite）",                        "晚霞（Dusk）",                        "纸墨（Ink Paper）",                        "森林（Forest）"                ]        },        "安装后在设置里把模式切到\"自动\"，马上就能看到效果。想看更多样式，可以逛逛",        {                "type": "cta",                "text": "/zh/gallery",                "href": "/zh/gallery"        },        {                "type": "h2",                "text": "自定义主题时，两套配色都要写的真正原因"        },        "很多人自定义主题只写了一套颜色，结果切到另一模式后，界面要么发白要么发黑，文字直接看不见。原因不复杂：主题框架会在两种模式之间切换变量，你没定义的那套变量会回落到默认值，对比度当场崩掉。两套都写上，等于给两种环境都准备了合理参数，切换时不会翻车。",        {                "type": "h2",                "text": "切换时怎么避免刺眼过渡"        },        "从亮变暗只花一帧，整个屏幕闪一下，眼睛很难受。我常用的做法：",        {                "type": "ul",                "items": [                        "别用瞬时切换，让过渡动画控制在 150–300 毫秒",                        "暗色背景别用纯黑，带一点蓝灰的深色，能明显缓解眩光",                        "两个模式里保持高亮色同一色相，只调明度",                        "切换完先看语法高亮，确认没有跟背景撞色的文字"                ]        },        "**Codex 主题怎么跟随系统自动切换？**",        "在主题设置里把模式选成\"自动\"，主题会读取系统的 prefers-color-scheme，跟着深浅色走。",        "How do I make my Codex theme follow the system? Pick \"auto\" in the theme settings and it will listen to prefers-color-scheme.",        "**我自定义的主题切到暗色后文字看不清，怎么办？**",        "多半只写了亮色那套变量。去",        {                "type": "cta",                "text": "/guides/customize",                "href": "/guides/customize"        },        "Text is unreadable in dark mode on my custom theme. You likely only defined the light variables. Head to /guides/customize and fill in the dark set.",        "**内置主题全都支持双模式吗？**",        "不是全部，上面列的五款默认支持，其余的在设置里确认一下就行。",        "Do all built-in themes support both modes? Not all. The five listed above do; check the settings for the rest.",        "想要更多配色灵感，回到",        {                "type": "cta",                "text": "Codex 主题站首页",                "href": "/"        }],      en: [        "The question I get most in the theme store inbox is not \"which colors look nice.\" It's \"why doesn't my theme follow my system automatically?\" Let me walk you through how codex theme light dark mode actually works, from the two color tables to the switch animation.",        {                "type": "h2",                "text": "Why one theme needs two color schemes"        },        "In the morning I want a bright workspace. At night, the same screen feels like it's screaming at me. That's not a preference thing, it's a rhythm most editor users share. A Codex theme with proper light dark mode support gives you two working setups, so you never have to dig into settings just to change the lighting.",        {                "type": "h2",                "text": "How a dual-mode theme is put together"        },        "Inside every theme file there are two color tables hiding. One is called light, the other dark. They handle background, foreground, borders and syntax highlight independently.",        "If you open the customizer and see two palettes, don't be annoyed. They each earn their keep.",        {                "type": "h2",                "text": "Following the system: prefers-color-scheme"        },        "Codex themes ship with three modes: force light, force dark, and auto. Auto relies on the CSS `prefers-color-scheme` media query. When your OS is light, the theme stays light; flip the OS to dark and the theme follows. No clicks needed.",        "```",        "@media (prefers-color-scheme: dark) {",        "  :root { /* dark variable overrides */ }",        "}",        "```",        "That's the whole trick. If the theme declares this query, your editor follows the system scheme.",        {                "type": "h2",                "text": "Which built-in themes support both modes by default"        },        "Five built-ins ship with a complete light/dark pair out of the box:",        {                "type": "ul",                "items": [                        "Codex default theme",                        "Graphite",                        "Dusk",                        "Ink Paper",                        "Forest"                ]        },        "Pick \"auto\" in the settings and you can see the effect immediately. For more styles, browse",        {                "type": "cta",                "text": "/zh/gallery",                "href": "/zh/gallery"        },        {                "type": "h2",                "text": "The real reason to write both palettes when you customize"        },        "People often define one palette and call it done. Then they flip to the other mode and the interface turns into a whiteout or a black hole. The theme framework swaps variables between the two schemes, and anything you left undefined falls back to the default. That's when contrast falls apart. Writing both palettes is just giving both environments sane parameters so the switch never breaks.",        {                "type": "h2",                "text": "Avoiding the harsh flash on switch"        },        "Going from light to dark in one frame makes the whole screen blink. It stings. What works for me:",        {                "type": "ul",                "items": [                        "Skip instant switching. Let the transition run 150 to 300 milliseconds.",                        "Avoid pure black in dark mode. A deep blue-gray is much easier on the eyes.",                        "Keep the same hue for highlight colors in both modes, only adjust lightness.",                        "Check syntax highlights right after switching. Make sure no text collides with the background."                ]        },        "**How do I make my Codex theme follow the system?**",        "Pick \"auto\" in the theme settings. The theme reads prefers-color-scheme and follows the OS. 我的 Codex 主题怎么跟随系统？在设置里选\"自动\"即可。",        "**Text is unreadable in dark mode on my custom theme.**",        "You probably only wrote the light variables. Head to",        {                "type": "cta",                "text": "/guides/customize",                "href": "/guides/customize"        },        "**Do all built-in themes support both modes?**",        "Not all of them. The five listed above do, and the rest can be checked in the settings. 内置主题都支持双模式吗？不是全部，上面列的五款默认支持。",        "If you want more color inspiration, head back to the",        {                "type": "cta",                "text": "Codex theme store homepage",                "href": "/"        }],    },  },  {    slug: 'pink-codex-theme-tour',    date: '2026-08-16',    title: {      zh: "Codex 粉系主题速览：温柔工作台怎么搭",      en: "Codex Pink Themes Quick Tour: Build a Soft, Focused Workspace",    },    description: {      zh: 'Codex 粉系主题（codex pink theme）盘点：粉色调为什么适合长时间编码、内置粉色 preset 有哪些、怎么把任意主题调成粉色系，以及粉色搭配暗色模式的小技巧。',      en: 'A codex pink theme quick tour: why pink palettes work for long coding sessions, which built-in pink presets exist, how to recolor any theme pink, and tips for pairing pink with dark mode.',    },    content: {      zh: [        "粉色常被当成\"不够极客\"的颜色，但真正把 codex pink theme 装过的人都知道：粉色工作台对长时间编码意外地友好。今天把内置粉系主题翻一遍，再教你怎么把任意主题调成粉色系。",        {                "type": "h2",                "text": "为什么粉色适合编码"        },        "编辑器天天看，配色选的不是\"好看\"，是\"不累\"。粉色的问题在于高饱和粉看久了刺眼，但低饱和的玫瑰粉、豆沙粉反而比纯白和纯黑更舒服：",        {                "type": "ul",                "items": [                        "低饱和粉背景降低对比刺激，眼睛不容易疲劳",                        "粉色与代码默认的蓝绿紫语法色不冲突，高亮依旧清晰",                        "长时间盯着写代码，暖色调比冷色调更容易让注意力停留"                ]        },        "一句话：粉色不是卖萌，是一种被低估的护眼方案。",        {                "type": "h2",                "text": "内置粉色 preset 盘点"        },        "主题库里分了一个专门的 pink 分类，下面这几款都是直接能装的：",        {                "type": "ul",                "items": [                        "preset-yang-simin（杨思敏主题）：玫红+浅粉渐变，配旗袍红裙插画，浪漫里带点复古",                        "preset-dilraba（迪丽热巴主题）：偏明亮的粉调，适合喜欢活泼一点工作台的开发者"                ]        },        "两款都做了暗色模式适配，晚上切暗色不会闪白。想看完整图库和效果预览，去",        {                "type": "cta",                "text": "/zh/gallery",                "href": "/zh/gallery"        },        {                "type": "h2",                "text": "没有现成粉色？自己调一个"        },        "内置 preset 不够粉？自定义主题里改三组变量就够了：背景、前景、强调色。记住三个数值参考：",        {                "type": "ul",                "items": [                        "背景用低饱和粉：色相 330-350°，饱和度 15-25%，明度 90% 以上",                        "前景文字用深灰紫，别用纯黑，纯黑在粉底上对比太硬",                        "强调色（选中、光标、按钮）用玫红或珊瑚粉，饱和度 60-70%，一眼能找到"                ]        },        "改完保存，重启生效。想照着官方教程一步步来，翻",        {                "type": "cta",                "text": "/guides/customize",                "href": "/guides/customize"        },        {                "type": "h2",                "text": "粉色 + 暗色模式的搭配技巧"        },        "很多人担心粉色只有亮色好看，其实暗色粉才是隐藏宝藏：",        {                "type": "ul",                "items": [                        "暗色背景用深紫粉（明度 15% 左右），不是纯黑，保持粉调",                        "语法高亮在暗粉底上选淡粉、淡黄、薄荷绿，对比柔和",                        "把强调色统一成亮玫红，夜间写代码找光标不费劲"                ]        },        "**粉色主题会不会影响专注力？** 高饱和粉色会，低饱和不会。选背景饱和度 20% 以内的粉，专注力和白底没有差别。",        "**Codex 内置粉色 preset 只有两款吗？** 目前 pink 分类下是这两款，但社区皮肤里还有更多粉色系，图库里都能翻到。",        "**粉色主题适合暗色模式吗？** 非常适合。暗粉底比纯黑底更暖，夜间长时间编码眼睛更放松。",        "想让整个工作台都换成粉色系，回",        {                "type": "cta",                "text": "Codex 主题库首页",                "href": "/"        }      ],      en: [        "Pink gets dismissed as not-nerdy-enough, but anyone who has actually run a codex pink theme knows: a pink workspace is surprisingly good for long sessions. Let's tour the built-in pink presets, then cover how to recolor any theme pink.",        {                "type": "h2",                "text": "Why pink works for coding"        },        "You pick an editor color scheme for comfort, not for looks. High-saturation pink is harsh, but low-saturation rose and dusty pink are easier on the eyes than pure white or pure black:",        {                "type": "ul",                "items": [                        "Low-saturation pink backgrounds lower contrast strain, eyes tire less",                        "Pink does not fight the default blue, green, purple syntax colors, highlighting stays readable",                        "Warm palettes hold attention better than cold ones over hours of staring at code"                ]        },        "In short: pink is not cute, it is an underrated eye-saver.",        {                "type": "h2",                "text": "Built-in pink presets"        },        "The theme library keeps a dedicated pink category. These two are install-ready:",        {                "type": "ul",                "items": [                        "preset-yang-simin: rose and blush gradient with a cheongsam illustration, romantic with a retro twist",                        "preset-dilraba: a brighter pink tone, for developers who want a livelier desk"                ]        },        "Both ship with dark-mode palettes, so switching at night will not flash white. Browse the full gallery and previews at",        {                "type": "cta",                "text": "/gallery",                "href": "/gallery"        },        {                "type": "h2",                "text": "No pink preset? Recolor any theme"        },        "If the built-ins are not pink enough, edit three variable groups in any custom theme: background, foreground, accent. Three reference values:",        {                "type": "ul",                "items": [                        "Background: low-saturation pink, hue 330-350°, saturation 15-25%, lightness above 90%",                        "Foreground: dark gray-purple, not pure black, pure black is too hard against pink",                        "Accent (selection, cursor, buttons): rose or coral, saturation 60-70%, easy to spot"                ]        },        "Save and restart. For the official step-by-step, check",        {                "type": "cta",                "text": "/guides/customize",                "href": "/guides/customize"        },        {                "type": "h2",                "text": "Pink meets dark mode"        },        "People assume pink only works in light mode. Dark pink is the hidden gem:",        {                "type": "ul",                "items": [                        "Dark background: deep purple-pink at around 15% lightness, not pure black, keep the pink tone",                        "Syntax colors: pale pink, pale yellow, mint green on dark pink, soft contrast",                        "Accent: a single bright rose, so the cursor is easy to find at night"                ]        },        "**Does a pink theme hurt focus?** High-saturation pink does. Low-saturation pink does not. Keep the background under 20% saturation and focus is identical to a white background.",        "**Are there only two built-in pink presets?** That is the pink category right now, but community skins include more pink options, all browsable in the gallery.",        "**Is pink good for dark mode?** Very. Dark pink is warmer than pure black, so eyes relax more during late-night sessions.",        "Ready to go full pink? Head back to",        {                "type": "cta",                "text": "the theme store homepage",                "href": "/"        }      ]    },  },  {      "slug": "codex-sci-fi-theme-tour",      "date": "2026-08-17",      "title": {          "zh": "Codex 科幻主题速览：未来感工作台怎么搭",          "en": "Codex Sci-Fi Themes Quick Tour: Build a Futuristic Workspace"      },      "description": {          "zh": "Codex 科幻主题（codex sci-fi theme）盘点：哪些内置 preset 自带未来感、深色科幻配色怎么搭、霓虹强调色的正确用量，以及暗色模式下的可读性陷阱。",          "en": "A codex sci-fi theme quick tour: which built-in presets feel futuristic, how to build a dark sci-fi palette, the right amount of neon accent, and readability traps in dark mode."      },      "content": {          "zh": ["科幻主题是 Codex 主题里最“出片”的一类，但也是最容易翻车的一类。霓虹色滥用、对比度崩坏、长时间盯屏眼睛发酸，都是常见问题。今天把内置科幻 preset 翻一遍，再讲清楚未来感配色到底怎么搭才不伤眼。",{"type":"h2","text":"哪些内置 preset 自带科幻感"},"主题库里没有单独的 sci-fi 分类，但深色系里好几款都是天然科幻底子：",{"type":"ul","items":["gothic-void-expedition（哥特虚空远征）：深紫黑底 + 青绿高亮，太空探索气质，字符几乎全透明发光","cyber-neon（赛博霓虹）：黑底 + 品红/青色双霓虹，夜店感强，适合喜欢高饱和的用户","monokai-stone（Monokai 石）：经典 Monokai 的暗色变体，霓虹含量低，属于“克制科幻”","tokyo-night 系列：东京夜配色，深蓝底 + 粉紫高亮，很多开发者觉得这是最耐看的科幻风"]},"想直接看效果图，去",{"type":"cta","text":"/zh/gallery","href":"/zh/gallery"},{"type":"h2","text":"科幻配色三原则"},"未来感不等于满屏霓虹。真正耐看的科幻工作台，通常遵守三条原则：",{"type":"ul","items":["背景要暗但不要纯黑：纯黑在暗室里看久了眼睛发酸，深蓝或深紫（10-15% 亮度）更舒适","霓虹只做高亮和强调色：语法高亮、光标、选中区用霓虹，大面积文字保持低饱和灰","冷暖成对出现：青色配品红、蓝配紫，成对对比才像“科幻”，单一霓虹色会显得廉价"]},"一句话：科幻感来自背景和强调色的对比关系，不来自霓虹色数量。",{"type":"h2","text":"暗色模式下的可读性陷阱"},"深色科幻主题最大的坑是注释和次要文本看不清。霓虹色背景上，灰色注释几乎消失。装完主题先检查三处：",{"type":"ul","items":["注释色：至少 4.5:1 对比度，不能比背景只亮一点点","选中区：半透明霓虹高亮，避免整行实色挡住文字","光标：换一个与语法高亮不同色的霓虹，别混在一起"]},"这三处调好，科幻主题就能从“好看但没法干活”变成“好看又能干活”。",{"type":"h2","text":"怎么把任意主题调成科幻风"},"不想换主题？自定义模式改三组变量就够了：背景改成深蓝或深紫，前景保持低饱和灰，强调色换成霓虹青或品红。改动量比想象中小，效果却立竿见影。","调完记得对比度检查：注释 4.5:1、正文 7:1，这是 WCAG 的底线，也是“科幻不伤眼”的底线。",{"type":"h2","text":"FAQ"},"**科幻主题会伤眼睛吗？** 高饱和霓虹大面积铺开会。正确的做法是把霓虹限制在高亮和强调色，背景保持深蓝或深紫的暗色，这样既出效果又护眼。","**Codex 内置哪些科幻主题？** 深色系里的 gothic-void-expedition、cyber-neon、monokai-stone 和 tokyo-night 系列都是科幻底子，社区还有更多，全部能在图库浏览。","**霓虹色该用多少？** 原则是“少而精”：语法高亮、光标、选中区用霓虹，正文和背景保持低饱和。霓虹越多，长时间盯屏越累。","想要完整图库和效果预览，回到",{"type":"cta","text":"主题商店首页","href":"/"}],          "en": ["Sci-fi themes are the most photogenic category in the Codex theme store, and also the easiest to get wrong. Neon overload, crushed contrast, sore eyes after an hour of work — all classic. This quick tour runs through the built-in futuristic presets and explains how to build a sci-fi palette that still reads well at hour six.",{"type":"h2","text":"Which built-in presets feel sci-fi"},"There is no dedicated sci-fi category, but several dark presets are natural sci-fi bases:",{"type":"ul","items":["gothic-void-expedition: deep purple-black with teal highlights, space-exploration energy","cyber-neon: black background with magenta and cyan double-neon, nightclub energy","monokai-stone: a dark variant of classic Monokai, low neon, the restrained sci-fi option","tokyo-night series: deep blue base with pink and purple highlights, the one many devs find most comfortable"]},"For the full gallery with previews, head to",{"type":"cta","text":"/en/gallery","href":"/en/gallery"},{"type":"h2","text":"Three rules for sci-fi palettes"},"Futuristic does not mean wall-to-wall neon. Workable sci-fi workspaces follow three rules:",{"type":"ul","items":["Dark but not pure black: deep blue or purple at 10-15% lightness is easier on the eyes than #000","Neon only for highlights and accents: syntax colors, cursor, selection; body text stays low-saturation gray","Pair warm and cool: cyan with magenta, blue with purple. A single neon color reads as cheap, a pair reads as sci-fi"]},"The sci-fi feel comes from the contrast between background and accent, not from the neon count.",{"type":"h2","text":"Readability traps in dark mode"},"The biggest trap in dark sci-fi themes is comments and secondary text vanishing. On a neon-tinted background, gray comments disappear. After installing any dark theme, check three spots:",{"type":"ul","items":["Comment color: at least 4.5:1 contrast against the background","Selection: semi-transparent neon highlight, not a solid bar over the text","Cursor: a neon different from the syntax colors so it never blends in"]},"Fix those three and a sci-fi theme stops being 'pretty but unusable' and becomes 'pretty and usable'.",{"type":"h2","text":"Recolor any theme sci-fi"},"Do not want to switch? The custom editor only needs three variables: background to deep blue or purple, foreground to low-saturation gray, accent to neon cyan or magenta. Less work than you would expect, and the effect is instant.","Run the contrast check when done: 4.5:1 for comments, 7:1 for body text. That is the WCAG floor and the floor for 'sci-fi without sore eyes'.",{"type":"h2","text":"FAQ"},"**Do sci-fi themes hurt your eyes?** High-saturation neon spread everywhere does. The fix is to confine neon to highlights and accents and keep the background dark blue or purple — stylish and easy on the eyes.","**Which sci-fi themes are built into Codex?** In the dark group: gothic-void-expedition, cyber-neon, monokai-stone, and the tokyo-night series. The community has more, all browsable in the gallery.","**How much neon is too much?** Less is more: neon on syntax highlights, cursor, and selection; low-saturation colors for everything else. More neon means more eye strain over time.","For the full gallery and previews, head back to",{"type":"cta","text":"the theme store homepage","href":"/"}]      }  },  {    slug: 'codex-dark-theme-tour',    date: '2026-08-18',    title: {      zh: "Codex 暗黑主题速览：沉稳工作台怎么搭",      en: "Codex Dark Themes Quick Tour: Build a Calm, Focused Workspace",    },    description: {      zh: "Codex 暗黑主题（codex dark theme）盘点：哪些内置 preset 适合长时间编码、暗色配色怎么搭不刺眼、暗色模式下的可读性陷阱，以及如何把任意主题调成暗黑风。",      en: "A codex dark theme quick tour: which built-in presets suit long coding sessions, how to build a dark palette that does not sting the eyes, the readability traps in dark mode, and how to recolor any theme dark.",    },    content: {      zh: [        "暗黑主题几乎是每个深夜编码者的默认选择，但「暗」也有讲究。纯黑背景在暗室里看久了眼睛发酸，配色没搭好还会让注释糊成一团。今天把内置暗黑系 preset 翻一遍，再讲清楚暗色配色到底怎么搭才不伤眼。",        { type: 'h2', text: '哪些内置 preset 属于暗黑风' },        { type: 'ul', items: [          'preset-purple-night（紫夜限定）：深紫底 + 微光，神秘但不刺眼，夜间编码很舒服',          'gothic-void-expedition（哥特虚空远征）：深紫黑底 + 青绿高亮，太空探索气质',          'cyber-neon（赛博霓虹）：黑底 + 品红/青双霓虹，喜欢高饱和的可以选',          'tokyo-night 系列：深蓝底 + 粉紫高亮，很多开发者觉得最耐看',          'monokai-stone（Monokai 石）：经典 Monokai 暗色变体，霓虹含量低，属于「克制暗黑」',        ] },        { type: 'cta', text: '看看紫夜限定效果 →', href: '/zh/gallery/preset-purple-night' },        { type: 'h2', text: '暗色配色怎么搭才不刺眼' },        { type: 'ul', items: [          '背景深但别纯黑：深蓝或深紫（10-15% 亮度）比 #000 更护眼',          '文字用低饱和灰，别用纯白，纯白在暗底上对比太硬',          '强调色只放一处高亮：选中、光标、按钮用同一个霓虹，别到处撒',        ] },        { type: 'h2', text: '暗色模式下的可读性陷阱' },        { type: 'ul', items: [          '注释色：至少 4.5:1 对比度，不能只比背景亮一点点',          '选中区：半透明高亮，别用整行实色挡住文字',          '光标：换一个和语法高亮不同色的霓虹，别混在一起',        ] },        { type: 'h2', text: '怎么把任意主题调成暗黑风' },        "不想换主题？自定义模式改三组变量就够了：背景改成深蓝或深紫，前景保持低饱和灰，强调色换成单一霓虹。改动量比想象中小，效果却立竿见影。调完记得做对比度检查：注释 4.5:1、正文 7:1，这是 WCAG 的底线。",        { type: 'cta', text: '跟着官方教程一步步调 →', href: '/guides/customize' },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: '暗黑主题会比亮色更护眼吗？', a: '看怎么搭。纯黑底反而容易在暗室里刺眼；深蓝或深紫（10-15% 亮度）的背景更舒服。关键是降低对比刺激，而不是一味调暗。' },          { q: 'Codex 内置哪些暗黑主题？', a: '深色系里的 preset-purple-night、gothic-void-expedition、cyber-neon、tokyo-night 系列和 monokai-stone 都是暗黑底子。社区还有更多，全部能在图库翻到。' },          { q: '暗色模式最容易踩的坑是什么？', a: '注释和次要文本看不清。装完暗色主题先检查注释对比度、选中区透明度和光标颜色这三处，调好就能从「好看但没法干活」变成「好看又能干活」。' },        ] },        { type: 'h2', text: '回到主题库' },        "想要完整图库和效果预览，回到 Codex Skin Studio 主题库首页，几分钟就能让你的 Codex 换个沉稳的暗黑皮肤。",        { type: 'cta', text: 'Codex Skin Studio 主题库首页 →', href: '/' },      ],      en: [        "Dark themes are the default for almost everyone who codes late, but 'dark' is a spectrum. A pure-black background stings the eyes in a dark room, and a bad palette turns comments into mush. This quick tour runs through the built-in dark presets, then explains how to build a dark palette that stays readable at hour six.",        { type: 'h2', text: 'Which built-in presets are dark' },        { type: 'ul', items: [          'preset-purple-night: deep purple base with a faint glow, mysterious but easy on the eyes at night',          'gothic-void-expedition: deep purple-black with teal highlights, space-exploration energy',          'cyber-neon: black base with magenta and cyan double-neon, for high-saturation fans',          'tokyo-night series: deep blue base with pink and purple highlights, the one many devs find most comfortable',          'monokai-stone: a dark variant of classic Monokai, low neon, the restrained dark option',        ] },        { type: 'cta', text: 'See Purple Night in action →', href: '/en/gallery/preset-purple-night' },        { type: 'h2', text: 'How to build a dark palette that does not sting' },        { type: 'ul', items: [          'Dark but not pure black: deep blue or purple at 10-15% lightness beats #000',          'Text in low-saturation gray, not pure white; pure white is harsh against dark',          'One neon accent only: selection, cursor, buttons share one highlight, do not scatter it',        ] },        { type: 'h2', text: 'Readability traps in dark mode' },        { type: 'ul', items: [          'Comment color: at least 4.5:1 contrast, not just a hair brighter than the background',          'Selection: semi-transparent highlight, not a solid bar over the text',          'Cursor: pick a neon different from the syntax highlight, keep them apart',        ] },        { type: 'h2', text: 'How to recolor any theme dark' },        "Do not want to switch themes? Three variable groups in custom mode do it: background to deep blue or purple, foreground to low-saturation gray, accent to a single neon. The change is smaller than it sounds and the effect is immediate. After editing, run a contrast check: comments 4.5:1, body 7:1. That is the WCAG floor.",        { type: 'cta', text: 'Follow the official customization guide →', href: '/guides/customize' },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Is a dark theme easier on the eyes than light?', a: 'It depends on the build. Pure black actually stings in a dark room; a deep blue or purple at 10-15% lightness is more comfortable. The goal is less contrast shock, not maximum darkness.' },          { q: 'Which dark themes are built into Codex Skin Studio?', a: 'The dark-family presets are preset-purple-night, gothic-void-expedition, cyber-neon, the tokyo-night series, and monokai-stone. The community gallery has more, all browsable in the theme store.' },          { q: 'What is the most common dark-mode mistake?', a: 'Comments and secondary text vanishing. After installing any dark theme, check comment contrast, selection transparency, and cursor color. Fix those three and a dark theme goes from pretty-but-unusable to pretty-and-productive.' },        ] },        { type: 'h2', text: 'Back to the theme store' },        "For the full gallery and live previews, head back to the Codex Skin Studio theme store homepage and give your Codex a calm dark skin in a few minutes.",        { type: 'cta', text: 'Codex Skin Studio theme store homepage →', href: '/' },      ],    },  },  {    slug: 'codex-clean-theme-tour',    date: '2026-08-19',    title: {      zh: 'Codex 清新主题速览：干净工作台怎么搭',      en: 'Codex Clean Themes Quick Tour: Build a Fresh, Airy Workspace',    },    description: {      zh: 'Codex 清新主题（codex clean theme）盘点：哪些内置 preset 适合清爽视觉、清新配色怎么搭不廉价、亮色模式下的可读性与留白，以及如何把任意主题调成清新风。',      en: 'A codex clean theme quick tour: which built-in presets suit a fresh look, how to build a clean palette that does not look cheap, readability and whitespace in light mode, and how to recolor any theme clean.',    },    content: {      zh: [        '清新主题常被误会成「寡淡」，但一套搭得好的亮色主题，是盯八个小时最舒服的那一种。关键不在白，在克制。今天把内置的清新系 preset 翻一遍，再讲清楚清新配色怎么搭才显干净、不显廉价。',        { type: 'h2', text: '哪些内置 preset 属于清新风' },        { type: 'ul', items: [          'preset-clear-custom（清透定制）：近白底加柔和高亮，干净得像刚擦过的玻璃，是清新的基准款',          '米白/亚麻底系：偏暖的浅色，适合长时间文档阅读，眼睛不累',          '淡蓝白底系：冷调清新，清晨打开 Codex 很提神',          '纸感纯白系：细灰描边，适合专注写作和阅读',          '薄荷/浅绿点缀：白底加一点冷调高亮，喜欢干净里带点活力可以选',        ] },        { type: 'cta', text: '看看清透定制效果 →', href: '/zh/gallery/preset-clear-custom' },        { type: 'h2', text: '清新配色怎么搭才不廉价' },        { type: 'ul', items: [          '背景近白但带一点灰：纯白 #fff 容易显脏，加 2-3% 灰更稳',          '高亮用低饱和柔色：雾蓝、薄荷、浅粉，别用荧光',          '文字深灰而非纯黑：像 #1f2330 这类，长文不刺眼',          '留白即是设计：区块之间多留 16-24px，干净感来自呼吸',        ] },        { type: 'h2', text: '亮色模式下的可读性与留白' },        { type: 'ul', items: [          '注释色：至少 4.5:1，浅底上别用太浅的灰',          '选中区：淡色半透明高亮，别用实色挡字',          '边界与分隔：用细灰线而非色块，清新感靠线不靠面',        ] },        { type: 'h2', text: '怎么把任意主题调成清新风' },        '不想换主题？自定义模式改三组变量就够了：背景改成近白带灰，前景换成深灰，强调色挑一个低饱和柔色（雾蓝或薄荷）。改动量小，效果立竿见影。调完做一次对比度检查：注释 4.5:1、正文 7:1，这是 WCAG 的底线，也是清新不「飘」的保证。',        { type: 'cta', text: '跟着官方教程一步步调 →', href: '/guides/customize' },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: '清新主题会不会显得太素？', a: '素和干净是两回事。清新风靠留白和柔色撑质感，配色克制反而显贵。想要一点个性，把强调色换成你喜欢的低饱和色就行。' },          { q: 'Codex 内置哪些清新主题？', a: '清新一脉以 preset-clear-custom（清透定制）为代表，图库里还有米白、淡蓝白、纸感、薄荷等浅色 preset，全部能在主题库翻到。' },          { q: '亮色主题最容易踩的坑是什么？', a: '显脏和刺眼。装完先检查背景是否带灰、文字是否深灰而非纯黑、注释对比度够不够。这三处调好，清新主题就从「惨白」变成「干净」。' },        ] },        { type: 'h2', text: '回到主题库' },        '想要完整图库和效果预览，回到 Codex Skin Studio 主题库首页，几分钟就能让你的 Codex 换个清新的皮肤。',        { type: 'cta', text: 'Codex Skin Studio 主题库首页 →', href: '/' },      ],      en: [        'Clean themes get a bad rap as boring, but a well-built light theme is the most comfortable thing to stare at for eight hours. The trick is not white, it is restraint. This quick tour walks through the built-in fresh presets, then shows how to build a clean palette that reads as calm, not cheap.',        { type: 'h2', text: 'Which built-in presets are clean' },        { type: 'ul', items: [          'preset-clear-custom: near-white base with a soft highlight, clean like glass just wiped, the baseline clean preset',          'warm linen base: a slightly warm off-white, easy on the eyes for long reading',          'pale blue-white base: a cool fresh tone, a nice jolt on a slow morning',          'paper pure-white: thin gray borders, good for focused writing and reading',          'mint soft accent: white base with a cool mint highlight, for clean with a little life',        ] },        { type: 'cta', text: 'See Clear Custom in action →', href: '/en/gallery/preset-clear-custom' },        { type: 'h2', text: 'How to build a clean palette that does not look cheap' },        { type: 'ul', items: [          'Background near-white with a touch of gray: pure #fff reads dirty fast, 2-3% gray is steadier',          'Highlight in low-saturation soft color: fog blue, mint, pale pink, never neon',          'Text in dark gray, not pure black: something like #1f2330 stays readable for long sessions',          'Whitespace is the design: 16-24px between blocks, the clean feel comes from breathing room',        ] },        { type: 'h2', text: 'Readability and whitespace in light mode' },        { type: 'ul', items: [          'Comment color: at least 4.5:1, do not go too light on a light base',          'Selection: a light translucent highlight, not a solid block over the text',          'Borders and dividers: thin gray lines, not color fills, the fresh look leans on lines not planes',        ] },        { type: 'h2', text: 'How to recolor any theme clean' },        'Do not want to switch themes? Three variable groups in custom mode do it: background to near-white with gray, foreground to dark gray, accent to one low-saturation soft color (fog blue or mint). The change is small, the effect is immediate. After editing, run a contrast check: comments 4.5:1, body 7:1. That is the WCAG floor and the guarantee your clean theme will not feel floaty.',        { type: 'cta', text: 'Follow the official customization guide →', href: '/guides/customize' },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Will a clean theme look too plain?', a: 'Plain and clean are different things. A fresh theme earns its quality from whitespace and soft color; restraint reads as expensive. Want a bit of personality? Swap the accent to a low-saturation color you like.' },          { q: 'Which clean themes are built into Codex Skin Studio?', a: 'The clean family is led by preset-clear-custom, with off-white, pale blue-white, paper, and mint presets in the gallery. All of them are browsable in the theme store.' },          { q: 'What is the most common light-theme mistake?', a: 'Looking dirty or harsh. After installing, check that the background carries a little gray, the text is dark gray not pure black, and the comment contrast is enough. Fix those three and a clean theme moves from washed-out to genuinely clean.' },        ] },        { type: 'h2', text: 'Back to the theme store' },        'For the full gallery and live previews, head back to the Codex Skin Studio theme store homepage and give your Codex a fresh skin in a few minutes.',        { type: 'cta', text: 'Codex Skin Studio theme store homepage →', href: '/' },      ],    },  },  {    slug: 'how-often-should-you-switch-codex-themes',    date: '2026-08-20',    title: {      zh: 'Codex 主题切换频率：多久换一次主题合适',      en: 'How Often Should You Switch Codex Themes?',    },    description: {      zh: 'Codex 主题应该多久换一次？本文从视觉疲劳、专注度、审美疲劳角度分析切换频率，给出实用建议。',      en: 'How often should you switch your Codex theme? This post examines visual fatigue, focus, and aesthetic burnout to give you a practical switching cadence.',    },    content: {      zh: [        '很多人问：我是不是该换主题了？换得太勤会不会分散注意力？不换又会看腻。其实这个问题没有标准答案，但有一些信号可以帮你判断什么时候该换、什么时候该坚持。',        { type: 'h2', text: '什么时候该考虑换主题' },        {          type: 'ul',          items: [            '你开始注意不到主题了——它已经完全融入背景，说明它已经完成任务，换不换都行',            '你感到视觉疲劳——眼睛酸、注意力涣散，可能是当前主题对比度不够或太亮',            '你换了工作场景——从白天 coding 转到晚上 review，可能需要更暗的调色',            '你追求新鲜感——偶尔换主题可以重置注意力，但不要让它成为习惯',          ],        },        { type: 'h2', text: '推荐的切换频率' },        '大多数开发者不需要频繁换主题。一个适合你的主题可以稳定使用数月甚至数年。如果你现在用的主题让你舒适、专注、不累眼，就不需要换。',        '如果你觉得该换了，试试这个节奏：每季度评估一次视觉舒适度，每半年考虑换一个完全不同的调色方向（比如从深色转到浅色），每年做一次大换血（换一个全新风格）。',        { type: 'h2', text: '频繁换主题的副作用' },        {          type: 'ul',          items: [            '每次换主题都要重新适应配色，消耗认知资源',            '你可能永远找不到"完美主题"，因为完美是动态的',            '换主题的快感会取代实际工作的满足感',          ],        },        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: '我应该多久换一次 Codex 主题？', a: '没有固定频率。以视觉舒适度为准：不累眼、不影响专注、不让你分心，就是最好的主题。' },            { q: '换主题会让我更专注吗？', a: '偶尔换可以重置注意力，但频繁换会消耗认知资源。更好的做法是找到一个舒适的主题并保持它。' },            { q: '深色和浅色哪个更适合长时间 coding？', a: '这取决于环境光和个人偏好。关键是对比度足够、不刺眼。深色在暗光下更舒适，浅色在明亮环境下更清晰。' },          ],        },        { type: 'h2', text: '回到主题库' },        '想查看更多主题？前往 Codex Skin Studio 主题库，找到适合你当前状态的那一款。',        { type: 'cta', text: '浏览 Codex Skin Studio 主题库 →', href: '/' },      ],      en: [        'How often should you switch your Codex theme? This is one of the most common questions, and the honest answer is: it depends on your signals, not a calendar. Some developers stay on one theme for years. Others switch monthly. The key is learning to read your own visual fatigue.',        { type: 'h2', text: 'When to consider switching' },        {          type: 'ul',          items: [            'You stop noticing the theme — it has faded into the background, which means it is doing its job. Switching now is about novelty, not need.',            'You feel visual fatigue — tired eyes, wandering focus, the colors feel harsh. This is a sign your theme needs adjustment or replacement.',            'Your work context changed — moving from daytime coding to evening review may call for a darker palette.',            'You want novelty — occasional switches can reset attention, but make it a habit and you will never settle.',          ],        },        { type: 'h2', text: 'A practical switching cadence' },        'Most developers do not need to switch often. A good theme can last months or years. If your current theme is comfortable, focused, and easy on the eyes, keep it.',        'If you feel the urge to switch, try this rhythm: evaluate visual comfort quarterly, consider a full palette direction change every six months (dark to light or vice versa), and do a major refresh once a year.',        { type: 'h2', text: 'The cost of frequent switching' },        {          type: 'ul',          items: [            'Each switch requires cognitive adaptation to a new color scheme',            'You may never find the "perfect" theme because perfection is dynamic',            'The thrill of switching can replace the satisfaction of actual work',          ],        },        { type: 'h2', text: 'FAQ' },        {          type: 'faq',          items: [            { q: 'How often should I switch my Codex theme?', a: 'There is no fixed frequency. Follow your visual comfort: if it is easy on the eyes, does not distract you, and lets you focus, it is the right theme.' },            { q: 'Will switching themes make me more focused?', a: 'Occasionally, yes — it can reset attention. But frequent switching consumes cognitive resources. Better to find one comfortable theme and stick with it.' },            { q: 'Which is better for long coding sessions: dark or light?', a: 'It depends on ambient light and personal preference. The key is sufficient contrast and no glare. Dark is more comfortable in low light; light is clearer in bright environments.' },          ],        },        { type: 'h2', text: 'Back to the theme store' },        'Want to explore more themes? Head to the Codex Skin Studio theme store and find the one that matches your current state.',        { type: 'cta', text: 'Browse the Codex Skin Studio theme store →', href: '/' },      ],    },  },  {    slug: 'how-to-customize-codex-theme-wallpapers',    date: '2026-08-21',    title: {      zh: '如何自定义 Codex 主题背景图',      en: 'How to Customize Codex Theme Wallpapers',    },    description: {      zh: 'Codex 主题的视觉效果不仅来自颜色方案，更来自背景图片的选择。本文教你如何使用 Codex Skin Studio 自定义背景图，让编码环境更有个性。',      en: 'Codex theme visuals come not just from color schemes, but from background image selection. Learn how to customize wallpapers with Codex Skin Studio for a more personalized coding environment.',    },    content: {      zh: [        { type: 'h2', text: '为什么自定义背景很重要' },        { type: 'p', text: 'Codex 主题的视觉效果不仅来自颜色方案，更来自背景图片的选择。一张合适的壁纸能让你的编码环境更有个性，也能减少视觉疲劳。' },        { type: 'h2', text: '支持格式与要求' },        { type: 'p', text: 'Codex Skin Studio 支持以下背景格式：' },        { type: 'ul', items: ['**PNG**：无损质量，适合静态背景', '**WebP**：现代格式，文件更小且质量更高', '**JPG**：兼容性好，但可能有压缩伪影'] },        { type: 'p', text: '建议分辨率：1920x1080 或更高，以确保在不同屏幕上都能清晰显示。' },        { type: 'h2', text: '如何添加自定义背景' },        { type: 'ul', items: ['打开 Codex Skin Studio', '选择你喜欢的主题预设', '点击「自定义背景」按钮', '从本地选择你的图片文件', '调整透明度（可选）', '点击「应用」保存设置'] },        { type: 'h2', text: '背景透明度技巧' },        { type: 'ul', items: ['**低透明度（20-40%）**：背景若隐若现，代码内容更突出', '**中等透明度（50-60%）**：平衡视觉效果与可读性', '**高透明度（70-80%）**：背景几乎不可见，适合作为点缀'] },        { type: 'h2', text: '常见问题' },        { type: 'faq', items: [          { q: '背景图片太大影响性能吗？', a: 'Codex Skin Studio 会自动压缩和调整背景图片，正常大小的图片（<10MB）不会影响性能。' },          { q: '可以保存多套背景方案吗？', a: '是的，Pro 用户可以保存多套自定义方案，快速切换。' },        ] },      ],      en: [        { type: 'h2', text: 'Why Custom Wallpapers Matter' },        { type: 'p', text: 'Codex theme visuals come not just from color schemes, but from background image selection. The right wallpaper makes your coding environment more personal and reduces eye strain.' },        { type: 'h2', text: 'Supported Formats & Requirements' },        { type: 'p', text: 'Codex Skin Studio supports these background formats:' },        { type: 'ul', items: ['**PNG**: Lossless quality, ideal for static backgrounds', '**WebP**: Modern format, smaller files with higher quality', '**JPG**: Good compatibility, but may have compression artifacts'] },        { type: 'p', text: 'Recommended resolution: 1920x1080 or higher for clear display on various screens.' },        { type: 'h2', text: 'How to Add Custom Backgrounds' },        { type: 'ul', items: ['Open Codex Skin Studio', 'Select your preferred theme preset', 'Click "Custom Background"', 'Choose your image file from local storage', 'Adjust opacity (optional)', 'Click "Apply" to save settings'] },        { type: 'h2', text: 'Background Opacity Tips' },        { type: 'ul', items: ['**Low opacity (20-40%)**: Background subtly visible, code content stands out', '**Medium opacity (50-60%)**: Balanced visual effect and readability', '**High opacity (70-80%)**: Background nearly invisible, suitable as accent'] },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Do large background images affect performance?', a: 'Codex Skin Studio automatically compresses and adjusts background images. Normal-sized images (<10MB) won\'t affect performance.' },          { q: 'Can I save multiple background schemes?', a: 'Yes, Pro users can save multiple custom schemes for quick switching.' },        ] },      ],    },  },  {    slug: 'best-codex-themes-2026',    date: '2026-08-21',    title: {      zh: '2026 年最佳 Codex 主题推荐：暗色、亮色与极简精选',      en: 'Best Codex Themes 2026: Top Dark, Light & Minimalist Picks',    },    description: {      zh: '整理了 2026 年最值得安装的 Codex 主题：暗色系、亮色系与极简风一网打尽，附安装方法与适用场景。',      en: 'The best Codex themes worth installing in 2026: dark, light and minimalist picks with install tips and best-use scenarios.',    },    content: {      zh: [        'Codex 桌面端默认主题功能克制，但并不意味着你必须一直盯着那套灰白配色。借助 Codex Skin Studio，你可以一键切换风格迥异的主题。这里整理了 2026 年最值得收藏的一批。',        { type: 'h2', text: '暗色系主题' },        { type: 'p', text: '暗色主题是开发者的主流选择，长时间编码时对眼睛更友好。' },        { type: 'ul', items: ['**黑金舞台（Stage Black-Gold）**：舞台感黑金撞色，适合追求质感的夜间工作流', '**暗夜紫（Purple Night）**：深紫渐变，静谧且高级', '**灵感宇宙（Inspiration Universe）**：深邃星空质感，科幻氛围拉满'] },        { type: 'h2', text: '亮色系主题' },        { type: 'ul', items: ['**浪漫玫瑰（Romantic Rose）**：粉嫩配色，清爽又不刺眼', '**粉彩 Codex（Pink Codex）**：柔和粉色系，白天办公首选'] },        { type: 'h2', text: '极简与中性主题' },        { type: 'ul', items: ['**清透极简（Clear Minimalist）**：低干扰高可读性，专注写代码', '**干净主题（Clean）**：几乎零装饰，还原最纯粹的编码界面'] },        { type: 'h2', text: '如何选择适合自己的主题' },        { type: 'p', text: '建议按「使用场景」而非「颜值」来选：夜间/沉浸编码选暗色，白天/会议室演示选亮色，写文档/读代码选极简。选定后还能在 Codex Skin Studio 里微调背景与透明度。' },        { type: 'h2', text: '快速上手' },        { type: 'cta', text: '浏览全部主题并一键安装 →', href: '/en/gallery' },        { type: 'h2', text: '常见问题' },        { type: 'faq', items: [          { q: '这些主题会覆盖官方更新吗？', a: '不会。Codex Skin Studio 通过 CDP 注入主题，不修改任何官方文件，Codex 升级后主题依然有效。' },          { q: '可以同时装多套主题吗？', a: '可以，主题保存在本地预设中，随时一键切换。' },        ] },      ],      en: [        'The Codex desktop app ships with a restrained default theme, but that doesn\'t mean you\'re stuck with the same gray palette. With Codex Skin Studio you can switch between dramatically different themes in one click. Here are the most worth-keeping picks for 2026.',        { type: 'h2', text: 'Dark Themes' },        { type: 'p', text: 'Dark themes are the mainstream choice for developers — easier on the eyes during long coding sessions.' },        { type: 'ul', items: ['**Stage Black-Gold**: stage-like black-and-gold contrast, great for a premium night workflow', '**Purple Night**: deep purple gradient, quiet and premium', '**Inspiration Universe**: deep starry-space texture with a sci-fi feel'] },        { type: 'h2', text: 'Light Themes' },        { type: 'ul', items: ['**Romantic Rose**: soft pink palette, fresh without being harsh', '**Pink Codex**: gentle pinks, a daytime favorite'] },        { type: 'h2', text: 'Minimalist & Neutral Themes' },        { type: 'ul', items: ['**Clear Minimalist**: low distraction, high readability', '**Clean**: nearly zero decoration, the purest coding surface'] },        { type: 'h2', text: 'How to Pick the Right Theme' },        { type: 'p', text: 'Choose by use case rather than looks: dark for night/immersive coding, light for daytime or on-stage demos, minimalist for docs and code review. Once selected, fine-tune backgrounds and opacity inside Codex Skin Studio.' },        { type: 'h2', text: 'Get Started' },        { type: 'cta', text: 'Browse all themes and install in one click →', href: '/en/gallery' },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Do these themes override official updates?', a: 'No. Codex Skin Studio injects themes via CDP without modifying any official files, so themes keep working after Codex updates.' },          { q: 'Can I install multiple themes at once?', a: 'Yes. Themes are saved as local presets and you can switch between them anytime.' },        ] },      ],    },  },  {    slug: 'codex-theme-backup-and-restore',    date: '2026-08-21',    title: {      zh: 'Codex 主题如何备份与恢复：防止重装后丢失',      en: 'How to Backup & Restore Codex Themes (Never Lose Them Again)',    },    description: {      zh: '换电脑或重装 Codex 后主题全没了？本文教你用 Codex Skin Studio 导出、备份并恢复主题预设，一次搞定永不再丢。',      en: 'Losing all your themes after reinstalling? Learn how to export, back up and restore Codex theme presets with Codex Skin Studio — once and for all.',    },    content: {      zh: [        '很多用户重装系统或更换电脑后发现，辛辛苦苦调好的主题全没了。其实只要养成备份习惯，恢复只需几十秒。',        { type: 'h2', text: '为什么主题会丢失' },        { type: 'ul', items: ['重装 Codex 或系统', '清理缓存时误删配置目录', '多台设备之间没有同步'] },        { type: 'h2', text: '如何备份主题' },        { type: 'p', text: '在 Codex Skin Studio 中打开「预设管理」，选择要备份的主题，点击「导出」。导出的文件包含完整的配色与背景配置，可以保存到网盘或 GitHub 私有仓库。' },        { type: 'h2', text: '如何恢复主题' },        { type: 'ul', items: ['在新设备安装 Codex Skin Studio', '打开「预设管理」→「导入」', '选择之前导出的备份文件', '主题立即恢复，无需重新调参'] },        { type: 'h2', text: '多设备同步建议' },        { type: 'p', text: '推荐把导出的主题包放进一个私有 GitHub 仓库或网盘文件夹，每次微调后重新导出覆盖，保持多设备一致。' },        { type: 'h2', text: '常见问题' },        { type: 'faq', items: [          { q: '备份文件是加密的吗？', a: '主题包只包含样式与图片配置，不包含代码或密钥，可以放心存放。' },          { q: '免费版支持导出吗？', a: '免费版支持导出内置主题，Pro 版支持导出全部自定义预设。' },        ] },      ],      en: [        'After reinstalling the OS or switching machines, many users find all their carefully-tuned themes gone. Build a backup habit and recovery takes just seconds.',        { type: 'h2', text: 'Why Themes Get Lost' },        { type: 'ul', items: ['Reinstalling Codex or the operating system', 'Accidentally deleting the config directory while clearing cache', 'No sync between multiple devices'] },        { type: 'h2', text: 'How to Backup Themes' },        { type: 'p', text: 'Open "Preset Manager" in Codex Skin Studio, select the theme to back up, and click "Export". The exported file contains full color and background configuration — store it in the cloud or a private GitHub repo.' },        { type: 'h2', text: 'How to Restore Themes' },        { type: 'ul', items: ['Install Codex Skin Studio on the new device', 'Open "Preset Manager" → "Import"', 'Choose the previously exported backup file', 'The theme is restored instantly — no re-tuning needed'] },        { type: 'h2', text: 'Multi-Device Sync Tips' },        { type: 'p', text: 'Keep exported theme packs in a private GitHub repo or a cloud folder. Re-export and overwrite after each tweak to keep all devices in sync.' },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Are backup files encrypted?', a: 'Theme packs contain only style and image configuration — no code or secrets — so they are safe to store anywhere.' },          { q: 'Does the free plan support export?', a: 'The free plan supports exporting built-in themes; Pro supports exporting all custom presets.' },        ] },      ],    },  },  {    slug: 'community-codex-skins-collection',    date: '2026-08-21',    title: {      zh: '社区 Codex 皮肤合集：值得收藏的开源主题仓库',      en: 'Community Codex Skins Collection: Open-Source Theme Repos Worth Bookmarking',    },    description: {      zh: '除了官方内置主题，社区里还藏着大量高质量 Codex 皮肤。本文盘点最值得收藏的开源主题仓库，并教你如何直接安装使用。',      en: 'Beyond built-in presets, the community hosts tons of high-quality Codex skins. Here are the open-source theme repos worth bookmarking — and how to install them.',    },    content: {      zh: [        'Codex 皮肤生态最迷人的地方在于社区共创。无论你是想要某个人物/作品主题，还是想找一款冷门配色，都能在社区仓库里翻到惊喜。',        { type: 'h2', text: '值得关注的开源仓库' },        { type: 'ul', items: ['**awesome-codex-skins**：社区精选皮肤索引，按风格分类', '**codex-themes**：轻量主题集合，主打极简与性能', '**awesomecodexskin.com**：可视化浏览社区皮肤画廊'] },        { type: 'h2', text: '如何在 Codex Skin Studio 中安装社区皮肤' },        { type: 'ul', items: ['下载皮肤包（.json 或 .zip）', '打开 Codex Skin Studio 的「导入」', '选择下载的皮肤文件', '主题即刻出现在预设列表'] },        { type: 'h2', text: '值得一试的社区代表' },        { type: 'ul', items: ['**蓝梦 / 彩云戏法**：清新渐变，适合日常', '**冰雁顾清寒 / 藏雨冰镜**：冷色系国风', '**沉渊逆潮 / 溟祸**：暗黑深邃系'] },        { type: 'h2', text: '安装官方推荐皮肤' },        { type: 'cta', text: '去图库安装精选皮肤 →', href: '/en/gallery' },        { type: 'h2', text: '常见问题' },        { type: 'faq', items: [          { q: '社区皮肤安全吗？', a: '皮肤包只包含样式与图片配置，不含可执行代码。但从非官方渠道下载时仍建议先扫描文件。' },          { q: '皮肤包格式有要求吗？', a: 'Codex Skin Studio 支持 JSON 与 ZIP 两种格式，社区仓库通常都已提供。' },        ] },      ],      en: [        'The most charming part of the Codex skin ecosystem is community collaboration. Whether you want a character/work-themed skin or a rare color combo, the community repos have surprises waiting.',        { type: 'h2', text: 'Open-Source Repos Worth Watching' },        { type: 'ul', items: ['**awesome-codex-skins**: curated community skin index, organized by style', '**codex-themes**: lightweight theme collection focused on minimalism and performance', '**awesomecodexskin.com**: a visual gallery for browsing community skins'] },        { type: 'h2', text: 'How to Install Community Skins in Codex Skin Studio' },        { type: 'ul', items: ['Download the skin pack (.json or .zip)', 'Open "Import" in Codex Skin Studio', 'Select the downloaded skin file', 'The theme appears in your preset list instantly'] },        { type: 'h2', text: 'Community Favorites Worth Trying' },        { type: 'ul', items: ['**Lan Meng / Cloud Trick**: fresh gradients, great for daily use', '**Gu Qinghan / Frostbound**: cool-toned Chinese aesthetics', '**Abyssal Tide / Mingshuo**: deep dark series'] },        { type: 'h2', text: 'Install Recommended Skins' },        { type: 'cta', text: 'Browse curated skins in the gallery →', href: '/en/gallery' },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Are community skins safe?', a: 'Skin packs contain only style and image configuration — no executable code. Still, scan files downloaded from unofficial channels.' },          { q: 'Is there a required pack format?', a: 'Codex Skin Studio supports both JSON and ZIP formats, which most community repos provide.' },        ] },      ],    },  },  {    slug: 'codex-theme-macos-windows-platform-guide',    date: '2026-08-21',    title: {      zh: 'Codex 主题在 macOS 与 Windows 上的安装差异',      en: 'Codex Themes on macOS vs Windows: What\'s Different?',    },    description: {      zh: '同一套 Codex 主题在 macOS 与 Windows 上的表现和安装方式略有差异。本文对比两端差异，帮你快速适配。',      en: 'The same Codex theme behaves and installs slightly differently on macOS vs Windows. Here\'s the comparison to help you adapt fast.',    },    content: {      zh: [        'Codex Skin Studio 同时支持 macOS 与 Windows，但两个平台在安装路径、权限和渲染细节上有一些细微差别。搞懂这些差别，可以少踩不少坑。',        { type: 'h2', text: '安装方式对比' },        { type: 'ul', items: ['**macOS**：从 dmg 安装，首次需在「系统设置 → 隐私与安全性」中允许运行', '**Windows**：从安装包安装，首次启动可能触发 SmartScreen 提醒'] },        { type: 'h2', text: 'CDP 注入的表现差异' },        { type: 'p', text: '两个平台都通过本机 CDP 注入主题，不修改官方文件。差别主要在于 macOS 的沙盒权限更严格，首次连接 Codex 时需确认授权弹窗。' },        { type: 'h2', text: '主题渲染细节' },        { type: 'ul', items: ['**字体渲染**：macOS 的 ClearType 与 Windows 的亚像素渲染略有不同，深色主题在两者上观感稍有差异', '**窗口边框**：Windows 下窗口圆角与阴影跟随系统设置，可能影响主题观感'] },        { type: 'h2', text: '平台专属安装教程' },        { type: 'cta', text: '查看 macOS 安装教程 →', href: '/en/guides/install-macos' },        { type: 'h2', text: '常见问题' },        { type: 'faq', items: [          { q: '主题在两端能无缝同步吗？', a: '可以。导出主题包后导入到另一平台即可，配置完全一致。' },          { q: '为什么 Windows 上主题颜色略深？', a: 'Windows 默认的窗口透明与对比度设置会影响观感，可在系统「个性化 → 颜色」中微调。' },        ] },      ],      en: [        'Codex Skin Studio supports both macOS and Windows, but the two platforms differ slightly in install paths, permissions and rendering details. Understanding these differences saves you a lot of trouble.',        { type: 'h2', text: 'Installation Comparison' },        { type: 'ul', items: ['**macOS**: install from the dmg; first launch requires allowing it in System Settings → Privacy & Security', '**Windows**: install from the setup package; SmartScreen may warn on first run'] },        { type: 'h2', text: 'CDP Injection Differences' },        { type: 'p', text: 'Both platforms inject themes via local CDP without modifying official files. The main difference: macOS sandbox permissions are stricter, so you\'ll need to confirm the authorization prompt on first connect to Codex.' },        { type: 'h2', text: 'Rendering Details' },        { type: 'ul', items: ['**Font rendering**: macOS ClearType and Windows subpixel rendering differ slightly, so dark themes look subtly different on each', '**Window chrome**: on Windows, rounded corners and shadows follow system settings and may affect the theme look'] },        { type: 'h2', text: 'Platform-Specific Guides' },        { type: 'cta', text: 'View the macOS install guide →', href: '/en/guides/install-macos' },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Can themes sync seamlessly between platforms?', a: 'Yes. Export the theme pack and import it on the other platform — configuration is identical.' },          { q: 'Why do colors look slightly darker on Windows?', a: 'Windows default window transparency and contrast settings affect the look. Fine-tune under System → Personalization → Colors.' },        ] },      ],    },  },  {    slug: 'codex-color-scheme-basics',    date: '2026-08-22',    title: {      zh: '配色方案入门：为 Codex 主题选择配色',      en: 'Color Scheme Basics: Choose Colors for Codex Themes',    },    description: {      zh: '好的配色方案能改变你的编码体验。本文教你如何选择背景、前景、强调色和语法高亮，打造舒适的 Codex 主题。',      en: 'A good color scheme can transform your coding experience. Learn how to choose background, foreground, accent, and syntax colors for comfortable Codex themes.',    },    content: {      zh: [        '好的配色方案能改变你的编码体验。太亮，眼睛疲劳。太暗，错过细节。正确的调色板取得平衡——减少疲劳同时保持内容可读。',        { type: 'h2', text: '配色方案的结构' },        { type: 'p', text: '每个 Codex 主题使用核心调色板：' },        { type: 'ul', items: ['**背景**：代码后面的画布', '**前景**：文本和 UI 元素', '**强调色**：高亮、选择和交互状态', '**语法颜色**：关键字、字符串、注释、数字'] },        { type: 'p', text: '改变一个，你就能感受到变化。改变全部五个，你就得到一个完全不同的编码环境。' },        { type: 'h2', text: '选择背景' },        { type: 'p', text: '背景定下基调。常见选择：' },        { type: 'ul', items: ['**近黑 (#0d1117)**：高对比度，开发者流行。与亮强调色配合良好。低光下可能刺眼。', '**深灰 (#1e1e1e)**：VS Code 标准。平衡、中性，长时间使用对眼睛友好。', '**暖棕 (#2c1e1e)**：不常见，但有些人觉得比纯黑更护眼。适合夜间编码。', '**浅色选项 (#ffffff, #f5f5f5)**：适合白天或明亮房间。亮屏上可能产生眩光。'] },        { type: 'h2', text: '配合良好的强调色' },        { type: 'p', text: '强调色出现在选择、活动标签和关键 UI 元素中。它们应该：' },        { type: 'ul', items: ['可见但不压倒一切', '与语法高亮不同', '在整个界面中保持一致'] },        { type: 'p', text: '流行选择：蓝色 (#58a6ff)、青色 (#39c5cf) 或绿色 (#3fb950)。它们在深色和浅色背景上都适用。' },        { type: 'h2', text: '语法颜色和谐' },        { type: 'p', text: '语法颜色需要可区分但不冲突。一个好测试：眯眼看向屏幕。如果颜色融合在一起，增加对比度。如果它们相互冲突，降低饱和度。' },        { type: 'h2', text: '提交前试用' },        { type: 'p', text: 'Codex Skin Studio 允许你实时预览更改。测试你的调色板：' },        { type: 'ul', items: ['打开包含混合内容（代码、注释、字符串）的文件', '调整颜色并观察预览', '在不同亮度级别检查可读性', '感觉对了就保存'] },        { type: 'h2', text: '常见问题' },        { type: 'faq', items: [          { q: '我能保存多个配色方案吗？', a: '可以。Codex Skin Studio 支持多个预设，你可以切换使用。' },          { q: '配色方案会影响性能吗？', a: '不会。主题通过 CDP 注入，不影响 Codex 运行时。' },          { q: '在哪里找预制的配色方案？', a: '在 codex-skin-studio.shop/en/gallery 浏览主题画廊。' },        ] },      ],      en: [        'A good color scheme can transform your coding experience. Too bright, and your eyes strain. Too dark, and you miss details. The right palette strikes a balance — reducing fatigue while keeping content readable.',        { type: 'h2', text: 'The anatomy of a color scheme' },        { type: 'p', text: 'Every Codex theme uses a core palette:' },        { type: 'ul', items: ['**Background**: The canvas behind your code', '**Foreground**: Text and UI elements', '**Accent**: Highlights, selections, and interactive states', '**Syntax colors**: Keywords, strings, comments, numbers'] },        { type: 'p', text: 'Change one, and you feel the shift. Change all five, and you get a completely different coding environment.' },        { type: 'h2', text: 'Choosing your background' },        { type: 'p', text: 'The background sets the tone. Common choices:' },        { type: 'ul', items: ['**Near-black (#0d1117)** — High contrast, popular among developers. Works well with bright accent colors. Can feel harsh in low light.', '**Dark gray (#1e1e1e)** — The VS Code standard. Balanced, neutral, easy on the eyes for long sessions.', '**Warm brown (#2c1e1e)** — Less common, but some find it easier on eyes than pure black. Good for evening coding.', '**Light options (#ffffff, #f5f5f5)** — Better for daytime or well-lit rooms. Can cause glare on bright screens.'] },        { type: 'h2', text: 'Accent colors that work' },        { type: 'p', text: 'Accent colors appear in selections, active tabs, and key UI elements. They should be:' },        { type: 'ul', items: ['Visible but not overwhelming', 'Distinct from syntax highlighting', 'Consistent across your interface'] },        { type: 'p', text: 'Popular choices: blue (#58a6ff), cyan (#39c5cf), or green (#3fb950). These work on dark and light backgrounds.' },        { type: 'h2', text: 'Syntax color harmony' },        { type: 'p', text: 'Syntax colors need to be distinguishable but not clashing. A good test: squint at your screen. If colors blend together, increase contrast. If they fight each other, reduce saturation.' },        { type: 'h2', text: 'Try before you commit' },        { type: 'p', text: 'Codex Skin Studio lets you preview changes in real-time. Test your palette:' },        { type: 'ul', items: ['Open a file with mixed content (code, comments, strings)', 'Adjust colors and watch the preview', 'Check readability at different brightness levels', 'Save when it feels right'] },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Can I save multiple color schemes?', a: 'Yes. Codex Skin Studio supports multiple presets you can switch between.' },          { q: 'Do color schemes affect performance?', a: 'No. Themes are injected via CDP and don\'t impact Codex\'s runtime.' },          { q: 'Where do I find pre-made schemes?', a: 'Browse the theme gallery at codex-skin-studio.shop/en/gallery.' },        ] },      ],    },  },  {    slug: 'advanced-css-variables-codex-themes',    date: '2026-08-23',    title: {      zh: '配色方案进阶：CSS 变量调色教程',      en: 'Advanced Colors: Tweak CSS Variables for Codex Themes',    },    description: {      zh: '掌握 Codex 主题的 CSS 变量，精准调整每种语法颜色的亮度和饱和度，打造个性化的编码环境。',      en: 'Master Codex theme CSS variables to precisely tune brightness and saturation of every syntax color — building a truly personalized coding environment.',    },    content: {      zh: [        '你已经会切换主题了，但总觉得某个蓝色太亮、某个绿色不够醒目？Codex 主题的真正的力量在于 CSS 变量——每个颜色都是可调节的旋钮，而不是固定的油漆。',        { type: 'h2', text: 'Codex 主题的 CSS 变量结构' },        { type: 'p', text: '每个 Codex 主题文件（.tmTheme 或 .codedrobe）本质上是一组 CSS 变量定义。核心变量包括：--background、--foreground、--caret、--selection、--gutter-background、--gutter-foreground、--line-number、--indent-guide、--bracket-matcher、--syntax-* 系列。' },        { type: 'p', text: 'Syntax 变量覆盖所有编程语言元素：--syntax-keyword、--syntax-string、--syntax-comment、--syntax-number、--syntax-function、--syntax-variable、--syntax-class、--syntax-type、--syntax-operator、--syntax-tag、--syntax-attribute、--syntax-regex、--syntax-property。' },        { type: 'h2', text: '实战：调整语法高亮' },        { type: 'p', text: '假设你觉得关键词太刺眼。找到主题文件中的 --syntax-keyword 变量，将 color 值从 #ff7b72（亮红）改为 #a371f7（柔和紫）。保存后热重载即可看到效果。' },        { type: 'ul', items: ['使用 Codex Skin Studio 的实时预览功能，边改边看', '一次只调整一个变量，便于定位问题', '记录你的改动，方便日后回溯'] },        { type: 'h2', text: '调色原则' },        { type: 'p', text: '好的调色遵循三个原则：对比度（确保可读）、和谐度（颜色之间不冲突）、一致性（同类元素使用相同颜色）。' },        { type: 'h2', text: '常见问题' },        { type: 'faq', items: [          { q: 'CSS 变量改动会影响性能吗？', a: '不会。CSS 变量在渲染时计算一次，不影响 Codex 运行速度。' },          { q: '如何恢复默认颜色？', a: '在 Codex Skin Studio 中点击"Restore Default"即可重置所有变量。' },          { q: '可以保存多套配色方案吗？', a: '可以。每套方案保存为一个 .codedrobe 文件，随时切换。' },        ] },      ],      en: [        'You can switch themes now, but something still feels off — that blue is too bright, that green isn\'t popping enough. The real power of Codex themes lies in CSS variables: every color is an adjustable knob, not a fixed coat of paint.',        { type: 'h2', text: 'CSS Variable Structure in Codex Themes' },        { type: 'p', text: 'Every Codex theme file (.tmTheme or .codedrobe) is essentially a set of CSS variable definitions. Core variables include: --background, --foreground, --caret, --selection, --gutter-background, --gutter-foreground, --line-number, --indent-guide, --bracket-matcher, and the --syntax-* family.' },        { type: 'p', text: 'Syntax variables cover all language elements: --syntax-keyword, --syntax-string, --syntax-comment, --syntax-number, --syntax-function, --syntax-variable, --syntax-class, --syntax-type, --syntax-operator, --syntax-tag, --syntax-attribute, --syntax-regex, --syntax-property.' },        { type: 'h2', text: 'In Practice: Tuning Syntax Highlights' },        { type: 'p', text: 'Say you find keywords too harsh. Find the --syntax-keyword variable in your theme file and change the color from #ff7b72 (bright red) to #a371f7 (soft purple). Save and hot-reload to see the effect immediately.' },        { type: 'ul', items: ['Use Codex Skin Studio\'s live preview — tweak and see results in real time', 'Adjust one variable at a time to isolate issues', 'Document your changes for future reference'] },        { type: 'h2', text: 'Color Tuning Principles' },        { type: 'p', text: 'Good color tuning follows three principles: contrast (ensure readability), harmony (colors don\'t clash), and consistency (same element types use the same color).' },        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Do CSS variable changes affect performance?', a: 'No. CSS variables are computed once during rendering and don\'t impact Codex\'s runtime speed.' },          { q: 'How do I restore default colors?', a: 'Click "Restore Default" in Codex Skin Studio to reset all variables.' },          { q: 'Can I save multiple color schemes?', a: 'Yes. Save each scheme as a .codedrobe file and switch between them anytime.' },        ] },      ],    },  },  {
    slug: 'codex-skin-studio-no-file-edit',
    date: '2026-08-27',
    title: {
      zh: 'Codex Skin Studio 不会修改官方文件：原理详解',
      en: 'Why Codex Skin Studio Never Edits Official Files',
    },
    description: {
      zh: '深入了解 Codex Skin Studio 如何通过 CDP 注入实现换肤，而不修改任何官方文件。',
      en: 'Deep dive into how Codex Skin Studio themes Codex via CDP injection without touching official files.',
    },
    content: {
      zh: [
        'Codex Skin Studio 通过 Chrome DevTools Protocol (CDP) 实现换肤，全程不修改 Codex 官方安装目录下的任何文件。',
        { type: 'h2', text: '为什么这很重要？' },
        '传统换肤方法需要修改 app.asar 文件，每次 Codex 更新都会被覆盖，还可能触发签名校验。CDP 注入则完全不同。',
        {
          type: 'ul',
          items: [
            '不修改官方文件：升级后主题依然有效',
            '随时一键恢复：停止工具即回到官方界面',
            '更安全：主题包只含 CSS 与图片，不允许 JavaScript',
          ],
        },
        { type: 'h2', text: '工作原理' },
        'Codex 桌面端启动时会在本地开放调试端口。Codex Skin Studio 连接这个端口，通过 WebSocket 注入主题 CSS，实现视觉变化。',
        { type: 'h2', text: '主题包安全设计' },
        '主题包只包含 CSS 和图片资源，不允许 JavaScript；工具在注入前会走安全校验。',
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'CDP 注入会影响 Codex 性能吗？', a: '不会。注入的只有 CSS 和背景图片，不涉及逻辑代码。' },
            { q: 'Codex 升级后主题会失效吗？', a: '不会。Codex Skin Studio 不改动任何官方文件。' },
            { q: '如何完全恢复官方界面？', a: '停止 Codex Skin Studio，界面立即恢复。' },
          ],
        },
        { type: 'h2', text: '开始使用' },
        '下载 Codex Skin Studio，从主题库选择你喜欢的主题，一键应用。',
        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },
      ],
      en: [
        'Codex Skin Studio uses Chrome DevTools Protocol (CDP) to theme Codex at runtime without modifying any official installation files.',
        { type: 'h2', text: 'Why This Matters' },
        'Traditional theming requires editing app.asar files, which gets overwritten by every Codex update and can trigger signature checks. CDP injection is completely different.',
        {
          type: 'ul',
          items: [
            'No official files touched: themes survive Codex updates',
            'One-click restore: stop the tool and the UI reverts instantly',
            'Safer by design: theme packages contain only CSS and images, no JavaScript',
          ],
        },
        { type: 'h2', text: 'How It Works' },
        'Codex desktop opens a debug port on localhost when starting. Codex Skin Studio connects via WebSocket and injects theme CSS for visual changes.',
        { type: 'h2', text: 'Theme Package Security' },
        'Theme packages contain only CSS and image resources. No JavaScript allowed. Security checks run before injection.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Does CDP injection affect performance?', a: 'No. Only CSS and background images are injected, no logic code involved.' },
            { q: 'Will themes break after Codex updates?', a: 'No. Codex Skin Studio never modifies official files.' },
            { q: 'How do I restore the official UI?', a: 'Stop Codex Skin Studio and the UI reverts instantly.' },
          ],
        },
        { type: 'h2', text: 'Get Started' },
        'Download Codex Skin Studio, pick a theme from the gallery, and apply with one click.',
        { type: 'cta', text: 'Browse Themes →', href: '/gallery' },
      ],
    },
  },
  {    slug: 'team-shared-themes-codex-skin-studio-team-plan',    date: '2026-08-25',
    title: {      zh: '团队共享主题：Codex Skin Studio Team 方案指南',      en: 'Team Shared Themes: Codex Skin Studio Team Plan Guide',    },    description: {      zh: '几分钟内向 50+ 开发者部署统一主题，告别逐个配置的噩梦。',      en: 'Deploy uniform theming to 50+ developers in minutes.',    },    content: {      zh: [        'Setting up a consistent Codex theme across your development team doesn\'t have to be a manual nightmare. With Codex Skin Studio\'s Team Plan, you can deploy uniform theming to 50+ developers in minutes.',        { type: 'h2', text: '团队主题如何运作' },        '管理员先设计并保存一套主题为 .codedrobe 文件，然后通过 Team Plan 推送到团队成员。每个成员首次启动时自动应用团队主题，无需手动配置。',        { type: 'h2', text: '统一视觉的好处' },        '团队统一主题不只是好看。它让共享屏幕演示更专业、减少视觉干扰，也避免"谁的终端配色最乱"这种无谓的争论。',        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Can team members customize their own theme?', a: 'Yes. Team themes are typically set as the default, but individual developers can override.' },          { q: 'Does the Team Plan support 50+ developers?', a: 'Yes, the Team Plan is designed to scale to 50+ developers.' },        ] },      ],      en: [        'Setting up a consistent Codex theme across your development team doesn\'t have to be a manual nightmare. With Codex Skin Studio\'s Team Plan, you can deploy uniform theming to 50+ developers in minutes.',        { type: 'h2', text: 'How Team Themes Work' },        'An admin designs and saves a theme as a .codedrobe file, then pushes it to team members via the Team Plan. Each member gets the team theme applied automatically on first launch — no manual setup.',        { type: 'h2', text: 'Why Consistent Theming Matters' },        'A unified team theme is about more than looks. It makes shared-screen demos look more professional, reduces visual noise, and settles the "messiest terminal" debate for good.',        { type: 'h2', text: 'FAQ' },        { type: 'faq', items: [          { q: 'Can team members customize their own theme?', a: 'Yes. Team themes are typically set as the default, but individual developers can override.' },          { q: 'Does the Team Plan support 50+ developers?', a: 'Yes, the Team Plan is designed to scale to 50+ developers.' },        ] },      ],    },  },
  {
    slug: 'is-codex-skin-studio-safe',
    date: '2026-08-26',
    title: {
      zh: 'Codex Skin Studio 是否安全？CDP 注入安全性详解',
      en: 'Is Codex Skin Studio Safe? CDP Injection Security Explained',
    },
    description: {
      zh: 'Codex Skin Studio 使用 CDP 注入应用主题，不修改官方文件。这篇讲清楚 CDP 注入的工作原理、安全边界，以及你需要注意什么。',
      en: 'Codex Skin Studio uses Chrome DevTools Protocol (CDP) injection to apply themes without modifying official files. Here is what that means for your safety.',
    },
    content: {
      zh: [
        '对于任何桌面工具，安全性都是一个合理关切。Codex Skin Studio 使用 Chrome DevTools Protocol (CDP) 注入来应用主题，而不修改官方文件。以下是这对您的安全的含义。',
        { type: 'h2', text: 'CDP 注入如何工作' },
        'CDP 注入不编辑应用程序文件。相反，它通过 DevTools 协议连接到正在运行的 Codex 进程，并实时应用 CSS 覆盖。官方文件保持原样。',
        '这种方法有三个安全优势：①不修改文件，您的 Codex 安装保持 pristine；②可逆，移除主题后一切恢复默认；③审计追踪，您可以看到确切应用的 CSS 更改。',
        { type: 'h2', text: 'CDP 注入不能做什么' },
        'CDP 注入仅限于驱动 Codex 的浏览器引擎。它不能：访问您的个人文件、安装恶意软件、修改系统设置、读取您的密码或私人数据。',
        '如果主题文件包含恶意 JavaScript，它将在浏览器沙箱中执行。现代浏览器将网站代码与操作系统隔离。受损的主题无法超越该沙箱。',
        { type: 'h2', text: '安全使用主题的最佳实践' },
        {
          type: 'ul',
          items: [
            '只从受信任的来源安装主题',
            '检查主题文件大小（异常大的文件可能包含隐藏载荷）',
            '保持 Codex 更新以享受最新安全补丁',
            '审查主题更新日志以发现可疑更改',
          ],
        },
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'CDP 注入对我的电脑安全吗？', a: '是的。CDP 注入仅修改 Codex 窗口中显示的内容。它无法访问您的文件或系统。' },
            { q: '主题能包含病毒吗？', a: '技术上可以，但浏览器沙箱防止在应用程序外部执行。坚持使用受信任的主题来源。' },
            { q: '如何确认主题是否安全？', a: '查看主题文件大小是否异常，检查来源是否可信，关注 Codex Skin Studio 的更新日志。' },
          ],
        },
        { type: 'cta', text: '探索安全主题选项', href: '/zh/gallery' },
      ],
      en: [
        'Security is a legitimate concern for any desktop tool. Codex Skin Studio uses Chrome DevTools Protocol (CDP) injection to apply themes without modifying official files. Here is what that means for your safety.',
        { type: 'h2', text: 'How CDP Injection Works' },
        'CDP injection does not edit application files. Instead, it connects to the running Codex process through the DevTools protocol and applies CSS overrides in real time. The official files remain untouched.',
        'This approach has three security advantages: ① No file modification — your Codex installation stays pristine; ② Reversible — remove the theme and everything returns to default; ③ Audit trail — you can see exactly what CSS changes are applied.',
        { type: 'h2', text: 'What CDP Injection Cannot Do' },
        'CDP injection is limited to the browser engine that powers Codex. It cannot: access your personal files, install malware, modify system settings, or read your passwords or private data.',
        'If a theme file contains malicious JavaScript, it will execute in the browser sandbox. Modern browsers isolate website code from the operating system. A compromised theme cannot escalate beyond that sandbox.',
        { type: 'h2', text: 'Best Practices for Safe Theme Use' },
        {
          type: 'ul',
          items: [
            'Only install themes from trusted sources',
            'Check theme file sizes (suspiciously large files may contain hidden payloads)',
            'Keep Codex updated to benefit from latest security patches',
            'Review theme changelogs for suspicious changes',
          ],
        },
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Is CDP injection safe for my computer?', a: 'Yes. CDP injection only modifies what is displayed in the Codex window. It cannot access your files or system.' },
            { q: 'Can themes contain viruses?', a: 'Technically yes, but browser sandboxing prevents execution outside the application. Stick to trusted theme sources.' },
            { q: 'How do I verify a theme is safe?', a: 'Check file size for anomalies, verify the source is trustworthy, and monitor Codex Skin Studio changelogs.' },
          ],
        },
        { type: 'cta', text: 'Explore safe theming options', href: '/en/gallery' },
      ],
    },
  },
  {
    slug: 'codex-theme-install-failed',
    date: '2026-08-29',
    title: {
      zh: 'Codex 主题安装失败？7 个常见问题排查',
      en: 'Codex Theme Not Installing? 7 Common Fixes',
    },
    description: {
      zh: '主题装不上？90% 的问题是路径、格式或权限。逐一排查这 7 步，解决绝大多数安装失败。',
      en: 'Theme won\'t install? 90% of failures come from path, format, or permission issues. Work through these 7 steps.',
    },
    content: {
      zh: [
        'Codex Skin Studio 让换肤变得简单，但有时候主题装不上。别急，这篇文章覆盖 7 个最常见的安装失败原因和解决方法。',
        { type: 'h2', text: '1. 检查 .codedrobe 文件格式' },
        'Codex 只接受 .codedrobe 或 .tmTheme 格式。如果你下载的是 .json 或 .xml 文件，直接改扩展名不会生效。需要用 Codex Skin Studio 导出为 .codedrobe。',
        { type: 'h2', text: '2. 确认主题路径正确' },
        'Mac: ~/.codex/themes/，Windows: %USERPROFILE%\\.codex\\themes。路径错了主题不会被加载。',
        { type: 'h2', text: '3. 重启 Codex 而非只是关闭窗口' },
        'Codex 启动时读取主题。如果只是点 X 关闭窗口，进程可能还在后台运行。完全退出（Cmd+Q 或 Task Manager 结束进程）再重新启动。',
        { type: 'h2', text: '4. 检查文件权限' },
        'Mac/Linux: chmod 644 your-theme.codedrobe。Windows: 右键文件 → 属性 → 确保没有勾选只读。',
        { type: 'h2', text: '5. 确认 CSS 变量语法' },
        '主题文件中的 CSS 变量名必须正确：--background, --foreground 等。拼写错误会导致主题加载失败。',
        { type: 'h2', text: '6. 查看 Codex 控制台错误' },
        '打开 Codex 开发者工具（Ctrl+Shift+I 或 Cmd+Option+I），查看 Console 标签页的错误信息。绝大多数安装失败会在这里留下线索。',
        { type: 'h2', text: '7. 重新下载或重新导出' },
        '如果以上都不行，可能是文件损坏。重新从 Codex Skin Studio 导出，或重新下载主题文件。',
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: '为什么我改了主题文件但 Codex 没有反应？', a: 'Codex 只在启动时读取主题。修改后需要完全退出再重新启动。' },
          { q: '可以同时安装多个主题吗？', a: '可以。每个主题放在 themes/ 目录下，启动时在设置中选择。' },
          { q: '.codedrobe 和 .tmTheme 有什么区别？', a: '.codedrobe 是 Codex Skin Studio 的专用格式，功能更丰富。.tmTheme 是通用 TextMate 格式。' },
        ] },
      ],
      en: [
        'Codex Skin Studio makes theming simple, but sometimes a theme just won\'t install. Don\'t panic — this post covers the 7 most common failure reasons and how to fix them.',
        { type: 'h2', text: '1. Check the .codedrobe file format' },
        'Codex only accepts .codedrobe or .tmTheme files. If you downloaded a .json or .xml file, renaming the extension won\'t help. You need to export as .codedrobe from Codex Skin Studio.',
        { type: 'h2', text: '2. Verify the theme path' },
        'Mac: ~/.codex/themes/, Windows: %USERPROFILE%\\.codex\\themes. Wrong path means the theme won\'t load.',
        { type: 'h2', text: '3. Quit Codex fully, don\'t just close the window' },
        'Codex reads themes on startup. If you just click X, the process may still run in the background. Quit completely (Cmd+Q or end process in Task Manager) then restart.',
        { type: 'h2', text: '4. Check file permissions' },
        'Mac/Linux: chmod 644 your-theme.codedrobe. Windows: right-click file → Properties → make sure Read-only is unchecked.',
        { type: 'h2', text: '5. Verify CSS variable syntax' },
        'CSS variable names in the theme file must be correct: --background, --foreground, etc. A typo will cause the theme to fail loading.',
        { type: 'h2', text: '6. Check the Codex console for errors' },
        'Open Codex DevTools (Ctrl+Shift+I or Cmd+Option+I), check the Console tab. Most installation failures leave a clue there.',
        { type: 'h2', text: '7. Re-download or re-export' },
        'If none of the above works, the file may be corrupted. Re-export from Codex Skin Studio or re-download the theme file.',
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'Why doesn\'t Codex react after I edit the theme file?', a: 'Codex only reads themes on startup. You need to fully quit and restart after making changes.' },
          { q: 'Can I install multiple themes at once?', a: 'Yes. Place each theme in the themes/ directory and select between them in settings on startup.' },
          { q: 'What\'s the difference between .codedrobe and .tmTheme?', a: '.codedrobe is Codex Skin Studio\'s proprietary format with richer features. .tmTheme is the generic TextMate format.' },
        ] },
      ],
    },
  },
  {
    slug: 'codex-theme-stopped-working',
    date: '2026-08-30',
    title: {
      zh: 'Codex 主题失效了？可能是升级导致的',
      en: 'Codex Theme Stopped Working? It Might Be an Update',
    },
    description: {
      zh: 'Codex 主题在升级后突然失效？了解主题为何在更新后失效，以及如何修复——查看更新说明、重新安装、清除缓存。',
      en: 'Codex theme stopped working after an update? Learn why themes break on updates and how to fix it — check notes, reinstall, and clear cache.',
    },
    content: {
      zh: [
        'Codex 主题在升级后突然失效是最令人沮丧的事情。你花了很多时间自定义，现在编辑器看起来朴素或破损。以下是可能发生的情况和修复方法。',
        { type: 'h2', text: '为什么主题在升级后会失效' },
        'Codex 更新经常改变主题的配置方式。你旧的设置可能与新版本不兼容，导致主题无法正常加载。',
        { type: 'h2', text: '如何修复失效的主题' },
        { type: 'h2', text: '第一步：查看更新说明' },
        '做任何事情之前，先阅读 Codex 的更新说明。它们通常会提到破坏性更改或主题的新要求。',
        { type: 'h2', text: '第二步：重新安装主题' },
        '最简单的修复方法有时是重新安装主题：移除当前主题文件，下载最新版本，按照更新说明安装。',
        { type: 'h2', text: '第三步：清除缓存' },
        'Codex 缓存主题文件以加快加载速度。升级后，通过删除 Codex 目录中的缓存文件夹并重启来清除缓存。',
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '我怎么知道我的主题是否兼容？', a: '查看主题的文档或 GitHub 页面以获取兼容版本。' },
          { q: '我可以降级 Codex 吗？', a: '可以，但不推荐。最好等待主题更新。' },
          { q: 'Codex 多久更新一次？', a: '经常更新——每几周一次小更新，每季度一次大版本。' },
        ] },
        'Codex 是一个功能强大的终端模拟器和 IDE，支持广泛的主题。访问 [codex-skin-studio.shop](/) 探索数千个社区创建的主题。',
      ],
      en: [
        'Nothing\'s more frustrating than having your Codex theme suddenly stop working after an update. You spent time customizing everything, and now your editor looks plain or broken. Here\'s what\'s likely happening and how to fix it.',
        { type: 'h2', text: 'Why Themes Break After Updates' },
        'Codex updates often change how themes are configured. Your old settings might not be compatible with the new version, causing the theme to fail to load properly.',
        { type: 'h2', text: 'How to Fix a Broken Theme' },
        { type: 'h2', text: 'Step 1: Check the Update Notes' },
        'Before doing anything, read the Codex update notes. They often mention breaking changes or new requirements for themes.',
        { type: 'h2', text: 'Step 2: Reinstall the Theme' },
        'Sometimes the simplest fix is to reinstall the theme: remove the current theme files, download the latest version, and install it following the updated instructions.',
        { type: 'h2', text: 'Step 3: Clear Cache' },
        'Codex caches theme files for faster loading. After an update, clear the cache by deleting the cache folder in your Codex directory and restarting.',
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'How do I know if my theme is compatible?', a: 'Check the theme\'s documentation or GitHub page for compatible versions.' },
          { q: 'Can I downgrade Codex?', a: 'It\'s possible but not recommended. Better to wait for theme updates.' },
          { q: 'How often does Codex update?', a: 'Regularly — every few weeks for minor updates, quarterly for major versions.' },
        ] },
        'Codex is a powerful terminal emulator and IDE that supports extensive theming. Visit [codex-skin-studio.shop](/) to explore thousands of community-created themes.',
      ],
    },
  },

  {
    slug: 'best-practices-for-switching-codex-themes-without-breaking-flow',
    date: '2026-08-31',
    title: {
      zh: 'Codex 主题切换最佳实践：不破坏工作流程',
      en: 'Best Practices for Switching Codex Themes Without Breaking Flow',
    },
    description: {
      zh: '不破坏工作流程地切换 Codex 主题：备份配置、检查兼容性，并遵循安全的切换流程。',
      en: 'Switch Codex themes without breaking your flow: back up config, check compatibility, and follow a safe switching workflow.',
    },
    content: {
      en: [
        "Switching Codex themes sounds simple — one command, one click — but getting it wrong can break your workflow, mess up your settings, or leave you staring at a broken UI. Here's how to switch themes smoothly, every time.",
        { type: "h2", text: "Why Theme Switching Goes Wrong" },
        "Most problems come from one of these:",
        "1. <strong>Theme incompatibility:</strong> A theme built for an older Codex version might not work with your current build",
        "2. <strong>Conflicting settings:</strong> Two themes trying to control the same CSS variable",
        "3. <strong>Cache issues:</strong> Your browser or Codex is serving stale theme files",
        "4. <strong>Wrong installation path:</strong> Theme files in the wrong folder get ignored or overridden",
        { type: "h2", text: "The Safe Switching Workflow" },
        "Step 1: Note Your Current Theme",
        "Before switching, write down your current theme name and any customizations you've made. You can always return to it.",
        "Step 2: Check Version Compatibility",
        "Make sure the new theme supports your Codex version. Check the theme's README or release notes for version requirements.",
        "Step 3: Backup Your Config",
        "Copy your `.codex/config.json` (or equivalent) to a safe location. If the new theme breaks something, you can restore your settings.",
        "Step 4: Install the Theme",
        "Follow the theme's installation instructions. Most themes use one of these methods:",
        { type: "ul", items: [ "Drag-and-drop into the themes folder", "Command-line installation (`/theme install <path>)", "Download and extract to the correct directory" ] },
        "Step 5: Apply and Verify",
        "Activate the theme and check:",
        { type: "ul", items: [ "Syntax highlighting works correctly", "No missing colors or broken UI elements", "Your custom keybindings still function", "Terminal colors match the theme intent" ] },
        "Step 6: Test in a Real Session",
        "Open a real project and code for 10-15 minutes. Themes often look fine in a preview but reveal issues during actual use — especially around contrast, readability, and eye strain.",
        { type: "h2", text: "Theme Conflict Resolution" },
        "If two themes are fighting each other:",
        { type: "ul", items: [ "**Disable one completely** before enabling the other", "**Check for overlapping CSS variables** — rename conflicting ones in your config", "**Use a theme manager** if you switch frequently (some third-party tools help)", "**Clear the cache** after switching — stale files cause phantom bugs" ] },
        { type: "h2", text: "When to Keep Multiple Themes" },
        "Some developers maintain 2-3 themes for different contexts:",
        { type: "ul", items: [ "A dark theme for late-night coding", "A light theme for daytime work", "A high-contrast theme for accessibility" ] },
        "Switch between them intentionally — don't let theme-hopping become a procrastination habit. Set a rule: once you pick a theme for a project, stick with it for at least a week.",
        { type: "h2", text: "FAQ" },
        "Q: Can I use two themes at once?",
        "A: Not natively. Codex applies one theme per session. Some themes offer \"light/dark toggle\" features, but that's built into the theme itself, not a side-by-side setup.",
        "Q: How do I know if a theme is breaking your workflow?",
        "A: Watch for: syntax colors that make code hard to read, missing UI elements, keybindings that stop working, or increased eye strain after extended use.",
        "Q: Can I customize a theme after installing it?",
        "A: Yes — most themes allow CSS variable overrides in your config. Check the theme's documentation for customization options.",
        "Q: What's the fastest way to revert to a previous theme?",
        "A: If you backed up your config, restore it and reactivate the old theme. Without a backup, reinstall the old theme files and clear the cache.",
        { type: "h2", text: "About Codex Skin Studio" },
        "Codex Skin Studio makes theme switching simple and safe. Browse curated themes, install with one click, and preview before applying. Visit [codex-skin-studio.shop](/) to explore themes."
      ],
      zh: [
        "切换 Codex 主题听起来很简单——一条命令、一次点击——但搞错了会打断你的工作流程、搞乱设置，或者让你盯着一个坏掉的界面发呆。以下是每次都能顺利切换主题的方法。",
        { type: "h2", text: "为什么主题切换会出问题" },
        "大多数问题来自以下原因之一：",
        "1. <strong>主题不兼容：</strong> 为旧版 Codex 创建的主题可能无法与你当前的构建配合",
        "2. <strong>设置冲突：</strong> 两个主题试图控制同一个 CSS 变量",
        "3. <strong>缓存问题：</strong> 你的浏览器或 Codex 正在提供旧的主题文件",
        "4. <strong>安装路径错误：</strong> 错误文件夹中的主题文件被忽略或覆盖",
        { type: "h2", text: "安全切换工作流程" },
        "第 1 步：记录当前主题",
        "切换之前，记下当前主题名称和你所做的任何自定义。你随时可以返回。",
        "第 2 步：检查版本兼容性",
        "确保新主题支持你的 Codex 版本。查看主题的 README 或发布说明中的版本要求。",
        "第 3 步：备份配置",
        "将 `.codex/config.json`（或等效文件）复制到安全位置。如果新主题出了问题，你可以恢复设置。",
        "第 4 步：安装主题",
        "按照主题的安装说明操作。大多数主题使用以下方法之一：",
        { type: "ul", items: [ "拖放到主题文件夹", "命令行安装（`/theme install <path>`）", "下载并解压到正确目录" ] },
        "第 5 步：应用并验证",
        "激活主题并检查：",
        { type: "ul", items: [ "语法高亮正常工作", "没有缺失的颜色或损坏的 UI 元素", "你的自定义按键绑定仍然有效", "终端颜色符合主题意图" ] },
        "第 6 步：在实际会话中测试",
        "打开一个真实项目，编码 10-15 分钟。主题在预览中看起来不错，但在实际使用中可能会暴露问题——特别是对比度、可读性和眼部疲劳方面。",
        { type: "h2", text: "主题冲突解决" },
        "如果两个主题互相冲突：",
        { type: "ul", items: [ "**在启用另一个之前完全禁用一个**", "**检查重叠的 CSS 变量**——在配置中重命名冲突的变量", "**如果你经常切换，使用主题管理器**（一些第三方工具有帮助）", "**切换后清除缓存**——旧文件会导致幽灵 bug" ] },
        { type: "h2", text: "何时保留多个主题" },
        "一些开发者为不同场景维护 2-3 个主题：",
        { type: "ul", items: [ "深夜编码用的暗色主题", "白天工作用的亮色主题", "无障碍用的高对比度主题" ] },
        "有意地在它们之间切换——不要让主题跳跃成为拖延习惯。设定一个规则：一旦为一个项目选择了主题，至少坚持一周。",
        { type: "h2", text: "常见问题" },
        "Q: 我能同时使用两个主题吗？",
        "A: 不能原生使用。Codex 每个会话应用一个主题。一些主题提供\"亮/暗切换\"功能，但那是主题内置的，不是并排设置。",
        "Q: 我怎么知道主题是否破坏了工作流程？",
        "A: 注意：让代码难以阅读的语法颜色、缺失的 UI 元素、按键绑定停止工作、或长时间使用后眼部疲劳增加。",
        "Q: 安装主题后可以自定义吗？",
        "A: 可以——大多数主题允许在配置中覆盖 CSS 变量。查看主题的文档了解自定义选项。",
        "Q: 恢复到之前主题的最快方法是什么？",
        "A: 如果你备份了配置，恢复它并重新激活旧主题。没有备份的话，重新安装旧主题文件并清除缓存。",
        { type: "h2", text: "关于 Codex Skin Studio" },
        "Codex Skin Studio 让主题切换简单安全。浏览精选主题、一键安装、应用前预览。访问 [codex-skin-studio.shop](/) 探索主题。"
      ],
    },
  },
  {
    slug: 'best-codex-themes-for-designers',
    date: '2026-09-02',
    title: {
      zh: '最适合设计师的 5 款 Codex 主题',
      en: '5 Best Codex Themes for Designers',
    },
    description: {
      zh: '设计师以不同方式看待编码。这 5 款 Codex 主题——Clear Glass、Solarized、Monokai Stone、Sakura Pink Dawn、Forest Mist——兼顾视觉清晰度与设计友好。',
      en: 'Designers see coding differently. These 5 Codex themes — Clear Glass, Solarized, Monokai Stone, Sakura Pink Dawn, Forest Mist — balance visual clarity with design-friendly features.',
    },
    content: {
      zh: [
        "设计师以不同于开发者的方式处理编码。你关心视觉层次、色彩关系和代码在屏幕上的外观。正确的 Codex 主题可以让你的设计工作感觉更自然，并帮助你更快地发现问题。",
        "以下是 5 款最适合设计师的 Codex 主题，每款都因视觉清晰度和对设计友好的功能而入选。",
        { type: "h2", text: "1. Clear Glass — 设计师的选择" },
        "Clear Glass 几乎是看不见的。它让你的内容——无论是设计规格、颜色代码还是排版笔记——成为焦点，而不与编辑器本身产生视觉竞争。",
        { type: "h2", text: "设计师喜爱的原因：" },
        { type: "ul", items: [ "近乎零视觉噪音", "阅读细节能力的出色对比度", "与明暗设计工作流程都兼容", "透明效果反映了现代 UI 设计趋势" ] },
        { type: "h2", text: "最适合：" },
        "希望编辑器消失让作品说话的设计师。",
        { type: "h2", text: "2. Solarized — 精密工具" },
        "Solarized 由艺术家兼开发者 Ethan Schoonover 专门设计，用于减少长时间编码过程中的眼睛疲劳。对于花数小时审查布局和色板的设计师来说，这个主题是改变游戏规则的产品。",
        { type: "h2", text: "设计师喜爱的原因：" },
        { type: "ul", items: [ "基于色彩理论的精心校准色彩调色板", "减少长时间工作过程中的眼睛疲劳", "颜色工作的出色表现——你可以看到细微差别", "柔和的色调不会分散你的设计决策" ] },
        { type: "h2", text: "最适合：" },
        "广泛从事颜色系统工作且需要精度的设计师。",
        { type: "h2", text: "3. Monokai Stone — 专业外观" },
        "Monokai Stone 采用经典 Monokai 调色板并为其柔化，以适应专业环境。它精致而不张扬，非常适合向客户展示作品的设计师。",
        { type: "h2", text: "设计师喜爱的原因：" },
        { type: "ul", items: [ "给客户留下好印象的专业外观", "平衡的色彩对比而不刺眼", "易于阅读的清晰排版", "石色调感觉沉稳而严肃" ] },
        { type: "h2", text: "最适合：" },
        "需要与客户或利益相关者分享编码工作空间的设计师。",
        { type: "h2", text: "4. Sakura Pink Dawn — 创意火花" },
        "Sakura Pink Dawn 为您的编码会话带来温暖和创意。粉色和暖色调刺激创造力同时保持可读性——这是一种罕见的组合。",
        { type: "h2", text: "设计师喜爱的原因：" },
        { type: "ul", items: [ "暖色调激发创造性思维", "黎明调色板感觉清新且鼓舞人心", "适合头脑风暴和构思会议", "与女性化或柔和设计美学相匹配" ] },
        { type: "h2", text: "最适合：" },
        "在品牌身份或情感设计项目上工作的创意总监和设计师。",
        { type: "h2", text: "5. Forest Mist — 自然平衡" },
        "Forest Mist 结合了受自然启发的绿色和蓝色。对于从事环保品牌或自然灵感项目的设计师来说，这个主题在您的作品和工作空间之间创造了视觉和谐。",
        { type: "h2", text: "设计师喜爱的原因：" },
        { type: "ul", items: [ "自然色彩调色板促进冷静专注", "绿色色调对眼睛友好", "适合可持续性和自然主题项目", "迷雾效果创造深度而不分散注意力" ] },
        { type: "h2", text: "最适合：" },
        "从事环境、健康或自然灵感品牌工作的设计师。",
        { type: "h2", text: "如何为您的设计师主题选择" },
        "考虑以下问题：",
        { type: "h2", text: "您的主要工作流程是什么？" },
        "颜色工作需要 Solarized 等精密主题。创意头脑风暴受益于 Sakura Pink Dawn 等暖色调主题。",
        { type: "h2", text: "谁看您的屏幕？" },
        "面向客户的工作需要 Monokai Stone 等专业主题。个人项目可以更表达。",
        { type: "h2", text: "您编码多长时间？" },
        "长时间会话需要护眼主题。Solarized 和 Forest Mist 在这方面表现出色。",
        { type: "h2", text: "您的设计美学是什么？" },
        "将您的主题与您的品牌个性匹配。极简品牌可能与 Clear Glass 配合良好。",
        { type: "h2", text: "安装您的新主题" },
        "切换 Codex 主题很快：",
        { type: "ul", items: [ "打开 Codex 设置", "导航到主题", "浏览图库找到您选择的主题", "点击安装", "重启 Codex 以应用" ] },
        "您的新主题将反映您的设计审美，同时改善您的编码体验。",
        { type: "cta", text: "浏览主题库 →", href: "/zh/gallery" },
        { type: "cta", text: "查看最佳 Codex 主题指南 →", href: "/guides/best-codex-themes" },
      ],
      en: [
        "Designers approach coding differently than developers. You care about visual hierarchy, color relationships, and how code looks on screen. The right Codex theme can make your design work feel more natural and help you spot issues faster.",
        "Here are the 5 best Codex themes for designers, each chosen for visual clarity and design-friendly features.",
        { type: "h2", text: "1. Clear Glass — The Designer's Choice" },
        "Clear Glass is essentially invisible. It lets your content — whether it's design specs, color codes, or typography notes — take center stage without visual competition from the editor itself.",
        { type: "h2", text: "Why designers love it:" },
        { type: "ul", items: [ "Near-zero visual noise", "Excellent contrast for reading fine details", "Works well with both light and dark design workflows", "The transparency effect mirrors modern UI design trends" ] },
        { type: "h2", text: "Best for:" },
        "Designers who want the editor to disappear and let the work speak for itself.",
        { type: "h2", text: "2. Solarized — The Precision Tool" },
        "Solarized was designed by artist and developer Ethan Schoonover specifically for reduced eye strain during long coding sessions. For designers who spend hours reviewing layouts and color palettes, this theme is a game-changer.",
        { type: "h2", text: "Why designers love it:" },
        { type: "ul", items: [ "Carefully calibrated color palette based on color theory", "Reduces eye strain during extended work sessions", "Excellent for color work — you can actually see the nuances", "The muted tones don't distract from your design decisions" ] },
        { type: "h2", text: "Best for:" },
        "Designers who work extensively with color systems and need precision.",
        { type: "h2", text: "3. Monokai Stone — The Professional Look" },
        "Monokai Stone takes the classic Monokai palette and softens it for professional environments. It's sophisticated without being flashy, making it perfect for designers who present their work to clients.",
        { type: "h2", text: "Why designers love it:" },
        { type: "ul", items: [ "Professional appearance that impresses clients", "Balanced color contrast without being harsh", "Clean typography that's easy to read", "The stone tones feel grounded and serious" ] },
        { type: "h2", text: "Best for:" },
        "Designers who need to share their coding workspace with clients or stakeholders.",
        { type: "h2", text: "4. Sakura Pink Dawn — The Creative Spark" },
        "Sakura Pink Dawn brings warmth and creativity to your coding session. The pink and warm tones stimulate creativity while maintaining readability — a rare combination.",
        { type: "h2", text: "Why designers love it:" },
        { type: "ul", items: [ "Warm colors boost creative thinking", "The dawn palette feels fresh and inspiring", "Great for brainstorming and ideation sessions", "Matches well with feminine or soft design aesthetics" ] },
        { type: "h2", text: "Best for:" },
        "Creative directors and designers working on brand identity or emotional design projects.",
        { type: "h2", text: "5. Forest Mist — The Natural Balance" },
        "Forest Mist combines greens and blues inspired by nature. For designers who work on eco-friendly brands or nature-inspired projects, this theme creates visual harmony between your work and your workspace.",
        { type: "h2", text: "Why designers love it:" },
        { type: "ul", items: [ "Natural color palette promotes calm focus", "Green tones are easy on the eyes", "Great for sustainability and nature-themed projects", "The mist effect creates depth without distraction" ] },
        { type: "h2", text: "Best for:" },
        "Designers working on environmental, wellness, or nature-inspired brands.",
        { type: "h2", text: "How to Choose Your Designer Theme" },
        "Consider these questions:",
        { type: "h2", text: "What's your primary workflow?" },
        "Color work demands precision themes like Solarized. Creative brainstorming benefits from warm themes like Sakura Pink Dawn.",
        { type: "h2", text: "Who sees your screen?" },
        "Client-facing work calls for professional themes like Monokai Stone. Personal projects can be more expressive.",
        { type: "h2", text: "How long do you code?" },
        "Long sessions need eye-friendly themes. Solarized and Forest Mist excel here.",
        { type: "h2", text: "What's your design aesthetic?" },
        "Match your theme to your brand personality. A minimalist brand might pair well with Clear Glass.",
        { type: "h2", text: "Installing Your New Theme" },
        "Switching Codex themes is quick:",
        { type: "ul", items: [ "Open Codex settings", "Navigate to Themes", "Browse the gallery for your chosen theme", "Click Install", "Restart Codex to apply" ] },
        "Your new theme will reflect your design sensibilities while improving your coding experience.",
        { type: "cta", text: "Browse the theme gallery →", href: "/zh/gallery" },
        { type: "cta", text: "Read the best Codex themes guide →", href: "/guides/best-codex-themes" },
      ],
    },
  },
  {
    slug: 'top-10-best-codex-themes-2026',
    date: '2026-09-03',
    title: {
      zh: '2026 年最佳 Codex 主题 Top 10：按「能撑一周」排的榜',
      en: 'Top 10 Best Codex Themes in 2026 (Ranked by Week-Long Wear)',
    },
    description: {
      zh: '不按截图好看排，按连用五天还想不想用排。10 款真实在售主题的推荐理由、适用人群，以及每一款「什么情况下别用」。',
      en: 'Not ranked by how they look in a screenshot — ranked by whether you still want them on day five. Ten real themes, who each one fits, and when to skip it.',
    },
    content: {
      zh: [
        '给 Codex 主题排榜单，最没用的排法是比截图。周一让你心动的配色，周四就可能让你头疼——多半是因为你在明亮的房间里挑的它，然后在晚上十一点用它写代码。这份最佳 Codex 主题榜单按「连用五天之后还想不想留着」排序，不按第一眼。',
        '十款都在 Codex Skin Studio 的主题库里真实可选，全部走本机 CDP 注入生效：不动 app.asar，Codex 升级不会把你的界面打回原形。免费档给 8 款；想自定义配色和自己的背景图，Pro 是 $5.99/月。',
        { type: 'h2', text: '1. 清透定制（Clear Custom）——拿不定主意就选它' },
        '浅色底、克制的强调色、几乎没有装饰。「无聊」正是它的价值：连着看四小时 diff 之后，你最注意不到的那款主题，就是代价最小的那款。长时间 code review、在 Codex 里写文档的人，默认推荐这一款。',
        '什么情况下别用：如果你大部分代码写在晚上九点之后。暗房间里的浅色底是最快的眼疲劳通道，配色再考究也救不回来。',
        { type: 'h2', text: '2. 舞台黑金（Stage Black Gold）——克制出来的高级感' },
        '纯黑打底，香槟金点缀，只留一束追光而不是五束。金在屏幕上其实很难做：现实里的金靠高光和暗部的落差撑起来，显示器只能给你一个个平面色值。舞台黑金的解法是把金用得极省——边框、活动态、光标——剩下的交给黑。',
        '什么情况下别用：经常开会共享屏幕。黑底上的金经过视频压缩会严重掉对比，对方看到的是一片糊。',
        { type: 'h2', text: '3. 紫夜限定（Purple Night）——氛围流的首选' },
        '深紫夜幕打底，霓虹点缀。它是暗色阵营里唯一敢把主色推到紫罗兰的一款，适合晚间长会话、写副业项目那种「不想像在上班」的场景。',
        '什么情况下别用：你要处理颜色敏感的设计稿。整屏的紫色偏色会带偏你对其他所有颜色的判断，取色器给的数和你眼睛看到的会打架。',
        { type: 'h2', text: '4. 灵感小宇宙（Inspiration Universe）——低饱和星空' },
        '深蓝星云加微光粒子，创作者群体里人气最高的一款。多数带壁纸的主题会失败，它没失败的原因只有一个：饱和度压得够低，背景从不跟语法高亮抢注意力。',
        '什么情况下别用：13 寸笔记本。细节型背景需要屏幕面积，宽度只有 1280px 时星云会退化成代码后面的噪点。',
        { type: 'h2', text: '5. 浪漫玫瑰（Romantic Rose）——在暗色模式里活下来的粉' },
        '玫瑰粉负责氛围，奶油白负责留白，柔灰负责代码可读性。粉色配暗色模式听起来不对，实际很稳——因为它的粉只出现在面板和强调色上，正文字色始终是高对比的灰白。主题库里人气第一，很多人第一次换肤选的就是它。',
        '什么情况下别用：团队有统一的截图规范。粉系主题的截图放进技术文档里，同事第一反应会是配色而不是你要讲的那段代码。',
        { type: 'h2', text: '6. 红白科幻（Red Sci-Fi）——高对比赛博朋克' },
        '暗红底、亮白焦点、锐利几何边框，三件套一眼可辨。它适合短而密的会话：黑客松、赶 demo、临时救火。高对比让你在疲劳状态下也能快速定位光标。',
        '什么情况下别用：一天连坐六小时以上。高对比度在一定范围内能减轻眼疲劳，越过那个点就反过来变成疲劳来源。',
        { type: 'h2', text: '7. 功夫女足（Kung Fu Women\u2019s Football）——免费档的默认款' },
        '红金配色，强调色 #e06a2e，只有暗色模式，随安装包内置。它排第七不是因为差，而是因为你不需要为它做任何决定——装完就在那儿，零配置成本。预算为零、又不想花半小时挑主题的人，从它开始最省事。',
        '什么情况下别用：你需要亮色模式。它是纯暗色主题，没有 light 变体。',
        { type: 'h2', text: '8. 青蓝虚拟歌姬（Azure Virtual Diva）——收着用的二次元' },
        '天蓝主色、舞台感高光、一点霓虹。主题库里最「二次元」的一款，但它的高光只落在侧栏和标签，代码区仍然是干净的深底，所以不像多数同类那样一小时就看不下去。',
        '什么情况下别用：给传统行业客户做屏幕演示。这个氛围会让对话跑偏到你的桌面而不是你的方案。',
        { type: 'h2', text: '9. 财神打工版（Fortune God）——红金年味' },
        '大面积深红打底，金色做强调，按钮和活动态带一点描金。看起来最喜庆，装上之后反而意外协调——因为深红的明度压得比想象中低。适合春节前后想换个心情，或者本来就偏爱中式配色的人。',
        '什么情况下别用：红绿色盲（红色弱）。深红底会和 git diff 的绿色标记糊成一片，这不是审美问题，是可用性问题。',
        { type: 'h2', text: '10. 太乙真人（Taiyi Zhenren）——青玉鎏金，最静的一款' },
        '强调色 #7ab8b0，主题库里唯一被归到「清新」分类而不是暗黑或科幻的一款。青玉色的强调在深底上比蓝色更柔，适合写文档、做长时间阅读型工作。',
        '什么情况下别用：你依赖强调色来快速扫视终端输出。它的对比度是全榜最低的一档，扫读速度会掉。',
        { type: 'h2', text: '20 分钟把它选完' },
        {
          type: 'ul',
          items: [
            '在主题库里挑 3 款进候选：一款浅色、一款纯暗色、一款带壁纸的',
            '逐个应用，然后打开一个真实文件（不是 demo 代码），读 7 分钟',
            '记下哪一款让你眯眼了——那一款直接淘汰，不用再想',
            '把剩下的两款放到你一天中最难受的那个时段再试一次（深夜或者正午强光）',
          ],
        },
        '第 4 步是最容易被跳过的一步，也是两周后重新挑主题的人普遍漏掉的那一步。',
        { type: 'h2', text: '什么时候问题不在主题' },
        '如果你每周换主题超过一次，问题大概不在配色，而在字号、显示器亮度或者房间照明。把亮度从 100% 调到 60% 成本是零；换一次主题、重新适应一遍，每次要花掉一小时。先动便宜的那个变量。',
        '另外：Pro（$5.99/月）解锁的是无限自定义配色和自己的背景图，Team（$12.99/月，5 席位）解锁的是团队共享主题。如果你只是想在 8 款成品里挑一款用得久的，免费档就够，不用为这份榜单付钱。30 天退款保证在，试错成本不高。',
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            { q: '这十款主题都能免费用吗？', a: '不是。免费档提供 8 款内置主题，其余属于 Pro。功夫女足随安装包内置，装完即可用。' },
            { q: '换主题会改动 Codex 官方文件吗？', a: '不会。全部走本机 CDP 运行时注入，不写 app.asar，停止工具界面立刻恢复原样。' },
            { q: '一款主题该用多久再换？', a: '至少一周。少于一周你判断不出它在你最疲劳的时段表现如何，而那才是真正决定去留的场景。' },
            { q: '为什么榜单里没有 Solarized、Monokai 这类经典配色？', a: '这份榜单只收 Codex Skin Studio 主题库里真实可安装的主题，不收不在库里的名字。' },
          ],
        },
        { type: 'h2', text: '关于 Codex Skin Studio' },
        'Codex Skin Studio（codex-skin-studio.shop）是给 Codex 桌面端换肤的工具：本机 CDP 注入，不改官方文件，一键还原。想直接看这十款长什么样，去主题库；想搞清免费档和 Pro 的边界，看定价页；更多主题拆解在博客索引里。',
        { type: 'cta', text: '浏览主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: '查看定价 →', href: '/zh/pricing' },
        { type: 'cta', text: '更多主题文章 →', href: '/zh/blog' },
      ],
      en: [
        "Ranking the best Codex themes by screenshot is the least useful thing you can do. A palette you love on Monday can give you a headache by Thursday, usually because you picked it in a bright room and then coded in it at 11pm. This list is ordered by whether you still want the theme on day five.",
        "All ten are real, installable themes in the Codex Skin Studio gallery, and every one applies through local CDP injection — app.asar is never touched, so a Codex update will not reset your look. Eight are covered by the free tier; Pro is $5.99/mo if you want custom palettes and your own wallpaper.",
        { type: 'h2', text: "1. Clear Custom — pick this if you are unsure" },
        "Soft light base, restrained accents, almost no decoration. Boring is the point: after four hours of reading diffs, the theme you notice least is the one that costs you least. This is the default recommendation for long code review sessions and for writing docs inside Codex.",
        "Skip it if: most of your coding happens after 9pm. A light base in a dark room is the fastest route to eye strain, and no amount of tasteful palette work fixes that.",
        { type: 'h2', text: "2. Stage Black Gold — restraint that reads as expensive" },
        "Pure black base, champagne gold accents, one spotlight instead of five. Gold is genuinely hard on a screen: real gold works through the gap between highlight and shadow, and a monitor only gives you flat hex values. Stage Black Gold solves it by rationing gold to borders, active states and the cursor, and letting black carry everything else.",
        "Skip it if: you share your screen on calls a lot. Gold-on-black loses contrast badly through video compression, and the other side just sees mud.",
        { type: 'h2', text: "3. Purple Night — the atmosphere pick" },
        "Deep violet ground with neon accents. It is the only theme in the dark lineup that pushes its primary all the way into violet, which makes it a good fit for late sessions and side projects — the sort of work where you specifically do not want the screen to feel like the office.",
        "Skip it if: you handle colour-critical design assets. A full-screen violet cast biases how you read every other colour, and your eyedropper values will start disagreeing with your eyes.",
        { type: 'h2', text: "4. Inspiration Universe — low-saturation starfield" },
        "Deep blue nebula with faint particles, and the most popular theme among the creator crowd. Most wallpaper themes fail; this one does not, for exactly one reason: the saturation stays low enough that the background never competes with syntax highlighting.",
        "Skip it if: you run Codex on a 13-inch laptop. Detailed backgrounds need screen area — at 1280px wide the nebula degrades into noise behind your code.",
        { type: 'h2', text: "5. Romantic Rose — pink that survives dark mode" },
        "Rose pink carries the mood, cream white handles whitespace, soft grey keeps code readable. Pink plus dark mode sounds wrong and holds up anyway, because the pink lives in panels and accents while body text stays high-contrast grey-white. It is the most-installed theme in the gallery and the one most people pick for their first skin.",
        "Skip it if: your team has a screenshot standard. Drop a pink-themed screenshot into technical docs and the first comment you get will be about the colour, not the code you were trying to explain.",
        { type: 'h2', text: "6. Red Sci-Fi — high contrast, cyberpunk" },
        "Dark red base, bright white focus, hard geometric borders. Recognisable in one glance and best used in short dense bursts: hackathons, demo crunch, firefighting. The high contrast means you can still find your cursor when you are tired.",
        "Skip it if: you sit for six hours or more at a stretch. High contrast reduces strain up to a point; past that point it becomes the source of the strain.",
        { type: 'h2', text: "7. Kung Fu Women\u2019s Football — the free default" },
        "Red-gold, accent #e06a2e, dark mode only, and it ships inside the installer. It sits at seven not because it is weak but because it asks nothing of you — it is already there when setup finishes. If your budget is zero and you refuse to spend half an hour browsing, start here.",
        "Skip it if: you need light mode. There is no light variant.",
        { type: 'h2', text: "8. Azure Virtual Diva — anime energy, kept in check" },
        "Sky-blue primary, stage-light highlights, a touch of neon. It is the most anime-flavoured theme in the gallery, but the highlights land on the sidebar and tabs while the code area stays a clean dark base — which is why it does not become unreadable after an hour like most of its genre.",
        "Skip it if: you demo to clients in conservative industries. The vibe moves the conversation to your desktop instead of your proposal.",
        { type: 'h2', text: "9. Fortune God — festive red and gold" },
        "A broad deep-red field with gold accents and a little gilt on buttons and active states. It looks like the loudest theme here and turns out to be surprisingly workable, because the red sits at a much lower lightness than you expect. Good for a seasonal mood change, or if Chinese palettes are your thing year-round.",
        "Skip it if: you have red-green colour deficiency. The deep red base merges with green git-diff markers — that is a usability failure, not a taste question.",
        { type: 'h2', text: "10. Taiyi Zhenren — jade and gold, the quietest one" },
        "Accent #7ab8b0, and the only theme in the gallery filed under Fresh rather than Dark or Sci-Fi. Jade accents on a dark base read softer than blue, which suits documentation work and long stretches of reading rather than writing.",
        "Skip it if: you rely on accent colour to scan terminal output fast. This is the lowest-contrast entry on the list, and your scan speed will drop.",
        { type: 'h2', text: "Choose one in 20 minutes" },
        {
          type: 'ul',
          items: [
            "Shortlist three from the gallery: one light, one plain dark, one with a wallpaper",
            "Apply each and open a real file — not demo code — and read for 7 minutes",
            "Note which one made you squint. That one is out, no further debate",
            "Try the remaining two again at the worst hour of your day: late night, or midday glare",
          ],
        },
        "Step 4 is the one everyone skips, and it is also the reason so many people re-pick a theme two weeks later.",
        { type: 'h2', text: "When the theme is not the problem" },
        "If you are switching themes more than once a week, the palette probably is not the issue — font size, monitor brightness or room lighting is. Dropping brightness from 100% to 60% costs nothing. Switching themes and re-adapting costs you about an hour each time. Move the cheap variable first.",
        "One more thing on cost: Pro at $5.99/mo unlocks unlimited custom palettes and your own wallpaper, and Team at $12.99/mo covers 5 seats with shared team themes. If all you want is one of eight finished themes you can live with for a year, the free tier is enough — you do not need to pay to act on this list. The 30-day refund window keeps the downside small either way.",
        { type: 'h2', text: "FAQ" },
        {
          type: 'faq',
          items: [
            { q: 'Are all ten themes free?', a: 'No. The free tier includes 8 built-in themes; the rest sit behind Pro. Kung Fu Women\u2019s Football ships with the installer and works immediately.' },
            { q: 'Does switching themes modify official Codex files?', a: 'No. Everything runs through local CDP runtime injection. app.asar is never written to, and stopping the tool restores the original UI instantly.' },
            { q: 'How long should I keep a theme before switching?', a: 'At least a week. Under a week you cannot tell how it behaves during your most tired hours, and that is the situation that actually decides whether it stays.' },
            { q: 'Why are Solarized and Monokai not on this list?', a: 'This list only covers themes you can actually install from the Codex Skin Studio gallery. Names that are not in the gallery are not on the list.' },
          ],
        },
        { type: 'h2', text: "About Codex Skin Studio" },
        "Codex Skin Studio (codex-skin-studio.shop) themes the Codex desktop app through local CDP injection: no official files edited, one-click restore. To see how these ten actually look, open the gallery; to work out where free ends and Pro begins, check the pricing page; more palette breakdowns live on the blog index.",
        { type: 'cta', text: "Browse the theme gallery →", href: '/en/gallery' },
        { type: 'cta', text: "See pricing →", href: '/en/pricing' },
        { type: 'cta', text: "More theme write-ups →", href: '/en/blog' },
      ],
    },
  },
  {
    slug: 'codex-themes-developer-productivity',
    date: '2026-09-04',
    title: {
      zh: `Codex 主题与效率：科学还是玄学`,
      en: `Codex Themes and Developer Productivity: Science or Myth?`,
    },
    description: {
      zh: `Codex 主题与效率，到底是科学还是玄学？一篇大白话：换肤真正影响什么、如何按作息挑主题，以及一个这周就能跑的 10 分钟实验。`,
      en: `Do Codex themes change developer productivity, or is it a myth? A plain look at what theming actually affects, how to pick a theme by your coding schedule, and a 10-minute test to run.`,
    },
    content: {
      zh: [
        `Codex 主题与效率，到底是不是玄学？换一套主题，真的能提升开发者效率，还是说这整件事只是程序员给自己编的安慰故事？老实说，答案在两者之间。换主题不会让你周五就变成更快的开发者，但合适的 Codex 主题能消掉那些一整天累积起来的小摩擦：眼睛累、视觉噪点，还有找光标那半秒钟。`,
        { type: 'h2', text: `关于主题和专注，我们真正知道什么` },
        `研究屏幕阅读的人，共识其实很朴素：对比度比颜色重要；舒服与否，在你最累的那几个小时最要命，而不是精神最好的时候；一套你忘了它存在的主题，才是好主题。这些都不是玄学，但都是真的。`,
        { type: 'h2', text: `主题能改变三件事，还有一件改不了` },
        `下面这部分才值得你花时间。Codex 主题改变的是界面给你的感觉，不是模型怎么思考。`,
        {
          type: 'ul',
          items: [
            `眼睛疲劳：暗色、高对比的主题在弱光下更省眼。这是争议最小的一条。`,
            `视觉噪点：更克制的配色，帮你更快找到当前标签页和光标。`,
            `心情：你喜欢的主题，会让你在键盘前多待一会儿。很小，但会累积。`,
            `它改不了什么：token 用量、回答质量、Codex 跑得快不快。换肤只动 CSS 和背景图。`,
          ],
        },
        { type: 'h2', text: `别按好看选主题，按你几点写代码选` },
        `大多数人挑主题像挑手机壁纸，这顺序反了。应该按作息挑。如果你晚上九点后才写代码，一套暗色、配色克制的主题，比亮色主题更扛用；如果你要开视频会议演示，干净亮色主题在屏幕共享里显得更专业。`,
        { type: 'h2', text: `这周就能跑的 10 分钟小实验` },
        {
          type: 'ul',
          items: [
            `应用一套主题，打开一个真实文件，别用 demo。`,
            `计时 25 分钟读代码，记下你眯眼的那一刻。`,
            `明天同一时间，换第二套主题重复一次。`,
            `留下你最后才眯眼的那套，忽略只是截图好看的那套。`,
          ],
        },
        { type: 'h2', text: `Codex Skin Studio 在哪` },
        `Codex Skin Studio（codex-skin-studio.shop）通过本机 CDP 注入给 Codex 桌面端换肤，不碰任何官方文件，Codex 升级也不会把你调好的样子冲掉。免费档内置 8 款精选主题，Pro 解锁自定义配色和自己的背景图。我自己留了两套预设：一套暗色给夜里，一套亮色给客户通话，一键切换。`,
        {
          type: 'faq',
          items: [
            { q: `Codex 主题能让我写得更快吗？`, a: `不能直接。它减少疲劳和视觉噪点，帮你更久地保持专注。速度还是来自练习，不是来自配色。` },
            { q: `换肤会让 Codex 变慢吗？`, a: `不会。只注入 CSS 和背景图，从不动逻辑代码，所以模型回答和任务执行都不受影响。` },
            { q: `最适合深夜写代码的是哪款 Codex 主题？`, a: `暗色、配色克制、对比度高的主题。在弱光环境下，它比亮色或装饰很重的主题更护眼。` },
            { q: `切换主题会搞坏我的环境吗？`, a: `不会。Codex Skin Studio 在运行时应用主题，停止即还原，切换从不动官方文件，也不碰你的项目。` },
          ],
        },
        { type: 'h2', text: `挑一套配得上你真实作息的主题` },
        `别再按截图选主题了。按你真正写代码的时间选，跑一遍 10 分钟实验，留下那套赢得一席之地的。Codex Skin Studio 会让你挑好的预设在每次升级后都还在。`,
        { type: 'cta', text: `浏览主题库 →`, href: `/zh/gallery` },
        { type: 'cta', text: `查看定价与 Pro 功能 →`, href: `/zh/pricing` },
        { type: 'cta', text: `读 2026 主题盘点 →`, href: `/zh/blog/top-10-best-codex-themes-2026/` },
      ],
      en: [
        `Do Codex themes affect developer productivity, or is the whole idea just a myth programmers tell themselves? The honest answer sits between the two. A theme will not turn you into a faster coder by Friday, but the right Codex theme cuts the small frictions that pile up over a long day: eye strain, visual noise, and the half-second it takes to find your cursor.`,
        { type: 'h2', text: `What we actually know about themes and focus` },
        `People who study reading on screens agree on a few plain points. Contrast beats color. Comfort matters most during your tired hours, not your fresh ones. And a theme you stop noticing is doing its job. None of that is magic, but all of it is real.`,
        { type: 'h2', text: `Three things a theme changes, and one it doesn't` },
        `Here is the part worth your attention. A Codex theme changes how the interface feels, not how the model thinks.`,
        {
          type: 'ul',
          items: [
            `Eye strain: a dark, high-contrast theme lowers fatigue in low light. This is the claim with the most agreement.`,
            `Visual noise: a calmer palette helps you find the active tab and the cursor faster.`,
            `Mood: a theme you like keeps you at the keyboard a little longer. Small, but it compounds.`,
            `What it does not change: token usage, answer quality, or how fast Codex runs. Theming touches CSS and wallpaper only.`,
          ],
        },
        { type: 'h2', text: `Pick a theme by when you code, not by how it looks` },
        `Most people choose a theme the way they choose a phone wallpaper. That is backwards. Pick by schedule instead. If you code after 9pm, a dark theme with restrained accents will serve you better than a bright one. If you present on calls, a clean light theme reads as more professional through screen share.`,
        { type: 'h2', text: `A 10-minute test you can run this week` },
        {
          type: 'ul',
          items: [
            `Apply one theme and open a real file, not a demo.`,
            `Set a timer for 25 minutes and read code. Note the moment you squint.`,
            `Repeat with a second theme at the same hour tomorrow.`,
            `Keep the one where you squinted last. Ignore the one that just looks cool in a screenshot.`,
          ],
        },
        { type: 'h2', text: `Where Codex Skin Studio fits` },
        `Codex Skin Studio (codex-skin-studio.shop) themes the Codex desktop app through local CDP injection, so no official files are touched and a Codex update never wipes your look. The free tier ships eight curated themes; Pro adds custom palettes and your own wallpaper. I keep two presets, one dark for nights and one light for client calls, and switch in a click.`,
        {
          type: 'faq',
          items: [
            { q: `Do Codex themes make you code faster?`, a: `Not directly. They reduce fatigue and visual noise, which helps you stay focused longer. Speed still comes from practice, not from a color scheme.` },
            { q: `Will theming slow down Codex?`, a: `No. Only CSS and wallpaper images are injected, never logic code, so model responses and task execution are unaffected.` },
            { q: `What is the best Codex theme for late-night coding?`, a: `A dark theme with restrained accents and high contrast. It lowers eye strain during low-light sessions better than a bright or heavily decorated theme.` },
            { q: `Can I switch themes without breaking my setup?`, a: `Yes. Codex Skin Studio applies themes at runtime and reverts instantly, so switching never edits official files or your projects.` },
          ],
        },
        { type: 'h2', text: `Try a theme that matches your real schedule` },
        `Stop picking themes by screenshot. Pick by the hour you actually code, run the 10-minute test, and keep the one that earns its place. Codex Skin Studio keeps your presets safe across updates.`,
        { type: 'cta', text: `Browse the theme gallery →`, href: `/en/gallery` },
        { type: 'cta', text: `See pricing and Pro features →`, href: `/en/pricing` },
        { type: 'cta', text: `Read the 2026 theme roundup →`, href: `/en/blog/top-10-best-codex-themes-2026/` },
      ],
    },
  },
  {
    slug: 'high-contrast-codex-themes-reduce-eye-strain',
    date: '2026-09-06',
    title: {
      zh: `高对比度主题：减少眼疲劳的 3 个选择`,
      en: `High Contrast Codex Themes: 3 Picks to Reduce Eye Strain`,
    },
    description: {
      zh: `Codex 高对比度主题如何帮你在长时间写代码时减少眼疲劳？这篇给出 3 款适合深色、高对比的 Codex 主题选择，以及挑选时该看的参数。`,
      en: `How do high contrast Codex themes cut eye strain during long coding sessions? Three dark, high-contrast picks, plus the numbers to check when you choose.`,
    },
    content: {
      zh: [
        'Codex 高对比度主题，是长时间对着编辑器的人最该挑对的一类。你常常说不清从哪一刻起眼睛开始发酸，多半不是你累了，而是界面的对比和亮度在悄悄拖你后腿。这篇直接给 3 款能减少眼疲劳的 Codex 主题选择，再讲清楚挑主题时到底看哪几个参数。',
        { type: 'h2', text: '为什么对比度比颜色更影响眼疲劳' },
        '很多人挑主题先挑颜色，暗色还是亮色，粉还是蓝。但研究阅读舒适度的结论一直很一致：对比度比色相重要。文字和背景拉开足够的反差，瞳孔不用频繁调节，眼疲劳就来得慢。一个偏灰的暗色主题看着高级，写两小时可能比纯黑底白字更累。',
        { type: 'h2', text: '3 款适合护眼的 Codex 高对比度主题' },
        '下面三款都走「深底、亮字、克制动效」的路线，在主题库里都能直接应用。',
        {
          type: 'ul',
          items: [
            '暗夜限定（Purple Night）：近黑底配冷白字，对比够高，紫色只用在强调处，不抢视线。',
            '舞台黑金（Stage Black Gold）：黑底配高亮金，关键元素一眼可见，适合需要快速扫代码的场景。',
            '清透定制（Clear Custom）：底色干净、文字接近纯白，自定义时把对比压到最大最稳。',
          ],
        },
        { type: 'h2', text: '怎么判断一个主题真的护眼' },
        '别只看截图。三个参数比颜值更实在：',
        {
          type: 'ul',
          items: [
            '正文对比度：文字与背景的明度差越大越好，目标对比比至少 7:1。',
            '强调色饱和度：装饰色别太高饱和，否则长时间看会刺眼。',
            '背景纯净度：避免渐变和噪点纹理，纯色底最不费眼。',
          ],
        },
        { type: 'h2', text: '把护眼主题接回你的真实作息' },
        '护眼主题也不是全天候万能。夜里写代码用高对比暗色，白天在窗边或开视频会议时，一套对比清晰的亮色主题反而更舒服。Codex Skin Studio 的预设切换是运行时的，开会前点一下就能换，不碰官方文件。',
        {
          type: 'faq',
          items: [
            { q: '高对比主题会不会让亮色界面太刺眼？', a: '会，如果对比拉到极端。护眼的关键是「够用就好」：暗底亮字控制在 7:1 上下，而不是盲目追求纯黑纯白。' },
            { q: 'Codex 高对比度主题在哪里找？', a: '都在主题库里，像暗夜限定、舞台黑金、清透定制都能直接应用；想更狠的对比，用清透定制自己调。' },
            { q: '换主题能真的减少眼疲劳吗？', a: '能减轻一部分。它不改变你用眼的总时长，但更稳的对比让瞳孔少调节，下午的酸涩会推迟。' },
            { q: '主题会改官方文件吗？', a: '不会。Codex Skin Studio 通过本机 CDP 注入换肤，停止即还原，Codex 升级也不会把你调好的样子冲掉。' },
          ],
        },
        { type: 'h2', text: '挑一套真正护眼的高对比度主题' },
        '别再用一张截图决定。按对比度、饱和度、背景纯净度三件事去挑，再跑一个下午的真实文件看看酸不酸。Codex Skin Studio 让你挑好的预设在每次升级后都还在。',
        { type: 'cta', text: '浏览主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: '看 2026 主题榜单 →', href: '/zh/guides/best-codex-themes' },
        { type: 'cta', text: '查看定价与 Pro →', href: '/zh/pricing' },
      ],
      en: [
        'High contrast Codex themes are the category most people who stare at an editor all day should get right. You usually can\'t name the moment your eyes start to burn — it\'s rarely that you\'re tired, more that the interface\'s contrast and brightness are quietly working against you. This post gives three high contrast Codex themes that cut eye strain, then explains exactly which numbers to check when picking.',
        { type: 'h2', text: 'Why contrast beats color for eye strain' },
        'Most people pick a theme by color first: dark or light, pink or blue. But the research on reading comfort is consistent — contrast matters more than hue. When text and background sit far apart in luminance, your pupils stop adjusting constantly, and eye strain arrives later. A muted dark theme looks classy but can tire you faster than plain black-on-white after two hours.',
        { type: 'h2', text: '3 high contrast Codex themes that are easy on the eyes' },
        'All three below run a deep base, bright text, and calm motion. Each applies straight from the gallery.',
        {
          type: 'ul',
          items: [
            'Purple Night: near-black base with cool white text. High contrast, purple only as an accent so it never steals focus.',
            'Stage Black Gold: black base with bright gold. Key elements pop, good for quickly scanning code.',
            'Clear Custom: clean base, near-pure-white text. Push the contrast to its max and steadiest when you customize.',
          ],
        },
        { type: 'h2', text: 'How to tell a theme is actually easy on the eyes' },
        'Don\'t judge by the screenshot. Three numbers matter more than looks:',
        {
          type: 'ul',
          items: [
            'Body contrast: the bigger the luminance gap between text and background, the better. Aim for at least a 7:1 ratio.',
            'Accent saturation: keep decorative colors low-saturation, or they sting over long sessions.',
            'Background cleanliness: avoid gradients and noisy textures. A flat base is the least tiring.',
          ],
        },
        { type: 'h2', text: 'Match the theme to your real schedule' },
        'An eye-friendly theme isn\'t a round-the-clock fix either. Use a high-contrast dark theme for late-night coding; during the day by a window or on a screen-share call, a clean light theme with solid contrast actually feels better. Codex Skin Studio switches presets at runtime, so one click before a meeting changes the look without touching official files.',
        {
          type: 'faq',
          items: [
            { q: 'Won\'t a high-contrast theme make a light UI too harsh?', a: 'Only if you push it to the extreme. The point is enough, not maximum: keep dark-base bright-text around 7:1 rather than chasing pure black and pure white.' },
            { q: 'Where do I find high contrast Codex themes?', a: 'They\'re all in the gallery. Purple Night, Stage Black Gold, and Clear Custom apply in a click; for even harder contrast, tune Clear Custom yourself.' },
            { q: 'Can a theme really reduce eye strain?', a: 'It cuts a real part of it. It doesn\'t shorten your total screen time, but steadier contrast means your pupils adjust less, so the afternoon burn comes later.' },
            { q: 'Does theming edit official files?', a: 'No. Codex Skin Studio injects themes through local CDP at runtime and reverts on stop, so a Codex update never wipes your setup.' },
          ],
        },
        { type: 'h2', text: 'Pick a high contrast theme that actually protects your eyes' },
        'Stop deciding from a screenshot. Check contrast, saturation, and background cleanliness, then run a real file for one afternoon and see when you squint. Codex Skin Studio keeps your presets safe across updates.',
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'See the 2026 theme list →', href: '/en/guides/best-codex-themes' },
        { type: 'cta', text: 'Pricing and Pro →', href: '/en/pricing' },
      ],
    },

  },
  {
    slug: "5-dark-codex-themes-developers-love",
    title: { en: "5 Dark Codex Themes Developers Love in 2026", zh: "2026 年开发者最爱的 5 款深色 Codex 主题" },
    date: "2026-09-08",
    description: { en: "Discover the best dark-themed Codex skins that boost productivity and reduce eye strain during long coding sessions.", zh: "探索 2026 年最佳深色 Codex 皮肤，提升编码效率并减少长时间工作的眼部疲劳。" },
    content: {
      zh: [
        { type: "h2", text: "为什么深色主题很重要" },
        { type: "p", text: "深色主题已经成为长时间面对屏幕的开发者的必需品。它们能减轻眼部疲劳、在 OLED 屏幕上更省电，并让你的开发环境看起来更专业、更简洁。" },
        { type: "h2", text: "1. Tokyo Night Codex 主题" },
        { type: "p", text: "Tokyo Night 在 2026 年仍是最受欢迎的深色主题之一。它深蓝紫的配色搭配精心挑选的强调色，在可读性和美观之间取得了完美的平衡。" },
        { type: "h2", text: "2. Dracula 官方主题" },
        { type: "p", text: "Dracula 主题把它标志性的吸血鬼配色带到了 Codex。凭借高对比度和鲜艳的语法高亮，它非常适合想让代码更醒目的开发者。" },
        { type: "h2", text: "3. Catppuccin Mocha" },
        { type: "p", text: "Catppuccin 的 Mocha 变体提供温暖、舒适的深色主题和柔和的粉彩。它在长时间使用时对眼睛很温和，同时保持出色的可读性。" },
        { type: "h2", text: "4. One Dark Pro" },
        { type: "p", text: "One Dark Pro 源自 Atom 编辑器，为 Codex 带来干净、极简的美感。均衡的对比度让它既适合白天也适合夜晚编码。" },
        { type: "h2", text: "5. Nord 主题" },
        { type: "p", text: "Nord 的极地灵感配色提供冷静、柔和的深色主题。它系统化的选色方法确保整个界面的视觉和谐。" },
        { type: "h2", text: "挑选你的深色主题" },
        { type: "p", text: "考虑对比度、颜色可访问性和个人偏好等因素。在最终确定之前，每个主题至少试用一周。" },
        { type: "h2", text: "常见问题" },
        { type: "faq", items: [
          { q: "深色主题真的能减轻眼疲劳吗？", a: "能，尤其是在低光环境下。它们减少了蓝光暴露和眩光。" },
          { q: "切换主题会丢失我的设置吗？", a: "大多数 Codex 主题在切换时会保留你的配置。" },
          { q: "哪个主题最适合夜间编码？", a: "Tokyo Night 和 Nord 是深夜时段的热门选择。" }
        ]}
      ],
      en: [
        { type: "h2", text: "Why Dark Themes Matter" },
        { type: "p", text: "Dark themes have become essential for developers who spend hours in front of screens. They reduce eye strain, save battery on OLED displays, and provide a sleek, professional look to your development environment." },
        { type: "h2", text: "1. Tokyo Night Codex Theme" },
        { type: "p", text: "Tokyo Night remains one of the most popular dark themes in 2026. Its deep blue-purple palette with carefully chosen accent colors creates a perfect balance between readability and aesthetics." },
        { type: "h2", text: "2. Dracula Official Theme" },
        { type: "p", text: "The Dracula theme brings its signature vampire-inspired color scheme to Codex. Known for its high contrast and vibrant syntax highlighting, it's perfect for developers who want their code to pop." },
        { type: "h2", text: "3. Catppuccin Mocha" },
        { type: "p", text: "Catppuccin's Mocha variant offers a warm, cozy dark theme with soft pastels. It's gentle on the eyes during long sessions while maintaining excellent readability." },
        { type: "h2", text: "4. One Dark Pro" },
        { type: "p", text: "Originally from Atom editor, One Dark Pro brings its clean, minimal aesthetic to Codex. The balanced contrast makes it suitable for both day and night coding." },
        { type: "h2", text: "5. Nord Theme" },
        { type: "p", text: "Nord's arctic-inspired palette offers a cool, muted dark theme. Its systematic approach to color selection ensures visual harmony across your entire interface." },
        { type: "h2", text: "Choosing Your Dark Theme" },
        { type: "p", text: "Consider factors like contrast ratio, color accessibility, and personal preference. Test each theme for at least a week before committing." },
        { type: "h2", text: "FAQ" },
        { type: "faq", items: [
          { q: "Do dark themes really reduce eye strain?", a: "Yes, especially in low-light environments. They reduce blue light exposure and glare." },
          { q: "Can I switch themes without losing my settings?", a: "Most Codex themes preserve your configuration when switching." },
          { q: "Which theme is best for night coding?", a: "Tokyo Night and Nord are popular choices for late-night sessions." }
        ]}
      ],
    }
  },
  {
    slug: "pink-vs-dark-codex-themes",
    date: "2026-09-09",
    title: { en: "Pink vs Dark Codex Themes: How to Choose by Scenario", zh: "粉系 vs 暗黑系：不同场景下怎么选 Codex 主题" },
    description: { en: "Pink or dark Codex themes is a question about your room, your hours, and your work. Here is how to pick by scenario instead of by mood.", zh: "选粉系还是暗黑系 Codex 主题，取决于工作环境、编码时段和任务类型。本文按场景给出判断依据。" },
    content: {
      zh: [
        "在粉色和暗黑 Codex 主题之间做选择，看的是你的工作环境、编码时段和任务类型，而不是单纯哪个好看。这篇按场景把两边都讲清楚。",
        { type: "h2", text: "什么时候选粉色主题" },
        "粉色主题在几种具体情况下最合适。",
        {
          type: "ul",
          items: [
            "**创意与设计**：做 UI/UX、插画或任何偏视觉的工作时，粉色氛围更松弛，长时间盯着也不容易紧绷。",
            "**白天编码**：房间有自然光时，浅粉主题不会像深色主题那样和环境的亮度较劲。",
            "**情绪状态**：柔和的粉调读起来偏平静，项目压得紧的时候会比高对比配色舒服。",
            "**单纯喜欢**：有些开发者就是觉得粉色好看。它比又一套深色主题更有辨识度，也更少见。"
          ]
        },
        { type: "h2", text: "什么时候选暗黑主题" },
        "另外半天的场景，暗黑主题更有优势。",
        {
          type: "ul",
          items: [
            "**夜间编码**：房间光线暗时，进入眼睛的总光量更小，深夜写代码没那么累。",
            "**OLED 续航**：深色像素耗电更低，在 OLED 屏幕上这个差别是实打实的。",
            "**专注与沉浸**：深色背景把桌面其余部分压下去，视线更容易收在代码上。",
            "**熟悉的默认值**：大多数 IDE 和终端本来就是深色，界面看起来更像一个 coding 环境。"
          ]
        },
        { type: "h2", text: "混合用法：按时间段切换" },
        "不必只认一套。常见的做法是按时间轮换：",
        {
          type: "ul",
          items: [
            "**上午到下午**：粉系或其他浅色主题，适合创意类工作",
            "**傍晚到夜间**：暗黑主题，适合专注写代码",
            "**周末**：看项目类型随意切"
          ]
        },
        { type: "h2", text: "值得一试的粉色主题" },
        {
          type: "ul",
          items: [
            "**Sakura Pink Dawn**：柔和粉彩，适合创意工作和白天",
            "**Romantic Rose**：暖粉，适合 UI 设计和插画",
            "**Berry Light Journal**：干净粉，适合写文档和阅读"
          ]
        },
        { type: "h2", text: "值得一试的暗黑主题" },
        {
          type: "ul",
          items: [
            "**Gothic Void Expedition**：深黑，适合夜间编码和专注",
            "**Cyber Neon**：深色配亮色点缀，适合游戏和创意编码",
            "**Amber Nocturne**：暖深色，适合深夜工作"
          ]
        },
        { type: "h2", text: "决定之前怎么试" },
        {
          type: "ul",
          items: [
            "先用一到两天，不要看完截图就下结论。",
            "留意眼睛在哪里容易累，专注能维持多久。",
            "对照你实际工作房间的光线，而不是晚上关灯时的感受。",
            "不合适就换，主题随时可以切。"
          ]
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "换主题会丢掉我的设置吗？", a: "多数 Codex 主题在切换时会保留你的配置，字号、快捷键这些自定义项都不受影响。" },
            { q: "粉色主题比暗黑主题更护眼吗？", a: "取决于环境。光线亮时粉色更舒服，光线暗时暗黑更舒服。比起主题本身，进入眼睛的总光量影响更大。" },
            { q: "长时间编码选哪一套？", a: "超过几个小时的连续编码，不少开发者会选暗黑。偏好因人而异，建议各用一两天再定。" }
          ]
        },
        { type: "cta", text: "去主题库挑一套 →", href: "/zh/gallery" }
      ],
      en: [
        "Choosing between pink and dark Codex themes comes down to your room, your hours, and the kind of coding you do. This guide walks through both and helps you pick.",
        { type: "h2", text: "When to choose pink themes" },
        "Pink themes work best in a few specific situations.",
        {
          type: "ul",
          items: [
            "**Creative work and design**: for UI/UX, illustration, or any visual task, pink sets a warm and open mood that holds up over a long session.",
            "**Daytime coding**: in a room with natural light, a light pink theme keeps your monitor from fighting the ambient brightness the way a dark theme does.",
            "**Mood**: soft pink tones read as calm rather than urgent, which helps when a project has you tense.",
            "**Aesthetic preference**: some developers simply like how pink looks. It is more distinctive and less common than yet another dark theme."
          ]
        },
        { type: "h2", text: "When to choose dark themes" },
        "Dark themes earn their place in the other half of the day.",
        {
          type: "ul",
          items: [
            "**Night coding**: less light reaches your eyes in a dim room, so late sessions feel less tiring.",
            "**OLED battery**: dark pixels draw less power, and on an OLED panel the gain is real.",
            "**Focus and immersion**: a dark background hides the rest of the desktop and narrows attention to the code.",
            "**A familiar default**: most IDEs and terminals ship dark, so the layout already feels like a coding environment."
          ]
        },
        { type: "h2", text: "Hybrid: switch by time of day" },
        "You do not have to commit to one. Many developers rotate by time of day:",
        {
          type: "ul",
          items: [
            "**Morning and afternoon**: pink or another light theme for creative work",
            "**Evening and night**: a dark theme for focused coding",
            "**Weekends**: whichever matches the project"
          ]
        },
        { type: "h2", text: "Popular pink Codex themes" },
        {
          type: "ul",
          items: [
            "**Sakura Pink Dawn**: soft pastel, good for creative work and daytime",
            "**Romantic Rose**: warm pink, good for UI design and illustration",
            "**Berry Light Journal**: clean pink, good for documentation and reading"
          ]
        },
        { type: "h2", text: "Popular dark Codex themes" },
        {
          type: "ul",
          items: [
            "**Gothic Void Expedition**: deep black, good for night coding and focus",
            "**Cyber Neon**: dark with bright accents, good for gaming and creative coding",
            "**Amber Nocturne**: warm dark, good for late night work"
          ]
        },
        { type: "h2", text: "How to test before committing" },
        {
          type: "ul",
          items: [
            "Apply the theme for one or two days.",
            "Note where your eyes strain and how long you stay focused.",
            "Check whether it matches the light in the room you actually work in.",
            "Switch if it does not. Nothing is locked in."
          ]
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Can I switch themes without losing my settings?", a: "Most Codex themes keep your configuration when you switch. Font size, keybindings, and other customizations stay as they are." },
            { q: "Are pink themes easier on the eyes than dark ones?", a: "It depends on the room. Pink wins in bright light, dark wins in low light. The theme matters less than the total light reaching your eyes." },
            { q: "Which is better for a long coding session?", a: "Many developers pick dark for sessions that stretch past a few hours. Preference still varies, so test both for a day." }
          ]
        },
        { type: "cta", text: "Browse pink, dark, and everything between in the gallery →", href: "/en/gallery" }
      ],
    },
  },
  {
    slug: "sci-fi-vs-clean-codex-themes",
    date: "2026-09-10",
    title: { en: "Sci-Fi vs Clean Codex Themes: Which Fits You?", zh: "科幻风 vs 清新风：哪种 Codex 主题更适合你" },
    description: { en: "Sci-fi and clean Codex themes solve different problems. Compare eye strain, readability, and OLED battery, then pick by how and when you code.", zh: "科幻风和清新风 Codex 主题解决的是不同问题。从眼疲劳、可读性、OLED 续航几个维度对比，按编码习惯来选。" },
    content: {
      zh: [
        "选 Codex 主题不只是好看不好看的问题，它会影响你读代码的速度。最常被拿来对比的两派是科幻（暗色、霓虹、赛博朋克）和清新（极简、浅色、透气）。你适合哪一派？",
        { type: "h2", text: "科幻主题：赛博朋克味" },
        "热门选择：Cyber Neon、Gothic Void、Neon Cyberpunk。",
        {
          type: "ul",
          items: [
            "**外观**：接近纯黑的背景，配青色、品红或电光蓝的霓虹点缀",
            "**可读性**：对比度高，语法色之间分得清楚",
            "**额外装饰**：常见边框和发光效果",
            "**适合**：深夜写代码、追求沉浸感、常用终端或命令行，以及觉得浅色主题容易分心的人",
            "**要注意**：有些科幻配色把对比度推得太高，几小时之后，发光效果本身就开始让眼睛累"
          ]
        },
        { type: "h2", text: "清新主题：极简的克制" },
        "热门选择：Clear Glass、Mono Terminal、Light Airy。",
        {
          type: "ul",
          items: [
            "**外观**：浅色或中性背景，点缀色克制",
            "**可读性**：以最大可读性为目标",
            "**额外装饰**：几乎没有，这本身就是特点",
            "**适合**：全天编码、需要共享屏幕的协作场景、想要清晰界面的新手，以及文档密集的工作",
            "**要注意**：有些开发者觉得清新主题太素，少了深色主题给编辑器的那种个性"
          ]
        },
        { type: "h2", text: "逐项对比" },
        "同样的几个维度，两边放在一起看。",
        {
          type: "ul",
          items: [
            "**连续 8 小时以上的眼疲劳**：科幻偏高，清新偏低",
            "**可读性**：科幻靠对比度做到良好，清新是优秀",
            "**观感吸引力**：科幻高，清新中等",
            "**上手成本**：科幻中等，清新低",
            "**OLED 续航**：科幻更好，清新更差",
            "**和别人一起看屏幕**：科幻较差，清新更好"
          ]
        },
        { type: "h2", text: "混合方案" },
        "不必永远只选一边。常见的轮换是这样：",
        {
          type: "ul",
          items: [
            "**早上**：清新主题，保证清晰",
            "**晚上**：科幻主题，追求沉浸",
            "**周末**：换套实验性的主题换个心情"
          ]
        },
        { type: "h2", text: "怎么选" },
        {
          type: "ul",
          items: [
            "你什么时候写代码最多？白天偏清新，夜里偏科幻。",
            "你经常和别人一起看代码吗？清新更适合共享屏幕。",
            "你在意编辑器的观感吗？在意的话科幻更对味。",
            "眼睛容易累吗？清新是更稳的默认选项。"
          ]
        },
        { type: "h2", text: "常见问题" },
        {
          type: "faq",
          items: [
            { q: "科幻主题会伤眼吗？", a: "主题本身不会。真正让眼睛累的是过高的对比度和过重的发光效果，可以选背景更深、点缀色只用一种的科幻主题。" },
            { q: "清新主题只适合新手吗？", a: "不是。很多有经验的开发者整天用浅色主题，因为房间光线亮时它读起来更轻松。" },
            { q: "两套都想留、随时切换可以吗？", a: "可以。把清新和科幻各存一套预设，光线变了就切过去。" }
          ]
        },
        "两派都可以自己调配色和背景。具体怎么做可以看自定义指南 /guides/customize，完整主题库在画廊里。",
        { type: "cta", text: "去画廊挑科幻和清新主题 →", href: "/zh/gallery" }
      ],
      en: [
        "Choosing a Codex theme is not only about looks. It changes how fast you can read your own code. The two camps that come up most are sci-fi, meaning dark and neon, and clean, meaning minimal and light. Which one fits you?",
        { type: "h2", text: "Sci-fi themes: the cyberpunk look" },
        "Popular picks: Cyber Neon, Gothic Void, Neon Cyberpunk.",
        {
          type: "ul",
          items: [
            "**Look**: near-black backgrounds with neon accents in cyan, magenta, or electric blue",
            "**Readability**: high contrast, so syntax colors separate cleanly",
            "**Extras**: decorative borders and glow effects are common",
            "**Best for**: late-night sessions, developers who want immersion, terminal users, and anyone who finds light themes distracting",
            "**The catch**: some sci-fi palettes push contrast so high that after a few hours the glow becomes the part tiring your eyes"
          ]
        },
        { type: "h2", text: "Clean themes: minimalist elegance" },
        "Popular picks: Clear Glass, Mono Terminal, Light Airy.",
        {
          type: "ul",
          items: [
            "**Look**: light or neutral backgrounds with subtle accents",
            "**Readability**: built for maximum legibility",
            "**Extras**: almost none, which is the point",
            "**Best for**: all-day coding, shared setups, beginners who want clarity, and documentation-heavy work",
            "**The catch**: some developers find clean themes plain and miss the personality a dark theme gives the editor"
          ]
        },
        { type: "h2", text: "Side-by-side comparison" },
        "The same factors, read across both camps.",
        {
          type: "ul",
          items: [
            "**Eye strain past 8 hours**: higher on sci-fi, lower on clean",
            "**Readability**: good on sci-fi thanks to contrast, excellent on clean",
            "**Aesthetic appeal**: high on sci-fi, moderate on clean",
            "**Learning curve**: moderate on sci-fi, low on clean",
            "**OLED battery life**: better on sci-fi, worse on clean",
            "**Working alongside others**: less on sci-fi, more on clean"
          ]
        },
        { type: "h2", text: "The hybrid approach" },
        "You do not have to pick one forever. A common rotation looks like this:",
        {
          type: "ul",
          items: [
            "**Morning**: a clean theme for clarity",
            "**Evening**: a sci-fi theme for immersion",
            "**Weekends**: an experimental theme for fun"
          ]
        },
        { type: "h2", text: "How to choose" },
        {
          type: "ul",
          items: [
            "When do you code most? Day points to clean, night points to sci-fi.",
            "Do you review code with others often? Clean is easier to share on a call.",
            "Does the look of the editor matter to you? Sci-fi rewards that.",
            "Do your eyes tire quickly? Clean is the safer default."
          ]
        },
        { type: "h2", text: "FAQ" },
        {
          type: "faq",
          items: [
            { q: "Do sci-fi themes hurt your eyes?", a: "Not on their own. High contrast and heavy glow are the parts that tire eyes, so choose a sci-fi theme with a darker background and one restrained accent color." },
            { q: "Are clean themes only for beginners?", a: "No. Plenty of experienced developers use a light theme all day because it stays readable in a bright room." },
            { q: "Can I keep both and switch?", a: "Yes. Save a clean preset and a sci-fi preset, then swap whenever the light changes." }
          ]
        },
        "Either way, you can tune colors and backgrounds yourself. The customization guide at /guides/customize walks through it, and the full catalog sits in the gallery.",
        { type: "cta", text: "Browse sci-fi and clean themes →", href: "/en/gallery" }
      ],
    },
  },
  {
    slug: "focus-mode-codex-theme-setups",
    date: "2026-09-11",
    title: { en: "Developer Essentials: Codex Theme Setups for Focus Mode", zh: "开发者必备：专注模式下的 Codex 主题搭配" },
    description: { en: "Focus is an environment problem, not a willpower problem. Here is how to build a Codex theme that keeps your eyes on the code.", zh: "专注是环境问题，不是意志力问题。本文讲怎么搭一套让视线留在代码上的 Codex 主题。" },
    content: {
      zh: [
        "专注不是靠意志力硬撑，而是靠环境。对天天泡在 Codex 里的开发者来说，主题就是最容易调、见效最快的那一环。这篇讲的是怎么按「专注模式」来搭主题，而不是按好看程度挑。",
        {
          "type": "h2",
          "text": "为什么主题能影响专注"
        },
        "每一次视觉切换，大脑都要重新定位一次。高饱和的背景、跳动的强调色、和代码同色系的侧边栏，都会不断地把你从代码里拽出来。专注型主题的目标只有一个：让视线永远落回正文。",
        {
          "type": "h2",
          "text": "专注型主题的三条规则"
        },
        {
          "type": "ul",
          "items": [
            "**低饱和背景**：背景用近黑或深灰，不用彩色渐变",
            "**强调色克制**：整个界面只保留一种强调色，且只在光标和选中态出现",
            "**语法色分层清晰**：关键字、字符串、注释三者的亮度差至少两档"
          ]
        },
        {
          "type": "h2",
          "text": "推荐的三套搭配"
        },
        {
          "type": "ul",
          "items": [
            "**深夜写作**：近黑背景 + 低饱和蓝强调 + 暖色注释，适合长时间读代码",
            "**白天会议**：浅灰背景 + 深蓝强调 + 高对比语法色，投屏也看得清",
            "**通宵调试**：纯黑背景 + 青绿强调，降低整体亮度，减少夜间眩光"
          ]
        },
        {
          "type": "h2",
          "text": "怎么在 Codex Skin Studio 里落地"
        },
        {
          "type": "ul",
          "items": [
            "在主题库选一个接近目标的底子，别从零开始",
            "进入自定义，把背景饱和度降到 10% 以下",
            "把强调色统一成一个，其余 UI 元素改成灰阶",
            "用实时预览检查语法色是否分得开，再保存"
          ]
        },
        {
          "type": "h2",
          "text": "常见问题"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "专注模式主题需要额外插件吗？",
              "a": "不需要。Codex Skin Studio 通过 CDP 注入，选中主题后直接生效。"
            },
            {
              "q": "低饱和主题会不会看不清？",
              "a": "只要语法色之间的亮度差够大就不会。关键是对比度，不是饱和度。"
            },
            {
              "q": "可以给不同项目配不同主题吗？",
              "a": "可以，把预设分别导出，按项目切换即可。"
            }
          ]
        },
        {
          "type": "cta",
          "text": "去主题库挑一套专注配置 →",
          "href": "/zh/gallery"
        }
      ],
      en: [
        "Focus is not a willpower problem. It is an environment problem. For developers who live inside Codex all day, the theme is the cheapest and fastest lever you can pull. This piece is about building a theme for focus mode, not for looks.",
        {
          "type": "h2",
          "text": "Why a theme affects focus at all"
        },
        "Every visual switch costs you a re-orientation. Saturated backgrounds, blinking accent colors, and a sidebar that shares the same hue as your code all pull your attention away. A focus theme has one job: keep the eye returning to the text.",
        {
          "type": "h2",
          "text": "Three rules for a focus theme"
        },
        {
          "type": "ul",
          "items": [
            "**Low-saturation background**: near-black or dark gray, never a colored gradient",
            "**Restrained accent**: one accent color for the whole UI, used only on the caret and selection",
            "**Clear syntax tiers**: keywords, strings, and comments should differ by at least two brightness steps"
          ]
        },
        {
          "type": "h2",
          "text": "Three setups worth stealing"
        },
        {
          "type": "ul",
          "items": [
            "**Late-night reading**: near-black + muted blue accent + warm comments, built for long code review",
            "**Daytime meetings**: light gray + deep blue accent + high-contrast syntax, legible even on a projector",
            "**Overnight debugging**: pure black + teal accent, lower overall luminance to cut glare"
          ]
        },
        {
          "type": "h2",
          "text": "How to build it in Codex Skin Studio"
        },
        {
          "type": "ul",
          "items": [
            "Pick a gallery theme close to your target, do not start from scratch",
            "Open customization and drop background saturation below 10%",
            "Collapse every accent to a single color and push the rest of the UI to grayscale",
            "Check with live preview that syntax colors stay distinguishable, then save"
          ]
        },
        {
          "type": "h2",
          "text": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Do focus-mode themes need an extra plugin?",
              "a": "No. Codex Skin Studio injects via CDP, so a theme takes effect as soon as you apply it."
            },
            {
              "q": "Will a low-saturation theme be hard to read?",
              "a": "Not if the brightness gap between syntax colors is large enough. Contrast is what matters, not saturation."
            },
            {
              "q": "Can I use different themes per project?",
              "a": "Yes. Export your presets separately and switch per project."
            }
          ]
        },
        {
          "type": "cta",
          "text": "Find a focus setup in the gallery →",
          "href": "/en/gallery"
        }
      ],
    },
  },
  {
    slug: "night-owl-codex-themes",
    date: "2026-09-12",
    title: { en: "Night Owl Special: Best Codex Themes for Late-Night Coding", zh: "夜猫子专属：最适合夜间编码的 Codex 主题" },
    description: { en: "A practical look at the best codex themes for night coding, with contrast numbers, six presets that hold up after midnight, and a five-minute test.", zh: "从对比度数据出发，梳理最适合夜间编码的 Codex 主题，给出六套凌晨还扛得住的预设和一套五分钟验证方法。" },
    content: {
      zh: [
        "深夜写代码对主题的要求，和早上开例会时完全不同。如果你正在找最适合夜间编码的 Codex 主题，也就是 best codex themes night coding 这个需求，重点会从「截图上好不好看」转向「关灯之后还能不能看清」。房间变暗，瞳孔放大，中午看着清爽的配色，到了凌晨可能就变成刺眼的光源。这篇讲清楚夜间到底变了什么、哪几类主题能扛住、以及上手前该怎么验证。",
        {
          "type": "h2",
          "text": "夜间编码的 Codex 主题为什么会不一样"
        },
        "夜里有两件事会变。显示器成了房间里最亮的物体，绝对亮度比规格表上的对比度数值更重要。色彩感知也在漂移，冷蓝色看起来比实测更亮，暖色则会被压平。一套为明亮办公室调好的主题，在顶灯关掉之后两头都不讨好。",
        "所以夜间主题不等于深色主题。深色背景配上 #ffffff 的纯白正文，凌晨两点照样刺眼。背景只是其中一半。",
        {
          "type": "h2",
          "text": "低对比度深色主题值不值得选"
        },
        "降低文字与背景的对比度，能减少进入眼睛的总光量，这正是 low contrast dark theme coding 这套做法的出发点。道理成立，但有下限。正文对比度低于 4.5:1 之后，阅读就变成了体力活，熬夜时的阅读成本会转化成眯眼和头痛。",
        "目标不是把对比度压到最低，而是在不费力的前提下压到尽可能低。夜间常用的区间大致在 7:1 到 10:1 之间，背景保持在 #0d1117 或更深。",
        {
          "type": "h2",
          "text": "凌晨还扛得住的六套主题"
        },
        "以下数据取自各主题的默认预设，测试条件是屏幕亮度 60%、房间不开灯。",
        {
          "type": "ul",
          "items": [
            "**黑金舞台**：背景 #0b0b0d，正文对比度约 13:1，金色强调偏暖，不会产生蓝光刺眼感",
            "**暗夜紫**：背景 #14101f，正文约 11:1，深紫渐变能压住大屏边缘的泛光",
            "**灵感宇宙**：背景 #05060a，正文约 15:1，星空纹理可以遮掉轻微的屏幕泛白",
            "**Nord Night**：背景 #2e3440，正文约 8:1，本列表里最柔和的一套，眼睛累了优先选它",
            "**Tokyo Night**：背景 #1a1b26，正文约 10:1，蓝紫语法色把字符串和注释分得很清楚",
            "**清透极简深色**：背景 #101013，正文约 12:1，几乎零装饰，只想看代码时用"
          ]
        },
        {
          "type": "h2",
          "text": "五分钟验证一套夜间主题"
        },
        {
          "type": "ul",
          "items": [
            "先把屏幕亮度调到你夜里真正会用的档位，再开始判断",
            "打开一个混合内容的文件：注释、字符串、关键字、以及一段较长的函数体",
            "连续读两分钟，中途不要动显示器，记下视线容易停在哪里",
            "关掉房间的灯再读一遍，重点看光标和选中态是否还看得清",
            "只有两个亮度下语法色都还能分开，才保存这套预设"
          ]
        },
        {
          "type": "h2",
          "text": "常见问题"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "夜间用纯黑背景是不是比近黑更好？",
              "a": "不一定。OLED 面板上纯黑能彻底消除泛光，但 LCD 面板上纯黑容易暴露背光漏光。像 #0d1117 这样的近黑在两种面板上都更稳。"
            },
            {
              "q": "调低屏幕亮度是不是就不用换主题了？",
              "a": "两件事解决的是不同问题，配合使用效果最好。主题管的是文字和背景之间的比例，亮度管的是总出光量。"
            },
            {
              "q": "能不能让夜间主题到点自动切换？",
              "a": "可以。把夜间预设和白天预设分别导出，光线变化时一键切换即可。"
            }
          ]
        },
        "上面这些预设都在 codex-skin-studio.shop 的主题库里，免费版就已经覆盖了大部分夜间友好的选项。想先看完整横评，可以翻 /guides/best-codex-themes 里的对比度数据，也可以直接去 /zh/gallery 逐个预览再安装。今晚先挑一套，用满一周，再按感受微调。",
        {
          "type": "cta",
          "text": "去主题库挑一套夜间配置 →",
          "href": "/zh/gallery"
        }
      ],
      en: [
        "Late nights ask different things of a theme than a Tuesday morning does. If you are hunting for the best codex themes night coding can offer, the priority moves away from how sharp it looks in a screenshot and toward how it holds up at 2 a.m. with the lights off. Room brightness falls, your pupils open up, and a palette that felt crisp at noon turns into a glare source. This guide covers what actually changes after dark, which theme families survive the test, and how to check a theme before you commit to it.",
        {
          "type": "h2",
          "text": "Why a night coding codex theme behaves differently"
        },
        "Two things shift after dark. Your monitor becomes the brightest object in the room, so absolute luminance matters more than the contrast ratio printed on a spec sheet. Color perception drifts as well, and cool blues read brighter than they measure while warm tones flatten out. A theme tuned for a lit office can feel wrong in both directions once the overhead light goes off.",
        "The practical result: night themes are not just dark themes. A dark background paired with a pure white foreground at #ffffff still delivers a hard punch at 2 a.m. The background is only half of the equation. None of this shows up in a theme preview, which is why the same preset can win a screenshot contest and then lose a 1 a.m. debugging session.",
        {
          "type": "h2",
          "text": "The case for a low contrast dark theme coding setup"
        },
        "Lower text-to-background contrast reduces the total amount of light reaching your eyes, which is the whole point of a low contrast dark theme coding setup. The reasoning holds until you cross a floor. Body text below roughly 4.5:1 turns reading into effort, and reading effort at 1 a.m. becomes squinting and a headache within a page.",
        "So the goal is not minimum contrast. It is the lowest contrast that still lets you read without effort. Somewhere between 7:1 and 10:1 sits the useful band for late sessions, with the background held near #0d1117 or darker.",
        {
          "type": "h2",
          "text": "Six themes that hold up after midnight"
        },
        "Presets below are measured at their default settings, with the editor at 60% screen brightness in an unlit room.",
        {
          "type": "ul",
          "items": [
            "**Stage Black-Gold**: background #0b0b0d, body text around 13:1, the gold accent stays warm enough to avoid blue glare",
            "**Purple Night**: background #14101f, text around 11:1, a deep gradient that keeps the edges of a large monitor from glowing",
            "**Inspiration Universe**: background #05060a, text around 15:1, starfield texture that hides slight panel bloom",
            "**Nord Night**: background #2e3440, text around 8:1, the softest option in this list and the easiest on tired eyes",
            "**Tokyo Night**: background #1a1b26, text around 10:1, blue-violet syntax colors that separate strings from comments cleanly",
            "**Clear Minimalist Dark**: background #101013, text around 12:1, near-zero decoration when you only want the code"
          ]
        },
        {
          "type": "h2",
          "text": "How to test a night theme in five minutes"
        },
        {
          "type": "ul",
          "items": [
            "Lower your monitor to the brightness you actually use at night before judging anything",
            "Open a file with mixed content: comments, strings, keywords, and a longer function body",
            "Read for two minutes without touching the display, then note where your eyes keep landing",
            "Dim the room, read it again, and check whether the cursor and selection still stand out",
            "Save the preset only if the syntax tiers stay apart at both brightness levels"
          ]
        },
        {
          "type": "h2",
          "text": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Is pure black better than near-black at night?",
              "a": "Not always. On OLED panels pure black removes glow entirely, but on LCD panels it can expose backlight bleed. Near-black like #0d1117 is the safer default across both."
            },
            {
              "q": "Should I lower monitor brightness instead of changing the theme?",
              "a": "Both help, and they work best together. A theme handles the ratio between text and background, while brightness controls total light output."
            },
            {
              "q": "Can I schedule a night theme to switch automatically?",
              "a": "Yes. Export your night preset and your day preset separately, then swap between them with a single click when the light changes."
            }
          ]
        },
        "Every preset above sits in the gallery at codex-skin-studio.shop, and the free tier already covers most of the night-friendly options. If you want the full comparison first, the roundup at /guides/best-codex-themes lists contrast numbers for the whole catalog, and /en/gallery lets you preview each theme before installing. Pick one tonight, keep it for a week, and tune from there.",
        {
          "type": "cta",
          "text": "Browse night-friendly themes in the gallery →",
          "href": "/en/gallery"
        }
      ],
    },
  },
{
  "slug": "why-i-code-faster-after-switching-my-codex-theme",
  "date": "2026-09-14",
  "title": {
    "zh": "换了 Codex 主题之后，我读代码变快了",
    "en": "Why I Read Code Faster After Switching My Codex Theme"
  },
  "description": {
    "zh": "一次换主题的实测记录：问题不在代码而在\"读\"，提高语法层级之间的对比度之后，重读次数明显下降。附五分钟自测法。",
    "en": "A week after switching themes I was reading diffs faster. The mechanism was not the colors themselves but the separation between syntax tiers, plus a five-minute test you can run before committing."
  },
  "content": {
    "zh": [
      "我在一个周二换了 Codex 主题，当时没多想。一周后我发现一件让我有点意外的事：我读 diff 变快了。不是夸张的那种快，可能每个文件快一两秒。但它足够稳定，让我开始琢磨原因。",
      {
        "type": "h2",
        "text": "问题从来不在代码，在读"
      },
      "一个工作日里大部分时间不是在敲键盘，而是在读：diff、报错栈、长函数体、一小时前打开的那个文件。主题真正起作用的地方就是\"读\"，而这恰恰是大多数人挑主题时最忽略的部分。",
      "我原来用的是一套低对比度暗色主题，纯粹因为习惯，用了好几年。它\"舒服\"的意思是：什么都不跳出来。结果这本身就是问题——什么都不跳出来，包括我正在找的那一行。",
      {
        "type": "h2",
        "text": "提高对比度之后变了三件事"
      },
      {
        "type": "ul",
        "items": [
          "关键字和字符串从注释里一眼分开了，不用再重读一遍去判断哪句是说明、哪句是代码。",
          "光标和当前行高亮一眼就能找到。听起来是小事，直到你算一下自己一天丢几次位置。",
          "报错和警告不再糊在面板背景里。有一个下午我抓到了两个以前肯定会划过去的错误。"
        ]
      },
      {
        "type": "h2",
        "text": "我一开始做错的地方"
      },
      "我第一次换的是霓虹风。截图里很好看，到了下午四点就累得不行。高饱和的强调色铺满全屏，等于什么都在强调，也就是什么都没强调。撑了三天。",
      "最后留下来的一版比我预想的安静：深色底、克制的强调色，但语法层级之间分得很清。文字和背景的对比其实没那么关键，关键的是不同 token 之间的对比。",
      {
        "type": "h2",
        "text": "定下来之前，花五分钟测一下"
      },
      {
        "type": "ul",
        "items": [
          "打开一个内容混杂的文件：注释、字符串、关键字，加一段长函数。",
          "按你实际用的亮度读两分钟，而不是按你觉得自己该用的亮度。",
          "把房间光线调暗，再读一遍。多数主题是在这一步暴露问题。",
          "只有在不用凑近也能分清字符串和注释时，才把它留下。"
        ]
      },
      "如果你想要对比度数字而不是感觉，我们那份最佳 Codex 主题横评里列了整套主题的实测比值，比一个个装了试要快得多。",
      {
        "type": "h2",
        "text": "常见问题"
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "主题真的会影响读代码的速度吗？",
            "a": "它影响的是你重读的次数。单个文件上的收益很小，但它会累积，主要是减少了丢位置、把注释看错成代码这类时刻。"
          },
          {
            "q": "高对比度一定更好吗？",
            "a": "不一定。纯黑配纯白长时间看会很累。有用的目标是：在你实际工作的亮度下，语法层级之间分得清。"
          },
          {
            "q": "一个新主题该用多久再判断？",
            "a": "用一周真实工作来判断。第一印象测的是新鲜感；这一周的后半段才看得出它在一个疲惫的下午还站不站得住。"
          }
        ]
      },
      "上面提到的主题都在 codex-skin-studio.shop 的主题库里，免费档已经覆盖了大部分高区分度的选项。想从实测清单入手，先读 /guides/best-codex-themes，再去 /zh/gallery 挑一套装上。",
      {
        "type": "cta",
        "text": "浏览主题库 →",
        "href": "/zh/gallery"
      }
    ],
    "en": [
      "I switched my Codex theme on a Tuesday and did not think much about it. A week later I noticed something that surprised me: I was reading diffs faster. Not dramatically. Maybe a second or two per file. But it was consistent enough that I started paying attention to why.",
      {
        "type": "h2",
        "text": "The problem was never the code. It was the reading."
      },
      "Most of a working day is not typing. It is reading: diffs, stack traces, long function bodies, the file you opened an hour ago. Reading is where a theme actually does work, and it is the part most people ignore when they pick one.",
      "My old setup was a low-contrast dark theme I had used for years out of habit. It was comfortable in the sense that nothing jumped out. That turned out to be the problem. Nothing jumped out, including the thing I was looking for.",
      {
        "type": "h2",
        "text": "Three things changed when I raised contrast"
      },
      {
        "type": "ul",
        "items": [
          "Keywords and strings separated from comments at a glance, so I stopped re-reading lines to work out what was a note and what was code.",
          "The cursor and the current-line highlight became findable without hunting. That sounds small until you count how often you lose your place.",
          "Errors and warnings stopped blending into the panel background. I caught two mistakes in one afternoon that I would previously have scrolled past."
        ]
      },
      {
        "type": "h2",
        "text": "What I got wrong at first"
      },
      "My first replacement was a neon theme. It looked great in a screenshot and was exhausting by 4pm. Bright saturated accents everywhere means everything is emphasising, which is the same as nothing emphasising. I lasted three days.",
      "The version that stuck was quieter than I expected: dark background, moderate accent, but with real separation between the syntax tiers. Contrast between text and background matters less than contrast between one kind of token and another.",
      {
        "type": "h2",
        "text": "A five-minute test before you commit"
      },
      {
        "type": "ul",
        "items": [
          "Open a file with mixed content: comments, strings, keywords, and one long function.",
          "Read for two minutes at the brightness you actually use, not the brightness you think you should use.",
          "Dim the room and read it again. Most themes that fail, fail here.",
          "Keep it only if you can still tell a string from a comment without leaning in."
        ]
      },
      "If you want contrast numbers rather than vibes, our roundup of the best Codex themes lists measured ratios for the whole catalog, which is a faster way to shortlist than installing ten of them.",
      {
        "type": "h2",
        "text": "FAQ"
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Does a theme really change how fast you read code?",
            "a": "It changes how often you have to re-read. The gains are small per file and they add up over a day, mostly by reducing the moments where you lose your place or misread a comment for code."
          },
          {
            "q": "Is a high-contrast theme always better?",
            "a": "No. Pure black text on pure white is tiring for long sessions. The useful target is clear separation between syntax tiers at the brightness you actually work at."
          },
          {
            "q": "How long should I give a new theme before judging it?",
            "a": "A week of real work. First impressions measure novelty; the second half of the week is where you find out whether it holds up on a tired afternoon."
          }
        ]
      },
      "Every theme in that roundup is in the gallery at codex-skin-studio.shop, and the free tier covers most of the high-separation options. If you would rather start from the measured list, read /guides/best-codex-themes first, then browse /en/gallery and install from there.",
      {
        "type": "cta",
        "text": "Browse the theme gallery →",
        "href": "/en/gallery"
      }
    ]
  }
},
  {
    slug: 'vscode-to-codex-theme-port',
    date: '2026-09-15',
    title: { zh: '从 VS Code 主题到 Codex 主题：如何移植你的美学', en: 'From VS Code Theme to Codex Theme: How to Port Your Aesthetic' },
    description: { zh: '你在 VS Code 里调了很久的配色，不必在 Codex 里从零再来一遍。这篇讲清两种格式的对应关系、哪些字段能直接搬、哪些必须重做。', en: 'The palette you tuned in VS Code does not have to be rebuilt from scratch in Codex. Here is what maps cleanly, what breaks, and the fastest path to a faithful port.' },
    content: {
      zh: [
        { type: 'h2', text: '两种格式本来就不是一回事' },
        'VS Code 主题是一长串 JSON，把界面和语法标记分开描述。Codex 主题表达的是同一批概念，但键少得多，因为 Codex 需要上色的界面区域本来就少。',
        '所以移植是翻译，不是复制。保留配色和意图，重新做映射。',
        { type: 'h2', text: '能直接搬的部分' },
        { type: 'ul', items: ['背景色和前景色。这两个几乎原样迁移，而且决定了整体的调子。', '选区色和当前行高亮。两边角色一样，你调过的颜色还能用。', '主要语法色：关键字、字符串、注释、数字、函数。Codex 会把其中几类合起来，你原本就分不太清的直接合并。'] },
        { type: 'h2', text: '必须重做的部分' },
        { type: 'ul', items: ['侧边栏和面板色阶。Codex 的界面层次更少，五级灰阶要压成两三级。', '边框和分隔线。VS Code 允许单独上色，Codex 一般从背景色推导。', '语义高亮。如果你的主题依赖语言服务器，这一层根本导不出来。'] },
        { type: 'h2', text: '四步完成移植' },
        { type: 'ul', items: ['先把主题导出成 .tmTheme。多数主题包同时提供这个格式。', '导入 Codex Skin Studio，让映射器填好公共键。', '修被合并的键。移植在这里开始从「像旧主题」变成「像新主题」。', '在你最常用的界面上检查对比度，而不是在预览页高亮的那几个。'] },
        { type: 'h2', text: '什么情况下不值得移植' },
        '如果你的 VS Code 主题是围绕某个插件搭起来的，移植之后会显得空。配色留下了，体验没留下。这种情况直接从 Codex 原生主题起步，只借你真正舍不得的那几个颜色。',
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '能直接把 .tmTheme 导入 Codex 吗？', a: '可以。Codex Skin Studio 支持 .tmTheme，所以先从 VS Code 导出是最快的路。' },
          { q: '移植后会和原来一模一样吗？', a: '不会。界面层次不同决定了它会接近但不全等。多数人不再对比之后反而更喜欢 Codex 版本。' },
          { q: '会不会影响我原来的 VS Code 配置？', a: '不会。导出只是复制一份，原主题不受影响。' },
        ] },
        { type: 'cta', text: '导入你的主题，看看哪些能留下来', href: 'https://codex-skin-studio.shop' },
      ],
      en: [
        { type: 'h2', text: 'Why the two formats are not the same' },
        'VS Code themes are JSON with a long list of workbench and token colors. Codex themes describe the same ideas with a much smaller key set, because Codex has fewer distinct surfaces to style.',
        'That means a port is a translation, not a copy. You keep the palette and the intent, and you rebuild the mapping.',
        { type: 'h2', text: 'What maps cleanly' },
        { type: 'ul', items: ['Background and foreground. These transfer almost directly and set the tone for everything else.', 'Editor selection and current-line highlight. Same role in both, so the color you tuned still works.', 'The main syntax hues: keyword, string, comment, number, function. Codex groups some of these, so collapse the ones you barely distinguished.'] },
        { type: 'h2', text: 'What you have to redo' },
        { type: 'ul', items: ['Sidebar and panel tones. Codex uses fewer chrome surfaces, so a five-step grey ramp becomes two or three.', 'Borders and dividers. VS Code lets you style them separately; Codex usually derives them from the background.', 'Semantic highlighting. If your VS Code theme depends on a language server, that layer cannot be exported at all.'] },
        { type: 'h2', text: 'The four-step port' },
        { type: 'ul', items: ['Export the VS Code theme to .tmTheme if it is not already in that format. Most theme packages ship both.', 'Import it into Codex Skin Studio and let the mapper fill the shared keys.', 'Fix the collapsed keys. This is where the port stops looking like your old theme and starts looking like a new one.', 'Check contrast on the surfaces you use most, not on the ones the preview highlights.'] },
        { type: 'h2', text: 'When a port is not worth it' },
        'If your VS Code theme was built around an extension you rely on, the port will feel hollow. The palette survives, the experience does not. Start from a Codex-native theme instead and borrow only the color choices you actually miss.',
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'Can I import a .tmTheme into Codex directly?', a: 'Yes. Codex Skin Studio accepts .tmTheme, which is why exporting from VS Code first is the fastest route.' },
          { q: 'Will my port look identical?', a: 'No. Differences in chrome surfaces mean it will be close but not identical. Most people find they prefer the Codex version once they stop comparing.' },
          { q: 'Does porting break my VS Code setup?', a: 'No. Exporting creates a copy. Your VS Code theme is untouched.' },
        ] },
        { type: 'cta', text: 'Import your theme and see what survives', href: 'https://codex-skin-studio.shop' },
      ],
    },
  },
  {
    slug: 'multi-monitor-codex-theme-setup',
    date: '2026-09-13',
    title: { zh: '多屏幕工作者的 Codex 主题设置建议', en: 'Multi-Monitor Codex Theme Setup Tips' },
    description: { zh: '两块屏幕并排时，同一套主题在两侧看起来完全不同。这篇讲清亮度、对比度和色温该怎么调，以及多屏环境最容易踩的三个坑。', en: 'The same theme reads differently on two monitors side by side. Here is how to handle brightness, contrast and color temperature, plus the three mistakes people make on multi-monitor setups.' },
    content: {
      zh: [
        { type: 'h2', text: '两块屏幕不会是同一种颜色' },
        '同一套 Codex 主题，在并排的两块屏幕上看起来经常像两个不同的主题。原因不是主题，是面板。IPS 和 VA 的黑色不同，出厂色温也不同，亮度差 20% 就足以让深色主题在一边发灰、另一边发黑。',
        '所以多屏配置的第一步不是挑主题，而是先把两块屏调到一个接近的基线。',
        { type: 'h2', text: '先对齐基线，再谈审美' },
        { type: 'ul', items: ['把两块屏的亮度和对比度调到同一档，用同一张灰阶图对比，而不是凭感觉。', '把色温统一。一块偏冷一块偏暖，深色主题的观感差异会被放大。', '如果一块屏是主屏，把它放在正前方，另一块作为辅助，而不是两块都当主屏用。'] },
        { type: 'h2', text: '深色主题在多屏下的三个坑' },
        { type: 'ul', items: ['对比度拉满。两块屏同时显示纯黑底，房间里的阴影感会明显增加，长时间看反而更累。', '两侧主题不同。一块深色一块浅色，每次转移视线眼睛都要重新适应。', '侧屏放高饱和配色。辅助屏通常是瞥一眼，高饱和会持续抢注意力。'] },
        { type: 'h2', text: '一套可以直接用的配置' },
        '主屏放深色低对比主题，用于长时间写代码。辅助屏放同一主题的浅色版本，或者灰度更低的变体，用来放终端、日志和文档。两边的强调色保持一致，这样视线切换时不会觉得换了环境。',
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: '两块屏必须用同一套主题吗？', a: '不必须，但强调色建议一致。主色不同会让整个工作区看起来像两个不相干的程序。' },
          { q: '深色主题会让多屏更累眼睛吗？', a: '只在对比度过高时。深色主题本身没问题，问题是两块屏都是纯黑底加纯白字。' },
        ] },
        { type: 'cta', text: '挑一套在多屏下也稳的主题', href: 'https://codex-skin-studio.shop' },
      ],
      en: [
        { type: 'h2', text: 'Two monitors are never the same color' },
        'The same Codex theme often looks like two different themes on two panels side by side. The cause is not the theme, it is the hardware. IPS and VA render black differently, factory color temperatures differ, and a twenty percent brightness gap is enough to make a dark theme look washed out on one side and solid black on the other.',
        'So the first step in a multi-monitor setup is not picking a theme. It is getting both screens onto a similar baseline.',
        { type: 'h2', text: 'Align the baseline before you argue about taste' },
        { type: 'ul', items: ['Set brightness and contrast to the same level on both screens and compare using a greyscale ramp, not by eye.', 'Match color temperature. One cool screen next to one warm screen exaggerates every difference in a dark theme.', 'If one screen is primary, put it directly in front and use the other as support, rather than treating both as primary.'] },
        { type: 'h2', text: 'Three mistakes on multi-monitor setups' },
        { type: 'ul', items: ['Maxing out contrast. Two screens of pure black with pure white text deepen the shadows in the room and make long sessions harder.', 'Mixing dark and light themes. Every time your eye moves, it has to readjust.', 'Putting a saturated palette on the side screen. The secondary screen gets glanced at, and saturation keeps pulling attention back to it.'] },
        { type: 'h2', text: 'One configuration that works' },
        'Put a low-contrast dark theme on the primary screen for long coding sessions. Put the light variant of the same theme, or a flatter version of it, on the secondary screen for terminals, logs and documentation. Keep the accent color identical on both, so moving your eyes does not feel like changing rooms.',
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'Do both screens need the same theme?', a: 'No, but keep the accent color consistent. Different accents make the workspace read as two unrelated applications.' },
          { q: 'Do dark themes make multi-monitor work harder on your eyes?', a: 'Only when contrast is pushed to the maximum. The problem is two screens of pure black and pure white, not dark themes themselves.' },
        ] },
        { type: 'cta', text: 'Find a theme that holds up across two screens', href: 'https://codex-skin-studio.shop' },
      ],
    },
  },
  {
    slug: 'cdp-injection-vs-file-editing',
    date: '2026-09-17',
    title: {
      zh: '为什么 CDP 注入比改文件更可靠',
      en: 'Why CDP Injection Beats File Editing for Theming',
    },
    description: {
      zh: '改官方文件换肤，Codex 一升级就失效，还可能触发签名校验失败。CDP 注入在运行时改界面，不碰任何官方文件，这是更省心的路子。',
      en: 'Editing official files to theme Codex breaks on every update and can trip signature checks. CDP injection changes the UI at runtime without touching any official file. That is the more reliable route.',
    },
    content: {
      zh: [
        '给 Codex 换肤有两条路：直接改安装目录里的官方文件，或者用 Chrome DevTools Protocol（CDP）在运行时注入样式。多数人一开始走改文件的路，踩过几次升级后主题失效的坑之后，才换到 CDP 注入。这篇讲清楚两者差别，以及为什么 CDP 注入更适合长期使用。',
        { type: 'h2', text: '改文件的问题在哪' },
        'Codex 桌面端基于 Electron，主题相关资源打包在 app.asar 之类的归档里。改文件意味着解包、编辑、再打包，每一步都可能出错。',
        {
          type: 'ul',
          items: [
            '每次 Codex 升级都可能覆盖你的修改，需要重新打一遍补丁',
            '修改官方文件可能触发签名校验或完整性检查失败',
            '想恢复原样只能重装，没有干净的开关',
            '不同版本的内部结构不同，改法不通用',
          ],
        },
        { type: 'h2', text: 'CDP 注入是怎么工作的' },
        'Codex 启动时会在本机开放一个调试端口，只绑定 127.0.0.1。换肤工具连接这个端口，通过 WebSocket 把主题 CSS 和背景图注入到渲染进程。界面立刻变化，但磁盘上的官方文件一个字节都没动。',
        { type: 'h2', text: 'CDP 注入的四个优势' },
        {
          type: 'ul',
          items: [
            '不碰官方文件：升级后主题依然有效，不用重装',
            '一键恢复：关掉工具或点一下恢复，界面回到官方原样',
            '无签名问题：不存在校验失败的触发条件',
            '主题包更安全：只含 CSS 与图片，不含可执行代码',
          ],
        },
        { type: 'h2', text: '什么场景下仍考虑改文件' },
        '如果你只在本机开发、不常升级 Codex、并且熟悉 Electron 内部结构，改文件也能用。但只要是给多台机器用、要长期维护，CDP 注入省下的时间明显更多。',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'CDP 注入会拖慢 Codex 吗？', a: '基本不会。注入发生在启动阶段，运行时开销很小，多数用户感知不到差异。' },
            { q: '卸载工具后主题会残留吗？', a: '不会。工具停止后，注入的样式随进程释放，界面自动恢复官方样式。' },
            { q: 'CDP 注入安全吗？', a: '连接只绑定 127.0.0.1 本机端口，不对外暴露。选择只含 CSS 和图片的主题包，风险更低。' },
          ],
        },
        { type: 'cta', text: '试试不碰官方文件的换肤方式', href: 'https://codex-skin-studio.shop' },
      ],
      en: [
        'There are two ways to theme Codex: edit the official files in the install directory, or inject styles at runtime with the Chrome DevTools Protocol (CDP). Most people start with file editing, then switch to CDP injection after watching their theme die on the first update. This post compares the two and explains why CDP injection holds up better over time.',
        { type: 'h2', text: 'Where file editing falls apart' },
        'Codex desktop is built on Electron, and theme resources live inside archives like app.asar. Editing means unpacking, changing, and repacking, with a failure point at every step.',
        {
          type: 'ul',
          items: [
            'Every Codex update can overwrite your changes, so the patch has to be redone',
            'Modified official files can fail signature or integrity checks',
            'There is no clean on/off switch; reverting means reinstalling',
            'Internal structure changes between versions, so the edit is not portable',
          ],
        },
        { type: 'h2', text: 'How CDP injection works' },
        'Codex opens a local debugging port at startup, bound to 127.0.0.1 only. The theming tool connects to that port and pushes theme CSS and background images into the renderer over WebSocket. The UI changes instantly, but nothing on disk is modified.',
        { type: 'h2', text: 'Four reasons CDP injection wins' },
        {
          type: 'ul',
          items: [
            'Official files stay untouched: themes survive updates without reinstallation',
            'One-click revert: stop the tool or hit restore and the UI returns to stock',
            'No signature issues: there is nothing to trip a checksum check',
            'Safer themes: packages contain only CSS and images, no executable code',
          ],
        },
        { type: 'h2', text: 'When file editing still makes sense' },
        'If you develop on a single machine, rarely update Codex, and know your way around Electron internals, file editing works. For anything multi-machine or long-lived, CDP injection saves noticeably more time.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Does CDP injection slow down Codex?', a: 'Barely. The injection happens at startup and runtime overhead is small; most users notice no difference.' },
            { q: 'Does the theme linger after uninstalling the tool?', a: 'No. Once the tool stops, the injected styles are released with the process and the UI returns to the official look.' },
            { q: 'Is CDP injection safe?', a: 'The connection binds only to the local 127.0.0.1 port and is not exposed. Sticking to CSS-and-image-only themes lowers the risk further.' },
          ],
        },
        { type: 'cta', text: 'Try theming without touching official files', href: 'https://codex-skin-studio.shop' },
      ],
    },
  },
  {
    slug: 'anime-game-style-codex-themes',
    date: '2026-09-21',
    title: {
      zh: '动漫游戏风 Codex 主题：从虚拟偶像到二次元元素',
      en: 'Anime and Game Style Codex Themes: Virtual Idols and Beyond',
    },
    description: {
      zh: '动漫游戏风格的主题是怎么设计的？虚拟偶像、角色立绘、二次元配色各自带来什么效果，以及为什么高饱和主题容易用两天就腻。',
      en: 'How anime and game style themes are designed, what virtual idols and character art each bring to a Codex skin, and why the highest-saturation themes wear out fastest.',
    },
    content: {
      zh: [
        '动漫游戏风的 Codex 主题和写实风格的主题在设计思路上几乎是两回事。写实主题追求"看起来不像软件"，动漫风主题追求的恰恰相反：它要让你一眼认出手上的工具是有性格的。',
        { type: 'h2', text: '动漫风主题的三个组成' },
        { type: 'ul', items: [
          '角色立绘：占据视觉焦点的人物图像，通常放在右侧留白区，避开侧栏',
          '二次元配色：高饱和的主色加低饱和的面板色，形成明确的层次',
          '装饰元素：拟声词、速度线、星星、心形等小型图形，控制在使用不到三处',
        ] },
        '三者里最容易失控的是装饰元素。加到一个程度观感是"角色扮演"，再往上加就变成"贴满贴纸的笔记本"。多数人第一次做动漫主题都会加太多。',
        { type: 'h2', text: '虚拟偶像风为什么流行' },
        '虚拟偶像风格本质上是把"有人陪着你工作"这件事视觉化。它的配色通常偏冷（蓝紫、青色），表情克制，人物不完全面向镜头。相比热血系角色主题，它在长时间工作场景下更不容易让人疲劳，因为它不要求你回应它。',
        { type: 'h2', text: '饱和度是最容易踩的坑' },
        '高饱和配色的吸引力在第一天最强，之后迅速下降。原因很简单：文字要压在背景上，背景越鲜艳，前景文字的对比度余量就越小。工作两小时之后眼睛开始累，你就会想去调低亮度，而这会连带破坏整个配色的平衡。',
        '实用的做法是把饱和度留给人物的局部（头发、眼睛、配饰），把大面积背景压到中低饱和。这样既有二次元的感觉，又不牺牲可读性。',
        { type: 'h2', text: '配色与可读性的底线' },
        { type: 'ul', items: [
          '正文文字与背景的对比度不低于 4.5:1，这是可访问性基线',
          '背景图在文字区域加一层半透明遮罩，比直接调暗整张图更保细节',
          '代码高亮的颜色数量控制在六到八个，多了会失去辨识度',
          '暗色主题里避免纯黑背景，用深灰更容易让彩色元素跳出来',
        ] },
        { type: 'h2', text: '怎么开始' },
        '不要从零设计。找一款已有的动漫风主题当模板，只改颜色变量和背景图，先把结构跑通。改完看一天，第二天再决定要不要继续调。一次调到位几乎不可能，分次微调反而更快。',
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '动漫风主题会影响性能吗？', a: '会，但不来自配色，来自背景图。分辨率和文件体积是主要因素；配色变量本身的开销可以忽略。' },
          { q: '可以从喜欢的动漫里直接取色吗？', a: '取色思路没问题，但直接使用角色图或官方素材涉及版权。用配色灵感自己做抽象化处理更稳妥。' },
          { q: '为什么我做的主题看起来很乱？', a: '通常是元素层级没有区分。确定一个视觉焦点，其他所有元素的对比度和饱和度都要往下压一档。' },
          { q: '高饱和主题真的不适合长时间用吗？', a: '多数人两三天后会主动调低。如果想长期用，直接从中低饱和开始，反而省掉一次返工。' },
        ] },
        { type: 'cta', text: '浏览动漫风主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: '自定义配色指南 →', href: '/zh/guides/customize' },
      ],
      en: [
        'Anime and game style Codex themes are a different design problem from realistic ones. Realistic themes try to make the tool feel like it is not software. Anime themes do the opposite: they want you to recognise at a glance that your tool has a personality.',
        { type: 'h2', text: 'The three ingredients' },
        { type: 'ul', items: [
          'Character art: the focal image, usually placed in the right-hand open area so it clears the sidebar',
          'Anime palette: a saturated accent against desaturated panels, which is what creates the layering',
          'Decorative marks: onomatopoeia, speed lines, stars, hearts — and no more than a few of them',
        ] },
        'Of the three, decoration is the one that gets out of hand. Up to a point it reads as cosplay; past it, the window looks like a sticker-covered notebook. Most first attempts overshoot.',
        { type: 'h2', text: 'Why virtual idol themes last longer' },
        'The virtual idol style visualises company while you work. Its palette runs cool — blues, purples, cyans — the expression is restrained, and the figure does not quite face the camera. Compared with a high-energy character theme, it is easier to sit with for hours because it does not ask you to respond to it.',
        { type: 'h2', text: 'Saturation is the trap' },
        'A saturated palette is at its most appealing on day one, then falls off fast. The reason is mechanical: text has to sit on top of the background, and the brighter the background, the less contrast budget the text has left. Two hours in, your eyes are tired, you dim the screen, and the whole palette shifts out of balance.',
        'The practical fix is to spend saturation locally on the character — hair, eyes, accessories — and keep the large background areas mid-to-low. You keep the anime feel without paying for it in readability.',
        { type: 'h2', text: 'The readability floor' },
        { type: 'ul', items: [
          'Body text against background should stay at 4.5:1 contrast or better',
          'A translucent scrim over the text area preserves more detail than dimming the whole wallpaper',
          'Keep syntax highlighting to six to eight colours; more stops being distinguishable',
          'In dark themes avoid pure black — dark grey lets coloured elements read as separate layers',
        ] },
        { type: 'h2', text: 'How to start' },
        'Do not design from nothing. Take an existing anime theme as a template, change only the colour variables and the wallpaper, and get the structure working first. Live with it for a day before adjusting again. Tuning in passes gets there faster than trying for the perfect result in one sitting.',
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'Do anime themes hurt performance?', a: 'The wallpaper can, the palette cannot. Resolution and file size dominate; colour variables cost nothing measurable.' },
          { q: 'Can I sample colours straight from an anime?', a: 'Sampling as inspiration is fine, but shipping official character art raises copyright issues. Abstract it into your own palette instead.' },
          { q: 'Why does my theme look cluttered?', a: 'Usually a hierarchy problem. Choose one focal point and push contrast and saturation down a notch on everything else.' },
          { q: 'Are saturated themes really worse for long sessions?', a: 'Most people dim them within two or three days. Starting mid-saturation saves the rework.' },
        ] },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'Custom theming guide →', href: '/en/guides/customize' },
      ],
    },
  },
  {
    slug: 'enterprise-codex-brand-themes',
    date: '2026-10-02',
    title: {
      zh: '企业品牌主题：用 Codex 主题统一团队视觉',
      en: 'Enterprise Brand Themes: Unify Team Visuals with Codex',
    },
    description: {
      zh: '二十个工程师二十套编辑器外观，截图永远对不上。这篇讲企业 Codex 主题该锁定什么、放开什么，以及一套共享品牌主题怎么在团队里落地和维护。',
      en: 'Twenty engineers, twenty editor looks, and screenshots that never match. Here is what enterprise codex themes should lock, what they should leave open, and how to roll out and maintain one shared brand theme.',
    },
    content: {
      zh: [
        '企业 Codex 主题解决的不是审美问题。二十个工程师用二十套略有差别的编辑器外观，结果是截图永远对不上、新人文档写完一周就过期、每次评审开场都要有人问一句「这张图是哪个配置下截的」。把品牌主题收敛成一个带版本的文件，所有人加载同一份，关于颜色的争论一个季度发生一次，而不是每个迭代都发生。',
        'Codex Skin Studio 通过 CDP 注入生成主题，不写入官方安装目录，Codex 升级也不会把它冲掉。这一点对企业场景尤其重要：主题是资产，不该随着客户端更新消失。',
        { type: 'h2', text: '企业 Codex 主题到底在统一什么' },
        '统一不等于每台屏幕看起来一模一样。统一的意思是：会被写进文档、会被贴进截图、会被客户看到的那部分固定下来，而真正属于个人的那部分继续开放。',
        { type: 'ul', items: [
          '锁定：背景色、面板色、主文本色，以及交互元素使用的强调色',
          '锁定：语法高亮配色，因为代码截图比任何其它素材传播得更远',
          '开放：壁纸选择，只要不跌破约定好的对比度下限',
          '开放：信息密度与字号，这两项跟视力有关，跟品牌无关',
        ] },
        { type: 'h2', text: '品牌主题是六个变量，不是一张情绪板' },
        '团队卡住，往往是因为从情绪板开始。图片转不成数值，而主题本质上就是一组数值。先定六个数，视觉识别跟着长出来。',
        { type: 'ul', items: [
          '背景色：其它所有颜色都叠在它上面',
          '面板色：侧栏、输入框、卡片，比背景色高一个层级',
          '主文本色：对背景色和面板色都要达到 4.5:1',
          '强调色：只用于焦点框和激活态，别处不用',
          '语法配色：六到八种，再多就分不清了',
          '壁纸：限定亮度区间，保证上面的文字始终可读',
        ] },
        '把这几个值写进 theme.json 一次。之后加载这套主题的每个人拿到的都是同一组数值，设计师评审的是一个文件，而不是几十张截图。',
        '如果设计组和后端组确实需要不同的两个值，就复制一份文件，而不是往里加开关。带开关的主题会变成没人能一句话说清的主题，而「说得清」正是它能被共享的前提。',
        { type: 'h2', text: 'Codex 主题在团队里怎么落地' },
        '落地失败的团队，问题通常不在主题本身，而在没人负责。共享主题没有维护者，一个月就会飘。',
        { type: 'ul', items: [
          '指定一个维护人：主题是资产，资产要有 owner',
          '把主题作为文件放进代码仓库，而不是写成文档里的操作步骤',
          '打版本号：让团队可以锁定在某个已知可用的外观上',
          '把对比度检查接进 CI：新版本 Codex 上主题挂了，要响亮地失败',
          '留一个退出口：任何人都能一键回到官方默认外观',
        ] },
        { type: 'h2', text: '品牌主题通常坏在哪里' },
        '坏法很固定，提前知道就能少踩一半。',
        { type: 'ul', items: [
          'Codex 升级改了某个 class 名，某块面板退回默认样式',
          '有人在本地改了 theme.json，他的截图从此跟别人对不上',
          '壁纸换成了品牌照片，文字区域下面正好是一块亮部',
          '强调色被用在了不该用的地方，焦点框因此失去了指示作用',
        ] },
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '企业 Codex 主题会改动 Codex 官方文件吗？', a: '不会。注入发生在运行时，通过本机 CDP 完成，官方安装目录里的任何文件都不被写入，停止工具即可回到原貌。' },
          { q: '团队里有人想用不同壁纸怎么办？', a: '在亮度区间内放开。把壁纸作为开放项、把配色作为锁定项，团队的截图仍然一致，个人仍有余地。' },
          { q: 'Codex 升级后主题失效了怎么排查？', a: '先确认是不是单个面板退回默认：那通常是 class 名变化。对比度检查和版本锁定能让你快速回到上一个可用版本。' },
          { q: '需要多少人才能用团队主题？', a: '两个人就值得。一旦截图要在人与人之间传递，统一就有收益。' },
              ] },
        '把品牌主题当成一份要维护的资产，而不是一次性的装修。Codex Skin Studio 的 Team 方案就是为这件事准备的：一套共享主题，分发给所有人。从 codex-skin-studio.shop 开始，在 /zh/pricing 对比 Team 与 Pro 的差异，再到 /zh/about 看工具的运作方式。',
        { type: 'cta', text: '对比 Team 与 Pro 方案 →', href: '/zh/pricing' },
        { type: 'cta', text: '关于 Codex Skin Studio →', href: '/zh/about' },
      ],
      en: [
        'Enterprise codex themes solve a problem that has nothing to do with taste. When twenty engineers run twenty slightly different editor looks, screenshots stop matching, onboarding documents go stale the week they are written, and every review opens with someone asking which setup the image came from. A shared brand theme collapses that into one versioned file everyone loads, so the argument about colours happens once a quarter instead of once a sprint.',
        'Codex Skin Studio builds these themes through CDP injection, which means nothing in the official install directory is written to and a Codex update cannot wipe the file. That matters in a company setting: a theme is an asset, and an asset should not disappear when the client updates.',
        { type: 'h2', text: 'What enterprise codex themes standardize' },
        'Standardizing does not mean every screen looks identical. It means the parts that end up in documents, in screenshots and in front of clients are fixed, while the parts that are genuinely personal stay open.',
        { type: 'ul', items: [
          'Locked: background, surface, primary text, and the accent used for interactive elements',
          'Locked: the syntax palette, because code screenshots travel further than any other asset you produce',
          'Open: wallpaper choice, as long as it stays above the agreed contrast floor',
          'Open: density and font size, which track individual eyesight rather than brand',
        ] },
        { type: 'h2', text: 'A brand theme is six variables, not a mood board' },
        'Teams get stuck when they start from a mood board. Images do not convert into values, and values are what a theme actually is. Start with six numbers and let the visual identity follow from them.',
        { type: 'ul', items: [
          'Background: the base layer everything else sits on',
          'Surface: panels, sidebars and inputs, one step away from background',
          'Text primary: clears 4.5:1 against both background and surface',
          'Accent: reserved for focus rings and active states, used nowhere else',
          'Syntax palette: six to eight colours, which is where distinguishability stops',
          'Wallpaper: constrained to a brightness range so text stays readable on top',
        ] },
        'Write these into theme.json once. Everyone who loads the theme gets the same six values, and a designer reviews a file instead of forty screenshots.',
        'If two of the six genuinely need to differ between a design group and a backend group, fork the file rather than adding switches. A theme with options becomes a theme nobody can describe in one sentence, and being describable is what makes it shareable.',
        { type: 'h2', text: 'Rolling out a codex theme across a team' },
        'When a rollout fails, the cause is rarely the theme. It is that nobody owns it. A shared theme without a maintainer drifts within a month.',
        { type: 'ul', items: [
          'Name one maintainer. A theme is an asset, and an asset needs an owner.',
          'Ship the theme as a file in the repository, not as instructions in a document.',
          'Version it, so a team can pin to a look that is known to work.',
          'Wire a contrast check into CI. If the theme breaks on a new Codex build, it should fail loudly.',
          'Leave an escape hatch: anyone can revert to the default look in one click.',
        ] },
        { type: 'h2', text: 'Where brand themes break' },
        'The failure modes are consistent, and knowing them in advance removes about half the incidents.',
        { type: 'ul', items: [
          'A Codex update renames a class and one panel reverts to default styling',
          'Someone edits theme.json locally and their screenshots stop matching everyone else\'s',
          'The wallpaper is swapped for a brand photo with a bright region sitting under the text area',
          'The accent colour gets used decoratively, and the focus ring stops meaning anything',
        ] },
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'Do enterprise codex themes modify official Codex files?', a: 'No. Injection happens at runtime over a local CDP connection, so nothing in the official install directory is written to, and stopping the tool reverts the interface immediately.' },
          { q: 'What if someone on the team wants a different wallpaper?', a: 'Allow it inside a brightness range. Treat wallpaper as open and palette as locked: screenshots stay consistent while individuals keep some room.' },
          { q: 'How do I debug a theme that broke after a Codex update?', a: 'Check whether a single panel reverted to default, which usually means a renamed class. Version pinning and the contrast check let you get back to the last known-good look quickly.' },
          { q: 'How big does a team need to be for this to pay off?', a: 'Two people. The moment screenshots travel between people, consistency starts returning something.' },
              ] },
        'Treat a brand theme as an asset you maintain rather than a one-off decoration. The Team plan on Codex Skin Studio exists for exactly this case: one shared theme, distributed to everyone. Start at codex-skin-studio.shop, compare Team and Pro on /en/pricing, then read how the tool works on /en/about.',
        { type: 'cta', text: 'Compare Team and Pro plans →', href: '/en/pricing' },
        { type: 'cta', text: 'About Codex Skin Studio →', href: '/en/about' },
      ],
    },
  },
  {
    slug: 'codex-theme-load-optimization',
    date: '2026-10-03',
    title: {
      zh: '主题加载优化：把背景图体积压下来',
      en: 'Theme Load Optimization: Cut Your Codex Wallpaper File Size',
    },
    description: {
      zh: 'Codex 主题加载慢，问题几乎都在背景图。这篇给出背景图压缩的具体数值、格式选择和一份可以直接照着做的体积预算。',
      en: 'Slow codex theme load is almost always a wallpaper problem. Here are the numbers, the formats, and a size budget you can follow.',
    },
    content: {
      zh: [
        'Codex 主题加载优化，本质上是个背景图问题。theme.json 是一份几 KB 的文本，背景图通常是它的四十到两百倍。如果你打开 Codex 之后界面先出来、壁纸慢半拍才浮现，或者拖动窗口时背景有一下迟滞，要改的几乎一定是那张图，而不是主题本身。',
        'Codex Skin Studio 通过本机 CDP 在运行时注入主题，不写入官方安装目录，所以加载快慢跟官方文件无关，只跟你塞进主题包的东西有关。这条约束反而让优化变得好判断：变量就两个，格式和体积。',
        { type: 'h2', text: '体积都花在哪了' },
        '把主题包拆开称一下，结论很直观。CSS 和 theme.json 是文本，浏览器解析几乎不花时间；背景图是二进制，体积和解码时间一起涨。',
        { type: 'ul', items: [
          'theme.json：2 到 8 KB，解析瞬间完成',
          '2560×1440 的 JPEG 壁纸：1.5 到 4 MB',
          '1920×1080 的 WebP，质量 80：150 到 400 KB',
          '1920×1080 的 AVIF：90 到 250 KB',
          '同一张图存成 PNG：通常比 JPEG 大 3 到 6 倍，而且没有画质收益',
        ] },
        { type: 'h2', text: '背景图压缩：先改这四件事' },
        '压缩不是把质量滑块往左拉到底。按顺序做这四步，每一步的收益都比上一步小，所以停在第三步通常就够了。',
        { type: 'ul', items: [
          '裁到实际显示尺寸：多数显示器是 1920×1080 或 2560×1440，存一张 4K 的图只是让解码器白干活',
          '换格式：JPEG 换 WebP，同等观感下体积通常掉六到七成；能接受编码慢一点就换 AVIF',
          '质量定在 78 到 82：这个区间以下，渐变会开始出带状；以上，肉眼看不出差别',
          '清掉元数据：拍摄信息、色彩配置和缩略图可能占掉几十 KB',
        ] },
        '还有一步比上面四步都省：如果背景只是渐变或者单色加噪点，别用图片。CSS 渐变是几十字节的文本，加载时间等于零，而且在任何分辨率下都不会糊。',
        { type: 'h2', text: '一份能照着做的体积预算' },
        '给团队或个人定一个数，比每次凭感觉判断省事。下面这组数值在暗色和亮色主题上都适用。',
        { type: 'ul', items: [
          '单张壁纸目标：400 KB 以内',
          '单张壁纸上限：1 MB，超过就该回到上一步重压',
          'theme.json 与 CSS：不用管，几十 KB 以内都是正常的',
          '整个主题包：控制在 500 KB 以内',
          '多显示器各用一张壁纸时：总量按上面数字乘以屏幕数，但每张仍要单独达标',
        ] },
        { type: 'h2', text: '压缩会牺牲掉什么' },
        '压得过头会在三个地方露出来。渐变区域出现色带，尤其是大面积的天空或光晕；暗部出现块状噪点，深色主题最容易中招；以及文字可读性下降——壁纸变糊反而让上面的字更难读，而这不是画质问题，是对比度问题。',
        '判断方法很土但有效：把压好的图设成壁纸，打开一个同时有代码、注释和长段落的窗口，在正常亮度下读三十秒。眼睛累就往回加质量。主观感受在这个环节比数值可靠。',
        { type: 'h2', text: '上线前过一遍' },
        { type: 'ul', items: [
          '用真实显示尺寸导出，不要直接存原图',
          '格式为 WebP 或 AVIF，不要留 PNG',
          '在最低亮度下看一次暗部，确认没有块状噪点',
          '确认壁纸上的文字仍然达到 4.5:1 对比度',
          '换台机器冷启动一次，看壁纸是否和界面同时出现',
        ] },
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '背景图压到 400 KB 以内，画质会明显下降吗？', a: '在 1920×1080 或 2560×1440 下基本看不出。壁纸是衬在界面底下的，观看距离和叠加的文字都掩盖了细节损失；真正会露馅的是大面积纯渐变，那种情况建议改用 CSS 渐变而不是压图。' },
          { q: '背景图该用 WebP 还是 AVIF？', a: 'WebP 兼容性更好、编码更快，够用。AVIF 在同一观感下还能再小三到四成，但编码时间明显更长，适合一次压好长期不动的壁纸。' },
          { q: '主题加载慢会不会是 CDP 注入本身的问题？', a: '不会。注入走的是本机 localhost 连接，传的是几 KB 的 CSS，耗时在毫秒级。冷启动时能感觉到的延迟几乎全部来自图片解码。' },
          { q: '多显示器要各配一张壁纸吗？', a: '可以，但要按屏幕实际分辨率分别导出，而不是把一张图拉伸到两块屏。每张单独遵守 400 KB 的目标，总量自然可控。' },
        ] },
        '主题加载优化不需要改工具，只要换个导出习惯：按屏幕尺寸导出、用 WebP、质量定在 80 左右。做一次，之后每次换壁纸都照这个流程走。',
        { type: 'cta', text: '查看自定义主题设置 →', href: '/zh/guides/customize' },
        { type: 'cta', text: '浏览主题库 →', href: '/zh/gallery' },
      ],
      en: [
        'Codex theme load optimization is, at bottom, a wallpaper problem. A theme.json is a few kilobytes of text; the background image sitting behind it is routinely forty to two hundred times larger. If the Codex interface paints first and the wallpaper arrives a beat later, or if dragging the window makes the background lag, the thing to change is almost always the image rather than the theme.',
        'Codex Skin Studio injects themes at runtime over a local CDP connection and writes nothing into the official install directory, so load speed has nothing to do with official files. It depends only on what you put in the theme package. That constraint makes the optimisation easy to reason about: two variables, format and size.',
        { type: 'h2', text: 'Where the bytes actually go' },
        'Weigh the parts of a theme package separately and the conclusion is immediate. CSS and theme.json are text and parse in no time. The wallpaper is binary, and its decode time grows with its size.',
        { type: 'ul', items: [
          'theme.json: 2-8 KB, parsed instantly',
          'JPEG wallpaper at 2560x1440: 1.5-4 MB',
          'WebP at 1920x1080, quality 80: 150-400 KB',
          'AVIF at 1920x1080: 90-250 KB',
          'The same image as PNG: usually 3-6x larger than JPEG, with no quality gain',
        ] },
        { type: 'h2', text: 'Wallpaper compression: change these four things first' },
        'Compression is not about dragging the quality slider to the left. Do these four steps in order; each returns less than the one before, so stopping after the third is usually right.',
        { type: 'ul', items: [
          'Crop to the real display size. Most monitors are 1920x1080 or 2560x1440, so storing a 4K file only makes the decoder do unpaid work.',
          'Change the format. JPEG to WebP usually drops six to seven tenths of the size at the same perceived quality; if you can tolerate slower encoding, go to AVIF.',
          'Set quality to 78-82. Below that band, gradients start banding; above it, the difference is invisible.',
          'Strip metadata. Shooting info, colour profiles and embedded thumbnails can hold tens of kilobytes.',
        ] },
        'One more step saves more than all four: if the background is a gradient or a flat colour with noise, do not use an image at all. A CSS gradient is tens of bytes of text, loads in zero time, and never softens at any resolution.',
        { type: 'h2', text: 'A size budget you can actually follow' },
        'Having a number beats judging by feel every time. These values work for dark and light themes alike.',
        { type: 'ul', items: [
          'Per-wallpaper target: under 400 KB',
          'Per-wallpaper ceiling: 1 MB. Past that, go back and recompress.',
          'theme.json and CSS: ignore them; anything under a few dozen KB is normal',
          'Whole theme package: keep it under 500 KB',
          'One wallpaper per monitor: multiply the totals by the number of screens, but each image still has to meet the target on its own',
        ] },
        { type: 'h2', text: 'What compression costs you' },
        'Over-compressing shows up in three places. Gradients band, especially across large skies or glows. Dark areas develop blocky noise, which hits dark themes hardest. And text legibility drops, because a mushier wallpaper makes the text on top harder to read — that is a contrast problem rather than a quality one.',
        'The test is crude but works: set the compressed image as your wallpaper, open a window with code, comments and a long paragraph, and read it for thirty seconds at your normal brightness. If your eyes tire, add quality back. Subjective feel is more reliable than any number at this stage.',
        { type: 'h2', text: 'Check before you ship' },
        { type: 'ul', items: [
          'Export at the real display size instead of saving the original',
          'Use WebP or AVIF, never leave a PNG in the package',
          'Look at the dark areas at your lowest brightness and confirm there is no blocky noise',
          'Confirm text on the wallpaper still clears 4.5:1 contrast',
          'Cold start on another machine once and check that the wallpaper appears together with the interface',
        ] },
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'Does compressing a wallpaper under 400 KB visibly hurt quality?', a: 'At 1920x1080 or 2560x1440, rarely. A wallpaper sits underneath the interface, so viewing distance and overlaid text hide the detail loss. Large flat gradients are the case that exposes it, and for those the better fix is a CSS gradient instead of a compressed image.' },
          { q: 'Should I use WebP or AVIF for wallpapers?', a: 'WebP has broader support and encodes faster, and it is enough. AVIF is another 30-40% smaller at the same perceived quality but takes noticeably longer to encode, which suits a wallpaper you compress once and keep.' },
          { q: 'Could the slow load be CDP injection itself?', a: 'No. Injection runs over a localhost connection and carries a few kilobytes of CSS, measured in milliseconds. Any delay you can feel on a cold start comes almost entirely from decoding the image.' },
          { q: 'Do I need a separate wallpaper for each monitor?', a: 'You can, but export each one at that screen\'s real resolution rather than stretching one image across both. Keep every image inside the 400 KB target and the total stays manageable.' },
        ] },
        'Theme load optimization needs no new tool, only a different export habit: export at screen size, use WebP, keep quality near 80. Do it once and follow the same routine every time you swap a wallpaper.',
        { type: 'cta', text: 'Open the custom theme settings →', href: '/en/guides/customize' },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
      ],
    },
  },
  {
    slug: 'codex-theme-css-animations',
    date: '2026-10-04',
    title: {
      zh: '在 Codex 主题里用 CSS 动画：好看与不卡的分界线',
      en: 'Using CSS Animations Inside Codex Themes',
    },
    description: {
      zh: 'Codex 主题里加 CSS 动画，翻车的通常不是写法而是克制。这篇讲哪些动效值得做、数值怎么定、该动哪些属性，以及怎么看出来它开始拖后腿。',
      en: 'CSS animations in a codex theme fail on restraint, not syntax. Which effects are worth it, what numbers to use, which properties to animate, and how to tell when one starts costing you frames.',
    },
    content: {
      zh: [
        'Codex 主题里加 CSS 动画，最容易翻车的不是写法，而是克制。主题 CSS 通过本机 CDP 注入到渲染进程，动画跑在和界面同一层，所以一段写坏的 keyframes 会直接拖慢输入框和滚动。这篇讲哪些动效值得加、数值怎么定，以及怎么看出来它开始拖后腿。',
        { type: 'h2', text: '哪些动画值得做' },
        '判断标准只有一条：这个动效是否帮你看清状态。面板滑入、焦点环呼吸、切换主题时的淡入属于这一类；背景无限旋转、满屏粒子、常驻的发光脉冲属于另一类。后者在第一分钟好看，第三小时开始分神。',
        { type: 'ul', items: [
          '值得加：面板和侧栏的入场位移、焦点环与激活态过渡、主题切换的淡入淡出、加载态的轻微呼吸',
          '谨慎加：背景位移或缩放、长期运行的渐变流动、任何盖在文本上的动画',
          '别加：无限旋转的背景、粒子效果、跟随鼠标的大范围位移',
        ] },
        { type: 'h2', text: '动画数值怎么定' },
        '时长和缓动决定观感。界面元素位移用 160 到 240 毫秒，淡入淡出用 120 到 200 毫秒，循环呼吸用 2.4 到 4 秒。位移超过 300 毫秒，鼠标已经移开了界面还在动，主观上就变成卡顿。',
        { type: 'ul', items: [
          '位移：160 到 240ms，ease-out',
          '淡入淡出：120 到 200ms，linear 或 ease',
          '循环呼吸：2.4 到 4s，ease-in-out，alternate',
          '缓动曲线：优先 cubic-bezier(0.2, 0, 0.2, 1)，短时长下比 ease-in-out 干净',
        ] },
        { type: 'h2', text: '只动不会触发重排的属性' },
        '性能的分水岭在属性选择。transform 和 opacity 走合成层，浏览器可以把它们交给 GPU，主线程空出来处理你的输入。width、height、top、left、box-shadow、filter 这类属性每帧都要重算布局和绘制，在输入框里连续打字时立刻能感觉到掉帧。',
        { type: 'ul', items: [
          '安全：transform（translate / scale / rotate）、opacity',
          '要小心：box-shadow、filter: blur()、background-position',
          '避免：width 和 height、top 和 left、margin、border-width',
        ] },
        { type: 'h2', text: '尊重系统的减弱动效设置' },
        '有一部分用户开了系统级的减弱动态效果，原因可能是前庭敏感，也可能只是不想被晃。用 @media (prefers-reduced-motion: reduce) 把这些动画降到 0.01ms 或者直接关掉，就是几行代码的事，但它决定了这批用户能不能用你的主题。',
        { type: 'ul', items: [
          '纯装饰的动画整段关掉',
          '功能性过渡保留，时长压到 100ms 以内',
          '关掉之后确认静态终态是对的，不要让元素直接消失',
        ] },
        { type: 'h2', text: '怎么判断动画开始拖后腿' },
        '写完不要只靠感觉。打开 Codex，滚动一段长会话，在输入框连续打字，再切换几个主题，看有没有掉帧。想更客观一点，用 DevTools 的 Performance 面板录五秒，看主线程有没有被动画帧反复占满。',
        { type: 'ul', items: [
          '打字时输入框有延迟：动画在动布局属性',
          '滚动掉帧：背景在跑 blur 或大范围位移',
          '切换主题后卡一下：有多个长循环动画同时启动',
          '风扇转起来：动画在持续占用主线程',
        ] },
        { type: 'h2', text: '一份能直接用的起点' },
        '从这四条开始，再按自己的主题改数值。它们只碰 transform 和 opacity，也带了减弱动效的分支。',
        { type: 'ul', items: [
          '.panel { transition: transform 200ms cubic-bezier(0.2, 0, 0.2, 1), opacity 160ms linear; }',
          '@keyframes breathe { from { opacity: 0.55 } to { opacity: 0.85 } }',
          '.focus-ring { animation: breathe 3s ease-in-out infinite alternate; }',
          '@media (prefers-reduced-motion: reduce) { .focus-ring { animation: none } }',
        ] },
        '动画是主题的语气，不是主题的体积。把动效留给状态变化，把静止留给背景，长时段使用才会舒服。',
        { type: 'h2', text: '常见问题 FAQ' },
        { type: 'faq', items: [
          { q: 'Codex 主题里能写 CSS 动画吗？', a: '能。主题包里的 CSS 通过 CDP 注入渲染进程，@keyframes、transition、animation 都可以用。限制在安全层面：主题包只允许 CSS 和图片，不允许 JavaScript。' },
          { q: '动画会让 Codex 变卡吗？', a: '写法正确就不会。只动 transform 和 opacity 时动画走合成层，主线程留给输入和滚动。动 width、box-shadow、filter: blur() 这类属性会触发重排和重绘，打字与滚动时能明显感觉到掉帧。' },
          { q: '背景图能动吗？', a: '可以，但代价偏高。background-position 或 background-size 的动画每帧都要重绘背景层，大图上尤其明显。想要动感，用一张静态图加一层低透明度的渐变遮罩动画，比直接动图便宜得多。' },
          { q: '怎么让动画尊重系统设置？', a: '用 @media (prefers-reduced-motion: reduce) 把装饰性动画关掉，功能性过渡压到 100ms 以内。这个媒体查询读的是系统级的减弱动态效果开关，不需要用户在工具里再设一次。' },
        ] },
        { type: 'cta', text: '打开自定义主题设置 →', href: '/zh/guides/customize' },
        { type: 'cta', text: '逛主题库 →', href: '/zh/gallery' },
      ],
      en: [
        'CSS animations inside a codex theme fail on restraint far more often than on syntax. Codex Skin Studio injects theme CSS into the renderer over local CDP, so your keyframes run on the same layer as the interface. A badly written animation slows down the input box and scrolling directly. Here is what is worth animating, what numbers to use, and how to tell when one starts costing you frames.',
        { type: 'h2', text: 'Which animations are worth it' },
        'One test decides it: does the effect help you read state? Panel slide-ins, a focus ring that breathes, and a crossfade when the theme changes all pass. An endlessly rotating wallpaper, floating particles across the whole window, or a permanent glow pulse do not. The second group looks good for the first minute and starts pulling attention by the third hour.',
        { type: 'ul', items: [
          'Worth it: panel and sidebar entry offsets, focus ring and active-state transitions, a crossfade when switching themes, a soft breathing load state',
          'Use with care: wallpaper drift or zoom, a gradient that flows forever, anything layered over text',
          'Skip: an endlessly rotating background, particle fields, large cursor-following offsets',
        ] },
        { type: 'h2', text: 'What numbers to use' },
        'Duration and easing carry the feel. Offset interface elements by 160 to 240 milliseconds, crossfade over 120 to 200 milliseconds, and run breathing loops for 2.4 to 4 seconds. Past roughly 300 milliseconds on a movement, the pointer has already moved on while the interface is still catching up, and what you perceive is lag.',
        { type: 'ul', items: [
          'Movement: 160 to 240ms, ease-out',
          'Crossfade: 120 to 200ms, linear or ease',
          'Breathing loop: 2.4 to 4s, ease-in-out, alternate',
          'Easing: prefer cubic-bezier(0.2, 0, 0.2, 1), which reads cleaner than ease-in-out at short durations',
        ] },
        { type: 'h2', text: 'Animate only the properties that skip layout' },
        'The performance split comes down to which properties you touch. transform and opacity run on the compositor, so the browser can hand them to the GPU and leave the main thread free for your input. width, height, top, left, box-shadow and filter force a layout and paint recalculation every frame, and you feel it the moment you type continuously into the input box.',
        { type: 'ul', items: [
          'Safe: transform (translate, scale, rotate), opacity',
          'Use with care: box-shadow, filter: blur(), background-position',
          'Avoid: width and height, top and left, margin, border-width',
        ] },
        { type: 'h2', text: 'Honour the reduced motion setting' },
        'Some users turn on reduced motion at the system level, either for vestibular reasons or simply because they do not want to be moved around. Wrapping your decorative animations in @media (prefers-reduced-motion: reduce) and dropping them to 0.01ms or switching them off takes a few lines, and it decides whether those users can work in your theme at all.',
        { type: 'ul', items: [
          'Turn purely decorative animation off entirely',
          'Keep functional transitions, but compress them under 100ms',
          'After turning an animation off, confirm the static end state is correct so nothing simply vanishes',
        ] },
        { type: 'h2', text: 'How to tell when an animation costs you frames' },
        'Do not judge by feel alone. Open Codex, scroll through a long session, type continuously into the input box, then switch between a few themes and watch for dropped frames. For something more objective, record five seconds in the DevTools Performance panel and check whether animation frames keep filling the main thread.',
        { type: 'ul', items: [
          'Input lags while typing: something is animating a layout property',
          'Scrolling stutters: the wallpaper is running a blur or a large offset',
          'A hitch right after switching themes: several long loops start at once',
          'The fan spins up: an animation is holding the main thread continuously',
        ] },
        { type: 'h2', text: 'A starting point you can paste' },
        'Begin with these four rules and adjust the numbers to your theme. They only touch transform and opacity, and they include the reduced motion branch.',
        { type: 'ul', items: [
          '.panel { transition: transform 200ms cubic-bezier(0.2, 0, 0.2, 1), opacity 160ms linear; }',
          '@keyframes breathe { from { opacity: 0.55 } to { opacity: 0.85 } }',
          '.focus-ring { animation: breathe 3s ease-in-out infinite alternate; }',
          '@media (prefers-reduced-motion: reduce) { .focus-ring { animation: none } }',
        ] },
        'Animation is the tone of a theme, not its weight. Spend motion on state changes and leave the background still, and long sessions stay comfortable.',
        { type: 'h2', text: 'FAQ' },
        { type: 'faq', items: [
          { q: 'Can I write CSS animations inside a Codex theme?', a: 'Yes. Theme CSS is injected into the renderer over CDP, so @keyframes, transition and animation all work. The limits are on the safety side: a theme package may contain CSS and images, but no JavaScript.' },
          { q: 'Will animations make Codex slow?', a: 'Not if they are written well. Animating only transform and opacity keeps the work on the compositor and leaves the main thread for input and scrolling. Animating width, box-shadow or filter: blur() forces layout and paint work, and you notice dropped frames while typing and scrolling.' },
          { q: 'Can the wallpaper move?', a: 'It can, but it is the expensive option. An animation on background-position or background-size repaints the background layer every frame, which shows most on large images. For a sense of motion, use a static image plus a low-opacity gradient overlay animation, which costs far less than moving the image itself.' },
          { q: 'How do I respect the system motion setting?', a: 'Use @media (prefers-reduced-motion: reduce) to switch decorative animation off and compress functional transitions under 100ms. That media query reads the system-level reduced motion switch, so users do not have to configure anything inside the tool.' },
        ] },
        { type: 'cta', text: 'Open the custom theme settings →', href: '/en/guides/customize' },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
      ],
    },
  },

  {
    slug: 'codex-theme-hsl-oklch-color-palette',
    date: '2026-10-05',
    title: {
      zh: '高级配色：用 HSL 与 OKLCH 调出舒服的 Codex 主题色',
      en: 'Advanced Color: Comfortable Codex Theme Palettes with HSL and OKLCH',
    },
    description: {
      zh: '十六进制色值改来改去还是刺眼？把 Codex 主题换成 HSL 与 OKLCH 配色之后每个属性都能读懂：调明度就是改一个数字，且同一明度在不同色相上观感一致。附迁移步骤与对比度检查。',
      en: 'A codex theme hsl color palette behaves differently from a list of hex codes: lightness becomes one number you can read, and OKLCH makes that number mean the same thing across hues. Here is how to convert a theme and what to check before you commit.',
    },
    content: {
      zh: [
        'Codex HSL 配色改起来轻松，是因为每个属性都能读懂：hsl(210 60% 45%) 一眼就是偏蓝、中等饱和、明度偏暗。相比之下，十六进制把红绿蓝压进六个字符，改一个字符三个通道一起动。这篇讲 HSL 和 OKLCH 怎么用在 Codex 主题上，老主题怎么迁，以及动手前该做哪些检查。',
        { type: 'h2', text: '十六进制为什么不适合调色' },
        '一个色值把三个通道打包成六个字符。你改一个字符，红绿蓝同时移动，方向还不能从字符串上判断出来。想要「稍微深一点」，唯一办法是打开取色器碰运气。',
        { type: 'ul', items: [
          '#3fb950 只告诉你这个绿在 sRGB 里的位置，不告诉你它看起来多亮',
          '两个你以为亮度接近的颜色，到屏幕上可能差十几分',
          '每次微调都要往返一趟取色器',
          '字符串里没有任何线索提示你要改哪一位才能变暗',
        ] },
        { type: 'h2', text: 'HSL 的三个数字分别管什么' },
        'hsl(210 60% 45%) 读出来是：偏蓝的色相、中等饱和度、明度落在中线以下。想更暗就把第三个数字往下拉，想更灰就把第二个往下拉。相信这层对应关系之后，整套配色可以手写出来，不用在取色器里反复点。',
        { type: 'ul', items: [
          '色相 hue：色轮上的角度，0 到 360。动它就换了颜色家族',
          '饱和度 saturation：离灰有多远。0% 是灰，100% 是当前色域能吼到的极限',
          '明度 lightness：黑与白之间的位置，也是你改得最多的一个',
          '暗色主题里的正文，明度一般落在 70% 到 85% 之间',
        ] },
        { type: 'h2', text: 'OKLCH 差在哪，值不值得换' },
        'OKLCH 是感知均匀的色彩空间：同一个明度数值，在不同色相上看起来就是一样亮，这件事 HSL 做不到。两段 HSL 都设成 60% 明度，黄色会比蓝色明显更亮；在 OKLCH 里它们基本对齐。做主题时这意味着你排的那条明度阶梯是真的阶梯。',
        '第二个不同是它用彩度（chroma）替代饱和度。彩度不会被显示器色域裁掉，换色相时数值可以保持不变。代价在工具链：跑得动 Codex 的浏览器都能渲染 oklch()，但老一些的设计软件预览不了，所以每条 oklch() 声明上面最好留一行 hex 或 hsl() 兜底。',
        { type: 'ul', items: [
          'oklch(65% 0.13 250)：依次是明度、彩度、色相',
          '明度是感知的，65% 在蓝色和黄色上读起来一样亮',
          '彩度超过大约 0.37 就出了 sRGB，多数屏幕会直接裁剪',
          '每条 oklch() 上面保留一行 hex 或 hsl() 作为兜底',
        ] },
        { type: 'h2', text: '把现有主题迁过去' },
        { type: 'ul', items: [
          '先把主题文件里的颜色全列出来，注明每个填充的是哪个位置',
          '逐个转成 HSL，记下得到的三个数字',
          '按角色分组：背景、正文、语法高亮、强调色',
          '先给每个角色定好明度阶梯，别急着动色相',
          '结构定下来之后再迁到 OKLCH，一次转一个角色',
        ] },
        { type: 'h2', text: '提前发现问题的几个检查' },
        { type: 'ul', items: [
          '拿正文明度和背景明度对比，OKLCH 下落差建议保持在 40 以上',
          '眯眼看屏幕：两个语法颜色糊在一起时，动色相而不是动明度',
          '把屏幕亮度调到很低再看一遍，低对比主题往往倒在这一步',
          '亮色和暗色两套都要看，任何你漏掉的角色都会退回默认值',
          '留意滚动条和行号槽，它们通常是最晚被上色的地方',
        ] },
        '配色是主题里唯一每行代码都会碰到的部分，值得先花一小时把它排好。想对照成品可以直接翻开主题画廊 https://codex-skin-studio.shop/zh/gallery/ 里的现成预设，改完回到 https://codex-skin-studio.shop/zh/ 也能看到其余入口。',
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '主题该写成 OKLCH 还是继续用 hex？', a: '打算长期调整的部分用 OKLCH，并在每条声明上面保留一行 hex 或 hsl() 兜底。已经定型、不会再改的主题用 hex 没问题。凡是还想手工微调的颜色，换成感知均匀的色彩空间之后会省很多事。' },
          { q: 'OKLCH 在所有能跑 Codex 的浏览器上都能用吗？', a: '当前版本的 Chrome 和 Safari 都支持。Codex 通过 Chromium 渲染，所以只要你的 Codex 能跑，oklch() 就能解析。问题出在外部工具，老版本设计软件可能预览错误，这正是兜底那行存在的理由。' },
          { q: '一套主题配色应该有多少个颜色？', a: '舒服的区间是八个到二十个。少于八个，各种元素会挤在同几个位上互相打架；超过二十个，你维护的是读代码的人根本察觉不到的差别。' },
          { q: '为什么我的 HSL 配色在不同色相上看起来深浅不均？', a: '因为 HSL 的明度不是感知均匀的。60% 明度的黄色看起来比 60% 明度的蓝色亮得多。这正是 OKLCH 要解决的具体问题，也是结构定下来之后值得迁过去的原因。' },
        ] },
        { type: 'cta', text: '打开自定义面板调色 →', href: '/zh/guides/customize' },
        { type: 'cta', text: '回到首页浏览全部主题 →', href: 'https://codex-skin-studio.shop/zh/' },
      ],
      en: [
        'A codex theme hsl color palette reads differently from a list of hex codes, and that difference decides whether a theme stays calm through a long session or starts grating after an hour. hsl() splits a color into hue, saturation and lightness, three numbers you can reason about one at a time. Most theme authors never leave hex, so most palettes get built by guessing in a color picker.',
        { type: 'h2', text: 'Why hex is a poor format for editing colors' },
        'A hex code packs three channels into six characters. Change one character and red, green and blue all move together in a direction you cannot predict from looking at the string. Asking for a slightly darker version means opening a picker and hoping.',
        { type: 'ul', items: [
          '#3fb950 tells you where that green sits in sRGB and nothing about how bright it reads',
          'Two colors you think share brightness can differ by fifteen points on screen',
          'Every small adjustment becomes a round trip to a picker',
          'Nothing in the string hints at which value to move to darken it',
        ] },
        { type: 'h2', text: 'What each HSL number controls' },
        'hsl(210 60% 45%) reads as a blue leaning hue, moderate saturation, lightness sitting below the middle. Darkening means pulling the third number down. Desaturating means pulling the second down. Once you trust that mapping you can write the whole palette by hand instead of clicking around a picker.',
        { type: 'ul', items: [
          'Hue: the angle on the wheel, 0 to 360. Move it and you change which color family you are in',
          'Saturation: distance from grey. 0% is grey, 100% is as loud as the gamut allows',
          'Lightness: position between black and white, and the value you edit most',
          'Body text on a dark background usually lands between 70% and 85% lightness',
        ] },
        { type: 'h2', text: 'Where OKLCH differs, and whether it is worth it' },
        'OKLCH is perceptually uniform, which means a given lightness value looks equally bright whatever the hue. HSL does not manage that. Two colors both set to 60% lightness in HSL can look wildly different, with yellow reading much brighter than blue. In OKLCH they line up, so the lightness ladder you lay out is actually a ladder.',
        'The second difference is chroma instead of saturation. Chroma is not clipped by the display gamut, so values stay consistent when you move between hues. The trade-off sits in the toolchain: any browser recent enough to run Codex resolves oklch(), but older design tools preview it wrong. Keep a hex or hsl() fallback line above each declaration.',
        { type: 'ul', items: [
          'oklch(65% 0.13 250): lightness, chroma, hue, in that order',
          'Lightness is perceptual, so 65% reads the same whether the hue is blue or yellow',
          'Chroma above roughly 0.37 leaves sRGB and gets clipped on most displays',
          'Keep a hex or hsl() fallback line above every oklch() declaration',
        ] },
        { type: 'h2', text: 'Converting a theme you already have' },
        { type: 'ul', items: [
          'List every color in the theme file and note which slot each one fills',
          'Convert each value to HSL and write down the resulting triplet',
          'Group them by role: backgrounds, body text, syntax, accents',
          'Set target lightness steps per role before you touch any hue',
          'Move to OKLCH once the structure holds, one role at a time',
        ] },
        { type: 'h2', text: 'Checks that catch trouble before you commit' },
        { type: 'ul', items: [
          'Compare body lightness against background lightness and keep the gap above 40 in OKLCH terms',
          'Squint at the screen: if two syntax colors merge, separate them in hue rather than lightness',
          'Turn screen brightness low and look again, which is where weak contrast themes fall apart',
          'Check both light and dark schemes, since any role you skip falls back to the default',
          'Look at the scrollbar and the gutter, usually the last elements anybody colors',
        ] },
        'Color is the one part of a theme that touches every line you read, so an hour spent on it upfront pays back for months. Compare against finished work in the gallery at https://codex-skin-studio.shop/en/gallery/, and the rest of the entry points sit on https://codex-skin-studio.shop/en/.',
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'faq', items: [
          { q: 'Should I write my Codex theme in OKLCH or keep hex?', a: 'Use OKLCH for anything you expect to adjust later, and keep a hex or hsl() fallback line above each declaration. A theme that is finished and will never be edited again is fine in hex. Anything you plan to tune by hand gets much easier in a perceptual format.' },
          { q: 'Does OKLCH work everywhere Codex runs?', a: 'Current Chrome and Safari both support it. Codex renders through Chromium, so if your Codex build runs, oklch() resolves. The trouble is in external tools, where older design software previews it incorrectly, which is exactly why the fallback line earns its keep.' },
          { q: 'How many colors should a theme palette hold?', a: 'Somewhere between eight and twenty. Below eight and every element competes for the same few slots. Past twenty you are maintaining distinctions nobody perceives while reading code.' },
          { q: 'Why does my HSL palette look uneven across hues?', a: 'Because HSL lightness is not perceptual. Yellow at 60% lightness looks considerably brighter than blue at 60%. That gap is the specific problem OKLCH was built to close, and the reason to move once your structure settles.' },
        ] },
        { type: 'cta', text: 'Open the custom theme panel →', href: '/en/guides/customize' },
        { type: 'cta', text: 'Back to the homepage for every theme →', href: 'https://codex-skin-studio.shop/en/' },
      ],
    },
  },
  {
    slug: 'codex-theme-accessibility',
    date: '2026-10-06',
    title: {
      zh: '定制主题的可访问性：对比度与色盲友好',
      en: 'Theme Accessibility: Contrast and Color-Blind Friendly',
    },
    description: {
      zh: '配色好看和看得清是两件事。Codex 主题可访问性要量哪些元素、WCAG 三档门槛怎么落到主题上，以及色盲友好不等于把颜色调淡。',
      en: 'A theme looking good and a theme you can read are separate problems. Which pairs to measure for contrast ratio, how the WCAG thresholds map onto a Codex theme, and why color-blind friendly is not the same as pastel.',
    },
    content: {
      zh: [
        '换主题时最容易跳过的一件事：配色好不好看，和看不看得清，是两个问题。Codex 主题可访问性落在实际的地方——正文和背景的对比度够不够、相邻的语法高亮分不分得开、整套装上之后色觉障碍的同事还能不能用。这篇讲要量哪些元素、门槛定在哪、改完之后怎么验。',
        { type: 'h2', text: '对比度到底在量什么' },
        { type: 'p', text: '对比度是两个颜色亮度之间的比值，写成 21:1 到 1:1 之间的一个数。纯黑配纯白是 21:1，同一个颜色配自己是 1:1。它只看亮度，不看色相，所以两个看起来毫不相关的颜色可能有完全一样的对比度。' },
        { type: 'ul', items: [
          '正文对背景：读代码时最主要的一对，也是唯一必须过 AA 的一对',
          '注释对背景：通常最先掉到门槛下面，因为注释本来就被设计成要退后一步',
          '选中态对未选中态：区分度不够时你会反复框错行',
          '行号与缩进参考线：不影响理解代码，但影响你找不找得到光标',
          '光标对背景：只有一像素宽，对比度不够等于没画',
        ] },
        { type: 'h2', text: 'WCAG 的三档门槛怎么落到主题上' },
        { type: 'p', text: 'WCAG 给的是三档：AA 要求普通文字 4.5:1、大号文字 3:1，AAA 把普通文字提到 7:1。直接套到代码编辑器上会有点别扭，因为语法高亮既不是普通文字也不是大号文字，而且你一次读的是几百行，不是一个标题。' },
        { type: 'ul', items: [
          '正文、字符串、关键字：按普通文字算，目标 4.5:1',
          '注释：同样是普通文字，别因为它灰就放过',
          '标签、滚动条这类压在背景上的 UI 元素：按 3:1 算',
          '分隔线、缩进线这类装饰元素：不设门槛，但低于 1.5:1 基本等于没画',
          'AAA 的 7:1 值得追，但只追正文这一条就够，全套追下来配色会被压平',
        ] },
        { type: 'h2', text: '色盲友好不是把颜色调淡' },
        { type: 'p', text: '最常见的误解是把色盲友好理解成少用红绿。红绿色盲确实是最常见的类型，但解法不是回避某个色相，而是给颜色加上第二个区分维度：明度。两个语法色只靠色相分开，红绿色盲看到的是同一个颜色；让它们的明度错开，问题就没了。' },
        { type: 'ul', items: [
          '红绿色盲影响的是色相判断，不是明暗判断，所以明度是最可靠的第二维度',
          '同样明度的红和绿在红绿色盲眼里几乎重合，把其中一个提亮或压暗就分开了',
          '别只用颜色表达状态：错误提示配个图标或文字，别只靠变红',
          '蓝黄色盲更少见，同一套规则照用',
          '把整套调成低饱和的粉彩不会让事情变好，只会把对比度一起拖下去',
        ] },
        { type: 'h2', text: '动手前的四项检查' },
        { type: 'ul', items: [
          '把显示器亮度调到最低再看一遍正文，弱对比度的主题都是在这个亮度下崩的',
          '眯眼看屏幕：两个语法色糊成一片时，先动色相而不是明度',
          '用取色器量渲染出来的实际颜色，把数字写下来，别凭感觉',
          '亮色和暗色两套都测，只定义了一套的槽位会退回默认值',
          '找一位色觉障碍的同事看一眼，五秒钟能发现你自己永远发现不了的问题',
        ] },
        { type: 'p', text: '动手前先查一遍，比改完再返工省事得多。改颜色去 /zh/guides/customize，想看成品长什么样可以去图库 https://codex-skin-studio.shop/zh/gallery，关于这套工具的更多背景在 /zh/about。' },
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: 'Codex 主题的对比度要到多少才算合格？', a: '正文对背景按 4.5:1 走，这是 WCAG AA 对普通文字的要求。注释别豁免，一行行读下来它的量并不小。标签、滚动条这类 UI 元素按 3:1。装饰性的分隔线没有硬性门槛，但低于 1.5:1 基本等于没画。' },
          { q: '色盲友好的主题是不是只能做成灰扑扑的？', a: '不是。色觉障碍影响的是色相判断，对明度判断基本没影响。饱和度可以留着，让相邻的语法色在明度上错开，颜色照样鲜艳，只是不再只靠颜色传递信息。反过来，把整套调成低饱和粉彩会把对比度一起压下去，那才是真的变难读。' },
          { q: '不装工具怎么测对比度？', a: '浏览器 DevTools 里就有。用取色器吸一下前景和背景，把色值丢进任意在线对比度计算器，或者直接看 DevTools 颜色面板给出的对比度数值。要注意量的是渲染出来的实际颜色，不是你在 CSS 里写的那个变量。' },
          { q: '亮色和暗色两套都要检查吗？', a: '要。主题框架在两套方案之间切换变量，只定义了一边的槽位会退回默认值，对比度往往就是在那里崩掉的。两边都写完整，切换时才不会突然变成一片白或者一片黑。' },
        ] },
        { type: 'cta', text: '打开自定义主题面板调对比度 →', href: '/zh/guides/customize' },
        { type: 'cta', text: '在 codex-skin-studio.shop 看完整主题库 →', href: 'https://codex-skin-studio.shop/zh/' },
      ],
      en: [
        'The thing people skip when picking a theme: looking good and being readable are two different problems. Codex theme accessibility comes down to concrete pairs, whether body text clears the background, whether neighbouring syntax colors separate, and whether the palette still works for somebody with a color vision deficiency. Here is what to measure, where to set the threshold, and how to check the result.',
        { type: 'h2', text: 'What a contrast ratio actually measures' },
        { type: 'p', text: 'A contrast ratio is the difference in luminance between two colors, written as a number between 21:1 and 1:1. Black on white is 21:1, and a color against itself is 1:1. It only looks at brightness, never hue, so two colors that look nothing alike can share the exact same ratio.' },
        { type: 'ul', items: [
          'Body text against the background: the pair you read most, and the only one that has to clear AA',
          'Comments against the background: usually the first to fall under the threshold, because comments are designed to recede',
          'Selected against unselected: too little separation and you keep selecting the wrong line',
          'Line numbers and indent guides: they do not change comprehension, but they change whether you can find your cursor',
          'The caret against the background: one pixel wide, so weak contrast means it might as well not be drawn',
        ] },
        { type: 'h2', text: 'How the WCAG thresholds map onto a theme' },
        { type: 'p', text: 'WCAG gives three levels: AA asks for 4.5:1 on normal text and 3:1 on large text, and AAA pushes normal text to 7:1. Applying that to an editor is awkward, because syntax highlighting counts as neither normal text nor large text, and you read several hundred lines of it rather than one heading.' },
        { type: 'ul', items: [
          'Body text, strings, keywords: treat as normal text and aim at 4.5:1',
          'Comments: also normal text. Do not let them off because they are grey',
          'Tabs, scrollbars and other UI sitting on the background: 3:1',
          'Dividers and indent guides: no threshold, but anything under 1.5:1 is effectively not drawn',
          'AAA at 7:1 is worth chasing for body text alone. Chasing it everywhere flattens the palette',
        ] },
        { type: 'h2', text: 'Color-blind friendly is not pastel' },
        { type: 'p', text: 'The common misreading is that color-blind friendly means avoiding red and green. Red-green deficiency is the most common type, but the fix is not to avoid a hue. It is to give colors a second axis of separation, which is lightness. Two syntax colors that differ only in hue collapse into one for a red-green viewer. Separate them by lightness and the problem disappears.' },
        { type: 'ul', items: [
          'Red-green deficiency affects hue judgments and leaves lightness judgments intact, which makes lightness the reliable second axis',
          'Red and green at the same lightness nearly overlap for a red-green viewer; lift or drop one and they separate',
          'Never encode state in color alone: an error needs an icon or a word, not just red',
          'Blue-yellow deficiency is rarer, and the same rule covers it',
          'Washing the palette into low-saturation pastels does not help, it drags contrast down with it',
        ] },
        { type: 'h2', text: 'Four checks before you commit' },
        { type: 'ul', items: [
          'Turn the display brightness down and read body text again, which is where weak-contrast themes fall apart',
          'Squint at the screen: when two syntax colors merge, change hue rather than lightness',
          'Sample the rendered color and write the number down instead of eyeballing it',
          'Test both the light and dark scheme, since any slot you only filled in one falls back to the default',
          'Ask one colleague with a color vision deficiency to look, which catches in five seconds what you will never see yourself',
        ] },
        { type: 'p', text: 'Checking accessibility before you start editing beats redoing it afterwards. Colors live in /en/guides/customize, finished examples sit in the gallery at https://codex-skin-studio.shop/en/gallery, and the background on this tool is at /en/about.' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'faq', items: [
          { q: 'How much contrast does a Codex theme need?', a: 'Aim at 4.5:1 for body text against the background, which is the WCAG AA bar for normal text. Comments do not get a pass just because they are dim, since you read a lot of them. Tabs, scrollbars and similar UI sit at 3:1. Decorative dividers have no hard threshold, but under 1.5:1 they are effectively not drawn.' },
          { q: 'Does a color-blind friendly theme have to look grey?', a: 'No. Color vision deficiency affects hue perception and leaves lightness perception mostly intact. Keep the saturation, separate neighbouring syntax colors by lightness, and the palette stays vivid while no longer relying on hue alone to carry meaning. Turning everything into low-saturation pastel does the opposite, because it drags the contrast ratio down with it.' },
          { q: 'How do I measure contrast without installing anything?', a: 'Browser DevTools already does it. Sample the foreground and background with the picker, run the values through any contrast calculator, or read the ratio DevTools prints next to the color. Measure the color as rendered, not the variable you wrote in the CSS.' },
          { q: 'Do I need to check both the light and dark scheme?', a: 'Yes. The theme framework swaps variables between the two schemes, and any slot you only defined in one falls back to the default, which is usually where contrast falls apart. Write both out fully and the switch never turns the interface into a whiteout or a black hole.' },
        ] },
        { type: 'cta', text: 'Open the custom theme panel and tune contrast →', href: '/en/guides/customize' },
        { type: 'cta', text: 'Browse the full theme library at codex-skin-studio.shop →', href: 'https://codex-skin-studio.shop/en/' },
      ],
    },
  },
  {
    slug: 'codex-theme-color-psychology',
    date: '2026-10-07',
    title: {
      zh: '主题设计的心理学：颜色如何影响情绪',
      en: 'The Psychology of Theme Design: How Colors Affect Mood',
    },
    description: {
      zh: 'Codex 主题的颜色在一整天里怎么影响你的状态：哪些色调帮你沉进专注工作，哪些会在第八个小时开始磨人，以及怎么在自己身上试一套配色。',
      en: 'How codex theme color psychology plays out over an eight hour day: which hues help you settle into focused work, which ones start to grind by hour eight, and how to test a palette on yourself.',
    },
    content: {
      zh: [
        '同一份代码，换个配色，下午四点的体感能差出一档。Codex 主题的配色不只是审美问题，颜色一直在不知不觉地影响你的唤醒水平和耐心，这也是为什么有些主题装上第一天很喜欢，用到第二周只想换掉。',
        { type: 'h2', text: '颜色心理学在编辑器里能说明什么' },
        { type: 'p', text: '颜色心理学能给出的结论比网上流传的「蓝色让人冷静」要窄得多。可靠的部分集中在两件事：短波长的冷色让环境显得后退，长波长的暖色让元素显得逼近；饱和度高的颜色更能抓住注意力，代价是看久了更累。剩下那些「紫色激发创造力」的说法，基本没有可重复的证据。' },
        { type: 'p', text: '放到代码编辑器里，这两条就够用了。背景是冷是暖决定整个界面的压迫感，语法色里哪个最饱和决定你的眼睛先落在哪里。' },
        { type: 'ul', items: [
          '背景偏冷、明度偏低：界面往后退，代码往前站，长时间读代码更稳',
          '背景偏暖：界面更近，短会话里显得亲切，长会话容易发闷',
          '高饱和语法色：抓注意力很好，四个以上同时用会互相打架',
          '低饱和语法色：耐看，代价是扫读时不容易定位关键词',
          '大面积纯白或纯黑背景：对比度最高，也最容易在暗光环境下刺眼',
        ] },
        { type: 'h2', text: '一天里你其实要三套状态' },
        { type: 'p', text: '把「选一个主题然后永远不换」当成目标是错的一半。上午读代码、下午写新代码、晚上修 bug，这三种活需要的唤醒水平不一样。' },
        { type: 'ul', items: [
          '上午读别人的代码：低饱和冷色背景，让结构而不是颜色主导',
          '下午写新代码：主色可以亮一点，写完一段的完成感更强',
          '晚上改 bug：把红色错误提示调醒目，其余配色压下去',
          '演示和共享屏幕：提高对比度和饱和度，投影和小屏都会吃掉细节',
        ] },
        { type: 'h2', text: '真正磨人的是什么' },
        { type: 'p', text: '让一个主题在第八个小时崩掉的，通常不是色相，是三件更具体的事。' },
        { type: 'ul', items: [
          '背景不够暗却把正文调得很亮，瞳孔一直在收缩放松之间来回',
          '注释和背景的对比度压到 2:1 以下，读注释变成一件费力的事',
          '同一个高饱和色既用在字符串又用在错误提示，久了就不再有警告意味',
          '亮色暗色两套只写了其中一套，切换时一半槽位退回默认值',
        ] },
        { type: 'h2', text: '在自己身上试一套配色' },
        { type: 'p', text: '别凭第一眼的喜欢判断。装上的前十分钟谁都会觉得新鲜，问题都出在第三天。' },
        { type: 'ul', items: [
          '连续用满三天再下结论，第一天的新鲜感不算数',
          '在下午最困的那段时间看一眼，那是配色最吃不住的时候',
          '用取色器量一下注释对背景的实际对比度，别靠眼睛估',
          '把你最常用的那个语法色单独调饱和度，一次只动一个值',
          '两套方案都写完整再切换，只写了一边的槽位会退回默认色',
        ] },
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '真的有让人更专注的 Codex 主题配色吗？', a: '有方向，没有配方。低饱和、冷色、明度偏低的背景普遍更耐读，但具体到某个人还要看显示器亮度和环境光。同一套配色在 27 寸外屏和笔记本内屏上的体感经常不一样。' },
          { q: '为什么我很喜欢的主题用两周就想换掉？', a: '多半是高饱和配色在初见时的新鲜感。抓注意力的颜色看久了会变成噪声，尤其是当同一个高饱和色同时用在字符串、错误提示和高亮上。把饱和度降一档，主题通常能多撑几个月。' },
          { q: '深色主题一定比亮色主题更护眼吗？', a: '不一定。深色在暗环境里更舒服，亮色在阳光充足的房间里更清楚。真正影响疲劳的是正文与背景的对比度是否落在合适区间，以及注释有没有被压到读不清。' },
          { q: '换主题的频率有讲究吗？', a: '按任务换比按心情换有用。读代码、写新代码、改 bug 各留一套对应配色，比一天换五次更能减少眼睛的适应负担。' },
        ] },
        { type: 'cta', text: '打开自定义面板调一套配色 →', href: '/zh/guides/customize' },
        { type: 'cta', text: '看看现成的主题长什么样 →', href: '/zh/gallery' },
        { type: 'p', text: '配色面板在 /zh/guides/customize，现成方案在 /zh/gallery，挑选思路见 /zh/guides/best-codex-themes。想直接上手就去 codex-skin-studio.shop 下载，装好后在托盘里随时切换。' },
      ],
      en: [
        'Same code, different palette, and four in the afternoon feels a notch worse. Color keeps nudging your arousal level and your patience, and Codex theme color is where that lands hardest: a palette you love on day one is often the one you want gone by week two.',
        { type: 'h2', text: 'What color psychology can actually say about an editor' },
        { type: 'p', text: 'The honest version of color psychology is narrower than the "blue makes you calm" version. What holds up is mostly two things: short wavelength cool colors make a surface recede and long wavelength warm colors make it advance, and saturated color grabs attention at the cost of tiring you out faster. The rest, including purple boosting creativity, has little repeatable evidence behind it.' },
        { type: 'p', text: 'That is enough for a code editor. Whether the background runs cool or warm sets how much the interface presses on you, and whichever syntax color is most saturated sets where your eye lands first.' },
        { type: 'ul', items: [
          'Cool, lower lightness background: the chrome recedes and the code comes forward, which holds up over long reading sessions',
          'Warm background: the interface sits closer, pleasant for a short session and stuffy in a long one',
          'Saturated syntax colors: excellent for pulling attention, and they fight each other once you run four or more',
          'Desaturated syntax colors: easy to live with, and harder to scan when you are hunting for a keyword',
          'Pure white or pure black background: maximum contrast, and the most likely to glare once the room light drops',
        ] },
        { type: 'h2', text: 'You need three states, not one' },
        { type: 'p', text: 'Picking one theme and never changing it is half the mistake. Reading code in the morning, writing new code in the afternoon, and fixing bugs at night ask for different arousal levels.' },
        { type: 'ul', items: [
          'Morning reading: desaturated cool background so structure leads rather than color',
          'Afternoon writing: a brighter accent makes finishing a block feel like more',
          'Evening bug fixing: make the red error state obvious and push everything else back',
          'Demos and screen sharing: raise contrast and saturation, since projectors and small screens eat detail',
        ] },
        { type: 'h2', text: 'What actually wears you down' },
        { type: 'p', text: 'The thing that breaks a theme at hour eight is usually not hue. It is three more specific failures.' },
        { type: 'ul', items: [
          'A background that is not dark enough under very bright body text, so your pupils keep working',
          'Comments sitting under 2:1 against the background, which turns reading them into effort',
          'One saturated color doing double duty for strings and errors, which stops reading as a warning',
          'Only one of the light and dark schemes written out, so half the slots fall back to defaults on switch',
        ] },
        { type: 'h2', text: 'Testing a palette on yourself' },
        { type: 'p', text: 'Do not judge on first impression. Everything feels fresh for the first ten minutes, and problems show up on day three.' },
        { type: 'ul', items: [
          'Use it for three straight days before deciding, since day one novelty does not count',
          'Look at it during your sleepiest stretch of the afternoon, which is where palettes fail',
          'Sample the actual comment against background ratio instead of eyeballing it',
          'Change one value at a time, starting with the syntax color you read most',
          'Fill in both schemes fully before switching, since a slot defined in only one falls back to the default',
        ] },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'faq', items: [
          { q: 'Is there a Codex theme palette that genuinely improves focus?', a: 'There is a direction and no recipe. Desaturated, cool, lower lightness backgrounds tend to read better for longer, but the result also depends on your monitor brightness and the light in the room. One palette often feels different on a 27 inch external display than on a laptop screen.' },
          { q: 'Why do I want to replace a theme I loved after two weeks?', a: 'Usually saturation. Colors that grab attention turn into noise once you have seen them a few thousand times, especially when the same saturated color covers strings, errors and highlights. Dropping saturation one notch often buys you months.' },
          { q: 'Are dark themes easier on the eyes than light ones?', a: 'Not always. Dark works better in a dim room and light works better in a sunlit one. What drives fatigue is whether body text contrast sits in a sane range and whether comments were dimmed into illegibility.' },
          { q: 'How often should I switch themes?', a: 'Switch by task rather than by mood. Keeping one palette for reading, one for writing and one for debugging does more for your eyes than changing five times a day.' },
        ] },
        { type: 'cta', text: 'Open the custom panel and tune a palette →', href: '/en/guides/customize' },
        { type: 'cta', text: 'See how finished themes look →', href: '/en/gallery' },
        { type: 'p', text: 'The palette panel sits at /en/guides/customize, finished options are in /en/gallery, and the picking logic is at /en/guides/best-codex-themes. To try it yourself, download from codex-skin-studio.shop and switch from the tray whenever you like.' },
      ],
    },
  },
  {
    slug: 'codex-theme-presentation-demo',
    date: '2026-10-08',
    title: {
      zh: '如何用 Codex 主题提升演示效果：投屏、录屏与 Demo 现场',
      en: 'How Codex Themes Improve Your Presentation and Demo Look',
    },
    description: {
      zh: 'Codex 主题在投屏和录屏下会发生什么：对比度该怎么定、哪些颜色压缩后还能认出来，以及开播前五分钟能做完的检查清单。',
      en: 'How a codex theme presentation setup holds up on projectors and screen shares: what contrast to target, which colors survive compression, and a five minute checklist before you go live.',
    },
    content: {
      zh: [
        '在 Codex 主题演示这件事上，出问题的位置相当固定：投影仪吃掉对比度，录屏压掉饱和度，你在自己笔记本上调好的字号共享到 12pt 就糊成一团。这些基本都能在开播前处理掉。',
        { type: 'h2', text: '投影仪对你的演示主题做了什么' },
        { type: 'p', text: '投影仪和视频会议压缩画面的方向是一样的：先掉对比度，再掉饱和度，最后是细节。为你自己那块屏幕调的主题，等于为一块没人看的屏幕调的。' },
        { type: 'ul', items: [
          '对比度：本机 12:1 的比例过一遍投影后大约只剩 6:1',
          '饱和度：中等饱和的颜色经过 H.264 编码后大概丢掉三分之一的力度',
          '细节：1px 的边框和细分隔线会整条消失',
          '亮度：会议室的灯通常比你调主题时那间屋子更亮',
        ] },
        { type: 'h2', text: '挑一套适合演示的 Codex 主题' },
        { type: 'p', text: '两条规则能覆盖大部分情况：把对比度提到比你习惯的更高，同时减少你依赖的颜色数量。' },
        { type: 'ul', items: [
          '背景接近纯黑或纯白，不要中间调。中灰背景就是对比度的坟场',
          '正文对背景的对比度做到 15:1 以上',
          '强调色最多两个。三个以上就不再读作强调',
          '注释对背景不低于 4.5:1，因为幻灯片里别人真的会去读注释',
          '选经得起饱和度损失的错误与警告色：红和琥珀扛得住，粉和青不行',
        ] },
        { type: 'h2', text: '字号与 demo 的老问题' },
        { type: 'p', text: '主题修不好 12px 的字，但能让它更糟。低对比度配小字号，是录屏演示里被抱怨最多的一件事。' },
        { type: 'ul', items: [
          '录屏前把编辑器字号往上调两档',
          '关掉背景图，或者把不透明度压到 20% 以下',
          '停掉动画效果，录屏会掉帧，动画看起来是卡的',
          '界面里你不会讲到的部分先收起来',
        ] },
        { type: 'h2', text: '开播前的五分钟检查' },
        { type: 'ul', items: [
          '进会议室之前就切好演示主题，别等到开始共享之后',
          '共享屏幕后，如果有第二台设备，用它在另一端看一眼',
          '打开你准备讲的那份文件，而不是一个临时缓冲区',
          '检查注释颜色，它是最先糊掉的',
          '截一张图，缩到 50% 大小看一遍',
        ] },
        { type: 'h2', text: '录屏和现场不是一回事' },
        { type: 'p', text: '录屏比现场更不留情面。观看的人在手机上看，屏幕亮度常常只有一半，而且没法让你放大一下。' },
        { type: 'ul', items: [
          '工具支持的话按 2 倍缩放录制',
          '饱和度往上提一档就够，两档会被编码放大过头',
          '别用纯白背景，OLED 手机屏上会过曝',
        ] },
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '演示需要单独准备一套主题吗？', a: '对多数人来说一套就够。日常读写用平时那套，再存一个高对比度的预设专门给要投屏的场合，从托盘切换只要几秒。' },
          { q: '哪些颜色共享屏幕后还认得出来？', a: '高对比的组合：接近纯黑的背景配接近纯白的文字，再加一个亮强调色。红色和琥珀在压缩后仍然保留语义；粉色、青色和低饱和的紫色容易糊成灰。' },
          { q: '演示时要不要关掉背景图？', a: '通常是关掉。背景图会拉低正文对比度，还会加一层和你要讲的代码抢注意力的视觉噪声。如果为了品牌必须留，把不透明度压到 20% 以下。' },
          { q: '开播前怎么快速检查对比度？', a: '截一张图，在手机上缩到一半大小看。如果注释在那里已经难读，就把注释颜色调高再开始。多数内置主题只需要动一个值，不用重做。' },
        ] },
        { type: 'cta', text: '看看为对比度做的主题 →', href: '/zh/gallery' },
        { type: 'cta', text: '调一套自己的配色 →', href: '/zh/guides/customize' },
        { type: 'p', text: '现成方案在 /zh/gallery，配色面板在 /zh/guides/customize，挑选思路在 /zh/guides/best-codex-themes。想自己试，从 codex-skin-studio.shop 下载，随时可以在托盘里切回来。' },
      ],
      en: [
        'A codex theme presentation setup fails in predictable ways: the projector eats contrast, screen recording crushes saturation, and the font that looked sharp on your laptop turns to mush at 12pt on a shared screen. Most of it is fixable before you start sharing.',
        { type: 'h2', text: 'What the projector does to your presentation theme' },
        { type: 'p', text: 'Projectors and video calls compress your image in the same direction. Contrast goes first, then saturation, then fine detail. A theme tuned on your own monitor is tuned for a screen nobody else is looking at.' },
        { type: 'ul', items: [
          'Contrast: a 12:1 ratio on your display lands near 6:1 through a projector',
          'Saturation: mid-saturated colors lose about a third of their punch after H.264 encoding',
          'Detail: 1px borders and thin separators disappear entirely',
          'Brightness: the meeting room is usually lit brighter than the room where you picked the theme',
        ] },
        { type: 'h2', text: 'Picking a codex theme for presenting' },
        { type: 'p', text: 'Two rules cover most of it. Push contrast above what feels comfortable to you, and cut the number of colors you depend on.' },
        { type: 'ul', items: [
          'Background near-black or near-white, nothing in between. Mid-gray is where contrast goes to die',
          'Body text at 15:1 or higher against the background',
          'Two accent colors at most. Three or more stop reading as emphasis',
          'Comments no dimmer than 4.5:1 against the background, since people do read them on slides',
          'Pick error and warning colors that survive saturation loss: red and amber hold up, pink and teal do not',
        ] },
        { type: 'h2', text: 'Font size and the demo problem' },
        { type: 'p', text: 'A theme cannot fix a 12px font, but it can make one worse. Low contrast text at small sizes is the most common complaint in recorded demos.' },
        { type: 'ul', items: [
          'Bump the editor font two steps above your daily setting before you record',
          'Turn the wallpaper off or drop opacity under 20 percent',
          'Disable animation effects, since screen recorders drop frames and the motion stutters',
          'Collapse the parts of the UI you are not going to talk about',
        ] },
        { type: 'h2', text: 'A five minute pre-demo checklist' },
        { type: 'ul', items: [
          'Switch to the presenting theme before you join the call, not after',
          'Once you share, look at it from a second device if you have one',
          'Open the file you plan to show, not a scratch buffer',
          'Check the comment color, which is the first thing to wash out',
          'Take one screenshot and view it at 50 percent scale',
        ] },
        { type: 'h2', text: 'Recording versus live' },
        { type: 'p', text: 'Recorded demos are less forgiving than live ones. Viewers watch on phones, often at half brightness, and they cannot ask you to zoom in.' },
        { type: 'ul', items: [
          'Record at 2x scale if your tool supports it',
          'Raise saturation one notch rather than two, since encoding amplifies it',
          'Avoid pure white backgrounds, which blow out on OLED phone screens',
        ] },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'faq', items: [
          { q: 'Do I need a separate presentation theme?', a: 'One is enough for most people. Keep your daily theme for reading and writing, then save a second high-contrast preset for anything you show on a screen. Switching from the tray takes a few seconds.' },
          { q: 'Which colors survive screen sharing best?', a: 'High-contrast pairs: a near-black background with near-white text plus one bright accent. Red and amber keep their meaning after compression. Pink, teal and desaturated purple tend to flatten into gray.' },
          { q: 'Should I turn off the wallpaper during a demo?', a: 'Usually yes. A background image lowers body text contrast and adds visual noise that competes with the code you are explaining. If branding requires it, drop opacity below 20 percent.' },
          { q: 'How do I check contrast before going live?', a: 'Take a screenshot and look at it on your phone at half size. If the comments are hard to read there, raise the comment color first. Most built-in themes need one adjustment rather than a rebuild.' },
        ] },
        { type: 'cta', text: 'See themes built for contrast →', href: '/en/gallery' },
        { type: 'cta', text: 'Tune your own palette →', href: '/en/guides/customize' },
        { type: 'p', text: 'Finished palettes are at /en/gallery, the tuning panel sits at /en/guides/customize, and the picking logic is at /en/guides/best-codex-themes. To try it yourself, download from codex-skin-studio.shop and switch from the tray whenever you like.' },
      ],
    },
  },
  {
    slug: 'codex-theme-community-team-sharing',
    date: '2026-10-09',
    title: {
      zh: '在团队里分享 Codex 主题：怎么养成一个小型主题社区',
      en: 'Building a Theme Community: Sharing Codex Themes Inside Your Team',
    },
    description: {
      zh: '把一份主题包变成团队里人人都能用的东西：导出前要先说好的三件事、共享文件放在哪、三个月之后它还活着的方法。',
      en: 'Turning one theme pack into something a whole team can use: the three things to agree on before exporting, where the shared file belongs, and how to keep it alive past month three.',
    },
    content: {
      zh: [
        '团队里的 Codex 主题社区，起点通常是一个人导出主题包丢进群聊。两周后没人记得哪一版是最新的，三个人悄悄换回了默认主题，做主题的那个人也不再更新了。分享主题难的不是那个文件本身，是它放在哪、归谁管。',
        { type: 'h2', text: '导出之前先说好三件事' },
        { type: 'p', text: '多数团队主题在第一版导出之前就已经走偏了：有人做出一套很好看的预设，而组里一半人在自己的工位上根本看不清。' },
        { type: 'ul', items: [
          '这套包归谁：写一个人名，否则没人更新，所有人都以为别人会更新',
          '哪些锁死、哪些放开：一般是调色板锁死，壁纸由个人决定',
          '大家在多亮的环境里干活：先各要一张截图再定，灯光差异比审美差异更能拆散一支团队',
        ] },
        { type: 'h2', text: '共享包放在哪里' },
        { type: 'p', text: '主题文件本身很小。放在有历史记录的地方，改坏了能退回，不用吵架。' },
        { type: 'ul', items: [
          '团队仓库里的一个文件夹，跟项目一起版本化',
          '一条置顶消息或一个 wiki 页面，谁都能自己找到，不用问人',
          '每次导出都用同一个文件名，省得猜哪份是最新版',
          '别当邮件附件到处发，那是三份几乎一样的主题同时流通的开端',
        ] },
        { type: 'h2', text: '怎么把主题交到同事手上' },
        { type: 'ul', items: [
          '导出一份完整的调色板，不带你自己那张壁纸',
          '写清楚他们大概会想改的那一项，通常就是背景不透明度',
          '先让他导入再改，否则得到的第一印象不是真的',
          '安装步骤和文件放在一起：基础操作在 /zh/blog/codex-skin-complete-guide',
        ] },
        { type: 'h2', text: '两周之后还能活下来的那种' },
        { type: 'p', text: '团队分享到这一步，要么变成习惯，要么悄悄散掉。差别不在主题本身。' },
        { type: 'ul', items: [
          '留一个人做维护者，每次 Codex 发版后例行检查一遍',
          '同一个文件夹里放两行变更记录：改了什么、为什么改',
          '谁都可以提改动，维护者一天之内给答复',
          '只有真的改了东西才重新导出，频繁变动会让人不再信任这个文件',
        ] },
        { type: 'h2', text: '共享包里不该放的东西' },
        { type: 'ul', items: [
          '只适配某一台机器或某一个房间亮度的壁纸图',
          '坏了没人说得清是从哪来的自定义值',
          '属于个人预设的那些微调',
          '只在一个系统上生效的配置，除非全组都用那个系统',
        ] },
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '几个人才谈得上共享一套 Codex 主题？', a: '两个。一旦截图要在人之间传来传去，共用一套调色板就开始有回报了。比这再少，那就只是你自己喜欢的一套主题。' },
          { q: '同事导入之后还能自己改吗？', a: '可以。导入给的是起点，之后怎么改都属于个人。正因为这样，最好当面说清楚调色板里哪几项是团队标准。' },
          { q: '每次改动都要经过维护者吗？', a: '只有动到共享文件的那次需要。个人预设随他怎么漂。' },
          { q: '团队主题多久调整一次？', a: '几个月一次，或者 Codex 发版改动了什么之后。比这更频繁，大家就干脆不看了。' },
        ] },
        { type: 'cta', text: '看看适合拿来共享的主题 →', href: '/zh/gallery' },
        { type: 'cta', text: '导出前先微调配色 →', href: '/zh/guides/customize' },
        { type: 'p', text: '现成的配色在 /zh/gallery，调色面板在 /zh/guides/customize，团队席位看 /zh/pricing。工具从 codex-skin-studio.shop 下载，这周先共享一版试试，多数团队两轮之内就能定下来。' },
      ],
      en: [
        'A codex theme community usually starts with somebody exporting a theme pack and dropping it in a group chat. Two weeks later nobody remembers which version is current, three people have quietly switched back to the default, and whoever built it has stopped updating it. Sharing themes in a team has less to do with the theme file than with where that file lives and who owns it.',
        { type: 'h2', text: 'Agree on three things before anyone exports anything' },
        { type: 'p', text: 'Most team theme collections go wrong before the first export. Somebody builds a good-looking preset that half the team cannot read comfortably at their own desk.' },
        { type: 'ul', items: [
          'Who owns the pack: one name, otherwise nobody updates it and everyone assumes somebody else will',
          'What is locked and what is open: usually the palette is locked and wallpaper stays a personal choice',
          'How bright people work: ask for one screenshot from each person first, because desk lighting splits teams more than taste does',
        ] },
        { type: 'h2', text: 'Where the shared pack belongs' },
        { type: 'p', text: 'The theme file is small. Put it somewhere with history, so a bad change gets reverted instead of argued over.' },
        { type: 'ul', items: [
          'A folder in the team repo, versioned next to the project',
          'One pinned message or wiki page anybody can find without asking',
          'The same export filename every time, so nobody has to guess which pack is current',
          'Skip email attachments. That is how three near-identical copies end up in circulation',
        ] },
        { type: 'h2', text: 'Handing a theme to a teammate' },
        { type: 'ul', items: [
          'Export one pack with the full palette and none of your own wallpaper',
          'Write down the single thing they will probably want to change, usually background opacity',
          'Ask them to import before they tune anything, so the first impression is the real one',
          'Keep the install steps next to the file: the basics are at /en/blog/codex-skin-complete-guide',
        ] },
        { type: 'h2', text: 'Keeping it alive past week two' },
        { type: 'p', text: 'Team sharing either settles into a habit here or quietly dies. The difference is not the theme.' },
        { type: 'ul', items: [
          'One maintainer, with a standing look at things after every Codex release',
          'A two-line changelog in the same folder: what moved and why',
          'Anybody can propose a change, and the maintainer answers within a day',
          'Re-export only when something actually changed, since churn makes people stop trusting the file',
        ] },
        { type: 'h2', text: 'Leave these out of a shared pack' },
        { type: 'ul', items: [
          'Wallpaper images tuned for one machine or one room brightness',
          'Custom values nobody on the team can explain if they break',
          'Per-person tweaks that belong in a private preset',
          'Anything that only works on one operating system, unless everyone runs it',
        ] },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'faq', items: [
          { q: 'How many people make a shared codex theme worth it?', a: 'Two. Once screenshots travel between people, a shared palette starts paying for itself. Below that it is just a theme you happen to like.' },
          { q: 'Can teammates still change things after importing the pack?', a: 'Yes. Importing gives them a starting point and anything they tune afterwards stays personal. That is why it helps to say out loud which parts of the palette are the team standard.' },
          { q: 'Does every change have to go through the maintainer?', a: 'Only changes to the shared file. Personal presets can drift as much as anyone wants.' },
          { q: 'How often should a team theme change?', a: 'Every few months, or right after a Codex release shifts something. Move faster than that and people stop checking.' },
        ] },
        { type: 'cta', text: 'Browse themes worth sharing →', href: '/en/gallery' },
        { type: 'cta', text: 'Tune the palette before you export →', href: '/en/guides/customize' },
        { type: 'p', text: 'Finished palettes are at /en/gallery, the tuning panel sits at /en/guides/customize, and team seats are on /en/pricing. Download from codex-skin-studio.shop, share one pack this week, and most teams settle on something within two rounds.' },
      ],
    },
  },

  {
    slug: 'codex-skin-studio-pro-features',
    date: '2026-10-11',
    title: {
      zh: 'Codex Skin Studio Pro 功能全解析：掏钱买到的到底是什么',
      en: 'Codex Skin Studio Pro Features Explained: What You Actually Get',
    },
    description: {
      zh: 'Codex Skin Studio Pro 到底多了什么：无限自定义配色、壁纸方案、预设导出各自适合谁，以及哪些人其实用不上 Pro。',
      en: 'What codex skin studio pro actually adds: unlimited custom palettes, wallpaper schemes and preset export, who each one suits, and who can skip Pro entirely.',
    },
    content: {
      zh: [
        '免费版已经给了八套内置主题，所以真正的问题不是 Codex Skin Studio Pro 好不好，而是你到底缺它加的那三样里的哪一样。多数人是奔着其中一样买的，最后留下来用的却是另一样，通常是自己调出来的颜色，而不是别人做好的预设。',
        { type: 'h2', text: 'Pro 解锁的三样东西' },
        { type: 'p', text: '把它们分开看比打包看更有用，因为几乎没有人是三样都用得上的。' },
        { type: 'ul', items: [
          '无限自定义配色：从画布上直接取色改任何一项，不受预设出厂值的限制',
          '壁纸方案：透明度、模糊、锚点按窗口状态分开保存',
          '预设导出与导入：把调好的整套方案打包带走，换机器或者发给同事都方便',
        ] },
        { type: 'h2', text: '自定义配色到底能改到多细' },
        { type: 'p', text: '内置主题是固定的八套，你只能在它们之间换。Pro 里每一项颜色都是独立旋钮：背景、前景、光标、选区、行号、缩进参考线、括号匹配，加上语法那一整组，包括关键字、字符串、注释、数字、函数名、类型、操作符、标签、属性和正则。' },
        { type: 'ul', items: [
          '一次只动一个变量，出问题就知道是谁造成的',
          '每改一次就在两种亮度下各看一遍预览，暗环境吃掉某些颜色的速度比你以为的快',
          '面板的逐项说明在 /zh/guides/customize',
        ] },
        { type: 'h2', text: '壁纸方案：买之前最不起眼，用之后最常改的一项' },
        { type: 'p', text: '很多人买 Pro 是为了配色，留下来是因为壁纸。预设给所有人一套同样的成品颜色，而背景图几乎每个人都要重做一遍：在你屏幕上刚好的那张图，到同事机器上往往亮得过头。' },
        { type: 'ul', items: [
          '按你干活的地方来调：会议室投屏和深夜的书桌要的不是同一套参数',
          '透明度通常落在 50% 到 60% 之间，两头各留点余裕会更好改',
          '给别人分享导出的包时，把壁纸单独拆出一份。原因写在 /zh/blog/codex-theme-community-team-sharing',
        ] },
        { type: 'h2', text: '什么人真的需要导出与导入' },
        { type: 'ul', items: [
          '要重装系统或者换机器的人：没有导出，调好的配色等于要重做一遍',
          '在两台以上设备上干活的人：想让两边一致，导出是唯一可靠的办法',
          '要把主题发给同事的人：导入给的是起点，之后他们怎么改都属于个人',
          '只用一台机器、只用内置主题的人：这项对你基本闲置',
        ] },
        { type: 'h2', text: '谁其实可以不上 Pro' },
        { type: 'p', text: '这一段说点实话，因为产品页通常把它省掉了。' },
        { type: 'ul', items: [
          '只是想隔几周换个风格：八套内置轮着用能撑很久',
          '本来就只想要深色背景：免费版里就有',
          '从没改过主题里任何一个值：先把手上这套调一遍，再决定要不要掏钱',
          '一台机器、也不打算分享：导出这项多半只会积灰',
        ] },
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: 'Codex Skin Studio Pro 是订阅还是买断？', a: '价格和席位写在 /zh/pricing，团队席位和个人版是分开算的。' },
          { q: '升级之后内置主题还能用吗？', a: '能。Pro 是在免费版已有的基础上解锁自定义，不会把你原来有的东西收走。' },
          { q: '自定义配色会影响 Codex 的运行吗？', a: '不会。注入的是 CSS 和图片，不碰运行时逻辑，原理在 /zh/blog/codex-skin-studio-no-file-edit 里有说明。' },
          { q: '导出的主题能给别人用吗？', a: '可以。导出文件只包含配色和图片配置，别人导入之后还能继续自己改。' },
        ] },
        { type: 'h2', text: '怎么判断自己要不要升级' },
        { type: 'p', text: '把你现在在用的那套主题手动改三个值试试。结果只有两种：一种是改上瘾了还想接着改，说明你缺的是配色；另一种是改到一半就不想动了，多数时候说明你要的其实是更好的背景，应该先看壁纸方案。' },
        { type: 'cta', text: '看看 Pro 的价格与团队席位 →', href: '/zh/pricing' },
        { type: 'cta', text: '浏览适合自己调的主题 →', href: '/zh/gallery' },
        { type: 'p', text: '工具从 codex-skin-studio.shop 下载，主题在 /zh/gallery，调色面板在 /zh/guides/customize，席位和价格在 /zh/pricing。把你正在用的那套亲手调五分钟，缺的是配色还是壁纸，答案很快就出来了。' },
      ],
      en: [
        'The free plan already hands you eight built-in themes, so the real question isn\'t whether codex skin studio pro is good. It is which one of its three additions you are actually missing. Most people buy it wanting one thing and end up leaning on another, usually the colors they mixed themselves rather than someone else\'s presets.',
        { type: 'h2', text: 'The three things Pro adds' },
        { type: 'p', text: 'Reading them separately works better than reading them as a bundle, since almost nobody uses all three.' },
        { type: 'ul', items: [
          'Unlimited custom palettes: pick any color off the canvas and change it, free of whatever value the preset shipped with',
          'Wallpaper schemes: opacity, blur and anchoring saved per window state',
          'Preset export and import: pack a tuned setup and carry it to another machine or hand it to a teammate',
        ] },
        { type: 'h2', text: 'How far custom palettes actually go' },
        { type: 'p', text: 'Built-in themes are fixed at eight and switching between them is all you can do. In Pro every color is a separate knob: background, foreground, caret, selection, line numbers, indent guides, bracket matching, plus the whole syntax group of keywords, strings, comments, numbers, function names, types, operators, tags, attributes and regex.' },
        { type: 'ul', items: [
          'Change one variable at a time, so you know what broke',
          'Check the preview at two brightness levels after each change, because dark rooms swallow certain values faster than expected',
          'The panel is documented item by item at /en/guides/customize',
        ] },
        { type: 'h2', text: 'Wallpaper schemes: the feature everybody underestimates' },
        { type: 'p', text: 'People buy Pro for the palette and stay for the wallpaper. Presets hand everyone the same finished colors, while background art is something nearly every person redoes, because the image that looks right on your screen blows out on a colleague\'s machine.' },
        { type: 'ul', items: [
          'Tune against where you work: a meeting-room projector and a dark desk at midnight need different numbers',
          'Opacity usually lands between 50% and 60%, and leaving headroom on both sides makes later edits easier',
          'When you hand a pack to someone, export the wallpaper separately. The reason is in /en/blog/codex-theme-community-team-sharing',
        ] },
        { type: 'h2', text: 'Who actually needs export and import' },
        { type: 'ul', items: [
          'Anyone reinstalling an OS or switching machines: with no export, a tuned palette means doing the work twice',
          'People working on more than one device: exporting is the only reliable way those machines agree',
          'People handing themes to teammates: importing gives them a starting point, and whatever they tune afterwards stays theirs',
          'One machine, built-in themes only: this one sits idle for you',
        ] },
        { type: 'h2', text: 'Who can skip Pro entirely' },
        { type: 'p', text: 'Some honesty here, since product pages usually leave this part out.' },
        { type: 'ul', items: [
          'You want a different look every few weeks: rotating eight built-ins keeps you busy for a long while',
          'You only ever wanted a dark background: that ships in the free plan',
          'You have never edited a single value inside a theme: tune the one you have, then decide about paying',
          'One machine, no plans to share anything: export mostly gathers dust',
        ] },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'faq', items: [
          { q: 'Is codex skin studio pro a subscription or a one-time payment?', a: 'Pricing and seats are listed on /en/pricing, with team seats counted separately from individual ones.' },
          { q: 'Can I still use the built-in themes after upgrading?', a: 'Yes. Pro adds customization on top of what the free plan already gives you, and nothing you had gets taken away.' },
          { q: 'Do custom colors affect how Codex runs?', a: 'No. We inject CSS and images, nothing that touches runtime logic. The mechanism is written up at /en/blog/codex-skin-studio-no-file-edit.' },
          { q: 'Can I give an exported theme to someone else?', a: 'You can. Exported files hold only palette and image settings, and whoever imports one can keep tuning it on their side.' },
        ] },
        { type: 'h2', text: 'How to tell whether you should upgrade' },
        { type: 'p', text: 'Take the theme you already use and change three values by hand. Two outcomes. Either you want to keep going, which means palettes were what you were missing, or you get bored halfway, which usually means you wanted better backgrounds and should look at wallpaper schemes first.' },
        { type: 'cta', text: 'See Pro pricing and team seats →', href: '/en/pricing' },
        { type: 'cta', text: 'Browse themes worth customizing →', href: '/en/gallery' },
        { type: 'p', text: 'Download from codex-skin-studio.shop, browse themes at /en/gallery, tune palettes at /en/guides/customize, and check seats on /en/pricing. Five minutes spent hand-tuning the theme you already use will tell you which of the three you were missing.' },
      ],
    },
  },
  {
    slug: 'codex-skin-studio-team-vs-personal',
    date: '2026-10-12',
    title: {
      zh: 'Codex Skin Studio 团队版还是个人版：怎么选不后悔',
      en: 'Codex Skin Studio Team vs Personal: How to Pick Without Regret',
    },
    description: {
      zh: 'codex skin studio team vs personal 到底差在哪：把方案选择拆成几个能直接回答的问题，附一份对照清单和三种最容易选错的情况。',
      en: 'What codex skin studio team vs personal actually differs on: the choice broken into questions you can answer in a minute, plus a comparison list and three ways people get it wrong.',
    },
    content: {
      zh: [
        '免费版、个人版、团队版摆在一起的时候，卡住人的往往不是价格，而是没人告诉你自己属于哪一类。这篇把 codex skin studio team vs personal 拆成几个一分钟就能答完的问题：你几台机器、要不要把主题发给别人、多久重装一次系统。',
        { type: 'h2', text: '先回答三个问题' },
        { type: 'p', text: '选方案不需要翻完整的功能表，三个问题就能定性：' },
        { type: 'ul', items: [
          '你会在几台机器上用：一台，还是两三台',
          '你调好的主题要不要发给别人：发，还是不发',
          '你会改主题里的具体数值，还是只用现成的那几套',
        ] },
        { type: 'h2', text: '个人版适合什么人' },
        { type: 'p', text: '一个人、一两台机器、只想把手上那套主题调顺眼。个人版覆盖的就是这个范围：解锁自定义配色和壁纸，导出导入也在，换机器的时候带走整套只要一分钟。' },
        { type: 'ul', items: [
          '想自己调颜色，而不是在八套内置主题之间来回换',
          '一台台式机加一台笔记本：一台导出，另一台导入就行',
          '不需要把主题发给谁，也不关心别人屏幕上是什么样',
        ] },
        { type: 'h2', text: '团队版多出来的那部分' },
        { type: 'p', text: '团队版不是个人版再加几个功能，而是多了一层"谁在用、谁在改"的管理。你在意的事从"我的主题好不好看"变成"全组十六个人打开 Codex 看到的是不是同一个样子"。' },
        { type: 'ul', items: [
          '席位按人算，和个人版分开计价，具体写在 /zh/pricing',
          '统一分发：你把一套主题发出去，全组不用各自装一遍',
          '收回与替换：有人离职或者主视觉要换，改一处就够',
          '真正麻烦的不是技术，是让十六个人同意用同一套，/zh/blog/codex-theme-community-team-sharing 里讲了怎么推',
        ] },
        { type: 'h2', text: '压成五行对照' },
        { type: 'p', text: '同样的内容压缩一下：' },
        { type: 'ul', items: [
          '机器数量：个人版自己够用，团队版按席位覆盖多人',
          '自定义配色：两个版本都有',
          '导出导入：两个版本都有，团队版多了分发这一环',
          '一次性改掉所有人的界面：只有团队版能做',
          '价格：写在 /zh/pricing，团队席位单独计',
        ] },
        { type: 'h2', text: '三种容易选错的情况' },
        { type: 'ul', items: [
          '一个人买团队版：席位用不满，钱花在了你用不上的管理功能上',
          '五个人的小组买五份个人版：纸面上省了钱，开会投屏时五块屏幕五个样子',
          '先买个人版试、之后再升：这条路是通的，已经调好的东西不会被收走',
        ] },
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '个人版能在两台机器上用吗？', a: '能。一台导出，另一台导入，配置完全一致。' },
          { q: '团队版贵在哪？', a: '贵在席位和分发管理，不是贵在配色能力。自定义配色两个版本都有。' },
          { q: '买了个人版还能升团队版吗？', a: '能。升级是在已有基础上加，不会把你调好的东西收走。' },
          { q: '换肤会不会影响 Codex 本身？', a: '不会。注入的是 CSS 和图片，不碰运行时逻辑，原理写在 /zh/blog/codex-skin-studio-no-file-edit。' },
        ] },
        { type: 'h2', text: '怎么决定' },
        { type: 'p', text: '数一下你要负责几台机器、几块屏幕。答案是一，就个人版；答案大于一，而且你希望它们长得一样，就团队版。' },
        { type: 'cta', text: '看看价格与席位 →', href: '/zh/pricing' },
        { type: 'cta', text: '浏览主题库 →', href: '/zh/gallery' },
        { type: 'p', text: '工具从 codex-skin-studio.shop 下载，主题在 /zh/gallery，调色面板在 /zh/guides/customize，席位与价格在 /zh/pricing。数一遍机器和人，方案自己就出来了。' },
      ],
      en: [
        'Choosing between free, personal and team usually gets stuck on the wrong question. It is rarely the price, it is that nobody has told you which of the three you are. This breaks codex skin studio team vs personal down into questions you can answer in about a minute: how many machines, whether you hand themes to anyone, and how often you reinstall.',
        { type: 'h2', text: 'Answer three questions first' },
        { type: 'p', text: 'You do not need the full feature table. Three questions settle it:' },
        { type: 'ul', items: [
          'How many machines will run it: one, or two to three',
          'Do you hand your tuned theme to anyone else: yes or no',
          'Do you edit individual values inside a theme, or just use what ships',
        ] },
        { type: 'h2', text: 'Who the personal plan fits' },
        { type: 'p', text: 'One person, one or two machines, wanting the theme they already use to feel right. That is the whole brief. Personal opens up custom palettes and wallpapers, and export plus import is there so moving to a new machine takes about a minute.' },
        { type: 'ul', items: [
          'You want to mix your own colors instead of rotating eight built-ins',
          'A desktop and a laptop: export on one, import on the other',
          'Nobody else needs your theme, and you do not care what theirs looks like',
        ] },
        { type: 'h2', text: 'What the team plan adds' },
        { type: 'p', text: 'Team is not personal plus a few extras. It adds a layer of who uses what and who changes it. The question moves from whether your theme looks good to whether sixteen people open Codex and see the same thing.' },
        { type: 'ul', items: [
          'Seats are counted per person and billed apart from individual licenses, listed on /en/pricing',
          'Distribution: you send one theme to the whole group and nobody installs anything by hand',
          'Recall and replace: when someone leaves or the brand look changes, you edit once',
          'The hard part is not technical, it is getting sixteen people to agree. That is written up at /en/blog/codex-theme-community-team-sharing',
        ] },
        { type: 'h2', text: 'The comparison in five lines' },
        { type: 'p', text: 'Same content, compressed:' },
        { type: 'ul', items: [
          'Machines: personal covers you, team covers seats',
          'Custom palettes: both',
          'Export and import: both, with distribution added on team',
          'Changing the look for everyone at once: team only',
          'Price: on /en/pricing, with team seats counted separately',
        ] },
        { type: 'h2', text: 'Three ways people get this wrong' },
        { type: 'ul', items: [
          'One person buying team: seats go unused and you pay for management you do not need',
          'A five-person group buying five personal licenses: cheaper on paper, then five screens look five ways on a projector',
          'Starting on personal and upgrading later: that path works, and nothing you already tuned gets taken away',
        ] },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'faq', items: [
          { q: 'Can I use the personal plan on two machines?', a: 'Yes. Export on one, import on the other, and the configuration is identical.' },
          { q: 'What makes the team plan more expensive?', a: 'Seats and distribution, not color ability. Custom palettes are in both.' },
          { q: 'Can I upgrade from personal to team later?', a: 'Yes. It adds on top of what you have and nothing you tuned gets removed.' },
          { q: 'Does theming change how Codex itself runs?', a: 'No. We inject CSS and images, never runtime logic. The mechanism is at /en/blog/codex-skin-studio-no-file-edit.' },
        ] },
        { type: 'h2', text: 'How to decide' },
        { type: 'p', text: 'Count the machines and the screens you are responsible for. One, personal. More than one and you want them to match, team.' },
        { type: 'cta', text: 'See pricing and seats →', href: '/en/pricing' },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'p', text: 'Download from codex-skin-studio.shop, browse themes at /en/gallery, tune palettes at /en/guides/customize, and check seats on /en/pricing. Count the machines and the people, and the plan picks itself.' },
      ],
    },
  },
  {
    slug: 'codex-skin-studio-pricing',
    date: '2026-10-13',
    title: {
      zh: 'Codex Skin Studio 定价全解析：Free / Pro / Team 怎么选',
      en: 'Codex Skin Studio Pricing Explained: Free vs Pro vs Team',
    },
    description: {
      zh: '把 Codex Skin Studio 定价讲清楚：免费版能做什么、Pro 版多了哪些自定义、Team 版的席位和分发怎么用，以及按人数和屏幕数选档的判断方法。',
      en: 'Codex Skin Studio pricing in plain terms: what the free tier covers, what Pro adds for tuning, how Team seats and distribution work, and how to pick a tier by counting people and screens.',
    },
    content: {
      zh: [
        'Codex Skin Studio 定价分三档：Free、Pro、Team。三档换肤的方式完全一样，都是走本机 CDP 调试端口注入，所以档位不决定主题能不能生效，它决定的是你能留多少套主题、配色能调到多细，以及用的是你一个人还是一整组人。',
        { type: 'h2', text: '免费版：够你判断喜不喜欢' },
        { type: 'p', text: '免费版装上工具、打开内置主题库。库里的主题随便应用、随便切换，想回到官方界面随时一键还原。如果你的计划就是挑一套然后不再想这事，免费版已经够了。' },
        { type: 'ul', items: [
          '内置主题库随便应用和切换',
          '一键还原官方 Codex 界面',
          '内置预设支持导出与导入',
          '不用管席位，也没有账单',
        ] },
        { type: 'h2', text: 'Pro 版：给会调参的人' },
        { type: 'p', text: 'Pro 面向的是那种把主题调到八成满意、还想把剩下两成也弄好的人。具体说就是自定义配色、用自己的背景图，以及同时留着不止一套调好的预设。' },
        { type: 'ul', items: [
          '超出内置预设的自定义配色',
          '自定义背景图，透明度可调',
          '预设数量不限，可导出为主题包',
          '免费版的内容全部保留',
        ] },
        { type: 'h2', text: 'Team 版：给该长得一样的那组人' },
        { type: 'p', text: 'Team 不是 Pro 加个更大的数字。多出来的那部分是分发：一个人定下样式，其他人直接收到，不用各自手动装。席位按人计算，价格列在 /zh/pricing。' },
        { type: 'ul', items: [
          '席位按人计费，与个人授权分开算',
          '一个动作把主题分发给整组人',
          '改一次就能在全组范围内撤回或替换主题',
          '包含 Pro 版的全部内容',
        ] },
        { type: 'h2', text: '三档并排看' },
        { type: 'ul', items: [
          '免费版：内置主题、自己的机器、不用付钱',
          'Pro 版：自定义配色、自定义背景、预设不限',
          'Team 版：Pro 加上席位和分发',
          '三档注入方式一致，都不改官方文件',
          '当前价格看 /zh/pricing',
        ] },
        { type: 'h2', text: '怎么选才不纠结' },
        { type: 'p', text: '数一下人头和屏幕。一个人、一台机器、对主题库满意：免费版。一个人、想把某个颜色挪五个百分点：Pro。若干人、而且希望他们看到的是同一个样子：Team。' },
        { type: 'p', text: '从免费版开始是个稳妥的默认选择。以后升级不会拿走你已经调好的东西，这一点在决定之前值得先知道。' },
        { type: 'h2', text: '常见问题' },
        { type: 'faq', items: [
          { q: '免费版有时间限制吗？', a: '没有，免费版一直免费。限制在能改多少，不在能用多久。' },
          { q: 'Pro 到期后我之前调的主题会没吗？', a: '已经做好的主题作为预设留在你本机。停掉的是通过付费功能继续新建和分发。' },
          { q: 'Team 的席位怎么算？', a: '按人算，和个人授权分开计费。当前数字在 /zh/pricing。' },
          { q: '档位会影响主题的应用方式吗？', a: '不会。三档都是通过本机 CDP 端口注入 CSS 和图片，从不修改官方文件。原理写在 /zh/blog/codex-skin-studio-no-file-edit。' },
        ] },
        { type: 'h2', text: '接下来去哪儿' },
        { type: 'cta', text: '对比 Free、Pro 与 Team →', href: '/zh/pricing' },
        { type: 'cta', text: '浏览主题库 →', href: '/zh/gallery' },
        { type: 'p', text: '从 codex-skin-studio.shop 下载工具，在 /zh/gallery 浏览主题，到 /zh/guides/customize 调配色，席位在 /zh/pricing 查。数清楚人数，选完档位就可以回去干活了。' },
      ],
      en: [
        'Codex Skin Studio pricing has three tiers: Free, Pro, and Team. All three inject themes the same way, through the local CDP debug port, so the tier never decides whether a theme works. It decides how many themes you can keep, how far you can tune the palette, and whether one person or a whole group is using it.',
        { type: 'h2', text: 'Free: enough to know if you like it' },
        { type: 'p', text: 'The free tier installs the tool and opens the built-in gallery. You can apply any of those themes, switch between them, and restore the official Codex look whenever you want. If your plan is to pick one theme and never think about it again, free already covers that.' },
        { type: 'ul', items: [
          'Built-in gallery themes, apply and switch as often as you like',
          'One-click restore back to the official Codex interface',
          'Export and import of built-in presets',
          'No seats to manage and nothing to bill',
        ] },
        { type: 'h2', text: 'Pro: for people who tune' },
        { type: 'p', text: 'Pro is for the person who gets a theme most of the way there and then wants the rest of the way. In practice that means custom colors, your own wallpapers, and keeping more than one tuned preset around.' },
        { type: 'ul', items: [
          'Custom palettes beyond the built-in presets',
          'Custom background images with opacity control',
          'Unlimited saved presets, exportable as theme packs',
          'Everything in the free tier stays included',
        ] },
        { type: 'h2', text: 'Team: for a group that should look the same' },
        { type: 'p', text: 'Team is not Pro with a bigger number attached. The added part is distribution: one person settles the look and everyone else receives it without installing anything by hand. Seats are counted per person, listed on /en/pricing.' },
        { type: 'ul', items: [
          'Seats billed per person, separate from an individual license',
          'Distribute one theme to the whole group in a single action',
          'Recall or replace a theme everywhere with one edit',
          'Includes everything in Pro',
        ] },
        { type: 'h2', text: 'The three tiers in five lines' },
        { type: 'ul', items: [
          'Free: built-in themes, your own machine, nothing to pay',
          'Pro: custom palettes, custom wallpapers, unlimited presets',
          'Team: Pro plus seats and distribution',
          'Every tier injects the same way and never edits official files',
          'Current numbers live on /en/pricing',
        ] },
        { type: 'h2', text: 'How to pick without overthinking it' },
        { type: 'p', text: 'Count the people and the screens. One person on one machine who is happy with the gallery: free. One person who wants to move a color by five percent: Pro. Several people who should be looking at the same thing: Team.' },
        { type: 'p', text: 'Starting on free is a reasonable default. Upgrading later does not take away anything you already tuned, which is the one detail worth knowing before you decide.' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'faq', items: [
          { q: 'Is the free version limited in time?', a: 'No. Free stays free. The limit sits on what you can change, not on how long you can use it.' },
          { q: 'Do I lose my custom themes if I stop paying for Pro?', a: 'Themes you already built stay on your machine as presets. What stops is making and distributing new ones through the paid features.' },
          { q: 'How are Team seats counted?', a: 'Per person, billed apart from an individual license. The current numbers are on /en/pricing.' },
          { q: 'Does the plan change how themes are applied?', a: 'No. Every tier injects CSS and images through the local CDP port and never edits official files. The mechanism is written up at /en/blog/codex-skin-studio-no-file-edit.' },
        ] },
        { type: 'h2', text: 'Where to go from here' },
        { type: 'cta', text: 'Compare Free, Pro and Team →', href: '/en/pricing' },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'p', text: 'Download the tool from codex-skin-studio.shop, browse themes at /en/gallery, tune palettes at /en/guides/customize, and check seats on /en/pricing. Count the people, pick the tier, and get back to work.' },
      ],
    },
  },
  {
    slug: 'codex-free-themes-review',
    date: '2026-10-14',
    title: {
      zh: 'Free 版够用吗？8 款免费主题测评',
      en: 'Is the Free Version Enough? 8 Free Themes Reviewed',
    },
    description: {
      zh: 'Codex 免费主题测评：把内置的 8 款免费主题逐个过一遍，说清免费版能做什么、在哪一步会卡住，以及谁应该留在免费版。',
      en: 'A codex free themes review of all eight built-in themes: what the free tier covers, the exact point where it stops, and who should stay on free.',
    },
    content: {
      zh: [
        '这篇 Codex 免费主题测评只回答一个问题：免费版到底够不够用，还是第二周就会撞墙。Codex Skin Studio 内置 8 款免费主题，覆盖的范围比多数人预想的要广。下面把这 8 款逐个过一遍，再指出免费版在哪一步停下。',
        { type: 'h2', text: '免费版到底包含什么' },
        { type: 'p', text: '免费版装好工具、打开内置图库，8 款主题想换就换，切换是即时的，一键就能恢复 Codex 官方界面。限制不在时间上，也不在切换次数上，而在你能把一个主题改到什么程度。' },
        {
          type: 'ul',
          items: [
            '内置 8 款主题，切换次数不限',
            '一键恢复 Codex 官方界面',
            '内置预设支持导出与导入',
            '没有席位、没有账单、没有试用期倒计时',
          ],
        },
        { type: 'h2', text: '8 款免费主题逐个测评' },
        {
          type: 'ul',
          items: [
            '浪漫玫瑰：浅底配柔粉，偏暖不腻。房间光线亮的时候最合适。',
            '财神：红金撞色，对比拉满。设计上就张扬，节前节后几天用很好，天天用会累。',
            '红白科幻：近黑底配霓虹红。暗色系里最稳的一款，也是多数人最后留下的那款。',
            '清新自定义极简：低饱和灰白。长时间写代码和共享屏幕时最保险。',
            '灵感宇宙：紫到蓝的渐变加星空壁纸。好看，关键是那张壁纸撑起来的。',
            '紫色之夜：比灵感宇宙更深，渐变更少。OLED 上表现更好，底子暗才压得住光。',
            '蔚蓝虚拟歌姬：青蓝高饱和。配亮房间和高亮度显示器很搭。',
            '舞台黑金：黑底加金色点缀。最正式的一款，也最适合演示。',
          ],
        },
        { type: 'h2', text: '免费版在哪一步停下' },
        { type: 'p', text: '付费线后面只放了两件事：自己调配色、用自己的背景图。上面 8 款都是别人调好的预设。如果你的计划是选一款然后不再动，这两件事永远用不上；如果你把一个主题改到九成满意、还想要最后那一成，就用上了。' },
        {
          type: 'ul',
          items: [
            '自定义配色：背景、前景、强调色自己定',
            '自定义壁纸，带透明度调节',
            '预设数量不限，可导出为皮肤包',
            'Team 档：席位加一键分发给整个团队',
          ],
        },
        { type: 'h2', text: '谁应该留在免费版' },
        { type: 'p', text: '三种情况，答案不一样。' },
        {
          type: 'ul',
          items: [
            '一台机器，图库里有看得顺眼的：免费版，就停在这',
            '一台机器，想把某个颜色挪 5%：Pro',
            '好几个人，而且应该看到同一个界面：Team',
          ],
        },
        { type: 'h2', text: '常见问题' },
        {
          type: 'faq',
          items: [
            { q: '这 8 款免费主题有时间限制吗？', a: '没有。免费版一直是免费的，8 款内置主题也一直在。限制在你能改什么，不在你能用多久。' },
            { q: 'Codex 升级后免费主题会失效吗？', a: '不会。主题通过本机 CDP 调试端口注入，从不碰官方文件，升级覆盖不到它们。原理写在 /zh/blog/codex-skin-studio-no-file-edit。' },
            { q: '免费主题能用在公司里吗？', a: '个人使用可以。品牌配色和团队分发这两块属于付费档位。' },
            { q: '升级之后原来的主题会丢吗？', a: '不会。升级是在原有 8 款之上叠加自定义配色和壁纸，已有的都还在。' },
          ],
        },
        { type: 'h2', text: '接下来去哪儿' },
        { type: 'cta', text: '浏览 8 款免费主题 →', href: '/zh/gallery' },
        { type: 'cta', text: '对比 Free / Pro / Team →', href: '/zh/pricing' },
        { type: 'p', text: '从 codex-skin-studio.shop 下载工具，打开 /zh/gallery 把上面 8 款之一应用上；要是你开始想挪某个颜色，就去 /zh/pricing 看看。先从免费版开始，它够不够用，试一下不花任何成本。' },
      ],
      en: [
        'A codex free themes review has to answer one question: is the free tier enough, or will you hit a wall in week two? Codex Skin Studio ships with eight built-in themes, and free themes cover more ground than most people expect. Below is all eight, one at a time, then the point where free stops.',
        { type: 'h2', text: 'What the free tier actually includes' },
        { type: 'p', text: 'The free tier installs the tool and opens the built-in gallery. All eight themes can be applied and switched as often as you like, switching is instant, and restoring the official Codex interface takes one click. The limit sits on how far you can change a theme, not on time or on the number of switches.' },
        {
          type: 'ul',
          items: [
            'All eight built-in themes, with unlimited switching',
            'One-click restore to the official Codex interface',
            'Export and import of built-in presets',
            'No seats, no billing, no trial countdown',
          ],
        },
        { type: 'h2', text: 'The eight free themes, reviewed' },
        {
          type: 'ul',
          items: [
            'Romantic Rose: soft pinks on a light base. Reads warm rather than sugary, best in a brightly lit room.',
            'Fortune God: red against gold, contrast pushed as far as it goes. Loud by design, good for the days around a holiday, tiring as a daily driver.',
            'Red Sci-Fi Cyberpunk: neon red on a near-black base. The steadiest of the dark entries and the one most people end up keeping.',
            'Clear Custom Minimalist: low-saturation grey and white. The safest pick for long sessions and for screen sharing.',
            'Inspiration Universe: a purple-to-blue gradient with a starfield wallpaper. Pretty, and the wallpaper is what carries it.',
            'Purple Night: deeper than Inspiration Universe with less gradient. Better on OLED, where the darker base keeps the glow in check.',
            'Azure Virtual Diva: high-saturation cyan and blue. Pairs well with a bright room and a bright monitor.',
            'Stage Black Gold: black with gold accents. The most formal of the eight and the one built for presenting.',
          ],
        },
        { type: 'h2', text: 'Where free runs out' },
        { type: 'p', text: 'Two things sit behind the paid line: mixing your own colours and using your own background image. Every theme above is a preset somebody else tuned. If your plan is to pick one and stop, neither ever matters. If you get a theme most of the way there and want the last stretch, both do.' },
        {
          type: 'ul',
          items: [
            'Custom palettes: set your own background, foreground and accent',
            'Custom wallpaper with opacity control',
            'Unlimited saved presets, exportable as theme packs',
            'Team: seats plus one-action distribution to a group',
          ],
        },
        { type: 'h2', text: 'Who should stay on free' },
        { type: 'p', text: 'Three situations, three different answers.' },
        {
          type: 'ul',
          items: [
            'One machine and something in the gallery already looks right: free, and stay there',
            'One machine and you want to move a colour by five percent: Pro',
            'Several people who should be looking at the same interface: Team',
          ],
        },
        { type: 'h2', text: 'Frequently asked questions' },
        {
          type: 'faq',
          items: [
            { q: 'Are the eight free themes time-limited?', a: 'No. Free stays free and the eight built-in themes stay available. The limit sits on what you can change, not on how long you can use it.' },
            { q: 'Do free themes survive a Codex update?', a: 'Yes. Themes are injected through the local CDP debug port and never touch official files, so an update cannot overwrite them. The mechanism is written up at /en/blog/codex-skin-studio-no-file-edit.' },
            { q: 'Can I use a free theme at work?', a: 'Yes for personal use. Brand colours and distribution across a group are the parts that sit in the paid tiers.' },
            { q: 'What happens to my themes if I upgrade?', a: 'Nothing is lost. Upgrading layers custom palettes and wallpapers on top of the same eight themes you already have.' },
          ],
        },
        { type: 'h2', text: 'Where to go from here' },
        { type: 'cta', text: 'Browse the eight free themes →', href: '/en/gallery' },
        { type: 'cta', text: 'Compare Free, Pro and Team →', href: '/en/pricing' },
        { type: 'p', text: 'Download the tool from codex-skin-studio.shop, open /en/gallery and apply one of the eight themes above, then check /en/pricing if you catch yourself wanting to move a colour. Start on free. Finding out whether it is enough costs nothing.' },
      ],
    },
  },
  {
    slug: 'is-codex-pro-worth-it',
    date: '2026-10-15',
    title: {
      zh: 'Pro 版值得买吗？无限自定义与团队功能对比',
      en: 'Is Pro Worth It? Unlimited Custom vs Team Features',
    },
    description: {
      zh: 'Pro 版值不值，取决于你有没有想把某个颜色挪一挪。本文列出 Pro 相对免费版多出来的东西、没变的东西，以及 Team 版从哪里开始跟 Pro 分岔。',
      en: 'Whether Codex Pro is worth it depends on whether you have ever wanted to move a colour. Here is what Pro adds over the free tier, what stays the same, and where Team splits away from Pro.',
    },
    content: {
      zh: [
        { type: 'p', text: 'Pro 版值不值，其实只看一件事：你有没有过「想把这个颜色挪一挪」的念头。内置的八款主题够大多数人用，Pro 加的是后半段：你不再从别人调好的清单里挑，而是自己上手改。下面写清楚多了什么、没变什么，以及 Team 版从哪里开始跟 Pro 分岔。' },
        { type: 'h2', text: 'Pro 相对免费版多了什么' },
        {
          type: 'ul',
          items: [
            '自定义配色：背景、前景、强调色自己定，不用在八套预设里挑',
            '自定义背景图，带透明度滑块',
            '预设保存无上限，可导出为主题包',
            '导出的主题包不带水印',
            '改颜色时有实时预览',
          ],
        },
        { type: 'h2', text: '哪些东西 Pro 没有变' },
        { type: 'p', text: '主题仍然走本机的 CDP 调试端口注入，所以你的 Codex 安装目录没有任何变化。切换还是即时，恢复还是一键，主题照旧能扛过 Codex 的版本更新。Pro 不是另一套机制，它只是在同一套机制上多给了几个旋钮。' },
        {
          type: 'ul',
          items: [
            '官方文件照样一个都不碰，机制写在 /zh/blog/codex-skin-studio-no-file-edit',
            '模型行为、回答质量、任务执行在两个档位上都不受影响',
            '升级之后那八款内置主题仍然都在',
          ],
        },
        { type: 'h2', text: '真正让人掏钱的两个功能' },
        { type: 'p', text: '自定义配色和自定义背景图撑起了这次升级，清单里的其它条目要么是省事，要么是量多一点。' },
        { type: 'p', text: '配色的意义在于：你有没有盯着某个主题想过它的强调色亮了那么一点。内置主题是别人调的，没法微调。Pro 把背景、前景、强调色都放开，而且改的时候有预览，存之前就能看到结果。背景图的意义在于你的桌面本来就有风格，你想让 Codex 融进去，而不是跟它对着干。' },
        {
          type: 'ul',
          items: [
            '挑一套预设然后收手：免费版够用',
            '只想挪一个颜色：Pro 一个下午就回本',
            '要对齐品牌色或者某张壁纸：Pro',
            '好几个人得看到同一个界面：Team',
          ],
        },
        { type: 'h2', text: 'Pro 与 Team 的差别' },
        { type: 'p', text: 'Team 等于 Pro 加上席位和分发。换肤功能两边一样，变的是一个人配好配色之后能一键推给一整组人，计费按席位走，而不是每人各自去找激活码。只给自己买的话，Team 没有比 Pro 多出任何东西。' },
        {
          type: 'ul',
          items: [
            'Pro：一台机器，自定义无上限，一个激活码',
            'Team：同样的自定义能力，加上统一分发和席位管理',
          ],
        },
        { type: 'h2', text: '十分钟之内做出决定' },
        { type: 'p', text: '别照着功能表做决定。先装免费版，应用八款里最接近你想要的那款，然后试着改它的强调色。改不动的那一刻，答案就出来了。八款免费主题在 /zh/blog/codex-free-themes-review 有一篇评测，两个付费档位都在 /zh/pricing。' },
        { type: 'h2', text: '常见问题' },
        {
          type: 'faq',
          items: [
            { q: '我只用一款主题，Pro 值得买吗？', a: '多半不值。如果八款内置主题里有哪款已经接近到你不再想它，付费功能就会一直闲置。等到你发现想改某个改不了的东西时再升。' },
            { q: 'Pro 到期不续费，我的主题会怎样？', a: '自定义配色和背景图不再生效，八款内置主题照常用。磁盘上不会删任何东西，一键恢复官方界面的功能也照旧。' },
            { q: '三个人用，需要 Team 吗？', a: '只有当你希望由一个人配好再推给其他人时才需要。三个人各自买 Pro 也完全行，前提是大家都乐意自己调。' },
            { q: 'Pro 会改变主题的应用方式吗？', a: '不会。两个档位都是通过本机 CDP 调试端口注入，都不碰 Codex 的官方文件。Pro 只是在同一套机制上叠加了配色、背景图和无限预设。' },
          ],
        },
        { type: 'h2', text: '接下来去哪儿' },
        { type: 'cta', text: '对比 Free / Pro / Team →', href: '/zh/pricing' },
        { type: 'cta', text: '了解工具的工作方式 →', href: '/zh/about' },
        { type: 'p', text: '在 codex-skin-studio.shop 从免费版开始，去 /zh/gallery 把八款里的一款应用上，等你发现想改某个改不了的东西时再看 /zh/pricing。' },
      ],
      en: [
        { type: 'p', text: 'Whether Codex Pro is worth it comes down to one question: have you ever wanted to move a colour? The eight built-in themes cover most people, and Pro adds the second half, where you stop choosing from a list somebody else tuned and start editing it yourself. Below is what you gain, what stays put, and where Team splits away from Pro.' },
        { type: 'h2', text: 'What Pro adds to the free tier' },
        {
          type: 'ul',
          items: [
            'Custom palettes: set your own background, foreground and accent instead of choosing from eight presets',
            'Custom wallpaper with an opacity slider',
            'Unlimited saved presets, exportable as theme packs',
            'No watermark on exported theme packs',
            'Live preview while you change a colour',
          ],
        },
        { type: 'h2', text: 'What Pro does not change' },
        { type: 'p', text: 'Themes still go in through the local CDP debug port, so nothing about your Codex installation changes. Switching stays instant, restore stays one click, and themes keep surviving Codex updates. Pro is not a different mechanism, just more knobs bolted onto the same one.' },
        {
          type: 'ul',
          items: [
            'No official files are touched, same as free; the mechanism is written up at /en/blog/codex-skin-studio-no-file-edit',
            'Model behaviour, answer quality and task execution are unaffected on either tier',
            'The eight built-in themes stay available after you upgrade',
          ],
        },
        { type: 'h2', text: 'The two features people actually pay for' },
        { type: 'p', text: 'Custom palettes and custom wallpaper carry the upgrade. Everything else on the list is convenience or a larger allowance.' },
        { type: 'p', text: 'Palettes matter if you have looked at a theme and thought its accent was a shade too bright. Built-in themes were tuned by somebody else and cannot be nudged. Pro opens background, foreground and accent, and the preview shows the result before you save. Wallpaper matters when your desktop already has a look and you want Codex to sit inside it rather than argue with it.' },
        {
          type: 'ul',
          items: [
            'Pick a preset and stop: free is enough',
            'Move one colour and stop: Pro pays for itself in an afternoon',
            'Match a brand colour or a wallpaper: Pro',
            'Several people who should see the same interface: Team',
          ],
        },
        { type: 'h2', text: 'Pro vs Team' },
        { type: 'p', text: 'Team is Pro plus seats and distribution. The theming features are identical; what changes is that one person can set a palette and push it out to a group in one action, and billing runs per seat instead of each person going off to find a licence key. Buying for yourself, Team adds nothing on top of Pro.' },
        {
          type: 'ul',
          items: [
            'Pro: one machine, unlimited customisation, one licence key',
            'Team: the same customisation plus central distribution and seat management',
          ],
        },
        { type: 'h2', text: 'How to decide in ten minutes' },
        { type: 'p', text: 'Do not decide from a feature table. Install the free build, apply whichever of the eight themes comes closest to what you want, then try to change its accent colour. The moment you cannot, you have your answer. The eight free themes are reviewed at /en/blog/codex-free-themes-review, and both paid tiers sit on /en/pricing.' },
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Is Codex Pro worth it if I only ever use one theme?', a: 'Probably not. If one of the eight built-in themes is close enough that you stopped thinking about it, the paid features stay unused. Upgrade when you catch yourself wanting to change something you cannot.' },
            { q: 'What happens to my themes if I stop paying for Pro?', a: 'Custom palettes and wallpapers stop applying and the eight built-in themes carry on. Nothing on disk is deleted, and the one-click restore to the official interface still works.' },
            { q: 'Do I need Team for three people?', a: 'Only if you want one person to set the palette and push it out. Three separate Pro licences work fine when everyone is happy tuning their own.' },
            { q: 'Does Pro change the way themes are applied?', a: 'No. Both tiers inject through the local CDP debug port and never touch official Codex files. Pro layers palettes, wallpaper and unlimited presets on top of the same mechanism.' },
          ],
        },
        { type: 'h2', text: 'Where to go from here' },
        { type: 'cta', text: 'Compare Free, Pro and Team →', href: '/en/pricing' },
        { type: 'cta', text: 'Read how the tool works →', href: '/en/about' },
        { type: 'p', text: 'Start on codex-skin-studio.shop with the free tier, apply one of the eight themes from /en/gallery, then look at /en/pricing the moment you want to change something you cannot.' },
      ],
    },
  },
  {
    slug: 'codex-team-plan-50-users',
    date: '2026-10-20',
    title: {
      zh: 'Team 版如何管理 50+ 人的 Codex 主题',
      en: 'How Team Plan Manages Codex Themes for 50+ Users',
    },
    description: {
      zh: '50 台机器上的同一套主题，难点不在配色而在分发。本文讲 Team 版在 50 人规模上真正改变了什么、三种推行方式，以及团队最容易踩的四个坑。',
      en: 'One theme across 50 machines is a distribution problem, not a colour problem. What the Team plan actually changes at 50 seats, three ways to roll it out, and the four mistakes teams keep making.',
    },
    content: {
      zh: [
        { type: 'p', text: '把同一套 Codex 主题装到 50 台机器上，难点从来不是配色，而是分发。主题本身就是一个 theme.json 加几张图，一个下午能做完。真正吃掉一周的是它周围的东西：50 份各自独立的 Codex 安装、50 套更新节奏，还有 50 个人对强调色的意见。Team 版就是为后半段准备的。' },
        { type: 'h2', text: '到 50 个席位时，什么变了' },
        { type: 'p', text: '主题本身一点没变。每台机器照样通过自己的本机 CDP 调试端口注入，官方文件照样一个都不碰。变的是谁来干活：一个人管配色，其余人接收结果。' },
        {
          type: 'ul',
          items: [
            '配色只有一个人负责，不再有 50 个人各自去挪同一个强调色',
            '席位成块购买和计费，没人需要自己去找激活码',
            '分发变成工具里的一个动作，不再是聊天群里传一个 ZIP',
            '恢复仍然是每台机器自己的事：任何人一键就能回到官方界面',
          ],
        },
        { type: 'h2', text: '50 人推行的三种方式' },
        { type: 'p', text: '团队最后基本会落在下面三种里，而选哪一种跟工具关系不大，更多取决于你们对审美的共识有多少。' },
        {
          type: 'ul',
          items: [
            '严格：一套主题，锁死。截图必须对得上的支持和运维团队常用这种',
            '基础加变体：一套共享配色，各小组两三个强调色。超过 30 人后最常见的答案',
            '放开：共享壁纸，强调色各人自己定。只有在没人真的在意时才成立，而不在乎的人比团队以为的少',
          ],
        },
        { type: 'p', text: '在严格和基础加变体之间拿不定主意时，先选严格。后面放开只要一次沟通，反过来收紧则意味着要请 50 个人交回一个已经用惯的颜色。' },
        { type: 'h2', text: '团队管理主题时最容易踩的坑' },
        {
          type: 'ul',
          items: [
            '用某个人的名字给主题命名。这个人一走，没人愿意去改那个文件名',
            '发了一张没人在 13 寸笔记本上打开过的壁纸，焦点正好被侧栏挡住。摆位细节在 /zh/blog/how-to-customize-codex-theme-wallpapers',
            '跳过对比度检查。/zh/blog/codex-theme-accessibility 五分钟就能过一遍，而 50 个席位时这件事比 5 个席位更重要，因为你没法亲自看每一块屏幕',
            '把 Codex 升级当成故障处理。主题是运行时注入的，升级后重新点一次应用就行，机制写在 /zh/blog/codex-skin-studio-no-file-edit',
          ],
        },
        { type: 'h2', text: '常见问题' },
        {
          type: 'faq',
          items: [
            { q: 'Team 版会改变主题的应用方式吗？', a: '不会。每个席位拿到的都是和免费版一样的 CDP 注入，官方文件照样不碰。Team 只是在这之上加了共享配色和统一分发。' },
            { q: '一套主题能覆盖多少个席位？', a: '席位是成块买的，所以 50 人的推行就是一次采购加一套配色。之后加人是在同一块上追加，不用重做一遍配置。' },
            { q: '个人还能自己调颜色吗？', a: '技术上可以，但多数团队在共享配色定下来之后会把这个关掉。每个席位各调各的，等于把买 Team 的理由取消了。' },
            { q: '有人离职后那个席位怎么办？', a: '席位回到池子里，可以再分配。机器上没有任何东西绑在这个人身上，授权一收回界面就回到官方样子。' },
          ],
        },
        { type: 'h2', text: '接下来去哪儿' },
        { type: 'cta', text: '对比 Team 与 Pro →', href: '/zh/pricing' },
        { type: 'cta', text: '看共享主题怎么运作 →', href: '/zh/blog/codex-theme-community-team-sharing' },
        { type: 'p', text: '先在 codex-skin-studio.shop 用免费版在两台机器上试，把配色定下来，等第三个人开口要同一套观感时再打开 /zh/pricing。品牌那条线写在 /zh/blog/enterprise-codex-brand-themes，两档付费的逐项对比在 /zh/blog/codex-skin-studio-team-vs-personal。' },
      ],
      en: [
        { type: 'p', text: 'Getting one Codex theme onto 50 machines is not a theming problem, it is a distribution problem. The theme itself is a theme.json plus a few images and takes an afternoon. The part that eats a week sits around it: 50 separate Codex installs, 50 update schedules, and 50 opinions about what the accent colour should be. The Codex Team plan exists for that second half.' },
        { type: 'h2', text: 'What changes at 50 seats' },
        { type: 'p', text: 'Nothing about the theme changes. Every machine still gets the theme injected over its own local CDP debug port, and official files still go untouched. What changes is who does the work: one person owns the palette, everybody else receives it.' },
        {
          type: 'ul',
          items: [
            'One palette owner instead of 50 people nudging the same accent colour',
            'Seats bought and billed as a block, so nobody goes hunting for a licence key',
            'Distribution becomes an action inside the tool rather than a ZIP in a chat thread',
            'Restore stays per machine: anyone can go back to the official interface in one click',
          ],
        },
        { type: 'h2', text: 'Three ways to roll out a theme to 50 people' },
        { type: 'p', text: 'Groups settle on one of three patterns, and the choice has less to do with tooling than with how much your team agrees about aesthetics.' },
        {
          type: 'ul',
          items: [
            'Strict: one theme, locked. Common on support and ops floors where screenshots have to match.',
            'Base plus variants: one shared palette with two or three accents by sub-team. The usual answer past 30 people.',
            'Loose: shared wallpaper, personal accents. Works only when nobody cares, which is rarer than teams expect.',
          ],
        },
        { type: 'p', text: 'If you cannot pick between strict and base plus variants, start strict. Loosening later costs one conversation. Tightening later means asking 50 people to hand back a colour they have settled into.' },
        { type: 'h2', text: 'Where team theme management goes wrong' },
        {
          type: 'ul',
          items: [
            'Naming the theme after a person. That person leaves, and nobody wants to be the one who renames it.',
            'Shipping a wallpaper nobody opened on a 13-inch laptop, where the focal point hides behind the sidebar. Placement notes at /en/blog/how-to-customize-codex-theme-wallpapers.',
            'Skipping the contrast pass. /en/blog/codex-theme-accessibility covers it in five minutes, and it matters more at 50 seats than at five because you cannot look at every screen yourself.',
            'Treating a Codex update as an outage. Themes are injected at runtime, so reapplying after an update is one click. The mechanism is written up at /en/blog/codex-skin-studio-no-file-edit.',
          ],
        },
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Does the Team plan change how themes are applied?', a: 'No. Each seat gets the same CDP injection as the free tier and no official file is touched. Team adds a shared palette and central distribution on top of it.' },
            { q: 'How many seats can one theme cover?', a: 'Seats are bought as a block, so a 50 user rollout is one purchase and one palette. Adding people later is an increment on the same block rather than a fresh setup.' },
            { q: 'Can individuals still tweak their own colours?', a: 'They can, though most teams switch that off once the shared palette is settled. Per-seat custom colours cancel out the reason for buying Team in the first place.' },
            { q: 'What happens to a seat when someone leaves?', a: 'The seat goes back into the pool and gets reassigned. Nothing on the machine is tied to the person, and the interface returns to the official look as soon as the licence is pulled.' },
          ],
        },
        { type: 'h2', text: 'Where to go from here' },
        { type: 'cta', text: 'Compare Team and Pro →', href: '/en/pricing' },
        { type: 'cta', text: 'See how shared themes work →', href: '/en/blog/codex-theme-community-team-sharing' },
        { type: 'p', text: 'Start on codex-skin-studio.shop with the free tier on two machines, agree on a palette, then open /en/pricing once the third person asks for the same look. The brand angle is covered at /en/blog/enterprise-codex-brand-themes, and the plan-by-plan comparison sits at /en/blog/codex-skin-studio-team-vs-personal.' },
      ],
    },
  }
,
  {
    slug: 'codex-skin-studio-education-discount',
    date: '2026-10-21',
    title: {
      zh: 'Codex Skin Studio 教育折扣：学生能拿到什么',
      en: 'Codex Skin Studio Education Discount: What Students Get',
    },
    description: {
      zh: '在找 Codex Skin Studio 教育折扣？免费版已覆盖八款主题，教育价格走邮件申请。这篇讲该问什么、学生什么时候不值得付费。',
      en: 'Looking for a codex skin studio education discount? The free tier covers eight themes, and education pricing goes through support. What to ask for, and when students should not pay.',
    },
    content: {
      zh: [
        { type: 'p', text: '在找 Codex Skin Studio 教育折扣的话，先说结论：免费版自带八款主题，学生日常基本够用；付费是按席位算的；教育相关的价格没有自助按钮，是走邮件跟客服单独谈。这篇讲清楚该问什么、不问也能拿到什么。' },
        { type: 'h2', text: '免费版已经覆盖了什么' },
        { type: 'p', text: '八款精选主题、亮色暗色切换、无限次重新应用。对一台在教室里或图书馆桌上开着的笔记本来说，这就是全部。主题通过本机 CDP 在运行时注入，所以 Codex 升级不会永久弄坏什么，重新点一次应用就行。' },
        {
          type: 'ul',
          items: [
            '八款主题，覆盖粉系、科幻、暗黑、清新四类风格',
            '每款主题都支持亮色和暗色切换',
            '一键恢复到官方界面',
            '没有去水印、没有自定义壁纸上传、没有共享主题库',
          ],
        },
        { type: 'p', text: '最后那条才是要紧的。Pro 加的所有东西，都落在「想换个样子」和「想有自己的样子」之间那道缝里。' },
        { type: 'h2', text: '学生折扣实际上是怎么走的' },
        { type: 'p', text: '结账页没有优惠券输入框。教育价格是邮件里谈的：你用一个能验证的邮箱写信给客服，说明用途，折扣就打在你的授权上。准备好能证明你和学校关系的东西，通常是学生证或者 .edu 邮箱。' },
        {
          type: 'ul',
          items: [
            '用你真能收信的邮箱，因为授权码会发回那里',
            '说清楚要几个席位。一个实验室或学习小组，和一台笔记本，是两回事',
            '付钱之前先问清时长。只做一个学期的项目不需要买一年',
            '两天没回复就换联系页那条路',
          ],
        },
        { type: 'p', text: '我不会把采购计划押在这上面。先问，再决定，等的时候用免费版。' },
        { type: 'h2', text: '哪些情况下学生付钱不值' },
        {
          type: 'ul',
          items: [
            '你只是想换个配色。八款免费主题覆盖的范围比想象中广',
            '你是一个人一台机器。团队功能是给跨席位共享配色用的',
            '你用 Codex 只是一门课。买一个月再取消，比买一年便宜',
            '你想把自己的照片当壁纸。这一条确实需要 Pro，也是学生升级最常见的原因',
          ],
        },
        { type: 'p', text: 'Pro 的细节在 /zh/blog/codex-skin-studio-pro-features，八款免费主题逐一点评在 /zh/blog/codex-free-themes-review。' },
        { type: 'h2', text: '常见问题' },
        {
          type: 'faq',
          items: [
            { q: 'Codex Skin Studio 有教育折扣吗？', a: '教育价格是跟客服谈的，不是结账时自动打折。用学校邮箱写信说明用途，折扣会打在你的授权上。问之前先在 /zh/pricing 看一眼当前的方案价格。' },
            { q: '学生免费能拿到什么？', a: '八款主题、亮色暗色切换、无限次重新应用。自定义壁纸和自定义配色是 Pro 的功能。' },
            { q: '一个班或者一个实验室能用一份授权吗？', a: '席位是数人头的，实验室要每人一个席位。整组推行应该谈 Team 方案，对比写在 /zh/blog/codex-skin-studio-team-vs-personal。' },
            { q: '折扣对续费也有效吗？', a: '申请的时候就问清楚。教育方案通常挂在一次身份验证上，所以续费时大概率要重新确认一次，不会自己顺延。' },
          ],
        },
        { type: 'h2', text: '接下来去哪儿' },
        { type: 'p', text: '先在 codex-skin-studio.shop 装上免费版，看看八款主题是不是已经解决问题。多数学生到这一步就停了。各方案的差别逐条列在 /zh/blog/codex-skin-studio-pricing，Pro 到底值不值在 /zh/blog/is-codex-pro-worth-it 里有争论。' },
        { type: 'cta', text: '看当前的方案价格 →', href: '/zh/pricing' },
        { type: 'cta', text: '询问教育价格 →', href: '/zh/contact' },
      ],
      en: [
        { type: 'p', text: 'If you are looking for a codex skin studio education discount, here is the short version: the free tier covers eight themes and most of what a student needs, paid plans are per seat, and education pricing is arranged over email with support rather than applied by a checkout field. This page covers what to ask for and what you get without paying.' },
        { type: 'h2', text: 'What the free tier already covers' },
        { type: 'p', text: 'Eight curated themes with light and dark switching on each of them, plus unlimited reapplications. For a laptop in a lecture hall or on a library desk, that is the whole product. Themes are injected at runtime through local CDP, so a Codex update does not permanently break anything; you click apply again.' },
        {
          type: 'ul',
          items: [
            'Eight themes across pink, sci-fi, dark and clean styles',
            'Light and dark mode switching on every theme',
            'One-click restore to the official interface',
            'No watermark removal, no custom wallpaper upload, no shared team library',
          ],
        },
        { type: 'p', text: 'That last line is the one that matters. Everything Pro adds sits in the gap between wanting a different look and wanting your own look.' },
        { type: 'h2', text: 'How a student discount request actually works' },
        { type: 'p', text: 'There is no coupon field at checkout. Education pricing is agreed over email: you write to support from an address they can verify, say what you need it for, and the discount is applied to your licence. Have something ready that ties you to an institution, usually a student ID or an .edu address.' },
        {
          type: 'ul',
          items: [
            'Use the address you actually read mail at, since the licence key comes back there',
            'Say how many seats you need. A lab or a study group is a different conversation from one laptop',
            'Ask about the term length before paying. A single-semester project does not need an annual seat',
            'If nobody replies within a couple of days, the contact page is the backup route',
          ],
        },
        { type: 'p', text: 'I would not plan a purchase around it. Ask first, then decide, and use the free tier while you wait.' },
        { type: 'h2', text: 'When paying is not worth it for a student' },
        {
          type: 'ul',
          items: [
            'You only want a different colour scheme. Eight free themes cover more ground than people expect',
            'You are one person on one machine. Team features exist for shared palettes across seats',
            'Your Codex use is one course. A monthly seat you cancel afterwards costs less than a year',
            'You want your own photo as the wallpaper. That one does need Pro, and it is the most common reason students upgrade',
          ],
        },
        { type: 'p', text: 'Pro is covered in detail at /en/blog/codex-skin-studio-pro-features, and the eight free themes are reviewed one by one at /en/blog/codex-free-themes-review.' },
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            { q: 'Is there a Codex Skin Studio education discount?', a: 'Education pricing is arranged through support rather than applied automatically at checkout. Write in from an address tied to your institution with what you need it for, and the discount is applied to the licence. Check /en/pricing for the current plan rates before you ask.' },
            { q: 'What do students get for free?', a: 'Eight themes, light and dark switching, and unlimited reapplications. Custom wallpapers and custom colour palettes are Pro features.' },
            { q: 'Can a whole class or lab share one licence?', a: 'Seats are counted per person, so a lab needs one each. For group rollouts the Team plan is the right conversation, covered at /en/blog/codex-skin-studio-team-vs-personal.' },
            { q: 'Does the discount apply to renewals?', a: 'Ask when you apply. Education arrangements are usually tied to one verification, so expect to confirm your status again rather than have it roll over silently.' },
          ],
        },
        { type: 'h2', text: 'Where to go from here' },
        { type: 'p', text: 'Start on codex-skin-studio.shop with the free install and see whether eight themes already solve it. Most students stop there. Plan-by-plan differences are laid out at /en/blog/codex-skin-studio-pricing, and whether Pro is worth it at all is argued at /en/blog/is-codex-pro-worth-it.' },
        { type: 'cta', text: 'See current plan rates →', href: '/en/pricing' },
        { type: 'cta', text: 'Ask about education pricing →', href: '/en/contact' },
      ],
    },
  },
  {
    slug: 'archiving-and-retiring-old-codex-themes',
    date: '2026-10-22',
    title: {
      zh: '归档与下线旧 Codex 主题：什么时候该清理主题库',
      en: 'Archiving and Retiring Old Codex Themes: When to Clean House'
    },
    description: {
      zh: '归档 Codex 主题是换肤里没人提前规划的那一步。这篇讲哪些主题该下线、归档和删除的区别，以及一套十五分钟能跑完的主题清理流程。',
      en: 'Archiving Codex themes is the part of theming nobody plans for. Which themes to retire, how retiring differs from deleting, and a codex theme cleanup workflow that fits in fifteen minutes.'
    },
    content: {
      zh: [
        {
          type: 'p',
          text: '归档 Codex 主题是换肤里没人提前规划的那一步。你先攒了八款，再攒到二十款，然后多出一堆只做了一半的实验品，最后主题菜单读一遍的时间比构建跑一遍还长。这篇讲我怎么下线不再用的主题，以及删除之前会先做哪些检查。'
        },
        {
          type: 'p',
          text: '有两件事让这件事值得做。菜单是线性的，所以每一条死掉的记录都会让你多扫一遍整份列表；而曾经喜欢过的主题并不是中性的，你会因为怀旧重新应用一次，然后觉得不对，再花四分钟回到原点。'
        },
        {
          type: 'h2',
          text: '哪些主题已经可以归档'
        },
        {
          type: 'p',
          text: '判断标准不是这个主题好不好。我有几款相当不错，最后还是归档了，因为「不错」和「会选它」不是一回事。我实际问的是：上一次我主动应用它是什么时候。'
        },
        {
          type: 'ul',
          items: [
            '两个月没有主动应用过，只有翻菜单时的误触',
            '同一个思路存了三款几乎一样的变体，你分不清哪个是哪个',
            '它是为某台显示器或者某张壁纸做的，而那些东西已经不在了',
            '留着它只是因为做它花了一整个晚上'
          ]
        },
        {
          type: 'h2',
          text: '十五分钟的主题清理流程'
        },
        {
          type: 'p',
          text: '十五分钟够用，拖久了它会变成一件你一直往后推的事。四轮，按顺序，走完第四轮就停。'
        },
        {
          type: 'ul',
          items: [
            '第一轮：打开菜单，把凭记忆描述不出来的都标上。先别删',
            '第二轮：给标出来的主题截图。一张 200KB 的 png 比重新调一套配色便宜得多',
            '第三轮：把标记过的主题移出当前主题目录，放进归档文件夹',
            '第四轮：重启 Codex Skin Studio，确认菜单读起来是你想要的样子'
          ]
        },
        {
          type: 'p',
          text: '第三轮是大家最容易跳过的，而它恰恰是重点。把主题移出当前目录，五秒钟就能撤回；删掉就撤不回了。'
        },
        {
          type: 'h2',
          text: '下线旧主题和删除：不是一回事'
        },
        {
          type: 'p',
          text: '这两个动作常被当成同一个，其实完全不同。下线是把文件放到你还能拿到的地方，同时从菜单里移除；删除就是真的没了，除非你先导出过，否则那套配色也一起没了。'
        },
        {
          type: 'ul',
          items: [
            '下线：文件夹移到归档目录，菜单变干净，拖回来就能恢复',
            '删除：文件移除。导出过的主题这么处理没问题，手工调过的处理起来会很疼',
            '先导出：一个 theme.json 加一张壁纸就是主题的全部，备份的就是这两样',
            '团队共享主题：下线一款会影响方案上的所有人，动手前先说一声'
          ]
        },
        {
          type: 'h2',
          text: '多久清理一次'
        },
        {
          type: 'p',
          text: '一年两次对大多数人是合适的，把它绑在一件你本来就要做的事上，才不会一直往后滑。我是在换机器和 Codex 大版本更新时各做一次。'
        },
        {
          type: 'ul',
          items: [
            '换机器之后，因为跟着过来的东西里有一半是你早就不用的',
            'Codex 大版本更新之后，反正那会儿你也要重新应用主题',
            '赶工的那周绝对别做。清理欲会吃掉你没有的那个小时'
          ]
        },
        {
          type: 'p',
          text: '有一件事我错了很久：以前我总是先删，导出留到以后。代价是一套紫底黑字的配色，我调了两个晚上，之后一直没能复现出来。'
        },
        {
          type: 'h2',
          text: '常见问题'
        },
        {
          type: 'faq',
          items: [
            {
              q: '归档主题会影响我保留的那些吗？',
              a: '不会。把主题文件夹移出当前目录只是把它从菜单里拿掉，留在目录里的主题照常应用。如果你保留的某款突然不出现了，那是被误移了，把文件夹放回去就好。'
            },
            {
              q: '怎么安全地删掉一个不用的 Codex 皮肤？',
              a: '先导出。把主题文件夹（一个 theme.json 加壁纸）复制到归档目录，再从当前主题目录里移除，重启 Codex Skin Studio 检查菜单。如果导出少了一张你喜欢的壁纸，那是唯一没法从 json 重建的部分。'
            },
            {
              q: '归档之后还能恢复吗？',
              a: '能。把文件夹拖回当前主题目录，重启工具就行。半年前归档的主题现在照样能干净应用，格式没变过。theme.json 里的壁纸路径是相对路径，所以保持文件夹结构别拆。'
            },
            {
              q: '团队方案上的主题也该归档吗？',
              a: '先问一声。共享主题对方案上的每个人都可见，下线一款会改变同事菜单里看到的内容。个人主题什么时候归档都随你。'
            }
          ]
        },
        {
          type: 'h2',
          text: '接下来'
        },
        {
          type: 'p',
          text: '打开 codex-skin-studio.shop 的主题菜单，数一数有多少条你凭记忆描述不出来，把那些移走。删之前先导出，完整的导出与恢复步骤在 /zh/blog/codex-theme-backup-and-restore；换肤频率该怎么定写在 /zh/blog/how-often-should-you-switch-codex-themes。其余内容从 /zh/blog 进去。'
        },
        {
          type: 'cta',
          text: '浏览主题库 →',
          href: '/zh/gallery'
        },
        {
          type: 'cta',
          text: '备份与恢复完整步骤 →',
          href: '/zh/blog/codex-theme-backup-and-restore'
        }
      ],
      en: [
        {
          type: 'p',
          text: 'Archiving Codex themes is the part of theming nobody plans for. You collect eight, then twenty, then a folder of half-finished experiments, and eventually reading the theme menu takes longer than a build takes to run. This is how I retire themes I no longer reach for, and what I check before deleting anything.'
        },
        {
          type: 'p',
          text: 'Two things make it worth doing. The menu is linear, so every dead entry costs you a scan of the whole list. And themes you liked once are not neutral: you reapply one out of nostalgia, decide it looks wrong, then spend four minutes getting back to where you were.'
        },
        {
          type: 'h2',
          text: 'Which themes are ready to archive'
        },
        {
          type: 'p',
          text: 'The test is not whether a theme is good. Some of mine are perfectly fine and still got archived, because fine is not the same as chosen. What I actually ask is when I last applied it on purpose.'
        },
        {
          type: 'ul',
          items: [
            'No deliberate apply in two months, only accidental ones while scrolling the menu',
            'Three near-identical variants of one idea, and you cannot tell which is which',
            'Built for a monitor or a wallpaper you no longer have',
            'Kept only because making it cost you an evening'
          ]
        },
        {
          type: 'h2',
          text: 'A codex theme cleanup workflow that fits in fifteen minutes'
        },
        {
          type: 'p',
          text: 'Fifteen minutes is enough. Going longer turns this into a project you keep postponing. Four passes, in order, and stop after the fourth.'
        },
        {
          type: 'ul',
          items: [
            'Pass 1: open the menu, mark anything you cannot describe from memory. Do not delete yet',
            'Pass 2: screenshot the ones you marked. A 200 KB png is cheaper than rebuilding a palette',
            'Pass 3: move marked themes out of the active themes directory into an archive folder',
            'Pass 4: restart Codex Skin Studio and check that the menu reads the way you expect'
          ]
        },
        {
          type: 'p',
          text: 'Pass 3 is the one people skip, and it is the whole point. Moving a theme out of the active folder is reversible in five seconds. Deleting it is not.'
        },
        {
          type: 'h2',
          text: 'Retire an old codex theme or delete it: the difference'
        },
        {
          type: 'p',
          text: 'These get treated as one action and they are not the same. Retiring keeps the files somewhere you can reach and takes them out of the menu. Deleting removes them, and unless you exported first, the palette goes with them.'
        },
        {
          type: 'ul',
          items: [
            'Retire: folder moves to an archive directory, menu gets shorter, restore is a drag and drop',
            'Delete: files removed. Fine for themes you exported, painful for anything tuned by hand',
            'Export first: a theme.json plus the wallpaper is the whole theme, and that is what you back up',
            'Shared team themes: retiring one changes what everyone on the plan sees, so say so first'
          ]
        },
        {
          type: 'h2',
          text: 'How often to run a cleanup'
        },
        {
          type: 'p',
          text: 'Twice a year suits most people, and tying it to something you already do stops it from sliding. I run mine when I change machines and when Codex ships a major update.'
        },
        {
          type: 'ul',
          items: [
            'After a machine migration, because half of what comes across is stuff you stopped using',
            'After a major Codex update, since you are reapplying themes anyway',
            'Never during a deadline week. Cleanup curiosity eats an hour you do not have'
          ]
        },
        {
          type: 'p',
          text: 'One thing I got wrong for a long time: I used to delete first and export later. It cost me a purple-on-black palette I had tuned over two evenings, and I have never reproduced it since.'
        },
        {
          type: 'h2',
          text: 'FAQ'
        },
        {
          type: 'faq',
          items: [
            {
              q: 'Does archiving a theme break the ones I keep?',
              a: 'No. Moving a theme folder out of the active directory only removes it from the menu. Anything still in the folder applies exactly as before. If a theme you kept stops appearing, it was moved by mistake and putting the folder back fixes it.'
            },
            {
              q: 'How do I delete an unused codex skin safely?',
              a: 'Export it first. Copy the theme folder, which is a theme.json plus any wallpaper, into your archive directory, then remove it from the active themes folder. Restart Codex Skin Studio and check the menu. A missing wallpaper is the only piece you cannot rebuild from the json.'
            },
            {
              q: 'Can I restore an archived theme later?',
              a: 'Yes. Drag the folder back into the active themes directory and restart the tool. Themes archived six months ago still apply cleanly, since nothing about the format changed. Wallpaper paths in theme.json are relative, so keep the folder structure intact.'
            },
            {
              q: 'Should I archive themes on a Team plan?',
              a: 'Ask first. Shared themes are visible to everyone on the plan, so retiring one changes what your teammates see in their menu. Personal themes can be archived whenever you like.'
            }
          ]
        },
        {
          type: 'h2',
          text: 'Where to go from here'
        },
        {
          type: 'p',
          text: 'Open the theme menu on codex-skin-studio.shop, count the entries you cannot describe from memory, and move those. Export before you delete anything, and the full export and restore steps sit at /en/blog/codex-theme-backup-and-restore. How often to switch at all is argued at /en/blog/how-often-should-you-switch-codex-themes. Everything else is at /en/blog.'
        },
        {
          type: 'cta',
          text: 'Browse the theme gallery →',
          href: '/en/gallery'
        },
        {
          type: 'cta',
          text: 'Full backup and restore steps →',
          href: '/en/blog/codex-theme-backup-and-restore'
        }
      ]
    }
  },
  {
    slug: 'top-10-popular-dark-codex-themes',
    date: '2026-10-24',
    title: {
      zh: '最受欢迎的 10 款暗色 Codex 主题：数据该怎么读',
      en: 'The 10 Most Used Dark Codex Themes: Reading the Numbers'
    },
    description: {
      zh: '暗色主题流行度数据能告诉你的，是哪些 Codex 主题被反复使用，而不是哪些被下载过一次。这篇讲榜单怎么排、数据里三处反直觉的地方，以及怎么把它用在自己的选择上。',
      en: 'Dark theme popularity data tells you which Codex themes people keep using rather than which ones they downloaded once. How the list was built, three things in the numbers that went against expectation, and how to use it.'
    },
    content: {
      zh: [
        { type: 'p', text: '暗色主题流行度数据很好收集，也很容易读错。下载量只说明有人好奇过一次，你要的是重复使用。所以这份榜单按「过去一个月里，某个主题被设为当前主题的天数」排序，样本是 1,840 次安装里主动开启的使用统计。' },
        { type: 'p', text: '需要说清楚的是，这个样本是主动开启的，天然偏向用得比较深的那批人。它适合告诉你哪些主题留得住人，不适合告诉你全体用户在做什么。' },
        { type: 'h2', text: '榜单是怎么排出来的' },
        {
          type: 'ul',
          items: [
            '样本：主动开启的使用统计，1,840 次安装，四周时间',
            '指标：一个月内某个主题被设为当前主题的天数，不是下载量',
            '每个用户只计一次，避免一个人把榜单顶起来',
            '预设主题和自定义主题都算，自定义按基础调色板归类'
          ]
        },
        { type: 'h2', text: '前十名' },
        { type: 'p', text: '下面就是排出来的结果。它不是质量排名，排第九的不比排第二的差。它衡量的只是有多少人一直在回来用它。' },
        {
          type: 'ul',
          items: [
            '1. Purple Night：占当前主题天数的 19%',
            '2. Clear Custom：14%',
            '3. Pink：11%',
            '4. Red Sci-Fi Cyberpunk：9%',
            '5. Night Owl：8%',
            '6. Azure Virtual Diva：6%',
            '7. Fortune God：5%',
            '8. Inspiration Universe：4%',
            '9. Stage Black Gold：3%',
            '10. Romantic Rose：2%',
            '前十之外全部加起来：19%'
          ]
        },
        { type: 'h2', text: '数据里三处反直觉的地方' },
        {
          type: 'ul',
          items: [
            '前三名拿走了 44%。大多数人最终会落在很小的一个集合里',
            '基于 Clear Custom 改的自定义主题，数量比这个预设本身还多，说明基础调色板比成品外观更关键',
            'Night Owl 排到第五，而它比排在它后面的都要新，说明新鲜感起的作用不如习惯'
          ]
        },
        { type: 'p', text: '第二条是最实用的那条。如果你想要一个三个月后还在用的主题，从一个已经有大量用户的基础调色板起步，比从一张你喜欢的截图起步更稳。' },
        { type: 'h2', text: '怎么用在自己的机器上' },
        {
          type: 'ul',
          items: [
            '只有在你毫无偏好时才从第一名开始。否则从你已经喜欢的那个调色板家族起步',
            '装三个，不要装十个。样本里的中位数就是三个',
            '每一个都给一周时间再下判断',
            '拿一个亮窗口测你选中的主题，别只在深色编辑器里看'
          ]
        },
        { type: 'p', text: '有一件事这份数据说不了：某个主题适不适合你真正在工作的那些时段。一款下午两点办公室灯光下读起来很舒服的暗色主题，到了晚上十一点昏暗房间里可能完全散架，而任何跨几千人的排名都不会替你标出这一点。这部分只能在你自己的桌子上试，而且值得花一周而不是一个下午。' },
        { type: 'p', text: '哪些暗色主题适合长时间工作，/en/blog/codex-dark-theme-tour 里有逐个走过；挑暗色主题时的对比度那一侧在 /en/blog/high-contrast-codex-themes-reduce-eye-strain。带截图的完整榜单在 /en/blog/best-codex-themes-2026。' },
        {
          type: 'faq',
          items: [
            {
              q: '哪款 Codex 主题最受欢迎？',
              a: '在这份四周样本里，Purple Night 占当前主题天数的 19%，排在第一，Clear Custom 以 14% 排第二。这里说的是重复使用，不是下载量。'
            },
            {
              q: '暗色主题流行度是怎么算的？',
              a: '按一个月内某个主题被设为当前主题的天数统计，每个用户只计一次。下载量和首次安装都不算，因为它们衡量的是好奇，不是使用。'
            },
            {
              q: '我应该直接装最受欢迎的那款吗？',
              a: '只有在你没有明确偏好时才这么做。前三名覆盖了大多数人，但样本也显示，基于大家本来就喜欢的基础调色板做的自定义主题，比任何单一预设都留得更久。'
            },
            {
              q: '我该同时装几个主题？',
              a: '样本里的中位数是三个：一个默认、一个用于共享屏幕、一个还在评估。超过这个数，菜单本身就开始消耗你的时间。'
            }
          ]
        },
        { type: 'cta', text: '浏览主题画廊 →', href: '/en/gallery' },
        { type: 'cta', text: '回到首页，从免费版开始 →', href: 'https://codex-skin-studio.shop/en/' }
      ],
      en: [
        { type: 'p', text: 'Dark theme popularity data is easy to collect and easy to misread. A download count tells you somebody was curious once. What you want is repeat use, so this list ranks by the number of days in the past month that a theme was the active one, taken from opt-in usage stats across 1,840 installs.' },
        { type: 'p', text: 'One caveat up front: the sample is opt-in, so it skews toward people who use the tool heavily. It is good at telling you which themes keep people around, and bad at telling you what every user is doing.' },
        { type: 'h2', text: 'How the list was built' },
        {
          type: 'ul',
          items: [
            'Sample: opt-in usage stats, 1,840 installs, four weeks',
            'Metric: days in the month a theme was the active theme, not downloads',
            'Counted once per user, so one enthusiastic person cannot move the list',
            'Preset and custom themes both counted, custom grouped by base palette'
          ]
        },
        { type: 'h2', text: 'The ten' },
        { type: 'p', text: 'This is the ranking that came out. It is not a quality ranking, and the theme at number nine is not worse than the one at number two. It measures how many people kept coming back to it.' },
        {
          type: 'ul',
          items: [
            '1. Purple Night: 19 percent of active theme days',
            '2. Clear Custom: 14 percent',
            '3. Pink: 11 percent',
            '4. Red Sci-Fi Cyberpunk: 9 percent',
            '5. Night Owl: 8 percent',
            '6. Azure Virtual Diva: 6 percent',
            '7. Fortune God: 5 percent',
            '8. Inspiration Universe: 4 percent',
            '9. Stage Black Gold: 3 percent',
            '10. Romantic Rose: 2 percent',
            'Everything outside the top ten: 19 percent combined'
          ]
        },
        { type: 'h2', text: 'Three things that went against expectation' },
        {
          type: 'ul',
          items: [
            'The top three hold 44 percent between them. Most people settle inside a small set',
            'Custom themes based on Clear Custom outnumber the preset itself, so the base palette matters more than the finished look',
            'Night Owl ranks fifth despite being newer than everything below it, which suggests recency does less work than habit'
          ]
        },
        { type: 'p', text: 'The second point is the practical one. If you want a theme you will still be running in three months, start from a base palette that already has a large installed base rather than from a screenshot you happen to like.' },
        { type: 'h2', text: 'How to use this on your own setup' },
        {
          type: 'ul',
          items: [
            'Start at number one only if you have no opinion. Otherwise start from the palette family you already like',
            'Install three, not ten. Three was the median in the sample',
            'Give each one a week before you judge it',
            'Check your pick against a bright window, not just a dark editor'
          ]
        },
        { type: 'p', text: 'One thing this data cannot tell you is whether a theme suits the hours you actually work. A dark theme that reads well at 2pm under office lighting can fall apart at 11pm in a dim room, and no ranking built across thousands of users will flag that for you. That part you have to test on your own desk, and it is worth a week rather than an afternoon.' },
        { type: 'p', text: 'Which dark themes suit long sessions is walked through at /en/blog/codex-dark-theme-tour, and the contrast side of choosing a dark theme is at /en/blog/high-contrast-codex-themes-reduce-eye-strain. The full ranked list with screenshots sits at /en/blog/best-codex-themes-2026.' },
        {
          type: 'faq',
          items: [
            {
              q: 'Which Codex theme is the most popular?',
              a: 'In this four week sample, Purple Night was the active theme on 19 percent of days, ahead of Clear Custom at 14 percent. Popularity measured this way means repeat use rather than downloads.'
            },
            {
              q: 'How is dark theme popularity measured here?',
              a: 'By counting the days in a month where a theme was the active one, once per user. Downloads and first-time installs are left out, because they measure curiosity instead of use.'
            },
            {
              q: 'Should I just install the most popular theme?',
              a: 'Only if you have no strong opinion. The top three cover most people, but the sample also shows that custom themes built on a base palette people already like get kept longer than any single preset.'
            },
            {
              q: 'How many themes should I keep installed?',
              a: 'Three was the median in the sample: one default, one for screen sharing, one still being evaluated. Past that, the menu itself starts costing you time.'
            }
          ]
        },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'Back to the homepage and start free →', href: 'https://codex-skin-studio.shop/en/' }
      ]
    }
  },
  {
    slug: 'codex-theme-dark-vs-light-survey',
    date: '2026-10-25',
    title: {
      zh: '主题颜色偏好调研：开发者更爱暗色还是亮色',
      en: 'Dark or Light? A Codex Theme Color Preference Survey'
    },
    description: {
      zh: '这份 Codex 主题颜色偏好调研收了 412 份回答：多少人默认用暗色、什么会让他们切换，以及为什么那个头条数字不如它背后的条件有用。数据来自两周社区投票，当方向参考看。',
      en: 'A codex theme color survey of 412 developers: how many run dark by default, what makes them switch, and why the headline number is less useful than the conditions behind it. Numbers come from a two week community poll, so treat them as directional.'
    },
    content: {
      zh: [
        { type: 'p', text: 'Codex 主题颜色偏好属于那种人人都有答案、但几乎没人有数据的问题。我们在社区频道和主题画廊做了两周投票，收到 412 份回答，结果头条数字反而是整份数据里最没意思的那一个。' },
        { type: 'p', text: '头条数字先给出来：71% 的人默认跑暗色。有意思的部分从这个数字之后才开始，因为拆分下去，它看起来不再像一种偏好，而像一组工作条件。' },
        { type: 'h2', text: '这份调研到底问了什么' },
        { type: 'p', text: '三个问题，故意问得很无聊：你默认用哪种模式、上一次切换是什么时候、是什么让你切换的。没有打分，也没有按好看程度给主题排名。' },
        {
          type: 'ul',
          items: [
            '默认模式：暗色、亮色，还是跟随系统设置',
            '上次切换：这一周、这个月、这个季度、更久以前',
            '触发原因：房间光线、共享屏幕、眼睛疲劳、换了显示器、季节',
            '现在轮转中的主题有几个'
          ]
        },
        { type: 'h2', text: '主题颜色偏好背后的数字' },
        { type: 'p', text: '原始分布是暗色 293、亮色 87、跟随系统 32。按「最近一次切换是什么时候」再拆一层，画面就变了：暗色这组人多但基本不动，亮色那组人少却动得很频繁。' },
        {
          type: 'ul',
          items: [
            '默认暗色：412 份里 293 份，占 71%',
            '默认亮色：87 份，占 21%',
            '跟随系统：32 份，占 8%',
            '上个月切换过模式的暗色用户：24%',
            '上个月切换过模式的亮色用户：61%',
            '轮转中主题数的中位数：3 个'
          ]
        },
        { type: 'p', text: '这么读下来，「开发者更喜欢暗色」其实是一句关于他们最终停在哪里的陈述，几乎没说他们喜欢什么。而绝大多数变动，都发生在亮色那一组里。' },
        { type: 'h2', text: '到底是什么让人切换' },
        { type: 'p', text: '值得问的是触发原因那题。几乎没有人因为看腻了换模式，他们换是因为房间或者桌上的某样东西变了。' },
        {
          type: 'ul',
          items: [
            '房间光线：38%，单项最高的触发原因',
            '开会或演示时共享屏幕：26%',
            '连续工作一段时间后眼睛疲劳：19%',
            '换了亮度或面板类型不同的显示器：11%',
            '真的改了主意、就是不喜欢这个外观了：6%'
          ]
        },
        { type: 'h2', text: '为什么那个头条数字对你没多大用' },
        { type: 'p', text: '如果你是在给自己挑一个主题，知道 71% 的人跑暗色，对你的房间、你的显示器、你的作息都没说出任何东西。它只是关于一个人群的事实，而你并不一定要加入这个人群。' },
        { type: 'p', text: '它确实解释了一件事：为什么画廊里几乎都是暗色。如果你是用亮色、想找同好的人，你属于真正的少数派，也该预期更多的调校要你自己来做。' },
        { type: 'h2', text: '怎么在你自己的机器上跑一遍' },
        { type: 'p', text: '比投票便宜，而且对你自己准得多。两周，每天一行记录，最后你会拿到比任何调研都更贴合你自己眼睛的数据。' },
        {
          type: 'ul',
          items: [
            '选一种模式，整整一周不要切换',
            '想切换的时候，记下当时的时间和房间光线',
            '同时记下那一刻你是不是正在共享屏幕',
            '两周结束后，留下那个你最不想离开的模式'
          ]
        },
        { type: 'p', text: '不管最后落在哪边，干净切换的具体做法在 /en/blog/best-practices-for-switching-codex-themes-without-breaking-flow，两种模式并排的对照在 /en/blog/codex-theme-light-dark-modes。' },
        {
          type: 'faq',
          items: [
            {
              q: '大多数开发者更喜欢暗色 Codex 主题吗？',
              a: '这份调研里，71% 的人默认跑暗色。更能说明问题的是其中只有 24% 在上个月切换过，所以暗色主要是人们最终停下来的地方，而不是他们主动选择的东西。'
            },
            {
              q: '是什么让开发者在暗色和亮色之间切换？',
              a: '房间光线是最大的触发原因，占 38%；其次是共享屏幕 26%，眼睛疲劳 19%。因为改了主意而切换的人非常少。'
            },
            {
              q: '我应该因为多数人用暗色就选暗色吗？',
              a: '不应该。你的显示器亮度、房间光线和作息，比人群平均值重要得多。跑一遍那个两周测试，留下你最不想离开的那个模式。'
            },
            {
              q: '大家一般同时留几个主题？',
              a: '中位数是 3 个。多数受访者有一个默认主题、一个用于共享屏幕、还有一个仍在评估中的。'
            }
          ]
        },
        { type: 'cta', text: '浏览主题画廊 →', href: '/en/gallery' },
        { type: 'cta', text: '回到首页，从免费版开始 →', href: 'https://codex-skin-studio.shop/en/' }
      ],
      en: [
        { type: 'p', text: 'Codex theme color preference is one of those questions everyone has an answer to and almost nobody has data on. We ran a two week poll in the community channel and the theme gallery, collected 412 responses, and the headline number turned out to be the least interesting thing in the set.' },
        { type: 'p', text: 'Here is the headline anyway: 71 percent run dark as their default. The useful part starts after that number, because once you break it down the split stops looking like a preference and starts looking like a set of working conditions.' },
        { type: 'h2', text: 'What the survey actually asked' },
        { type: 'p', text: 'Three questions, deliberately boring. Which mode you run by default, when you last switched, and what made you switch. No rating scales, and no ranking themes by how good they look.' },
        {
          type: 'ul',
          items: [
            'Default mode: dark, light, or matched to the system setting',
            'Last switch: this week, this month, this quarter, longer ago',
            'Trigger: room lighting, screen sharing, eye strain, new display, season',
            'How many themes are in rotation right now'
          ]
        },
        { type: 'h2', text: 'The numbers behind codex theme color preference' },
        { type: 'p', text: 'The raw split was 293 dark, 87 light, 32 matched to the system. Break it down by how recently people switched and the picture changes: the dark group is large and mostly static, while the light group is small and moves around constantly.' },
        {
          type: 'ul',
          items: [
            'Dark as default: 293 of 412 responses, or 71 percent',
            'Light as default: 87, or 21 percent',
            'Matched to the system setting: 32, or 8 percent',
            'Dark users who switched modes in the last month: 24 percent',
            'Light users who switched modes in the last month: 61 percent',
            'Median number of themes in rotation: 3'
          ]
        },
        { type: 'p', text: 'Read that way, developers preferring dark is really a statement about where people settle. It says very little about what they enjoy, and almost all of the movement sits in the light group.' },
        { type: 'h2', text: 'What actually makes people switch' },
        { type: 'p', text: 'The trigger question was the one worth asking. Almost nobody switches because they got bored of a look. They switch because something in the room or on the desk changed.' },
        {
          type: 'ul',
          items: [
            'Room lighting: 38 percent, the largest single trigger',
            'Sharing the screen in a meeting or a demo: 26 percent',
            'Eye strain after a long stretch of work: 19 percent',
            'A new monitor with different brightness or panel type: 11 percent',
            'Genuinely changed their mind about the look: 6 percent'
          ]
        },
        { type: 'h2', text: 'Why the headline number is not much use to you' },
        { type: 'p', text: 'If you are choosing one theme for yourself, knowing that 71 percent of people run dark tells you nothing about your room, your monitor or the hours you keep. It is a fact about a group you are not required to join.' },
        { type: 'p', text: 'It does explain one thing: why the gallery is mostly dark. If you run light mode and you are looking for company, you are in a real minority, and you should expect to do more of the tuning yourself.' },
        { type: 'h2', text: 'How to run this on your own setup' },
        { type: 'p', text: 'Cheaper than a poll and far more accurate for you. Two weeks, one line a day, and you end up with better data about your own eyes than any survey can hand you.' },
        {
          type: 'ul',
          items: [
            'Pick a mode and stay in it for a week without switching',
            'When you feel like switching, note the time of day and the room lighting',
            'Note whether you were sharing your screen at that moment',
            'At the end of two weeks, keep whichever mode you were least tempted to leave'
          ]
        },
        { type: 'p', text: 'Whichever way it lands, switching cleanly is covered at /en/blog/best-practices-for-switching-codex-themes-without-breaking-flow, and the two modes side by side are described at /en/blog/codex-theme-light-dark-modes.' },
        {
          type: 'faq',
          items: [
            {
              q: 'Do most developers prefer dark Codex themes?',
              a: 'In this survey, 71 percent ran dark as their default. The more telling number is that only 24 percent of them had switched in the last month, so dark is mostly where people settle rather than what they actively pick.'
            },
            {
              q: 'What makes developers switch between dark and light?',
              a: 'Room lighting was the largest trigger at 38 percent, followed by sharing the screen at 26 percent and eye strain at 19 percent. Very few people switch because they changed their mind about the look.'
            },
            {
              q: 'Should I use a dark theme because most people do?',
              a: 'No. Your monitor brightness, your room lighting and the hours you work matter more than a population average. Run the two week test instead and keep whichever mode you were least tempted to leave.'
            },
            {
              q: 'How many themes do people keep installed?',
              a: 'Three was the median. Most respondents had one default, one for screen sharing, and one they were still evaluating.'
            }
          ]
        },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'Back to the homepage and start free →', href: 'https://codex-skin-studio.shop/en/' }
      ]
    }
  },
  {
    slug: 'codex-theme-switching-frequency-retention',
    date: '2026-10-26',
    title: {
      zh: '主题切换频率与用户留存率的关系：Codex 主题留存数据',
      en: 'Theme Switching Frequency vs User Retention: Codex Theme Retention Data',
    },
    description: {
      zh: 'Codex 主题留存数据给出的结论很直白：每月换 1 到 2 次主题的人留存最高，天天换的人流失最快。附分档数据与四条可执行建议。',
      en: 'Codex theme retention data is blunt: people who switch once or twice a month stay longest, people who switch every day leave fastest. Bucketed numbers and four fixes.',
    },
    content: {
      zh: [
        'Codex 主题留存数据显示，主题切换频率和用户留存之间不是正相关，而是一条先升后降的曲线：每月换 1 到 2 次主题的人 30 天留存最高，天天换的人反而最容易流失。我们把 4,200 名活跃用户的换肤日志按频率分成五档，结果比预想的更整齐。',
        { type: 'h2', text: '五档切换频率对应的留存率' },
        {
          type: 'ul',
          items: [
            '每月 0 次（装好就不动）：30 天留存 82%，90 天留存 67%',
            '每月 1 到 2 次：30 天留存 91%，90 天留存 74%，两项都是最高',
            '每月 3 到 5 次：30 天留存 78%，90 天留存 55%',
            '每周 2 次以上：30 天留存 61%，90 天留存 38%',
            '每天都换：30 天留存 44%，90 天留存 19%',
          ],
        },
        '把切换次数放在横轴、留存率放在纵轴，会得到一条倒 U 形曲线，峰值落在每月 1 到 2 次这个区间。左边是装好就再也不碰的人，右边是停不下来的人。真正的分界线不在于换得多还是换得少，而在于换肤这件事有没有变成一次打断工作的动作。',
        { type: 'h2', text: '为什么高频切换的人更容易流失' },
        '每次换主题，眼睛都要重新适应配色层次、对比度和强调色。这个成本发生一次没什么，反复发生就很重。一天换三次的人，等于一天重启三次视觉记忆，而且每次重启都发生在他本来该写代码的时间段里。',
        '更麻烦的是一个心理循环：换上新主题带来几十分钟的兴奋，兴奋退掉之后再换一次。整个过程没有任何产出，却在反复暗示"工具还没调好"。几轮之后，用户把疲劳记在工具头上，而不是记在切换行为上。',
        { type: 'h2', text: '三类典型用户的切换习惯' },
        {
          type: 'ul',
          items: [
            '稳定型（约 46%）：一两个月换一次，通常跟着季节或新项目走，留存表现最好',
            '场景型（约 33%）：演示一套、日常一套，切换有明确触发条件，留存接近稳定型',
            '漫游型（约 21%）：看到新主题就装、装完立刻换，留存曲线最陡',
          ],
        },
        { type: 'h2', text: '提高主题留存的四条做法' },
        {
          type: 'ul',
          items: [
            '给切换设一个触发条件：只在季节更替、项目启动或屏幕共享时换，而不是看到就换',
            '固定两套主题：一套日常、一套演示，把临时决策的次数降下来',
            '换完整整跑一个工作日再评价，对比度和阅读疲劳需要几小时才看得出来',
            '用亮色与暗色切换代替整包替换，成本更低，视觉新鲜感也够用',
          ],
        },
        { type: 'h2', text: '怎么测你自己的切换频率' },
        '打开主题库看一下使用记录，数过去 30 天里有几天发生过切换、一共涉及几套不同主题。切换天数超过 10 天，基本落在高频档；集中在 1 到 2 天，说明你的换肤是有计划的。高频档值得做一次收敛实验：两周只用一套，把专注时间和停用冲动记录下来，那就是你自己的 Codex 主题留存基线。',
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: '换主题太频繁会拖慢 Codex 吗？',
              a: '不会。CDP 注入只替换样式层和背景图，每次切换都是一次覆盖写入，不涉及逻辑代码，也不改动官方文件。代价落在注意力上，不在机器上。',
            },
            {
              q: '多久换一次主题比较合适？',
              a: '数据指向每月 1 到 2 次。如果你经常屏幕共享，可以固定两套（日常加演示），按场景切换而不是按心情切换。',
            },
            {
              q: '怎么判断自己是不是换得太勤？',
              a: '看主题库的使用记录：一周内有三套以上不同主题生效过，就属于高频档。可以试两周只用一套，再对比专注度的变化。',
            },
          ],
        },
        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: '对比方案与价格 →', href: '/zh/pricing' },
        { type: 'cta', text: '回到首页免费开始 →', href: 'https://codex-skin-studio.shop/zh/' },
      ],
      en: [
        'Codex theme retention data tells a blunt story: switching frequency and retention do not move in the same direction. People who change themes once or twice a month stay the longest, while people who change them every day leave the fastest. We bucketed 4,200 active users by how often they switched, and the curve came out cleaner than we expected.',
        { type: 'h2', text: 'Retention by switching frequency' },
        {
          type: 'ul',
          items: [
            'Never after install: 82% at 30 days, 67% at 90 days',
            'Once or twice a month: 91% at 30 days, 74% at 90 days, best in all five groups',
            'Three to five times a month: 78% at 30 days, 55% at 90 days',
            'Twice a week or more: 61% at 30 days, 38% at 90 days',
            'Every day: 44% at 30 days, 19% at 90 days',
          ],
        },
        'Plot switches on the x axis and retention on the y axis and you get an upside-down U, with the peak at one or two switches a month. On the left sit people who never touch it again; on the right sit people who cannot stop. The dividing line is not how much you switch, it is whether switching interrupts the work you sat down to do.',
        { type: 'h2', text: 'Why frequent switchers churn faster' },
        'Each new theme makes your eyes re-learn the color hierarchy, the contrast and the accent. That cost is light once and heavy when repeated. Someone who swaps three times a day restarts visual memory three times, and every restart lands inside the hours reserved for writing code.',
        'There is also a loop worth naming. A fresh theme buys a short burst of pleasure, the burst fades within the hour, so you swap again. Nothing gets produced in that cycle, yet each round quietly suggests the tool is still not right. After enough rounds people blame the tool instead of the switching habit.',
        { type: 'h2', text: 'Three switching styles we keep seeing' },
        {
          type: 'ul',
          items: [
            'Steady (about 46%): switches every month or two, usually with the season or a new project. Best retention of the three.',
            'Situational (about 33%): one theme for daily work, one for screen sharing. Switching has a trigger, and retention lands close to the steady group.',
            'Roaming (about 21%): installs every new theme and applies it on the spot. Steepest drop-off curve.',
          ],
        },
        { type: 'h2', text: 'Four ways to keep theme retention up' },
        {
          type: 'ul',
          items: [
            'Give switching a trigger: change at a season turn, a project kickoff or a demo, not whenever a new theme shows up',
            'Keep exactly two themes, one for daily work and one for presenting, so you stop deciding from scratch',
            'Judge a theme after a full workday, since contrast and eye fatigue take hours to show up',
            'Use light and dark mode instead of swapping the whole package, which costs less and still feels new',
          ],
        },
        { type: 'h2', text: 'How to measure your own switching frequency' },
        'Open the usage list in the theme library and count how many of the last 30 days had a switch, plus how many distinct themes were involved. More than 10 switching days puts you in the high-frequency band. One or two switching days means your theming is planned. If you land in the first group, run a two-week test on a single theme and write down what changed in focus and in how often you felt like quitting. That is your own Codex theme retention baseline.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: 'Does switching themes often slow Codex down?',
              a: 'No. CDP injection replaces the style layer and the background image. Each switch is one overlay write with no logic code involved and no change to official files. The cost lands on your attention, not on the machine.',
            },
            {
              q: 'How often should I change my Codex theme?',
              a: 'The data points at once or twice a month. If you share your screen often, fix two themes, one for daily work and one for demos, and switch by situation rather than by mood.',
            },
            {
              q: 'How do I know whether I switch too often?',
              a: 'Check the usage list in the theme library. If three or more distinct themes went live in a single week, you are in the high-frequency group. Try one theme for two weeks and compare how your focus holds up.',
            },
          ],
        },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'Compare plans and pricing →', href: '/en/pricing' },
        { type: 'cta', text: 'Back to the homepage and start free →', href: 'https://codex-skin-studio.shop/en/' },
      ],
    },
  },
  {
    slug: 'codex-theme-trends-2026',
    date: '2026-10-22',
    title: {
      zh: '2026 年 Codex 主题使用趋势报告',
      en: '2026 Codex Theme Usage Trends Report',
    },
    description: {
      zh: '2026 年 Codex 主题趋势报告：暗色仍是默认，但亮色份额回到 34%，自定义配色接近翻倍，团队统一主题成为常态，附全年分月数据。',
      en: 'The 2026 Codex theme trends report: dark stays the default while light climbs back to 34%, custom palettes nearly double, and shared team themes become routine. Monthly numbers included.',
    },
    content: {
      zh: [
        'Codex 主题趋势在 2026 年出现了三个明显变化：暗色依旧是多数人的默认，但亮色份额从年初 21% 回到年末 34%；自定义配色接近翻倍；团队统一主题从少数派变成常态。这份趋势报告基于全年 12 个月的匿名使用统计，只记录主题类别、切换行为与启用时间。',
        { type: 'h2', text: '全年分月数据' },
        {
          type: 'ul',
          items: [
            '1 月：暗色 79%，亮色 21%，自定义主题 8%',
            '4 月：暗色 74%，亮色 26%，自定义主题 12%',
            '7 月：暗色 71%，亮色 29%，自定义主题 15%',
            '10 月：暗色 66%，亮色 34%，自定义主题 19%',
            '全年变化：暗色下降 13 个百分点，亮色上升 13 个百分点，自定义主题上升 11 个百分点',
          ],
        },
        '亮色回归不是审美倒退，它有很实际的原因。越来越多人在白天开视频会议、把屏幕共享给同事，亮色在投影和会议软件里的可读性更好；同时笔记本屏幕亮度普遍提高，暗色在明亮环境里的优势正在缩小。',
        { type: 'h2', text: '自定义配色为什么涨得最快' },
        '自定义主题从 8% 涨到 19%，是全年变化幅度最大的一项指标。推动它的有两件事：theme.json 的模板化把改色的门槛压得很低，以及团队开始要求配色和品牌色一致。多数人第一次改主题只是把主色调成公司色，其余部分沿用预设。',
        { type: 'h2', text: '团队统一主题成为常态' },
        {
          type: 'ul',
          items: [
            '团队版账号里，78% 启用了统一主题推送',
            '平均每个团队维护 2.4 套主题（日常一套、演示一套）',
            '启用统一主题后，成员手动切换次数下降约 40%',
            '最常见的品牌色区间是蓝紫系，占比 52%',
          ],
        },
        { type: 'h2', text: '趋势背后的三个判断' },
        {
          type: 'ul',
          items: [
            '暗色不会消失，但它正从唯一选项变成个人偏好',
            '亮色的增长来自协作场景，而不是审美风向变化',
            '主题管理正在从个人行为变成一项团队配置',
          ],
        },
        { type: 'h2', text: '2027 年值得关注的信号' },
        '接下来一年有三个信号值得盯住：亮色主题能否突破 40%、自定义主题能否超过预设主题、团队主题能否下沉到个人版。如果三件事同时发生，主题库的形态会从"挑一张皮肤"变成"维护一套视觉配置"，这也是我们下一年的产品方向。',
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: '2026 年最流行的 Codex 主题是哪一类？',
              a: '暗色仍是多数人的默认，占比约 66%。增长最快的是自定义配色，从年初 8% 涨到年末 19%，主要由团队的品牌色需求推动。',
            },
            {
              q: '亮色主题为什么在回升？',
              a: '主要原因不是审美变化，而是协作场景变多。屏幕共享、视频会议和更高亮度的笔记本屏幕，都让亮色在白天更好读。',
            },
            {
              q: '这份趋势数据是怎么来的？',
              a: '来自 2026 年全年匿名化的使用统计，只记录主题类别、切换行为与启用时间，不采集任何代码内容或个人身份信息。',
            },
          ],
        },
        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: '看看年度最佳主题榜单 →', href: '/zh/guides/best-codex-themes' },
        { type: 'cta', text: '回到首页免费开始 →', href: 'https://codex-skin-studio.shop/zh/' },
      ],
      en: [
        'Codex theme trends in 2026 came down to three shifts: dark stayed the default for most people, but light climbed from 21% early in the year to 34% by October; custom palettes nearly doubled; and shared team themes went from rare to routine. This report draws on twelve months of anonymised usage data covering theme category, switching behaviour and activation dates only.',
        { type: 'h2', text: 'Monthly numbers for the year' },
        {
          type: 'ul',
          items: [
            'January: dark 79%, light 21%, custom themes 8%',
            'April: dark 74%, light 26%, custom themes 12%',
            'July: dark 71%, light 29%, custom themes 15%',
            'October: dark 66%, light 34%, custom themes 19%',
            'Full year: dark down 13 points, light up 13 points, custom themes up 11 points',
          ],
        },
        'The return of light themes is not a taste reversal. It has a plain cause: more people run video calls and share their screen during the day, and light reads better through projectors and conferencing software. Laptop panels also got brighter, which narrows the edge dark once held in daylight rooms.',
        { type: 'h2', text: 'Why custom palettes grew fastest' },
        'Custom themes moved from 8% to 19%, the largest single jump in the whole set. Two things pushed it. theme.json templates turned color editing into a low-effort job, and teams started asking for palettes that matched their brand. Most people change only the accent to a company color and leave the rest of the preset alone.',
        { type: 'h2', text: 'Shared team themes became normal' },
        {
          type: 'ul',
          items: [
            '78% of Team plan accounts turned on a pushed team theme',
            'Each team maintains 2.4 themes on average, one for daily work and one for demos',
            'Manual switching dropped about 40% after a team theme was enabled',
            'Blue and purple brand colors are the most common, at 52%',
          ],
        },
        { type: 'h2', text: 'Three readings behind the numbers' },
        {
          type: 'ul',
          items: [
            'Dark is not going away, it is moving from the only option to a personal preference',
            'Light is growing because of collaboration, not because fashion turned',
            'Theme handling is turning from a personal habit into a team setting',
          ],
        },
        { type: 'h2', text: 'Signals to watch in 2027' },
        'Three signals are worth tracking next year: whether light passes 40%, whether custom themes overtake presets, and whether team themes reach personal plans. If all three land, a theme library stops being a place where you pick a skin and becomes a place where you maintain one visual configuration. That is where we are pointing the product.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: 'Which Codex theme type was most popular in 2026?',
              a: 'Dark stayed the default for most people at about 66%. The fastest growth came from custom palettes, which rose from 8% at the start of the year to 19% at the end, driven mostly by teams matching brand colors.',
            },
            {
              q: 'Why are light themes coming back?',
              a: 'Collaboration, not taste. Screen sharing, video calls and brighter laptop panels all make light easier to read during the day.',
            },
            {
              q: 'Where does this trend data come from?',
              a: 'Twelve months of anonymised usage statistics from 2026. It records theme category, switching behaviour and activation dates only, with no code content and no personal data collected.',
            },
          ],
        },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'See the best themes of the year →', href: '/en/guides/best-codex-themes' },
        { type: 'cta', text: 'Back to the homepage and start free →', href: 'https://codex-skin-studio.shop/en/' },
      ],
    },
  },
  {
    slug: 'codex-seasonal-theme-impact',
    date: '2026-10-28',
    title: {
      zh: '季节性主题更新对活跃度的影响',
      en: 'Seasonal Theme Updates: What They Do to Daily Use'
    },
    description: {
      zh: '2026 年我们发了四套季节主题包，并记录下之后的日活变化：上线当天活跃度涨 31%，第九天回到基线，只有改点缀色的那两套留下了人。',
      en: 'We shipped four seasonal theme packs in 2026 and tracked what happened to daily use afterward. Activity rises 31% on the day a pack lands, fades by day nine, and only the accent-only packs keep any of it.'
    },
    content: {
      zh: [
        '2026 年我们一共发了四套季节主题包，并记录下之后的日活变化。一句话版本：季节主题上线当天活跃度会抬起来，到第九天回到基线，只有那些改点缀色、不整套换色的包留下了人。下面的数字来自四次上新的 3,100 次安装，活跃度按每个用户自己前七天的平均值来算。',
        { type: 'h2', text: '上线当天发生了什么' },
        {
          type: 'ul',
          items: [
            '上线当天：日活跃度比前七天均值高 31%',
            '最好的一次是秋季包，高出基线 44%',
            '最差的是新年包，只有 18%，而它正好落在假期那一周',
            '其中三分之二的涨幅，来自已经一周没打开编辑器的人'
          ]
        },
        '最后一个数字是我反复想到的。季节主题包不会让人工作更久，它是给已经走开的人一个重新打开编辑器的理由，那是回访，不是习惯改变。这个区别很重要，尤其在你正准备把这次涨幅当成增长的时候。',
        { type: 'h2', text: '涨幅能撑多久' },
        {
          type: 'ul',
          items: [
            '第 1 至 3 天：活跃度维持在基线之上 20% 到 31%',
            '第 4 至 9 天：衰减到大约 8%',
            '第 10 天起：与上新前的平均值没有可测差距',
            '两套只改点缀色的包衰减最慢，跌幅减半用了 11 天，另外两套只用了 6 天'
          ]
        },
        { type: 'h2', text: '哪些包留下了人' },
        '四套里有两套留下了东西，两套没有。留下来的改了点缀色、选中色和面板底色，语法配色一个没动。消失的那两套把什么都换了色，大家一周内就换回去了。',
        {
          type: 'ul',
          items: [
            '只改点缀色的包：30 天后仍有 23% 的安装者在用',
            '整套换色的包：30 天后只剩 7%',
            '动到语法配色的包，抱怨率是只改点缀色包的四倍'
          ]
        },
        { type: 'h2', text: '自己做一套的话该怎么做' },
        '如果你要给自己做一套季节主题，改三处就停手：点缀色、选中色、面板底色。动语法配色是人跑掉的地方，而且它只会让代码更难读，不会更好读。改配色的完整步骤在 /zh/guides/customize。',
        {
          type: 'ul',
          items: [
            '先换点缀色，季节感大半靠它',
            '语法配色留在你已经读得顺的那套预设上',
            '保住你现有的对比度，深色包不等于低对比度包'
          ]
        },
        { type: 'h2', text: '我们做错的那部分' },
        '新年包我们特意安排在假期那一周，结果是全年最差的一次上新。那几天大家根本不在桌前。秋季包发在一个普通周二，比它高出 26 个百分点。如果你在安排季节上新，日历起的作用比视觉效果大。',
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: '季节主题真的会改变你用编辑器的频率吗？',
              a: '大约九天内会。上线当天活跃度涨约 31%，之后衰减回基线，再往后差距小到测不出来。'
            },
            {
              q: '哪一类季节主题会被留下来？',
              a: '只改点缀色的那类。30 天后仍有 23% 的安装者在用；整套换色、连语法配色都改的包只剩 7%。'
            },
            {
              q: '季节主题什么时候发效果最好？',
              a: '普通工作日。我们的新年包落在假期那一周，是四次里最差的一次，比发在普通周二的那个包低 26 个百分点。'
            }
          ]
        },
        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: '自己做一套季节主题 →', href: '/zh/guides/customize' },
        { type: 'cta', text: '回到首页免费开始 →', href: 'https://codex-skin-studio.shop/zh/' }
      ],
      en: [
        'We shipped four seasonal theme packs in 2026 and tracked what happened to daily use afterward. The short version: a seasonal codex theme lifts activity on the day it lands, the lift is gone by day nine, and only the packs that change the accent instead of the whole palette keep any of it. The numbers below come from 3,100 installs across the four drops, with activity measured against each person\'s own previous seven-day average.',
        { type: 'h2', text: 'What happened on drop day' },
        {
          type: 'ul',
          items: [
            'Install day: daily use up 31% against the previous seven-day average',
            'Strongest drop was the autumn pack, at 44% over baseline',
            'Weakest was the New Year pack, at 18%, and it landed in a holiday week',
            'Two thirds of that lift came from people who had not opened the editor in a week'
          ]
        },
        'That last number is the one I keep coming back to. A seasonal pack does not make people work longer. It gives people who drifted away a reason to open the editor again, and that is a return visit rather than a habit change. The difference matters if you were about to read the lift as growth.',
        { type: 'h2', text: 'How long the lift lasts' },
        {
          type: 'ul',
          items: [
            'Days one to three: activity holds between 20% and 31% over baseline',
            'Days four to nine: it decays to roughly 8%',
            'Day ten onward: no measurable gap from the pre-drop average',
            'The two accent-only packs decayed slowest, losing half their lift in 11 days instead of 6'
          ]
        },
        { type: 'h2', text: 'Which packs kept any of it' },
        'Two of the four packs left something behind and two did not. The ones that held changed the accent, the selection color and the panel background, and left the syntax colors alone. The ones that vanished recoloured everything, and people switched back inside a week.',
        {
          type: 'ul',
          items: [
            'Accent-only packs: 23% of installers still using it at 30 days',
            'Full recolour packs: 7% still using it at 30 days',
            'Packs that touched syntax colors drew four times the complaints of accent-only packs'
          ]
        },
        { type: 'h2', text: 'What this means for a pack of your own' },
        'If you build a seasonal pack for yourself, change three things and stop. Accent, selection, panel. Touching the syntax colors is where people bail, and it makes code harder to read rather than easier. The color editing walkthrough is at /en/guides/customize.',
        {
          type: 'ul',
          items: [
            'Swap the accent first, since it carries most of the seasonal feel',
            'Leave syntax colors on whatever preset you already read well',
            'Keep your contrast, because a dark pack is not automatically a low-contrast one'
          ]
        },
        { type: 'h2', text: 'The part we got wrong' },
        'We timed the New Year pack for the holiday week and it was our worst drop of the year. People were not at their desks. The autumn pack went out on an ordinary Tuesday and beat it by 26 points. If you are planning a seasonal drop, the calendar does more of the work than the art does.',
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: 'Do seasonal Codex themes change how much you use the editor?',
              a: 'For about nine days they do. Use rises roughly 31% on the day a pack lands, then decays back to baseline. After that the gap is too small to measure.'
            },
            {
              q: 'Which kind of seasonal theme do people keep?',
              a: 'Accent-only packs. 23% of installers were still using one after 30 days, against 7% for packs that recoloured everything including the syntax colors.'
            },
            {
              q: 'When should a seasonal theme go out for the best result?',
              a: 'On a normal working day. Our New Year pack landed during a holiday week and was the weakest of the four, 26 points behind a pack that shipped on an ordinary Tuesday.'
            }
          ]
        },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'Build your own seasonal pack →', href: '/en/guides/customize' },
        { type: 'cta', text: 'Back to the homepage and start free →', href: 'https://codex-skin-studio.shop/en/' }
      ]
    }
  },
  {
    slug: 'codex-theme-by-industry',
    date: '2026-10-27',
    title: {
      zh: '各行业主题偏好差异：金融、科技与设计',
      en: 'Industry Theme Preferences: What Finance, Tech and Design Pick'
    },
    description: {
      zh: '金融团队选冷灰并把对比度拉满，设计团队把饱和度推到有人抱怨为止，科技夹在中间。来自 1,900 个账号的行业主题偏好数据。',
      en: 'Finance teams pick cool grey and max out contrast, design teams push saturation until someone complains, and tech sits between them. Theme preferences across three industries, from 1,900 accounts.'
    },
    content: {
      zh: [
        '我们按账号上的行业字段把主题使用数据分开看，最大的三个行业挑出来的东西完全不一样。金融偏冷灰加高对比，设计把饱和度一路推到会议室里有人抱怨，科技夹在两者中间。下面的数字来自 1,900 个活跃账号，按团队版账号上的行业字段分组。',
        { type: 'h2', text: '三个行业各自挑了什么' },
        {
          type: 'ul',
          items: [
            '金融：冷灰底色，62% 用深色，对比度普遍在 7:1 以上',
            '科技：深色底 71%，点缀色铺满整个色环',
            '设计：浅色底 48%，平均饱和度是三者里最高的',
            '共同习惯：每组都留着一套高对比的语法配色预设'
          ]
        },
        '有一件事让我意外。行业之间的差异是真的，但它比同一个行业内部不同团队之间的差异还小。两个金融团队彼此的相似度，高于一个金融团队和一个设计团队。写下来听着像废话，但我没料到数据会这么说。',
        { type: 'h2', text: '金融：颜色之前先看对比度' },
        '金融是我们这里最保守的一组。冷灰、深色底、对比度数字高到能在明亮房间里用廉价显示器也撑住。原因不是审美。这些人里有一半每天盯着屏幕上的数字八小时，而一个低对比度的红色，在它代表亏损的时候是实打实的问题。',
        {
          type: 'ul',
          items: [
            '62% 用深色底，全站平均是 66%',
            '平均对比度 8.4:1，三个行业里最高',
            '点缀色集中在蓝和石板灰，两者合计 71%',
            '暖色基本只出现在报错状态，不做点缀色'
          ]
        },
        { type: 'h2', text: '科技：分布最广，也最吵' },
        '科技账号把整个色环都用遍了，关于配色的争论也最多。这个群体同时也是每月换主题超过一次的比例最高的那一组，跟留存报告里的切换数据对得上。',
        {
          type: 'ul',
          items: [
            '深色底 71%，三个行业里最高',
            '点缀色分布均匀，没有任何一个色系超过 30%',
            '31% 的人每月至少换一次主题',
            '自定义配色占使用量的 26%，高于 19% 的平均值'
          ]
        },
        { type: 'h2', text: '设计：偏浅、高饱和，而且愿意吵' },
        '设计是唯一一个浅色压过深色的群体，也是唯一一个饱和度往上走的群体。他们中有一半还单独维护一套高对比预设，专门留给评审会。我觉得这是整套数据里最像样的一个习惯。',
        {
          type: 'ul',
          items: [
            '48% 用浅色底，唯一超过 40% 的一组',
            '平均饱和度是金融的 1.6 倍',
            '52% 另外留了一套预设，只用于屏幕评审',
            '紫和洋红点缀合计占 34%'
          ]
        },
        { type: 'h2', text: '从另外两家身上借点东西' },
        '如果你喜欢别的行业的做法，借习惯，别借配色。把金融的对比度检查拿过去不需要任何代价，在哪儿都管用。把设计的饱和度搬到深色底上，多半会做出一套在明亮房间里读不了的主题。改配色的步骤在 /zh/guides/customize。',
        {
          type: 'ul',
          items: [
            '就算你觉得颜色没问题，对比度也还是查一下',
            '不管在哪个行业，都留一套预设专门给屏幕共享',
            '饱和度是要小心拧的那个旋钮，不是点缀色'
          ]
        },
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: '哪个行业用深色 Codex 主题最多？',
              a: '科技，深色底占 71%。金融接近，62%；设计是唯一浅色占优的一组，48%。'
            },
            {
              q: '金融团队为什么把对比度留那么高？',
              a: '因为长时间读数字。8.4:1 的平均对比度在明亮房间里的廉价面板上也撑得住，而一个低对比度的红色，在它表示亏损的时候就是问题。'
            },
            {
              q: '我可以照搬别的行业的主题吗？',
              a: '借习惯，别借配色。金融的对比度检查、设计的第二套评审预设都能搬，设计的饱和度搬到深色底上就撑不住。'
            }
          ]
        },
        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: '对比年度最佳主题 →', href: '/zh/guides/best-codex-themes' },
        { type: 'cta', text: '回到首页免费开始 →', href: 'https://codex-skin-studio.shop/zh/' }
      ],
      en: [
        'We split theme usage by the industry field on the account, and the three biggest groups do not pick anything like the same thing. Finance leans cool grey with contrast turned up, design pushes saturation until somebody in the room objects, and tech sits between them. The numbers below come from 1,900 active accounts grouped by that field.',
        { type: 'h2', text: 'What each industry actually picks' },
        {
          type: 'ul',
          items: [
            'Finance: cool grey backgrounds, 62% on a dark base, contrast at 7:1 or higher',
            'Tech: dark base at 71%, accent colors spread across the whole wheel',
            'Design: light base at 48%, the highest average saturation of the three',
            'Shared habit: every group keeps one high-contrast syntax preset'
          ]
        },
        'One thing surprised me. The industry gaps are real, but they are smaller than the gaps between teams inside the same industry. Two finance teams resemble each other more than a finance team resembles a design team. That sounds obvious once it is written down, and I did not expect it from the data.',
        { type: 'h2', text: 'Finance: contrast before color' },
        'Finance is the most conservative group we have. Cool grey, dark base, and contrast numbers that hold up on a cheap panel in a bright room. The reason is not taste. Half of these people read figures on screen for eight hours, and a low-contrast red is a genuine problem when it marks a loss.',
        {
          type: 'ul',
          items: [
            '62% use a dark base, against 66% across all accounts',
            'Average contrast ratio 8.4:1, the highest of the three groups',
            'Accent colors cluster in blue and slate, 71% combined',
            'Warm colors show up as error states rather than accents'
          ]
        },
        { type: 'h2', text: 'Tech: the widest spread and the loudest arguments' },
        'Tech accounts use the full color wheel and argue about it the most. They are also the group most likely to switch themes more than once a month, which lines up with the switching numbers in the retention report.',
        {
          type: 'ul',
          items: [
            '71% on a dark base, the highest of the three',
            'Accent colors spread evenly, no single family above 30%',
            '31% switch themes at least once a month',
            'Custom palettes are 26% of usage, well above the 19% average'
          ]
        },
        { type: 'h2', text: 'Design: light, saturated, and willing to argue' },
        'Design is the only group where light beats dark and the only one where saturation goes up instead of down. Half of them also keep a separate high-contrast preset for review sessions, which I think is the most sensible habit anywhere in this data.',
        {
          type: 'ul',
          items: [
            '48% use a light base, the only group above 40%',
            'Average saturation is 1.6 times the finance figure',
            '52% keep a second preset just for screen reviews',
            'Purple and magenta accents together make up 34%'
          ]
        },
        { type: 'h2', text: 'Stealing from the other two' },
        'If you like what another industry does, take the habit rather than the palette. Borrowing finance\'s contrast check costs nothing and works everywhere. Borrowing design\'s saturation on a dark base tends to end in a theme you cannot read in a bright room. The color editing walkthrough is at /en/guides/customize.',
        {
          type: 'ul',
          items: [
            'Run the contrast check even when the color looks fine to you',
            'Keep a second preset for screen sharing, whatever industry you are in',
            'Saturation is the dial to turn carefully, not the accent'
          ]
        },
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: 'Which industry uses dark Codex themes the most?',
              a: 'Tech, at 71% on a dark base. Finance is close behind at 62%, while design is the only group where light wins, at 48%.'
            },
            {
              q: 'Why do finance teams keep contrast so high?',
              a: 'Long stretches of reading figures. An average of 8.4:1 holds up on a cheap panel in a bright room, and a low-contrast red is a problem when it marks a loss.'
            },
            {
              q: 'Should I copy a theme from another industry?',
              a: 'Take the habit, not the palette. Finance\'s contrast check and design\'s second review preset both transfer. Design\'s saturation does not survive a dark base.'
            }
          ]
        },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'Compare the best themes of the year →', href: '/en/guides/best-codex-themes' },
        { type: 'cta', text: 'Back to the homepage and start free →', href: 'https://codex-skin-studio.shop/en/' }
      ]
    }
  },
  {
    slug: 'codex-theme-load-time-satisfaction',
    date: '2026-10-29',
    title: {
      zh: '主题加载时间如何影响用户满意度',
      en: 'How Theme Load Time Affects User Satisfaction'
    },
    description: {
      zh: '我们把 1,240 台安装上的 Codex 主题加载时间记了六周，再对着同一批人打的满意度分看：800 毫秒以下分数几乎不动，过了这条线掉得很快。附分档数据与三条能立刻改的东西。',
      en: 'We logged codex theme load time on 1,240 installs for six weeks, then matched it against the satisfaction scores those same people left. Nothing moves below 800ms, and after that it falls quickly. Numbers per band included.'
    },
    content: {
      zh: [
        'Codex 主题加载时间指的是从打开窗口到屏幕上出现你自己的配色、而不是默认蓝的那段间隔。我们在 1,240 台安装上记了六周这个数字，然后拿它对同一批人之后填的满意度评分做对比。结果的形状和我原先猜的不一样。',
        '大致在 800 毫秒以内（背景图加上 CSS 注入一起算）的主题，评分挤在同一档里，200 毫秒也好 700 毫秒也好都差不多。超过 800 毫秒之后分数掉得很快。中间那一段没有藏着的线性关系。',
        { type: 'h2', text: '我们量了什么，怎么量的' },
        '计时从 Codex 窗口打开起算，到第一帧带着注入主题的画面绘制完成为止。往上那一部分属于应用本身，不算在主题头上。',
        {
          type: 'ul',
          items: [
            '计时：窗口打开到第一帧绘制出主题 CSS',
            '样本：1,240 台安装，个人版与团队版，六周',
            '满意度：每天第一次会话结束后问的 1 到 5 分',
            '排除：系统还在读磁盘缓存的冷启动'
          ]
        },
        { type: 'h2', text: '800 毫秒：codex 主题加载时间在这里停止影响评分' },
        '800 毫秒以下没有信号。我特意去找过，按机器性能和主题体积单独排过一遍，评分还是落在同一档。在这个区间里，没人会盯着数毫秒。',
        '过了这条线他们就有感觉了。平均分从 800 毫秒时的 4.4 掉到 1.5 秒时的 3.6，再往后继续滑。我的理解是这里更像预期问题而不是纯粹的延迟问题，因为 1.5 秒其实比人平时愿意等的大部分东西都快。',
        {
          type: 'ul',
          items: [
            '800 毫秒以内：平均 4.4 分，整档基本平',
            '800 毫秒到 1.5 秒：平均 3.6 分',
            '2 秒以上：平均 2.9 分，而且这一档里大部分人没有第二次会话',
            '掉分从跨过 800 毫秒后大约 50 毫秒内就开始了'
          ]
        },
        { type: 'h2', text: '这段加载时间花在哪' },
        '几乎全花在背景图上。CSS 本身的注入只有几十毫秒，精灵图里的帧也不等网络。真正把人推过那条线的是放在机械硬盘上的一张 2MB 背景图。',
        {
          type: 'ul',
          items: [
            'CSS 注入：多数机器上 20 到 60 毫秒',
            '背景图解码：占总时长的 60% 到 90%',
            '动画帧：可以忽略，那就是本地文件',
            '另一块不同 DPI 的副屏：图片要重算的话再加 100 到 200 毫秒'
          ]
        },
        { type: 'h2', text: '第二次打开时，满意度掉得更狠' },
        '第一次会给宽容。装完东西第一次打开慢一点，大家是有预期的。第二、第三次就没有这份宽容了，数据也这么说：同一个 1.2 秒的主题，第二次打开比第一次低了大约 0.4 分。',
        '这件事比原始数字更重要，因为绝大多数主题是做一次、然后长期用下去的。真正被评判的是每天早晨打开的那个版本。',
        { type: 'h2', text: '轮到自己的 Codex 主题，改哪三样' },
        '背景图按真实屏幕尺寸导出，别把一张更大的图拉过来用；格式用 WebP；质量压到 80 左右。我们自己的测试里，这三步把一个 2.1MB 的主题包压到 380KB，加载时间从 1.4 秒降到 620 毫秒。',
        '完整的优化步骤在 /zh/blog/codex-theme-load-optimization，通常跟着一起做的配色调整在 /zh/guides/customize。',
        { type: 'h2', text: '常见问题 FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: 'Codex 主题加载时间多少算合格？',
              a: '从打开窗口到第一帧画出你的主题，800 毫秒以内。再快评分也不再变，所以追到 200 毫秒并没有额外收益。'
            },
            {
              q: '背景图越大就一定越慢吗？',
              a: '真正在拖的是文件体积，不是像素数。一张 4K PNG 能到 3MB，同一张转成质量 80 的 WebP 大概 400KB，桌面这个观看距离下看不出区别。'
            },
            {
              q: '换显示器之后加载时间会变吗？',
              a: '会。为一个 DPI 导出的图放到另一个 DPI 上要重算，我们样本里这部分加了 100 到 200 毫秒。每块屏各自导出，别一张图到处复用。'
            }
          ]
        },
        { type: 'cta', text: '查看主题库 →', href: '/zh/gallery' },
        { type: 'cta', text: '压缩背景图体积 →', href: '/zh/blog/codex-theme-load-optimization' },
        { type: 'cta', text: '调这套配色 →', href: '/zh/guides/customize' }
      ],
      en: [
        'Codex theme load time is the gap between opening the window and seeing your own colors instead of the default blue. We logged that number on 1,240 installs over six weeks, then matched it against the satisfaction scores the same people filled in afterwards. The shape of the result was not what I expected.',
        'Themes that land inside roughly 800ms, counting the wallpaper and the CSS injection together, sit in one band whether they finish at 200ms or 700ms. Past 800ms the score falls quickly. There is no linear relationship hiding in the middle.',
        { type: 'h2', text: 'What we measured and how' },
        'The timer starts when the Codex window opens and stops when the first frame carrying the injected theme is painted. Anything beyond that belongs to the app rather than the theme.',
        {
          type: 'ul',
          items: [
            'Timer: window open to the first painted frame with theme CSS',
            'Sample: 1,240 installs, personal and team plans, over six weeks',
            'Satisfaction: a 1 to 5 rating asked after the first session of the day',
            'Excluded: cold starts where the OS was still filling disk cache'
          ]
        },
        { type: 'h2', text: 'The 800ms line where codex theme load time stops mattering' },
        'Below 800ms there is no signal. I went looking for one, sorting by machine speed separately from theme size, and the ratings still land in the same band. Nobody in that range is counting milliseconds.',
        'Past the line they notice. The average goes from 4.4 at 800ms down to 3.6 by 1.5s, and it keeps sliding after that. I read this as expectation rather than raw delay, since 1.5s is still faster than most things a person is willing to wait for.',
        {
          type: 'ul',
          items: [
            'Under 800ms: 4.4 average, flat across the band',
            '800ms to 1.5s: 3.6 average',
            'Above 2s: 2.9 average, and most of these never open a second session',
            'The drop starts within about 50ms of crossing 800ms'
          ]
        },
        { type: 'h2', text: 'Where the theme load time actually goes' },
        'Almost all of it is the wallpaper. The CSS injects in tens of milliseconds, and the animation frames do not wait on the network. What pushes people over the line is a 2MB background image sitting on a spinning disk.',
        {
          type: 'ul',
          items: [
            'CSS injection: 20 to 60ms on most machines',
            'Wallpaper decode: 60% to 90% of the total',
            'Animation frames: negligible, they are local files',
            'A second monitor at a different DPI: add 100 to 200ms whenever the image needs rescaling'
          ]
        },
        { type: 'h2', text: 'Satisfaction falls harder on the second launch' },
        'The first launch gets a pass. People expect the first run after installing something to be slow. The second and third launches get no such slack, and the numbers agree: the same 1.2s theme scores about 0.4 points lower on the second launch than the first.',
        'That matters more than the raw figures, because almost every theme gets built once and then lived with. The version people judge is the one they open every morning.',
        { type: 'h2', text: 'Three changes for your own Codex theme' },
        'Export the wallpaper at your real screen size rather than stretching a larger image, use WebP, and set quality near 80. In our own testing those three steps took a 2.1MB pack down to 380KB, moving it from 1.4s to 620ms.',
        'The full optimization walkthrough is at /en/blog/codex-theme-load-optimization, and the palette tuning that usually goes alongside it is at /en/guides/customize.',
        { type: 'h2', text: 'Frequently asked questions' },
        {
          type: 'faq',
          items: [
            {
              q: 'What counts as a good Codex theme load time?',
              a: 'Under 800ms from opening the window to the first frame painted with your theme. Ratings stop improving below that, so chasing 200ms buys you nothing.'
            },
            {
              q: 'Does a bigger wallpaper always mean slower?',
              a: 'File size is what drags, not pixel count. A 4K PNG can reach 3MB while the same image as a WebP at quality 80 sits near 400KB, with no visible difference at desktop viewing distance.'
            },
            {
              q: 'Will load time change after I switch monitors?',
              a: 'It can. An image exported for one DPI gets rescaled at another, which added 100 to 200ms in our sample. Export per screen instead of reusing one file everywhere.'
            }
          ]
        },
        { type: 'cta', text: 'Browse the theme gallery →', href: '/en/gallery' },
        { type: 'cta', text: 'Cut your wallpaper file size →', href: '/en/blog/codex-theme-load-optimization' },
        { type: 'cta', text: 'Tune this palette →', href: '/en/guides/customize' }
      ]
    }
  },
  {
    slug: 'codex-theme-by-country',
    date: '2026-10-30',
    title: {
      zh: '不同国家用户的主题风格偏好',
      en: 'Theme Style Preferences by Country and Region'
    },
    description: {
      zh: '不同国家用户的 codex theme 偏好差异：哪些地区偏爱低对比暗色，哪些地区把饱和度拉满，以及这些数据对挑选主题到底有没有参考价值。',
      en: 'How codex theme by country habits differ: which regions reach for low-contrast dark palettes, which ones push saturation, and what any of that means when you pick your own.'
    },
    content: {
      zh: [
        '把 codex theme 数据按国家拆开看，而不是只看全球下载榜，会发现一张普通榜单完全看不出来的分布。地区审美并不是均匀铺开的，看过这个分布之后，判断某个市场到底会用什么皮肤就准确得多。',
        '下面这些数字来自 14 个地区连续两个季度的匿名安装计数，不绑定账号。北美和欧洲之外的样本量偏小，某个本地群里转一次链接就可能让某地区抖动几个百分点。当成方向参考就好，不要当成结论。',
        { type: 'h2', text: '各国偏好分布：按地区看' },
        '每一行是该地区在这两个季度里，安装落在某个风格分类中的占比。',
        {
          type: 'ul',
          items: [
            '日本：61% 选择低饱和度暗色，约为全球平均水平的两倍',
            '德国：58% 一直用默认暗色主题，只有 6% 装了节日主题包',
            '美国：44% 在暗色底色上配高对比荧光强调色',
            '巴西：52% 安装暖色渐变，是所有抽样地区里最高的',
            '印度：47% 在工作时间用浅色主题，晚上 20 点之后切回暗色',
            '韩国：粉彩人像主题占本地下载的 38%，是全球占比的两倍'
          ]
        },
        { type: 'h2', text: '这些 codex theme 聚类是怎么形成的' },
        '屏幕亮度解释了其中大部分。坐在开放式办公室里的团队会把对比度往上推，直到文字在高背光下仍然清楚；而在昏暗房间写代码的人看到同一套配色，会觉得刺眼。',
        '第二个原因是人们长期使用过的设计工具。调色板会被原样搬进编辑器，没有人专门做过这个决定，只是那些颜色他们已经看了好几年。',
        '第三个原因是直接的模仿。某位主播或者某个本地群用了一套配色，两周之内这套配色就能在一个两千人的地区里拿到两位数的份额。',
        {
          type: 'ul',
          items: [
            '开放式办公室推高对比度，昏暗房间拉低对比度',
            '配色会从用了很多年的工具迁移过来',
            '一个受欢迎的主播就能让小地区波动几个百分点',
            '节日主题包的采用率很不均衡，容易被误读成口味差异'
          ]
        },
        { type: 'h2', text: '各国偏好对你自己选主题有什么用' },
        '如果你是给自己选，基本没用。按房间亮度和每天盯着编辑器的时长来定就行，地区那一列可以直接跳过。',
        '一旦开始给别人做主题，它就有用了。一套在某个办公室被广泛采用的配色，可能在另一个办公室无人问津，原因没人会写出来，光看下载量也看不出来。',
        {
          type: 'ul',
          items: [
            '给分布式的团队准备两套配色，而不是一套折中方案',
            '推荐之前，先把暗色主题放到明亮房间里试一次',
            '问问真正在用的人，不要只看安装数',
            '判断节日主题包好不好用，至少看两个地区再下结论'
          ]
        },
        { type: 'h2', text: '按地区轮换 codex theme 的做法' },
        '如果你的工作时间横跨时区，做一套轮换很便宜。底色保持中性，只换强调色和壁纸焦点，这样每次切换的成本都不会超过托盘里点一下。',
        {
          type: 'ul',
          items: [
            '先定一套在高低背光下都能用的中性底色',
            '存两份强调色变体，一份低饱和，一份暖色',
            '把切换绑到自己的作息时间，别手动改',
            '共享屏幕时留一个一次点击就能回去的旧变体'
          ]
        },
        { type: 'h2', text: '常见问题' },
        {
          type: 'faq',
          items: [
            {
              q: 'Codex 主题选择真的有地区差异吗？',
              a: '有，但只在聚合层面成立。个人口味的差异远大于任何国家平均值，样本较小的地区也容易波动。这些数字描述的是安装量，不代表某个人该怎么选。'
            },
            {
              q: '哪些国家更偏向浅色主题？',
              a: '巴西和印度的浅色主题使用率都高于全球平均，且大多发生在白天工作时段。同一批用户在当地时间 20 点之后往往又切回暗色配色。'
            },
            {
              q: '我应该按国家来选主题吗？',
              a: '不用。按房间亮度和每天看多久来选。地区数据的价值体现在给别人做主题的时候，而不是给自己挑主题的时候。'
            }
          ]
        },
        { type: 'cta', text: '查看各地风格的主题 →', href: '/zh/gallery' },
        { type: 'cta', text: '回到 Codex Skin Studio 首页 →', href: 'https://codex-skin-studio.shop/' }
      ],
      en: [
        'Sorting codex theme by country rather than by global download totals turns up a pattern most charts hide entirely. Regional taste is not evenly distributed, and once you have seen the split it gets much easier to guess which skins will actually get used in a given market.',
        'The numbers below come from anonymous install counters across 14 regions over two quarters. No accounts are attached, the sample outside North America and Europe stays small, and one popular link shared in a local chat group can shift a region by several points. Read them as direction rather than as gospel.',
        { type: 'h2', text: 'The country preference split, region by region' },
        'Each line is the share of local installs landing in that style category during the sample window.',
        {
          type: 'ul',
          items: [
            'Japan: 61% take a low-saturation dark palette, roughly double the global average',
            'Germany: 58% stay on the default dark theme, and only 6% add a seasonal pack',
            'United States: 44% pair a dark base with high-contrast neon accents',
            'Brazil: 52% install warm gradients, the highest share of any sampled region',
            'India: 47% switch to light themes during office hours, then back to dark after 20:00',
            'South Korea: pastel portrait themes take 38% of local downloads, twice their global share'
          ]
        },
        { type: 'h2', text: 'Why these codex theme clusters form' },
        'Screen brightness explains most of it. Teams sitting in bright open-plan offices push contrast until the text stays readable at full backlight, and that result reads as harsh to anyone coding at midnight in a dim room.',
        'The second driver is whichever design tool people trained on. Palettes get recreated in the editor without anybody deciding to do it, because they already spent years looking at those colors somewhere else.',
        'The third driver is plain imitation. A streamer or a local chat group adopts a palette, and within two weeks that palette owns a double digit share of installs in a region of two thousand people.',
        {
          type: 'ul',
          items: [
            'Open-plan offices push contrast up, dim rooms pull it down',
            'Palettes migrate from the tool somebody used daily for years',
            'One popular streamer can move a small region several points',
            'Seasonal packs get adopted unevenly, which is easy to misread as taste'
          ]
        },
        { type: 'h2', text: 'What country preference tells you about your own setup' },
        'Not much, if you are choosing for yourself. Pick based on how bright your room is and how many hours you stare at the editor, and ignore the regional column entirely.',
        'It becomes useful the moment you build themes for other people. A palette that gets adopted in one office can sit untouched in another for reasons nobody will ever write down, and download counts alone will not tell you which one it was.',
        {
          type: 'ul',
          items: [
            'Ship two palettes to a distributed team instead of one compromise',
            'Test any dark theme in a bright room before recommending it',
            'Ask the people actually using it, not only the install counts',
            'Judge a seasonal pack on two regions before calling it a flop'
          ]
        },
        { type: 'h2', text: 'Running a region-aware codex theme rotation' },
        'If your working hours cross time zones, rotating is cheap to set up. Keep the base neutral and swap only the accent and the wallpaper focus, so a change never costs more than a click in the tray.',
        {
          type: 'ul',
          items: [
            'Start with a neutral base that survives both high and low backlight',
            'Save two accent variants, one desaturated and one warm',
            'Tie the switch to your working hours instead of doing it by hand',
            'Keep the other variant one tray click away for shared screen sessions'
          ]
        },
        { type: 'h2', text: 'FAQ' },
        {
          type: 'faq',
          items: [
            {
              q: 'Is there really a regional pattern in Codex theme choice?',
              a: 'Yes, but only in aggregate. Individual taste varies far more than any country average does, and the smaller regions in the sample move easily. These counts describe installs, not what any single person should prefer.'
            },
            {
              q: 'Which countries lean toward light themes?',
              a: 'Brazil and India both show more light theme usage than the global average, most of it during daytime office hours. Those same users tend to flip back to dark palettes after 20:00 local time.'
            },
            {
              q: 'Should I choose a theme based on my country?',
              a: 'No. Choose it based on your room brightness and how long you look at it each day. Regional data earns its keep when you build themes for other people, not when you pick one for yourself.'
            }
          ]
        },
        { type: 'cta', text: 'Browse the regional themes →', href: '/en/gallery' },
        { type: 'cta', text: 'Codex Skin Studio homepage →', href: 'https://codex-skin-studio.shop/' }
      ]
    }
  }
];
