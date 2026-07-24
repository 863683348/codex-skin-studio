/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codex-skin-studio.shop',
  outDir: './out',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/_not-found'],
  transform: function(config, path) {
    var priorityOverrides = {
      '/': 1.0,
      '/zh': 1.0,
      '/en': 1.0,
      '/zh/gallery': 0.9,
      '/en/gallery': 0.9,
      '/zh/pricing': 0.8,
      '/en/pricing': 0.8,
      '/zh/docs': 0.7,
      '/en/docs': 0.7,
      '/zh/contact': 0.6,
      '/en/contact': 0.6,
    };
    var freqOverrides = {
      '/': 'daily',
      '/zh': 'daily',
      '/en': 'daily',
      '/zh/gallery': 'daily',
      '/en/gallery': 'daily',
    };
    var normalizedPath = path.charAt(path.length - 1) === '/' && path !== '/'
      ? path.slice(0, -1)
      : path;
    var isDetail = normalizedPath.indexOf('/gallery/') !== -1
      && normalizedPath !== '/zh/gallery'
      && normalizedPath !== '/en/gallery';

    return {
      loc: path,
      changefreq: isDetail ? 'weekly' : (freqOverrides[normalizedPath] || 'weekly'),
      priority: isDetail ? 0.6 : (priorityOverrides[normalizedPath] || 0.5),
      lastmod: new Date().toISOString(),
    };
  },
};
