# Information Architecture Decision — Personal Brand v1

> هدف این سند: ثبت تصمیم‌های معماری اطلاعات قبل از بازطراحی UI تا تغییرات بصری باعث آسیب به SEO، URLها یا ساختار Entity نشوند.

## Positioning

سایت به‌عنوان یک **Personal Brand دوگانه** تعریف می‌شود:

1. برای مخاطب عمومی، ساده و قابل‌فهم باشد.
2. برای دانشگاهیان، پژوهشگران و همکاران حرفه‌ای، مرجع معتبر اطلاعات علمی و حرفه‌ای باشد.
3. برای موتورهای جست‌وجو، یک Entity Hub منسجم برای «دکتر لیلا رضوی» ایجاد کند.

## Primary navigation

- **درباره من** → `/about/`
- **فعالیت حرفه‌ای** → `/experience/`
- **پژوهش و آثار** → `/publications/`
- **رسانه** → `/media/`
- **ارتباط** → `/contact/`
- زبان → نسخه انگلیسی متناظر

## Why CV is removed from primary navigation

`/cv/` حذف نمی‌شود؛ فقط از منوی اصلی خارج می‌شود. «رزومه» و «سوابق» از نظر ذهنی برای کاربر هم‌پوشانی زیادی دارند و قرار دادن هر دو در Header باعث افزایش بار شناختی می‌شود. CV در مرحله بعد به‌عنوان CTA یا زیرمسیر بخش «فعالیت حرفه‌ای» در دسترس خواهد بود.

## Why Research is grouped with Publications

صفحه `/research/` برای SEO و ساختار Entity ارزشمند است و حذف نخواهد شد. با این حال، در Navigation اصلی، «پژوهش» و «آثار علمی» دو مقصد جدا برای کاربر عمومی محسوب نمی‌شوند. بنابراین `/publications/` به‌عنوان نقطه ورود «پژوهش و آثار» استفاده می‌شود و صفحات research به‌صورت داخلی و SEO-friendly قابل دسترسی باقی می‌مانند.

## Why Organizations is not a primary navigation item

`/organizations/` برای Entity SEO و توضیح affiliationها مهم است، اما برای اکثر کاربران مقصد اصلی نیست. این بخش باید از مسیر «فعالیت حرفه‌ای» و لینک‌های داخلی قابل دسترسی باشد، بدون اینکه Header را شلوغ کند.

## URL / SEO preservation rule

در این مرحله هیچ URL ارزشمند حذف یا تغییر مسیر داده نمی‌شود. هرگونه merge یا redirect فقط بعد از audit کامل routeها، بررسی sitemap و تعیین canonical انجام خواهد شد.

## English architecture

نسخه انگلیسی باید فقط زمانی در hreflang و Navigation به‌عنوان معادل واقعی معرفی شود که محتوای معادل آن صفحه واقعاً وجود داشته باشد. Placeholderها نباید به‌عنوان نسخه کامل یک صفحه فارسی تلقی شوند.

## Next implementation stages

1. Complete route-by-route audit.
2. Map every current route to: Keep / Merge / Hidden from nav / Redirect later / Placeholder.
3. Validate internal linking and canonical strategy.
4. Then redesign visual system and homepage UX.
5. Then refactor CSS/components around the approved IA.
