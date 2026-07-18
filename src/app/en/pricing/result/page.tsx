import type { Metadata } from 'next';
import { PaymentResultView } from '@/components/views/PaymentResultView';

export const metadata: Metadata = {
  title: 'Payment Result',
  description: 'Payment completed or canceled',
};

export default function EnPaymentResultPage() {
  return <PaymentResultView locale="en" />;
}
