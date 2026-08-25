# Technical SEO Audit — Personal Brand v1

## Current baseline

- Astro is configured with the production `site` URL, and `@astrojs/sitemap` is enabled. The sitemap is therefore generated at build time rather than committed manually.
- `robots.txt` allows crawling and references the generated sitemap index.
- The shared SEO component emits canonical, robots, Open Graph, Twitter Card and JSON-LD metadata.
- Persian and English routes are intentionally kept as separate localized URL spaces (`/` and `/en/`).

## Hardening applied in this milestone

### 1. Reciprocal hreflang generation

`Seo.astro` now emits exactly one `fa` and one `en` alternate URL derived from the canonical path, plus `x-default`.

**Why:** the alternate URL should be derived from the current route rather than relying on duplicated page-level logic. This reduces the chance of broken locale pairs as the site grows.

### 2. Canonical remains authoritative

No canonical URLs were changed in this milestone. Existing page-level canonical values remain the source of truth.

**Why:** visual/IA work must not silently change the indexed URL set.

### 3. Noindex remains explicit

Pages intentionally marked `noindex` remain controlled by the page-level `noindex` prop.

**Why:** SEO-only architectural decisions should be explicit in the page source rather than inferred from navigation visibility.

## Remaining technical SEO QA

The following require the built site / browser or Search Console validation and are intentionally not claimed as complete from source inspection alone:

- Verify every canonical resolves with HTTP 200.
- Verify every `fa`/`en` hreflang target resolves with HTTP 200 and is reciprocal.
- Verify generated sitemap contains only canonical, indexable URLs.
- Verify no `noindex` URL appears as an important internal navigation destination.
- Validate Person, WebSite, BreadcrumbList and Article/ScholarlyArticle schemas against rendered HTML.
- Check title uniqueness and description uniqueness across all indexable routes.
- Check Open Graph image availability and dimensions.
- Run Lighthouse/PageSpeed for mobile and desktop.
- Verify Core Web Vitals after deployment.
- Inspect Google Search Console indexing, sitemap status, canonical selection and enhancement reports.

## SEO principle for the redesign

Navigation simplicity and search architecture are separate layers. Removing an item from the primary Header does **not** imply removing its URL from search. CV, Organizations and other supporting pages remain indexable when their content provides unique value and their canonical/noindex strategy explicitly allows it.
