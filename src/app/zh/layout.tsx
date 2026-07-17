import { SiteChrome } from '@/components/SiteChrome';

export default function ZhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteChrome locale="zh">{children}</SiteChrome>;
}
