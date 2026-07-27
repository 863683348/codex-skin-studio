/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codex-skin-studio.shop',
  outDir: './out',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  // 排除根重定向页、全局/本地化 404、以及残留索引页，避免软 404 与重复首页被收录
  exclude: ['/404', '/_not-found', '/zh/404', '/en/404', '/'],
  transform: function (config, path) {
    var priorityOverrides = {
      '/zh': 1.0,
      '/en': 1.0,
      '/zh/gallery': 0.9,
      '/en/gallery': 0.9,
      '/zh/guides': 0.8,
      '/en/guides': 0.8,
      '/zh/pricing': 0.8,
      '/en/pricing': 0.8,
      '/zh/docs': 0.7,
      '/en/docs': 0.7,
      '/zh/about': 0.6,
      '/en/about': 0.6,
      '/zh/contact': 0.6,
      '/en/contact': 0.6,
    };
    var freqOverrides = {
      '/zh': 'daily',
      '/en': 'daily',
      '/zh/gallery': 'daily',
      '/en/gallery': 'daily',
      '/zh/guides': 'weekly',
      '/en/guides': 'weekly',
      '/zh/about': 'monthly',
      '/en/about': 'monthly',
    };
    var normalizedPath =
      path.charAt(path.length - 1) === '/' && path !== '/'
        ? path.slice(0, -1)
        : path;
    var isDetail =
      normalizedPath.indexOf('/gallery/') !== -1 &&
      normalizedPath !== '/zh/gallery' &&
      normalizedPath !== '/en/gallery';
    var isGuide =
      normalizedPath.indexOf('/guides/') !== -1 &&
      normalizedPath !== '/zh/guides' &&
      normalizedPath !== '/en/guides';

    return {
      loc: path,
      changefreq:
        isDetail || isGuide
          ? 'weekly'
          : freqOverrides[normalizedPath] || 'weekly',
      priority: isGuide
        ? 0.7
        : isDetail
          ? 0.6
          : priorityOverrides[normalizedPath] || 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
