import type { Metadata } from 'next';
import { AboutView } from '@/components/views/AboutView';
import type { Locale } from '@/lib/i18n/config';

const META: Record<'zh' | 'en', { title: string; description: string }> = {
  zh: {
    title: '关于 Codex Skin Studio',
    description:
      'Codex Skin Studio 是一个开源、非侵入式的 Codex 桌面端换肤项目：基于本机 CDP 注入，不修改官方文件，MIT 可审计。',
  },
  en: {
    title: 'About Codex Skin Studio',
    description:
      'Codex Skin Studio is an open-source, non-intrusive skinning project for the Codex desktop app — local CDP injection, no official files modified, MIT-licensed and auditable.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return {
    ...META[locale],
    alternates: { languages: { 'zh-CN': '/zh/about', en: '/en/about' } },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return <AboutView locale={locale} />;
}
