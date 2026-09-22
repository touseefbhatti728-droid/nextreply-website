// One-time patch — updates booking limits across the site.
// Run from the WEBSITE root:  node patch-booking-limits.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

// old -> new text replacements (cover the common phrasings we used)
const REPLACEMENTS = [
  ["Up to 50 bookings per month", "Up to 500 bookings per month"],
  ["Up to 200 bookings per month", "Up to 1500 bookings per month"],
  ["50 bookings per month", "500 bookings per month"],
  ["200 bookings per month", "1500 bookings per month"],
  ["Up to 50 bookings/mo", "Up to 500 bookings/mo"],
  ["Up to 200 bookings/mo", "Up to 1500 bookings/mo"],
  ["50 bookings a month", "500 bookings a month"],
  ["200 bookings a month", "1500 bookings a month"],
];

const EXTS = [".js", ".jsx", ".ts", ".tsx"];
let files = 0, hits = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name === ".git") continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (EXTS.some((e) => p.endsWith(e))) {
      let s = readFileSync(p, "utf8");
      let before = s;
      for (const [a, b] of REPLACEMENTS) {
        if (s.includes(a)) s = s.split(a).join(b);
      }
      if (s !== before) { writeFileSync(p, s, "utf8"); files++; hits++; console.log("updated:", p); }
    }
  }
}

walk("app");
walk("components");
console.log(`\nDone. Files updated: ${files}`);
