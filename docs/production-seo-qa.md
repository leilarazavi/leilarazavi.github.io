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
