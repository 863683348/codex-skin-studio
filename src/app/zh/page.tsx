import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { getDict } from '@/lib/i18n';

const dict = getDict('zh');

export const metadata: Metadata = {
  title: { absolute: 'Codex Skin Studio' },
  description: dict.home.heroDescription,
  alternates: { languages: { 'zh-CN': '/zh', en: '/en' } },
};

export default function Page() {
  return <HomeView locale="zh" />;
}
