// patch-hero-image.mjs — WEBSITE folder mein rakho, phir chalao: node patch-hero-image.mjs
// Homepage hero ki animated chat (.mock) ki jagah /hero.png image laga deta hai.
import { readFileSync, writeFileSync } from "fs";

const p = "app/page.js";
let s = readFileSync(p, "utf8");

if (s.includes("/hero.png")) { console.log("SKIP: hero image pehle se lagi hui hai."); process.exit(0); }

const startTag = '<div class=\\"mock\\">';   // file mein escaped quotes ke saath
const start = s.indexOf(startTag);
if (start === -1) { console.log("SKIP: hero ka .mock block nahi mila (markup shayad badal gaya)."); process.exit(0); }

// matching </div> dhoondo (div depth count karke)
const OPEN = "<div", CLOSE = "</div>";
let idx = start, depth = 0, end = -1;
while (idx < s.length) {
  const nO = s.indexOf(OPEN, idx);
  const nC = s.indexOf(CLOSE, idx);
  if (nC === -1) break;
  if (nO !== -1 && nO < nC) { depth++; idx = nO + OPEN.length; }
  else { depth--; idx = nC + CLOSE.length; if (depth === 0) { end = idx; break; } }
}
if (end === -1) { console.log("SKIP: .mock ka closing </div> nahi mila."); process.exit(0); }

const replacement =
  '<div class=\\"hero-img\\" style=\\"border-radius:24px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.45)\\">' +
  '<img src=\\"/hero.png\\" alt=\\"NextReply WhatsApp AI booking a salon appointment in Arabic and English\\" ' +
  'style=\\"width:100%;height:auto;display:block\\" /></div>';

s = s.slice(0, start) + replacement + s.slice(end);
writeFileSync(p, s, "utf8");
console.log("OK: hero mein /hero.png image laga di gayi.");
