import type { Metadata } from 'next';
import { GuidesHubView } from '@/components/views/GuidesHubView';
import type { Locale } from '@/lib/i18n/config';

const META: Record<'zh' | 'en', { title: string; description: string }> = {
  zh: {
    title: '使用指南',
    description:
      '从安装、安全到自定义，Codex Skin Studio 的完整使用教程合集：Windows/macOS 安装、安全性解析、主题推荐与自定义方法。',
  },
  en: {
    title: 'Guides',
    description:
      'Complete Codex Skin Studio tutorials — Windows/macOS install, safety explainer, best themes, and how to customize your Codex UI.',
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
    alternates: { languages: { 'zh-CN': '/zh/guides', en: '/en/guides' } },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  return <GuidesHubView locale={locale} />;
}
