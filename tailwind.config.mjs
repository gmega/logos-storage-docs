/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f1a',
        surface: '#111827',
        accent: '#0d9488',
        'accent-light': '#14b8a6',
        muted: '#94a3b8',
      },
    },
  },
  plugins: [],
};
