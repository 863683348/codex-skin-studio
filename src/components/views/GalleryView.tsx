'use client';

import { useState } from 'react';
import { ThemeCard } from '@/components/ThemeCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { AdDisplay } from '@/components/AdDisplay';
import { themes, type ThemeCategory } from '@/data/themes';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export function GalleryView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [active, setActive] = useState<ThemeCategory | 'all'>('all');
  const filtered =
    active === 'all' ? themes : themes.filter((t) => t.category === active);
  // 可安装主题置顶
  const sorted = [...filtered].sort(
    (a, b) => Number(b.available) - Number(a.available),
  );

  return (
    <div className="mx-auto max-w-container px-4 py-12 md:px-8">
      <h1 className="text-h1 text-text-primary">{dict.gallery.title}</h1>
      <p className="mt-2 text-body text-text-secondary">
        {dict.gallery.description}
      </p>
      <p className="mt-2 text-caption text-text-tertiary">
        {dict.gallery.availableNote}
      </p>
      <div className="my-8">
        <CategoryFilter locale={locale} active={active} onChange={setActive} />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.slice(0, 4).map((t) => (
          <ThemeCard key={t.id} theme={t} locale={locale} />
        ))}
      </div>

      <AdDisplay format="horizontal" className="py-8" />

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.slice(4).map((t) => (
          <ThemeCard key={t.id} theme={t} locale={locale} />
        ))}
      </div>
    </div>
  );
}
