// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

/*
 * /research/ and /en/research/ are legacy consolidation routes. They remain
 * available as compatibility endpoints and are explicitly noindex at page
 * level, but they are excluded from the XML sitemap so the sitemap represents
 * the canonical indexable URL set.
 */
export default defineConfig({
  site: 'https://leilarazavi.github.io',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/research/'),
    }),
  ],
});
