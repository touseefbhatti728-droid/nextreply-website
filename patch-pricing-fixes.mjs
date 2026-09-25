// patch-pricing-fixes.mjs — WEBSITE folder mein rakho, phir chalao: node patch-pricing-fixes.mjs
import { readFileSync, writeFileSync } from "fs";

const p = "app/pricing/page.js";
let s = readFileSync(p, "utf8");
let n = 0;

// 1) Comparison table: 50 -> 500, 200 -> 1,500
const oldTable = '<div class=\\"v\\">50</div><div class=\\"v pop\\">200</div>';
const newTable = '<div class=\\"v\\">500</div><div class=\\"v pop\\">1,500</div>';
if (s.includes(oldTable)) { s = s.split(oldTable).join(newTable); n++; console.log("OK: comparison table 500/1,500"); }
else console.log("SKIP: comparison table (already fixed ya string match nahi hui)");

// 2) "Online payments are being added soon..." hatao
const oldBilling = "Online payments are being added soon. For now you start free and your plan is set up for you, so you can go live without a card.";
const newBilling = "Start free with no card. When you are ready, pick a plan and pay monthly by card. Cancel any time — no long contracts.";
if (s.includes(oldBilling)) { s = s.split(oldBilling).join(newBilling); n++; console.log("OK: billing FAQ updated"); }
else console.log("SKIP: billing FAQ (already fixed ya string match nahi hui)");

// 3) H1 -> UAE specific
const oldH1 = 'One AI Receptionist, <span class=\\"grad-text\\">Three Ways To Grow</span>';
const newH1 = 'Simple WhatsApp AI Pricing for UAE Businesses — <span class=\\"grad-text\\">No Setup Fees</span>';
if (s.includes(oldH1)) { s = s.split(oldH1).join(newH1); n++; console.log("OK: H1 updated"); }
else console.log("SKIP: H1 (already fixed ya string match nahi hui)");

writeFileSync(p, s, "utf8");
console.log(`\nDone. Total changes: ${n}`);
