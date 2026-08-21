import type { Metadata } from 'next';
import { CommunitySubmitView } from '@/components/views/CommunitySubmitView';
import type { Locale } from '@/lib/i18n/config';
import { localeAlternates } from '@/lib/seo';

const META: Record<'zh' | 'en', { title: string; description: string }> = {
  zh: { title: '提交你的 Codex 皮肤', description: '把你的 Codex 主题提交给社区，审核通过后展示在社区皮肤列表。' },
  en: { title: 'Submit Your Codex Skin', description: 'Share your Codex theme with the community. Approved skins appear in the community list.' },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return { ...META[locale], alternates: localeAlternates(`/${locale}/community/submit`) };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return <CommunitySubmitView locale={locale} />;
}
