## Redesign of 99ml.com

A modern apothecary editorial homepage for 99ML — premium Italian travel-size men's grooming. Composition follows the approved direction: warm bone background, Playfair Display serif headlines (with italic flourishes) paired with Inter, moss-green and sand accents, and full-bleed editorial imagery.

### Page composition

1. Centered logo nav (Shop / The 99ML Series — 99ML — Story / Cart)
2. Full-bleed hero: stone-textured product imagery, eyebrow "Engineered for the Journey", headline "Carry-on / *Confidence.*", two CTAs (Shop the Collection / Our Philosophy)
3. The 99ML Series — 4-product grid (Matte Texture Clay, Botanical Cleanser, Alpine Cedar Oil, Transit No. 1) with hover zoom
4. Moss-green brand pillars band: brand story + 4 spec rows (Origin / Ethos / Packaging / Volume) alongside botanicals image
5. Two-up category split: Hair & Beard / Face & Skin with overlay headings
6. Press quote (Dutyfreemag) in italic serif on stone background
7. Dark ink footer with brand blurb, social, Shop column, Customer column

### Tech & assets

- Image generation (8): hero stone-and-bottles, 4 product shots, botanicals on marble, two lifestyle category images. All saved under `src/assets/`.
- Fonts via `@fontsource/playfair-display` + `@fontsource/inter`, imported in `__root.tsx`.
- Tailwind v4 theme tokens in `src/styles.css` for the palette (`bone #f5f5f0`, `ink #1a1a1a`, `moss #2d3a30`, `stone #e2e2d9`, `sand #c4a484`) and font families.
- Single route: `src/routes/index.tsx` containing the homepage.
- SEO: page title, meta description, OG tags updated in `__root.tsx`.

### Technical details

```text
src/
  styles.css              # palette + font tokens, body defaults
  routes/
    __root.tsx            # font imports + SEO meta
    index.tsx             # full homepage
  assets/                 # 8 generated images
```

Switch to build mode and I'll implement.