import Link from 'next/link';
import { POSTS, type BlogPost } from '@/data/posts';
import type { Locale } from '@/lib/i18n/config';

export function PostView({ locale, post }: { locale: Locale; post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-8">
      <Link
        href={`/${locale}/blog`}
        className="text-small text-accent hover:text-accent-hover hover:underline"
      >
        ← {locale === 'zh' ? '返回博客' : 'Back to Blog'}
      </Link>
      <h1 className="mt-4 text-h1 text-text-primary">{post.title[locale]}</h1>
      <p className="mt-2 text-sm text-text-tertiary">{post.date}</p>
      <div className="mt-8 space-y-4">
        {post.content[locale].map((para, i) => (
          <p key={i} className="text-body leading-relaxed text-text-secondary">
            {para}
          </p>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-4 border-t border-border pt-6">
        {POSTS.filter((p) => p.slug !== post.slug)
          .slice(0, 2)
          .map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/blog/${p.slug}`}
              className="max-w-xs text-small text-accent hover:text-accent-hover hover:underline"
            >
              {p.title[locale]}
            </Link>
          ))}
      </div>
    </article>
  );
}
