'use client';

import { getDict } from '@/lib/i18n';
import Link from 'next/link';
import { GITHUB_URL } from '@/lib/site';
import type { Locale } from '@/lib/i18n/config';

const SITE = 'https://codex-skin-studio.shop';

export function AboutView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const a = dict.about;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: a.title,
    mainEntity: {
      '@type': 'Organization',
      name: 'Codex Skin Studio',
      url: SITE,
      description: a.subtitle,
      sameAs: [GITHUB_URL],
    },
  };

  const sections: { title: string; body: string }[] = [
    { title: a.missionTitle, body: a.mission },
    { title: a.howTitle, body: a.how },
    { title: a.openTitle, body: a.open },
    { title: a.pressTitle, body: a.press },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-container px-4 py-12 md:px-8">
        <h1 className="text-h1 text-text-primary">{a.title}</h1>
        <p className="mt-2 max-w-2xl text-body text-text-secondary">{a.subtitle}</p>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-h3 text-text-primary">{s.title}</h2>
              <p className="mt-2 max-w-3xl text-body text-text-secondary">{s.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-h3 text-text-primary">{a.contactTitle}</h2>
            <p className="mt-2 max-w-3xl text-body text-text-secondary">{a.contact}</p>
            <a
              href={`mailto:${dict.contact.email}`}
              className="mt-3 inline-block rounded-md bg-accent px-5 py-2.5 text-small font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {dict.contact.emailLabel}
            </a>
          </section>
        </div>

        {/* Internal links */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-wrap gap-4 text-small">
            <Link
              href={`/${locale}/gallery`}
              className="text-accent hover:text-accent-hover hover:underline"
            >
              {locale === 'zh' ? '浏览主题画廊 →' : 'Browse themes →'}
            </Link>
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
              {locale === 'zh' ? '查看定价 →' : 'See pricing →'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
