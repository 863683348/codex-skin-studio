/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codex-skin-studio.vercel.app',
  outDir: './out',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
  alternateRefs: [
    {
      href: 'https://codex-skin-studio.vercel.app/zh',
      hreflang: 'zh',
    },
    {
      href: 'https://codex-skin-studio.vercel.app/en',
      hreflang: 'en',
    },
  ],
};
