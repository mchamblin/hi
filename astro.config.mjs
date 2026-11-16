// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// The deploy workflow sets these from GitHub Pages itself, so the same build
// works at https://<user>.github.io, at https://<user>.github.io/<repo>,
// or on a custom domain without touching this file.
const site = process.env.SITE_URL || 'https://atlyeah.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // The old listing pages now live at /portfolio/. Detail pages keep their URLs.
  redirects: {
    '/work/': '/portfolio/',
    '/writing/': '/portfolio/',
  },
  // Fonts are downloaded at build time and self-hosted: no third-party requests.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Instrument Serif',
      cssVariable: '--font-display',
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
