'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { getDict } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import type { Locale } from '@/lib/i18n/config';

type PayPalAction = {
  subscription: {
    create: (options: { plan_id: string }) => Promise<string>;
  };
};

type PayPalActions = {
  subscription: {
    create: (options: { plan_id: string }) => Promise<string>;
  };
};

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        createSubscription: (data: unknown, actions: PayPalActions) => Promise<string>;
        onApprove: (data: { subscriptionID: string }, actions: unknown) => Promise<void>;
        onError: (err: Error) => void;
        style?: Record<string, string>;
      }) => {
        render: (selector: string) => Promise<void>;
      };
    };
  }
}

// PayPal Plan ID 映射——用户在 PayPal Dashboard 创建订阅计划后填入
// 留空时对应方案的 CTA 会提示"即将上线"
const PAYPAL_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? '',
  plans: {
    pro: process.env.NEXT_PUBLIC_PAYPAL_PLAN_PRO ?? '',
    team: process.env.NEXT_PUBLIC_PAYPAL_PLAN_TEAM ?? '',
  } as Record<string, string>,
};

export function PricingView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const { user, signInWithGoogle } = useAuth();
  const plans = dict.pricing.plans;
  const [notice, setNotice] = useState<{ type: 'info' | 'error'; text: string } | null>(null);
  const [paypalLoading, setPaypalLoading] = useState<string | null>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentPlanRef = useRef<string | null>(null);

  // 动态加载 PayPal SDK
  const loadPayPalSDK = useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      if (window.paypal) {
        setSdkLoaded(true);
        resolve();
        return;
      }
      const clientId = PAYPAL_CONFIG.clientId;
      if (!clientId) {
        reject(new Error('PAYPAL_NOT_CONFIGURED'));
        return;
      }
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&vault=true&intent=subscription&locale=${locale === 'zh' ? 'zh_CN' : 'en_US'}`;
      script.async = true;
      script.onload = () => {
        setSdkLoaded(true);
        resolve();
      };
      script.onerror = () => reject(new Error('PayPal SDK 加载失败'));
      document.head.appendChild(script);
    });
  }, [locale]);

  // 渲染 PayPal 按钮到容器
  const renderPayPalButton = useCallback(async (planKey: string) => {
    const planId = PAYPAL_CONFIG.plans[planKey];
    if (!planId || !window.paypal) return;

    // 清空容器
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // 稍等一帧等 DOM 更新
    await new Promise((r) => setTimeout(r, 50));

    window.paypal
      .Buttons({
        createSubscription: (_data, actions) =>
          actions.subscription.create({ plan_id: planId }),
        onApprove: async (data) => {
          // 付款成功，跳转到结果页
          window.location.href = `/${locale}/pricing/result?subscription_id=${data.subscriptionID}`;
        },
        onError: (err) => {
          console.error('PayPal error:', err);
          setNotice({ type: 'error', text: 'PayPal 支付异常，请稍后重试' });
          setPaypalLoading(null);
          currentPlanRef.current = null;
        },
        style: {
          label: 'subscribe',
          shape: 'rect',
          color: 'gold',
        },
      })
      .render('#paypal-button-container');
  }, [locale]);

  const handleSubscribe = async (planKey: string) => {
    setNotice(null);

    // 检查 PayPal 是否已配置
    if (!PAYPAL_CONFIG.clientId || !PAYPAL_CONFIG.plans[planKey]) {
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

    setPaypalLoading(planKey);
    currentPlanRef.current = planKey;

    try {
      await loadPayPalSDK();
      // 用小延迟确保 DOM 就绪
      setTimeout(() => void renderPayPalButton(planKey), 100);
    } catch (e) {
      const msg = e instanceof Error ? e.message : '';
      if (msg === 'PAYPAL_NOT_CONFIGURED') {
        setNotice({ type: 'info', text: dict.pricing.checkoutSoon });
      } else {
        setNotice({ type: 'error', text: '加载支付失败，请刷新重试' });
      }
      setPaypalLoading(null);
      currentPlanRef.current = null;
    }
  };

  // 清除 PayPal 按钮区域
  useEffect(() => {
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

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
          const planKey = plan.name.toLowerCase();
          const isFree = Boolean(plan.free);
          const isLoading = paypalLoading === planKey;

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
                    onClick={() => void handleSubscribe(planKey)}
                    disabled={isLoading && currentPlanRef.current === planKey}
                    className="w-full rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoading && currentPlanRef.current === planKey
                      ? '加载 PayPal...'
                      : plan.ctaLabel}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* PayPal 按钮渲染容器 */}
      {paypalLoading && (
        <div className="mt-8 flex justify-center">
          <div
            id="paypal-button-container"
            ref={containerRef}
            className="w-full max-w-sm"
          />
        </div>
      )}

      <p className="mt-8 text-center text-sm text-text-tertiary">
        {dict.pricing.trust}
      </p>
    </section>
  );
}
