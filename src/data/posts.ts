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
];