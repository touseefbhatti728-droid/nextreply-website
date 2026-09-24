// Replaces old dashboard URL with the new custom domain across the whole site.
// Run from WEBSITE root:  node patch-dashboard-urls.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const OLD = "https://whatsapp-agent-dashboard-wine.vercel.app";
const NEW = "https://app.nextreply.io";

const EXTS = [".js", ".jsx", ".ts", ".tsx"];
let files = 0, hits = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (["node_modules", ".next", ".git"].includes(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (EXTS.some((e) => p.endsWith(e))) {
      let s = readFileSync(p, "utf8");
      const before = s;
      if (s.includes(OLD)) {
        const count = s.split(OLD).length - 1;
        s = s.split(OLD).join(NEW);
        writeFileSync(p, s, "utf8");
        files++; hits += count;
        console.log(`updated (${count}): ${p}`);
      }
    }
  }
}

walk("app");
walk("components");
console.log(`\nDone. Files: ${files}, links replaced: ${hits}`);
