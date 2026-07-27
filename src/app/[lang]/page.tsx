import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';
import { localeAlternates } from '@/lib/seo';

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
    alternates: localeAlternates(`/${locale}`),
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
