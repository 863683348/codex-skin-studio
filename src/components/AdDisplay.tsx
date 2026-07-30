'use client';

import { useEffect, useRef } from 'react';

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? '';

type AdFormat = 'auto' | 'rectangle' | 'horizontal' | 'vertical';

interface AdDisplayProps {
  /** 广告位样式: auto=自适应, rectangle=矩形(300x250), horizontal=横幅(728x90), vertical=竖幅(160x600) */
  format?: AdFormat;
  /** 自定义 className */
  className?: string;
  /** 广告位唯一标识（同一页面用同一 slot 会合并） */
  slot?: string;
}

const formatStyles: Record<AdFormat, React.CSSProperties> = {
  auto: { display: 'block' },
  rectangle: { display: 'inline-block', width: 300, height: 250 },
  horizontal: { display: 'inline-block', width: 728, height: 90 },
  vertical: { display: 'inline-block', width: 160, height: 600 },
};

export function AdDisplay({ format = 'auto', className, slot }: AdDisplayProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!ADSENSE_CLIENT) return;
    // 防止重复 push
    if (initialized.current) return;
    initialized.current = true;

    try {
      // adsbygoogle 可能还没有加载完成，用小延迟
      const timer = setTimeout(() => {
        // @ts-expect-error - AdSense 全局变量
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, 100);
      return () => clearTimeout(timer);
    } catch {
      // 静默失败，AdSense 未加载不影响页面
    }
  }, []);

  if (!ADSENSE_CLIENT) return null;

  return (
    <div className={`flex justify-center ${className ?? ''}`}>
      <ins
        className="adsbygoogle"
        style={formatStyles[format]}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot ?? undefined}
        data-ad-format={format === 'auto' ? 'auto' : undefined}
        data-full-width-responsive={format === 'auto' ? 'true' : undefined}
      />
    </div>
  );
}
