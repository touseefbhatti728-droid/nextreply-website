// Makes the ENTIRE site use one font: Plus Jakarta Sans (headings + body + buttons).
// Run from WEBSITE root:  node patch-font-single.mjs
import { readFileSync, writeFileSync } from "fs";

let done = [];

// 1) globals.css — set body/base font to Plus Jakarta Sans, and any Inter refs too
{
  const p = "app/globals.css";
  let s = readFileSync(p, "utf8");
  let before = s;
  // body base font
  s = s.split("font-family:'Inter',system-ui,sans-serif").join("font-family:'Plus Jakarta Sans',system-ui,sans-serif");
  s = s.split("font-family:'Inter', system-ui, sans-serif").join("font-family:'Plus Jakarta Sans', system-ui, sans-serif");
  // any standalone Inter references (buttons etc.)
  s = s.split("'Inter',sans-serif").join("'Plus Jakarta Sans',sans-serif");
  s = s.split("'Inter', sans-serif").join("'Plus Jakarta Sans', sans-serif");
  s = s.split("font-family:'Inter'").join("font-family:'Plus Jakarta Sans'");
  s = s.split("'Inter'").join("'Plus Jakarta Sans'");
  if (s !== before) { writeFileSync(p, s, "utf8"); done.push("globals.css -> single font (Plus Jakarta Sans)"); }
  else done.push("globals.css — no Inter refs found");
}

// 2) layout.js — we can drop Inter from the Google Fonts URL (keep Jakarta only)
{
  const p = "app/layout.js";
  let s = readFileSync(p, "utf8");
  let before = s;
  s = s.replace(
    "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
  );
  if (s !== before) { writeFileSync(p, s, "utf8"); done.push("layout.js -> Jakarta only (added 400 weight, dropped Inter)"); }
  else done.push("layout.js — font URL unchanged (check manually)");
}

console.log("Single-font patch done:");
done.forEach((d) => console.log(" -", d));
