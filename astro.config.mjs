import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.facundogoni.com.ar',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith('/ramblings'),
    }),
  ],
  markdown: {
    syntaxHighlight: 'prism',
  },
  redirects: {
    '/ramblings': '/notes',
    '/ramblings/[slug]': '/notes/[slug]',
  },
});
