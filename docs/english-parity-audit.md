# English Parity Audit — v1

## Goal

The English site is a true locale of the Persian personal-brand site, not a separate mini-site. Equivalent routes should communicate the same entity, preserve the same SEO intent, and use the same visual system.

## Decisions

- `/en/` mirrors `/` in information architecture and primary conversion paths.
- `/en/about/` mirrors `/about/` but keeps English-specific copy; it must not become a second CV.
- `/en/publications/` remains the primary scholarly hub; individual publication routes remain indexable when they have substantive verified content.
- `/en/research/` follows the Persian consolidation strategy and should not compete with Publications as a second scholarly hub.
- `/en/cv/` remains a compact professional credential endpoint and is not a primary navigation item.
- `/en/organizations/` remains an entity-support page rather than primary navigation.
- `/en/media/` and the podcast series route preserve the same media hierarchy as Persian.
- `/en/contact/` is the official profiles/contact hub.

## UI rule

All English pages touched during redesign must consume the shared design tokens. Page-specific hex colors and arbitrary spacing should be treated as technical debt and removed when the page is refactored.

## SEO rule

The English page must have a canonical under `/en/`, and the SEO layer must expose a reciprocal Persian `hreflang` for the equivalent route. No English page should claim equivalence to a Persian page that does not contain materially equivalent content.

## QA checklist

- [ ] Route parity
- [ ] Reciprocal hreflang
- [ ] Unique title/description
- [ ] Canonical correctness
- [ ] No accidental noindex
- [ ] Internal links use `/en/` routes
- [ ] No Persian-only navigation labels in English UI
- [ ] Shared design tokens used
- [ ] Mobile layout parity
- [ ] Structured data language/URL correctness
