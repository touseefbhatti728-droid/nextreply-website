// Fixes mobile for the two new homepage sections by removing the forced
// 4-column inline style, and adds responsive CSS to globals.
// Run from WEBSITE root:  node patch-sections-mobile.mjs
import { readFileSync, writeFileSync } from "fs";

// 1) page.js — remove the inline forced 4-col grid so CSS media queries can work
{
  const p = "app/page.js";
  let s = readFileSync(p, "utf8");
  let before = s;
  // these were injected as escaped strings inside the CONTENT template
  s = s.split('class=\\"types-grid\\" style=\\"grid-template-columns:repeat(4,1fr)\\"').join('class=\\"types-grid grid4\\"');
  s = s.split('class=\\"usp-grid\\" style=\\"grid-template-columns:repeat(4,1fr)\\"').join('class=\\"usp-grid grid4\\"');
  // also handle non-escaped just in case
  s = s.split('class="types-grid" style="grid-template-columns:repeat(4,1fr)"').join('class="types-grid grid4"');
  s = s.split('class="usp-grid" style="grid-template-columns:repeat(4,1fr)"').join('class="usp-grid grid4"');
  if (s !== before) { writeFileSync(p, s, "utf8"); console.log("page.js: cleaned inline grid -> .grid4 class"); }
  else console.log("page.js: nothing to change (already patched or pattern differs)");
}

// 2) globals.css — add .grid4 responsive rules at the end
{
  const p = "app/globals.css";
  let s = readFileSync(p, "utf8");
  if (!s.includes(".grid4{")) {
    s = s.trimEnd() + `

/* New homepage sections: responsive 4-col grid */
.grid4{ grid-template-columns: repeat(4, 1fr) !important; }
@media (max-width: 900px){ .grid4{ grid-template-columns: 1fr 1fr !important; } }
@media (max-width: 560px){ .grid4{ grid-template-columns: 1fr !important; } }
`;
    writeFileSync(p, s, "utf8");
    console.log("globals.css: added .grid4 responsive rules");
  } else {
    console.log("globals.css: .grid4 already present");
  }
}

console.log("Done.");
