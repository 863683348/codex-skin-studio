import type { Metadata } from 'next';
import { BlogView } from '@/components/views/BlogView';
import { localeAlternates } from '@/lib/seo';
import type { Locale } from '@/lib/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return {
    title: locale === 'zh' ? '博客 - Codex Skin Studio' : 'Blog - Codex Skin Studio',
    description:
      locale === 'zh'
        ? '换肤技巧、产品更新与 Codex 生态观察'
        : 'Theming tips, product updates, and Codex ecosystem notes',
    alternates: localeAlternates(`/${locale}/blog`),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return <BlogView locale={locale} />;
}
