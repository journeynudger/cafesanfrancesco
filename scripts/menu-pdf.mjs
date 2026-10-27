// Prints /print/menu to public/cafe-san-francesco-menu.pdf.
// Run with `npm run menu:pdf` (it builds first). Needs Chromium for Playwright:
// `npx playwright-core install chromium` once per machine if it is missing.
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { chromium } from "playwright-core";

const PORT = 3399;
const OUT = "public/cafe-san-francesco-menu.pdf";

const server = spawn("npx", ["next", "start", "-p", String(PORT)], { stdio: "ignore" });
try {
  let up = false;
  for (let i = 0; i < 60 && !up; i++) {
    await sleep(500);
    up = await fetch(`http://localhost:${PORT}/print/menu`).then((r) => r.ok, () => false);
  }
  if (!up) throw new Error("next start did not come up");

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/print/menu`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  // Every board must fit its sheet; an overfull board would spill onto a blank-backed page.
  const overfull = await page.evaluate(() =>
    [...document.querySelectorAll(".board--print")]
      .filter((b) => b.scrollHeight > b.clientHeight + 1)
      .map((b) => b.getAttribute("aria-label")),
  );
  if (overfull.length) throw new Error(`Too much text for one page: ${overfull.join(", ")}`);
  await page.pdf({ path: OUT, format: "Letter", printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log(`Wrote ${OUT}`);
} finally {
  server.kill();
}
