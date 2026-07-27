'use client';

import Link from 'next/link';
import { getDict } from '@/lib/i18n';
import { guides } from '@/data/guides';
import type { Locale } from '@/lib/i18n/config';

export function GuidesHubView({ locale }: { locale: Locale }) {
  const base = `/${locale}/guides`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: locale === 'zh' ? 'Codex Skin Studio 使用指南' : 'Codex Skin Studio Guides',
    itemListElement: guides.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: (locale === 'en' ? g.en : g.zh).metaTitle,
      url: `https://codex-skin-studio.shop${base}/${g.slug}/`,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-container px-4 py-12 md:px-8">
        <h1 className="text-h1 text-text-primary">
          {locale === 'zh' ? '使用指南' : 'Guides'}
        </h1>
        <p className="mt-2 max-w-2xl text-body text-text-secondary">
          {locale === 'zh'
            ? '从安装、安全到自定义，这里汇集了使用 Codex Skin Studio 的完整教程。'
            : 'Complete tutorials for installing, staying safe, and customizing Codex themes with Codex Skin Studio.'}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => {
            const c = locale === 'en' ? g.en : g.zh;
            return (
              <Link
                key={g.slug}
                href={`${base}/${g.slug}`}
                className="group block rounded-lg border border-border bg-bg-secondary p-6 transition-all duration-card hover:-translate-y-0.5 hover:border-border-hover"
              >
                <h2 className="text-h3 text-text-primary transition-colors group-hover:text-accent">
                  {c.metaTitle}
                </h2>
                <p className="mt-2 text-small text-text-secondary">{c.summary}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
