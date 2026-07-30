'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Sparkles, Github } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { AccountMenu } from './AccountMenu';
import { getDict } from '@/lib/i18n';
import { GITHUB_URL } from '@/lib/site';
import type { Locale } from '@/lib/i18n/config';

export function Navbar({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/gallery`, label: dict.nav.gallery },
    { href: `/${locale}/docs`, label: dict.nav.docs },
    { href: `/${locale}/pricing`, label: dict.nav.pricing },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-4 md:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white">
            <Sparkles size={16} />
          </span>
          <span className="text-sm font-medium text-text-primary">
            Codex Skin Studio
          </span>
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-text-primary ${
                isActive(l.href) ? 'text-text-primary' : 'text-text-secondary'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.nav.github}
            className="hidden p-2 text-text-secondary transition-colors hover:text-accent xl:block"
          >
            <Github size={20} />
          </a>
          <LanguageToggle locale={locale} />
          <ThemeToggle
            locale={locale}
            labels={{
              toggleToLight: dict.theme.toggleToLight,
              toggleToDark: dict.theme.toggleToDark,
            }}
          />
          <div className="hidden xl:block">
            <AccountMenu locale={locale} />
          </div>
          <button
            className="p-2 text-text-secondary xl:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg-primary xl:hidden">
          <div className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm ${
                  isActive(l.href) ? 'text-text-primary' : 'text-text-secondary'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-sm text-text-secondary"
            >
              {dict.nav.github}
            </a>
            <div className="py-3">
              <AccountMenu locale={locale} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
