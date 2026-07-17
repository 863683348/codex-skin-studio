'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/useTheme';
import type { Locale } from '@/lib/i18n/config';

interface Props {
  locale: Locale;
  labels: { toggleToLight: string; toggleToDark: string };
}

export function ThemeToggle({ locale: _locale, labels }: Props) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? labels.toggleToLight : labels.toggleToDark}
      className="p-2 rounded-md transition-colors hover:bg-bg-tertiary"
      style={{ color: 'var(--text-secondary)' }}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
