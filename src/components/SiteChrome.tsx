import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AuthProvider } from '@/lib/auth';
import type { Locale } from '@/lib/i18n/config';

export function SiteChrome({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </div>
    </AuthProvider>
  );
}
