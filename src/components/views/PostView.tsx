import Link from 'next/link';
import { POSTS, type BlogPost } from '@/data/posts';
import type { Locale } from '@/lib/i18n/config';

// content 块类型：段落 / H2 标题 / 列表 / FAQ（details）/ CTA 链接
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
        {post.content[locale].map((block, i) => {
          if (typeof block === 'string') {
            return (
              <p key={i} className="text-body leading-relaxed text-text-secondary">
                {block}
              </p>
            );
          }
          const { type } = block;
          if (type === 'h2') {
            return (
              <h2 key={i} className="pt-4 text-h2 text-text-primary">
                {block.text}
              </h2>
            );
          }
          if (type === 'ul') {
            return (
              <ul key={i} className="list-disc space-y-1 pl-5 text-body leading-relaxed text-text-secondary">
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          }
          if (type === 'faq') {
            return (
              <div key={i} className="space-y-2 pt-2">
                {block.items.map((it, j) => (
                  <details key={j} className="rounded-md border border-border p-3">
                    <summary className="cursor-pointer font-medium text-text-primary">
                      {it.q}
                    </summary>
                    <p className="mt-2 text-body text-text-secondary">{it.a}</p>
                  </details>
                ))}
              </div>
            );
          }
          if (type === 'cta') {
            return (
              <div key={i} className="rounded-md bg-bg-surface p-4 text-center">
                <Link
                  href={block.href}
                  className="inline-block rounded-md bg-accent px-5 py-2 font-medium text-white hover:bg-accent-hover"
                >
                  {block.text}
                </Link>
              </div>
            );
          }
          return (
            <p key={i} className="text-body leading-relaxed text-text-secondary">
              {JSON.stringify(block)}
            </p>
          );
        })}
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
