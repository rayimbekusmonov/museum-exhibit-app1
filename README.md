# Museum Exhibit Guide — QR Landing Pages

A mobile-first Next.js (App Router) site for 21 museum exhibits. Each
exhibit gets a physical QR code pointing at its own URL; scanning it opens
a page with the artifact's photo, title, an audio-guide bar, and a
description — in Uzbek, English, or Arabic (full RTL support for Arabic).

Content for all 21 exhibits was pulled directly from the museum's
labeling documents and lives in `data/exhibitsData.ts` — nothing to
re-type. Adding a 22nd exhibit later is just one more object in that
array; every page (`generateStaticParams`, the gallery rail's "N / total"
counter, etc.) is already driven off `exhibitsData.length`.

## What's inside

```
app/
  layout.tsx            Root layout: fonts, <html dir/lang>, providers
  page.tsx               "/" — reads ?exhibitId= and redirects to /exhibit/[id]
  exhibit/[id]/page.tsx   The actual exhibit page (statically generated ×14)
  not-found.tsx           Friendly 404 for an out-of-range id
  globals.css
components/
  GalleryRail.tsx         Sticky horizontal scroll of all 14 exhibits (01–14)
  LanguageSwitcher.tsx    Floating UZ / EN / AR control, top-right
  AudioGuide.tsx          Play/pause + scrubbable timeline
  ExhibitView.tsx         The shared per-exhibit template
  CornerOrnament.tsx      Small geometric medallion, the page's signature detail
context/
  LanguageContext.tsx     Language state + <html dir="rtl"> injection for Arabic
data/
  exhibitsData.ts         All 14 exhibits, uz/en/ar, typed
public/assets/            Drop your photos here (see below)
```

## 1. Add your photos

The QR/image side is deliberately decoupled from content. Drop 21 images
into `public/assets/` named exactly:

```
exhibit1.jpg  exhibit2.jpg  ...  exhibit21.jpg
```

(`.png` is fine too — just update the matching `image` field in
`data/exhibitsData.ts`.) Until a photo exists, the frame renders empty
rather than showing a broken-image icon.

## 2. Add audio files (optional)

`AudioGuide` looks for `/audio/exhibit{id}-{lang}.mp3` (e.g.
`/audio/exhibit7-en.mp3`). Drop files into `public/audio/` using that
naming pattern and playback works immediately — no code changes needed.
Without a file, the bar still renders (disabled) so the layout never
breaks.

## 3. Run it locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — it redirects to exhibit 01. Try
`http://localhost:3000/exhibit/7` or `http://localhost:3000/?exhibitId=7`
directly, and toggle AR in the top-right switcher to see the RTL layout
flip.

## 4. Generate your 14 QR codes

Point each physical label's QR code at:

```
https://your-domain.vercel.app/exhibit/1
https://your-domain.vercel.app/exhibit/2
...
https://your-domain.vercel.app/exhibit/21
```

(The query-param form `https://your-domain.vercel.app/?exhibitId=7` also
works and redirects to the same page — use whichever your QR generator
prefers.)

## 5. Deploy to Vercel

**Option A — CLI (fastest):**
```bash
npm i -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to your production domain
```

**Option B — GitHub:**
1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects as Next.js — no config needed.
4. Click Deploy. You'll get a live `your-project.vercel.app` URL in
   about a minute.

Every exhibit page is statically generated at build time
(`generateStaticParams` in `app/exhibit/[id]/page.tsx`), so all 14 pages
load instantly for anyone scanning a QR code, with no server/database
round-trip.

## Notes on the design

- Palette and type are built around the collection itself (Quran
  manuscripts, calligraphy panels, Kiswah textiles): a dark ink ground,
  gilded accents, and a vellum-toned reading surface, rather than a
  generic light/cream template.
- `Amiri` (display) and `Noto Naskh Arabic` (Arabic body) were chosen
  specifically for strong, legible Arabic rendering alongside the Latin
  faces (`Newsreader` for uz/en body copy, `JetBrains Mono` for catalog
  numbers and dimensions).
- The gallery rail's `01–14` numbering reflects the exhibits' real
  catalog sequence, not decoration.
