// patch-home-uae.mjs — WEBSITE folder mein rakho, phir chalao: node patch-home-uae.mjs
// Homepage (app/page.js) pe Dubai/UAE + Arabic content daalta hai aur ek "Built for the UAE" section add karta hai.
import { readFileSync, writeFileSync } from "fs";

const p = "app/page.js";
let s = readFileSync(p, "utf8");
let n = 0;

function rep(oldT, newT, label) {
  if (s.includes(oldT)) { s = s.split(oldT).join(newT); n++; console.log("OK: " + label); }
  else console.log("SKIP (nahi mila): " + label);
}

// 1) Hero chip
rep("AI Receptionist For WhatsApp", "WhatsApp AI Receptionist for the UAE", "hero chip");

// 2) Hero subheading
rep(
  "NextReply answers your customers on WhatsApp, replies to their voice notes and photos, handles their questions, and books appointments straight into your calendar. In their language, at any hour.",
  "Across Dubai and the UAE, NextReply answers your customers on WhatsApp — in Arabic and English — replies to their voice notes and photos, handles their questions, and books appointments straight into your calendar, at any hour.",
  "hero subheading"
);

// 3) GDPR -> UAE PDPL (dono badges)
rep("GDPR Aligned", "UAE PDPL Aligned", "GDPR badge -> UAE PDPL");

// 4) USP "Speaks Their Language" body -> Arabic/English explicit
rep(
  "Every reply comes back in the language the customer wrote in, with no extra setup.",
  "Arabic or English — every reply comes back in the language your customer wrote in, with no extra setup.",
  "USP language line"
);

// 5) Naya "Built for the UAE" section, FEATURES se pehle add karo.
// (single-quote attributes taake CONTENT string na toote; ek hi line, koi newline nahi)
const uae = "<!-- UAE --><section class='usp'><div class='wrap'><div class='sec-head'><span class='eyebrow'><span class='pulse'></span>Built For The UAE</span><h2>Made For How The UAE Does Business</h2><p>From Dubai to Abu Dhabi, your customers message on WhatsApp in Arabic and English. NextReply answers both, day and night.</p></div><div class='usp-grid'><div class='usp-card'><h3>Arabic &amp; English</h3><p>Replies naturally in Arabic or English, matching whatever language each customer writes in.</p></div><div class='usp-card'><h3>Gulf Timings</h3><p>Answers late nights, weekends and around prayer times, so no enquiry waits until morning.</p></div><div class='usp-card'><h3>Your UAE Number</h3><p>Runs on your UAE WhatsApp number through the official WhatsApp Business API.</p></div><div class='usp-card'><h3>Simple AED Plans</h3><p>Clear monthly pricing in AED with no setup fee. Cancel any time.</p></div></div></div></section>";

if (s.includes("<!-- FEATURES -->") && !s.includes("Built For The UAE")) {
  s = s.replace("<!-- FEATURES -->", uae + "<!-- FEATURES -->");
  n++; console.log("OK: added Built for the UAE section");
} else if (s.includes("Built For The UAE")) {
  console.log("SKIP: UAE section pehle se maujood");
} else {
  console.log("SKIP: FEATURES marker nahi mila (section add nahi hua)");
}

writeFileSync(p, s, "utf8");
console.log(`\nDone. Total changes: ${n}`);
