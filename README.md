# Leila Razavi — Official Personal Brand Website

Official bilingual personal-brand website for Dr. Leila Razavi, built with Astro and deployed through GitHub Pages.

## Purpose

This project is designed as a **Personal Brand + Academic Profile + Editorial Media** site. The primary goals are:

- make the person's professional identity immediately clear;
- present research and verified publications as the main authority layer;
- keep professional activity, CV, organizations and media distinct;
- strengthen the relationship between the person entity and official profiles;
- provide a clean, accessible and maintainable UI without sacrificing SEO architecture.

## Information architecture

```text
Home
├── About
├── Professional Activity
│   ├── Experience
│   ├── CV
│   └── Organizations (supporting / SEO)
├── Research & Publications
│   ├── Publications
│   ├── Publication detail pages
│   └── Research context → About#research
├── Media
│   ├── Podcast
│   └── Public sources
└── Contact / Official Profiles
```

The primary navigation is intentionally smaller than the full URL graph. CV and Organizations remain available because they serve specific professional/SEO needs, but they are not top-level navigation items.

## Technical stack

- Astro 7
- TypeScript
- Astro Content Collections for publications/research data
- `@astrojs/sitemap`
- Static deployment to GitHub Pages
- Bilingual routes under `/` and `/en/`

## Local development

Requirements: Node.js `>=22.12.0`.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Content model

Publication content lives in `src/content/publications/` and is schema-validated through `src/content.config.ts`. Only records marked as verified are promoted to the public scholarly hub.

Identity, affiliations, profiles and public contact channels are centralized in `src/lib/person.ts`; website-level configuration lives in `src/lib/site.ts`.

## SEO architecture

The shared SEO layer is `src/components/Seo.astro`.

It controls:

- canonical URLs;
- `fa` / `en` / `x-default` hreflang;
- robots directives;
- Open Graph and Twitter metadata;
- Person + WebSite JSON-LD;
- page-specific structured data supplied by routes.

The XML sitemap is generated at build time. Legacy `/research/` routes remain compatibility endpoints and are excluded from the sitemap because they are consolidated/noindex routes.

See:

- `docs/information-architecture.md`
- `docs/route-audit.md`
- `docs/technical-seo-audit.md`
- `docs/english-parity-audit.md`
- `docs/production-seo-qa.md`

## Important implementation rule

Do not change or delete an indexed URL merely to make the navigation cleaner. Treat **Navigation UX**, **SEO architecture**, and **URL preservation** as separate decisions. Any future redirect should be backed by an audit of internal links, sitemap, external references and Search Console data.

## Release / QA status — 2026-08-27

### Verified

- GitHub Actions build and quality gate are green.
- SEO smoke test covers 16 primary routes.
- Route-quality audit covers 35 generated HTML pages / 31 indexable pages.
- CI dependency installation reports 0 vulnerabilities.
- Bilingual canonical/hreflang checks pass at source/build level.
- Person + WebSite structured-data checks pass at source/build level.
- Responsive navigation, focus-visible states, skip link, reduced-motion handling and responsive overflow safeguards are present.
- Open Graph/Twitter previews use the raster profile image with `image/jpeg` metadata.
- Apple touch icon uses the raster profile image.

### Production-only verification still required

The following are intentionally **not** claimed as PASS without browser/account evidence:

- complete real-device visual QA;
- Lighthouse/Core Web Vitals;
- production HTTP verification for every canonical URL;
- rendered structured-data inspection in a browser/crawler;
- Search Console indexing/canonical/sitemap reports;
- manual Chrome/Firefox accessibility verification.

See `docs/production-seo-qa.md` for the exact protocol and evidence.
