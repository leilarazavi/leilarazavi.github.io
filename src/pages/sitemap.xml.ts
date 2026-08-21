import type { APIRoute } from 'astro';
import { books } from '../data/books';
import { getPublicationsByYear } from '../lib/publications';

const staticPages = [
  '/',
  '/about/',
  '/research/',
  '/publications/',
  '/experience/',
  '/experience/professional-activities/',
  '/media/',
  '/contact/',
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://leilarazavi.github.io';
  const publicationUrls = getPublicationsByYear().map((publication) => `/publications/${publication.id}/`);
  const bookUrls = books.map((book) => book.url);
  const urls = [...staticPages, ...bookUrls, ...publicationUrls].filter((value, index, array) => array.indexOf(value) === index);

  const body = urls
    .map((page) => `  <url><loc>${base}${page}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
