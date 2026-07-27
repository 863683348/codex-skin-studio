// Canonical + hreflang helpers for the bilingual [lang] site.
// x-default always points to the zh (default) version.

export const SITE_URL = 'https://codex-skin-studio.shop';

/**
 * Build a self-referencing canonical + bilingual hreflang alternates for a
 * locale-prefixed relative path.
 *
 * @param path locale-prefixed relative path, e.g. '/en/gallery/aurora' or '/zh'
 */
export function localeAlternates(path: string) {
  const zh = path.startsWith('/zh') ? path : path.replace(/^\/en/, '/zh');
  const en = path.startsWith('/en') ? path : path.replace(/^\/zh/, '/en');
  return {
    canonical: `${SITE_URL}${path}`,
    languages: {
      'zh-CN': `${SITE_URL}${zh}`,
      en: `${SITE_URL}${en}`,
      'x-default': `${SITE_URL}${zh}`,
    },
  } as const;
}
