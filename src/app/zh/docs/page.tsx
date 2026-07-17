import type { Metadata } from 'next';
import { DocsView } from '@/components/views/DocsView';
import { getDict } from '@/lib/i18n';

const dict = getDict('zh');

export const metadata: Metadata = {
  title: dict.docs.title,
  description: dict.docs.description,
  alternates: { languages: { 'zh-CN': '/zh/docs', en: '/en/docs' } },
};

export default function Page() {
  return <DocsView locale="zh" />;
}
