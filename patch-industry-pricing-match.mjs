// patch-industry-pricing-match.mjs — WEBSITE folder mein rakho, phir chalao: node patch-industry-pricing-match.mjs
// Har industry page ka PRICING section pricing-page jaise design + poori feature list se replace karta hai.
import { readFileSync, writeFileSync, existsSync } from "fs";

const dir = "components";

// Per-industry: plural label + Starter ki pehli (industry-specific) feature line
const MAP = {
  "SalonsContent.js":       { label: "salons",             book: "Books cuts, colour &amp; treatments" },
  "ClinicsContent.js":      { label: "clinics",            book: "Books &amp; reschedules appointments" },
  "DentistsContent.js":     { label: "dental clinics",     book: "Books check-ups &amp; cleanings" },
  "RestaurantsContent.js":  { label: "restaurants",        book: "Takes table reservations" },
  "RealEstateContent.js":   { label: "agencies",           book: "Qualifies leads &amp; books viewings" },
  "GymsContent.js":         { label: "gyms",               book: "Books free trials &amp; classes" },
  "AestheticContent.js":    { label: "aesthetic clinics",  book: "Books consultations &amp; treatments" },
  "VeterinaryContent.js":   { label: "vet clinics",        book: "Books pet appointments" },
  "HomeServicesContent.js": { label: "home-service firms", book: "Captures jobs &amp; books visits" },
  "AutoRepairContent.js":   { label: "garages",            book: "Gives estimates &amp; books services" },
  "HotelsContent.js":       { label: "hotels",             book: "Answers enquiries &amp; takes bookings" },
  "LawFirmsContent.js":     { label: "law firms",          book: "Captures intake &amp; books consultations" },
  "AccountingContent.js":   { label: "accounting firms",   book: "Captures enquiries &amp; books consultations" },
  "PhotographersContent.js":{ label: "photography studios",book: "Shares packages &amp; books shoots" },
};

const TICK = '<span className="tick"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>';

const ICON_A = '<div className="p-icon a"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>';
const ICON_B = '<div className="p-icon b"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 4.8L18.5 9l-4.6 1.2L12 15l-1.9-4.8L5.5 9l4.6-1.2z"/><path d="M18 15l.7 1.8 1.8.7-1.8.7L18 20l-.7-1.8-1.8-.7 1.8-.7z"/></svg></div>';
const ICON_C = '<div className="p-icon c"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg></div>';
const BADGE = '<span className="badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21 8 14 2 9.4h7.6z"/></svg>Most Popular</span>';

const li = (t) => `<li>${TICK}${t}</li>`;

function section(label, book) {
  const starter = [
    book,
    "AI receptionist replying 24/7 on WhatsApp",
    "Replies in Arabic &amp; English",
    "Understands voice notes &amp; photos",
    "Books into Google Calendar with a reference",
    "Hands the chat to you when it is unsure",
    "Up to 500 bookings / month",
  ];
  const pro = [
    "Up to 1500 bookings / month",
    "No-show reminders",
    "Full conversation history in your dashboard",
    "Read every past chat with any customer",
    "Priority support",
  ];
  const biz = [
    "Unlimited bookings",
    "Send every booking to your CRM by webhook",
    "Connect Zapier, Make or Sheets",
    "Test your webhook from the dashboard",
    "Dedicated onboarding to get you set up",
  ];

  return `{/* PRICING */}
<section style={{paddingTop:"0"}}>
  <div className="wrap">
    <div className="sh reveal"><span className="eyebrow">Pricing</span><h2>Simple AED Plans</h2><p>Every plan runs the same bilingual AI on your WhatsApp. Pick the volume that fits — no setup fee.</p></div>
    <div className="price-grid">

      <div className="plan reveal">
        <div className="mesh"></div>
        ${ICON_A}
        <div className="p-name">Starter</div>
        <div className="p-tag2">For smaller ${label} that want every message answered.</div>
        <div className="p-cost"><span className="amt">AED 109</span><span className="per">/mo</span></div>
        <div className="divide"></div><div className="incl">Services You Get</div>
        <ul className="feat">${starter.map(li).join("")}</ul>
        <div className="p-btn"><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
      </div>

      <div className="plan pop reveal">
        <div className="mesh"></div>
        ${BADGE}
        ${ICON_B}
        <div className="p-name">Pro</div>
        <div className="p-tag2">For busy ${label} that never want to miss a booking.</div>
        <div className="p-cost pop"><span className="amt">AED 219</span><span className="per">/mo</span></div>
        <div className="divide"></div><div className="incl">Everything In Starter, Plus</div>
        <ul className="feat">${pro.map(li).join("")}</ul>
        <div className="p-btn"><a href="https://app.nextreply.io/signup" className="btn btn-light">Start Free</a></div>
      </div>

      <div className="plan reveal">
        <div className="mesh"></div>
        ${ICON_C}
        <div className="p-name">Business</div>
        <div className="p-tag2">For growing ${label} with high volume and their own tools.</div>
        <div className="p-cost"><span className="amt">AED 369</span><span className="per">/mo</span></div>
        <div className="divide"></div><div className="incl">Everything In Pro, Plus</div>
        <ul className="feat">${biz.map(li).join("")}</ul>
        <div className="p-btn"><a href="https://app.nextreply.io/signup" className="btn btn-ghost">Start Free</a></div>
      </div>

    </div>
    <p style={{textAlign:"center",fontSize:"13.5px",color:"var(--muted)",marginTop:"24px",maxWidth:"620px",marginLeft:"auto",marginRight:"auto"}} className="reveal">Prices exclude 5% VAT. If you reach your monthly limit, your AI keeps replying and lets customers know your team will confirm shortly, so nothing is ever lost. Upgrade any time.</p>
  </div>
</section>

`;
}

let done = 0;
for (const [file, cfg] of Object.entries(MAP)) {
  const path = `${dir}/${file}`;
  if (!existsSync(path)) { console.log(`— skip (nahi mila): ${file}`); continue; }
  let s = readFileSync(path, "utf8");
  const start = s.indexOf("{/* PRICING */}");
  const end = s.indexOf("{/* FAQ */}");
  if (start === -1 || end === -1 || end <= start) { console.log(`— SKIP ${file}: PRICING/FAQ marker nahi mila`); continue; }
  s = s.slice(0, start) + section(cfg.label, cfg.book) + s.slice(end);
  writeFileSync(path, s, "utf8");
  done++;
  console.log(`OK: ${file}`);
}
console.log(`\nDone. Files updated: ${done}`);
