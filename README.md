# Café San Francesco

Website for Café San Francesco, 3815 N. Harlem Ave., Chicago. Built with Next.js and deployed on Vercel.

```bash
npm install
npm run dev
```

All content is in `content/*.json`. Edit it there and push to `main`.

## Changing the menu

1. Edit `content/menu.json`: names, descriptions, prices, notes. Each section's `theme` is its color
   (`green`, `red` or `peach`); `boards` sets which sections share a page and its photo.
2. Run `npm run menu:pdf` to refresh the downloadable PDF (`public/cafe-san-francesco-menu.pdf`).
   The first time on a new machine, run `npx playwright-core install chromium` first.
3. Commit both files and push. The web menu and the home page prices update from the same file.

See `CLAUDE.md` for sources and open questions.
