export const zh = {
  nav: {
    home: '首页',
    gallery: '主题画廊',
    pricing: '定价',
    docs: '使用教程',
    github: 'GitHub',
  },
  home: {
    heroTitle: 'Codex Skin Studio',
    heroSubtitle: '给 Codex 换一张会呼吸的脸',
    heroDescription: '基于 CDP 注入技术的桌面端换肤工具，不修改官方文件，一键切换主题。',
    ctaBrowse: '浏览主题',
    ctaQuickstart: '快速开始',
    featuresTitle: '核心功能',
    features: {
      cdp: {
        title: 'CDP 注入',
        desc: '本机回环注入，不碰官方文件',
      },
      image: {
        title: '可换图',
        desc: '自定义背景图，自适应安全区',
      },
      palette: {
        title: '可存主题',
        desc: '保存/切换本地主题预设',
      },
      restore: {
        title: '可恢复',
        desc: '一键还原官方外观',
      },
    },
    galleryPreviewTitle: '精选主题',
    galleryPreviewViewAll: '查看全部',
  },
  gallery: {
    title: '主题画廊',
    description: '浏览所有精选预设主题，找到属于你的风格',
    filterAll: '全部',
    filterPink: '粉系',
    filterSciFi: '科幻',
    filterDark: '暗黑',
    filterFresh: '清新',
    modes: '亮色+暗色',
    version: '版本',
    backToGallery: '← 返回画廊',
  },
  detail: {
    usage: '使用方法',
    step1: '下载并安装 Codex Skin Studio',
    step2: '启动工具，从主题列表中选择本主题',
    step3: '享受全新的 Codex 界面',
    downloadTool: '下载工具',
    viewGithub: '查看 GitHub',
    style: '风格',
    modes: '适配模式',
    version: '版本',
    author: '作者',
  },
  docs: {
    title: '使用教程',
    description: '按照以下步骤安装和使用 Codex Skin Studio',
    macOS: 'macOS',
    windows: 'Windows',
    macOSTitle: 'macOS 安装指南',
    windowsTitle: 'Windows 安装指南',
    macOSSteps: [
      '下载最新的 Release 包（.dmg 或 .zip）',
      '解压后将 Codex Skin Studio 拖入应用程序文件夹',
      '双击启动，菜单栏将出现 Codex Skin Studio 图标',
      '点击图标，从主题列表中选择喜欢的主题',
      'Codex 界面将立即应用主题效果',
    ],
    windowsSteps: [
      '下载最新的 Release 包（.zip）',
      '解压到任意目录（推荐 C:\\\\Program Files\\\\CodexSkinStudio）',
      '右键以管理员身份运行 install-codex-skin-studio.ps1',
      '系统托盘将出现 Codex Skin Studio 图标',
      '右键图标，从主题列表中选择喜欢的主题',
    ],
    faqTitle: '常见问题',
    faqs: [
      {
        q: '会修改 Codex 的官方文件吗？',
        a: '不会。CDP 注入是运行时操作，不修改任何磁盘文件，停止后完全恢复。',
      },
      {
        q: 'Codex 更新后主题会失效吗？',
        a: '如果 Codex 更新改变了 DOM 结构，部分 CSS 选择器可能需要更新。我们会跟进适配。',
      },
      {
        q: '支持自定义图片吗？',
        a: '支持。可以导入 16:9 的 jpg/png/webp 图片作为背景，自动适配焦点和安全区。',
      },
      {
        q: '安全吗？会不会有恶意代码？',
        a: '主题包只允许 CSS 和图片，禁止 JavaScript。CDP 只绑定 127.0.0.1 本机回环，外部无法访问。',
      },
      {
        q: 'Windows 上需要什么环境？',
        a: '需要 Node.js 20+ 和 PowerShell 5.1+（Windows 10/11 自带）。',
      },
    ],
  },
  pricing: {
    title: '定价',
    subtitle: '选择适合你的方案，随时升级',
    trust: '所有方案含 30 天退款',
    recommended: '推荐',
    checkoutSoon: '结账功能即将上线（Stripe 集成中），已为你保留席位',
    checkoutError: '结账服务异常，请稍后重试',
    plans: [
      {
        name: 'Free',
        price: '¥0',
        period: '永久免费',
        ctaLabel: '开始使用',
        free: true,
        highlighted: false,
        features: [
          '8 个精选主题',
          '亮色 / 暗色切换',
          '本地主题保存',
          '社区支持',
        ],
      },
      {
        name: 'Pro',
        price: '¥39',
        period: '/ 月',
        ctaLabel: '升级 Pro',
        free: false,
        highlighted: true,
        features: [
          'Free 全部功能',
          '无限自定义主题',
          '优先邮件支持',
          '早期功能体验',
          '去除水印',
        ],
      },
      {
        name: 'Team',
        price: '¥99',
        period: '/ 月',
        ctaLabel: '升级 Team',
        free: false,
        highlighted: false,
        features: [
          'Pro 全部功能',
          '5 个团队席位',
          '团队主题共享',
          '专属客服',
        ],
      },
    ],
  },
  error: {
    notFoundTitle: '404',
    notFoundDesc: '页面不存在',
    backHome: '返回首页',
  },
  auth: {
    signIn: '使用 Google 登录',
    notConfigured: '登录功能待配置（需在 Firebase 控制台开启 Google 登录）',
    loginFailed: '登录失败，请重试',
    accountMenu: '账户菜单',
    myThemes: '我的主题',
    signOut: '退出登录',
  },
  footer: {
    copyright: 'Codex Skin Studio. 开源项目，MIT 许可证.',
    madeWith: '用 CDP 注入技术制作',
  },
  theme: {
    toggleToLight: '切换到亮色模式',
    toggleToDark: '切换到暗色模式',
  },
  lang: {
    switch: 'EN',
  },
} as const;

// 把 zh 的字面量类型递归拓宽为 string（保留只读结构），让 en 等其它语言包可填任意文案
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<Widen<U>>
        : T extends object
          ? { readonly [K in keyof T]: Widen<T[K]> }
          : T;

export type Dict = Widen<typeof zh>;
