import Link from 'next/link';
import { Zap, Image, Palette, RotateCcw, type LucideIcon } from 'lucide-react';
import { ThemeCard } from '@/components/ThemeCard';
import { AdDisplay } from '@/components/AdDisplay';
import { getDict } from '@/lib/i18n';
import { themes } from '@/data/themes';
import type { Locale } from '@/lib/i18n/config';

type FeatureKey = 'cdp' | 'image' | 'palette' | 'restore';

const featureIcons: Record<FeatureKey, LucideIcon> = {
  cdp: Zap,
  image: Image,
  palette: Palette,
  restore: RotateCcw,
};

export function HomeView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const features: { key: FeatureKey; title: string; desc: string }[] = [
    { key: 'cdp', ...dict.home.features.cdp },
    { key: 'image', ...dict.home.features.image },
    { key: 'palette', ...dict.home.features.palette },
    { key: 'restore', ...dict.home.features.restore },
  ];
  const featured = themes.slice(0, 4);

  const priceCurrency = locale === 'zh' ? 'CNY' : 'USD';
  const offerList = dict.pricing.plans.map((p) => ({
    '@type': 'Offer',
    name: p.name,
    price: p.free ? '0' : p.price.replace(/[^0-9.]/g, '') || '0',
    priceCurrency,
  }));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Codex Skin Studio',
    operatingSystem: 'macOS, Windows',
    applicationCategory: 'DesktopApplication',
    url: 'https://codex-skin-studio.shop',
    description: 'Codex 桌面端换肤工具，基于 CDP 注入，不修改官方文件。支持 macOS 和 Windows。',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency,
      lowPrice: '0',
      offerCount: offerList.length,
      offers: offerList,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codex Skin Studio',
      url: 'https://codex-skin-studio.shop',
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto flex max-w-container flex-col items-center px-4 py-20 text-center md:px-8 md:py-28">
        <h1 className="text-display font-semibold tracking-tight text-text-primary">
          {dict.home.heroTitle}
        </h1>
        <p className="mt-4 text-h3 font-normal text-text-secondary">
          {dict.home.heroSubtitle}
        </p>
        <p className="mt-4 max-w-2xl text-body text-text-secondary">
          {dict.home.heroDescription}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
          <Link
            href={`/${locale}/gallery`}
            className="w-full rounded-md bg-accent px-6 py-3 text-body font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            {dict.home.ctaBrowse}
          </Link>
          <Link
            href={`/${locale}/docs`}
            className="w-full rounded-md border border-border px-6 py-3 text-body font-medium text-text-primary transition-colors hover:border-border-hover sm:w-auto"
          >
            {dict.home.ctaQuickstart}
          </Link>
        </div>
        <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.slice(0, 2).map((t) => (
            <div
              key={t.id}
              className="aspect-video overflow-hidden rounded-lg border border-border"
              style={{ background: t.gradient }}
            />
          ))}
        </div>
      </section>

      <AdDisplay format="horizontal" className="py-6" />

      <section className="mx-auto max-w-container px-4 py-20 md:px-8">
        <h2 className="text-center text-h1 text-text-primary">
          {dict.home.featuresTitle}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = featureIcons[f.key];
            return (
              <div
                key={f.key}
                className="rounded-lg border border-border bg-bg-secondary p-6"
              >
                <Icon size={24} className="text-accent" />
                <h3 className="mt-4 text-h3 text-text-primary">{f.title}</h3>
                <p className="mt-2 text-small text-text-secondary">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <AdDisplay format="horizontal" className="py-6" />

      <section className="mx-auto max-w-container px-4 py-20 md:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-h1 text-text-primary">
            {dict.home.galleryPreviewTitle}
          </h2>
          <Link
            href={`/${locale}/gallery`}
            className="text-small text-text-secondary transition-colors hover:text-accent"
          >
            {dict.home.galleryPreviewViewAll} →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((t) => (
            <ThemeCard key={t.id} theme={t} locale={locale} />
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="mx-auto max-w-container px-4 py-12 md:px-8">
        <div className="border-t border-border pt-6">
          <div className="flex flex-wrap gap-4 text-small">
            <Link
              href={`/${locale}/guides`}
              className="text-accent hover:text-accent-hover hover:underline"
            >
              {locale === 'zh' ? '阅读使用指南 →' : 'Read the guides →'}
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="text-accent hover:text-accent-hover hover:underline"
            >
              {locale === 'zh' ? '查看定价方案 →' : 'See pricing →'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
