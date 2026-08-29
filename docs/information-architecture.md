# Information Architecture Decision — Current

> این سند منبع تصمیم برای معماری اطلاعات سایت است. Navigation UX، SEO architecture و URL preservation عمداً از هم جدا نگه داشته می‌شوند.

## Product model

سایت یک **Personal Brand + Academic Profile + Editorial Media** است و باید هم‌زمان سه کار را انجام دهد:

1. هویت حرفه‌ای را برای مخاطب عمومی سریع و روشن کند.
2. برای دانشگاهیان، پژوهشگران و همکاران حرفه‌ای، منبعی معتبر از سوابق و آثار مستند باشد.
3. برای موتورهای جست‌وجو، یک Entity Hub منسجم برای «دکتر لیلا رضوی» بسازد.

## Primary navigation

- **درباره من** → `/about/`
- **فعالیت حرفه‌ای** → `/experience/`
- **پژوهش و آثار** → `/publications/`
- **رسانه** → `/media/`
- **ارتباط** → `/contact/`
- زبان → نسخه انگلیسی متناظر

`/cv/` و `/organizations/` عمداً از navigation اصلی خارج هستند، اما حذف نشده‌اند و باید از مسیرهای contextual در دسترس باشند.

## Route policy

| Route | Decision | Purpose |
|---|---|---|
| `/` | KEEP | Primary brand entry point. Identity, expertise, evidence and next actions. |
| `/about/` | KEEP | Identity, positioning, expertise and research context. Not a second CV. |
| `/experience/` | KEEP | Professional trajectory, roles and affiliations. |
| `/cv/` | KEEP / SECONDARY | Compact résumé-style reference for users who explicitly need it. |
| `/publications/` | KEEP / PRIORITY | Authoritative scholarly hub and verified publication index. |
| `/publications/[id]/` | KEEP | Individual scholarly evidence pages. |
| `/research/` | LEGACY / NOINDEX | Consolidated compatibility route; do not restore as an independent indexable hub. |
| `/organizations/` | KEEP / SECONDARY | Entity and affiliation context. |
| `/media/` | KEEP | Public-facing media hub. |
| `/media/sohbat-jan/` | KEEP | Podcast series entity/landing page. |
| `/contact/` | KEEP | Official profiles and organizational contact routes. |
| `/en/*` | KEEP | Parallel English route space with reciprocal localization. |

## Research policy

`/research/` and `/en/research/` are compatibility routes, not competing content hubs. Research context belongs inside About and the authoritative content belongs in Publications. These legacy routes remain outside the sitemap and use intentional noindex behavior.

## English parity

Persian and English pages must represent the same entity and equivalent page intent. They do not need identical copy or identical visual density, but they must not diverge in information architecture or omit important primary destinations without a deliberate reason.

## URL preservation

No valuable public URL should be deleted merely to simplify navigation. Redirect or consolidation decisions must consider:

- sitemap output;
- canonical URLs;
- internal links;
- external backlinks;
- Search Console indexing and click data.

## UX hierarchy

The homepage should have one dominant next action and a small number of secondary actions. Inner pages should use contextual links rather than forcing CV, Organizations or Research into primary navigation.

## Current implementation gaps to resolve

The following are implementation issues, not IA decisions:

- nested `<main>` elements exist because BaseLayout owns `<main>` while several pages create another `<main>`;
- About renders `position.start/end` even though the current `person.positions` data model does not define those fields;
- UI architecture and design-system tests are not both enforced by CI;
- production browser/Lighthouse/Search Console verification is still separate from source-level QA.

These must be resolved before the project is described as fully release-hardened.
