# Personal Brand UI/UX v2 — Approved Direction

## Purpose

Bring the Leila Razavi personal-brand website to a polished, coherent editorial-academic standard while preserving the existing public URL structure, bilingual SEO architecture, verified content, and accessibility foundations.

## Product position

The site is a personal authority hub for a psychologist, university lecturer, researcher, and public-facing media presence. It is not a clinic landing page, SaaS product, generic portfolio, or blog.

The visual direction is **Editorial Academic + Human Personal Brand**: restrained, credible, warm, intelligent, contemporary, and distinctly personal.

## Information architecture

Primary navigation exposes five user concepts plus language:

1. About
2. Professional Activity
3. Research & Publications
4. Media
5. Contact / Official Profiles
6. Language

CV and Organizations remain accessible but secondary. Research context remains part of About rather than becoming a competing primary research hub. Existing public routes are preserved unless a later production/search audit explicitly authorizes a redirect.

## Homepage narrative

The homepage follows this sequence:

**Identity → Expertise → Evidence → Professional Authority → Media → Contact**

It should answer who Leila Razavi is, what she does, why her work is credible, and where the visitor should go next. It must not attempt to reproduce the entire site.

## UI principles

- Editorial composition over card-grid UI.
- Strong typography and whitespace over decoration.
- Real portrait imagery used as a human anchor.
- Warm neutral surfaces, dark ink, and restrained teal/turquoise accent.
- Nastaliq/calligraphic typography only as a selective brand accent; never for body copy or dense UI.
- Academic publications should read as scholarly records, not blog cards.
- Expertise should use numbered/editorial rows rather than generic feature cards.
- One clear primary CTA per major decision point; avoid CTA inflation.
- Mobile navigation should be a deliberate hierarchy, not a compressed desktop header.
- Motion remains subtle and respects reduced-motion preferences.

## Content rules

- Never invent credentials, affiliations, publications, or claims.
- Keep verified publication records authoritative.
- Do not duplicate CV content across About and Experience unnecessarily.
- Keep organizational contact details clearly identified as organizational routes.
- Persian and English pages share the same information hierarchy while allowing language-appropriate typography and copy length.

## Engineering rules

- Keep Astro and the current content/SEO architecture.
- Prefer existing components and CSS tokens before creating new abstractions.
- Remove genuine duplication and unused starter artifacts, but avoid speculative rewrites.
- Do not add UI frameworks or unnecessary dependencies.
- Preserve canonical URLs, hreflang, sitemap intent, JSON-LD, noindex compatibility behavior, and accessibility semantics.
- Documentation and code comments must reflect the current architecture; stale planning notes should be marked superseded or updated.

## Definition of done

The redesign is complete when the primary routes share one coherent visual system, navigation is unambiguous on desktop and mobile, homepage hierarchy is intentional, duplicate visual/content patterns are reduced, the bilingual experience remains aligned, the build and route/SEO checks pass, and no important URL or structured-data behavior is unintentionally changed.
