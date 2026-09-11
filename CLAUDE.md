# Sloepmaten

Deeleigendom van een hoogwaardige elektrische sloep in de Amsterdamse
grachten, voor bedrijven. Twee producten: Duo (twee bedrijven op één sloep,
ieder de helft) en Solo (één bedrijf, de hele sloep). Alles inbegrepen, één
vast bedrag per maand, twaalf maanden, schipper en catering erbij te regelen.
Geen particulieren, geen puntensysteem, geen verhuur. Prinsen tot 40 aan boord, Amstel tot 25,
net zo fijn met vier. De site is een verkoopinstrument: de
oprichter laat hem persoonlijk zien en legt ter plekke een reservering vast.

Twee acties, overal dezelfde tekst: "Kom proefvaren" (primair) en
"Reserveer je sloep" (tekstlink met pijl), uit `content/site.ts`.

De site staat in twee talen: Nederlands op de gewone paden, Engels onder
`/en`, voor buitenlandse bedrijven in Nederland. Dezelfde pagina's,
dezelfde feiten, alleen andere woorden.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4. Geen Framer Motion, geen Lenis.
- Twee lettertypen via next/font (self-hosted, `display: optional`, metrische fallback): Instrument Serif (`--font-serif`, utility `kop`) voor h1, h2, woordmerk, productnamen en prijzen, en Inter (`--font-inter`) voor tekst en interface, met `-apple-system` ervoor in de stack.
- Beelden via `next/image` met statische import en blur, in `components/ui/Foto.tsx`. Ontbreekt beeld: `components/ui/Vlak.tsx` met [INVULLEN], nooit een placeholderfoto.
- Twee formulieren als Server Actions in `app/actions.ts` (reserveren, proefvaren): valideren, loggen altijd, mailen via Resend zodra `RESEND_API_KEY` en `AANMELD_NAAR` gezet zijn (zie `.env.example`). Honeypotveld `website`.
- Deploy op Vercel.

## Twee talen

- Paden en de vertaling ertussen staan in `lib/taal.ts` (`paden`, `wissel`, `taalUitPad`). Engelse route: `/en/duo-or-solo`, `/en/how-it-works`, `/en/boats`, `/en/faq`, `/en/about`, `/en/trial-trip`, `/en/reserve`, `/en/offer`, `/en/privacy`.
- Twee root layouts via routegroepen: `app/(nl)` en `app/(en)`, allebei via `components/Basis.tsx` (html lang, nav, footer, scrollhulpen). Eén 404 voor onbekende adressen in `app/global-not-found.tsx` (Nederlands), aangezet met `experimental.globalNotFound`.
- Elke pagina is één regel: metadata via `paginaMeta(taal, nlPad, meta)` uit `lib/meta.ts` (canonical plus hreflang nl, en, x-default) en een body uit `components/paginas.tsx`. Componenten krijgen `taal` als prop en halen hun tekst uit `inhoud(taal)` (`content/index.ts`).
- Nederlandse teksten in `content/*.ts` (gebundeld in `content/nl.ts`), Engelse in `content/en/*.ts` (gebundeld in `content/en.ts`). De Engelse bestanden typen zich tegen de Nederlandse (`typeof homeNl`), dus een nieuw veld moet in beide talen. Cijfers komen altijd uit `content/config.ts`; `content/en/config.ts` vertaalt alleen de woorden eromheen.
- Nav, footer en de mobiele balk zijn client components: die lezen de taal uit het pad via `menu(taal)` in `content/menu.ts`. De taalwissel staat rechts in de nav en onderaan het mobiele menu.
- Bedragen: `bedrag(n, taal)` geeft "€ 1.295" in het Nederlands en "€ 1,295" in het Engels. Formulierfouten komen uit `fouttekst[taal]`; het formulier stuurt een verborgen veld `taal` mee, zodat de melding aan ons vermeldt in welke taal iemand reserveerde.

