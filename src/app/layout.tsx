import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Codex Skin Studio - Codex 桌面端换肤 | CDP 注入主题工具',
    template: '%s | Codex Skin Studio',
  },
  description:
    'Codex 桌面端换肤工具，基于本机 CDP 注入技术，不修改 app.asar 与官方文件。支持 macOS 和 Windows，一键切换 8+ 预设主题，自定义背景与配色。开源免费，真·可交互皮肤，侧栏/建议卡/输入框原生控件保持可用。',
  keywords: [
    'Codex换肤', 'Codex桌面端美化', 'Codex主题', 'Codex皮肤', 'CDP注入',
    'Codex Dream Skin', 'Codex自定义背景', '开源换肤工具', 'Codex美化',
    '本机CDP回环注入', '不修改app.asar', 'Codex一键恢复', 'Codex theme',
    'Codex desktop customization', 'CDP injection skinning',
    'Codex themes gallery', 'Codex UI customization',
  ],
  metadataBase: new URL('https://codex-skin-studio.shop'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Codex Skin Studio - Codex 桌面端换肤工具 | CDP 注入主题库',
    description: '给 Codex 桌面端换一张会呼吸的脸。基于本机 CDP 回环注入技术，不修改 app.asar，侧栏/建议卡全交互可用。8+ 主题风格一键切换：粉系、科幻、黑金、初音未来、紫夜限定。支持 macOS & Windows，开源免费，一键恢复。',
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Codex Skin Studio',
    url: 'https://codex-skin-studio.shop',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0KJXS00XK1"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0KJXS00XK1');`}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Codex Skin Studio',
              url: 'https://codex-skin-studio.shop',
              description:
                'Codex 桌面端换肤工具，基于本机 CDP 回环注入，不修改 app.asar。支持 macOS/Windows，一键切换 8+ 主题，侧栏/建议卡等原生控件保留交互。开源 MIT 许可证。',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
