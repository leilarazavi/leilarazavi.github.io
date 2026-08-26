import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const header = await readFile(resolve(root, "src/components/Header.astro"), "utf8");
const person = await readFile(resolve(root, "src/lib/person.ts"), "utf8");

const primaryNav = header.match(/const navItems = isFa\s*\?\s*\[([\s\S]*?)\]\s*:\s*\[/)?.[1] ?? "";
const primaryLabels = [...primaryNav.matchAll(/label:\s*"([^"]+)"/g)].map((match) => match[1]);

const requiredFa = ["درباره من", "فعالیت حرفه‌ای", "پژوهش و آثار", "رسانه", "ارتباط"];

assert(primaryLabels.length === 5, `expected 5 primary Persian navigation items, got ${primaryLabels.length}`);
assert(JSON.stringify(primaryLabels) === JSON.stringify(requiredFa), `primary navigation order changed: ${primaryLabels.join(" | ")}`);
assert(header.includes("class=\"header-inner\""), "header should use the redesigned inner shell");
assert(header.includes("class=\"mobile-secondary\""), "CV and secondary resources should remain secondary on mobile");
assert(header.includes("/images/profile/leila-razavi.webp"), "header should reference the new profile asset");
assert(person.includes('/images/profile/leila-razavi.webp'), "person entity should reference the new profile asset");

console.log("UI architecture smoke test passed.");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}
