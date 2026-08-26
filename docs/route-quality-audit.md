# Route Quality Audit

This audit runs against the generated `dist/` output after `astro build`.

## Checks

- every generated HTML document has a `<title>`
- every generated HTML document has `html[lang]`
- every generated HTML document has a canonical URL
- no page has more than one H1
- normal indexable pages expose hreflang links
- legacy `/research/` and `/en/research/` remain `noindex`
- duplicate titles fail the build
- duplicate canonical URLs fail the build
- required public Persian/English routes are present

## Why this exists

The project already has SEO smoke tests for representative metadata. This audit adds a route-wide check against the actual generated HTML so regressions caused by page-level changes are caught before merge.

## Important limitation

This is a static build audit. It cannot prove that Google selected the canonical URL, indexed a page, or accepted structured data. Those remain production/Search Console verification tasks.
