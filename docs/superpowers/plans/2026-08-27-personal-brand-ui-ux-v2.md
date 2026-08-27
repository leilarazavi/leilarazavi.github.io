# Personal Brand UI/UX v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a coherent, premium editorial-academic redesign of the Leila Razavi personal-brand site without breaking its bilingual routes, SEO architecture, verified content, or accessibility foundations.

**Architecture:** Keep Astro 7, Content Collections, shared SEO/schema utilities, and the current route architecture. Execute the redesign in four large implementation waves: visual system/navigation, homepage and core content surfaces, bilingual/secondary route parity and cleanup, then full QA. Prefer consolidation of existing patterns over rewriting the application.

**Tech Stack:** Astro 7, TypeScript, CSS custom properties, GitHub Pages, existing project scripts.

**Spec:** `docs/superpowers/specs/2026-08-27-personal-brand-ui-ux-v2.md`

## Global Constraints

- Preserve existing public URLs and bilingual route structure.
- Keep CV and Organizations accessible but secondary to primary navigation.
- Keep research context consolidated rather than restoring a competing `/research/` hub.
- Preserve canonical, hreflang, sitemap, robots, JSON-LD, and noindex intent.
- Never invent credentials, affiliations, publications, or professional claims.
- Use editorial academic + human personal-brand visual language.
- Use warm neutral surfaces, dark ink, and restrained teal/turquoise accent.
- Keep body/UI typography highly legible; calligraphic/Nastaliq fonts are accents only.
- Do not add UI frameworks, animation libraries, or unnecessary dependencies.
- Remove genuine unused starter artifacts only after confirming references.
- Prefer large cohesive implementation batches so the project can reach delivery quickly.
- Do not add comments to modified code unless they document a non-obvious architectural constraint.

---

## Wave 1 — Visual foundation + global navigation

**Outcome:** The entire site immediately looks like one intentional personal brand, and navigation stops competing with content.

