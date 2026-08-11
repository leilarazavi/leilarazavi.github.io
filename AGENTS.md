# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is a statically generated Astro portfolio deployed to the GitHub Pages user site at `https://leilarazavi.github.io`. Persian routes contain the active implementation; many English and secondary routes remain empty placeholders.

## Commands

Requires Node.js 22.12 or newer and npm.

```bash
npm ci                              # Reproducible dependency install
npm run dev                         # Start the development server
npm run dev -- --background         # Start development in background mode
npm run astro -- dev status         # Check the background server
npm run astro -- dev logs           # Read background server logs
npm run astro -- dev stop           # Stop the background server
npm run build                       # Generate the production site in dist/
npm run preview                     # Preview the production build
npm run astro -- <command>          # Run another Astro CLI command
```

No lint, formatting, typecheck, or test commands are currently configured. There is no single-test command. Run `npm run build` as the available project validation before considering a change complete.

## Architecture

- Routes use Astro file-based routing under `src/pages/` and default static output.
- `src/layouts/BaseLayout.astro` provides the shared page shell and composes SEO, header, and footer behavior.
- `src/lib/site.ts` is the central source for the production origin, locales, and contact/social links.
- `src/lib/person.ts` contains verified person and professional identity data.
- `src/lib/schema.ts` builds structured JSON-LD consumed by `src/components/Seo.astro`.
- `src/components/Seo.astro` generates canonical URLs, language alternates, social metadata, and structured data.

## Publications

- The active publication source is Markdown in `src/content/publications/`.
- `src/content.config.ts` defines and validates publication frontmatter.
- Only entries with `verified: true` appear in the listing and receive generated detail pages.
- `src/pages/publications/[slug].astro` must enumerate detail pages with `getStaticPaths()` because the project is statically generated.
- `src/data/publications.ts` is currently unused; do not add publication records there unless the architecture is intentionally migrated.
- Do not publish unverified biographical or publication claims.

## Deployment and constraints

- Pushes to `main` deploy through `.github/workflows/deploy.yml`.
- Keep the site origin in `astro.config.mjs` synchronized with `src/lib/site.ts`; otherwise sitemap and canonical/schema URLs can diverge.
- Preserve `public/google37fab1e33d944d9f.html` at its exact path for Google Search Console verification.
- Do not assume `/en/`, contact, experience, or research routes are implemented; inspect them before linking to or modifying them.
- `CLAUDE.md` is a symlink to `AGENTS.md`; edit the shared target rather than creating divergent instructions.
