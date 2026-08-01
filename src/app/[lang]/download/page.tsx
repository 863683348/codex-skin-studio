import type { Metadata } from 'next';
import { DownloadView } from '@/components/views/DownloadView';
import { DOWNLOADS } from '@/lib/downloads';
import type { Locale } from '@/lib/i18n/config';
import { localeAlternates } from '@/lib/seo';

const META: Record<'zh' | 'en', { title: string; description: string }> = {
  zh: {
    title: '下载',
    description: `下载 Codex Skin Studio v1.0.0 — Windows 安装包与 macOS 安装包，SHA256 校验。${DOWNLOADS.windows.size} / ${DOWNLOADS.macos.size}。`,
  },
  en: {
    title: 'Download',
    description: `Download Codex Skin Studio v1.0.0 — Windows installer & macOS package with SHA256 checksums. ${DOWNLOADS.windows.size} / ${DOWNLOADS.macos.size}.`,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = (lang === 'en' ? 'en' : 'zh') as Locale;
  const meta = META[l];
  return {
    title: `${meta.title} | Codex Skin Studio`,
    description: meta.description,
    alternates: { canonical: `/${l}/download`, languages: localeAlternates('/download') },
    openGraph: {
      title: `${meta.title} | Codex Skin Studio`,
      description: meta.description,
      url: `/${l}/download`,
    },
  };
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === 'en' ? 'en' : 'zh') as Locale;
  return <DownloadView locale={locale} />;
}
