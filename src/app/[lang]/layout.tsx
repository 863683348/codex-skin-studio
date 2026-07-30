import '../globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { SiteChrome } from '@/components/SiteChrome';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

const GA_ID = 'G-0KJXS00XK1';
const GSC_CODE = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? '';
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? '';

export function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const dict = getDict(locale);
  return {
    title: {
      default: 'Codex Skin Studio - Codex 桌面端换肤 | CDP 注入主题工具',
      template: '%s | Codex Skin Studio',
    },
    description: dict.home.heroDescription,
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
      description: dict.home.heroDescription,
      type: 'website',
      siteName: 'Codex Skin Studio',
      url: 'https://codex-skin-studio.shop',
      locale: locale === 'en' ? 'en_US' : 'zh_CN',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return (
    <html lang={locale} data-theme="dark" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        {GSC_CODE ? (
          <meta name="google-site-verification" content={GSC_CODE} />
        ) : null}
        {ADSENSE_CLIENT ? (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        ) : null}
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
                'Codex 桌面端换肤工具，基于本机 CDP 注入，不修改 app.asar。支持 macOS/Windows，一键切换 8+ 主题，侧栏/建议卡等原生控件保留交互。开源 MIT 许可证。',
            }),
          }}
        />
        <SiteChrome locale={locale}>{children}</SiteChrome>
      </body>
    </html>
  );
}
