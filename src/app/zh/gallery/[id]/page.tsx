import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailView } from '@/components/views/DetailView';
import { getDict } from '@/lib/i18n';
import { themes, getThemeById } from '@/data/themes';

export const dynamicParams = false;

export function generateStaticParams() {
  return themes.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const theme = getThemeById(id);
  if (!theme) return {};
  return {
    title: theme.name.zh,
    description: theme.description.zh,
    alternates: {
      languages: { 'zh-CN': `/zh/gallery/${id}`, en: `/en/gallery/${id}` },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const theme = getThemeById(id);
  if (!theme) notFound();
  return <DetailView theme={theme} locale="zh" />;
}
