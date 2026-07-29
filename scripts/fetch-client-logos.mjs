// Fetches a logo/favicon for every client in src/data/clients.ts that has a
// `domain` set, using Google's public favicon service, and saves it to
// public/clients/<slug>.png. Clients without a `domain` (or where Google has
// no real favicon for that domain) are left without a file — the site falls
// back to a placeholder tile with the client's name in that case.
//
// Usage: bun run fetch:logos  (or: node scripts/fetch-client-logos.mjs)

import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { clients } from "../src/data/clients.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "clients");
const SIZE = 128;

async function hashBuffer(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

async function getGenericFaviconHash() {
  // A domain that can't possibly exist — whatever Google returns for it is
  // their generic "no favicon found" placeholder, so we can filter that
  // shape out for every other domain.
  const res = await fetch(
    `https://www.google.com/s2/favicons?domain=this-domain-should-not-exist-aips.invalid&sz=${SIZE}`,
  );
  const buf = Buffer.from(await res.arrayBuffer());
  return hashBuffer(buf);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const genericHash = await getGenericFaviconHash();

  const targets = clients.filter((c) => c.domain);
  console.log(`Fetching logos for ${targets.length}/${clients.length} clients with a domain...`);

  const results = { saved: [], genericSkipped: [], failed: [] };

  for (const client of targets) {
    const url = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(client.domain)}&sz=${SIZE}`;
    try {
      const res = await fetch(url);
      // Google's favicon endpoint returns 404 (not 200) even when it *does*
      // serve a real fallback image, so status alone can't tell us success —
      // read the body whenever it's a PNG and hash-compare it below instead.
      if (!res.headers.get("content-type")?.startsWith("image/")) {
        results.failed.push(client.slug);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      const hash = await hashBuffer(buf);
      if (hash === genericHash) {
        results.genericSkipped.push(client.slug);
        continue;
      }
      const dest = path.join(outDir, `${client.slug}.png`);
      await writeFile(dest, buf);
      results.saved.push(client.slug);
    } catch {
      results.failed.push(client.slug);
    }
  }

  // Clean up any stale files for clients that no longer resolve to a real logo.
  for (const client of clients) {
    if (client.domain) continue;
    const stale = path.join(outDir, `${client.slug}.png`);
    await rm(stale, { force: true });
  }

  console.log(`\nSaved:            ${results.saved.length}`);
  results.saved.forEach((s) => console.log(`  ✓ ${s}`));
  console.log(`\nNo real favicon:   ${results.genericSkipped.length} (falls back to name tile)`);
  results.genericSkipped.forEach((s) => console.log(`  – ${s}`));
  if (results.failed.length) {
    console.log(`\nFailed to fetch:   ${results.failed.length}`);
    results.failed.forEach((s) => console.log(`  ✗ ${s}`));
  }
}

main();
