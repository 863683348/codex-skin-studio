import type { Metadata } from 'next';
import { ContactView } from '@/components/views/ContactView';
import type { Locale } from '@/lib/i18n/config';

const META: Record<'zh' | 'en', { title: string; description: string }> = {
  zh: { title: '联系我们', description: '有任何问题或建议？欢迎来信。' },
  en: { title: 'Contact Us', description: "Have questions or suggestions? We'd love to hear from you." },
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
  return <ContactView locale={locale} />;
}