**Primary files:**
- `src/styles/variables.css`
- `src/styles/typography.css`
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/LanguageSwitcher.astro`
- shared footer/accessibility components only where required

### Implementation

- [ ] Reconcile all existing design tokens into one semantic palette: warm neutral surfaces, dark warm ink, restrained teal accent, borders, muted text, focus states, and interaction states.
- [ ] Establish responsive typography scales for Persian and English, including appropriate RTL line heights and reading widths.
- [ ] Establish consistent container widths, page gutters, section spacing, grid primitives, button/link primitives, and focus treatment.
- [ ] Refine the brand lockup so the name/title feels personal and editorial without reducing readability.
- [ ] Rebuild desktop Header around exactly five conceptual destinations plus language: About, Professional Activity, Research & Publications, Media, Contact/Official Profiles.
- [ ] Keep CV and Organizations out of desktop primary navigation; expose them contextually and, where appropriate, in the mobile secondary area.
- [ ] Make mobile navigation a deliberate full-width menu with primary/secondary hierarchy rather than a squeezed desktop row.
- [ ] Preserve route-aware active states and all current ARIA semantics.
- [ ] Audit every global style for duplicate declarations introduced by previous design-system iterations and consolidate only where behavior remains equivalent.
- [ ] Confirm the resulting layout at common desktop/tablet/mobile widths and prevent horizontal overflow.

### Verification gate

- [ ] `npm run build` passes after Wave 1.
- [ ] Header works by keyboard and touch.
- [ ] Active route state remains correct in both locales.
- [ ] No global style or accessibility regression is introduced.

---

## Wave 2 — Homepage + authority surfaces

**Outcome:** The homepage becomes the strongest expression of the brand and communicates identity, expertise, evidence, professional authority, media presence, and next action in a clear sequence.

**Primary files:**
- `src/pages/index.astro`
- `src/pages/en/index.astro`
- `src/components/PublicationCard.astro`
- `src/components/SectionHeading.astro`
- `src/components/ExpertiseList.astro`
- relevant media/publication shared components

### Implementation

- [ ] Rebuild the Persian homepage around: Identity → Expertise → Evidence → Professional Authority → Media → Contact.
- [ ] Rework Hero into an editorial portrait composition with a concise professional positioning statement and a small number of intentional actions.
- [ ] Replace generic feature-card behavior with editorial rows/list structures where the content is better understood as expertise or professional records.
- [ ] Present only the strongest three verified publications on Home; retain the full Publications hub as the authoritative destination.
- [ ] Redesign publication presentation as scholarly records with title, authorship, year, venue, and a clear detail action.
- [ ] Keep Experience and Organizations discoverable without reproducing their full datasets on Home.
- [ ] Make the podcast/media section feel like part of the same brand rather than an unrelated embedded product.
- [ ] Finish the homepage with one clear official-profile/contact action and remove competing low-value CTAs.
- [ ] Build English Home against the same structural hierarchy while respecting English typography and copy length.
- [ ] Extract only genuinely repeated composition patterns into shared components; do not create abstractions that make simple page sections harder to understand.
- [ ] Remove or rewrite stale page-local CSS after the new shared primitives are in use.

### Verification gate

- [ ] `npm run build` passes.
- [ ] Persian and English homepage section order and intent match.
- [ ] No unverified claim or publication is introduced.
- [ ] Hero image has explicit dimensions/alt behavior and does not cause layout instability.
- [ ] Mobile homepage has no horizontal overflow and remains readable without excessive card stacking.

---

## Wave 3 — Core pages, assets, duplication cleanup, and bilingual parity

**Outcome:** The rest of the site feels like the same product rather than a homepage redesign sitting on top of older page templates.

**Primary files:**
- `src/pages/about.astro`
- `src/pages/experience.astro`
- `src/pages/publications/index.astro`
- publication detail routes/components
- `src/pages/media.astro`
- `src/pages/contact.astro`
- `src/pages/cv.astro`
- `src/pages/organizations.astro`
- corresponding `/en/` routes
- `src/components/*`
- `src/assets/*`
- `public/*`
- relevant docs

### Implementation

- [ ] Reframe About as identity/positioning/expertise/research-context rather than a second CV.
- [ ] Reframe Experience as the narrative professional trajectory and make its relationship to CV explicit.
- [ ] Make CV compact and reference-oriented rather than another narrative page.
- [ ] Keep Organizations secondary and contextual, with clear entity relationships and no unnecessary prominence.
- [ ] Make Publications the authoritative scholarly hub with consistent filtering/list/detail presentation.
- [ ] Keep Media focused on public-facing work such as the podcast and verified public sources.
- [ ] Reframe Contact as official profiles/contact routes and preserve organizational-contact clarity.
- [ ] Apply the same design primitives to all English counterparts and resolve any structural drift.
- [ ] Audit internal links for dead ends, duplicate destinations, unnecessary back-and-forth navigation, and links that bypass the approved hierarchy.
- [ ] Audit repeated copy and repeated UI blocks across About/Experience/CV and merge or contextualize where duplication harms comprehension.
- [ ] Audit profile/image/font assets for true duplication; retain only files with active purpose and preserve the correct optimized variants.
- [ ] Confirm Astro starter assets/components are unused before deletion.
- [ ] Replace any remaining starter favicon with the brand-specific lightweight SVG mark.
- [ ] Consolidate CSS/component duplication discovered during the visual pass without changing content semantics.
- [ ] Update relevant MD planning/audit files so they describe the new approved architecture rather than obsolete v1 assumptions.

### Verification gate

- [ ] `npm run build` passes.
- [ ] All primary and secondary public routes remain present.
- [ ] Persian/English route pairs remain reciprocal.
- [ ] No broken internal links are introduced.
- [ ] No unused starter references remain.
- [ ] Visual primitives are shared consistently across the core pages.

---

## Wave 4 — Production QA, SEO preservation, accessibility, and release cleanup

**Outcome:** The redesigned site is ready for delivery, with evidence that visual cleanup did not damage search or accessibility behavior.

**Primary files:**
- `docs/route-audit.md`
- `docs/information-architecture.md`
- `docs/technical-seo-audit.md`
- `docs/final-qa.md`
- existing `scripts/*` QA files only when necessary

### Implementation and verification

- [ ] Run a clean dependency install and production build.
- [ ] Run all repository-provided route/SEO/content smoke tests.
- [ ] Verify HTTP 200 behavior for every primary and canonical route in the deployed environment.
- [ ] Verify canonical URLs and reciprocal `fa`/`en` hreflang targets.
- [ ] Verify sitemap contains only canonical/indexable URLs and compatibility research routes remain excluded as intended.
- [ ] Verify robots output and generated JSON-LD in rendered HTML.
- [ ] Verify title/description uniqueness for indexable pages.
- [ ] Verify favicon and Open Graph assets resolve correctly.
- [ ] Run Lighthouse on representative desktop and mobile pages and address meaningful regressions before release.
- [ ] Test keyboard navigation, focus visibility, reduced motion, mobile menu, touch targets, and common mobile widths.
- [ ] Check for horizontal overflow, layout shift, broken images, and missing alt text.
- [ ] Review Search Console/crawl/indexing data where access is available; do not infer production indexing state from source code alone.
- [ ] Update `docs/final-qa.md` with verified results and clearly distinguish source verification from deployment-only verification.
- [ ] Update `docs/route-audit.md` and `docs/information-architecture.md` if implementation reveals a better-supported final route hierarchy.
- [ ] Review the full diff for accidental content, URL, metadata, or schema changes.
- [ ] Create a final release PR from `feat/brand-ui-ux-overhaul` into `main` only after verification evidence is available.

### Release gate

- [ ] Build succeeds.
- [ ] Core routes work.
- [ ] SEO invariants pass.
- [ ] Accessibility invariants pass.
- [ ] No meaningful mobile/desktop regression remains.
- [ ] Documentation reflects the delivered state.
