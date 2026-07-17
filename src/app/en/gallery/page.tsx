import type { Metadata } from 'next';
import { GalleryView } from '@/components/views/GalleryView';
import { getDict } from '@/lib/i18n';

const dict = getDict('en');

export const metadata: Metadata = {
  title: dict.gallery.title,
  description: dict.gallery.description,
  alternates: { languages: { 'zh-CN': '/zh/gallery', en: '/en/gallery' } },
};

export default function Page() {
  return <GalleryView locale="en" />;
}
