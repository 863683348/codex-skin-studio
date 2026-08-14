import { Github, Mail } from 'lucide-react';
import Link from 'next/link';
import { getDict } from '@/lib/i18n';
import { GITHUB_URL } from '@/lib/site';
import type { Locale } from '@/lib/i18n/config';

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  const links = [
    { href: `/${locale}/privacy`, label: dict.footer.privacy },
    { href: `/${locale}/terms`, label: dict.footer.terms },
    { href: `/${locale}/faq`, label: dict.footer.faq },
    { href: `/${locale}/contact`, label: dict.footer.contact },
  ];

  // SEO 内链：给已验证的高潜页面投站内权重
  const seoLinks =
    locale === 'en'
      ? [
          { href: '/en/guides/best-codex-themes', label: 'Best Codex Themes 2026' },
          { href: '/en/blog/codex-skin-complete-guide', label: 'Codex Skin Complete Guide' },
          { href: '/en/blog/how-to-install-codex-skin-studio-windows', label: 'Install on Windows' },
          { href: '/en/blog/how-to-install-codex-skin-studio-macos', label: 'Install on macOS' },
          { href: '/en/download', label: 'Download' },
        ]
      : [
          { href: '/zh/guides/best-codex-themes', label: '2026 最佳 Codex 主题' },
          { href: '/zh/blog/codex-skin-complete-guide', label: 'Codex 换肤完整指南' },
          { href: '/zh/blog/how-to-install-codex-skin-studio-windows', label: 'Windows 安装教程' },
          { href: '/zh/blog/how-to-install-codex-skin-studio-macos', label: 'macOS 安装教程' },
          { href: '/zh/download', label: '免费下载' },
        ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-6 px-4 py-12 md:flex-row md:items-start md:px-8">
        <div className="text-center md:text-left">
          <div className="text-sm text-text-tertiary">{dict.footer.copyright}</div>
          <div className="mt-1 text-xs text-text-tertiary/70">{dict.footer.brandNote}</div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Guides" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border pt-4 md:border-t-0 md:pt-0">
          {seoLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs text-text-tertiary transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="text-xs text-text-tertiary">{dict.footer.madeWith}</span>
          <a
            href={`mailto:${dict.contact.email}`}
            aria-label="Email"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.nav.github}
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
