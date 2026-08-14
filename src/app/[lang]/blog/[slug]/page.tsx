import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostView } from '@/components/views/PostView';
import { POSTS } from '@/data/posts';
import { SITE_URL, localeAlternates } from '@/lib/seo';
import type { Locale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return POSTS.flatMap((p) => [{ lang: 'zh', slug: p.slug }, { lang: 'en', slug: p.slug }]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.title[locale],
    description: post.description[locale],
    keywords: [post.title.en, post.title.zh, 'codex skin studio', 'codex theming', 'cdp injection theme'],
    alternates: localeAlternates(`/${locale}/blog/${post.slug}`),
    openGraph: {
      title: post.title[locale],
      description: post.description[locale],
      type: 'article',
      publishedTime: post.date,
      url: `${SITE_URL}/${locale}/blog/${post.slug}/`,
      siteName: 'Codex Skin Studio',
      images: [
        {
          url: `${SITE_URL}/images/blog/${post.slug}.svg`,
          width: 1200,
          height: 630,
          alt: post.title[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title[locale],
      description: post.description[locale],
      images: [`${SITE_URL}/images/blog/${post.slug}.svg`],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // 提取 FAQ 块（供 FAQPage JSON-LD）
  const faqItems = (post.content[locale] as any[])
    .filter((b) => b && typeof b === 'object' && b.type === 'faq')
    .flatMap((b) => b.items as { q: string; a: string }[]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'en' ? 'Home' : '首页',
            item: `${SITE_URL}/${locale}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: locale === 'en' ? 'Blog' : '博客',
            item: `${SITE_URL}/${locale}/blog/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title[locale],
            item: `${SITE_URL}/${locale}/blog/${post.slug}/`,
          },
        ],
      },
      {
        '@type': 'Article',
        headline: post.title[locale],
        description: post.description[locale],
        datePublished: post.date,
        dateModified: post.date,
        url: `${SITE_URL}/${locale}/blog/${post.slug}/`,
        mainEntityOfPage: `${SITE_URL}/${locale}/blog/${post.slug}/`,
        publisher: {
          '@type': 'Organization',
          name: 'Codex Skin Studio',
          url: SITE_URL,
        },
      },
      ...(faqItems.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faqItems.map((it) => ({
                '@type': 'Question',
                name: it.q,
                acceptedAnswer: { '@type': 'Answer', text: it.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostView locale={locale} post={post} />
    </>
  );
}
