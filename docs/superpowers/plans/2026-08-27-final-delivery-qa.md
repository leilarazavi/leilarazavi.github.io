# Final Delivery QA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the Leila Razavi personal-brand website from release candidate to a production-verified, handoff-ready state without unnecessary redesign or feature expansion.

**Architecture:** Preserve the existing Astro/static-site architecture, shared SEO/entity graph, bilingual route structure, and design system. Add only release-hardening checks or narrowly scoped fixes that are demonstrated by production QA; use GitHub Actions as the authoritative build/test gate because the current execution environment cannot clone GitHub repositories directly.

**Tech Stack:** Astro 7, TypeScript, Node 22.12, GitHub Pages, GitHub Actions, sitemap integration, JSON-LD Schema.org.

**Spec:** Final delivery audit agreed with the site owner on 2026-08-27.

## Global Constraints

- Do not redesign the site unless production QA identifies a concrete defect.
- `main` remains the production source of truth; all release work is isolated on `release/final-delivery-qa` until final review.
- Preserve canonical Persian/English routes and the stable Person/WebSite entity IDs.
- Preserve `/research/` and `/en/research/` as compatibility/noindex routes unless evidence shows a defect.
- Node version remains `>=22.12.0`.
- Every code change must be covered by an automated check where deterministic behavior can be tested.
- Do not claim Lighthouse, Core Web Vitals, Search Console indexing, or Google-selected canonical status without production evidence.

---

### Phase 1: Production Verification and Release Hardening

**Files:**
- Modify only files justified by failing production checks.
- Existing primary checks: `scripts/seo-smoke-test.mjs`, `scripts/route-quality-audit.mjs`.
- Documentation: `docs/production-seo-qa.md`, `docs/route-audit.md`.

**Deliverable:** Deterministic source/build checks cover all public primary routes, canonical/hreflang relationships, robots/indexability, JSON-LD identity nodes, sitemap generation, and social preview metadata.

- [ ] Build the current branch in GitHub Actions and inspect the quality-gate result.
- [ ] Compare generated route expectations with the live public route set.
- [ ] Verify the generated sitemap excludes the legacy noindex research routes.
- [ ] Verify robots and sitemap are reachable on the deployed domain.
- [ ] Verify all primary Persian and English routes have one H1, title, canonical, hreflang pair, x-default, and stable Person/WebSite nodes.
- [ ] Verify social preview metadata; if SVG OG images fail a real crawler test, replace the default OG image with a production-safe raster asset while preserving the design.
- [ ] Add or update deterministic tests for every defect discovered.
- [ ] Run the GitHub quality gate and deployment workflow.
- [ ] Record PASS/FAIL/ACCEPTED-RISK results in `docs/production-seo-qa.md`.

### Phase 2: Browser and UI/UX Release QA

**Files:**
- Modify only the component/style/route file responsible for a confirmed defect.
- Update `docs/production-seo-qa.md` with browser QA evidence.

**Deliverable:** Desktop and mobile experience is free of release-blocking layout, interaction, typography, overflow, navigation, and accessibility defects.

- [ ] Inspect homepage, About, CV, Experience, Publications, Media, Contact, Organizations, and their English counterparts on mobile and desktop.
- [ ] Check responsive navigation, focus states, skip link, keyboard traversal, reduced motion, image alt text, and interactive controls.
- [ ] Check long Persian/English headings, publication titles, metadata, and links for overflow or broken wrapping.
- [ ] Check 404 behavior and internal links.
- [ ] Fix only reproducible defects.
- [ ] Re-run the automated quality gate after each fix.

### Phase 3: SEO, Entity, and External-Corroboration QA

**Files:**
- Modify `src/lib/person.ts`, `src/lib/schema.ts`, or page content only when an external-source mismatch is confirmed.
- Update `docs/production-seo-qa.md` with verified source references.

**Deliverable:** Public professional identity is internally consistent and supported by authoritative external profiles/publications.

- [ ] Verify name variants, professional titles, affiliations, positions, credentials, and research interests against authoritative public sources.
- [ ] Verify Google Scholar, Instagram, Pendar profile, Pendar Instagram, podcast, and official website links.
- [ ] Verify publication titles, authors, years, journal/publisher, DOI/identifiers where available.
- [ ] Check branded Persian queries and English disambiguation queries.
- [ ] Check whether external profiles consistently link or refer to the official site where practical.
- [ ] Identify remaining Google entity-collision risks and document them as accepted risks rather than inventing unsupported claims.

### Phase 4: Repository and Handoff Cleanup

**Files:**
- Documentation and repository metadata only unless prior phases identify code defects.

**Deliverable:** Repository is clean and understandable for client handoff.

- [ ] Review all non-main branches for merged/obsolete work.
- [ ] Delete only branches confirmed merged and no longer needed; never delete an unreviewed branch.
- [ ] Ensure README explains setup, build, deployment, route architecture, SEO architecture, and handoff notes.
- [ ] Ensure CI is green on the release branch.
- [ ] Produce a final QA matrix with PASS/FAIL/ACCEPTED-RISK status.

### Phase 5: Final Delivery Gate

**Files:**
- Final documentation only unless a release blocker remains.

**Deliverable:** A defensible release decision for `main`.

- [ ] Require successful build and quality checks.
- [ ] Require no unresolved release-blocking browser or SEO defect.
- [ ] Require production URL verification after deployment.
- [ ] Require Search Console evidence for indexing/canonical claims when account access is available; otherwise mark them as post-handoff verification.
- [ ] Merge the release branch only after all required gates pass.
- [ ] Record final commit SHA, deployment URL, known accepted risks, and post-launch monitoring actions.
