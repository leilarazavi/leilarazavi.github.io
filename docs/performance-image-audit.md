# Performance & Image Audit

## Current architecture

The site uses Astro static output. The main performance risks are therefore asset weight, responsive image dimensions, font loading and unnecessary client-side JavaScript rather than server rendering latency.

## Release checks

- Every meaningful content image should declare intrinsic `width` and `height` to reduce layout shift.
- Hero/profile imagery should load eagerly only when it is above the fold; secondary imagery should be lazy-loaded.
- Avoid shipping decorative images that duplicate text already present in HTML.
- Prefer modern compressed raster assets when photographic content is introduced.
- Keep SVGs for simple brand/profile illustrations where they are materially smaller and accessible.
- Do not add client-side libraries for interactions that can be handled with native HTML/CSS.
- Preserve `prefers-reduced-motion` behavior from the global design system.

## Entity image consistency

The first-party profile image is the canonical Person image. Social preview metadata should use a stable, shareable asset rather than a route-specific image that may disappear.

## External measurement required

The repository cannot prove real-user Core Web Vitals. After deployment, run Lighthouse on `/`, `/about/`, `/publications/` and one publication detail page, and record mobile results. Search Console should be used for field data when available.
