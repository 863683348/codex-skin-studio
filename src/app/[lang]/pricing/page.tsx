import type { Metadata } from 'next';
import { PricingView } from '@/components/views/PricingView';
import type { Locale } from '@/lib/i18n/config';

const META: Record<'zh' | 'en', { title: string; description: string }> = {
  zh: { title: '定价', description: 'Codex Skin Studio 定价方案：Free / Pro / Team，随时升级。' },
  en: { title: 'Pricing', description: 'Codex Skin Studio pricing: Free / Pro / Team, upgrade anytime.' },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return META[locale];
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return <PricingView locale={locale} />;
}
