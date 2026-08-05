// 法律页面内容（隐私政策 / 服务条款）——中英双语
export type LegalSection = { title: string; body: string[] };
export type LegalDoc = { updated: string; sections: LegalSection[] };

export const PRIVACY: Record<'zh' | 'en', LegalDoc> = {
  zh: {
    updated: '2026-08-03',
    sections: [
      {
        title: '概述',
        body: [
          'Codex Skin Studio 是一款本地桌面换肤工具，通过 Chrome DevTools Protocol（CDP）在本机向 Codex 桌面客户端注入主题，不修改 Codex 的官方文件，停止后可一键恢复官方外观。',
          '本政策说明我们收集什么、不收集什么，以及你的数据如何被处理。',
        ],
      },
      {
        title: '我们收集的信息',
        body: [
          '· 购买信息：你通过 PayPal 订阅时，我们获得你的 PayPal 邮箱地址与订阅状态（用于生成和发放 License Key）。',
          '· 登录信息：如果你使用 Google 登录，我们获得你的 Google 邮箱（用于关联订阅记录）。',
          '· 订阅记录：存于 Firebase Firestore（方案、状态、有效期、License Key），仅你本人可见。',
        ],
      },
      {
        title: '我们不收集的信息',
        body: [
          '· Codex 对话内容：CDP 注入只做样式层面的运行时操作，我们不读取、不传输任何对话内容。',
          '· 本地文件：主题图片与 CSS 仅保存在你的本机（%LOCALAPPDATA%\\CodexSkinStudio），不会上传。',
          '· 键盘输入 / 操作日志 / 遥测：我们没有键盘记录、会话录制或行为遥测。',
        ],
      },
      {
        title: '本地数据处理',
        body: [
          '主题文件（背景图、CSS、主题配置）与 License Key 均存储在你的本机。卸载软件或手动删除目录即可完全清除。',
          'CDP 调试端口只绑定 127.0.0.1 本机回环地址，外部网络无法访问。',
        ],
      },
      {
        title: '第三方服务',
        body: [
          '· PayPal：处理订阅支付，适用 PayPal 隐私政策。',
          '· Firebase：Google 登录与订阅记录存储。',
          '· Vercel：网站托管，可能记录标准访问日志（IP、UA、时间），用于安全与性能。',
        ],
      },
      {
        title: '第三方广告（Google AdSense）',
        body: [
          '本网站使用 Google AdSense 展示第三方广告。作为广告供应商，Google 会使用 Cookie（包括 DART Cookie）根据你在本站及互联网上其他网站的访问记录，向你投放与其兴趣相关的广告。',
          'Google 的 DART Cookie 使其能够基于你的浏览行为投放广告。你可以通过访问 Google 广告与内容网络隐私政策（https://policies.google.com/technologies/ads）选择退出 DART Cookie。',
          '你可以随时通过 Google 广告设置（https://www.google.com/settings/ads）或 Your Online Choices（http://www.aboutads.info/choices）管理并退出个性化广告。',
          '关于 Google 如何收集与使用数据，请参阅 Google 的隐私与条款（https://policies.google.com/technologies/ads）。',
        ],
      },
      {
        title: 'Cookie 与分析',
        body: [
          '除上方「第三方广告」所述的广告 Cookie 外，本网站不设置其他追踪类 Cookie，也不使用额外的第三方分析追踪。如未来引入分析服务，会在此更新说明。',
        ],
      },
      {
        title: '数据保留与删除',
        body: [
          '订阅记录保留至你的订阅有效期内及合理售后期后；你可随时通过下方邮箱联系我们删除个人数据。',
          '退款或取消订阅后，License Key 仍可用于已购期间，但不再续期。',
        ],
      },
      {
        title: '联系我们',
        body: ['任何隐私相关问题，请邮件：ahmedlzany423@gmail.com。'],
      },
    ],
  },
  en: {
    updated: '2026-08-03',
    sections: [
      {
        title: 'Overview',
        body: [
          'Codex Skin Studio is a local desktop theming tool. It injects themes into the Codex desktop client at runtime via Chrome DevTools Protocol (CDP), without modifying any official Codex files, and can restore the official look with one click.',
          'This policy explains what we collect, what we do not collect, and how your data is handled.',
        ],
      },
      {
        title: 'Information we collect',
        body: [
          '· Purchase info: when you subscribe via PayPal, we receive your PayPal email and subscription status (to issue your License Key).',
          '· Sign-in info: if you sign in with Google, we receive your Google email (to link your subscription).',
          '· Subscription record: stored in Firebase Firestore (plan, status, expiry, License Key), visible only to you.',
        ],
      },
      {
        title: 'Information we do NOT collect',
        body: [
          '· Codex conversations: CDP injection only performs style-level runtime operations. We never read or transmit conversation content.',
          '· Local files: theme images and CSS stay on your machine (%LOCALAPPDATA%\\CodexSkinStudio). Nothing is uploaded.',
          '· Keystrokes / activity logs / telemetry: none.',
        ],
      },
      {
        title: 'Local data handling',
        body: [
          'Theme files and your License Key are stored locally. Uninstalling or deleting the folder fully removes them.',
          'The CDP debug port binds only to 127.0.0.1 loopback; it is not reachable from outside.',
        ],
      },
      {
        title: 'Third-party services',
        body: [
          '· PayPal: processes subscription payments, subject to PayPal\u2019s privacy policy.',
          '· Firebase: Google sign-in and subscription storage.',
          '· Vercel: hosts this site and may keep standard access logs (IP, UA, time) for security and performance.',
        ],
      },
      {
        title: 'Advertising (Google AdSense)',
        body: [
          'This website displays third-party advertisements served by Google AdSense. As a third-party vendor, Google uses cookies (including the DART cookie) to serve ads to you based on your visits to this and other websites on the Internet.',
          'Google’s use of the DART cookie enables it to serve ads based on your browsing behavior. You may opt out of the DART cookie by visiting Google’s Advertising Privacy & Terms (https://policies.google.com/technologies/ads).',
          'You can manage or opt out of personalized advertising at any time via Google Ads Settings (https://www.google.com/settings/ads) or Your Online Choices (http://www.aboutads.info/choices).',
          'For more information about how Google collects and uses data, see Google’s Privacy & Terms (https://policies.google.com/technologies/ads).',
        ],
      },
      {
        title: 'Cookies & analytics',
        body: [
          'Except for the advertising cookies described in the "Advertising" section above, this site sets no other tracking cookies and uses no additional third-party analytics tracking. If analytics are introduced later, this page will be updated.',
        ],
      },
      {
        title: 'Retention & deletion',
        body: [
          'Subscription records are kept for the active period plus a reasonable post-sale window. You may request deletion anytime by emailing us.',
          'After refund or cancellation, your License Key remains usable for the paid period but will not renew.',
        ],
      },
      {
        title: 'Contact',
        body: ['For any privacy question, email: ahmedlzany423@gmail.com.'],
      },
    ],
  },
};

