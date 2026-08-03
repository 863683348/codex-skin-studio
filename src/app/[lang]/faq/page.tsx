import type { Metadata } from 'next';
import { FaqView } from '@/components/views/FaqView';
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
    title: locale === 'zh' ? '常见问题' : 'FAQ',
    description:
      locale === 'zh'
        ? 'Codex Skin Studio 安装、激活、主题与退款常见问题'
        : 'Frequently asked questions about Codex Skin Studio',
    alternates: localeAlternates(`/${locale}/faq`),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return <FaqView locale={locale} />;
}
