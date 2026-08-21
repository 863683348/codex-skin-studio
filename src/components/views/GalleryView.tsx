'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { ThemeCard } from '@/components/ThemeCard'
import { CommunitySkinCard } from '@/components/CommunitySkinCard'
import { AdDisplay } from '@/components/AdDisplay'
import { themes, type ThemeCategory } from '@/data/themes'
import { communitySkins } from '@/data/community-skins'
import { getDict } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n/config'
import type { CommunitySkin } from '@/data/community-skins'

type FilterTab = 'themes' | 'community'
type ThemeFilter = ThemeCategory | 'all'
type CommunityFilter = CommunitySkin['tier'] | 'all'

// v2
export function GalleryView({ locale }: { locale: Locale }) {
  const dict = getDict(locale)
  const [tab, setTab] = useState<FilterTab>('themes')
  const [activeTheme, setActiveTheme] = useState<ThemeFilter>('all')
  const [activeCommunity, setActiveCommunity] = useState<CommunityFilter>('all')

  // 主题过滤
  const filteredThemes =
    activeTheme === 'all' ? themes : themes.filter((t) => t.category === activeTheme)
  const sortedThemes = [...filteredThemes].sort(
    (a, b) => Number(b.available) - Number(a.available),
  )

  // 社区皮肤过滤
  const filteredSkins =
    activeCommunity === 'all'
      ? communitySkins
      : communitySkins.filter((s) => s.tier === activeCommunity)
  const sortedSkins = [...filteredSkins].sort((a, b) => {
    // 有安装数的排前面
    if (a.installs && b.installs) return b.installs - a.installs
    if (a.installs) return -1
    if (b.installs) return 1
    return a.nameEn.localeCompare(b.nameEn)
  })

  return (
    <div className="mx-auto max-w-container px-4 py-12 md:px-8">
      <h1 className="text-h1 text-text-primary">{dict.gallery.title}</h1>
      <p className="mt-2 text-body text-text-secondary">
        {dict.gallery.description}
      </p>

      {/* 主 Tab：主题 / 社区皮肤 */}
      <div className="my-8 flex gap-4 border-b border-border">
        <button
          onClick={() => setTab('themes')}
          className={`pb-2 px-4 text-small font-medium transition-colors ${
            tab === 'themes'
              ? 'border-b-2 border-accent text-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          {dict.gallery.filterAll} ({themes.length})
        </button>
        <button
          onClick={() => setTab('community')}
          className={`pb-2 px-4 text-small font-medium transition-colors ${
            tab === 'community'
              ? 'border-b-2 border-accent text-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          {dict.community.title} ({communitySkins.length})
        </button>
      </div>

      {/* 主题内容 */}
      {tab === 'themes' && (
        <>
          <p className="mt-2 text-caption text-text-tertiary">
            {dict.gallery.availableNote}
          </p>
          <div className="my-6">
            <CategoryFilter locale={locale} active={activeTheme} onChange={setActiveTheme} />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedThemes.slice(0, 4).map((t) => (
              <ThemeCard key={t.id} theme={t} locale={locale} />
            ))}
          </div>

          <AdDisplay format="horizontal" className="py-8" />

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedThemes.slice(4).map((t) => (
              <ThemeCard key={t.id} theme={t} locale={locale} />
            ))}
          </div>
        </>
      )}

      {/* 社区皮肤内容 */}
      {tab === 'community' && (
        <>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
            <p className="text-caption text-text-tertiary">
              {dict.community.description}
            </p>
            <Link
              href={`/${locale}/community/submit`}
              className="inline-flex items-center gap-1.5 rounded-pill border border-accent px-4 py-1.5 text-small font-medium text-accent transition-colors hover:bg-accent/10"
            >
              <Plus size={14} />
              {dict.community.submitCta}
            </Link>
          </div>
          <div className="my-6">
            <CommunityFilterTabs locale={locale} active={activeCommunity} onChange={setActiveCommunity} />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedSkins.map((skin) => (
              <CommunitySkinCard key={skin.id} skin={skin} locale={locale} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// 主题分类筛选
function CategoryFilter({
  locale,
  active,
  onChange,
}: {
  locale: Locale
  active: ThemeFilter
  onChange: (c: ThemeFilter) => void
}) {
  const dict = getDict(locale)
  const categories = [
    { id: 'all' as const, label: dict.gallery.filterAll },
    { id: 'pink' as const, label: dict.gallery.filterPink },
    { id: 'scifi' as const, label: dict.gallery.filterSciFi },
    { id: 'dark' as const, label: dict.gallery.filterDark },
    { id: 'fresh' as const, label: dict.gallery.filterFresh },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className={`rounded-pill px-4 py-2 text-small transition-colors ${
            active === c.id
              ? 'bg-accent text-white'
              : 'border border-border bg-transparent text-text-secondary hover:border-border-hover'
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}

// 社区皮肤分级筛选
function CommunityFilterTabs({
  locale,
  active,
  onChange,
}: {
  locale: Locale
  active: CommunityFilter
  onChange: (c: CommunityFilter) => void
}) {
  const dict = getDict(locale)
  const tiers = [
    { id: 'all' as const, label: dict.community.filterAll },
    { id: 'certified' as const, label: dict.community.filterCertified },
    { id: 'featured' as const, label: dict.community.filterFeatured },
    { id: 'community' as const, label: dict.community.filterCommunity },
    { id: 'built-in' as const, label: dict.community.filterBuiltIn },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {tiers.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`rounded-pill px-4 py-2 text-small transition-colors ${
            active === t.id
              ? 'bg-accent text-white'
              : 'border border-border bg-transparent text-text-secondary hover:border-border-hover'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
