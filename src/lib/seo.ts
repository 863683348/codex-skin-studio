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
  // 站点 trailingSlash: true，canonical/hreflang 必须带尾斜杠与 sitemap 一致，
  // 避免 canonical 指向 308 跳转变体。
  const withSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);
  return {
    canonical: `${SITE_URL}${withSlash(path)}`,
    languages: {
      'zh-CN': `${SITE_URL}${withSlash(zh)}`,
      en: `${SITE_URL}${withSlash(en)}`,
      'x-default': `${SITE_URL}${withSlash(zh)}`,
    },
  } as const;
}
