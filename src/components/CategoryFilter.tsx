'use client';

import { categories, type ThemeCategory } from '@/data/themes';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export function CategoryFilter({
  locale,
  active,
  onChange,
}: {
  locale: Locale;
  active: ThemeCategory | 'all';
  onChange: (c: ThemeCategory | 'all') => void;
}) {
  const dict = getDict(locale);
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className={`rounded-pill px-4 py-2 text-small transition-colors ${
            active === c.id
              ? 'bg-accent text-white'
              : 'border border-border bg-transparent text-text-secondary hover:border-border-hover'
          }`}
        >
          {c[locale]}
        </button>
      ))}
    </div>
  );
}
