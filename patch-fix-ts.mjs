// patch-fix-ts.mjs — WEBSITE folder mein rakho, phir chalao: node patch-fix-ts.mjs
// sitemap.ts / robots.ts ko JavaScript (.js) mein badalta hai (routes same rehte hain),
// aur extra TypeScript files (tsconfig.json, next-env.d.ts) hata deta hai.
import { readFileSync, writeFileSync, existsSync, unlinkSync } from "fs";

function tsToJs(src) {
  return src
    // "import type { MetadataRoute } from 'next'"  ya  "import { MetadataRoute } from 'next'"  hatao
    .replace(/^\s*import\s+(type\s+)?\{[^}]*\}\s+from\s+['"]next['"];?\s*$/gm, "")
    // ": MetadataRoute.Sitemap"  /  ": MetadataRoute.Robots"  jaisi type annotations hatao
    .replace(/:\s*MetadataRoute\.\w+/g, "")
    // shuru ke khali lines saaf karo
    .replace(/^\s*\n/, "");
}

let done = [];

for (const base of ["sitemap", "robots"]) {
  const ts = `app/${base}.ts`;
  const js = `app/${base}.js`;
  if (existsSync(ts)) {
    const converted = tsToJs(readFileSync(ts, "utf8"));
    writeFileSync(js, converted, "utf8");
    unlinkSync(ts);
    done.push(`OK: ${ts} → ${js}`);
  } else {
    done.push(`— skip (nahi mila): ${ts}`);
  }
}

// Next.js ne khud TypeScript detect karke jo files banayi thin, unhe hatao
for (const extra of ["tsconfig.json", "next-env.d.ts"]) {
  if (existsSync(extra)) { unlinkSync(extra); done.push(`OK: removed ${extra}`); }
  else done.push(`— skip (nahi mila): ${extra}`);
}

console.log(done.join("\n"));
console.log("\nDone. Ab git add/commit/push karo.");
