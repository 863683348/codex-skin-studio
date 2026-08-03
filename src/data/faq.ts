// FAQ 页面内容——中英双语
export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: Record<'zh' | 'en', FaqItem[]> = {
  zh: [
    {
      q: '它会修改 Codex 的官方文件吗？',
      a: '不会。CDP 注入是运行时操作，不修改任何磁盘文件，停止或恢复后完全还原官方外观。',
    },
    {
      q: '安装需要什么条件？',
      a: 'Windows 需已安装 Microsoft Store 版 Codex 桌面客户端（OpenAI.Codex）并登录过一次；macOS 需已安装 Codex 桌面端。',
    },
    {
      q: 'PRO 主题如何解锁？',
      a: '订阅后我们会通过邮件发送 License Key；在托盘菜单选择「主题库 → 激活 Pro…」输入即可解锁全部 10 款 PRO 主题。',
    },
    {
      q: '支持退款吗？',
      a: '支持。购买后 30 天内可邮件申请退款（ahmedlzany423@gmail.com），退款后 License Key 同时作废。',
    },
    {
      q: 'Codex 更新后主题会失效吗？',
      a: '如果 Codex 更新改变了 DOM 结构，部分 CSS 选择器可能需要适配更新，我们会跟进修复。',
    },
    {
      q: '能自定义背景图吗？',
      a: '可以。托盘菜单「更换背景图」支持导入 16:9 的 jpg/png/webp 图片，自动适配焦点与安全区。',
    },
    {
      q: '安全吗？会不会有恶意代码？',
      a: '主题包只允许 CSS 和图片，禁止 JavaScript。CDP 只绑定 127.0.0.1 本机回环，外部无法访问调试端口。',
    },
    {
      q: 'License Key 能用在多台设备吗？',
      a: '可以。Key 绑定邮箱不绑定设备，你自己的多台设备都能激活；但禁止共享给他人。',
    },
  ],
  en: [
    {
      q: 'Does it modify official Codex files?',
      a: 'No. CDP injection is a runtime operation that touches no files on disk. Stopping or restoring fully reverts to the official look.',
    },
    {
      q: 'What are the requirements?',
      a: 'Windows: the Microsoft Store version of Codex (OpenAI.Codex) installed and signed in once. macOS: the Codex desktop app installed.',
    },
    {
      q: 'How do I unlock PRO themes?',
      a: 'After subscribing, a License Key is emailed to you. Open the tray menu, choose "Theme Library" > "Activate Pro...", and paste the key to unlock all 10 PRO themes.',
    },
    {
      q: 'Is there a refund policy?',
      a: 'Yes. Email us within 30 days of purchase (ahmedlzany423@gmail.com) for a refund; the License Key will be revoked.',
    },
    {
      q: 'Will themes break after Codex updates?',
      a: 'If a Codex update changes the DOM structure, some CSS selectors may need adapting. We track and fix these.',
    },
    {
      q: 'Can I use my own wallpaper?',
      a: 'Yes. Use "Change Background" in the tray menu to import a 16:9 jpg/png/webp image with automatic focus and safe-area handling.',
    },
    {
      q: 'Is it safe? Malicious code?',
      a: 'Theme packages allow CSS and images only — no JavaScript. CDP binds only to 127.0.0.1 loopback, unreachable from outside.',
    },
    {
      q: 'Can I use my key on multiple devices?',
      a: 'Yes. Keys are tied to your email, not a device, so you can activate on all your own machines. Sharing with others is prohibited.',
    },
  ],
};
