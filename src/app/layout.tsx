import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Codex Skin Studio',
    template: '%s | Codex Skin Studio',
  },
  description:
    '基于 CDP 注入技术的桌面端换肤工具，不修改官方文件，一键切换主题。',
  metadataBase: new URL('https://codex-skin-studio.com'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Codex Skin Studio',
    description: '给 Codex 换一张会呼吸的脸。基于 CDP 注入的桌面端换肤工具。',
    type: 'website',
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
              url: 'https://codex-skin-studio.com',
              description:
                '基于 CDP 注入技术的桌面端换肤工具，不修改官方文件，一键切换主题。',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
