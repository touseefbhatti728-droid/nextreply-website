// patch-aed-prices.mjs — WEBSITE folder mein rakho, phir chalao: node patch-aed-prices.mjs
// Pricing page aur homepage ke $ prices ko AED mein badalta hai (109 / 219 / 369).
import { readFileSync, writeFileSync, existsSync } from "fs";

const files = ["app/pricing/page.js", "app/page.js"];

// $29 -> AED 109, $59 -> AED 219, $99 -> AED 369  (agla digit na ho, taake $290 jaisa kuch na toote)
const rules = [
  [/\$29(?!\d)/g, "AED 109"],
  [/\$59(?!\d)/g, "AED 219"],
  [/\$99(?!\d)/g, "AED 369"],
];

let grand = 0;
for (const f of files) {
  if (!existsSync(f)) { console.log(`— skip (nahi mila): ${f}`); continue; }
  let s = readFileSync(f, "utf8");
  let n = 0;
  for (const [re, to] of rules) {
    const before = s;
    s = s.replace(re, to);
    if (s !== before) n += (before.match(re) || []).length;
  }
  if (n > 0) { writeFileSync(f, s, "utf8"); grand += n; console.log(`OK: ${f} — ${n} price(s) AED mein badle`); }
  else console.log(`— ${f} — koi $ price match nahi hua (shayad markup alag hai)`);
}

console.log(`\nDone. Total prices changed: ${grand}`);
