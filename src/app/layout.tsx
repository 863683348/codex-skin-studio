import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Codex Skin Studio - 给 Codex 桌面端换一张会呼吸的脸',
    template: '%s | Codex Skin Studio',
  },
  description:
    'Codex 桌面端换肤工具，基于 CDP 注入技术，不修改官方文件。支持 macOS 和 Windows，一键切换主题，轻松自定义 Codex 界面风格。开源免费，真·可交互皮肤。',
  keywords: [
    'Codex换肤', 'Codex桌面端美化', 'Codex主题', 'CDP注入',
    'Codex skin', 'Codex desktop theme', 'CDP injection',
    'Codex UI customization', '开源换肤工具',
  ],
  metadataBase: new URL('https://codex-skin-studio.shop'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Codex Skin Studio - 给 Codex 桌面端换一张会呼吸的脸',
    description: '基于 CDP 注入技术的桌面端换肤工具，不修改官方文件，一键切换主题。支持 macOS & Windows 双平台，8+ 预设主题，开源自用。',
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Codex Skin Studio',
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
                'Codex 桌面端换肤工具，基于 CDP 注入，不修改官方文件。支持 macOS 和 Windows，一键切换主题，开源免费。',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
