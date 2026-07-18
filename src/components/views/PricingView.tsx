'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Loader2 } from 'lucide-react';
import { getDict } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import type { Locale } from '@/lib/i18n/config';

// Stripe Price ID 映射——用户在 Stripe Dashboard 创建商品后填入这里
// 格式: stripe/price_xxxx
// 留空时对应方案的 CTA 会提示"即将上线"
const STRIPE_PRICE_IDS: Record<string, string> = {
  pro: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO ?? '',
  team: process.env.NEXT_PUBLIC_STRIPE_PRICE_TEAM ?? '',
};

export function PricingView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const { user, signInWithGoogle } = useAuth();
  const plans = dict.pricing.plans;
  const [notice, setNotice] = useState<{ type: 'info' | 'error'; text: string } | null>(null);
  const [loading, setLoading] = useState<string | null>(null); // plan key being processed

  const handlePaid = async (planKey: string) => {
    setNotice(null);

    // 检查是否配置了 Stripe Price ID
    const priceId = STRIPE_PRICE_IDS[planKey];
    if (!priceId) {
      setNotice({ type: 'info', text: dict.pricing.checkoutSoon });
      return;
    }

    // 未登录先登录
    if (!user) {
      const res = await signInWithGoogle();
      if (!res.ok) {
        setNotice({
          type: 'error',
          text:
            res.error === 'FIREBASE_NOT_CONFIGURED'
              ? dict.auth.notConfigured
              : dict.auth.loginFailed,
        });
        return;
      }
    }

    // 登录完后调用 Stripe API
    setLoading(planKey);
    try {
      const resp = await fetch('/api/checkout/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId,
          userId: user?.uid,
          locale,
        }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: 'Unknown error' }));
        if (err.error === 'STRIPE_NOT_CONFIGURED') {
          setNotice({ type: 'info', text: dict.pricing.checkoutSoon });
          return;
        }
        throw new Error(err.error);
      }

      const data = await resp.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error('Checkout error:', e);
      setNotice({ type: 'error', text: dict.pricing.checkoutError ?? '结账服务异常，请稍后重试' });
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="mx-auto max-w-container px-4 py-12 md:px-8">
      <header className="pb-6 text-center">
        <h1 className="text-3xl font-semibold text-text-primary">
          {dict.pricing.title}
        </h1>
        <p className="mt-2 text-base font-normal text-text-secondary">
          {dict.pricing.subtitle}
        </p>
      </header>

      {notice && (
        <p
          className={`mx-auto mb-6 max-w-container rounded-lg border px-4 py-3 text-center text-sm ${
            notice.type === 'error'
              ? 'border-red-200 bg-red-50 text-red-700'
              : 'border-border bg-bg-secondary text-text-secondary'
          }`}
        >
          {notice.text}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const isRecommended = Boolean(plan.highlighted);
          const planKey = plan.name.toLowerCase(); // 'free' | 'pro' | 'team'
          const isFree = Boolean(plan.free);
          const isLoading = loading === planKey;

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border bg-bg-secondary p-8 ${
                isRecommended ? 'border-accent' : 'border-border'
              }`}
            >
              {isRecommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  {dict.pricing.recommended}
                </span>
              )}
              <h2 className="text-xl font-medium text-text-primary">{plan.name}</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-text-tertiary">{plan.period}</span>
              </div>
              <div className="my-6 h-px bg-border" />
              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {isFree ? (
                  <Link
                    href={`/${locale}/gallery`}
                    className="block w-full rounded-lg border border-border bg-bg-tertiary py-2.5 text-center text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    {plan.ctaLabel}
                  </Link>
                ) : (
                  <button
                    onClick={() => void handlePaid(planKey)}
                    disabled={isLoading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoading && <Loader2 size={16} className="animate-spin" />}
                    {isLoading ? '处理中...' : plan.ctaLabel}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-text-tertiary">
        {dict.pricing.trust}
      </p>
    </section>
  );
}
