import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailView } from '@/components/views/DetailView';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';
import { themes, getThemeById } from '@/data/themes';

export const dynamicParams = false;

export function generateStaticParams() {
  return themes.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const theme = getThemeById(id);
  if (!theme) return {};
  return {
    title: locale === 'en' ? theme.name.en : theme.name.zh,
    description: locale === 'en' ? theme.description.en : theme.description.zh,
    alternates: {
      languages: { 'zh-CN': `/zh/gallery/${id}`, en: `/en/gallery/${id}` },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const theme = getThemeById(id);
  if (!theme) notFound();
  return <DetailView theme={theme} locale={locale} />;
}
