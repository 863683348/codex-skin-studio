import { FAQ_ITEMS } from '@/data/faq';
import type { Locale } from '@/lib/i18n/config';

export function FaqView({ locale }: { locale: Locale }) {
  const items = FAQ_ITEMS[locale];
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-8">
      <h1 className="text-h1 text-text-primary">
        {locale === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
      </h1>
      <p className="mt-2 text-body text-text-secondary">
        {locale === 'zh'
          ? '安装、激活、主题与退款相关的高频问题'
          : 'Common questions about installing, activating, themes, and refunds'}
      </p>
      <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-bg-secondary">
        {items.map((item, i) => (
          <details key={i} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-body font-medium text-text-primary">
              {item.q}
              <span className="ml-4 shrink-0 text-text-tertiary transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-body text-text-secondary">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
