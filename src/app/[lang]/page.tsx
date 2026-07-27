import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
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
    title:
      locale === 'en'
        ? { absolute: 'Codex Skin Studio' }
        : { absolute: 'Codex 桌面端换肤工具 | Codex Skin Studio' },
    description: dict.home.heroDescription,
    alternates: { languages: { 'zh-CN': '/zh', en: '/en' } },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return <HomeView locale={locale} />;
}
