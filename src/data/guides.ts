import type { Locale } from '@/lib/i18n/config';

export type GuideBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'steps'; items: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; tone: 'info' | 'safe' | 'warn'; text: string }
  | { type: 'themeGrid' };

export interface GuideFAQ {
  q: string;
  a: string;
}

export interface GuideContent {
  /** 用于 <title>，应含核心关键词 */
  metaTitle: string;
  metaDescription: string;
  /** 中心页卡片与正文导语 */
  summary: string;
  intro: string;
  blocks: GuideBlock[];
  faqs: GuideFAQ[];
  /** 关联的其他指南 slug（用于底部内链） */
  related: string[];
}

export interface Guide {
  slug: string;
  category: string;
  zh: GuideContent;
  en: GuideContent;
}

export const guides: Guide[] = [
  {
    slug: 'install-windows',
    category: 'tutorial',
    zh: {
      metaTitle: 'Windows 安装 Codex Skin Studio 教程（2026 逐步图解）',
      metaDescription:
        '一步一步在 Windows 10/11 上安装 Codex Skin Studio：下载 Release、以管理员运行安装脚本、选择主题并即时生效。含 Node.js 环境要求与常见报错排查。',
      summary: 'Windows 10/11 完整安装流程，含环境要求与报错排查。',
      intro:
        '本教程带你从零在 Windows 上装好 Codex Skin Studio，并套用第一个主题。工具基于本机 CDP 回环注入，安装过程不修改 Codex 任何官方文件，停止后即完全还原。',
      blocks: [
        {
          type: 'paragraph',
          text: 'Codex Skin Studio 通过本机 CDP（Chrome DevTools Protocol）回环注入 CSS，对 Codex 桌面端界面做运行时换肤。它不写入、不修改 app.asar 或任何官方签名文件，因此不会破坏 Codex 的代码签名。',
        },
        { type: 'heading', text: '一、环境要求' },
        {
          type: 'list',
          items: [
            'Windows 10 或 Windows 11（64 位）',
            'Node.js 20 及以上版本',
            'PowerShell 5.1 及以上（Windows 10/11 通常已自带）',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: '不确定 Node 版本？在 PowerShell 中运行 node -v 即可查看。低于 20 请先到 Node.js 官网安装 LTS 版本。',
        },
        { type: 'heading', text: '二、安装步骤' },
        {
          type: 'steps',
          items: [
            '打开 Codex Skin Studio 官网，进入「主题画廊」或「定价」页，下载最新的 Windows Release 包（.zip）。',
            '将压缩包解压到任意目录，推荐 C:\\Program Files\\CodexSkinStudio。',
            '右键 install-codex-skin-studio.ps1，选择「使用 PowerShell 运行」，并在弹出的 UAC 中点击「是」（需管理员权限）。',
            '安装完成后，系统托盘（右下角）会出现 Codex Skin Studio 图标。',
            '右键托盘图标，从主题列表中选择一个喜欢的主题，Codex 界面会立即应用效果。',
          ],
        },
        { type: 'heading', text: '三、选择并应用主题' },
        {
          type: 'list',
          items: [
            '右键系统托盘图标打开主题列表。',
            '点击任意主题即可实时预览，无需重启 Codex。',
            '想换风格时再次右键切换即可；想回到官方原貌，点击「一键恢复」。',
          ],
        },
        {
          type: 'callout',
          tone: 'safe',
          text: '所有修改都是运行时的，关闭工具或点击「恢复」后，Codex 会立刻回到官方默认外观，磁盘上不留任何改动。',
        },
        { type: 'heading', text: '四、常见报错排查' },
        {
          type: 'list',
          items: [
            '脚本被系统拦截：PowerShell 默认可能禁止运行脚本。请以管理员打开 PowerShell，执行 Set-ExecutionPolicy -Scope CurrentUser RemoteSigned 后重试。',
            '提示 Node 版本过低：升级到 Node.js 20+ 后重开终端。',
            '托盘图标不显示：确认工具进程在运行；如被杀软误拦，请将安装目录加入白名单。',
            '主题没生效：先完全退出并重启 Codex，再切换主题；若仍无效，可能是 Codex 更新改动了界面结构，关注官网适配公告。',
          ],
        },
      ],
      faqs: [
        {
          q: '安装会影响 Codex 的官方文件吗？',
          a: '不会。CDP 注入是运行时操作，不修改任何磁盘文件，停止后完全恢复。',
        },
        {
          q: 'Windows 上需要什么运行环境？',
          a: '需要 Node.js 20+ 和 PowerShell 5.1+（Windows 10/11 自带）。',
        },
        {
          q: '安装脚本被系统阻止怎么办？',
          a: '以管理员身份打开 PowerShell，执行 Set-ExecutionPolicy -Scope CurrentUser RemoteSigned 即可允许本地脚本运行。',
        },
        {
          q: '如何彻底卸载？',
          a: '结束 Codex Skin Studio 进程即可，工具不向系统写入持久化改动，无残留注册项需要清理。',
        },
      ],
      related: ['install-macos', 'is-it-safe', 'best-codex-themes'],
    },
    en: {
      metaTitle: 'How to Install Codex Skin Studio on Windows (Step-by-Step 2026)',
      metaDescription:
        'Install Codex Skin Studio on Windows 10/11: download the Release, run the installer as admin, pick a theme and apply instantly. Includes Node.js requirements and troubleshooting.',
      summary:
        'Full Windows 10/11 install walkthrough with requirements and troubleshooting.',
      intro:
        'This guide takes you from zero to your first themed Codex on Windows. The tool uses local CDP loopback injection, so installation never touches any official Codex files and fully reverts when stopped.',
      blocks: [
        {
          type: 'paragraph',
          text: 'Codex Skin Studio skins the Codex desktop app at runtime via local CDP (Chrome DevTools Protocol) loopback injection of CSS. It does not write to or modify app.asar or any signed official file, so it never breaks Codex’s code signature.',
        },
        { type: 'heading', text: '1. Requirements' },
        {
          type: 'list',
          items: [
            'Windows 10 or Windows 11 (64-bit)',
            'Node.js 20 or newer',
            'PowerShell 5.1 or newer (usually preinstalled on Windows 10/11)',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Not sure about Node? Run node -v in PowerShell. If below 20, install the LTS build from nodejs.org first.',
        },
        { type: 'heading', text: '2. Install steps' },
        {
          type: 'steps',
          items: [
            'From the official site, go to Gallery or Pricing and download the latest Windows Release (.zip).',
            'Extract it to any folder; C:\\Program Files\\CodexSkinStudio is recommended.',
            'Right-click install-codex-skin-studio.ps1, choose “Run with PowerShell”, and accept the UAC prompt (admin rights required).',
            'After install, a Codex Skin Studio icon appears in the system tray (bottom-right).',
            'Right-click the tray icon, pick a theme from the list, and the Codex UI updates instantly.',
          ],
        },
        { type: 'heading', text: '3. Pick and apply a theme' },
        {
          type: 'list',
          items: [
            'Right-click the tray icon to open the theme list.',
            'Click any theme for a live preview — no Codex restart needed.',
            'To revert, open the menu and choose “Restore” to get the official look back.',
          ],
        },
        {
          type: 'callout',
          tone: 'safe',
          text: 'All changes are runtime-only. Closing the tool or clicking “Restore” returns Codex to its default appearance immediately, with nothing written to disk.',
        },
        { type: 'heading', text: '4. Troubleshooting' },
        {
          type: 'list',
          items: [
            'Script blocked by Windows: PowerShell may block scripts by default. Run Set-ExecutionPolicy -Scope CurrentUser RemoteSigned as admin, then retry.',
            'Node version too low: upgrade to Node.js 20+ and reopen the terminal.',
            'No tray icon: make sure the process is running; if flagged by antivirus, allowlist the install folder.',
            'Theme not applying: fully quit and restart Codex, then switch themes. If it still fails, a Codex update may have changed the UI — watch the site for adapter updates.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Does install modify Codex official files?',
          a: 'No. CDP injection is a runtime operation that does not modify any disk files and fully reverts when stopped.',
        },
        {
          q: 'What does Windows need?',
          a: 'Node.js 20+ and PowerShell 5.1+ (built into Windows 10/11).',
        },
        {
          q: 'The installer script is blocked. What now?',
          a: 'Open PowerShell as admin and run Set-ExecutionPolicy -Scope CurrentUser RemoteSigned to allow local scripts.',
        },
        {
          q: 'How do I uninstall completely?',
          a: 'Just end the Codex Skin Studio process. The tool writes no persistent changes, so there is nothing left to clean up.',
        },
      ],
      related: ['install-macos', 'is-it-safe', 'best-codex-themes'],
    },
  },
  {
    slug: 'install-macos',
    category: 'tutorial',
    zh: {
      metaTitle: 'macOS 安装 Codex Skin Studio 教程（2026 逐步图解）',
      metaDescription:
        '在 macOS 上安装 Codex Skin Studio：下载 .dmg/.zip、拖入应用程序、菜单栏图标启动、选择主题。含 Gatekeeper「无法验证开发者」解决方法。',
      summary: 'macOS 完整安装流程，含 Gatekeeper 拦截处理。',
      intro:
        '本教程适用于 macOS（Intel 与 Apple 芯片均可）。Codex Skin Studio 通过本机 CDP 注入换肤，不修改 Codex 官方文件，关闭即还原。',
      blocks: [
        {
          type: 'paragraph',
          text: 'Codex Skin Studio 在 macOS 上以菜单栏（状态栏）应用运行，通过本机 CDP 回环向 Codex 注入 CSS 主题。整个过程不触碰 Codex 的 app.asar 与签名。',
        },
        { type: 'heading', text: '一、环境要求' },
        {
          type: 'list',
          items: [
            'macOS 11 (Big Sur) 或更高版本',
            'Codex 桌面端已安装',
            '（可选）Node.js 20+，用于自行构建最新版',
          ],
        },
        { type: 'heading', text: '二、安装步骤' },
        {
          type: 'steps',
          items: [
            '从官网下载最新的 macOS Release 包（.dmg 或 .zip）。',
            '若为 .zip 先解压；将 Codex Skin Studio 拖入「应用程序」文件夹。',
            '双击启动，菜单栏（屏幕右上角）会出现 Codex Skin Studio 图标。',
            '点击图标，从主题列表中选择喜欢的主题。',
            '切回 Codex，界面会立即应用所选主题。',
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          text: '若首次打开提示「无法打开，因为无法验证开发者」，请右键（或按住 Control 点击）应用选择「打开」，或在「系统设置 → 隐私与安全性」中点击「仍要打开」。这是 macOS Gatekeeper 对未上架 App Store 应用的正常提示。',
        },
        { type: 'heading', text: '三、切换与恢复' },
        {
          type: 'list',
          items: [
            '点击菜单栏图标即可随时切换主题，实时生效。',
            '点击「一键恢复」可立即回到 Codex 官方默认外观。',
            '退出菜单栏应用不会在磁盘留下任何修改。',
          ],
        },
        {
          type: 'callout',
          tone: 'safe',
          text: '所有主题效果均为运行时注入，停止工具后 Codex 立刻恢复原貌，安全无残留。',
        },
        { type: 'heading', text: '四、常见问题' },
        {
          type: 'list',
          items: [
            '菜单栏不显示图标：确认应用已启动；如被安全软件拦截，请允许运行。',
            '主题没生效：完全退出并重启 Codex 后再切换。',
            'Apple 芯片兼容：工具为通用二进制，M 系列芯片原生支持。',
          ],
        },
      ],
      faqs: [
        {
          q: '会修改 Codex 的官方文件吗？',
          a: '不会。CDP 注入是运行时操作，不修改任何磁盘文件，停止后完全恢复。',
        },
        {
          q: '提示「无法验证的开发者」怎么办？',
          a: '右键应用选择「打开」，或在「系统设置 → 隐私与安全性」中允许该应用即可，这是 Gatekeeper 的正常提示。',
        },
        {
          q: '支持 Apple 芯片（M 系列）吗？',
          a: '支持。工具为通用二进制，Intel 与 Apple 芯片均可原生运行。',
        },
        {
          q: '如何彻底卸载？',
          a: '将应用拖入废纸篓即可，工具不写入持久化改动，无残留。',
        },
      ],
      related: ['install-windows', 'is-it-safe', 'best-codex-themes'],
    },
    en: {
      metaTitle: 'How to Install Codex Skin Studio on macOS (Step-by-Step 2026)',
      metaDescription:
        'Install Codex Skin Studio on macOS: download .dmg/.zip, drag to Applications, launch from the menu bar, pick a theme. Includes the “unidentified developer” Gatekeeper fix.',
      summary: 'Full macOS install walkthrough, including Gatekeeper handling.',
      intro:
        'This guide covers macOS (both Intel and Apple Silicon). Codex Skin Studio skins Codex via local CDP injection — no official Codex files are modified, and everything reverts when you quit.',
      blocks: [
        {
          type: 'paragraph',
          text: 'On macOS, Codex Skin Studio runs as a menu-bar (status bar) app and injects CSS themes into Codex via local CDP loopback. It never touches Codex’s app.asar or signature.',
        },
        { type: 'heading', text: '1. Requirements' },
        {
          type: 'list',
          items: [
            'macOS 11 (Big Sur) or later',
            'Codex desktop app installed',
            '(Optional) Node.js 20+ to build the latest from source',
          ],
        },
        { type: 'heading', text: '2. Install steps' },
        {
          type: 'steps',
          items: [
            'Download the latest macOS Release (.dmg or .zip) from the official site.',
            'If .zip, unzip it; then drag Codex Skin Studio into the Applications folder.',
            'Double-click to launch; a Codex Skin Studio icon appears in the menu bar (top-right).',
            'Click the icon and choose a theme from the list.',
            'Switch to Codex — the UI applies the theme instantly.',
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          text: 'If macOS says the app is from an “unidentified developer”, right-click (or Control-click) the app and choose “Open”, or allow it in System Settings → Privacy & Security → “Open Anyway”. This is Gatekeeper’s normal prompt for apps outside the App Store.',
        },
        { type: 'heading', text: '3. Switch and restore' },
        {
          type: 'list',
          items: [
            'Click the menu-bar icon anytime to switch themes live.',
            'Choose “Restore” to return to Codex’s default look instantly.',
            'Quitting the app leaves no changes on disk.',
          ],
        },
        {
          type: 'callout',
          tone: 'safe',
          text: 'All theme effects are runtime injection. Stopping the tool restores Codex immediately — safe with zero residue.',
        },
        { type: 'heading', text: '4. Common issues' },
        {
          type: 'list',
          items: [
            'No menu-bar icon: confirm the app launched; allow it if blocked by security software.',
            'Theme not applying: fully quit and restart Codex, then switch.',
            'Apple Silicon: the tool is a universal binary and runs natively on M-series chips.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Does it modify Codex official files?',
          a: 'No. CDP injection is a runtime operation that does not modify any disk files and fully reverts when stopped.',
        },
        {
          q: 'It says “unidentified developer”. What do I do?',
          a: 'Right-click the app and choose “Open”, or allow it in System Settings → Privacy & Security. That’s Gatekeeper’s normal prompt.',
        },
        {
          q: 'Does it support Apple Silicon (M-series)?',
          a: 'Yes. The tool is a universal binary and runs natively on both Intel and Apple Silicon.',
        },
        {
          q: 'How do I uninstall completely?',
          a: 'Drag the app to Trash. It writes no persistent changes, so there is nothing left behind.',
        },
      ],
      related: ['install-windows', 'is-it-safe', 'best-codex-themes'],
    },
  },
  {
    slug: 'is-it-safe',
    category: 'trust',
    zh: {
      metaTitle: 'Codex Skin Studio 安全吗？CDP 注入风险全面解析',
      metaDescription:
        '详解 Codex Skin Studio 的安全性：不修改 app.asar、主题包仅含 CSS/图片、CDP 仅绑定 127.0.0.1 本机回环、开源 MIT 可审计。附自行验证方法。',
      summary: '从原理到验证，系统回答「这个换肤工具安全吗」。',
      intro:
        '结论先行：Codex Skin Studio 是安全的。它用本机 CDP 回环注入做运行时换肤，不修改 Codex 官方文件，主题包不含可执行代码，且整个项目以 MIT 协议开源、可审计。下面逐点说明。',
      blocks: [
        {
          type: 'callout',
          tone: 'safe',
          text: '一句话总结：不写磁盘、不藏代码、只绑本机、源码公开。关闭工具后 Codex 立刻恢复原貌。',
        },
        { type: 'heading', text: '它到底改了什么？' },
        {
          type: 'list',
          items: [
            '换肤是运行时（runtime）注入，只对当前运行的 Codex 窗口生效。',
            '不写入、不修改 app.asar 或任何官方签名文件。',
            '停止工具后，Codex 立即回到官方默认外观，磁盘零改动。',
          ],
        },
        { type: 'heading', text: '主题包里能藏恶意代码吗？' },
        {
          type: 'callout',
          tone: 'safe',
          text: '不能。主题包只允许 CSS 与图片，明确禁止 JavaScript 等可执行内容，从机制上杜绝了在主题中夹带脚本的可能。',
        },
        { type: 'heading', text: 'CDP 会不会被远程控制？' },
        {
          type: 'list',
          items: [
            'CDP 只绑定 127.0.0.1 本机回环地址，外部网络无法访问。',
            '不开放任何对外端口，不经过第三方服务器。',
            '注入过程完全在本机完成，无需联网即可工作。',
          ],
        },
        { type: 'heading', text: '会破坏 Codex 的代码签名吗？' },
        {
          type: 'paragraph',
          text: '不会。因为它根本不修改 Codex 的安装文件，所以不存在破坏签名或触发完整性校验失败的问题。当 Codex 自身更新、改变了界面 DOM 结构时，部分 CSS 选择器可能需要适配——这是界面层适配，不影响安全。',
        },
        { type: 'heading', text: '开源可审计' },
        {
          type: 'paragraph',
          text: '项目以 MIT 许可证开源，源码托管在 GitHub，任何人都可以阅读实现、核对 Release 哈希、自行编译。开源意味着安全假设可被独立验证，而不是靠口头承诺。',
        },
        { type: 'heading', text: '如何自己验证？' },
        {
          type: 'steps',
          items: [
            '到官方 GitHub 仓库查看源码与发布说明。',
            '比对下载的 Release 包哈希与仓库发布页公布的哈希是否一致。',
            '在系统活动监视器/任务管理器中确认工具没有向外发起异常网络连接。',
            '只从官网或官方仓库下载，警惕第三方打包版本。',
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          text: '安全的前提是从官方渠道获取。请勿从不明论坛或改包站点下载，以免引入被篡改的版本。',
        },
      ],
      faqs: [
        {
          q: 'Codex Skin Studio 安全吗？',
          a: '安全。它用本机 CDP 回环注入做运行时换肤，不修改官方文件，主题包仅含 CSS/图片，且开源可审计。',
        },
        {
          q: '它会窃取我的代码或数据吗？',
          a: '不会。CDP 只绑定 127.0.0.1 本机回环，不对外开放端口，也不经过第三方服务器。',
        },
        {
          q: '它是开源的吗？',
          a: '是，项目以 MIT 许可证开源，源码托管在 GitHub，可自行审查与编译。',
        },
        {
          q: 'Codex 更新后主题会失效吗？',
          a: '如果 Codex 更新改动了界面结构，部分 CSS 选择器可能需要适配，我们会跟进发布更新。',
        },
        {
          q: '如何彻底卸载、清理干净？',
          a: '直接退出/卸载工具即可，它不写入持久化改动，无残留需要清理。',
        },
      ],
      related: ['install-windows', 'install-macos', 'best-codex-themes'],
    },
    en: {
      metaTitle: 'Is Codex Skin Studio Safe? A Full Breakdown of CDP Injection Risks',
      metaDescription:
        'Is Codex Skin Studio safe? No app.asar modification, theme packages contain only CSS/images, CDP binds to 127.0.0.1 loopback only, open-source MIT and auditable. Plus how to verify it yourself.',
      summary: 'From mechanism to verification — a systematic answer to “is this skinning tool safe?”.',
      intro:
        'Bottom line up front: Codex Skin Studio is safe. It skins Codex at runtime via local CDP loopback injection, never modifies official Codex files, ships theme packages with no executable code, and is published open-source under the MIT license. Here is the breakdown.',
      blocks: [
        {
          type: 'callout',
          tone: 'safe',
          text: 'In one line: nothing written to disk, no hidden code, loopback-only binding, source公开 (source is public). Quit the tool and Codex returns to its original look instantly.',
        },
        { type: 'heading', text: 'What does it actually change?' },
        {
          type: 'list',
          items: [
            'Skinning is runtime injection — it only affects the currently running Codex window.',
            'It does not write to or modify app.asar or any signed official file.',
            'When you stop the tool, Codex reverts to its default look with zero disk changes.',
          ],
        },
        { type: 'heading', text: 'Can a theme package hide malicious code?' },
        {
          type: 'callout',
          tone: 'safe',
          text: 'No. Theme packages allow only CSS and images and explicitly forbid JavaScript or other executable content, which structurally prevents sneaking scripts into a theme.',
        },
        { type: 'heading', text: 'Can the CDP be controlled remotely?' },
        {
          type: 'list',
          items: [
            'CDP binds only to 127.0.0.1 (localhost loopback) — unreachable from outside networks.',
            'No outbound ports are opened and no third-party server is involved.',
            'Injection happens entirely on-device and works offline.',
          ],
        },
        { type: 'heading', text: 'Does it break Codex’s code signature?' },
        {
          type: 'paragraph',
          text: 'No, because it never modifies Codex’s installed files, so there is no signature break or integrity-check failure. When Codex itself updates and changes its DOM, some CSS selectors may need adapting — that is a UI-layer adjustment and has no security impact.',
        },
        { type: 'heading', text: 'Open source and auditable' },
        {
          type: 'paragraph',
          text: 'The project is open-source under the MIT license and hosted on GitHub. Anyone can read the implementation, verify Release hashes, and build from source. Open source means the security assumptions are independently checkable rather than taken on trust.',
        },
        { type: 'heading', text: 'How to verify it yourself' },
        {
          type: 'steps',
          items: [
            'Review the source and release notes on the official GitHub repo.',
            'Compare the hash of your downloaded Release against the hash published on the release page.',
            'Check Activity Monitor / Task Manager to confirm the tool makes no unexpected outbound connections.',
            'Download only from the official site or repo; avoid third-party repacks.',
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          text: 'Safety assumes you obtain it from official channels. Do not download from unknown forums or repack sites, which could ship a tampered build.',
        },
      ],
      faqs: [
        {
          q: 'Is Codex Skin Studio safe?',
          a: 'Yes. It skins Codex at runtime via local CDP loopback, modifies no official files, ships themes with CSS/images only, and is open-source and auditable.',
        },
        {
          q: 'Will it steal my code or data?',
          a: 'No. CDP binds only to 127.0.0.1 loopback, opens no external ports, and routes through no third-party server.',
        },
        {
          q: 'Is it open source?',
          a: 'Yes, it is MIT-licensed and hosted on GitHub, so you can review and compile it yourself.',
        },
        {
          q: 'Will themes break after a Codex update?',
          a: 'If a Codex update changes the UI structure, some CSS selectors may need adapting; we ship updates to track those changes.',
        },
        {
          q: 'How do I uninstall it cleanly?',
          a: 'Just quit/uninstall the tool. It writes no persistent changes, so there is nothing left to clean up.',
        },
      ],
      related: ['install-windows', 'install-macos', 'best-codex-themes'],
    },
  },
  {
    slug: 'best-codex-themes',
    category: 'collection',
    zh: {
      metaTitle: '2026 最佳 Codex 主题推荐：8 款精选合集（附风格分类）',
      metaDescription:
        '精选 8 款 Codex Skin Studio 主题：浪漫玫瑰、财神打工版、红白科幻、清透定制、灵感小宇宙、紫夜限定、青蓝虚拟歌姬、舞台黑金。按粉系/科幻/暗黑/清新分类，一键套用。',
      summary: '8 款官方精选主题按风格分类，含预览与一键套用入口。',
      intro:
        '不知道选哪款？这里按风格把 Codex Skin Studio 的 8 款精选主题整理成合集。每款都支持亮/暗模式（部分仅暗色），点击即可在主题画廊查看并一键套用。',
      blocks: [
        {
          type: 'paragraph',
          text: '挑选建议：喜欢温柔氛围选粉系，追求未来感选科幻，偏好沉稳选暗黑，想要清爽选清新。下面直接用主题卡片预览，点开任一主题可查看大图与套用步骤。',
        },
        { type: 'themeGrid' },
        {
          type: 'callout',
          tone: 'info',
          text: '想要独一无二的界面？看《如何自定义 Codex 主题》教程，上传自己的背景图、调配色并保存为专属预设（Pro 支持无限自定义主题）。',
        },
      ],
      faqs: [
        {
          q: '这些主题要收费吗？',
          a: '8 款精选主题全部包含在免费版中，无需付费即可使用。',
        },
        {
          q: '主题支持亮色和暗色吗？',
          a: '大部分主题同时支持亮/暗模式，少数（如舞台黑金、紫夜限定）为暗色专属，卡片上已标注适配模式。',
        },
        {
          q: '如何套用这些主题？',
          a: '安装 Codex Skin Studio 后，在主题列表或主题画廊中点击任意主题即可实时套用。',
        },
        {
          q: '能自己再做新主题吗？',
          a: '可以。免费版可用预设，Pro 版支持无限自定义主题与上传背景图。',
        },
      ],
      related: ['customize', 'install-windows', 'is-it-safe'],
    },
    en: {
      metaTitle: 'Best Codex Themes 2026: 8 Curated Picks (by Style)',
      metaDescription:
        '8 curated Codex Skin Studio themes: Romantic Rose, Fortune God, Red Sci-Fi, Clear Custom, Inspiration Cosmos, Purple Night, Virtual Diva, Stage Gold. Sorted by Pink/Sci-Fi/Dark/Fresh with one-click apply.',
      summary: 'All 8 official curated themes sorted by style, with preview and apply links.',
      intro:
        'Not sure which to pick? Here are Codex Skin Studio’s 8 curated themes grouped by style. Most support light/dark (some dark-only); open any theme to see the full preview and apply steps.',
      blocks: [
        {
          type: 'paragraph',
          text: 'Picking tip: go Pink for a soft vibe, Sci-Fi for a futuristic look, Dark for something moody, or Fresh for a clean feel. Preview them directly with the cards below — open any theme to view the large preview and apply steps.',
        },
        { type: 'themeGrid' },
        {
          type: 'callout',
          tone: 'info',
          text: 'Want a one-of-a-kind UI? See the “How to customize Codex themes” guide to upload your own background, tune colors, and save a personal preset (Pro unlocks unlimited custom themes).',
        },
      ],
      faqs: [
        {
          q: 'Are these themes paid?',
          a: 'All 8 curated themes are included in the free plan — no payment required.',
        },
        {
          q: 'Do themes support light and dark?',
          a: 'Most support both; a few (e.g., Stage Gold, Purple Night) are dark-only. The card shows the supported modes.',
        },
        {
          q: 'How do I apply a theme?',
          a: 'After installing Codex Skin Studio, click any theme in the theme list or gallery to apply it live.',
        },
        {
          q: 'Can I make my own theme?',
          a: 'Yes. The free plan uses presets; Pro unlocks unlimited custom themes and background uploads.',
        },
      ],
      related: ['customize', 'install-windows', 'is-it-safe'],
    },
  },
  {
    slug: 'customize',
    category: 'tutorial',
    zh: {
      metaTitle: '如何自定义 Codex 主题：背景图、配色与保存预设',
      metaDescription:
        '用 Codex Skin Studio 自定义 Codex 界面：上传 16:9 背景图、调整强调色、保存并切换本地主题预设。说明 Free 与 Pro 的功能差异。',
      summary: '上传背景图、调配色、存预设——自定义 Codex 界面的完整方法。',
      intro:
        '除了 8 款精选预设，Codex Skin Studio 还支持自定义：你可以上传自己的背景图、调整配色，并把当前搭配保存为本地主题预设，随时切换。',
      blocks: [
        { type: 'heading', text: '一、两种个性化方式' },
        {
          type: 'list',
          items: [
            '使用精选预设：开箱即用，免费版即可。',
            '完全自定义：上传背景图、调配色，保存为专属预设（Pro 支持无限自定义主题）。',
          ],
        },
        { type: 'heading', text: '二、上传背景图' },
        {
          type: 'steps',
          items: [
            '准备一张 16:9 的 jpg / png / webp 图片（横图观感最佳）。',
            '在工具中导入该图片作为背景。',
            '系统会自动适配焦点区域与安全区，避免文字被遮挡。',
            '实时预览效果，满意后即可套用。',
          ],
        },
        { type: 'heading', text: '三、调整配色' },
        {
          type: 'paragraph',
          text: '你可以修改界面的强调色（accent）与背景基调，让整体风格与背景图协调。调整后即可实时看到侧栏、按钮、建议卡等原生控件的变化。',
        },
        { type: 'heading', text: '四、保存与切换预设' },
        {
          type: 'steps',
          items: [
            '把当前背景 + 配色调整满意后，点击「保存为预设」。',
            '为预设起一个名字，它会进入本地主题列表。',
            '之后在主题列表中一键切换，无需重新设置。',
            '点击「一键恢复」可随时回到 Codex 官方默认外观。',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: '团队场景：Team 方案支持团队主题共享，把同一套品牌风格一键同步给多名成员。',
        },
        { type: 'heading', text: '五、Free 与 Pro 的差异' },
        {
          type: 'list',
          items: [
            'Free：8 款精选主题、亮/暗切换、本地保存预设。',
            'Pro：无限自定义主题、上传背景图、去除水印、优先支持。',
            'Team：在 Pro 基础上增加团队席位与共享主题。',
          ],
        },
      ],
      faqs: [
        {
          q: '支持自定义图片吗？',
          a: '支持。可导入 16:9 的 jpg/png/webp 作为背景，自动适配焦点与安全区。',
        },
        {
          q: '推荐用什么尺寸的背景图？',
          a: '推荐 16:9 横图，分辨率不低于 1920×1080，观感最稳。',
        },
        {
          q: 'Pro 和 Free 在自定义上有什么区别？',
          a: 'Free 可用精选预设；Pro 支持无限自定义主题与上传背景图，并去除水印。',
        },
        {
          q: '保存的预设存在哪里？',
          a: '保存在本机，仅对当前设备生效，可随时切换或恢复默认。',
        },
      ],
      related: ['best-codex-themes', 'install-windows', 'is-it-safe'],
    },
    en: {
      metaTitle: 'How to Customize Codex Themes: Backgrounds, Colors & Saved Presets',
      metaDescription:
        'Customize the Codex UI with Codex Skin Studio: upload a 16:9 background, tune accent colors, and save & switch local theme presets. Free vs Pro feature differences explained.',
      summary: 'Upload backgrounds, tune colors, save presets — the full customization method.',
      intro:
        'Beyond the 8 curated presets, Codex Skin Studio lets you customize: upload your own background, tune colors, and save the combination as a local theme preset you can switch anytime.',
      blocks: [
        { type: 'heading', text: '1. Two ways to personalize' },
        {
          type: 'list',
          items: [
            'Use a curated preset: works out of the box, available on the free plan.',
            'Fully customize: upload a background, tune colors, and save a personal preset (Pro unlocks unlimited custom themes).',
          ],
        },
        { type: 'heading', text: '2. Upload a background' },
        {
          type: 'steps',
          items: [
            'Prepare a 16:9 jpg / png / webp image (landscape looks best).',
            'Import it as the background in the tool.',
            'It auto-adapts focus and safe areas so text stays readable.',
            'Preview live and apply when satisfied.',
          ],
        },
        { type: 'heading', text: '3. Tune colors' },
        {
          type: 'paragraph',
          text: 'Adjust the interface accent color and background base so the whole style harmonizes with your image. Changes show live on native controls like the sidebar, buttons, and suggestion cards.',
        },
        { type: 'heading', text: '4. Save and switch presets' },
        {
          type: 'steps',
          items: [
            'Once happy with background + colors, click “Save as preset”.',
            'Name it; it joins your local theme list.',
            'Switch from the theme list anytime without reconfiguring.',
            'Click “Restore” to return to Codex’s default look whenever you like.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Team scenario: the Team plan supports shared team themes, syncing one branded style to multiple members in one click.',
        },
        { type: 'heading', text: '5. Free vs Pro' },
        {
          type: 'list',
          items: [
            'Free: 8 curated themes, light/dark switching, local preset saving.',
            'Pro: unlimited custom themes, background uploads, no watermark, priority support.',
            'Team: adds team seats and shared themes on top of Pro.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can I use a custom image?',
          a: 'Yes. Import a 16:9 jpg/png/webp as the background with automatic focus and safe-area adaptation.',
        },
        {
          q: 'What background size do you recommend?',
          a: 'A 16:9 landscape image at 1920×1080 or higher gives the most stable look.',
        },
        {
          q: 'How do Pro and Free differ for customization?',
          a: 'Free uses curated presets; Pro unlocks unlimited custom themes and background uploads and removes the watermark.',
        },
        {
          q: 'Where are saved presets stored?',
          a: 'Locally on your device only; switch or restore defaults anytime.',
        },
      ],
      related: ['best-codex-themes', 'install-windows', 'is-it-safe'],
    },
  },
];

export const guideSlugs: string[] = guides.map((g) => g.slug);

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuideContent(slug: string, locale: Locale): GuideContent | undefined {
  const g = getGuide(slug);
  if (!g) return undefined;
  return locale === 'en' ? g.en : g.zh;
}
