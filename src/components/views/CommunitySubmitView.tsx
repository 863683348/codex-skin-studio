'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Loader2, Send } from 'lucide-react';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';

export function CommunitySubmitView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [nameEn, setNameEn] = useState('');
  const [nameZh, setNameZh] = useState('');
  const [repo, setRepo] = useState('');
  const [url, setUrl] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nameEn.trim() || !url.trim()) {
      setErrorMsg(dict.community.submitRequired);
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/community/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nameEn, nameZh, repo, url, color, description }),
      });
      if (res.status === 429) {
        setErrorMsg(dict.community.submitRateLimit);
        setStatus('error');
        return;
      }
      if (!res.ok) {
        setErrorMsg(dict.community.submitError);
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch {
      setErrorMsg(dict.community.submitError);
      setStatus('error');
    }
  }

  const inputCls =
    'w-full rounded-lg border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-accent';
  const labelCls = 'mb-1.5 block text-sm font-medium text-text-secondary';

  return (
    <section className="mx-auto max-w-container px-4 py-12 md:px-8">
      <header className="pb-8 text-center">
        <h1 className="text-3xl font-semibold text-text-primary">
          {dict.community.submitTitle}
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-base font-normal text-text-secondary">
          {dict.community.submitDesc}
        </p>
      </header>

      <div className="mx-auto max-w-lg">
        {status === 'success' ? (
          <div className="rounded-xl border border-border bg-bg-secondary p-8 text-center">
            <CheckCircle2 size={40} className="mx-auto text-accent" />
            <p className="mt-4 text-base font-medium text-text-primary">
              {dict.community.submitSuccess}
            </p>
            <Link
              href={`/${locale}/gallery`}
              className="mt-6 inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <ArrowLeft size={16} />
              {dict.community.backToGallery}
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-bg-secondary p-8"
          >
            <div className="space-y-5">
              <div>
                <label className={labelCls} htmlFor="nameEn">
                  {dict.community.submitNameEn} <span className="text-accent">*</span>
                </label>
                <input
                  id="nameEn"
                  className={inputCls}
                  placeholder={dict.community.submitNameEnPh}
                  value={nameEn}
                  onChange={(e) => setNameEn(e.target.value)}
                  maxLength={80}
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="nameZh">
                  {dict.community.submitNameZh}
                </label>
                <input
                  id="nameZh"
                  className={inputCls}
                  placeholder={dict.community.submitNameZhPh}
                  value={nameZh}
                  onChange={(e) => setNameZh(e.target.value)}
                  maxLength={80}
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="url">
                  {dict.community.submitUrl} <span className="text-accent">*</span>
                </label>
                <input
                  id="url"
                  type="url"
                  className={inputCls}
                  placeholder={dict.community.submitUrlPh}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  maxLength={500}
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="repo">
                  {dict.community.submitRepo}
                </label>
                <input
                  id="repo"
                  className={inputCls}
                  placeholder={dict.community.submitRepoPh}
                  value={repo}
                  onChange={(e) => setRepo(e.target.value)}
                  maxLength={200}
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="color">
                  {dict.community.submitColor}
                </label>
                <input
                  id="color"
                  className={inputCls}
                  placeholder={dict.community.submitColorPh}
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  maxLength={16}
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="description">
                  {dict.community.submitDescLabel}
                </label>
                <textarea
                  id="description"
                  className={`${inputCls} min-h-[80px] resize-y`}
                  placeholder={dict.community.submitDescPh}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={300}
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {dict.community.submitCta}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
