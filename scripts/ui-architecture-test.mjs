import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const header = await readFile(resolve(root, "src/components/Header.astro"), "utf8");
const person = await readFile(resolve(root, "src/lib/person.ts"), "utf8");
const homepage = await readFile(resolve(root, "src/pages/index.astro"), "utf8");
const about = await readFile(resolve(root, "src/pages/about/index.astro"), "utf8");
const publications = await readFile(resolve(root, "src/pages/publications/index.astro"), "utf8");
const publicationCard = await readFile(resolve(root, "src/components/PublicationCard.astro"), "utf8");
const contact = await readFile(resolve(root, "src/pages/contact/index.astro"), "utf8");
const experience = await readFile(resolve(root, "src/pages/experience/index.astro"), "utf8");

const primaryNav = header.match(/const navItems = isFa\s*\?\s*\[([\s\S]*?)\]\s*:\s*\[/)?.[1] ?? "";
const primaryLabels = [...primaryNav.matchAll(/label:\s*"([^"]+)"/g)].map((match) => match[1]);
const requiredFa = ["درباره من", "فعالیت حرفه‌ای", "پژوهش و آثار", "رسانه", "ارتباط"];

assert(primaryLabels.length === 5, `expected 5 primary Persian navigation items, got ${primaryLabels.length}`);
assert(JSON.stringify(primaryLabels) === JSON.stringify(requiredFa), `primary navigation order changed: ${primaryLabels.join(" | ")}`);
assert(header.includes("class=\"header-inner\""), "header should use the redesigned inner shell");
assert(header.includes("class=\"mobile-secondary\""), "CV and secondary resources should remain secondary on mobile");
assert(person.includes('/images/leila-razavi.jpg'), "person entity should reference the photographic profile asset");
assert(homepage.includes('class="hero"'), "homepage should keep the personal-brand hero");
assert(homepage.includes('class="focus"'), "homepage should expose the professional focus section");
assert(homepage.includes('class="works"'), "homepage should expose selected academic work");
assert(homepage.includes('class="professional"'), "homepage should expose professional activity");
assert(homepage.includes('class="media"'), "homepage should expose media presence");
assert(homepage.includes('class="final-cta"'), "homepage should end with a clear official-resources CTA");
assert(about.includes('class="about-hero"'), "about should use the personal-brand profile hero");
assert(about.includes('class="expertise"'), "about should expose expertise as a dedicated section");
assert(about.includes('class="positions"'), "about should expose professional positions");
assert(about.includes('class="selected-work"'), "about should expose selected academic evidence");
assert(publications.includes('id="search-filter"'), "publications should retain searchable catalog behavior");
assert(publications.includes('id="visible-count"'), "publications should expose a live result count");
assert(publications.includes('class="publication-marker"'), "publications should use scannable editorial numbering");
assert(publicationCard.includes('var(--color-border)'), "publication card should use shared design tokens");
assert(!publicationCard.includes('#ddd7d0'), "publication card should not hardcode the old border color");
assert(!publicationCard.includes('#806f61'), "publication card should not hardcode the old accent color");
assert(contact.includes("منابع علمی و حرفه‌ای"), "contact should distinguish professional resources");
assert(contact.includes("حضور عمومی"), "contact should distinguish public presence");
assert(contact.includes("تماس حرفه‌ای"), "contact should provide a clear direct-contact section");
assert(experience.includes("مسیر حرفه‌ای و نقش‌های مستند"), "experience should use the new professional trajectory hierarchy");
assert(experience.includes("برای جزئیات کامل‌تر"), "experience should keep CV as a secondary destination");

console.log("UI architecture smoke test passed.");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}
