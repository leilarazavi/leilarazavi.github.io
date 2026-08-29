# Technical SEO Audit — Current Baseline

## Scope

This document records source-level technical SEO decisions for the current Astro site. It is not a substitute for production crawler or Search Console evidence.

## Current architecture

- Astro static build with `site: https://leilarazavi.github.io`.
- `@astrojs/sitemap` generates the XML sitemap at build time.
- `Seo.astro` owns canonical, robots, Open Graph, Twitter metadata and shared JSON-LD identity nodes.
- Persian and English use separate localized route spaces under `/` and `/en/`.
- Legacy `/research/` and `/en/research/` remain compatibility routes with noindex behavior and are excluded from the sitemap.

## Required invariants

### Canonical

Every indexable page has exactly one canonical URL representing its own localized route.

### Hreflang

Localized pairs expose:

- `fa` → Persian equivalent;
- `en` → English equivalent;
- `x-default` → Persian primary representation.

Pairs must be reciprocal.

### Robots / sitemap

Noindex compatibility routes must not be included in the XML sitemap. The sitemap should represent canonical indexable URLs only.

### Entity graph

The site uses one stable first-party Person ID:

`https://leilarazavi.github.io/#person`

Page-specific entities should reference that node when the visible content supports the relationship.

### Structured data

Use route-appropriate Schema.org types rather than adding generic schemas everywhere. Current model includes Person, WebSite, ProfilePage, ScholarlyArticle, Book, PodcastSeries and PodcastEpisode as applicable.

### Social metadata

OG/Twitter images must represent the page being shared. A page-specific image should override the global profile image. The declared MIME type must match the actual asset.

## Source-level findings carried into implementation

- Do not create nested `<main>` landmarks.
- Do not render data fields that are absent from the source model.
- Keep `sameAs` for external identity profiles rather than duplicating the site's own URL.
- Keep favicon and Apple touch icon assets explicit and standard.
- Preserve public URLs unless independent evidence supports a redirect/consolidation decision.

## Production validation still required

The following cannot be claimed from source inspection alone:

- HTTP 200 for every canonical/hreflang target;
- final deployed sitemap contents;
- rendered JSON-LD validation by a crawler/browser;
- title/description uniqueness across every rendered route;
- OG image fetchability by major crawlers;
- Lighthouse/Core Web Vitals;
- Search Console indexing and Google-selected canonical reports;
- real browser/mobile accessibility behavior.

Record those results in `docs/production-seo-qa.md` and `docs/final-qa.md` rather than replacing this source-level document with unverified production claims.
