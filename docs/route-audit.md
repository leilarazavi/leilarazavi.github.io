# Route Audit — Personal Brand v1

> این فایل نتیجه‌ی audit معماری routeهاست. تصمیم‌ها عمداً بین **UX Navigation**، **SEO Architecture** و **URL Preservation** تفکیک شده‌اند.

## Final information architecture

```text
Home
├── About
├── Professional Activity
│   ├── Experience
│   ├── CV
│   └── Organizations (supporting / SEO)
├── Research & Publications
│   ├── Publications
│   ├── Publication detail pages
│   └── Research context → About#research
├── Media
│   ├── Podcast
│   └── Public sources
└── Contact / Official Profiles
```

## Route decisions

| Current route | Decision | Rationale |
|---|---|---|
| `/` | KEEP + REBUILD | Primary brand entry point. Must serve both public and professional audiences. |
| `/about/` | KEEP + REFRAME | Main Person/identity narrative. Reduce duplicated CV/experience content but retain research context and selected proof points. |
| `/experience/` | KEEP + REFRAME | Primary destination for professional activity. This is the Header target for «فعالیت حرفه‌ای». |
| `/cv/` | KEEP, HIDDEN FROM PRIMARY NAV | CV is useful for academic/professional users but duplicates Experience when treated as a top-level navigation item. Keep the URL and make it a secondary CTA/download-style destination. |
| `/publications/` | KEEP + SEO PRIORITY | Strong authority/content hub. Keep searchable/filterable and use as the primary destination for «پژوهش و آثار». |
| `/research/` | DO NOT RESTORE AS PRIMARY PAGE | Current implementation already consolidates research context into `/about/#research` and marks the old route `noindex`. Do not create a second competing research hub. |
| `/organizations/` | KEEP, HIDDEN FROM PRIMARY NAV | Useful for Person ↔ Pendar entity relationships and professional context, but not a primary user destination. Link from Experience/CV/About where relevant. |
| `/media/` | KEEP + EXPAND | Important for personal brand beyond academia. Podcast and public appearances deserve a dedicated hub. |
| `/contact/` | KEEP + REFRAME | Better understood as «ارتباط و پروفایل‌های رسمی» than a generic contact page because the available actions are profiles and organizational contact routes. |
| `/en/` | KEEP + REBUILD | International entry point for the same entity. |
| `/en/about/` | KEEP + REFRAME | Must mirror the approved identity narrative, not duplicate every Persian section mechanically. |
| `/en/experience/` | KEEP | Equivalent professional destination. |
| `/en/cv/` | KEEP, HIDDEN FROM PRIMARY NAV | Same rationale as Persian CV. |
| `/en/publications/` | KEEP + SEO PRIORITY | International scholarly authority hub. |
| `/en/research/` | KEEP AS CONSOLIDATED LEGACY ROUTE | Already redirects/consolidates to `/en/about/#research`; do not restore as an independent indexable hub. |
| `/en/organizations/` | KEEP, SUPPORTING | Entity relationship support. |
| `/en/media/` | KEEP | Personal brand/media hub. |
| `/en/contact/` | KEEP | Official profile/contact destination. |

## Important content distinction

### About

**Question answered:** «این شخص کیست و حوزه‌ی فعالیت او چیست؟»

About should establish identity, positioning, expertise, research interests, and a small amount of proof. It should not become a second CV.

### Professional Activity

**Question answered:** «این شخص در چه نقش‌ها و سازمان‌هایی فعالیت داشته است؟»

Experience is the narrative/chronological view. CV remains the compact professional document for users who explicitly want a résumé-style view.

### Research & Publications

**Question answered:** «این شخص چه کار علمی انجام داده است؟»

Publications is the authoritative content hub. Research interests provide context but should not create a competing duplicate hub.

### Media

**Question answered:** «این شخص در فضای عمومی با چه موضوعاتی حضور دارد؟»

Keep podcast and public-source material separate from scholarly publication records.

### Contact

**Question answered:** «از چه کانال رسمی می‌توان به این شخص/مجموعه مرتبط رسید؟»

Avoid presenting an organizational phone number as a personal number. The current page already distinguishes the Pendar contact number; preserve that clarity.

## URL preservation policy

No current route is deleted in this phase. The current `/research/` behavior is already a consolidation/noindex pattern, so it should remain stable until a full Search Console/crawl review confirms whether a future 301 is appropriate.

Any future redirect must be decided only after checking:

- sitemap output
- canonical URLs
- internal links
- external backlinks
- Google Search Console indexing/click data

## Navigation policy

Primary navigation should expose concepts, not implementation details:

- About
- Professional Activity
- Research & Publications
- Media
- Contact
- Language

`CV` and `Organizations` are intentionally secondary destinations.

## UI implications

The redesign should not make the Header visually compensate for excessive information architecture. Instead:

- Use a compact desktop navigation.
- Use a real mobile menu rather than shrinking all links into one row.
- Give one primary CTA on the homepage and one secondary CTA.
- Use breadcrumbs on deep scholarly/content pages.
- Use contextual links to CV, Organizations and Research where the user actually needs them.

## Next phase

The next implementation phase is **Visual Design System + Homepage UX**, not route deletion. After the visual pass, CSS/components can be consolidated around shared tokens and patterns.
