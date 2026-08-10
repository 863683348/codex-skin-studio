import Link from 'next/link';
import { POSTS } from '@/data/posts';
import type { Locale } from '@/lib/i18n/config';

export function BlogView({ locale }: { locale: Locale }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-8">
      <h1 className="text-h1 text-text-primary">
        {locale === 'zh' ? '博客' : 'Blog'}
      </h1>
      <p className="mt-2 text-body text-text-secondary">
        {locale === 'zh'
          ? '换肤技巧、产品更新与 Codex 生态观察'
          : 'Theming tips, product updates, and Codex ecosystem notes'}
      </p>
      <div className="mt-8 space-y-6">
        {[...POSTS]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-border bg-bg-secondary p-6 transition-colors hover:border-border-hover"
          >
            <Link href={`/${locale}/blog/${post.slug}`}>
              <h2 className="text-h3 text-text-primary transition-colors hover:text-accent">
                {post.title[locale]}
              </h2>
            </Link>
            <p className="mt-1 text-xs text-text-tertiary">{post.date}</p>
            <p className="mt-3 text-body text-text-secondary">{post.description[locale]}</p>
            <Link
              href={`/${locale}/blog/${post.slug}`}
              className="mt-3 inline-block text-small text-accent hover:text-accent-hover hover:underline"
            >
              {locale === 'zh' ? '阅读全文 →' : 'Read more →'}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
