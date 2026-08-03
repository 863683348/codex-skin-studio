import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostView } from '@/components/views/PostView';
import { POSTS } from '@/data/posts';
import { localeAlternates } from '@/lib/seo';
import type { Locale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return POSTS.flatMap((p) => [{ lang: 'zh', slug: p.slug }, { lang: 'en', slug: p.slug }]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.title[locale],
    description: post.description[locale],
    alternates: localeAlternates(`/${locale}/blog/${post.slug}`),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  return <PostView locale={locale} post={post} />;
}
