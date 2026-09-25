// Phase 1 — UAE meta titles + descriptions from the SEO audit.
// Run from WEBSITE root:  node patch-meta-uae.mjs
import { readFileSync, writeFileSync, existsSync } from "fs";

let changed = [];

function setMeta(file, title, desc) {
  if (!existsSync(file)) { console.log("skip (not found):", file); return; }
  let s = readFileSync(file, "utf8");
  const before = s;
  // replace the title: line inside a metadata block
  s = s.replace(/title:\s*(["'`])(?:\\.|(?!\1).)*\1/, `title: ${JSON.stringify(title)}`);
  // replace description (handles multi-line "description:\n    \"...\"")
  s = s.replace(/description:\s*\n?\s*(["'`])(?:\\.|(?!\1).)*\1/, `description:\n    ${JSON.stringify(desc)}`);
  if (s !== before) { writeFileSync(file, s, "utf8"); changed.push(file); console.log("updated:", file); }
  else console.log("no match (check pattern):", file);
}

// Homepage (layout.js holds the root/home metadata)
setMeta("app/layout.js",
  "WhatsApp AI Chatbot UAE — 24/7 Bookings From AED 109/mo | NextReply",
  "Replies in Arabic and English in about 5 seconds, understands voice notes and books clients straight into your calendar. No setup fee — start free today.");

// Pricing
setMeta("app/pricing/page.js",
  "WhatsApp Chatbot Pricing UAE — No Setup Fee, From AED 109 | NextReply",
  "Three flat monthly plans in AED. Unlimited AI replies, Arabic and English, voice notes and calendar booking included. Compare plans and see real Meta fees.");

// Industries hub
setMeta("app/industries/page.js",
  "WhatsApp Chatbot for UAE Businesses — 14 Industry Use Cases | NextReply",
  "Salons, property agents, restaurants, gyms and home services across Dubai and Abu Dhabi use one AI to answer WhatsApp and book customers. Find your setup.");

// Salons page
setMeta("app/industries/salons-spas/page.js",
  "WhatsApp Booking Bot for Salons in Dubai & UAE | NextReply",
  "A client sends a style photo or an Arabic voice note at 11 PM — NextReply replies in seconds and books the chair. No setup fee, live today. Start free.");

// Connect WhatsApp
setMeta("app/connect-whatsapp/page.js",
  "How to Connect WhatsApp Business API in the UAE — 5 Steps | NextReply",
  "Link your UAE WhatsApp number and Google Calendar in about 10 minutes. What Meta verification needs, which number to use, and how to test your AI.");

// Real estate (rewrite target)
setMeta("app/industries/real-estate/page.js",
  "WhatsApp AI for Dubai Real Estate — Qualify Leads 24/7 | NextReply",
  "Buyers and tenants message listings at all hours. NextReply qualifies leads by area and budget, answers instantly in Arabic and English, and books viewings.");

console.log(`\nDone. Files updated: ${changed.length}`);
