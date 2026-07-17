'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { getDict } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';
import { CHECKOUT_URL } from '@/lib/site';
import type { Locale } from '@/lib/i18n/config';

export function PricingView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const { user, signInWithGoogle } = useAuth();
  const plans = dict.pricing.plans;
  const [notice, setNotice] = useState<string | null>(null);

  const handlePaid = async () => {
    setNotice(null);
    if (!user) {
      const res = await signInWithGoogle();
      if (!res.ok) {
        setNotice(
          res.error === 'FIREBASE_NOT_CONFIGURED'
            ? dict.auth.notConfigured
            : dict.auth.loginFailed,
        );
        return;
      }
    }
    if (CHECKOUT_URL) {
      window.location.href = CHECKOUT_URL;
      return;
    }
    setNotice(dict.pricing.checkoutSoon);
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
        <p className="mx-auto mb-6 max-w-container rounded-lg border border-border bg-bg-secondary px-4 py-3 text-center text-sm text-text-secondary">
          {notice}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const isRecommended = Boolean(plan.highlighted);
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
                {plan.free ? (
                  <Link
                    href={`/${locale}/gallery`}
                    className="block w-full rounded-lg border border-border bg-bg-tertiary py-2.5 text-center text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    {plan.ctaLabel}
                  </Link>
                ) : (
                  <button
                    onClick={() => void handlePaid()}
                    className="block w-full rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                  >
                    {plan.ctaLabel}
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
