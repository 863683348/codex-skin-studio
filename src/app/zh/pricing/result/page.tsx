import type { Metadata } from 'next';
import { PaymentResultView } from '@/components/views/PaymentResultView';

export const metadata: Metadata = {
  title: '支付结果',
  description: '支付完成或取消',
};

export default function ZhPaymentResultPage() {
  return <PaymentResultView locale="zh" />;
}
