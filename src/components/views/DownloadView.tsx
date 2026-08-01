'use client';

import { Download, Monitor, Apple, ShieldCheck, FileCode2 } from 'lucide-react';
import { getDict } from '@/lib/i18n';
import { DOWNLOADS } from '@/lib/downloads';
import type { Locale } from '@/lib/i18n/config';

export function DownloadView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <div className="mx-auto max-w-container px-4 py-12 md:px-8">
      <h1 className="text-h1 text-text-primary">{dict.download.title}</h1>
      <p className="mt-2 text-body text-text-secondary">{dict.download.description}</p>
      <p className="mt-2 text-caption text-text-tertiary">{dict.download.version}</p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Windows */}
        <div className="rounded-lg border border-border bg-bg-secondary p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-white">
              <Monitor size={22} />
            </span>
            <div>
              <h2 className="text-h2 text-text-primary">Windows</h2>
              <p className="text-caption text-text-tertiary">{DOWNLOADS.windows.size} · {dict.download.installer}</p>
            </div>
          </div>
          <p className="mt-4 text-small text-text-secondary">{dict.download.windowsDesc}</p>
          <a
            href={DOWNLOADS.windows.file}
            download
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-body font-medium text-white transition-colors hover:bg-accent-hover"
          >
            <Download size={18} />
            {dict.download.downloadWindows}
          </a>
          <div className="mt-4 flex items-start gap-2 text-caption text-text-tertiary">
            <ShieldCheck size={14} className="mt-0.5 shrink-0 text-emerald-500" />
            <span>
              SHA256: <code className="break-all">{DOWNLOADS.windows.sha256}</code>
            </span>
          </div>
        </div>

        {/* macOS */}
        <div className="rounded-lg border border-border bg-bg-secondary p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-white">
              <Apple size={22} />
            </span>
            <div>
              <h2 className="text-h2 text-text-primary">macOS</h2>
              <p className="text-caption text-text-tertiary">{DOWNLOADS.macos.size} · {dict.download.dmg}</p>
            </div>
          </div>
          <p className="mt-4 text-small text-text-secondary">{dict.download.macosDesc}</p>
          <a
            href={DOWNLOADS.macos.file}
            download
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-body font-medium text-text-primary transition-colors hover:border-border-hover"
          >
            <Download size={18} />
            {dict.download.downloadMacos}
          </a>
          <div className="mt-4 flex items-start gap-2 text-caption text-text-tertiary">
            <ShieldCheck size={14} className="mt-0.5 shrink-0 text-emerald-500" />
            <span>
              SHA256: <code className="break-all">{DOWNLOADS.macos.sha256}</code>
            </span>
          </div>
        </div>
      </div>

      {/* 安装说明 */}
      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border p-6">
          <h3 className="flex items-center gap-2 text-h3 text-text-primary">
            <FileCode2 size={18} className="text-accent" /> {dict.download.windowsInstallTitle}
          </h3>
          <ol className="mt-4 space-y-2 text-small text-text-secondary">
            {dict.download.windowsInstallSteps.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-bold text-accent">{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-lg border border-border p-6">
          <h3 className="flex items-center gap-2 text-h3 text-text-primary">
            <Apple size={18} className="text-accent" /> {dict.download.macosInstallTitle}
          </h3>
          <ol className="mt-4 space-y-2 text-small text-text-secondary">
            {dict.download.macosInstallSteps.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-bold text-accent">{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
