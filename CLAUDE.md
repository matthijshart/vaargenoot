# Sloepmaten

Gedeeld eigendom van elektrische sloepen in de Amsterdamse grachten. Leden
(sloepmaten) betalen een vast maandbedrag voor een aandeel in een specifieke
sloep, alles inbegrepen. Zes nieuwe sloepen in vaarseizoen 2027, vol is vol.
De site heeft één doel: aanmelden voor 2027, of voor meer informatie. Eén
knoptekst overal: `site.cta`. Gevoel: gemak, rustige luxe, alles glijdt.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lenis
- Alle beelden via `next/image` met statische import en `placeholder="blur"`
- Content in `/content/*.ts`, geen CMS
- Aanmeldformulier als Server Action in `app/actions.ts`: logt altijd, mailt via Resend als `RESEND_API_KEY` en `AANMELD_NAAR` gezet zijn (zie `.env.example`)
- Deploy op Vercel

## Structuur

- `/app` layout, page (voorpagina), actions, globals.css; onderliggende pagina's in `/app/prijzen`, `/app/bedrijven`, `/app/zo-werkt-het`, `/app/vragen`, elk via `components/Pagina.tsx` (nav, inhoud, aanmelden, footer)
- `/components` voorpagina: Hero, Ervaring, Sloepen, PrijsTeaser en VerwijsTeasers (Teasers.tsx), Aanmelden. Onderliggend: Aandeel (/prijzen), Bedrijven (/bedrijven), ZoWerktHet en Verdelen (/zo-werkt-het), Vragen (/vragen). Bewaard maar nergens op een pagina: Inzicht, SloepLagen, Schipper, Inbegrepen, Weekstrook
- `/components/ui` primitieven (Knop, Foto, Sectie, SectieKop, Container, AnkerLink, Vinkje)
- `/content` alle teksten, prijzen, aannames en fotoverwijzingen
- `/docs/reserveren.md` de opzet van het verdeelsysteem (punten, weekendgrens, ruilen)
- `/lib` motion-varianten, validatie, hulpfuncties
- `/fonts` lokaal gehoste Newsreader
- `/foto-bron` bronfoto's (niet uitgeleverd), `/scripts/foto-crops.mjs` snijdt daaruit `/public/foto/*.jpg`
- `/public/foto` foto's op de site, `/public/foto/tmp` plaatshouders
- `/public/foto/lagen` lagen van de sloep van bovenaf (transparante PNG, zelfde kader), `/tmp` plaatshouders
- `/scripts/plaatshouders.mjs` en `/scripts/lagen.mjs` maken de plaatshouders

## Tokens

Tailwind v4 kent geen `theme.extend`; de tokens staan in `@theme` in
`app/globals.css`. Gebruik uitsluitend deze namen.

| Naam    | Hex     | Gebruik                                              |
| ------- | ------- | ---------------------------------------------------- |
| nacht   | #0B1F33 | donkere secties, primaire knop, koppen op licht      |
| gracht  | #1F4E79 | accent, hover, links, beschikbaarheid                |
| lucht   | #A7C7E7 | lichte accentvlakken, tags, focusring                |
| nevel   | #DCE6F0 | lijnen, randen, tabellen                             |
| schuim  | #F4F7FA | achtergrond                                          |
| wit     | #FFFFFF | velden, tekst op donker                              |
| messing | #C9A26B | één warm accent: vinkjes, bevestiging, kleine details. Niet voor knoppen |
| inkt    | #0F1B26 | broodtekst                                           |
| zacht   | #5A6B7C | secundaire tekst                                     |

Geen zwart, geen paars, geen gradiënt als decoratie. Blauw is het water, de
warmte komt uit de foto's en het messing.

Overige tokens: `font-kop` (Newsreader), `font-sans` (Manrope),
`ease-zacht` (cubic-bezier 0.2, 0.7, 0.2, 1), utility `maat` (max 62ch).

## Typografie

- Koppen: Newsreader 300, optische maat schaalt mee (`font-variation-settings: "opsz"`). Nooit bold in koppen.
- Broodtekst en interface: Manrope 400, 500, 600.
- Regellengte maximaal 62 tekens. Sentence case overal. Geen hoofdletters als labels.

## Beelden

- Elke foto via `components/ui/Foto.tsx`: vaste verhouding, blur-placeholder, fade bij laden.
- `priority` alleen op de hero. De hero gebruikt `direct` zodat de fade niet op hydratie wacht.
- Verhoudingen: hero 16:8, sloepen 4:3, schipper 5:6, details vierkant.

## Beweging

- Lenis smooth scroll, ankerlinks via `AnkerLink` (Lenis `scrollTo` voor `#id` en `/#id` op dezelfde pagina, anders `next/link`).
- Hero-entree via CSS-keyframes (`opkomen` voor tekst, `foto-opkomen` voor de foto: alleen schaal 1.04 naar 1, geen opacity, anders telt de LCP pas na de fade), parallax via Framer Motion.
- `Verdelen` is de scrollgestuurde sectie op de pagina (vastgepind, 350vh); `SloepLagen` (400vh) staat klaar voor als er echte lagen zijn. Beide: `useScroll` en `useTransform` met functies (geen keyframes: framer-motion zet die om in een native ScrollTimeline die hier het verkeerde element volgt). Bij reduced motion een gewone sectie.
- Secties komen één keer op via `components/ui/Sectie.tsx` (whileInView, once). Nooit per element, nooit per kaartje.
- Framer Motion via `LazyMotion` met `domAnimation` en `strict`: gebruik `m.` in plaats van `motion.`.
- `prefers-reduced-motion`: alles uit, direct zichtbaar. Gebruik `useReducedMotion` in nieuwe componenten.

## Teksten

Nederlands, je-vorm, korte zinnen, actieve werkwoorden. Geen gedachtestreepjes,
geen uitroeptekens, geen pijltjes in knoppen, geen opsommingstekens in lopende
tekst. Gebruik "aandeel", "sloepmaat" en "deel-eigenaar"; "maximaal vier
sloepmaten per sloep" is de exclusiviteitsclaim (volgt uit het kleinste
aandeel, een kwart). Laat
"indicatief" staan bij elke prijs. Verzin geen feiten of cijfers; ontbreekt
iets, zet het in TODO.md.

## Git

Korte Nederlandse commit messages. Branch per feature.

@AGENTS.md
