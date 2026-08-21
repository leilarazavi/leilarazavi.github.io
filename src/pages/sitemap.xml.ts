import type { APIRoute } from 'astro';

const pages = [
  '/',
  '/about/',
  '/research/',
  '/publications/',
  '/experience/',
  '/contact/',
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://leilarazavi.github.io';

  const urls = pages
    .map((page) => `<url><loc>${base}${page}</loc></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  );
};
