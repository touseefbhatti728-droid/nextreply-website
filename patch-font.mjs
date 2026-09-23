// Swaps heading font to Plus Jakarta Sans across the site.
// Run from WEBSITE root:  node patch-font.mjs
import { readFileSync, writeFileSync } from "fs";

let done = [];

// 1) layout.js — load Plus Jakarta Sans from Google Fonts
{
  const p = "app/layout.js";
  let s = readFileSync(p, "utf8");
  const oldHref = "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap";
  const newHref = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap";
  if (s.includes(oldHref)) { s = s.replace(oldHref, newHref); writeFileSync(p, s, "utf8"); done.push("layout.js font link"); }
  else if (s.includes("Plus+Jakarta+Sans")) { done.push("layout.js already has Plus Jakarta Sans"); }
  else { done.push("layout.js — font link not found (check manually)"); }
}

// 2) globals.css — point heading font-family to Plus Jakarta Sans
{
  const p = "app/globals.css";
  let s = readFileSync(p, "utf8");
  let before = s;
  // replace every 'Sora' font reference with Plus Jakarta Sans
  s = s.split("'Sora',sans-serif").join("'Plus Jakarta Sans',sans-serif");
  s = s.split("'Sora', sans-serif").join("'Plus Jakarta Sans', sans-serif");
  s = s.split("'Sora'").join("'Plus Jakarta Sans'");
  if (s !== before) { writeFileSync(p, s, "utf8"); done.push("globals.css headings -> Plus Jakarta Sans"); }
  else { done.push("globals.css — no 'Sora' refs found"); }
}

console.log("Font patch done:");
done.forEach((d) => console.log(" -", d));
