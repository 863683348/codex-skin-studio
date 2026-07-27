import type { Locale } from '@/lib/i18n/config';

export type ThemeCategory = 'pink' | 'scifi' | 'dark' | 'fresh';

export interface ThemePreset {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  /** 2~4 句详细描述，展示在详情页 */
  longDescription: { zh: string; en: string };
  /** 该主题的核心特性列表 */
  features: { zh: string[]; en: string[] };
  category: ThemeCategory;
  version: string;
  author: string;
  modes: ('light' | 'dark')[];
  gradient: string;
  accentColor: string;
  /** 关联的指南 slug 列表 */
  relatedGuides: string[];
}

/** 从 gradient + accentColor 生成一个纯色版 SVG data URI 预览 */
export function themePreviewSvgURI(
  theme: ThemePreset,
  locale: Locale,
): string {
  const name = theme.name[locale === 'en' ? 'en' : 'zh'];
  // 渐变中提取前两个颜色作为预览
  const colors = theme.gradient.match(/#[A-Fa-f0-9]{3,8}/g) || ['#333', '#666'];
  return 'data:image/svg+xml,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          ${colors.map((c, i) =>
            `<stop offset="${i * 50}%" stop-color="${c}" />`
          ).join('')}
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#bg)" />
      <!-- title bar -->
      <rect x="0" y="0" width="640" height="32" fill="rgba(0,0,0,0.35)" rx="8" />
      <circle cx="16" cy="16" r="5" fill="#FF5F57" />
      <circle cx="32" cy="16" r="5" fill="#FFBD2E" />
      <circle cx="48" cy="16" r="5" fill="#28C840" />
      <text x="320" y="22" fill="rgba(255,255,255,0.7)" font-family="monospace" font-size="12" text-anchor="middle">Theme · Codex</text>
      <!-- code lines -->
      <text x="20" y="70" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">1</text>
      <text x="20" y="85" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">2</text>
      <text x="20" y="100" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">3</text>
      <text x="20" y="115" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">4</text>
      <text x="20" y="130" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">5</text>
      <text x="20" y="145" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">6</text>
      <text x="40" y="70" fill="rgba(255,255,255,0.85)" font-family="monospace" font-size="10">import</text>
      <text x="80" y="70" fill="#7DCFFF" font-family="monospace" font-size="10" font-weight="bold">React</text>
      <text x="125" y="70" fill="rgba(255,255,255,0.85)" font-family="monospace" font-size="10">from</text>
      <text x="150" y="70" fill="#C3E88D" font-family="monospace" font-size="10">'react'</text>
      <text x="40" y="85" fill="rgba(255,255,255,0.55)" font-family="monospace" font-size="10">const</text>
      <text x="70" y="85" fill="#7DCFFF" font-family="monospace" font-size="10" font-weight="bold">theme</text>
      <text x="105" y="85" fill="rgba(255,255,255,0.55)" font-family="monospace" font-size="10">=</text>
      <text x="115" y="85" fill="#C3E88D" font-family="monospace" font-size="10">'${name}'</text>
      <text x="40" y="100" fill="rgba(255,255,255,0.85)" font-family="monospace" font-size="10">function</text>
      <text x="90" y="100" fill="#FFCB6B" font-family="monospace" font-size="10">App</text>
      <text x="115" y="100" fill="rgba(255,255,255,0.85)" font-family="monospace" font-size="10">()</text>
      <text x="145" y="100" fill="rgba(255,255,255,0.55)" font-family="monospace" font-size="10">{</text>
      <text x="55" y="115" fill="rgba(255,255,255,0.55)" font-family="monospace" font-size="10">return</text>
      <text x="100" y="115" fill="#F07178" font-family="monospace" font-size="10">&lt;ThemeProvider</text>
      <text x="75" y="130" fill="#FFCB6B" font-family="monospace" font-size="10">theme</text>
      <text x="110" y="130" fill="rgba(255,255,255,0.55)" font-family="monospace" font-size="10">=</text>
      <text x="120" y="130" fill="#C3E88D" font-family="monospace" font-size="10">{theme}</text>
      <text x="55" y="145" fill="#F07178" font-family="monospace" font-size="10">/&gt;</text>
      <!-- bottom overlay: theme name -->
      <rect x="0" y="310" width="640" height="50" fill="rgba(0,0,0,0.4)" />
      <text x="640" y="342" fill="${theme.accentColor}" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="end">${name}</text>
    </svg>`
  );
}

export const themes: ThemePreset[] = [
  {
    id: 'preset-romantic-rose',
    name: { zh: '浪漫玫瑰', en: 'Romantic Rose' },
    description: { zh: '粉色调，温馨浪漫', en: 'Pink tones, warm and romantic' },
    longDescription: {
      zh: '浪漫玫瑰是一款以粉红玫红渐变为主色调的 Codex 主题，灵感源自玫瑰花瓣的温柔过渡。浅色模式保持通透优雅，暗色模式更显深邃浪漫，适合日常开发时营造温馨专注的编码氛围。',
      en: 'Romantic Rose is a pink-to-rose gradient Codex theme inspired by the gentle transition of rose petals. Light mode stays airy and elegant; dark mode feels deeper and more romantic, perfect for a warm and focused daily coding atmosphere.',
    },
    features: {
      zh: ['粉红渐变背景', '支持亮色/暗色双模式', '强调色玫红与渐变协调', '侧栏与建议卡保留原生交互'],
      en: ['Pink gradient background', 'Light + dark dual mode support', 'Accent color coordinates with the gradient', 'Native sidebar and card interactions preserved'],
    },
    relatedGuides: ['install-windows', 'install-macos', 'best-codex-themes'],
    category: 'pink',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['light', 'dark'],
    gradient: 'linear-gradient(135deg, #FF6B9D, #C44569)',
    accentColor: '#E4577B',
  },
  {
    id: 'preset-fortune-god',
    name: { zh: '财神打工版', en: 'Fortune God' },
    description: { zh: '红金配色，财气十足', en: 'Red and gold, full of fortune' },
    longDescription: {
      zh: '红金撞色主题，灵感源自传统财神文化。鲜明的大红与金色交织，仅适配暗色模式，视觉效果热烈而有庆典感。适合喜欢高对比度、希望在 coding 时感受好运的开发者。',
      en: 'A red-and-gold theme inspired by traditional fortune culture. The striking crimson and gold only suit dark mode, creating a festive and energetic visual. Perfect for developers who enjoy high contrast and a bit of luck in their code.',
    },
    features: {
      zh: ['大红底色配金色强调色', '仅适配暗色模式', '高对比度，代码可读性强', '独一无二的红金氛围'],
      en: ['Crimson background with gold accents', 'Dark mode only', 'High contrast for strong readability', 'Unique red-gold atmosphere'],
    },
    relatedGuides: ['install-windows', 'install-macos', 'best-codex-themes'],
    category: 'dark',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #C0392B, #F39C12)',
    accentColor: '#F39C12',
  },
  {
    id: 'preset-red-sci-fi',
    name: { zh: '红白科幻', en: 'Red Sci-Fi' },
    description: { zh: '红白对比，未来感', en: 'Red and white contrast, futuristic' },
    longDescription: {
      zh: '红白科幻以强烈的红白对比营造未来感代码界面。亮色模式红白分明，暗色模式更具沉浸感。适合喜欢赛博朋克美学、追求视觉冲击力的开发者。',
      en: 'Red Sci-Fi delivers a futuristic look with bold red-and-white contrast. Light mode is crisp and sharp; dark mode is more immersive. Ideal for developers who love cyberpunk aesthetics and visual impact.',
    },
    features: {
      zh: ['红白高对比配色', '支持亮色/暗色双模式', '科幻氛围，视觉冲击力强', '代码语法高亮清晰分明'],
      en: ['Red-white high contrast palette', 'Light + dark dual mode support', 'Sci-fi atmosphere with visual punch', 'Clear, crisp syntax highlighting'],
    },
    relatedGuides: ['install-windows', 'install-macos', 'best-codex-themes'],
    category: 'scifi',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['light', 'dark'],
    gradient: 'linear-gradient(135deg, #E74C3C, #ECF0F1)',
    accentColor: '#E74C3C',
  },
  {
    id: 'preset-clear-custom',
    name: { zh: '清透定制', en: 'Clear Custom' },
    description: { zh: '透明质感，简洁清爽', en: 'Transparent texture, clean and fresh' },
    longDescription: {
      zh: '清透定制以淡蓝到水蓝的渐变营造透明清爽的视觉体验。仅适配亮色模式，界面通透明亮，适合喜欢极简风格和干净工作空间的开发者。',
      en: 'Clear Custom uses a pale-blue-to-aqua gradient for a transparent, refreshing look. Light mode only, with bright and airy UI — great for developers who prefer minimalism and a clean workspace.',
    },
    features: {
      zh: ['淡蓝渐变透明质感', '仅适配亮色模式', '极致清爽风格', '极简界面，减少视觉疲劳'],
      en: ['Pale blue gradient with transparent feel', 'Light mode only', 'Minimalist and refreshing style', 'Reduces visual fatigue during long sessions'],
    },
    relatedGuides: ['customize', 'install-windows', 'best-codex-themes'],
    category: 'fresh',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['light'],
    gradient: 'linear-gradient(135deg, #A8D8EA, #AAE5F0)',
    accentColor: '#5DADE2',
  },
  {
    id: 'preset-inspiration',
    name: { zh: '灵感小宇宙', en: 'Inspiration Cosmos' },
    description: { zh: '深蓝星云，创意空间', en: 'Deep blue nebula, creative space' },
    longDescription: {
      zh: '灵感小宇宙以深蓝到灰蓝的渐变模拟星云效果，营造宁静深邃的编码空间。仅适配暗色模式，适合深夜编程的场景，从视觉上帮助专注与创意灵感。',
      en: 'Inspiration Cosmos simulates a nebula with deep-blue-to-slate gradients, creating a calm, contemplative coding space. Dark mode only, designed for late-night coding sessions and creative flow.',
    },
    features: {
      zh: ['深蓝渐变模拟星云', '仅适配暗色模式', '沉浸式深邃氛围', '蓝灰层次分明，双眼舒适'],
      en: ['Deep blue gradient mimicking a nebula', 'Dark mode only', 'Immersive, deep atmosphere', 'Layered blue-grey tones for eye comfort'],
    },
    relatedGuides: ['install-windows', 'install-macos', 'best-codex-themes'],
    category: 'scifi',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #1B263B, #415A77, #778DA9)',
    accentColor: '#778DA9',
  },
  {
    id: 'preset-purple-night',
    name: { zh: '紫夜限定', en: 'Purple Night' },
    description: { zh: '深紫色调，神秘氛围', en: 'Deep purple tones, mysterious vibe' },
    longDescription: {
      zh: '紫夜限定从深紫到紫罗兰的渐变打造神秘而精致的编码氛围。仅适配暗色模式，紫色调令人联想到夜空与星光的交错，适合追求独特品味与夜间编程的开发者。',
      en: 'Purple Night transitions from deep purple to violet for a mysterious yet refined coding atmosphere. Dark mode only; the purple tones evoke night skies and starlight, ideal for developers with distinctive taste.',
    },
    features: {
      zh: ['深紫到紫罗兰渐变', '仅适配暗色模式', '精致神秘视觉氛围', '紫色高亮与深色背景协调'],
      en: ['Deep purple to violet gradient', 'Dark mode only', 'Sophisticated, mysterious look', 'Purple highlights harmonize with the dark background'],
    },
    relatedGuides: ['install-windows', 'install-macos', 'best-codex-themes'],
    category: 'dark',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #2D1B4E, #6C3483)',
    accentColor: '#8E44AD',
  },
  {
    id: 'preset-virtual-diva',
    name: { zh: '青蓝虚拟歌姬', en: 'Virtual Diva' },
    description: { zh: '青蓝色调，赛博歌姬', en: 'Cyan-blue tones, cyber diva' },
    longDescription: {
      zh: '青蓝虚拟歌姬以青蓝到浅蓝的渐变呈现赛博歌姬般的科技感。仅适配暗色模式，冷色调让人联想到全息投影与数字世界，适合科技前沿气质的开发者。',
      en: 'Virtual Diva layers cyan through light blue for a cyber-diva look with a tech-forward edge. Dark mode only; cool tones evoke holograms and digital frontiers, perfect for developers who code on the cutting edge.',
    },
    features: {
      zh: ['青蓝到浅蓝赛博渐变', '仅适配暗色模式', '科技感冷调氛围', '强调色与全息感协调'],
      en: ['Cyan-to-light-blue cyber gradient', 'Dark mode only', 'Cool-toned tech atmosphere', 'Accents coordinate with the holographic vibe'],
    },
    relatedGuides: ['install-windows', 'install-macos', 'best-codex-themes'],
    category: 'scifi',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #00B4D8, #48CAE4, #90E0EF)',
    accentColor: '#00B4D8',
  },
  {
    id: 'preset-stage-gold',
    name: { zh: '舞台黑金', en: 'Stage Gold' },
    description: { zh: '黑金配色，舞台聚光', en: 'Black and gold, stage spotlight' },
    longDescription: {
      zh: '舞台黑金从纯黑到金色的渐变模拟舞台聚光灯效果，视觉冲击力极强。仅适配暗色模式，黑金搭配既简洁又有高级感，适合希望在 coding 时保持专注又不失格调的开发者。',
      en: 'Stage Gold transitions from pure black to gold, mimicking a stage spotlight with maximum visual impact. Dark mode only — the black-and-gold combo is both minimal and premium. For developers who code with style.',
    },
    features: {
      zh: ['纯黑到金色渐变', '仅适配暗色模式', '舞台聚光灯灵感', '黑金配色，简洁高级'],
      en: ['Pure black to gold gradient', 'Dark mode only', 'Stage-spotlight inspired', 'Black-and-gold, minimal yet premium'],
    },
    relatedGuides: ['install-windows', 'install-macos', 'best-codex-themes'],
    category: 'dark',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #1A1A1A, #D4AC0D)',
    accentColor: '#D4AC0D',
  },
];

export const categories: { id: ThemeCategory | 'all'; zh: string; en: string }[] = [
  { id: 'all', zh: '全部', en: 'All' },
  { id: 'pink', zh: '粉系', en: 'Pink' },
  { id: 'scifi', zh: '科幻', en: 'Sci-Fi' },
  { id: 'dark', zh: '暗黑', en: 'Dark' },
  { id: 'fresh', zh: '清新', en: 'Fresh' },
];

export function getThemeById(id: string): ThemePreset | undefined {
  return themes.find((t) => t.id === id);
}
