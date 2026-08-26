import { readFile } from "node:fs/promises";

const variables = await readFile("src/styles/variables.css", "utf8");
const global = await readFile("src/styles/global.css", "utf8");
const header = await readFile("src/components/Header.astro", "utf8");
const footer = await readFile("src/components/Footer.astro", "utf8");

for (const token of [
  "--color-focus",
  "--shadow-header",
  "--header-height",
  "--control-height",
  "--radius-lg",
]) {
  assert(variables.includes(token), `missing shared design token: ${token}`);
}

for (const utility of [".button", ".text-link", ".section-label", ".section-title", ".surface-rule"]) {
  assert(global.includes(utility), `missing shared UI utility: ${utility}`);
}

assert(header.includes("var(--header-height)"), "header should consume shared header height");
assert(footer.includes("var(--color-border)"), "footer should consume shared design tokens");

console.log("Design system smoke test passed.");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}
