import Link from 'next/link';
import { Download, Github } from 'lucide-react';
import { ThemePreview } from '@/components/ThemePreview';
import { getDict, type Dict } from '@/lib/i18n';
import {
  categories,
  type ThemePreset,
} from '@/data/themes';
import { RELEASE_URL, GITHUB_URL } from '@/lib/site';
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

export function DetailView({
  theme,
  locale,
}: {
  theme: ThemePreset;
  locale: Locale;
}) {
  const dict = getDict(locale);
  const catLabel =
    categories.find((c) => c.id === theme.category)?.[locale] ??
    theme.category;
  const steps = [dict.detail.step1, dict.detail.step2, dict.detail.step3];

  return (
    <div className="mx-auto max-w-container px-4 py-12 md:px-8">
      <Link
        href={`/${locale}/gallery`}
        className="text-small text-text-secondary transition-colors hover:text-accent"
      >
        {dict.gallery.backToGallery}
      </Link>
      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        <div className="lg:w-3/5">
          <ThemePreview theme={theme} locale={locale} />
        </div>
        <div className="lg:w-2/5">
          <h1 className="text-h2 text-text-primary">{theme.name[locale]}</h1>
          <p className="mt-2 text-body text-text-secondary">
            {theme.description[locale]}
          </p>
          <div className="mt-6 space-y-2 text-small">
            <div className="flex gap-2">
              <span className="w-16 shrink-0 text-text-tertiary">
                {dict.detail.style}
              </span>
              <span className="text-text-primary">{catLabel}</span>
            </div>
            <div className="flex gap-2">
              <span className="w-16 shrink-0 text-text-tertiary">
                {dict.detail.modes}
              </span>
              <span className="text-text-primary">
                {modeLabel(theme, locale, dict)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="w-16 shrink-0 text-text-tertiary">
                {dict.detail.version}
              </span>
              <span className="text-text-primary">v{theme.version}</span>
            </div>
            <div className="flex gap-2">
              <span className="w-16 shrink-0 text-text-tertiary">
                {dict.detail.author}
              </span>
              <span className="text-text-primary">{theme.author}</span>
            </div>
          </div>
          <h2 className="mt-8 text-h3 text-text-primary">{dict.detail.usage}</h2>
          <ol className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs text-white">
                  {i + 1}
                </span>
                <span className="text-small text-text-secondary">{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex gap-3">
            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-body font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <Download size={18} />
              {dict.detail.downloadTool}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-6 py-3 text-body font-medium text-text-primary transition-colors hover:border-border-hover"
            >
              <Github size={18} />
              {dict.detail.viewGithub}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