export const TERMS: Record<'zh' | 'en', LegalDoc> = {
  zh: {
    updated: '2026-08-03',
    sections: [
      {
        title: '软件许可',
        body: [
          'Codex Skin Studio 以「免费基础版 + Pro/Team 订阅」方式提供。免费版授予个人使用许可；订阅后解锁全部 PRO 主题与功能。',
          '软件通过 CDP 在本机向 Codex 注入主题，不修改 Codex 官方文件，不属于对 Codex 的破解或绕过。',
        ],
      },
      {
        title: '订阅与付款',
        body: [
          '订阅通过 PayPal 按月自动续费，直至你取消。取消可在 PayPal 账户内操作，当期已付费用不退还。',
          '我们提供 30 天退款保证：购买后 30 天内可邮件申请退款，License Key 将同时作废。',
        ],
      },
      {
        title: 'License Key',
        body: [
          'License Key 仅限购买者本人使用，可用于其本人多台设备的激活。',
          '禁止转售、批量共享或公开传播 License Key；违反者将被吊销授权且不退款。',
        ],
      },
      {
        title: '禁止行为',
        body: [
          '禁止对软件进行逆向工程（法律允许的范围除外）、破解授权验证、用于任何违法或恶意目的。',
          '主题包仅允许 CSS 与图片内容；任何人不得试图注入脚本或恶意内容。',
        ],
      },
      {
        title: '主题素材版权',
        body: [
          '部分主题使用 AI 生成或第三方素材的动漫风格插画作为背景图，相关著作权归各自权利人。',
          '涉及真实人物形象的主题仅供个人学习使用，不得用于商业传播。',
        ],
      },
      {
        title: '免责声明',
        body: [
          '软件按「现状」提供，不提供任何明示或默示担保。因使用本软件导致的任何直接或间接损失，我们不承担责任。',
          'Codex 更新可能改变界面结构，部分主题需等待适配更新，不构成违约。',
        ],
      },
      {
        title: '责任限制',
        body: [
          '在任何情况下，我们对你的累计责任不超过你最近 12 个月支付的订阅费用总额。',
        ],
      },
      {
        title: '适用法律',
        body: [
          '本条款的解释与争议解决适用运营者所在地法律。争议无法协商解决时，提交运营者所在地有管辖权的法院。',
        ],
      },
      {
        title: '联系我们',
        body: ['条款相关问题：ahmedlzany423@gmail.com。'],
      },
    ],
  },
  en: {
    updated: '2026-08-03',
    sections: [
      {
        title: 'Software license',
        body: [
          'Codex Skin Studio is offered as a free base version plus Pro/Team subscriptions. The free tier grants a personal-use license; subscribing unlocks all PRO themes and features.',
          'The software injects themes into Codex locally via CDP without modifying official Codex files. It is not a crack or bypass of Codex.',
        ],
      },
      {
        title: 'Subscriptions & payments',
        body: [
          'Subscriptions renew monthly via PayPal until cancelled. You can cancel in your PayPal account; the current paid period is non-refundable.',
          'We offer a 30-day refund guarantee: email us within 30 days of purchase for a refund. Your License Key will be revoked.',
        ],
      },
      {
        title: 'License Key',
        body: [
          'A License Key is for the purchaser only and may be activated on multiple devices you own.',
          'Reselling, sharing in bulk, or publicly distributing keys is prohibited. Violators will have their license revoked without refund.',
        ],
      },
      {
        title: 'Prohibited conduct',
        body: [
          'No reverse engineering (except as permitted by law), no bypassing license verification, and no use for unlawful or malicious purposes.',
          'Theme packages allow CSS and images only; injecting scripts or malicious content is prohibited.',
        ],
      },
      {
        title: 'Theme artwork',
        body: [
          'Some themes use AI-generated or third-party anime-style illustrations as wallpapers; copyright belongs to their respective owners.',
          'Themes featuring real individuals are for personal study only and must not be used for commercial distribution.',
        ],
      },
      {
        title: 'Disclaimer',
        body: [
          'The software is provided "as is" without warranties of any kind. We are not liable for any direct or indirect damage arising from its use.',
          'Codex updates may change UI structure; some themes may need adaptation updates. This does not constitute a breach.',
        ],
      },
      {
        title: 'Limitation of liability',
        body: [
          'In no event shall our aggregate liability exceed the subscription fees you paid in the last 12 months.',
        ],
      },
      {
        title: 'Governing law',
        body: [
          'These terms are governed by the laws of the operator\u2019s jurisdiction. Disputes not resolved by negotiation shall be submitted to the competent court of that jurisdiction.',
        ],
      },
      {
        title: 'Contact',
        body: ['For terms-related questions: ahmedlzany423@gmail.com.'],
      },
    ],
  },
};
