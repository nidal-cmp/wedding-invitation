# Shiba & Adheeb — Wedding Invitation

A single-page, mobile-first wedding invitation built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Add your photos and music

Drop these files in — the site already looks for them and falls back to a
tasteful placeholder if any are missing:

```
public/images/bride.jpg
public/images/groom.jpg
public/images/couple.jpg
public/images/venue.jpg
public/music/wedding.mp3   (optional)
```

## Edit the wording

All copy lives in `src/components/*.jsx` — each file is one section
(Hero, Invitation, Couple, Countdown, WeddingDetails, Venue, Family,
Closing, Footer). The countdown target date is set in
`src/components/Countdown.jsx`.

The "View Location" button in `Venue.jsx` currently opens a Google Maps
*text search* for "Bianco Castle, Tirur" (no coordinates were invented).
Once you have the exact map link or place ID, swap `MAPS_URL` in that
file for it.

## Build for production

```bash
npm run build
```

This outputs a static `dist/` folder.

## Deploy

**Vercel** — import the repo at vercel.com/new, framework preset "Vite",
no config needed.

**GitHub Pages** — set `base: '/your-repo-name/'` in `vite.config.js`,
run `npm run build`, then deploy the `dist/` folder (e.g. with the
`gh-pages` package or GitHub Actions).
