'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle } from 'lucide-react';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export function PaymentResultView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [status, setStatus] = useState<'success' | 'cancel' | 'loading'>('loading');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('canceled') === 'true') {
      setStatus('cancel');
    } else if (params.get('session_id')) {
      setStatus('success');
    } else {
      setStatus('cancel');
    }
  }, []);

  if (status === 'loading') {
    return (
      <section className="mx-auto max-w-container px-4 py-24 text-center">
        <p className="text-text-secondary">加载中...</p>
      </section>
    );
  }

  const isSuccess = status === 'success';

  return (
    <section className="mx-auto max-w-container px-4 py-24 text-center">
      <div className="mx-auto max-w-md">
        {isSuccess ? (
          <CheckCircle2 size={64} className="mx-auto text-green-500" />
        ) : (
          <XCircle size={64} className="mx-auto text-text-tertiary" />
        )}

        <h1 className="mt-6 text-2xl font-semibold text-text-primary">
          {isSuccess ? '支付成功！' : '支付已取消'}
        </h1>

        <p className="mt-2 text-text-secondary">
          {isSuccess
            ? '感谢你的订阅！你的 Pro/Team 权益已激活。'
            : '支付未完成，订单未产生任何费用。随时可以回来升级。'}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            浏览主题
          </Link>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent"
          >
            返回首页
          </Link>
        </div>
      </div>
    </section>
  );
}
