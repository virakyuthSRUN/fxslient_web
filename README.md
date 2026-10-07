# ꜰx || ꜱɪʟᴇɴᴛ.Ss — Next.js site

Next.js 15 (App Router, React 19, TypeScript) build of the
**fxsilentss** personal brand + gold-trading-community landing page.

## Run locally

```bash
npm install   # or pnpm / yarn / bun
npm run dev   # http://localhost:3000
```

Then `npm run build && npm start` for a production build.

## Project layout

```
src/
├── app/
│   ├── layout.tsx     Fonts (Onest + JetBrains Mono) + metadata + favicon
│   ├── page.tsx       Composes the sections
│   ├── globals.css    All styling (porcelain-glass system, animations, responsive)
│   └── icon.svg       Dark fx monogram with a gold dot — browser tab icon
├── components/
│   ├── Ambient.tsx    Four drifting aurora blobs behind everything
│   ├── Nav.tsx        Sticky top glass bar
│   ├── Hero.tsx       Brand title + portrait + 4 stat tiles + marquee ticker
│   ├── TrackRecord.tsx    Firm chips + 11 certificates + totals + CTA
│   ├── Method.tsx     Four reads + concepts strip + Rule 0 (when NOT to trade)
│   ├── Faq.tsx        Six collapsible glass accordions
│   ├── Join.tsx       Free badge + how-to-join steps + three pillars + three doors
│   ├── Footer.tsx     Brand + risk disclosure
│   ├── Lightbox.tsx   Certificate viewer (module-level store, Esc / click-out closes)
│   └── StickyJoin.tsx Bottom-sticky Join bar on mobile (shows past hero, hides at Join)
├── data/
│   └── certs.ts       Certificate list + firm list
└── hooks/
    ├── useReveal.ts   IntersectionObserver scroll-reveal
    ├── useCountUp.ts  Animated stat count-up
    └── useTilt.ts     Pointer-driven 3D tilt (reduced-motion / coarse-pointer aware)

public/
└── images/            All certificate JPEGs + portrait.webp
```

## Images

The `public/images/` folder in this zip is empty by design — the images are large and
the 11 certificates + portrait live alongside the published Artifact version.

Drop these 12 files into `public/images/` before building:

```
01-the5ers.jpg
02-alpha.jpg
03-fundingpips.jpg
04-ftm-funded.jpg
05-ftm-3029.jpg
06-ftm-4990.jpg
07-tft-royal.jpg
08-mff.jpg
09-fundednext-split.jpg
10-fundednext-crown.jpg
11-alpha-futures.jpg
portrait.webp
```

## Design tokens

Everything is driven by CSS custom properties on `:root` in `globals.css` — change
one token to re-skin the whole page:

* `--bg-0` / `--bg-1` — porcelain base
* `--glass-1..3`, `--glass-hi` — translucent surfaces + highlight edge
* `--ink` / `--ink-soft` / `--ink-faint` — text ramp
* `--accent` (blue), `--gold`, `--teal` — accents
* `--font-onest` / `--font-mono` — set by `next/font/google` in `layout.tsx`

## Content you'll want to edit

| Where | What |
|---|---|
| `src/components/Hero.tsx` | Brand copy, hero stats, ticker items |
| `src/components/Faq.tsx` | FAQ Q&A list |
| `src/components/Join.tsx` | Pillars, how-to-join steps, door handles & links |
| `src/components/Footer.tsx` | Risk disclosure |
| `src/data/certs.ts` | Certificate rows + firm chips |
| `src/app/layout.tsx` | `<title>`, meta description, Open Graph |

## Deploy

Works unchanged on Vercel. Any Next-compatible host is fine
(the page is static enough to also run as `next export` / `output: "export"`
if you prefer a plain static deploy — remove the `fill`-based `next/image`
in `Hero.tsx` first and use a plain `<img>`).

## Notes

* **No Tailwind.** Plain CSS in one file — matches the original Artifact and
  keeps dependencies minimal.
* **No external JS libraries** — React 19 + Next 15 only.
* **Reduced-motion aware** — all animations and tilt effects are disabled
  when `prefers-reduced-motion: reduce`.
* **Responsive down to ~360 px** — hero stacks, grids collapse, mobile sticky
  Join bar appears on narrow screens.
