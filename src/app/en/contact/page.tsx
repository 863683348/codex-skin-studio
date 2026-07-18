import type { Metadata } from 'next';
import { ContactView } from '@/components/views/ContactView';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have questions or suggestions? We\'d love to hear from you.',
};

export default function EnContactPage() {
  return <ContactView locale="en" />;
}
