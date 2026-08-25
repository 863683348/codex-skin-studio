import Link from 'next/link';
import { Zap, Image, Palette, RotateCcw, type LucideIcon } from 'lucide-react';
import { ThemeCard } from '@/components/ThemeCard';
import { AdDisplay } from '@/components/AdDisplay';
import { getDict } from '@/lib/i18n';
import { themes } from '@/data/themes';
import type { Locale } from '@/lib/i18n/config';

type FeatureKey = 'cdp' | 'image' | 'palette' | 'restore';

const featureIcons: Record<FeatureKey, LucideIcon> = {
  cdp: Zap,
  image: Image,
  palette: Palette,
  restore: RotateCcw,
};

export function HomeView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const features: { key: FeatureKey; title: string; desc: string }[] = [
    { key: 'cdp', ...dict.home.features.cdp },
    { key: 'image', ...dict.home.features.image },
    { key: 'palette', ...dict.home.features.palette },
    { key: 'restore', ...dict.home.features.restore },
  ];
  const featured = themes.slice(0, 4);

  const priceCurrency = locale === 'zh' ? 'CNY' : 'USD';
  const offerList = dict.pricing.plans.map((p) => ({
    '@type': 'Offer',
    name: p.name,
    price: p.free ? '0' : p.price.replace(/[^0-9.]/g, '') || '0',
    priceCurrency,
  }));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Codex Skin Studio',
    operatingSystem: 'macOS, Windows',
    applicationCategory: 'DesktopApplication',
    url: 'https://codex-skin-studio.shop',
    description: 'Codex 桌面端换肤工具，基于 CDP 注入，不修改官方文件。支持 macOS 和 Windows。',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency,
      lowPrice: '0',
      offerCount: offerList.length,
      offers: offerList,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codex Skin Studio',
      url: 'https://codex-skin-studio.shop',
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto flex max-w-container flex-col items-center px-4 py-20 text-center md:px-8 md:py-28">
        <h1 className="text-display font-semibold tracking-tight text-text-primary">
          {dict.home.heroTitle}
        </h1>
        <p className="mt-4 text-h3 font-normal text-text-secondary">
          {dict.home.heroSubtitle}
        </p>
        <p className="mt-4 max-w-2xl text-body text-text-secondary">
          {dict.home.heroDescription}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
          <Link
            href={`/${locale}/gallery`}
            className="w-full rounded-md bg-accent px-6 py-3 text-body font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            {dict.home.ctaBrowse}
          </Link>
          <Link
            href={`/${locale}/docs`}
            className="w-full rounded-md border border-border px-6 py-3 text-body font-medium text-text-primary transition-colors hover:border-border-hover sm:w-auto"
          >
            {dict.home.ctaQuickstart}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-container px-4 py-12 md:px-8">
        <h2 className="text-h1 text-text-primary">{dict.home.introTitle}</h2>
        <p className="mt-4 max-w-3xl text-body text-text-secondary">
          {dict.home.introLead}
        </p>
        <p className="mt-4 max-w-3xl text-body text-text-secondary">
          {dict.home.introBody1}
        </p>
        <p className="mt-4 max-w-3xl text-body text-text-secondary">
          {dict.home.introBody2}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dict.home.introPoints.map((p, i) => (
            <li key={i} className="flex gap-2 text-body text-text-secondary">
              <span className="text-accent">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <AdDisplay format="horizontal" className="py-6" />

      <section className="mx-auto max-w-container px-4 py-20 md:px-8">
        <h2 className="text-center text-h1 text-text-primary">
          {dict.home.featuresTitle}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = featureIcons[f.key];
            return (
              <div
                key={f.key}
                className="rounded-lg border border-border bg-bg-secondary p-6"
              >
                <Icon size={24} className="text-accent" />
                <h3 className="mt-4 text-h3 text-text-primary">{f.title}</h3>
                <p className="mt-2 text-small text-text-secondary">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <AdDisplay format="horizontal" className="py-6" />

      <section className="mx-auto max-w-container px-4 py-20 md:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-h1 text-text-primary">
            {dict.home.galleryPreviewTitle}
          </h2>
          <Link
            href={`/${locale}/gallery`}
            className="text-small text-text-secondary transition-colors hover:text-accent"
          >
            {dict.home.galleryPreviewViewAll} →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((t) => (
            <ThemeCard key={t.id} theme={t} locale={locale} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container px-4 py-20 md:px-8">
        <h2 className="text-h1 text-text-primary">
          {locale === 'zh' ? '三步完成 Codex 桌面端换肤' : 'Theme Codex in Three Steps'}
        </h2>
        <p className="mt-4 max-w-3xl text-body text-text-secondary">
          {locale === 'zh'
            ? 'Codex Skin Studio 通过 CDP（Chrome DevTools Protocol）向 Codex 桌面端注入主题样式，全程不修改官方任何文件，升级官方版本也不会丢失你的个性化设置。'
            : 'Codex Skin Studio themes the Codex desktop app via CDP (Chrome DevTools Protocol) injection. It never touches official files, so your custom look survives Codex updates.'}
        </p>
        <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <li className="rounded-lg border border-border bg-bg-secondary p-6">
            <div className="text-accent text-h2 font-semibold">1</div>
            <h3 className="mt-3 text-h3 text-text-primary">
              {locale === 'zh' ? '安装并启动' : 'Install & launch'}
            </h3>
            <p className="mt-2 text-small text-text-secondary">
              {locale === 'zh'
                ? '下载 Codex Skin Studio，打开后它会自动识别本机已安装的 Codex 桌面端（macOS / Windows 均支持）。'
                : 'Open Codex Skin Studio — it auto-detects the Codex desktop app installed on your machine (macOS / Windows).'}
            </p>
          </li>
          <li className="rounded-lg border border-border bg-bg-secondary p-6">
            <div className="text-accent text-h2 font-semibold">2</div>
            <h3 className="mt-3 text-h3 text-text-primary">
              {locale === 'zh' ? '一键注入' : 'Inject the theme'}
            </h3>
            <p className="mt-2 text-small text-text-secondary">
              {locale === 'zh'
                ? '在主题库里挑选喜欢的配色或上传自定义主题，点击「应用」，工具通过 CDP 把样式注入到运行中的 Codex 窗口。'
                : 'Pick a preset palette or your own theme, then click "Apply". The tool injects styles into the running Codex window over CDP.'}
            </p>
          </li>
          <li className="rounded-lg border border-border bg-bg-secondary p-6">
            <div className="text-accent text-h2 font-semibold">3</div>
            <h3 className="mt-3 text-h3 text-text-primary">
              {locale === 'zh' ? '随时切换' : 'Switch anytime'}
            </h3>
            <p className="mt-2 text-small text-text-secondary">
              {locale === 'zh'
                ? '想换风格？实时切换无需重启；不满意可一键还原为官方默认外观。'
                : 'Change looks live without restarting. Not feeling it? One click restores the official default.'}
            </p>
          </li>
        </ol>
      </section>

      <section className="mx-auto max-w-container px-4 py-12 md:px-8">
        <h2 className="text-h1 text-text-primary">
          {locale === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
        </h2>
        <dl className="mt-6 space-y-4">
          <div className="rounded-lg border border-border bg-bg-secondary p-5">
            <dt className="text-body font-semibold text-text-primary">
              {locale === 'zh' ? '会修改 Codex 的官方文件吗？' : 'Does it modify Codex official files?'}
            </dt>
            <dd className="mt-2 text-small text-text-secondary">
              {locale === 'zh'
                ? '不会。所有主题都通过运行时注入生效，官方安装目录保持原样，升级 Codex 后主题依然可用。'
                : 'No. Themes are applied at runtime via injection; the official install stays untouched, and your theme survives Codex upgrades.'}
            </dd>
          </div>
          <div className="rounded-lg border border-border bg-bg-secondary p-5">
            <dt className="text-body font-semibold text-text-primary">
              {locale === 'zh' ? '支持哪些系统？' : 'Which systems are supported?'}
            </dt>
            <dd className="mt-2 text-small text-text-secondary">
              {locale === 'zh'
                ? '目前支持 macOS 与 Windows 上的 Codex 桌面端。'
                : 'macOS and Windows builds of the Codex desktop app are supported.'}
            </dd>
          </div>
          <div className="rounded-lg border border-border bg-bg-secondary p-5">
            <dt className="text-body font-semibold text-text-primary">
              {locale === 'zh' ? '主题能自定义吗？' : 'Can I make my own theme?'}
            </dt>
            <dd className="mt-2 text-small text-text-secondary">
              {locale === 'zh'
                ? '可以。除了内置主题库，你也能导入自定义配色，打造专属的 Codex 外观。'
                : 'Yes. Alongside the built-in library you can import your own palette for a fully custom look.'}
            </dd>
          </div>
        </dl>
      </section>

      {/* Internal links */}
      <section className="mx-auto max-w-container px-4 py-12 md:px-8">
        <div className="border-t border-border pt-6">
          <div className="flex flex-wrap gap-4 text-small">
            <Link
              href={`/${locale}/blog/codex-skin-complete-guide`}
              className="text-accent hover:text-accent-hover hover:underline"
            >
              {locale === 'zh' ? 'Codex 换肤完整指南 →' : 'The complete Codex skinning guide →'}
            </Link>
            <Link
              href={`/${locale}/guides/best-codex-themes`}
              className="text-accent hover:text-accent-hover hover:underline"
            >
              {locale === 'zh' ? '2026 最佳 Codex 主题合集 →' : 'Best Codex themes 2026 →'}
            </Link>
            <Link
              href={`/${locale}/guides`}
              className="text-accent hover:text-accent-hover hover:underline"
            >
              {locale === 'zh' ? '阅读使用指南 →' : 'Read the guides →'}
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="text-accent hover:text-accent-hover hover:underline"
            >
              {locale === 'zh' ? '查看定价方案 →' : 'See pricing →'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
