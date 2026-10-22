# Marni Wellness & Beauty

Next.js rebuild of [marniwellnessbeauty.com](https://marniwellnessbeauty.com), keeping the original theme: gold `#c9902e` / `#cea642` on white and the site's own photos. One typeface throughout, Fira Sans, matching the lettering of the Marni Alas logo (semibold, uppercase, tracked for titles).

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # every page is prerendered as static HTML
npm start
```

## Content

All copy lives in `data/`, so most edits never touch a component:

| File | What it holds |
| --- | --- |
| `data/site.ts` | Menu, addresses, emails, WhatsApp numbers, special offer |
| `data/treatments.ts` | Ayurveda, massage and beauty menu (prices, durations, booking links) |
| `data/packages.ts` | The 7 retreat packages; each gets a page at `/<slug>/` |
| `data/villas.ts` | Rooms, facilities, booking links |
| `data/reviews.ts` | Guest reviews on the home page |
| `data/news.ts` | News posts at `/news/<slug>/` |
| `data/gallery.ts` | Gallery albums |

## Images

Images are copies of the original WordPress uploads in `public/images/<yyyy>/<mm>/`. After referencing a new upload path in `data/` or a page, run:

```bash
node scripts/fetch-assets.mjs
```

It downloads any missing files from the live site, caps them at 2000px wide, and refreshes `data/image-sizes.json` (used by the gallery layout).

## URLs

Original URLs are kept (`trailingSlash: true`). Old dated news URLs and the former beauty/service pages redirect in `next.config.ts`.
