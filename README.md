# Rotchelgo — Portfolio (React)

Mobile-first portfolio demo for **rotchelgo** — photographer & visual creative. Built with Vite + React (no backend).

## Why React here

- Easier for you to extend (swap images/copy in `src/data/content.js`, add pages later)
- Same stack as Lexend/Jano templates in `rotchelprojects/templates` if you pull patterns later
- Deploys as static files after `npm run build` — still just a link on her phone

## Run locally

```bash
cd portfolio-rotchelgo
npm install
npm run dev
```

Open the URL shown (usually http://localhost:5173).

## Build for deploy

```bash
npm run build
npm run preview   # optional: test production build
```

Upload the `dist/` folder to Netlify, Vercel, or GitHub Pages.

## Customize (no code hunt)

| What | Where |
|------|--------|
| Photos, gallery copy | `src/data/content.js` → `GALLERY_ITEMS`, `HERO_IMAGE` |
| Contact email & socials | `src/data/content.js` → `CONTACT` |
| About / design text | `src/components/About.jsx`, `Design.jsx` |

| Rotchelgo portrait (hero + about) | `public/images/rotchelgo-portrait.jpg` |

Replace gallery Unsplash URLs with more photos in `public/images/` as you add them.

## Stack

- React 19 + Vite 6
- Plain CSS (no Tailwind)
- No router yet — single-page scroll
