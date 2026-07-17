import type { Metadata } from 'next';
import { PricingView } from '@/components/views/PricingView';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Codex Skin Studio pricing: Free / Pro / Team, upgrade anytime.',
};

export default function EnPricingPage() {
  return <PricingView locale="en" />;
}
