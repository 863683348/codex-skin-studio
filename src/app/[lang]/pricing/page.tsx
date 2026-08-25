import type { Metadata } from 'next';
import { PricingView } from '@/components/views/PricingView';
import { getDict } from '@/lib/i18n';
import { SITE_URL, localeAlternates } from '@/lib/seo';
import type { Locale } from '@/lib/i18n/config';

const META: Record<'zh' | 'en', { title: string; description: string }> = {
  zh: {
    title: 'Codex Skin Studio 定价 — Free / Pro / Team 方案',
    description:
      'Codex Skin Studio 定价：Free 内置 8 款主题；Pro $5.99/月 解锁无限自定义；Team $12.99/月 5 席位。30 天退款保证，随时升级。',
  },
  en: {
    title: 'Codex Skin Studio Pricing — Free, Pro & Team Plans (From $5.99/mo)',
    description:
      'Codex Skin Studio pricing: Free with 8 curated Codex themes, Pro at $5.99/mo for unlimited custom themes, Team at $12.99/mo for 5 seats. 30-day refund, upgrade anytime.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return { ...META[locale], alternates: localeAlternates(`/${locale}/pricing`) };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const dict = getDict(locale);

  // 价格结构化数据：SoftwareApplication + AggregateOffer，让 SERP 展示价格
  const plans = dict.pricing.plans.map((p) => ({
    '@type': 'Offer',
    name: p.name,
    price: p.free ? '0' : p.price.replace(/[^0-9.]/g, '') || '0',
    priceCurrency: locale === 'zh' ? 'CNY' : 'USD',
  }));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Codex Skin Studio',
    operatingSystem: 'macOS, Windows',
    applicationCategory: 'DesktopApplication',
    url: `${SITE_URL}/${locale}/pricing`,
    description: META[locale].description,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: locale === 'zh' ? 'CNY' : 'USD',
      lowPrice: '0',
      highPrice: plans.find((p) => p.name === 'Team')?.price ?? '12.99',
      offerCount: plans.length,
      offers: plans,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codex Skin Studio',
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingView locale={locale} />
    </>
  );
}
