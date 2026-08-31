# Project Context — Leila Razavi Website

This is the living decision log for the website redesign, engineering, UX, content, SEO, and personal-branding work. Update it whenever a new requirement, discovery, decision, or constraint is established.

## Mandatory memory rule

**Every new requirement, user correction, important discovery, bug, CI failure, design observation, content standard, technical constraint, or decision that can affect future work MUST be added to this document in the same working wave. Do not leave important project knowledge only in chat.**

When a new issue appears, record:

- what was discovered;
- why it matters;
- the decision/fix;
- whether it is verified;
- which wave/PR it belongs to;
- any follow-up work still required.

Before starting a later wave, review this document so prior decisions and unresolved issues are not forgotten.

## Product goal

Build the official Leila Razavi website as a credible professional identity and evidence portfolio, not a simple CV. The site should communicate professional identity, academic/research activity, public education/media presence, credentials, and trustworthy external references.

## Core UX / UI decisions

- Persian and English must be one design system, not two independently designed websites.
- English pages must have the same hierarchy, spacing rhythm, typography scale, component logic, and visual quality as Persian pages; language/content may differ.
- The About page is currently the strongest visual/content reference and should be treated as a benchmark for the rest of the site.
- Headings are currently too large in several pages. Prefer a restrained responsive type scale and shared design tokens over page-specific oversized values.
- Avoid one-off hard-coded colors, spacing, and typography when a shared token/component can express the same intent.
- Mobile must be treated as a first-class layout, not a desktop layout compressed into a smaller viewport.

## Content presentation standard

Every professional evidence item should provide context, not just a title and one sentence.

Preferred structure:

1. What it is
2. What it covers / represents
3. Why it is professionally relevant
4. Evidence or source
5. Clear next action / external link when applicable

This standard applies to:

- certificates and continuing education
- publications
- media appearances
- podcast episodes
- professional activities
- organizations and collaborations
- academic/educational activities
- public/social profiles

For social and media links, explain what the channel or appearance contains and why it is relevant instead of using generic labels such as “professional presence”.

## Certificates

A reusable certificates/evidence model is required. It should support multiple certificates without redesigning the page for each new item.

Each certificate should support:

- exact title
- issuing institution
- instructor/director/authorizing person when documented
- duration/date when documented
- topic/field
- 2–4 sentence professional description
- full certificate image with accessible alt text
- evidence/source link when available
- optional verification metadata

Current certificates supplied for the next implementation wave:

- Neuroscience Based Management of Anxiety Disorders — 20 Hours — Tehran University of Medical Sciences — directed by Dr. Mahdi Shafiee Sabet.
- Neuroscience Based Approach to Mood Disorders — 20 Hours — Tehran University of Medical Sciences — authorized by Dr. Mahdi Shafiee Sabet.

Do not infer undocumented credentials or claims from certificate artwork.

## SEO / identity principles

- Keep Person, WebSite, Breadcrumb, Podcast, and other structured data aligned with actual page content.
- `sameAs` should represent external identity/profile sources rather than internal website URLs where possible.
- Social preview images must match the actual asset type and page-specific artwork where relevant.
- Preserve stable public URLs unless there is a documented migration reason.
- Persian/English alternate links and canonical URLs must remain internally consistent.

## Engineering principles

- Keep the Astro architecture and shared layout/component system coherent.
- Prefer shared design tokens over duplicated page CSS.
- Do not declare work complete until build, UI architecture tests, and relevant quality checks have been run on the actual current commit.
- When a CI failure appears, diagnose the actual failing assertion and current commit before changing code.
- Do not hide or weaken tests just to make CI green.
- Before merging a wave, inspect the final diff and confirm no intended content or UX changes were accidentally dropped during conflict resolution.

## Current Wave 2 state

- PR #51: `fix: Wave 2 core correctness and SEO hardening`.
- Branch: `review/wave-1-2`.
- The branch was synchronized with current `main` through an explicit merge commit after GitHub reported divergence and a conflict in `src/pages/index.astro`.
- The homepage resolution intentionally preserves the Wave 2 branch's stronger explanatory copy and restrained typography rather than reverting to the oversized `main` variant.
- `src/components/Seo.astro`, the Persian podcast landing page, and the Persian podcast episode page were confirmed identical between current `main` and the Wave 2 branch before synchronization.
- CI has reported the failure `header should use the redesigned inner shell` on an earlier/current PR run. The assertion currently exists in `scripts/ui-architecture-test.mjs` and checks for `class="header-inner"`; `src/components/Header.astro` currently contains that exact class. This means the failure must be verified against the exact commit/run rather than “fixed” by weakening the assertion.
- **New rule from the latest review:** whenever a CI error or any other new project issue is reported by the user, record it here immediately, diagnose it against the current repository state, and keep the unresolved item visible until a current verification run passes.

## Next planned work

1. Verify current CI/build state after branch synchronization, including the header architecture test.
2. Implement certificates/evidence content model and the supplied certificates.
3. Apply the content-presentation standard consistently across all evidence sections.
4. Finish Persian/English visual parity and normalize oversized headings/spacing.
5. Continue accessibility, image/font performance, SEO/entity cleanup, and production QA.

## Working rule

This document is the project's persistent working memory. **Every new user requirement, correction, important discovery, design rule, content rule, bug, CI failure, decision, or technical constraint must be added here in the same working wave.** Future work must consult and update this log rather than relying on chat history alone.
