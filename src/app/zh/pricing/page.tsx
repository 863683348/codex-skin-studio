import type { Metadata } from 'next';
import { PricingView } from '@/components/views/PricingView';

export const metadata: Metadata = {
  title: '定价',
  description: 'Codex Skin Studio 定价方案：Free / Pro / Team，随时升级。',
};

export default function ZhPricingPage() {
  return <PricingView locale="zh" />;
}
