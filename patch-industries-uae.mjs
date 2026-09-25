// patch-industries-uae.mjs — WEBSITE folder mein rakho, phir chalao: node patch-industries-uae.mjs
// Industries hub page pe Dubai/UAE + Arabic content daalta hai.
import { readFileSync, writeFileSync } from "fs";

const p = "app/industries/page.js";
let s = readFileSync(p, "utf8");
let n = 0;

const R = [
  [
    'Built For Your Industry',
    'Built for Dubai and the UAE',
  ],
  [
    '<h1>One AI WhatsApp Chatbot, Tailored To Your Business</h1>',
    '<h1>One AI WhatsApp Chatbot for Every UAE Business</h1>',
  ],
  [
    'NextReply learns how your specific industry talks to customers, so every reply and every booking fits the way you actually work. Find yours below.',
    'From Dubai to Abu Dhabi, NextReply answers customers on WhatsApp in Arabic and English and books them 24/7 — tailored to how your specific industry works. Find yours below.',
  ],
  [
    'Deep-dive pages with real conversations, use cases and answers for each field.',
    'Deep-dive pages with real conversations, UAE use cases and answers for each field.',
  ],
  [
    'NextReply works for any business that talks to customers on WhatsApp. Start free and teach it about yours in minutes.',
    'NextReply works for any UAE business that talks to customers on WhatsApp — in Arabic or English. Start free and teach it about yours in minutes.',
  ],
];

for (const [oldT, newT] of R) {
  if (s.includes(oldT)) { s = s.split(oldT).join(newT); n++; console.log("OK: " + oldT.slice(0, 45) + "..."); }
  else console.log("SKIP (nahi mila): " + oldT.slice(0, 45) + "...");
}

writeFileSync(p, s, "utf8");
console.log(`\nDone. Total changes: ${n}`);
