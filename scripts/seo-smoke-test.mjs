import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../dist/", import.meta.url).pathname;

/*
 * RELEASE QA DECISION
 *
 * These checks intentionally validate only deterministic properties of the
 * generated static output. They are not a substitute for Search Console,
 * Lighthouse or real-user Core Web Vitals. Their purpose is to stop an
 * accidental regression from reaching GitHub Pages when a route loses a
 * title, canonical, language alternate or H1 during refactoring.
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

function htmlFor(route) {
  const file = join(root, route, "index.html");
  if (!existsSync(file)) {
    failures.push(`${route}: generated HTML is missing`);
    return "";
  }
  return readFileSync(file, "utf8");
}

for (const route of routes) {
  const html = htmlFor(route);
  if (!html) continue;

  const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim();
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1];
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;

  if (!title) failures.push(`${route}: missing <title>`);
  if (!canonical) failures.push(`${route}: missing canonical`);
  if (h1Count !== 1) failures.push(`${route}: expected exactly one H1, found ${h1Count}`);

  const expectedLang = route.startsWith("/en/") ? "en" : "fa-IR";
  const langMatch = html.match(/<html[^>]+lang=["']([^"']+)["']/i)?.[1];
  if (langMatch !== expectedLang) {
    failures.push(`${route}: expected html[lang] to be ${expectedLang}, found ${langMatch ?? "missing"}`);
  }

  const expectedCanonicalPath = route === "/" ? "/" : route;
  if (canonical && !canonical.endsWith(expectedCanonicalPath)) {
    failures.push(`${route}: canonical does not resolve to expected route (${canonical})`);
  }
}

const sitemapCandidates = [
  join(root, "sitemap-index.xml"),
  join(root, "sitemap-0.xml"),
];
if (!sitemapCandidates.some(existsSync)) {
  failures.push("sitemap: no generated sitemap file found");
}

if (failures.length) {
  console.error("SEO smoke test failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO smoke test passed for ${routes.length} primary routes.`);
