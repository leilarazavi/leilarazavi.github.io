import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../dist/", import.meta.url).pathname;

/*
 * RELEASE QA DECISION
 *
 * These checks validate deterministic properties of the generated static
 * output. They intentionally do not pretend to measure Search Console,
 * Lighthouse or real-user Core Web Vitals. Their job is to catch regressions
 * in the HTML contract before a refactor reaches GitHub Pages.
 *
 * The checks are deliberately structural rather than keyword-based: SEO is
 * not improved by stuffing terms into markup, while broken canonical/locale
 * relationships can directly damage crawlability and entity consolidation.
 */

const routes = [
  "/",
  "/about/",
  "/cv/",
  "/experience/",
  "/publications/",
  "/media/",
  "/contact/",
  "/organizations/",
  "/en/",
  "/en/about/",
  "/en/cv/",
  "/en/experience/",
  "/en/publications/",
  "/en/media/",
  "/en/contact/",
  "/en/organizations/",
];

const failures = [];
const pageMeta = [];

function htmlFor(route) {
  const file = join(root, route, "index.html");
  if (!existsSync(file)) {
    failures.push(`${route}: generated HTML is missing`);
    return "";
  }
  return readFileSync(file, "utf8");
}

function hrefForRel(html, rel) {
  const tag = new RegExp(`<link\\b[^>]*\\brel=["']${rel}["'][^>]*>`, "i").exec(html)?.[0];
  return tag?.match(/\\bhref=["']([^"']+)["']/i)?.[1];
}

for (const route of routes) {
  const html = htmlFor(route);
  if (!html) continue;

  const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim();
  const canonical = hrefForRel(html, "canonical");
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const expectedLang = route.startsWith("/en/") ? "en" : "fa-IR";
  const langMatch = html.match(/<html[^>]+lang=["']([^"']+)["']/i)?.[1];
  const expectedCanonicalPath = route === "/" ? "/" : route;
  const expectedFa = route.startsWith("/en/")
    ? route === "/en/"
      ? "/"
      : route.replace(/^\/en/, "")
    : route;
  const expectedEn = route.startsWith("/en/") ? route : route === "/" ? "/en/" : `/en${route}`;
  const faAlternate = html.match(/<link[^>]+hreflang=["']fa["'][^>]+href=["']([^"']+)["'][^>]*>/i)?.[1];
  const enAlternate = html.match(/<link[^>]+hreflang=["']en["'][^>]+href=["']([^"']+)["'][^>]*>/i)?.[1];
  const defaultAlternate = html.match(/<link[^>]+hreflang=["']x-default["'][^>]+href=["']([^"']+)["'][^>]*>/i)?.[1];
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);
  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["'][^>]*>/i)?.[1];
  const ogImage = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i)?.[1];

  if (!title) failures.push(`${route}: missing <title>`);
  if (!canonical) failures.push(`${route}: missing canonical`);
  if (h1Count !== 1) failures.push(`${route}: expected exactly one H1, found ${h1Count}`);
  if (langMatch !== expectedLang) failures.push(`${route}: expected html[lang] to be ${expectedLang}, found ${langMatch ?? "missing"}`);
  if (canonical && !canonical.endsWith(expectedCanonicalPath)) failures.push(`${route}: canonical does not resolve to expected route (${canonical})`);
  if (!faAlternate?.endsWith(expectedFa)) failures.push(`${route}: fa hreflang does not resolve to ${expectedFa}`);
  if (!enAlternate?.endsWith(expectedEn)) failures.push(`${route}: en hreflang does not resolve to ${expectedEn}`);
  if (!defaultAlternate?.endsWith(expectedFa)) failures.push(`${route}: x-default does not resolve to the Persian counterpart`);
  if (!robots?.includes("index")) failures.push(`${route}: primary route is not indexable`);
  if (!ogImage) failures.push(`${route}: missing og:image`);

  const parsedSchemas = [];
  for (const block of jsonLdBlocks) {
    try {
      parsedSchemas.push(JSON.parse(block));
    } catch {
      failures.push(`${route}: invalid JSON-LD block`);
    }
  }
  if (!parsedSchemas.some((schema) => schema?.["@type"] === "Person" && schema?.["@id"]?.endsWith("/#person"))) {
    failures.push(`${route}: stable Person schema node is missing`);
  }
  if (!parsedSchemas.some((schema) => schema?.["@type"] === "WebSite" && schema?.["@id"]?.endsWith("/#website"))) {
    failures.push(`${route}: stable WebSite schema node is missing`);
  }

  pageMeta.push({ route, title, canonical });
}

const titles = new Map();
for (const page of pageMeta) {
  if (!page.title) continue;
  const previous = titles.get(page.title);
  if (previous) failures.push(`duplicate title: ${page.title} (${previous} and ${page.route})`);
  else titles.set(page.title, page.route);
}

const sitemapCandidates = [
  join(root, "sitemap-index.xml"),
  join(root, "sitemap-0.xml"),
];
if (!sitemapCandidates.some(existsSync)) failures.push("sitemap: no generated sitemap file found");

if (failures.length) {
  console.error("SEO smoke test failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO smoke test passed for ${routes.length} primary routes.`);
