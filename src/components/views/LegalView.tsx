import { PRIVACY, TERMS } from '@/data/legal';
import type { Locale } from '@/lib/i18n/config';

export function LegalView({
  locale,
  kind,
  title,
}: {
  locale: Locale;
  kind: 'privacy' | 'terms';
  title: string;
}) {
  const doc = kind === 'privacy' ? PRIVACY[locale] : TERMS[locale];
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-8">
      <h1 className="text-h1 text-text-primary">{title}</h1>
      <p className="mt-2 text-sm text-text-tertiary">
        {locale === 'zh' ? `最后更新：${doc.updated}` : `Last updated: ${doc.updated}`}
      </p>
      <div className="mt-8 space-y-8">
        {doc.sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-h3 text-text-primary">{s.title}</h2>
            <div className="mt-2 space-y-2">
              {s.body.map((p, i) => (
                <p key={i} className="whitespace-pre-line text-body text-text-secondary">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
