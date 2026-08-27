# Final Handoff — Leila Razavi Website

Date: 2026-08-27

## Release objective

This repository is the production source for the official bilingual personal-brand website of Dr. Leila Razavi. The release is designed around four authority layers: professional identity, verified research/publications, professional activity, and official media/profile references.

## Verified release gates

### Code / build

- Astro build and CI quality gate: PASS.
- SEO smoke test: PASS for 16 primary routes.
- Route quality audit: PASS for 35 generated HTML pages / 31 indexable pages.
- Dependency installation/security check in CI: PASS; 0 vulnerabilities reported.

### SEO architecture

- Canonical URL generation: PASS at source/build level.
- Persian/English hreflang reciprocity: PASS at source/build level.
- x-default: PASS at source/build level.
- Person and WebSite JSON-LD identity nodes: PASS at source/build level.
- Stable Person ID: `https://leilarazavi.github.io/#person`.
- Sitemap generation: PASS at build level.
- Legacy `/research/` compatibility routes remain excluded/noindex as documented.

### UI / accessibility source review

- Responsive navigation: PASS at source level.
- Skip link: PASS.
- Focus-visible states: PASS.
- Reduced-motion handling: PASS.
- Responsive overflow safeguards: PASS.
- Navigation accessibility labels / active-page state: PASS.
- Language switcher language/hreflang attributes: PASS.
- Raster social preview and Apple touch icon: PASS.

## External identity / authority checks

The live site is indexed and discoverable for branded queries. Public sources independently corroborate the professional/research identity and multiple publications. The English name has a known collision risk with unrelated researchers/professionals, so disambiguation should continue through the existing Person entity, psychology-specific descriptors, Qom affiliation, publications and first-party profile links.

Examples of corroborated research records include the 2021 International Clinical Neuroscience Journal paper listing Leila Razavi with Islamic Azad University of Qom affiliation and the 2019 migraine/MBSR-ACT paper with the same identity signal.

## Open production-only checks

These are not failures; they require browser or account-level evidence that is not safely reproducible from repository inspection alone:

1. Real-device/browser visual QA across the complete Persian/English route matrix.
2. Lighthouse and Core Web Vitals measurements.
3. HTTP 200 verification for all canonical URLs in the deployed environment.
4. Rendered JSON-LD validation through a browser/crawler.
5. Google Search Console indexing, canonical selection, sitemap processing and branded-query data.
6. Manual Chrome/Firefox keyboard and accessibility verification.

## Accepted risks

- English `Leila Razavi` is a non-unique name. The site mitigates this with professional descriptors, Persian identity, Qom affiliation, research topics, publications and linked first-party profiles, but cannot control unrelated third-party results.
- Search Console/entity consolidation cannot be guaranteed from source code alone.
- Browser-only visual/performance measurements must be completed from a real production-capable browser environment before claiming a complete UX/performance PASS.

## Handoff rule

Do not introduce new features or redesigns during handoff unless a production verification step reveals a concrete defect. Any post-release change should preserve existing URLs, canonical/hreflang relationships, the stable Person ID, and verified publication data.
