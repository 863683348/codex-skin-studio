<!-- markdownlint-disable MD041 MD033 -->
<p align="center">
  <img src="public/favicon.svg" width="80" height="80" alt="Codex Skin Studio" />
</p>

<h1 align="center">Codex Skin Studio</h1>

<p align="center">
  <strong>给 Codex 桌面端换一张会呼吸的脸</strong><br>
  A skinning tool for the Codex desktop app — safe, interactive, one-click restore.
</p>

<p align="center">
  <a href="https://codex-skin-studio.shop" target="_blank">🌐 官网</a>
  ·
  <a href="https://github.com/863683348/codex-skin-studio" target="_blank">📦 GitHub</a>
  ·
  <a href="LICENSE">📄 MIT License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.21-000?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Firebase_Auth-FFCA28?logo=firebase" alt="Firebase Auth">
  <img src="https://img.shields.io/badge/PayPal_Subscriptions-00457C?logo=paypal" alt="PayPal">
  <img src="https://img.shields.io/badge/Vercel-000?logo=vercel" alt="Vercel">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
  <img src="https://img.shields.io/github/stars/863683348/codex-skin-studio?style=social" alt="Stars">
</p>

---

## 项目简介

**Codex Skin Studio** 是一个基于 **CDP（Chrome DevTools Protocol）注入技术**的桌面端换肤工具。它不修改官方安装文件，不破坏代码签名，让您可以为 OpenAI Codex 桌面应用一键切换主题。

### 核心亮点

| 亮点 | 说明 |
|------|------|
| 🎯 **真·可交互换肤** | 侧栏、建议卡、项目选择器、输入框保持原生控件可用——非假截图 |
| 🔒 **不碰官方文件** | CDP 127.0.0.1 回环注入，不修改 `.app` / `app.asar` / 代码签名 |
| 🔄 **一键恢复** | 随时还原官方外观，零残留，零风险 |
| 🖥️ **跨平台** | macOS（Apple Silicon + Intel）和 Windows 10/11 双平台支持 |
| 🌐 **中英双语** | 全站中文 / 英文一键切换 |
| 🎨 **8+ 预设主题** | 粉系、科幻、黑金、初音未来、紫夜限定、清透、财神、灵感小宇宙 |
| 💳 **付费订阅** | Pro / Team 两级定价（PayPal 订阅） |

---

## 快速开始

### 环境要求

- **Node.js** 20+
- **npm** 10+

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/863683348/codex-skin-studio.git
cd codex-skin-studio

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:3000` 即可预览。

### 构建静态站

```bash
npm run build
```

产物输出至 `out/` 目录，可直接部署到任何静态托管平台。

### 配置环境变量

复制 `.env.example` 为 `.env`，填写必要配置：

```env
# Firebase（Google 登录）
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# PayPal 支付（可选，不配则显示"即将上线"）
NEXT_PUBLIC_PAYPAL_CLIENT_ID=
NEXT_PUBLIC_PAYPAL_PLAN_PRO=
NEXT_PUBLIC_PAYPAL_PLAN_TEAM=
```

---

## 技术架构

```text
Next.js 15 静态导出 + Firebase Auth + PayPal 订阅 + Vercel 托管

用户 → Vercel CDN → 静态文件 (HTML/CSS/JS)
                   → 运行时加载：Firebase Auth SDK
                                  PayPal JS SDK (按需)
                                  GA4 (分析追踪)
