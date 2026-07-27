import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuideView } from '@/components/views/GuideView';
import { guides, getGuide } from '@/data/guides';
import type { Locale } from '@/lib/i18n/config';

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: locale === 'en' ? guide.en.metaTitle : guide.zh.metaTitle,
    description: locale === 'en' ? guide.en.metaDescription : guide.zh.metaDescription,
    alternates: {
      languages: { 'zh-CN': `/zh/guides/${slug}`, en: `/en/guides/${slug}` },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideView guide={guide} locale={locale} />;
}
