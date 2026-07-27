import Link from 'next/link';
import { Download, Github, Check, BookOpen } from 'lucide-react';
import { ThemePreview } from '@/components/ThemePreview';
import { getDict, type Dict } from '@/lib/i18n';
import {
  categories,
  themePreviewSvgURI,
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
  const features = locale === 'en' ? theme.features.en : theme.features.zh;
  const longDesc = locale === 'en' ? theme.longDescription.en : theme.longDescription.zh;

  return (
    <div className="mx-auto max-w-container px-4 py-12 md:px-8">
      <Link
        href={`/${locale}/gallery`}
        className="text-small text-text-secondary transition-colors hover:text-accent"
      >
        {dict.gallery.backToGallery}
      </Link>

      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        {/* Left: preview */}
        <div className="lg:w-3/5 space-y-4">
          <ThemePreview theme={theme} locale={locale} />
          {/* SVG code-editor screenshot for SEO + richer preview */}
          <img
            src={themePreviewSvgURI(theme, locale)}
            alt={`${theme.name[locale === 'en' ? 'en' : 'zh']} — Codex Skin Studio theme preview showing a code editor mockup with the theme colors applied`}
            className="w-full rounded-lg border border-border"
            loading="lazy"
            width="640"
            height="360"
          />
        </div>

        {/* Right: metadata + actions */}
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

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-body font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
            >
              <Download size={18} />
              {dict.detail.downloadTool}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-body font-medium text-text-primary transition-colors hover:border-border-hover sm:w-auto"
            >
              <Github size={18} />
              {dict.detail.viewGithub}
            </a>
          </div>
        </div>
      </div>

      {/* Long description */}
      <section className="mt-12">
        <h2 className="text-h3 text-text-primary">{dict.detail.about}</h2>
        <p className="mt-3 text-body text-text-secondary leading-relaxed max-w-3xl">
          {longDesc}
        </p>
      </section>

      {/* Features */}
      <section className="mt-10">
        <h2 className="text-h3 text-text-primary">{dict.detail.features}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 max-w-3xl">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check
                size={18}
                className="mt-0.5 shrink-0 text-green-500"
              />
              <span className="text-small text-text-secondary">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Related guides */}
      {theme.relatedGuides.length > 0 && (
        <section className="mt-10">
          <h2 className="text-h3 text-text-primary">{dict.detail.relatedGuides}</h2>
          <ul className="mt-4 space-y-2 max-w-3xl">
            {theme.relatedGuides.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/${locale}/guides/${slug}`}
                  className="inline-flex items-center gap-2 text-body text-accent transition-colors hover:text-accent-hover"
                >
                  <BookOpen size={16} />
                  {locale === 'zh'
                    ? guideLinkLabel(slug, 'zh')
                    : guideLinkLabel(slug, 'en')}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      <section className="mt-10 max-w-3xl">
        <h2 className="text-h3 text-text-primary">{dict.detail.faq}</h2>
        <div className="mt-4 space-y-4">
          <FaqItem q={dict.detail.faqInstall} a={dict.detail.faqInstallA} />
          <FaqItem q={dict.detail.faqCustomize} a={dict.detail.faqCustomizeA} />
          <FaqItem q={dict.detail.faqCompatible} a={dict.detail.faqCompatibleA} />
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-lg border border-border p-4 transition-colors hover:border-border-hover">
      <summary className="cursor-pointer text-small font-medium text-text-primary list-none flex items-center justify-between">
        <span>{q}</span>
        <span className="shrink-0 transition-transform group-open:rotate-180 text-text-tertiary">
          ▼
        </span>
      </summary>
      <p className="mt-2 text-small text-text-secondary leading-relaxed">
        {a}
      </p>
    </details>
  );
}

// 指南链接中文标签映射
const guideLabelsZh: Record<string, string> = {
  'install-windows': 'Windows 安装教程',
  'install-macos': 'macOS 安装教程',
  'is-it-safe': 'Codex Skin Studio 安全吗？',
  'best-codex-themes': '2026 最佳 Codex 主题推荐',
  customize: '如何自定义 Codex 主题',
};

const guideLabelsEn: Record<string, string> = {
  'install-windows': 'Windows Install Guide',
  'install-macos': 'macOS Install Guide',
  'is-it-safe': 'Is Codex Skin Studio Safe?',
  'best-codex-themes': 'Best Codex Skins 2026',
  customize: 'How to Customize Codex Themes',
};

function guideLinkLabel(slug: string, locale: string): string {
  const map = locale === 'zh' ? guideLabelsZh : guideLabelsEn;
  return map[slug] || slug;
}
