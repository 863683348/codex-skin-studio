'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Sun, Moon, CheckCircle2, Clock, Star } from 'lucide-react';
import { getDict, type Dict } from '@/lib/i18n';
import { categories, type ThemePreset } from '@/data/themes';
import type { Locale } from '@/lib/i18n/config';

function modeLabel(theme: ThemePreset, locale: Locale, dict: Dict) {
  if (theme.modes.length > 1) return dict.gallery.modes;
  return theme.modes[0] === 'light'
    ? locale === 'zh'
      ? '浅色'
      : 'Light'
    : locale === 'zh'
      ? '暗色'
      : 'Dark';
}

export function ThemeCard({
  theme,
  locale,
}: {
  theme: ThemePreset;
  locale: Locale;
}) {
  const dict = getDict(locale);
  const [dark, setDark] = useState(false);
  const catLabel =
    categories.find((c) => c.id === theme.category)?.[locale] ??
    theme.category;

  const stop = (e: React.MouseEvent) => e.preventDefault();

  return (
    <Link href={`/${locale}/gallery/${theme.id}`} className="group block">
      <div className="overflow-hidden rounded-lg border border-border bg-bg-secondary transition-all duration-card hover:-translate-y-0.5 hover:border-border-hover hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
        <div className="relative aspect-video">
          <div
            className="absolute inset-0"
            style={{ background: theme.gradient }}
          />
          {/* 状态徽标 */}
          <div className="absolute left-2 top-2 z-10">
            {theme.tier === 'pro' ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-2 py-0.5 text-[11px] font-bold text-white shadow-sm">
                <Star size={12} />
                PRO
              </span>
            ) : theme.available ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-emerald-300 backdrop-blur-sm">
                <CheckCircle2 size={12} />
                {dict.gallery.availableBadge}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-text-tertiary backdrop-blur-sm">
                <Clock size={12} />
                {dict.gallery.comingSoonBadge}
              </span>
            )}
          </div>
          <div
            className={`absolute inset-0 bg-bg-primary transition-opacity duration-crossfade ${
              dark ? 'opacity-55' : 'opacity-0'
            }`}
          />
          <div className="absolute bottom-2 right-2 flex gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <button
              onClick={(e) => {
                stop(e);
                setDark(false);
              }}
              aria-label="light"
              className={`rounded p-1 ${
                !dark ? 'bg-accent text-white' : 'bg-black/40 text-white'
              }`}
            >
              <Sun size={14} />
            </button>
            <button
              onClick={(e) => {
                stop(e);
                setDark(true);
              }}
              aria-label="dark"
              className={`rounded p-1 ${
                dark ? 'bg-accent text-white' : 'bg-black/40 text-white'
              }`}
            >
              <Moon size={14} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-h3 text-text-primary">{theme.name[locale]}</h3>
          <p className="mt-1 line-clamp-2 text-small text-text-secondary">
            {theme.description[locale]}
          </p>
          <p className="mt-2 text-caption text-text-tertiary">
            {catLabel} · {modeLabel(theme, locale, dict)} · v{theme.version}
          </p>
        </div>
      </div>
    </Link>
  );
}
