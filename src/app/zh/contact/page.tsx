import type { Metadata } from 'next';
import { ContactView } from '@/components/views/ContactView';

export const metadata: Metadata = {
  title: '联系我们',
  description: '有任何问题或建议？欢迎来信。',
};

export default function ZhContactPage() {
  return <ContactView locale="zh" />;
}
