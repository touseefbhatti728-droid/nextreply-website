// patch-pricing-cards-ui.mjs — WEBSITE folder mein rakho, phir chalao: node patch-pricing-cards-ui.mjs
// Pricing cards ki UI/UX theek karta hai (price ek line, barabar height, buttons neeche align).
import { readFileSync, writeFileSync } from "fs";

const p = "app/globals.css";
let s = readFileSync(p, "utf8");

const MARKER = "/* == PRICING CARDS UI POLISH == */";
if (s.includes(MARKER)) {
  console.log("SKIP: polish pehle se maujood hai (dobara add nahi kiya).");
} else {
  const css = `

${MARKER}
.price-grid{ align-items:stretch; }
.plan{ display:flex; flex-direction:column; overflow:visible; }
.plan .pd{ min-height:42px; }
.plan .feat{ flex:1 1 auto; }
.plan > .btn{ margin-top:auto; }
.plan .amt{ white-space:nowrap; font-size:40px; line-height:1.1; letter-spacing:-1px; }
.plan .amt span{ font-size:16px; font-weight:600; letter-spacing:0; margin-left:3px; }
@media (max-width:640px){ .plan .amt{ font-size:34px; } }
/* == END PRICING CARDS UI POLISH == */
`;
  s = s + css;
  writeFileSync(p, s, "utf8");
  console.log("OK: pricing cards UI polish added to app/globals.css");
}
