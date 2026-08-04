// Next.js 原生 sitemap（替代 next-sitemap）——构建时自动生成，含双语全部页面
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { themes } from '@/data/themes';
import { POSTS } from '@/data/posts';

const LOCALES = ['zh', 'en'] as const;
const STATIC_PATHS: { path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1.0, freq: 'daily' },
  { path: '/gallery', priority: 0.9, freq: 'daily' },
  { path: '/download', priority: 0.9, freq: 'weekly' },
  { path: '/pricing', priority: 0.8, freq: 'weekly' },
  { path: '/blog', priority: 0.8, freq: 'weekly' },
  { path: '/guides', priority: 0.7, freq: 'weekly' },
  { path: '/docs', priority: 0.7, freq: 'weekly' },
  { path: '/faq', priority: 0.6, freq: 'monthly' },
  { path: '/about', priority: 0.5, freq: 'monthly' },
  { path: '/contact', priority: 0.5, freq: 'monthly' },
  { path: '/privacy', priority: 0.2, freq: 'yearly' },
  { path: '/terms', priority: 0.2, freq: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of LOCALES) {
    for (const s of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${s.path}/`,
        lastModified: new Date(),
        changeFrequency: s.freq,
        priority: s.priority,
      });
    }
    for (const t of themes) {
      entries.push({
        url: `${SITE_URL}/${locale}/gallery/${t.id}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }
    for (const post of POSTS) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${post.slug}/`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }
  return entries;
}
