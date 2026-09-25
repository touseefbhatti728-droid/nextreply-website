// patch-industry-pages-uae.mjs — WEBSITE folder mein rakho, phir chalao: node patch-industry-pages-uae.mjs
// Saare industry Content components (components/*Content.js) pe UAE localization lagata hai.
import { readFileSync, writeFileSync, readdirSync } from "fs";

const dir = "components";
const files = readdirSync(dir).filter((f) => f.endsWith("Content.js"));

let totalFiles = 0, totalChanges = 0;

for (const f of files) {
  const path = `${dir}/${f}`;
  let s = readFileSync(path, "utf8");
  let n = 0;

  // 1) Hero sub ke shuru mein Dubai/UAE line (har page ka apna sub, isliye prepend)
  if (s.includes('<p className="sub">') && !s.includes("Built for Dubai and the UAE.")) {
    s = s.replace('<p className="sub">', '<p className="sub">Built for Dubai and the UAE. ');
    n++;
  }

  // 2) Unsourced "98% Message Open Rate" stat -> honest "Arabic & English"
  const oldStat = '<b>98%</b><span>Message Open Rate</span>';
  const newStat = '<b>AR + EN</b><span>Arabic &amp; English</span>';
  if (s.includes(oldStat)) { s = s.split(oldStat).join(newStat); n++; }

  // 3) Trust badges mein "Arabic + English Support" badge add karo
  const anchor = 'Uses Your Own Number</span>';
  if (s.includes(anchor) && !s.includes("Arabic + English Support")) {
    const badge = '<span className="tb"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Arabic + English Support</span>';
    s = s.replace(anchor, anchor + badge);
    n++;
  }

  if (n > 0) { writeFileSync(path, s, "utf8"); totalFiles++; totalChanges += n; console.log(`OK: ${f} — ${n} change(s)`); }
  else console.log(`— ${f} — koi change nahi (pehle se ho chuka ya string match nahi hui)`);
}

console.log(`\nDone. Files changed: ${totalFiles}, total changes: ${totalChanges}`);
