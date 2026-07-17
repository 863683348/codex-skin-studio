'use client';

import { usePathname, useRouter } from 'next/navigation';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const target: Locale = locale === 'zh' ? 'en' : 'zh';
  const label = locale === 'zh' ? 'EN' : '中';

  const switchTo = () => {
    const segments = pathname.split('/');
    if (segments[1] === locale) segments[1] = target;
    const next = segments.join('/') || `/${target}`;
    router.push(next);
  };

  return (
    <button
      onClick={switchTo}
      aria-label={getDict(locale).lang.switch}
      className="px-2 py-1 text-sm text-text-secondary transition-colors hover:text-accent"
    >
      {label}
    </button>
  );
}
