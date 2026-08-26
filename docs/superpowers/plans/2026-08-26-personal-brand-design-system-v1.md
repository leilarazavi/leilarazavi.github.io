# Personal Brand Design System v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the visible design layer of the Leila Razavi personal-brand site around a restrained editorial academic identity, while preserving SEO routes and content architecture.

**Architecture:** Keep Astro 7 and the existing route/content/schema architecture. Centralize visual tokens and typography, redesign Header/Home/mobile composition, preserve primary SEO destinations, and remove remaining starter artifacts. Use Nastaliq/calligraphic typography selectively for brand accents rather than body copy.

**Tech Stack:** Astro 7, TypeScript, CSS custom properties, GitHub Pages.

**Spec:** Approved Personal Brand UI/UX direction from the 2026-08-26 conversation.

## Global Constraints

- Preserve existing public URLs and bilingual route structure.
- Do not remove SEO-relevant destinations merely because they leave the primary Header.
- Persian content is RTL and must remain readable at long lengths.
- Body/UI typography must remain highly legible; Nastaliq/calligraphic fonts are decorative brand accents only.
- Use turquoise/teal green as the primary brand accent, with warm neutral surfaces and dark ink.
- Keep visual language editorial, academic, warm, minimal, and personal; avoid generic clinic/SaaS aesthetics.
- Do not add unnecessary JS, UI frameworks, animation libraries, or dependencies.
- Remove unused Astro starter assets/components that are no longer referenced.
- Replace the favicon with a Leila Razavi-specific SVG mark and wire explicit favicon metadata.
- Do not add comments to modified code files.

---

### Task 1: Establish the approved design tokens and typography system

**Files:**
- Modify: `src/styles/variables.css`
- Modify: `src/styles/typography.css`
- Modify: `src/styles/global.css`
- Modify: `src/layouts/BaseLayout.astro`

**Deliverable:** One visual source of truth for colors, typography, grid/container sizing, spacing, focus states, and responsive behavior.

- [ ] Replace the brown accent system with a restrained turquoise/teal-green palette, keeping warm ivory surfaces and dark warm ink.
- [ ] Add semantic font tokens for body, heading, Nastaliq, and calligraphic accent usage.
- [ ] Use `Noto Nastaliq Urdu` and `Aref Ruqaa Ink` through CSS font loading for selective brand accents; do not apply them to body text.
- [ ] Define display/title/body/meta scales for Persian and English with RTL-friendly line heights.
- [ ] Define 12-column desktop grid primitives and narrow reading widths.
- [ ] Normalize container gutters and mobile spacing.
- [ ] Add reusable button/link/focus primitives without introducing a UI framework.
- [ ] Update the document theme color to the new palette.
- [ ] Remove stale comments from the modified CSS/layout files.

---

### Task 2: Redesign the Header and mobile navigation

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/LanguageSwitcher.astro`

**Deliverable:** Compact editorial Header with five primary concepts, strong brand identity, and a clean mobile menu.

- [ ] Keep only About, Professional Activity, Research & Publications, Media, Contact, and language switcher as primary navigation.
- [ ] Apply a stronger brand lockup with a small calligraphic/Nastaliq accent while keeping the professional title in the readable UI font.
- [ ] Add a restrained teal active state and thin border treatment.
- [ ] Make desktop navigation compact and prevent wrapping.
- [ ] Make mobile navigation full-width, readable, and clearly separated into primary and secondary destinations.
- [ ] Keep CV and Organizations accessible from contextual links/mobile secondary area without promoting them to desktop primary navigation.
- [ ] Preserve route calculation and active-state behavior.
- [ ] Verify keyboard focus, aria-expanded, aria-controls, and aria-current behavior.

---

### Task 3: Rebuild the Persian homepage composition

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/components/PublicationCard.astro`
- Create: `src/components/SectionHeading.astro`
- Create: `src/components/ExpertiseList.astro`

**Deliverable:** A high-confidence personal-brand homepage with clear identity, credibility, research authority, media presence, and one final action.

- [ ] Rebuild Hero around professional positioning rather than describing the website itself.
- [ ] Add a restrained credibility strip for psychologist/lecturer/researcher positioning.
- [ ] Use the existing real profile image without inventing new professional claims.
- [ ] Present expertise as editorial numbered rows rather than generic cards.
- [ ] Present only three selected verified publications on Home and preserve the full Publications destination.
- [ ] Redesign publication cards as academic records rather than blog cards.
- [ ] Keep professional activity and organizations discoverable without overloading the page.
- [ ] Make the podcast/media section visually distinct but restrained.
- [ ] Finish with one clear official profiles/contact CTA.
- [ ] Remove excessive page-local duplication where reusable components now cover the same pattern.

---

### Task 4: English parity and shared composition

**Files:**
- Modify: `src/pages/en/index.astro`
- Modify: shared components touched by the Persian homepage where needed

**Deliverable:** English Home follows the same information hierarchy and visual system without drifting from Persian structure.

- [ ] Mirror the Persian section order and visual hierarchy.
- [ ] Keep English typography in the same system without applying Nastaliq fonts.
- [ ] Preserve English route and canonical behavior.
- [ ] Remove page-local visual rules that duplicate the shared design system when they are no longer necessary.

---

### Task 5: Remove Astro starter remnants and replace favicon

**Files:**
- Delete: `src/assets/astro.svg`
- Delete: `src/components/Welcome.astro`
- Delete: `src/assets/background.svg` if confirmed unused
- Modify/Create: `public/favicon.svg`
- Delete: `public/favicon.ico` if the repository's favicon setup is fully replaced by the SVG
- Modify: `src/components/Seo.astro` or `src/layouts/BaseLayout.astro` to explicitly reference the new favicon if not already present

**Deliverable:** No Astro starter visual artifacts remain and the browser favicon is brand-specific.

- [ ] Confirm starter files have no references before deletion.
- [ ] Create a simple SVG monogram/initial mark using the approved teal and warm neutral palette.
- [ ] Add explicit favicon links and appropriate SVG metadata.
- [ ] Keep the favicon lightweight and legible at 16px.

---

### Task 6: Build and quality verification

**Files:**
- Modify: `scripts/seo-smoke-test.mjs` only if verification reveals the current robots assertion is insufficient

**Deliverable:** Build passes and the redesigned routes retain SEO/accessibility invariants.

- [ ] Run `npm ci`.
- [ ] Run `npm run build`.
- [ ] Run the existing SEO smoke test if available through the project workflow.
- [ ] Verify `/`, `/en/`, `/about/`, `/publications/`, `/experience/`, `/media/`, `/contact/`, `/cv/`, and `/organizations/` remain buildable.
- [ ] Verify canonical, hreflang, title, description, JSON-LD, sitemap, and robots output are unchanged in intent.
- [ ] Verify no starter asset references remain.
- [ ] Verify mobile navigation remains accessible.
- [ ] Review the final diff for accidental content/SEO changes.
