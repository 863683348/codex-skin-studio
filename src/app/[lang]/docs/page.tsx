import type { Metadata } from 'next';
import { DocsView } from '@/components/views/DocsView';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const dict = getDict(locale);
  return {
    title: dict.docs.title,
    description: dict.docs.description,
    alternates: { languages: { 'zh-CN': '/zh/docs', en: '/en/docs' } },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return <DocsView locale={locale} />;
}
