'use client';

import { useState } from 'react';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';
import type { ThemePreset } from '@/data/themes';

export function ThemePreview({
  theme,
  locale,
}: {
  theme: ThemePreset;
  locale: Locale;
}) {
  const dict = getDict(locale);
  const [dark, setDark] = useState(false);
  const lightLabel = locale === 'zh' ? '亮色' : 'Light';
  const darkLabel = locale === 'zh' ? '暗色' : 'Dark';
  // 优先级：合成预览图 > 主题背景图 > 渐变 fallback
  const bg = theme.previewUrl
    ? { backgroundImage: `url("${theme.previewUrl}")`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : theme.imageUrl
      ? { backgroundImage: `url("${theme.imageUrl}")`, backgroundSize: 'cover', backgroundPosition: '72% 45%' }
      : { background: theme.gradient };

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
      <div className="absolute inset-0" style={bg} />
      <div
        className={`absolute inset-0 bg-bg-primary transition-opacity duration-crossfade ${
          dark ? 'opacity-55' : 'opacity-0'
        }`}
      />
      <div className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-2 rounded-pill bg-black/30 p-1 backdrop-blur">
        <button
          onClick={() => setDark(false)}
          className={`rounded-pill px-3 py-1 text-small transition-colors ${
            !dark ? 'bg-accent text-white' : 'text-white'
          }`}
        >
          {lightLabel}
        </button>
        <button
          onClick={() => setDark(true)}
          className={`rounded-pill px-3 py-1 text-small transition-colors ${
            dark ? 'bg-accent text-white' : 'text-white'
          }`}
        >
          {darkLabel}
        </button>
      </div>
    </div>
  );
}
