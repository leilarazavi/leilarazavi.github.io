# Production SEO QA Protocol

## Purpose

The repository now has deterministic HTML checks. This document defines the complementary production checks that cannot be proven from source code alone.

## 1. Crawlability

- Confirm `/robots.txt` returns HTTP 200.
- Confirm the sitemap URL in robots is reachable.
- Confirm every canonical URL returns HTTP 200.
- Confirm no important page redirects to a different locale or legacy route.

## 2. Localization

For each Persian/English pair:

- canonical points to the page itself;
- `hreflang="fa"` points to Persian;
- `hreflang="en"` points to English;
- `hreflang="x-default"` points to the Persian primary representation;
- both localized pages reciprocate the relationship.

## 3. Entity graph

Verify rendered JSON-LD contains the same first-party Person ID across the site:

`https://leilarazavi.github.io/#person`

Check that About/ProfilePage, Website, publications and podcast content reference that ID where the visible content supports the relationship.

## 4. Search Console

After deployment, inspect:

- Pages indexed / not indexed;
- duplicate without user-selected canonical;
- alternate page with proper canonical;
- crawled but currently not indexed;
- discovered but currently not indexed;
- sitemap processing status;
- Core Web Vitals;
- queries containing the person's name and publication titles.

Do not treat an unindexed page as a code defect until the reason is identified.

## 5. Brand queries

Track branded queries such as:

- `لیلا رضوی`
- `دکتر لیلا رضوی`
- `Leila Razavi`
- exact publication titles
- exact podcast title

The objective is not merely ranking for a keyword. The objective is a coherent first-party result set where the official website, professional profiles, research and media activity reinforce the same person entity.

## 6. Performance

Run mobile Lighthouse against:

- `/`
- `/about/`
- `/publications/`
- one publication detail page
- `/media/`

Record LCP, CLS, INP, total transfer size and major image/font contributors.

## 7. Accessibility

Manually test keyboard navigation, focus visibility, mobile navigation, heading hierarchy, contrast, reduced motion and meaningful image alternatives in at least Chrome and Firefox.

## 8. Release rule

Automated checks can block regressions in generated HTML. Production-only checks should be recorded as observations with date and URL rather than converted into unverified claims in repository documentation.

## 9. 2026-08-28 Release QA Evidence

### Phase 1 — source/build gate

- PASS: GitHub Actions quality job completed successfully with build, SEO smoke test and route quality audit.
- PASS: SEO smoke test covers 16 primary routes.
- PASS: route quality audit covers 35 generated HTML pages / 31 indexable content pages.
- PASS: CI dependency installation reports 0 vulnerabilities.
- PASS: bilingual canonical/hreflang and Person/WebSite schema checks are covered by the automated gate.

### Phase 2 — source-level UI/accessibility review

- PASS: responsive navigation switches to the mobile menu at 980px.
- PASS: global `:focus-visible`, skip link, reduced-motion handling, responsive image sizing, and `min-width: 320px` safeguards are present.
- PASS: primary navigation exposes accessible labels and `aria-current` for the active page.
- PASS: language switcher exposes `lang` and `hreflang` attributes.
- PASS: current `Seo.astro` uses the WebP profile asset for the default social preview and declares `image/webp`.
- PASS: favicon declarations are present in `Seo.astro`.

### Production-only gates still open

- OPEN: real-device/browser visual inspection across the complete Persian/English route matrix.
- OPEN: Lighthouse/Core Web Vitals measurement.
- OPEN: production HTTP status verification for all canonical URLs.
- OPEN: Search Console indexing, canonical selection, sitemap processing and query data.
- OPEN: manual Chrome/Firefox keyboard and accessibility verification.

These open items are not represented as failures because they require production/browser evidence unavailable from repository source alone.
