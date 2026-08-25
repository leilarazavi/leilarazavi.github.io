# Technical SEO Audit — Personal Brand v1

## Current baseline

- Astro is configured with the production `site` URL, and `@astrojs/sitemap` is enabled.
- `robots.txt` allows crawling and references the generated sitemap index.
- The shared SEO component emits canonical, robots, Open Graph, Twitter Card and JSON-LD metadata.
- Persian and English routes are intentionally kept as separate localized URL spaces (`/` and `/en/`).

## Hardening applied

### 1. Reciprocal hreflang generation

`Seo.astro` emits one `fa`, one `en`, and one `x-default` alternate URL derived from the canonical path.

**Why:** locale mapping belongs to one shared layer. This reduces the chance of individual pages drifting into incorrect language pairs.

### 2. Canonical remains authoritative

No indexed URL was changed merely for visual or navigation reasons.

**Why:** navigation simplicity and search architecture are separate concerns.

### 3. Noindex compatibility routes use `noindex, follow`

Legacy research routes remain compatibility endpoints, but they no longer request `nofollow`.

**Why:** the route should stay out of search while still allowing crawlers to follow useful links to the canonical destination.

### 4. Sitemap excludes consolidated research routes

The Astro sitemap integration filters `/research/` and `/en/research/` out of the generated sitemap.

**Why:** XML sitemaps should represent the canonical indexable URL set, not transitional/noindex endpoints.

### 5. Entity graph remains centralized

Person, WebSite, organization, publication and podcast schemas are generated from shared data/functions rather than hand-written independently on every page.

## Source-level QA status

The repository now documents and implements the following controls:

- canonical URL preservation;
- locale pairing;
- sitemap quality;
- explicit noindex behavior;
- structured-data generation;
- centralized identity data;
- accessibility foundations;
- shared UI tokens and components.

## Deployment-only validation still required

The following require a browser/deployment/Search Console environment and are intentionally not claimed as complete from source inspection alone:

- HTTP 200 checks for all canonical/hreflang targets;
- generated sitemap contents;
- rendered structured-data validation;
- title/description uniqueness across the final rendered route set;
- Open Graph image availability;
- Lighthouse and Core Web Vitals;
- Search Console indexing and canonical-selection reports;
- real-world mobile/keyboard interaction testing.
