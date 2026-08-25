// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

/*
 * TECHNICAL SEO DECISION
 *
 * /research/ and /en/research/ are legacy consolidation routes. They remain
 * crawlable as compatibility endpoints and are explicitly noindex at page
 * level, but they must not be advertised in the XML sitemap. A sitemap should
 * contain the canonical, indexable URL set—not transitional/noindex routes.
 *
 * This does not delete or redirect either URL; it only keeps sitemap quality
 * aligned with the canonical architecture documented in docs/route-audit.md.
 */
export default defineConfig({
  site: 'https://leilarazavi.github.io',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/research/'),
    }),
  ],
});
