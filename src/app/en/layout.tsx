import { SiteChrome } from '@/components/SiteChrome';
import { SetHtmlLang } from '@/components/SetHtmlLang';

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SetHtmlLang locale="en" />
      <SiteChrome locale="en">{children}</SiteChrome>
    </>
  );
}
