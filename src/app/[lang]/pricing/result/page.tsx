import type { Metadata } from 'next';
import { PaymentResultView } from '@/components/views/PaymentResultView';
import type { Locale } from '@/lib/i18n/config';

const META: Record<'zh' | 'en', { title: string; description: string }> = {
  zh: { title: '支付结果', description: '支付完成或取消' },
  en: { title: 'Payment Result', description: 'Your payment was completed or cancelled.' },
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
  return <PaymentResultView locale={locale} />;
}
