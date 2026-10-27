@AGENTS.md

# Café San Francesco

The cafesanfrancesco.com WordPress (Divi) site, rebuilt as a small static Next.js site. Three pages
(`/`, `/menu`, `/focaccia`) plus a 404. No database, no forms, no CMS: every word lives in `content/*.json`,
typed in `lib/content.ts`. To change a price or the hours, edit the JSON and push to `main`.

## The menu: one file, three outputs

`content/menu.json` is the only place the menu lives. It feeds:

- `/menu`, the web menu, drawn as the printed boards (`components/MenuBoard.tsx`);
- `/print/menu`, the same boards on letter-size sheets (not linked, not indexed);
- `public/cafe-san-francesco-menu.pdf`, the "Download menu" file, printed from `/print/menu`;
- the prices in the home page's "From the menu" band (looked up by name, so they can't drift).

After any menu edit, run `npm run menu:pdf`. It builds, prints the PDF, and refuses to write it if any board
no longer fits one page. Commit the new PDF with the JSON change. The PDF is not rebuilt on Vercel.

The boards copy the originals: Playfair Display for headings, dishes and prices; Open Sans Light for the
notes; Cormorant Garamond for the "CAFE / SAN FRANCESCO / ITALIANO" masthead. Colors were sampled from the board
images: green `#2d3800`, red `#740005`, peach `#ffe6d3`, address bar `#133e17`. The original header photos have
the masthead baked in, so the headers use clean photos from the same media library, with the masthead as live text.

## Where the content came from

| File | Source |
|------|--------|
| `content/site.json` | Live site footer and contact blocks. Hours: "MON – SUN 8:00am – 10:00pm". Grubhub link from the home page. Phone (773) 988-1399, confirmed by Lorenzo on 2026-10-28. |
| `content/home.json` | Home page text, lightly edited for grammar. Reviews kept close to the originals. |
| `content/menu.json` | The September 2024 set of six boards (`wp-content/uploads/2024/09/1-1, 2-1, 3-1, 4, 5, 6.jpg`). Prices exactly as printed. |
| `content/focaccia.json` | Focaccia page. Prices ($12, $15) come from the two Square links, which are the live checkout. |
| `public/images/*` | WordPress uploads, resized. The full raw pull (all 101 images) is in `~/Downloads/Projects/cafesanfrancesco-raw` (outside the repo). |

Keys that start with `_` (`_source`, `_note`, `_howTo`) are records only. Nothing renders them.

Why the September 2024 set: the old /menu page showed five boards, three from September 2024 and two older
April 2024 ones (Sandwiches, Pasta & Pizza), and never showed the Soups & Salads board. The September set is the
newest complete one. Against the old page it adds Soups & Salads, drops the Pizza Burger ($12.99), and prices
Sausage Pizza at $18.99 (was $16.99) and Barese pizza at $18.99 (was $15.99).

Dropped on purpose: the newsletter form (it had no backend), the "Pick Up for COVID" block, the empty social
icons (they had no links), the old home-page price list (its prices didn't match the menu boards), and the
WordPress placeholder pages (`/sample-page`, `/hello-world`). Those URLs redirect to `/` (308).

## Open questions for the restaurant

1. **September 2024 boards:** confirm Soups & Salads, no Pizza Burger, and Sausage and Barese pizza at $18.99.
2. **Mixed Vegetables:** one word after "cauliflower," is cut off on the printed board.
3. **Meatball sandwich:** the board prints the Penne Rigate description ("penne rigate with red sauce and
   fresh basil"). It's carried as printed.
4. **Is "Buy 3, get 1 free" still running?** The site calls it "this week's special".
5. **Social links:** the old site showed Facebook, X and Instagram icons that went nowhere. Send real URLs to add them.
6. **The Focaccia Barese photo** is only 680px wide. A bigger photo would look sharper on large screens.

Resolved: phone number is (773) 988-1399 everywhere (2026-10-28). Customize Your Own pizza listed ricotta
twice; the duplicate is removed.

## Checks

`npm run typecheck`, `npm run lint`, `npm run build`, `npm run menu:pdf`. A Playwright sweep (in the session
scratchpad, not the repo) checks overflow, clipping, contrast, headings, alt text and the sticky menu bar at 8 widths.
