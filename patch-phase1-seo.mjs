// PHASE 1 SEO — UAE meta titles/descriptions for ALL pages + sitemap + robots.
// Run from WEBSITE root:  node patch-phase1-seo.mjs
import { readFileSync, writeFileSync, existsSync } from "fs";

let changed = [];

function setMeta(file, title, desc) {
  if (!existsSync(file)) { console.log("skip (not found):", file); return; }
  let s = readFileSync(file, "utf8");
  const before = s;
  s = s.replace(/title:\s*(["'`])(?:\\.|(?!\1).)*\1/, `title: ${JSON.stringify(title)}`);
  s = s.replace(/description:\s*\n?\s*(["'`])(?:\\.|(?!\1).)*\1/, `description:\n    ${JSON.stringify(desc)}`);
  if (s !== before) { writeFileSync(file, s, "utf8"); changed.push(file); console.log("meta updated:", file); }
  else console.log("no meta match:", file);
}

// ---- Core pages ----
setMeta("app/layout.js",
  "WhatsApp AI Chatbot UAE — 24/7 Bookings From AED 109/mo | NextReply",
  "Replies in Arabic and English in about 5 seconds, understands voice notes and books clients straight into your calendar. No setup fee — start free today.");
setMeta("app/pricing/page.js",
  "WhatsApp Chatbot Pricing UAE — No Setup Fee, From AED 109 | NextReply",
  "Three flat monthly plans in AED. Unlimited AI replies, Arabic and English, voice notes and calendar booking included. Compare plans and see real Meta fees.");
setMeta("app/industries/page.js",
  "WhatsApp Chatbot for UAE Businesses — 14 Industry Use Cases | NextReply",
  "Salons, property agents, restaurants, gyms and home services across Dubai and Abu Dhabi use one AI to answer WhatsApp and book customers. Find your setup.");
setMeta("app/connect-whatsapp/page.js",
  "How to Connect WhatsApp Business API in the UAE — 5 Steps | NextReply",
  "Link your UAE WhatsApp number and Google Calendar in about 10 minutes. What Meta verification needs, which number to use, and how to test your AI.");

// ---- Industry pages (UAE/Dubai localized titles) ----
setMeta("app/industries/salons-spas/page.js",
  "WhatsApp Booking Bot for Salons in Dubai & UAE | NextReply",
  "A client sends a style photo or an Arabic voice note at 11 PM — NextReply replies in seconds and books the chair. No setup fee, live today. Start free.");
setMeta("app/industries/real-estate/page.js",
  "WhatsApp AI for Dubai Real Estate — Qualify Leads 24/7 | NextReply",
  "Buyers and tenants message listings at all hours. NextReply qualifies leads by area and budget, answers in Arabic and English, and books viewings 24/7.");
setMeta("app/industries/clinics/page.js",
  "WhatsApp Chatbot for Clinics in Dubai & UAE | NextReply",
  "Patients message about appointments and hours day and night. NextReply answers in Arabic and English and books consultations into your clinic calendar.");
setMeta("app/industries/dentists/page.js",
  "WhatsApp Booking Bot for Dental Clinics in the UAE | NextReply",
  "From toothache emergencies to check-ups, NextReply answers patients in Arabic and English and books dental appointments 24/7 — no setup fee.");
setMeta("app/industries/restaurants/page.js",
  "WhatsApp Reservation Bot for UAE Restaurants | NextReply",
  "Take table reservations and answer menu and Iftar questions on WhatsApp, in Arabic and English, 24/7 — straight into your calendar. Start free.");
setMeta("app/industries/gyms/page.js",
  "WhatsApp Chatbot for Gyms & Fitness Studios in the UAE | NextReply",
  "Book trial classes and PT sessions and answer membership questions on WhatsApp in Arabic and English, day and night. No setup fee — start free.");
setMeta("app/industries/aesthetic-clinics/page.js",
  "WhatsApp Booking Bot for Aesthetic Clinics in Dubai | NextReply",
  "Clients ask about treatments and prices late at night. NextReply replies in Arabic and English, shares details, and books consultations 24/7.");
setMeta("app/industries/veterinary/page.js",
  "WhatsApp Chatbot for Vet Clinics in the UAE | NextReply",
  "Worried pet owners message at all hours. NextReply answers in Arabic and English, flags urgent cases, and books vet appointments into your calendar.");
setMeta("app/industries/home-services/page.js",
  "WhatsApp Booking Bot for Home Services in Dubai & UAE | NextReply",
  "AC repair, cleaning and maintenance jobs — NextReply reads photos, gives estimates, and books technician visits on WhatsApp in Arabic and English, 24/7.");
setMeta("app/industries/auto-repair/page.js",
  "WhatsApp Chatbot for Car Services & Garages in the UAE | NextReply",
  "Servicing, detailing and repair enquiries answered on WhatsApp in Arabic and English. NextReply gives estimates and books jobs into your calendar 24/7.");
setMeta("app/industries/hotels/page.js",
  "WhatsApp Concierge Bot for UAE Hotels & B&Bs | NextReply",
  "Answer room availability and guest questions on WhatsApp in Arabic and English, 24/7. NextReply handles booking enquiries and gives instant concierge help.");
setMeta("app/industries/law-firms/page.js",
  "WhatsApp Chatbot for Law Firms in the UAE | NextReply",
  "Capture client enquiries and book consultations on WhatsApp in Arabic and English, 24/7 — confidential intake handled while your team is in court.");
setMeta("app/industries/accounting/page.js",
  "WhatsApp Bot for Accounting & Tax Firms in the UAE | NextReply",
  "Answer client questions and book consultations on WhatsApp in Arabic and English. NextReply handles VAT and deadline enquiries 24/7 — no setup fee.");
setMeta("app/industries/photographers/page.js",
  "WhatsApp Booking Bot for Photographers in the UAE | NextReply",
  "Check date availability and explain packages on WhatsApp in Arabic and English. NextReply books shoots into your calendar 24/7 — start free.");

// ---- sitemap.ts ----
const sitemap = `import { MetadataRoute } from "next";

const BASE = "https://nextreply.io";

const routes = [
  "", "/pricing", "/connect-whatsapp", "/privacy", "/terms",
  "/industries",
  "/industries/salons-spas", "/industries/clinics", "/industries/dentists",
  "/industries/restaurants", "/industries/real-estate", "/industries/gyms",
  "/industries/aesthetic-clinics", "/industries/veterinary", "/industries/home-services",
  "/industries/auto-repair", "/industries/hotels", "/industries/law-firms",
  "/industries/accounting", "/industries/photographers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: BASE + path,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
`;
writeFileSync("app/sitemap.ts", sitemap, "utf8");
changed.push("app/sitemap.ts");
console.log("created: app/sitemap.ts");

// ---- robots.ts ----
const robots = `import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://nextreply.io/sitemap.xml",
    host: "https://nextreply.io",
  };
}
`;
writeFileSync("app/robots.ts", robots, "utf8");
changed.push("app/robots.ts");
console.log("created: app/robots.ts");

console.log(`\nDone. Total files changed: ${changed.length}`);
