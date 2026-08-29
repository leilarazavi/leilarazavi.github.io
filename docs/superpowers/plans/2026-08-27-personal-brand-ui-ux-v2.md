# Leila Razavi Website — Consolidated Implementation Plan

> هدف: رفع مشکلات واقعی repository و production UX/SEO/accessibility در چند موج بزرگ و cohesive، نه ده‌ها تغییر خرد. هر موج باید تا حد ممکن کامل اجرا، تست و سپس وارد موج بعدی شود.

## Guardrails

- `main` تنها source of truth تولید است.
- URLهای عمومی و bilingual route structure حفظ می‌شوند مگر اینکه evidence مستقل تغییر را توجیه کند.
- `/research/` و `/en/research/` به‌عنوان compatibility/noindex routes باقی می‌مانند.
- هیچ credential، affiliation، publication، quote یا claim جدیدی بدون منبع معتبر اضافه نمی‌شود.
- Astro 7، TypeScript و static GitHub Pages حفظ می‌شوند؛ dependency جدید فقط در صورت نیاز واقعی.
- QA باید build-level، browser-level و production-level را از هم تفکیک کند.
- هر defect قطعی باید هم اصلاح شود و هم برای آن regression check اضافه شود.

---

## WAVE 1 — Repository consolidation + engineering foundation

**هدف:** repository از وضعیت branch/documentation sprawl خارج شود و قبل از UI work، قراردادهای فنی قابل اعتماد داشته باشد.

### Branches

- inventory همه branchها و PRهای باز؛ identify merged/obsolete branches.
- PRهای superseded را ببند؛ branchهای merged/obsolete را حذف کن وقتی GitHub permissions/action آن را ممکن می‌کند.
- `main` را تنها production branch نگه دار و برای اجرای این plan حداکثر یک working branch استفاده کن.
- branchهایی که هنوز حاوی تغییرات reviewنشده یا تنها نسخه‌ی موجود از کار مفید هستند حذف نشوند.

### Documentation

- یک implementation plan اصلی نگه دار: همین فایل.
- `information-architecture.md` منبع فعلی IA باشد.
- `technical-seo-audit.md` منبع technical SEO باشد.
- `production-seo-qa.md` پروتکل production verification باشد.
- `final-qa.md` matrix اجرایی QA باشد.
- audit/handoff/checklistهای تکراری یا تاریخی حذف شوند.
- README فقط وضعیت فعلی را توصیف کند؛ هیچ PASS قدیمی که با source فعلی تناقض دارد باقی نماند.

### Engineering

- typecheck واقعی به package scripts و CI اضافه شود.
- build + typecheck + همه deterministic QA scripts در CI enforce شوند.
- testهای stale یا hard-coded با architecture فعلی هماهنگ شوند.
- route QA به جای فهرست ناقص، تا حد ممکن تمام generated HTML routes را validate کند.
- dead starter artifacts و dead utilities بعد از reference check حذف شوند.
- data modelهای موازی/unused یا حذف شوند یا نقش روشن بگیرند.

### Exit gate

- build سبز.
- typecheck سبز.
- تمام deterministic QAها سبز.
- documentation با source فعلی سازگار.
- branch/PR inventory مستند و قابل توضیح.

---

## WAVE 2 — Core correctness + SEO/entity hardening

**هدف:** مشکلات source-level قطعی قبل از redesign رفع شوند.

### HTML / accessibility

- nested `<main>` را حذف کن؛ فقط یک document main landmark در هر page.
- About timeline را با data model واقعی هماهنگ کن؛ `start/end` بدون داده مستند render نشود.
- heading hierarchy تمام routeها را validate کن.
- focus states، skip link، `aria-current` و mobile navigation را حفظ و کامل کن.
- mobile menu: Escape، focus return، state/label مناسب و keyboard traversal را اضافه کن.

### SEO / schema

- canonical/hreflang/x-default invariants را حفظ کن.
- Person/WebSite graph را با page-specific schemaها تمیز نگه دار.
- `sameAs` را فقط برای external identity sources نگه دار.
- OG image را route-aware کن؛ podcast/episode باید cover مناسب خود را داشته باشند.
- MIME type تصویر OG باید با فایل واقعی match باشد.
- favicon و Apple touch icon را به assetهای استاندارد و سبک تبدیل کن.

### Identity / content integrity

