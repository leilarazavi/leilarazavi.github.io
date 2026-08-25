# Final QA Matrix — Personal Brand Website

This document separates what can be verified from repository source from what requires a deployed browser/Search Console environment.

## A. Architecture — source verified

- [x] Primary navigation follows the approved five-concept model.
- [x] CV is secondary, not a primary navigation item.
- [x] Organizations is secondary/supporting.
- [x] Publications is the primary scholarly hub.
- [x] Research legacy routes consolidate into About and are noindex.
- [x] Persian and English route spaces remain parallel.
- [x] Shared design tokens are loaded centrally.
- [x] Header, Footer, LanguageSwitcher, SocialLinks and Breadcrumbs are reusable components.

## B. SEO — source verified

- [x] Production `site` URL is configured.
- [x] Canonical URLs remain page-level source of truth.
- [x] Reciprocal `fa` / `en` hreflang is generated from canonical paths.
- [x] `x-default` points to the primary Persian route.
- [x] noindex routes use `noindex, follow`.
- [x] Consolidated research routes are excluded from the sitemap.
- [x] robots.txt references the generated sitemap index.
- [x] JSON-LD supports Person, WebSite and page-specific schemas.
- [x] Publication detail pages have scholarly schemas where supplied.
- [x] Podcast series/episode schemas are supported.

## C. Accessibility — source verified

- [x] Skip link exists at document level.
- [x] Visible focus styles exist globally.
- [x] Reduced-motion preference is respected.
- [x] Header exposes `aria-current` for the active route.
- [x] Mobile menu has `aria-expanded` and `aria-controls`.
- [x] Decorative menu icon spans are hidden from assistive technology.
- [x] Publication filters have explicit label/control associations.
- [x] Images use explicit dimensions and meaningful alt text where available.

## D. Content integrity — source verified

- [x] Publication lists only promote verified records.
- [x] No new credentials were invented during redesign.
- [x] Identity/profile data is centralized in `person.ts`.
- [x] Website metadata is centralized in `site.ts`.
- [x] Public organizational phone is described as an organizational contact route, not a personal number.

## E. Deployment/browser checks — must be performed after deployment

- [ ] `npm run build` succeeds on a clean install.
- [ ] Every primary route returns HTTP 200.
- [ ] Every canonical URL returns HTTP 200.
- [ ] Every hreflang target returns HTTP 200 and pairs reciprocally.
- [ ] Sitemap contains only canonical/indexable URLs.
- [ ] No important indexable page is accidentally `noindex`.
- [ ] Rendered JSON-LD passes Schema.org/Rich Results validation.
- [ ] No duplicate title tags among indexable pages.
- [ ] No duplicate meta descriptions where uniqueness is expected.
- [ ] Open Graph image resolves and has the expected dimensions.
- [ ] 404 page is served correctly for invalid paths.
- [ ] Mobile menu works with keyboard and touch.
- [ ] No horizontal overflow at common mobile widths.
- [ ] Lighthouse mobile and desktop reviewed.
- [ ] Core Web Vitals reviewed after real-user data becomes available.
- [ ] Search Console sitemap submitted and indexed URL set reviewed.
- [ ] Search Console canonical selection reviewed for homepage/About/Publications.

## Release rule

Do not describe the project as fully SEO-validated until section E has been checked in a deployed/browser environment. Source quality and search-engine behavior are different validation layers.
