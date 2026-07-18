'use client';

import { Mail, MessageSquare, Clock } from 'lucide-react';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export function ContactView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section className="mx-auto max-w-container px-4 py-12 md:px-8">
      <header className="pb-8 text-center">
        <h1 className="text-3xl font-semibold text-text-primary">
          {dict.contact.title}
        </h1>
        <p className="mt-2 text-base font-normal text-text-secondary">
          {dict.contact.subtitle}
        </p>
      </header>

      <div className="mx-auto max-w-md">
        <div className="rounded-xl border border-border bg-bg-secondary p-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <Mail size={28} className="text-accent" />
            </div>

            <a
              href={`mailto:${dict.contact.email}`}
              className="text-lg font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {dict.contact.email}
            </a>

            <p className="text-sm text-text-secondary">
              {dict.contact.emailLabel}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-text-tertiary">
              <Clock size={14} />
              <span>{dict.contact.response}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
