# Entity SEO Architecture

## Goal

The website is a first-party authority surface for Dr. Leila Razavi. The SEO graph therefore treats the person as the stable primary entity and connects professional organizations, publications, podcast content and localized pages to that entity.

## Stable IDs

- `/#person` — primary Person entity
- `/#website` — first-party WebSite entity
- `/#pendar-group` — parent organization
- `/#pendar-nimrokh` — organization
- `/#pendar-nimrokh-qom` — local organization/affiliation

## Rules

1. Prefer references to the stable Person ID over creating a new Person node per page.
2. Use verified identity sources for `sameAs`; do not add unverified profiles merely for quantity.
3. Keep canonical URLs first-party and stable.
4. Use `ProfilePage` on the About page to explicitly connect the page to the Person.
5. Use `ScholarlyArticle` or `Book` for publication detail pages rather than generic Article markup.
6. Use `PodcastSeries` and `PodcastEpisode` for podcast content.
7. Use BreadcrumbList only where the visible breadcrumb represents the actual information hierarchy.
8. Keep Persian and English pages as localized representations of the same first-party entity, connected by reciprocal hreflang.

## Scope boundary

Structured data describes relationships that are already represented by visible site content. It is not used to invent credentials, affiliations, awards, or claims that are absent from the source data.
