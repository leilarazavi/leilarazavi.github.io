import { readFile, readdir } from "node:fs/promises";
import { join, relative, extname } from "node:path";

const DIST = new URL("../dist/", import.meta.url);
const htmlFiles = await collectHtmlFiles(DIST.pathname);

if (htmlFiles.length === 0) {
  fail("No generated HTML files found in dist/.");
}

const pages = [];
const failures = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const relativePath = relative(DIST.pathname, file).replaceAll("\\", "/");
  const route = toRoute(relativePath);
  const title = firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const lang = firstMatch(html, /<html[^>]*\blang=["']([^"']+)["']/i);
  const canonical = firstMatch(html, /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  const robots = firstMatch(html, /<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const hreflangCount = (html.match(/rel=["']alternate["'][^>]*hreflang=/gi) ?? []).length;

  pages.push({ route, title, canonical, lang, robots, h1Count });

  if (!title?.trim()) failures.push(`${route}: missing <title>`);
  if (!lang) failures.push(`${route}: missing html[lang]`);
  if (!canonical) failures.push(`${route}: missing canonical`);
  if (h1Count > 1) failures.push(`${route}: ${h1Count} H1 elements`);

  const isLegacyResearch = route === "/research/" || route === "/en/research/";
  if (!isLegacyResearch && /noindex/i.test(robots ?? "")) {
    failures.push(`${route}: unexpected noindex`);
  }
  if (isLegacyResearch && !/noindex/i.test(robots ?? "")) {
    failures.push(`${route}: legacy research route must remain noindex`);
  }
  if (!isLegacyResearch && hreflangCount < 1) {
    failures.push(`${route}: missing hreflang links`);
  }
}

const duplicateTitles = duplicates(pages.map((page) => page.title?.trim()).filter(Boolean));
for (const title of duplicateTitles) failures.push(`duplicate title: ${title}`);

const duplicateCanonicals = duplicates(pages.map((page) => page.canonical).filter(Boolean));
for (const canonical of duplicateCanonicals) failures.push(`duplicate canonical: ${canonical}`);

const requiredRoutes = ["/", "/about/", "/experience/", "/cv/", "/publications/", "/media/", "/contact/", "/en/", "/en/about/", "/en/experience/", "/en/cv/", "/en/publications/", "/en/media/", "/en/contact/"];
const routes = new Set(pages.map((page) => page.route));
for (const route of requiredRoutes) {
  if (!routes.has(route)) failures.push(`missing required route: ${route}`);
}

console.log(`Route quality audit: ${pages.length} generated HTML pages checked.`);
console.log(`Required routes: ${requiredRoutes.length}`);

if (failures.length) {
  console.error("\nFailures:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Route quality audit passed.");

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtmlFiles(path));
    else if (extname(entry.name) === ".html") files.push(path);
  }
  return files;
}

function toRoute(path) {
  if (path === "index.html") return "/";
  if (path.endsWith("/index.html")) return `/${path.slice(0, -"index.html".length)}`;
  return `/${path}`;
}

function firstMatch(text, regex) {
  return text.match(regex)?.[1] ?? null;
}

function duplicates(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts.entries()].filter(([, count]) => count > 1).map(([value]) => value);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
