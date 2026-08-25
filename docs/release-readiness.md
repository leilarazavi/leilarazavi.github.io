# Production Release Readiness

## Automated

- [ ] `npm ci` completes
- [ ] `npm run build` completes
- [ ] SEO smoke test passes
- [ ] sitemap is generated
- [ ] primary Persian/English routes are generated

## HTML / SEO

- [ ] one H1 per primary page
- [ ] unique title and description
- [ ] canonical points to intended URL
- [ ] reciprocal hreflang is present
- [ ] noindex only on intentionally transitional pages
- [ ] JSON-LD contains the stable Person ID
- [ ] publication detail pages expose appropriate scholarly schema
- [ ] podcast pages expose podcast schema

## UX / accessibility

- [ ] mobile navigation works with keyboard
- [ ] visible focus state is preserved
- [ ] meaningful images have alt text
- [ ] decorative imagery is not announced unnecessarily
- [ ] touch targets are usable on mobile
- [ ] reduced-motion preference is respected

## Production-only

These cannot be honestly verified from source code alone:

- Lighthouse scores
- Core Web Vitals field data
- Google Search Console indexing
- canonical selected by Google
- rich-result eligibility
- real-user accessibility behavior across browsers

Record these after deployment rather than treating them as assumptions.
