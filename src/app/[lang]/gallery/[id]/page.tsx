import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailView } from '@/components/views/DetailView';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';
import { themes, getThemeById } from '@/data/themes';
import { localeAlternates, SITE_URL } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return themes.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const theme = getThemeById(id);
  if (!theme) return {};
  return {
    title: locale === 'en' ? theme.name.en : theme.name.zh,
    description: locale === 'en' ? theme.description.en : theme.description.zh,
    alternates: localeAlternates(`/${locale}/gallery/${id}`),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const theme = getThemeById(id);
  if (!theme) notFound();

  const productJson = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: locale === 'en' ? theme.name.en : theme.name.zh,
    description: locale === 'en' ? theme.description.en : theme.description.zh,
    brand: { '@type': 'Brand', name: 'Codex Skin Studio' },
    category: theme.category,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    url: `${SITE_URL}/${locale}/gallery/${theme.id}`,
  };

  const breadcrumbJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'en' ? 'Home' : '首页',
        item: `${SITE_URL}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'en' ? 'Gallery' : '主题画廊',
        item: `${SITE_URL}/${locale}/gallery`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: locale === 'en' ? theme.name.en : theme.name.zh,
        item: `${SITE_URL}/${locale}/gallery/${theme.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <DetailView theme={theme} locale={locale} />
    </>
  );
}
