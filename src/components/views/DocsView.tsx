'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FAQ } from '@/components/FAQ';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export function DocsView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [platform, setPlatform] = useState<'macOS' | 'Windows'>('macOS');
  const steps: readonly string[] =
    platform === 'macOS' ? dict.docs.macOSSteps : dict.docs.windowsSteps;
  const title =
    platform === 'macOS' ? dict.docs.macOSTitle : dict.docs.windowsTitle;

  return (
    <div className="mx-auto max-w-container px-4 py-12 md:px-8">
      <h1 className="text-h1 text-text-primary">{dict.docs.title}</h1>
      <p className="mt-2 text-body text-text-secondary">
        {dict.docs.description}
      </p>

      <div className="mt-8 flex gap-8 border-b border-border">
        {(['macOS', 'Windows'] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPlatform(p)}
            className={`pb-3 text-body font-medium transition-colors ${
              platform === p
                ? 'border-b-2 border-accent text-text-primary'
                : 'text-text-secondary'
            }`}
          >
            {p === 'macOS' ? dict.docs.macOS : dict.docs.windows}
          </button>
        ))}
      </div>

      <h2 className="mt-8 text-h3 text-text-primary">{title}</h2>
      <ol className="mt-4 space-y-4">
        {steps.map((s, i) => (
          <li
            key={i}
            className="flex gap-4 rounded-md border border-border bg-bg-secondary p-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-small text-white">
              {i + 1}
            </span>
            <span className="text-body text-text-secondary">{s}</span>
          </li>
        ))}
      </ol>

      <div className="mt-16">
        <h2 className="text-h2 text-text-primary">{dict.docs.faqTitle}</h2>
        <div className="mt-4">
          <FAQ items={dict.docs.faqs} />
        </div>
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
        </div>
      </div>
    </div>
  );
}
