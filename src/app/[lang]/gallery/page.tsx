import type { Metadata } from 'next';
import { GalleryView } from '@/components/views/GalleryView';
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
    title: dict.gallery.title,
    description: dict.gallery.description,
    alternates: { languages: { 'zh-CN': '/zh/gallery', en: '/en/gallery' } },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return <GalleryView locale={locale} />;
}
