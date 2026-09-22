// Second pass — catches the industry-page wording "Up to 50 bookings / month" etc.
// Run from WEBSITE root:  node patch-booking-limits-2.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const REPLACEMENTS = [
  ["Up to 50 bookings / month", "Up to 500 bookings / month"],
  ["Up to 200 bookings / month", "Up to 1500 bookings / month"],
  ["Up to 50 bookings /month", "Up to 500 bookings /month"],
  ["Up to 200 bookings /month", "Up to 1500 bookings /month"],
  ["Up to 50 bookings/ month", "Up to 500 bookings/ month"],
  ["Up to 200 bookings/ month", "Up to 1500 bookings/ month"],
  ["50 bookings / month", "500 bookings / month"],
  ["200 bookings / month", "1500 bookings / month"],
  // safety: any remaining plain forms
  ["Up to 50 bookings", "Up to 500 bookings"],
  ["Up to 200 bookings", "Up to 1500 bookings"],
];

const EXTS = [".js", ".jsx", ".ts", ".tsx"];
let files = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (["node_modules", ".next", ".git"].includes(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (EXTS.some((e) => p.endsWith(e))) {
      let s = readFileSync(p, "utf8"), before = s;
      for (const [a, b] of REPLACEMENTS) if (s.includes(a)) s = s.split(a).join(b);
      if (s !== before) { writeFileSync(p, s, "utf8"); files++; console.log("updated:", p); }
    }
  }
}
walk("app");
walk("components");
console.log(`\nDone. Files updated: ${files}`);