## Eén bron van waarheid

Alle feiten staan in `content/config.ts`: modellen, producten en prijzen,
dagdelen, seizoen, looptijd, reservering, samen (hoe Duo deelt), inbegrepen,
beschikbaarheid per sloep (live op /duo-of-solo), oprichter, vergelijking
met leasen elders. Pas daar iets aan en de hele site volgt.

Wat nog niet vaststaat, staat als `invullen("...")` en verschijnt op de site
als `[INVULLEN: ...]` met gele markering via `components/ui/Tekst.tsx`;
wat getoetst moet worden als `check("...")`. Verzin nooit feiten (klanten,
logo's, reviews, KvK, certificaten, fiscale voordelen). Geen placeholders
in de hero of de prijstabel.

## Structuur

- `/app`: `(nl)` met `/` (home), `/duo-of-solo` (prijzen, beschikbaarheid, vergelijking, kosten per vaart), `/reserveer`, `/zo-werkt-het`, `/vragen`, `/sloepen`, `/aanbod` (printvriendelijk, één A4, niet geïndexeerd), `/proefvaren`, `/over`, `/privacy`, `not-found`; `(en)` met dezelfde pagina's onder `/en`. Daarnaast `actions`, `globals.css`, `global-not-found`, `sitemap` (beide talen met hreflang), `robots`, `manifest`, icons en opengraph-image. Redirects van de oude routes in `next.config.ts`.
- `/components`: Basis (het skelet van elke pagina), paginas (de body van elke pagina, in beide talen), Nav, Footer, Scroll (Voortgang, MobieleBalk), Hero (kop links op wit, de sloep rechts in een hoog kader, tekst nooit op een foto), Diashow (drie foto's die hun kader vullen, laden en wisselen pas bij de eerste beweging van de bezoeker, daarna elke 3,5 seconde, stippen om te kiezen, stil bij reduced motion), Home (Waarom, VoorWie, Amsterdam, DuoSolo, Samen, Stappen, Inbegrepen, LeasenOfDelen, Slot), Prijzen (Prijstabel, Beschikbaarheid, KostenPerVaart, Overeenkomst), ReserveerFormulier, ProefvaarFormulier, PrintKnop.
- `/components/ui`: Container (1200 px), Knop (Knop, KnopLink, PijlLink), Sectie (de enige beweging), Kop, Tekst (placeholders), Foto, Vlak, Accordion, Veld (Invoer, Keuze), Rijen (Rijen, Lijst met optionele vinkjes, Vinkje).
- `/content`: config plus per pagina een tekstbestand (home, prijzen, reserveer, werkt, vragen, sloepen, proefvaren, over met privacy, aanbod, site, foto), `nl.ts` en `en.ts` als bundel, `index.ts` met `inhoud(taal)`, `menu.ts` voor de client, en `en/` met dezelfde bestanden in het Engels.
- `/lib`: taal (paden en wissel), meta (canonical en hreflang), fonts, utils (cn, bedrag per taal, procentMinder), validatie (regels en foutteksten per taal, client en server).
- `/foto-bron` bronfoto's (niet uitgeleverd), `scripts/foto-crops.mjs` maakt `public/foto/*.jpg`.

## Ontwerp

Niveau Apple: rust, één boodschap per scherm, het product en het water
dragen de pagina. Twijfel je, laat het weg.

- Tokens in `@theme` in `app/globals.css`, alleen deze namen: `wit`, `room` (warm off-white voor afwisselende secties), `antraciet` (tekst), `grijs` (secundaire tekst), `lijn`, `blauw` (enige accent: knoppen, links, actieve staat), `blauw-donker` (hover), `nacht` (de ene donkere band: hero-achtergrond en het slot), `markeer` (placeholders). Geen gradients, geen kleurvlakken achter koppen; alleen de waas onderin de hero.
- Typografie: koppen in Instrument Serif 400, regelhoogte 1,0, h1 46 px mobiel tot 84 px desktop (hero 46 tot 72 px), met één cursief accent in blauw via `*woord*` in de herokop. h3 in Inter 600 of via `kop` in de serif. Korte koppen in interface-onderdelen (accordion) in Inter. Sectielabels als kleine kapitalen (`label`, 12 px, 0.14em). Body Inter 17 tot 18 px, regelhoogte 1,5, maximaal 65 tekens (`maat`). Geen bold in lopende tekst.
- Layout: inhoud maximaal 1200 px, secties 80 px mobiel tot 160 px desktop verticale ruimte (`Sectie`, toon `wit`, `room` of `nacht`). Alles links uitgelijnd op één raster van twaalf kolommen: kop links, inhoud rechts, of één kolom tekst naast één beeld. Geen kaders: kolommen en rijen scheiden we met hairlines (`divide-lijn`, `border-lijn`), ook in de prijstabel en de vergelijking. Stappen als rijen met een serifnummer (01, 02, 03). Nooit drie kolommen met een icoon boven elke tekst, nooit gecentreerde tekst.
- Beweging: `Sectie`: fade met 12 px verschuiving, 400 ms, één keer, via IntersectionObserver. Secties die bij laden al in beeld staan bewegen niet. `prefers-reduced-motion` schakelt alles uit. Geen parallax, geen autoplay, geen animerende cijfers. Daarnaast twee scrollhulpen in `components/Scroll.tsx`: een dunne voortgangslijn onder de nav (alle schermen) en op de telefoon een vaste knoppenbalk onderin die verschijnt na 560 px scrollen, niet op de formulierpagina's en /aanbod.
- Componenten: sticky nav wit, met dunne onderlijn bij scrollen. Nooit tekst op een foto: de hero zet de kop links op wit en de foto ernaast. Eén primaire knop (blauw, pil; variant `licht` op donker), secundair als tekstlink met pijl (`licht` op donker). Radius `knop` pil, `kaart` 20 px voor foto's in de pagina, met een hairline aan de binnenkant (`Foto`). De hero loopt van rand tot rand. Schaduw maximaal `shadow-licht`. Accordion met dunne lijnen (CSS grid-rows). Formulieren: label boven het veld, grote velden, duidelijke focus, één knop.
- Niet: emoji's, gradientknoppen, glassmorphism, zware schaduwen, pop-ups, chatwidgets, badges, sterren, logo's die niet echt zijn, cookiebanner (we tracken niet).

## Tekst en toon

Kort, concreet, Amsterdams, "je". Geen uitroeptekens, geen Engelse
marketingtermen, geen gedachtestreepjes, geen drieslagen. Eén gedachte per
zin. "Sloepmaten" is het merk, "sloepmaat" de klant, "duo-partner" het
andere bedrijf. "Deeleigenaar" en "deeleigendom" aan elkaar. Bedragen als
"€ 1.295" (`bedrag()`), altijd "excl. btw", "indicatief" waar nog niet
definitief. Het woord "boeken" komt niet voor: wij zeggen "aanvragen" en
"pakken". "Altijd" alleen bij Solo. Nergens "verhuur", "zustersloep",
opzegtermijn, een inkoopproces of wie er achter Sloepmaten zit: je hebt
gewoon je sloep, alleen of samen. Zo simpel mogelijk voor een bedrijf.

## Kwaliteit

Build en lint slagen bij elke commit. Elke pagina getest op 375 px en
desktop (schermafbeeldingen via Playwright in de scratchpad). Lighthouse
mobiel: performance, accessibility en best practices minimaal 95, CLS 0.
De diavoorstelling begint daarom pas bij de eerste beweging van de
bezoeker. Per pagina en per taal een unieke title en description, met
canonical en hreflang. Elke wijziging in beide talen, en beide formulieren
getest in beide talen. Korte Nederlandse commit messages.

@AGENTS.md