- person data، publication metadata، podcast metadata و profile links را با authoritative public sources cross-check کن.
- هیچ ادعای جدیدی از روی حدس وارد نشود.

### Exit gate

- تمام routeها semantic و internally consistent.
- schema/canonical/hreflang tests سبز.
- no stale test assumptions.

---

## WAVE 3 — Performance + asset system + design-system consolidation

**هدف:** technical quality قبل از polish نهایی.

### Assets

- PNG سنگین episode image را به WebP/AVIF تبدیل و dimensions را حفظ کن.
- image variants را rationalize کن و duplicate representations را حذف کن.
- profile image را به یک source-of-truth و variants مشخص تبدیل کن؛ SVG-with-embedded-raster فقط در صورت دلیل واقعی باقی بماند.
- assetهای starter فقط بعد از reference scan حذف شوند.

### Fonts

- فقط fontهای واقعاً مورد استفاده load شوند.
- loading strategy و `font-display` را بررسی کن.
- در صورت سود واضح، self-host WOFF2 را ارزیابی کن.

### Design system

- semantic tokens را centralize کن.
- hard-coded colors/spacing/type values در components را کاهش بده.
- contrast را برای text-sizeهای واقعی بررسی کن و accent text را در صورت نیاز darken کن.
- shared container, spacing, typography, buttons, links و focus primitives را یکپارچه کن.

### Exit gate

- asset budget معقول.
- no obvious duplicate assets.
- design tokens source of truth.
- accessibility contrast audit بدون release blocker.

---

## WAVE 4 — UI/UX cohesive pass across all routes

**هدف:** کل سایت یک product واحد باشد، نه homepage جدید روی صفحات قدیمی.

### Homepage

- Identity → Expertise → Evidence → Professional Authority → Media → Contact hierarchy.
- یک primary CTA و تعداد محدود secondary actions.
- publication records فقط در Publications authority hub؛ Home فقط در حد evidence/context مورد نیاز.
- visual hierarchy برای مخاطب عمومی، academic و professional قابل فهم باشد.

### Core pages

- About = identity/positioning/expertise/research context، نه CV دوم.
- Experience = professional trajectory.
- CV = compact reference.
- Organizations = secondary entity context.
- Publications = authoritative scholarly hub.
- Media = podcast/public sources.
- Contact = official profiles/contact routes.

### Bilingual parity

- Persian و English از نظر information architecture، component behavior، metadata و navigation equivalent باشند.
- copy لازم نیست کلمه‌به‌کلمه یکسان باشد، اما intent و route relationships باید هم‌ارز باشند.
- RTL/LTR typography، wrapping و long-title behavior بررسی شود.

### Exit gate

- تمام routeهای primary/secondary با shared primitives کار کنند.
- mobile/desktop layout بدون horizontal overflow.
- هیچ route قدیمی از نظر hierarchy یا styling با product ناهماهنگ نباشد.

---

## WAVE 5 — Full verification + production release

**هدف:** فقط بعد از این موج ادعای release-ready بودن مطرح شود.

### Automated

- clean `npm ci`
- typecheck
- production build
- SEO smoke
- route quality
- design-system test
- UI architecture test
- link/asset integrity checks

### Browser

- Chrome + Firefox
- desktop + mobile widths
- keyboard-only traversal
- mobile touch
- menu/focus behavior
- 404
- long Persian/English text
- image loading / layout shift
- reduced motion

### Performance

- Lighthouse mobile/desktop برای `/`, `/about/`, `/publications/`, publication detail، `/media/`
- LCP / CLS / INP
- transfer size
- image/font contributors

### Production SEO

- HTTP 200 canonical routes
- reciprocal hreflang targets
- robots/sitemap
- rendered JSON-LD
- title/description uniqueness
- OG image resolution
- Search Console indexing/canonical/sitemap evidence where access exists

### Release gate

هیچ ادعای «fully validated» بدون evidence production/browser ثبت نشود. نتیجه‌ها در `docs/final-qa.md` با تاریخ و scope ثبت شوند.

---

## Execution rule

این plan عمداً پنج موج بزرگ دارد. در هر موج، ابتدا همه‌ی changes مربوط به همان concern را مشخص و تا حد امکان یک‌باره اجرا کن؛ سپس کل موج را verify کن. از micro-commits و branch proliferation پرهیز کن، اما correctness را قربانی سرعت نکن.
