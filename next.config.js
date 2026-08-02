/** @type {import('next').NextConfig} */
const nextConfig = {
  // 由静态导出改为 Vercel 标准模式：启用 /api 路由（PayPal webhook、会员状态）
  // 普通页面在无动态 API 依赖时仍由 Next 自动静态生成（SSG），SEO 不受影响
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
