import { zh } from './locales/zh';
import { en } from './locales/en';
import { defaultLocale, type Locale } from './config';
import type { Dict } from './locales/zh';

const dictionaries = { zh, en } as const;

export type { Dict };

export function getDict(locale: string): Dict {
  if (locale === 'en') return en;
  return zh;
}

export function t(locale: string) {
  const dict = getDict(locale);
  return dict;
}

export { defaultLocale };
export type { Locale };
