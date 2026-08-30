/**
 * Builds lib/mermaid-icons.json — only the icons the diagrams actually use.
 * The full Iconify packs are ~5MB; this keeps the lazy diagram chunk small.
 *
 *   node scripts/build-icons.mjs
 */
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";

const require = createRequire(import.meta.url);

const packs = {
  logos: {
    src: "@iconify-json/logos/icons.json",
    names: ["aws-elb", "aws-eks", "aws-rds", "aws-s3", "aws-vpc", "nestjs", "redis", "kubernetes"],
  },
  "simple-icons": {
    src: "@iconify-json/simple-icons/icons.json",
    names: ["nextdotjs", "tidb"],
  },
};

/** Icons kept as raw SVG files, for brand marks the packs only carry in mono. */
const localFiles = {
  gemini: "assets/gemini-color.svg",
};

const out = {};

for (const [pack, { src, names }] of Object.entries(packs)) {
  const json = require(src);
  const icons = {};
  for (const name of names) {
    if (!json.icons[name]) throw new Error(`missing icon ${pack}:${name}`);
    icons[name] = json.icons[name];
  }
  out[pack] = { prefix: json.prefix, width: json.width, height: json.height, icons };
}

const icons = {};
for (const [name, file] of Object.entries(localFiles)) {
  const svg = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
  if (!viewBox) throw new Error(`${file} has no viewBox`);
  const [, , w, h] = viewBox.split(/\s+/).map(Number);
  const body = svg
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .replace(/<title>[\s\S]*?<\/title>/g, "")
    .trim();
  icons[name] = { body, width: w, height: h };
}
out.local = { prefix: "local", width: 24, height: 24, icons };

const path = new URL("../lib/mermaid-icons.json", import.meta.url);
writeFileSync(path, JSON.stringify(out));
console.log(`wrote ${Object.values(out).reduce((n, p) => n + Object.keys(p.icons).length, 0)} icons`);
