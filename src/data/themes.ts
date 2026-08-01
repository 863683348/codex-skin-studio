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
  /** 真实背景图 URL（public/themes/*.jpg）；无则用 gradient 渲染 */
  imageUrl?: string;
  /** 合成预览图 URL（public/themes/preview-*.jpg）；真实效果，含 Codex UI+主题 */
  previewUrl?: string;
  /** true = 引擎内置可用；false = 预览主题（即将上架） */
  available: boolean;
  /** free = 免费内置；pro = 付费解锁 */
  tier?: 'free' | 'pro';
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
    id: 'preset-kung-fu-womens-football',
    name: { zh: '功夫女足', en: 'Kung Fu Women\'s Football' },
    description: { zh: '红金武侠，球场热血', en: 'Red-gold kung-fu, stadium passion' },
    longDescription: {
      zh: '功夫女足是 Codex Skin Studio 的默认主题：红金配色致敬武侠与球场热血的碰撞，金红渐变的武打动作背景让编码界面充满力量感。安装即用，无需选择。',
      en: 'Kung Fu Women\'s Football is the default Codex Skin Studio theme: red-gold palette blending martial arts and stadium passion, with a dynamic action backdrop. Ships with the installer — no selection needed.',
    },
    features: {
      zh: ['默认主题，安装即用', '红金武侠配色', '暗色模式沉浸体验', '随安装包内置'],
      en: ['Default theme, ready out of the box', 'Red-gold martial palette', 'Immersive dark mode', 'Built into the installer'],
    },
    available: true,
    imageUrl: "/themes/kungfu.jpg",
    previewUrl: "/themes/preview-kungfu.jpg",
    tier: 'free',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'dark',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #170f0a, #221610, #e06a2e)',
    accentColor: '#e06a2e',
  },
  {
    id: 'preset-judy-hopps',
    name: { zh: '朱迪 Judy Hopps', en: 'Judy Hopps' },
    description: { zh: '紫蓝动物城，勇敢警兔', en: 'Purple-blue Zootopia, brave cop bunny' },
    longDescription: {
      zh: '朱迪主题取材自动物城那位勇敢的兔子警官：紫蓝夜色的城市霓虹与警兔剪影，配上紫罗兰与青绿强调色，让界面充满元气与正义感。',
      en: 'Judy Hopps brings Zootopia\'s brave bunny cop to your workspace: purple-blue neon night city with a heroic silhouette, violet and teal accents full of energy.',
    },
    features: {
      zh: ['紫罗兰+青绿配色', '动物城夜景氛围', '暗色模式', 'PRO 专属主题'],
      en: ['Violet + teal palette', 'Zootopia night-city vibe', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/judy.jpg",
    previewUrl: "/themes/preview-judy.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'dark',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #16142e, #2a2650, #7c5cd6)',
    accentColor: '#7c5cd6',
  },
  {
    id: 'preset-doraemon',
    name: { zh: '机器猫 Doraemon', en: 'Doraemon' },
    description: { zh: '深蓝四次元，童年伙伴', en: 'Deep-blue pocket, childhood buddy' },
    longDescription: {
      zh: '机器猫主题把四次元口袋的蓝色奇迹搬进工作台：深蓝夜空下的蓝色猫型机器人剪影，金黄口袋光芒点缀，温暖又充满童趣。',
      en: 'Doraemon brings the blue magic of the fourth-dimension pocket to your desktop: a deep-blue night sky with the iconic robot silhouette and warm golden glow.',
    },
    features: {
      zh: ['深蓝+金黄配色', '童年回忆氛围', '暗色模式', 'PRO 专属主题'],
      en: ['Deep blue + gold palette', 'Nostalgic childhood vibe', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/doraemon.jpg",
    previewUrl: "/themes/preview-doraemon.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'scifi',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #0d2a4a, #1a4670, #2f8ff0)',
    accentColor: '#2f8ff0',
  },
  {
    id: 'preset-yang-simin',
    name: { zh: '杨思敏 Yang Si-Min', en: 'Yang Si-Min' },
    description: { zh: '玫红优雅，温柔时光', en: 'Rose elegance, gentle time' },
    longDescription: {
      zh: '杨思敏主题以玫红与浅粉的优雅渐变，配合旗袍红裙的柔美插画，营造温柔专注的编码氛围，适合喜欢精致浪漫风格的开发者。',
      en: 'Yang Si-Min theme layers rose and blush tones with an elegant cheongsam illustration, creating a refined, romantic coding atmosphere.',
    },
    features: {
      zh: ['玫红+浅粉配色', '优雅柔美插画', '暗色模式', 'PRO 专属主题'],
      en: ['Rose + blush palette', 'Elegant illustration', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/yang.jpg",
    previewUrl: "/themes/preview-yang.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'pink',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #2a1220, #472338, #d45a7a)',
    accentColor: '#d45a7a',
  },
  {
    id: 'preset-andy-lau',
    name: { zh: '刘德华 Andy Lau', en: 'Andy Lau' },
    description: { zh: '黑金舞台，天王风范', en: 'Black-gold stage, king of pop' },
    longDescription: {
      zh: '刘德华主题以纯黑与香槟金的舞台聚光为基调，歌手剪影与金色灯效交织，简洁高级又不失格调，适合追求专注与仪式感的开发者。',
      en: 'Andy Lau theme centers on a pure-black and champagne-gold concert stage, a stylish silhouette under golden spotlights — minimal, premium and focused.',
    },
    features: {
      zh: ['黑金舞台配色', '演唱会氛围', '暗色模式', 'PRO 专属主题'],
      en: ['Black-gold stage palette', 'Concert atmosphere', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/andy.jpg",
    previewUrl: "/themes/preview-andy.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'dark',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #141414, #2a2a2a, #c8a45c)',
    accentColor: '#c8a45c',
  },
  {
    id: 'preset-phoenix-legend',
    name: { zh: '凤凰传奇 Phoenix Legend', en: 'Phoenix Legend' },
    description: { zh: '国潮红金，凤凰之翼', en: 'Chinese red-gold, phoenix wings' },
    longDescription: {
      zh: '凤凰传奇主题以中国红与金黄为主调，凤凰展翅与舞台火光的国潮插画气势恢宏，让编码界面自带节庆与传说的热烈氛围。',
      en: 'Phoenix Legend blends Chinese red with golden phoenix wings and stage fire, a majestic guochao illustration that brings festive legend energy to your code.',
    },
    features: {
      zh: ['中国红+金黄配色', '凤凰国潮插画', '暗色模式', 'PRO 专属主题'],
      en: ['Chinese red + gold palette', 'Phoenix guochao art', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/phoenix.jpg",
    previewUrl: "/themes/preview-phoenix.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'dark',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #1a0a08, #33150f, #e03a2e)',
    accentColor: '#e03a2e',
  },
  {
    id: 'preset-wealth-god',
    name: { zh: '财神爷撒金币 Wealth God', en: 'Wealth God' },
    description: { zh: '红金喜庆，财气冲天', en: 'Festive red-gold, fortune shower' },
    longDescription: {
      zh: '财神爷撒金币主题以喜庆红金为主调，财神抛洒金币的金色光轨照亮深色背景，年味十足又吉祥，coding 也要招财进宝。',
      en: 'Wealth God showers golden coins across a festive red-gold stage, brightening a dark backdrop with fortune and celebration — code with luck.',
    },
    features: {
      zh: ['红金喜庆配色', '财神撒金币插画', '暗色模式', 'PRO 专属主题'],
      en: ['Festive red-gold palette', 'Coin-shower illustration', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/wealth.jpg",
    previewUrl: "/themes/preview-wealth.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'dark',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #1c0f08, #381d10, #e0472e)',
    accentColor: '#f4b642',
  },
  {
    id: 'preset-chicken-dinner',
    name: { zh: '吃鸡大吉 Chicken Dinner', en: 'Chicken Dinner' },
    description: { zh: '战术橙绿，绝地求生', en: 'Tactical orange-green, battle royale' },
    longDescription: {
      zh: '吃鸡大吉主题致敬绝地求生的战场美学：金色空投光柱与战术橙绿配色，士兵剪影与黄昏降落伞，适合喜欢战斗与竞技氛围的开发者。',
      en: 'Chicken Dinner brings battle-royale aesthetics: golden airdrop beams with tactical orange and olive green, soldier silhouettes under dusk parachutes.',
    },
    features: {
      zh: ['战术橙绿配色', '空投战场插画', '暗色模式', 'PRO 专属主题'],
      en: ['Tactical orange-green palette', 'Airdrop battle art', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/chicken.jpg",
    previewUrl: "/themes/preview-chicken.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'scifi',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #101410, #242c20, #d98e32)',
    accentColor: '#d98e32',
  },
  {
    id: 'preset-dilraba',
    name: { zh: '迪丽热巴 Dilraba', en: 'Dilraba' },
    description: { zh: '红裙鎏金，明艳动人', en: 'Crimson gown, radiant charm' },
    longDescription: {
      zh: '迪丽热巴主题以红裙鎏金的异域风情插画为主视觉，红与金的华丽渐变衬托出明艳动人的气质，让工作台自带聚光灯。',
      en: 'Dilraba theme features a stunning crimson-gold illustration with exotic charm, radiant and luxurious, putting your workspace under the spotlight.',
    },
    features: {
      zh: ['红+金华丽配色', '异域风情插画', '暗色模式', 'PRO 专属主题'],
      en: ['Crimson + gold palette', 'Exotic elegant art', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/dilraba.jpg",
    previewUrl: "/themes/preview-dilraba.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'pink',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #241018, #3e2030, #e04a5a)',
    accentColor: '#e04a5a',
  },
  {
    id: 'preset-nezha',
    name: { zh: '哪吒 Nezha', en: 'Nezha' },
    description: { zh: '红金烈焰，我命由我', en: 'Red-gold flames, defy fate' },
    longDescription: {
      zh: '哪吒主题以风火轮与红绫的烈焰红金为主调，火尖枪划破暗夜的神话插画充满少年英雄气，coding 也要我命由我不由天。',
      en: 'Nezha theme ignites with flaming wind-fire wheels and red celestial sash, a mythological hero striking through the dark — code with defiant energy.',
    },
    features: {
      zh: ['烈焰红金配色', '神话少年英雄插画', '暗色模式', 'PRO 专属主题'],
      en: ['Flame red-gold palette', 'Mythological hero art', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/nezha.jpg",
    previewUrl: "/themes/preview-nezha.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'dark',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #1a0a10, #33141e, #e04838)',
    accentColor: '#e04838',
  },
  {
    id: 'preset-taiyi-zhenren',
    name: { zh: '太乙真人 Taiyi Zhenren', en: 'Taiyi Zhenren' },
    description: { zh: '青玉鎏金，仙风道骨', en: 'Jade-gold, immortal serenity' },
    longDescription: {
      zh: '太乙真人主题以青玉与鎏金为基调，仙鹤与拂尘的玄幻插画营造宁静悠远的气氛，适合深夜修仙式编程的开发者。',
      en: 'Taiyi Zhenren theme settles into jade-green and warm gold, cranes and a whisk in mystical twilight — serene coding for late-night cultivators.',
    },
    features: {
      zh: ['青玉鎏金配色', '仙鹤玄幻插画', '暗色模式', 'PRO 专属主题'],
      en: ['Jade + gold palette', 'Immortal crane art', 'Dark mode', 'PRO theme'],
    },
    available: false,
    imageUrl: "/themes/taiyi.jpg",
    previewUrl: "/themes/preview-taiyi.jpg",
    tier: 'pro',
    relatedGuides: ['install-windows', 'install-macos'],
    category: 'fresh',
    version: '1.0.0',
    author: 'Codex Skin Studio',
    modes: ['dark'],
    gradient: 'linear-gradient(135deg, #0e1a1a, #1e3236, #7ab8b0)',
    accentColor: '#7ab8b0',
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
