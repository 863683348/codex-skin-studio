'use client';

import Link from 'next/link';
import { FAQ } from '@/components/FAQ';
import { ThemeCard } from '@/components/ThemeCard';
import { getGuide, type Guide } from '@/data/guides';
import { themes } from '@/data/themes';
import type { Locale } from '@/lib/i18n/config';

const UPDATED_DATE = '2026-07-27';
const SITE = 'https://codex-skin-studio.shop';

function Callout({
  tone,
  text,
}: {
  tone: 'info' | 'safe' | 'warn';
  text: string;
}) {
  const toneClass =
    tone === 'safe'
      ? 'border-l-emerald-500'
      : tone === 'warn'
        ? 'border-l-amber-500'
        : 'border-l-accent';
  return (
    <div
      className={`my-4 rounded-md border border-border border-l-4 bg-bg-secondary p-4 text-small text-text-secondary ${toneClass}`}
    >
      {text}
    </div>
  );
}

export function GuideView({ guide, locale }: { guide: Guide; locale: Locale }) {
  const c = locale === 'en' ? guide.en : guide.zh;
  const base = `/${locale}/guides`;
  const url = `${SITE}${base}/${guide.slug}/`;
  const homeUrl = `${SITE}/${locale}/`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: c.metaTitle,
        description: c.metaDescription,
        inLanguage: locale === 'zh' ? 'zh-CN' : 'en',
        dateModified: UPDATED_DATE,
        author: {
          '@type': 'Organization',
          name: 'Codex Skin Studio',
          url: SITE,
          logo: { '@type': 'ImageObject', url: SITE + '/favicon.svg' },
        },
        publisher: {
          '@type': 'Organization',
          name: 'Codex Skin Studio',
          url: SITE,
          logo: { '@type': 'ImageObject', url: SITE + '/favicon.svg' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'zh' ? '首页' : 'Home',
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: locale === 'zh' ? '使用指南' : 'Guides',
            item: `${SITE}${base}/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: c.metaTitle,
            item: url,
          },
        ],
      },
    ],
  };

  const relatedGuides = guide.en.related
    .map((s) => getGuide(s))
    .filter((g): g is Guide => Boolean(g));

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-container px-4 py-10 md:px-8">
        {/* Breadcrumb */}
        <nav className="text-caption text-text-tertiary">
          <Link href={homeUrl} className="hover:text-accent">
            {locale === 'zh' ? '首页' : 'Home'}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`${base}/`} className="hover:text-accent">
            {locale === 'zh' ? '使用指南' : 'Guides'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">{c.metaTitle}</span>
        </nav>

        <h1 className="mt-4 text-h1 text-text-primary">{c.metaTitle}</h1>
        <p className="mt-3 max-w-2xl text-body text-text-secondary">{c.intro}</p>

        {/* Body blocks */}
        <div className="mt-8 max-w-3xl">
          {c.blocks.map((b, i) => {
            if (b.type === 'paragraph')
              return (
                <p key={i} className="my-4 text-body text-text-secondary">
                  {b.text}
                </p>
              );
            if (b.type === 'heading')
              return (
                <h2 key={i} className="mt-8 text-h3 text-text-primary">
                  {b.text}
                </h2>
              );
            if (b.type === 'steps')
              return (
                <ol key={i} className="my-4 space-y-3">
                  {b.items.map((s, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-caption text-white">
                        {j + 1}
                      </span>
                      <span className="text-body text-text-secondary">{s}</span>
                    </li>
                  ))}
                </ol>
              );
            if (b.type === 'list')
              return (
                <ul key={i} className="my-4 list-disc space-y-2 pl-6 text-body text-text-secondary">
                  {b.items.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ul>
              );
            if (b.type === 'callout')
              return <Callout key={i} tone={b.tone} text={b.text} />;
            if (b.type === 'themeGrid')
              return (
                <div
                  key={i}
                  className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {themes.map((t) => (
                    <ThemeCard key={t.id} theme={t} locale={locale} />
                  ))}
                </div>
              );
            return null;
          })}
        </div>

        {/* FAQ */}
        <div className="mt-14 max-w-3xl">
          <h2 className="text-h2 text-text-primary">
            {locale === 'zh' ? '常见问题' : 'FAQ'}
          </h2>
          <div className="mt-4">
            <FAQ items={c.faqs} />
          </div>
        </div>

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <div className="mt-14 max-w-3xl">
            <h2 className="text-h3 text-text-primary">
              {locale === 'zh' ? '相关指南' : 'Related guides'}
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedGuides.map((g) => {
                const rc = locale === 'en' ? g.en : g.zh;
                return (
                  <Link
                    key={g.slug}
                    href={`${base}/${g.slug}`}
                    className="block rounded-md border border-border bg-bg-secondary p-4 transition-colors hover:border-border-hover"
                  >
                    <span className="text-small font-medium text-text-primary">
                      {rc.metaTitle}
                    </span>
                    <span className="mt-1 block text-caption text-text-tertiary">
                      {rc.summary}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Resource links to conversion pages */}
        <div className="mt-10 max-w-3xl border-t border-border pt-6">
          <div className="flex flex-wrap gap-4 text-small">
            <Link
              href={`/${locale}/gallery`}
              className="text-accent hover:underline"
            >
              {locale === 'zh' ? '浏览主题画廊 →' : 'Browse the gallery →'}
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="text-accent hover:underline"
            >
              {locale === 'zh' ? '查看定价 →' : 'View pricing →'}
            </Link>
            <Link
              href={`/${locale}/docs`}
              className="text-accent hover:underline"
            >
              {locale === 'zh' ? '快速开始文档 →' : 'Quick-start docs →'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