```

| 层 | 技术 | 说明 |
|---|------|------|
| **框架** | Next.js 15.5.21 (App Router) | 34 页静态站点，Clean URL |
| **语言** | TypeScript 5.7 | 全栈强类型 |
| **样式** | Tailwind CSS + CSS 变量主题 | light/dark 主题 Token 系统 |
| **认证** | Firebase Authentication | Google OAuth 客户端 SDK |
| **支付** | PayPal Subscriptions (JS SDK) | 纯前端订阅，待配置密钥 |
| **部署** | Vercel | GitHub push 自动构建部署 |
| **分析** | Google Analytics 4 | `G-0KJXS00XK1` |
| **SEO** | next-sitemap + JSON-LD | 34 页 sitemap + 结构化数据 |
| **图标** | Lucide React | 轻量开源图标库 |
| **字体** | Inter + Noto Sans SC | 跨平台无衬线字体 |

---

## 页面结构（44 个静态页面）

| 页面 | 路由 |
|------|------|
| 首页 | `/`, `/zh`, `/en` |
| 主题画廊 | `/zh/gallery`, `/en/gallery` |
| 主题详情（8 套预设） | `/zh/gallery/[id]`, `/en/gallery/[id]` |
| 使用指南（5 篇教程，含安装/安全/自定义/推荐） | `/zh/guides/*`, `/en/guides/*` |
| 定价 | `/zh/pricing`, `/en/pricing` |
| 支付结果 | `/zh/pricing/result`, `/en/pricing/result` |
| 使用教程 | `/zh/docs`, `/en/docs` |
| 关于我们 | `/zh/about`, `/en/about` |
| 联系我们 | `/zh/contact`, `/en/contact` |
| 404 | `/zh/404`, `/en/404` |

---

## 项目结构

```
codex-skin-studio/
├── src/
│   ├── app/                   # Next.js App Router 页面
│   │   ├── layout.tsx         # 根布局 (GA4 + 结构化数据 + SEO)
│   │   ├── page.tsx           # / → /zh 重定向
│   │   ├── [lang]/            # 动态语言段（zh/en）
│   │   │   ├── gallery/       # 主题画廊 + 8 主题详情页
│   │   │   ├── guides/        # 使用指南（5 篇双语教程）
│   │   │   ├── about/         # 关于我们（E-E-A-T 信任页）
│   │   │   └── ...
│   ├── components/
│   │   ├── views/             # 页面级组件
│   │   │   ├── HomeView.tsx
│   │   │   ├── GalleryView.tsx
│   │   │   ├── PricingView.tsx
│   │   │   ├── ContactView.tsx
│   │   │   └── ...
│   │   ├── Navbar.tsx          # 导航栏 + 账户菜单
│   │   ├── Footer.tsx          # 页脚
│   │   ├── AccountMenu.tsx     # Google 登录下拉
│   │   └── ThemeCard.tsx       # 主题卡片
│   ├── lib/
│   │   ├── auth.tsx            # Firebase Auth Provider
│   │   ├── i18n/               # 国际化（zh/en 双语）
│   │   └── site.ts             # 站点常量
│   └── data/
│       └── themes.ts           # 8 套预设主题数据
├── public/
│   ├── favicon.svg             # 网站图标
│   ├── robots.txt              # 搜索引擎爬虫配置
│   ├── sitemap.xml             # sitemap 索引
│   └── sitemap-0.xml           # 34 条 URL
├── docs/                       # 项目文档
│   ├── PRD.md
│   ├── Architecture.md
│   ├── Design-Spec.md
│   ├── Spec.md
│   └── 安全审计报告-2026-07-25.md
├── next-sitemap.config.js      # sitemap 生成
├── vercel.json                 # 安全响应头 + CSP
├── next.config.js              # Next.js 配置
└── package.json
```

---

## 预设主题

| 主题 | 风格 |
|------|------|
| 🌸 粉系定制 | 柔和渐变，适合深夜编码 |
| 🧧 财神打工版 | 红红火火，讨个好彩头 |
| 🚀 红白科幻 | 赛博朋克，科技感拉满 |
| 💎 清透定制 | 简约清新，玻璃拟态 |
| 🌌 灵感小宇宙 | 星空背景，激发创作灵感 |
| 🌙 紫夜限定 | 神秘紫色，夜间专属 |
| 🎤 初音未来 | 二次元 Vocaloid 能量 |
| 🖤 舞台黑金 | 高级质感，聚焦生产力 |

---

## 部署

本仓库通过 **GitHub → Vercel** 自动部署：

```bash
git push origin main    # 自动触发 Vercel 构建部署
```

### 环境变量配置

敏感信息通过 Vercel Dashboard 设置，不提交至代码仓库：

| 变量 | 用途 | 来源 |
|------|------|------|
| `NEXT_PUBLIC_FIREBASE_*` | Google 登录 | [Firebase Console](https://console.firebase.google.com) |
| `NEXT_PUBLIC_PAYPAL_*` | 支付订阅 | [PayPal Developer](https://developer.paypal.com) |

---

## 安全

本项目已完成上线前安全审计（详见 [`docs/安全审计报告-2026-07-25.md`](docs/安全审计报告-2026-07-25.md)）。

| 防护措施 | 状态 |
|----------|------|
| **CSP 白名单** | ✅ 仅放行必需域名 |
| **安全响应头** ✅ | HSTS / XFO / CTO / RP / PP 全配 |
| **废弃代码清理** ✅ | Stripe 全量删除，无遗留 API |
| **PayPal 配置门禁** ✅ | 未配密钥时显示"即将上线" |
| **npm audit** ✅ | Next.js 15.5.21，12 high 均为 build-time 风险 |

---

## 相关资源

- [项目总结报告](docs/项目总结报告-2026-07-25.md)
- [上线检查清单](docs/上线检查清单-2026-07-23.md)
- [安全审计报告](docs/安全审计报告-2026-07-25.md)

---

## 许可证

[**MIT License**](LICENSE)

> **声明**：本项目是第三方社区工具，与 OpenAI 无官方关联。Codex 及相关权利归 OpenAI 所有。

<p align="center">
  <sub>Built with ❤️ by the Codex Skin Studio team</sub>
</p>
