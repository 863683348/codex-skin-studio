import { Github, Mail } from 'lucide-react';
import { getDict } from '@/lib/i18n';
import { GITHUB_URL } from '@/lib/site';
import type { Locale } from '@/lib/i18n/config';

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-4 py-12 md:flex-row md:px-8">
        <div className="text-sm text-text-tertiary">
          {dict.footer.copyright}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-text-tertiary">
            {dict.footer.madeWith}
          </span>
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
