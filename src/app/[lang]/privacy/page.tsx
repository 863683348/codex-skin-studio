import type { Metadata } from 'next';
import { LegalView } from '@/components/views/LegalView';
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
    title: locale === 'zh' ? '隐私政策' : 'Privacy Policy',
    alternates: localeAlternates(`/${locale}/privacy`),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return (
    <LegalView
      locale={locale}
      kind="privacy"
      title={locale === 'zh' ? '隐私政策' : 'Privacy Policy'}
    />
  );
}
