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
        ? { absolute: 'Codex Skin Studio — Free & Premium Codex Themes for the Codex Desktop App' }
        : { absolute: 'Codex 桌面端换肤工具 | Codex Skin Studio' },
    description:
      locale === 'en'
        ? 'Skin the Codex desktop app with 8+ free Codex themes. Local CDP loopback injection — no app.asar changes, no signature breakage. macOS & Windows, one-click restore. Pro from $5.99/mo.'
        : dict.home.heroDescription,
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
