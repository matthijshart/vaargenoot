# Sloepmaten

Deeleigendom van een hoogwaardige elektrische sloep in de Amsterdamse
grachten, voor bedrijven. Twee producten: Duo (twee bedrijven op één sloep,
ieder de helft) en Solo (één bedrijf, de hele sloep). Alles inbegrepen, één
vast bedrag per maand, twaalf maanden, schipper en catering erbij te regelen.
Geen particulieren, geen puntensysteem. De site is een verkoopinstrument: de
oprichter laat hem persoonlijk zien en legt ter plekke een reservering vast.

Twee acties, overal dezelfde tekst: "Kom proefvaren" (primair) en
"Reserveer je sloep" (tekstlink met pijl), uit `content/site.ts`.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4. Geen Framer Motion, geen Lenis.
- Inter via next/font (self-hosted, `display: optional`, metrische fallback), met `-apple-system` ervoor in de stack.
- Beelden via `next/image` met statische import en blur, in `components/ui/Foto.tsx`. Ontbreekt beeld: `components/ui/Vlak.tsx` met [INVULLEN], nooit een placeholderfoto.
- Twee formulieren als Server Actions in `app/actions.ts` (reserveren, proefvaren): valideren, loggen altijd, mailen via Resend zodra `RESEND_API_KEY` en `AANMELD_NAAR` gezet zijn (zie `.env.example`). Honeypotveld `website`.
- Deploy op Vercel.

## Eén bron van waarheid

Alle feiten staan in `content/config.ts`: modellen, producten en prijzen,
dagdelen, seizoen, looptijd, reservering, garantie, inbegrepen,
beschikbaarheid per sloep (live op /duo-of-solo), oprichter, vergelijking
met leasen elders. Pas daar iets aan en de hele site volgt.

Wat nog niet vaststaat, staat als `invullen("...")` en verschijnt op de site
als `[INVULLEN: ...]` met gele markering via `components/ui/Tekst.tsx`;
wat getoetst moet worden als `check("...")`. Verzin nooit feiten (klanten,
logo's, reviews, KvK, certificaten, fiscale voordelen). Geen placeholders
in de hero of de prijstabel.

## Structuur

- `/app`: `/` (home), `/duo-of-solo` (prijzen, beschikbaarheid, vergelijking, kosten per vaart), `/reserveer`, `/zo-werkt-het`, `/vragen`, `/sloepen`, `/aanbod` (printvriendelijk, één A4, niet geïndexeerd), `/proefvaren`, `/over`, `/privacy`, `not-found`, `sitemap`, `robots`, `manifest`. Redirects van de oude routes in `next.config.ts`.
- `/components`: Nav, Footer, Hero, Home (DuoSolo, Garantie, Inbegrepen, LeasenOfDelen, ZoKopen, Wie, Slot), Prijzen (Prijstabel, Beschikbaarheid, KostenPerVaart, Overeenkomst), ReserveerFormulier, ProefvaarFormulier, PrintKnop.
- `/components/ui`: Container (1200 px), Knop (Knop, KnopLink, PijlLink), Sectie (de enige beweging), Kop, Tekst (placeholders), Foto, Vlak, Accordion, Veld (Invoer, Keuze), Rijen (Rijen, Lijst).
- `/content`: config plus per pagina een tekstbestand (home, prijzen, reserveer, werkt, vragen, sloepen, proefvaren, over met privacy, aanbod, site, foto).
- `/lib`: utils (cn, bedrag, procentMinder), validatie (regels voor beide formulieren, client en server).
- `/foto-bron` bronfoto's (niet uitgeleverd), `scripts/foto-crops.mjs` maakt `public/foto/*.jpg`.

## Ontwerp

Niveau Apple: rust, één boodschap per scherm, het product en het water
dragen de pagina. Twijfel je, laat het weg.

- Tokens in `@theme` in `app/globals.css`, alleen deze namen: `wit`, `room` (warm off-white voor afwisselende secties), `antraciet` (tekst), `grijs` (secundaire tekst), `lijn`, `blauw` (enige accent: knoppen, links, actieve staat), `blauw-donker` (hover), `markeer` (placeholders). Geen gradients, geen kleurvlakken achter koppen.
- Typografie: één sans. Koppen 600, tracking -0.02em, regelhoogte 1,05; h1 40 px mobiel tot 72 px desktop. Body 17 tot 18 px, regelhoogte 1,5, maximaal 65 tekens (`maat`). Geen bold in lopende tekst.
- Layout: inhoud maximaal 1200 px, secties 80 px mobiel tot 160 px desktop verticale ruimte (`Sectie`). Eén kolom tekst naast één beeld, of één centrale kop met beeld eronder. Nooit drie kolommen met een icoon boven elke tekst.
- Beweging: alleen `Sectie`: fade met 12 px verschuiving, 400 ms, één keer, via IntersectionObserver. Secties die bij laden al in beeld staan bewegen niet. `prefers-reduced-motion` schakelt alles uit. Geen parallax, geen autoplay, geen animerende cijfers.
- Componenten: sticky nav transparant, wit met dunne onderlijn bij scrollen. Eén primaire knop (blauw), secundair als tekstlink met pijl. Radius `knop` 8 px, `kaart` 12 px. Schaduw maximaal `shadow-licht`. Accordion met dunne lijnen (CSS grid-rows). Formulieren: label boven het veld, grote velden, duidelijke focus, één knop.
- Niet: emoji's, gradientknoppen, glassmorphism, zware schaduwen, carrousels, pop-ups, chatwidgets, badges, sterren, logo's die niet echt zijn, cookiebanner (we tracken niet).

## Tekst en toon

Kort, concreet, Amsterdams, "je". Geen uitroeptekens, geen Engelse
marketingtermen, geen gedachtestreepjes, geen drieslagen. Eén gedachte per
zin. "Sloepmaten" is het merk, "sloepmaat" de klant, "duo-partner" het
andere bedrijf. "Deeleigenaar" en "deeleigendom" aan elkaar. Bedragen als
"€ 1.295" (`bedrag()`), altijd "excl. btw", "indicatief" waar nog niet
definitief. Het woord "boeken" komt niet voor: wij zeggen "aanvragen" en
"pakken". "Altijd" alleen bij Solo en in "altijd-varen-garantie".

## Kwaliteit

Build en lint slagen bij elke commit. Elke pagina getest op 375 px en
desktop (schermafbeeldingen via Playwright in de scratchpad). Lighthouse
mobiel: performance, accessibility en best practices minimaal 95, CLS 0.
Per pagina unieke title en description. Korte Nederlandse commit messages.

@AGENTS.md
