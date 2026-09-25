// patch-gdpr-uae.mjs — WEBSITE folder mein rakho, phir chalao: node patch-gdpr-uae.mjs
// "GDPR" ko "UAE PDPL" se badalta hai (UAE ka apna data protection law).
import { readFileSync, writeFileSync, existsSync } from "fs";

// Ye files check karega (jo maujood na ho, chhod dega)
const files = [
  "app/page.js",
  "components/Footer.js",
  "components/Header.js",
  "app/layout.js",
];

let total = 0;

for (const f of files) {
  if (!existsSync(f)) { console.log(`—  skip (nahi mila): ${f}`); continue; }
  let s = readFileSync(f, "utf8");
  const before = (s.match(/GDPR/g) || []).length;
  if (before === 0) { console.log(`—  0 GDPR mila: ${f}`); continue; }
  s = s.split("GDPR").join("UAE PDPL");
  writeFileSync(f, s, "utf8");
  total += before;
  console.log(`OK: ${f} — ${before} jagah badla`);
}

console.log(`\nDone. Total changes: ${total}`);
