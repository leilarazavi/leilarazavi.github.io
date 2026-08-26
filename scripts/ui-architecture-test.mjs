import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const header = await readFile(resolve(root, "src/components/Header.astro"), "utf8");
const person = await readFile(resolve(root, "src/lib/person.ts"), "utf8");
const homepage = await readFile(resolve(root, "src/pages/index.astro"), "utf8");

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

console.log("UI architecture smoke test passed.");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}
