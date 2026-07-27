import Link from 'next/link';
import type { Metadata } from 'next';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function NotFound({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'en' ? 'en' : 'zh';
  const dict = getDict(locale);
  return (
    <div className="mx-auto flex max-w-container flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="text-[96px] font-semibold leading-none text-text-tertiary">
        404
      </h1>
      <p className="mt-2 text-h3 text-text-secondary">
        {dict.error.notFoundDesc}
      </p>
      <Link
        href={locale === 'en' ? '/en' : '/zh'}
        className="mt-6 rounded-md bg-accent px-6 py-3 text-body font-medium text-white transition-colors hover:bg-accent-hover"
      >
        {dict.error.backHome}
      </Link>
    </div>
  );
}
