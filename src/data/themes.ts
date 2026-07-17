export type ThemeCategory = 'pink' | 'scifi' | 'dark' | 'fresh';

export interface ThemePreset {
  id: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  category: ThemeCategory;
  version: string;
  author: string;
  modes: ('light' | 'dark')[];
  gradient: string;
  accentColor: string;
}

export const themes: ThemePreset[] = [
  {
    id: 'preset-romantic-rose',
    name: { zh: '浪漫玫瑰', en: 'Romantic Rose' },
    description: { zh: '粉色调，温馨浪漫', en: 'Pink tones, warm and romantic' },
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
