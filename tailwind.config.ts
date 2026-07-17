import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        border: 'var(--border)',
        'border-hover': 'var(--border-hover)',
        success: 'var(--success)',
        warning: 'var(--warning)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        display: ['48px', { lineHeight: '1.1', fontWeight: '600' }],
        h1: ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        h2: ['24px', { lineHeight: '1.3', fontWeight: '500' }],
        h3: ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        pill: '9999px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      transitionDuration: {
        DEFAULT: '150ms',
        card: '200ms',
        crossfade: '300ms',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
