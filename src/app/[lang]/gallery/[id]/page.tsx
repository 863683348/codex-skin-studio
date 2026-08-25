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
    image: theme.previewUrl ?? theme.imageUrl ?? undefined,
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

  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: locale === 'en' ? 'How do I install this theme?' : '如何安装这个主题？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'en'
            ? 'After downloading and installing Codex Skin Studio, launch the tool and select this theme from the theme list to apply it instantly.'
            : '下载并安装 Codex Skin Studio 后，启动工具，从主题列表中选择本主题即可实时套用。',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'en' ? 'Can I customize this theme?' : '可以修改这个主题吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'en'
            ? 'The free plan lets you use this preset as-is. Pro supports unlimited custom themes with background uploads and color tuning — save them as your own presets.'
            : '免费版可直接套用预设主题。Pro 版支持上传背景图并自定义配色，保存为专属预设。',
        },
      },
    ],
  };

  const dict = getDict(locale);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <DetailView theme={theme} locale={locale} />
    </>
  );
}
