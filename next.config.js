/** @type {import('next').NextConfig} */
const nextConfig = {
  // 由静态导出改为 Vercel 标准模式：启用 /api 路由（PayPal webhook、会员状态）
  // 普通页面在无动态 API 依赖时仍由 Next 自动静态生成（SSG），SEO 不受影响
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // FOT 修复：公开页加边缘缓存（Next.js 默认 max-age=0 每次回源验证）。
  // 排除 /api（PayPal webhook、会员状态）；覆盖 sitemap.xml/robots.txt 与全部 [lang] 页面。
  async headers() {
    return [
      {
        source: '/:path((?!api).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
