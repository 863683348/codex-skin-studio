'use client'

import Link from 'next/link'
import { ExternalLink, Star } from 'lucide-react'
import { getDict } from '@/lib/i18n'
import type { CommunitySkin } from '@/data/community-skins'
import type { Locale } from '@/lib/i18n/config'

const tierColors: Record<CommunitySkin['tier'], string> = {
  certified: 'from-amber-500 to-yellow-400',
  featured: 'from-purple-500 to-pink-500',
  community: 'from-blue-500 to-cyan-500',
  'built-in': 'from-green-500 to-emerald-500',
}

const tierLabels: Record<CommunitySkin['tier'], { zh: string; en: string }> = {
  certified: { zh: '认证', en: 'Certified' },
  featured: { zh: '精选', en: 'Featured' },
  community: { zh: '社区', en: 'Community' },
  'built-in': { zh: '内置', en: 'Built-in' },
}

export function CommunitySkinCard({
  skin,
  locale,
}: {
  skin: CommunitySkin
  locale: Locale
}) {
  const dict = getDict(locale)
  const tierLabel = tierLabels[skin.tier]
  const gradient = skin.color || '#667eea'
  const displayName = locale === 'en' ? skin.nameEn : skin.nameZh

  return (
    <Link
      href={skin.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="overflow-hidden rounded-lg border border-border bg-bg-secondary transition-all duration-card hover:-translate-y-0.5 hover:border-border-hover hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
        <div className="relative aspect-video">
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${gradient} 0%, rgba(0,0,0,0.8) 100%)` }}
          />
          {/* Tier badge */}
          <div className="absolute left-2 top-2 z-10">
            <span className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${tierColors[skin.tier]} px-2 py-0.5 text-[11px] font-bold text-white shadow-sm`}>
              <Star size={12} />
              {tierLabel[locale]}
            </span>
          </div>
          {/* External link icon */}
          <div className="absolute right-2 top-2 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
              <ExternalLink size={12} />
              GitHub
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-h3 text-text-primary">{displayName}</h3>
          <p className="mt-1 text-small text-text-secondary">
            {skin.repo}
          </p>
          {skin.installs && (
            <p className="mt-2 text-caption text-text-tertiary">
              {skin.installs.toLocaleString()} {dict.community.installs}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
