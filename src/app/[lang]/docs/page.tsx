import type { Metadata } from 'next';
import { DocsView } from '@/components/views/DocsView';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';
import { localeAlternates } from '@/lib/seo';

// Force dynamic rendering (DocsView uses 'use client')
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 3600;

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
    alternates: localeAlternates(`/${locale}/docs`),
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
