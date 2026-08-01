'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle, KeyRound, Mail } from 'lucide-react';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export function PaymentResultView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [status, setStatus] = useState<'success' | 'cancel' | 'loading'>('loading');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('canceled') === 'true') {
      setStatus('cancel');
    } else if (params.get('session_id') || params.get('subscription_id') || params.get('token')) {
      setStatus('success');
    } else {
      setStatus('cancel');
    }
  }, []);

  if (status === 'loading') {
    return (
      <section className="mx-auto max-w-container px-4 py-24 text-center">
        <p className="text-text-secondary">{dict.paymentResult.loading}</p>
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
          {isSuccess ? dict.paymentResult.successTitle : dict.paymentResult.cancelTitle}
        </h1>

        <p className="mt-2 text-text-secondary">
          {isSuccess ? dict.paymentResult.successDesc : dict.paymentResult.cancelDesc}
        </p>

        {isSuccess && (
          <div className="mt-8 rounded-xl border border-border bg-bg-secondary p-6 text-left">
            <div className="flex items-center gap-2">
              <KeyRound size={18} className="text-accent" />
              <h2 className="text-sm font-medium text-text-primary">
                {dict.paymentResult.keyTitle}
              </h2>
            </div>
            <ol className="mt-4 space-y-2">
              {dict.paymentResult.keySteps.map((step, i) => (
                <li key={step} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 rounded-lg bg-bg-tertiary p-3 text-xs leading-relaxed text-text-tertiary">
              {dict.paymentResult.keyNote}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            {dict.paymentResult.browseThemes}
          </Link>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent"
          >
            {dict.paymentResult.backHome}
          </Link>
          <a
            href={`mailto:${dict.contact.email}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent"
          >
            <Mail size={15} />
            {dict.paymentResult.contactUs}
          </a>
        </div>
      </div>
    </section>
  );
}
