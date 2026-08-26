import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const header = await readFile(resolve(root, "src/components/Header.astro"), "utf8");
const contact = await readFile(resolve(root, "src/pages/contact/index.astro"), "utf8");

const navBlock = header.match(/const navItems = isFa\s*\?\s*\[([\s\S]*?)\]\s*:\s*\[/)?.[1] ?? "";
const labels = [...navBlock.matchAll(/label:\s*"([^"]+)"/g)].map((m) => m[1]);
const required = ["درباره من", "فعالیت حرفه‌ای", "پژوهش و آثار", "رسانه", "ارتباط"];

assert(JSON.stringify(labels) === JSON.stringify(required), `primary navigation changed: ${labels.join(" | ")}`);
assert(contact.includes("منابع علمی و حرفه‌ای"), "contact must distinguish professional resources");
assert(contact.includes("حضور عمومی"), "contact must distinguish public presence");
assert(contact.includes("تماس حرفه‌ای"), "contact must provide a clear direct-contact section");

console.log("Brand architecture smoke test passed.");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}
