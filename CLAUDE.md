@AGENTS.md

# Café San Francesco

The cafesanfrancesco.com WordPress (Divi) site, rebuilt as a small static Next.js site. Three pages
(`/`, `/menu`, `/focaccia`) plus a 404. No database, no forms, no CMS: every word lives in `content/*.json`,
typed in `lib/content.ts`. To change a price or the hours, edit the JSON and push to `main`.

## Where the content came from (2026-10-27)

| File | Source |
|------|--------|
| `content/site.json` | Live site footer and contact blocks. Hours: "MON – SUN 8:00am – 10:00pm". Grubhub link from the home page. |
| `content/home.json` | Home page text, lightly edited for grammar. Reviews kept close to the originals. |
| `content/menu.json` | Transcribed from the five menu-board images on /menu. Prices exactly as printed. |
| `content/focaccia.json` | Focaccia page. Prices ($12, $15) come from the two Square links, which are the live checkout. |
| `public/images/*` | WordPress uploads, resized. The full raw pull is in `~/Downloads/Projects/cafesanfrancesco-raw` (outside the repo). |

Keys that start with `_` (`_source`, `_note`) are records only. Nothing renders them.

Dropped on purpose: the newsletter form (it had no backend), the "Pick Up for COVID" block, the empty social
icons (they had no links), the old home-page price list (its prices didn't match the menu boards), and the
WordPress placeholder pages (`/sample-page`, `/hello-world`). Those URLs redirect to `/` (308).

## Open questions for the restaurant

1. **Which phone number?** The home page uses (773) 283-1117. The menu and focaccia pages use (773) 988-1399.
   The site now shows 283-1117 everywhere and 988-1399 only on the focaccia page.
2. **Mixed Vegetables:** one word after "cauliflower," is cut off on the printed board.
3. **Meatball sandwich:** the board prints the Penne Rigate description ("penne rigate with red sauce and
   fresh basil"). It's carried as printed.
4. **Is "Buy 3, get 1 free" still running?** The site calls it "this week's special".
5. **Customize Your Own pizza** lists ricotta twice. It's carried as printed.
6. **Social links:** the old site showed Facebook, X and Instagram icons that went nowhere. Send real URLs to add them.
7. **The Focaccia Barese photo** is only 680px wide. A bigger photo would look sharper on large screens.

## Checks

`npx tsc --noEmit`, `npm run lint`, `npm run build`. A Playwright sweep (in the session scratchpad, not
the repo) checks overflow, clipping, contrast, headings, alt text and the sticky menu bar at 8 widths.
