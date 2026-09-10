# TODO

Alles wat nog ingevuld of getoetst moet worden. De placeholders staan in
`content/config.ts` en verschijnen geel gemarkeerd op de site, zodat niets
over het hoofd wordt gezien. Vul ze daar in, de hele site volgt.

## [INVULLEN]

| Wat | Waar op de site | Sleutel in config |
| --- | --- | --- |
| E-mailadres, telefoonnummer, KvK-nummer | footer, privacy, aanbod | `site.email`, `site.telefoon`, `site.kvk` |
| Tarief schipper per dagdeel, cateringpartners | nog nergens getoond, alleen "regel je erbij" | `extra.schipper`, `extra.catering` |
| Naam en één zin over de oprichter | /over | `oprichter` |
| Juridische vorm in twee zinnen | /vragen (vraag 4) | `juridisch` |
| Eigen risico bij schade | /vragen (vraag 9) | `schade.eigenRisico` |
| Prijs proefvaart of gratis | /proefvaren | `proefvaren.prijs` |
| Pdf voorbeeldovereenkomst | /duo-of-solo | `voorbeeldovereenkomst` |
| Bewaartermijn gegevens | /privacy | `content/over.ts` |
| Beeld: Prinsen op het water in hoge resolutie | hero home, /sloepen | `public/foto/prinsen.jpg` (nu 768 px breed) |
| Beeld: Amstel in hoge resolutie | /sloepen (nu de sloep van bovenaf, 1094 px) | `content/foto.ts` |

## [CHECK]

- Vaarbewijs: elektrische sloep onder 15 m en 20 km/u (`checks.vaarbewijs`, in /vragen).
- Fiscaal: uitsluiting investeringsaftrek representatieve vaartuigen, BUA (`checks.fiscaal`, in /vragen). De site claimt niets, alleen "vraag je accountant".

## Aannames die je kunt wijzigen

- Zes sloepen voor 2027: vier Prinsen, twee Amstel, allemaal vrij (`sloepen` in config). Werk de beschikbaarheid bij na elke reservering.
- Prijzen: Duo Prinsen € 1.295, Amstel € 995 per bedrijf; Solo Prinsen € 1.995, Amstel € 1.595. Exclusief btw, indicatief.
- Vergelijking: leasen elders vanaf € 2.150 (8,5 m) tot € 2.650 (10 m) per maand exclusief btw, vier tot vijf jaar. Bron: openbare prijzen van een aanbieder, september 2026. De aanbieder wordt nergens genoemd.
- Losse huur staat bewust niet in de vergelijking.
- Bewust weggelaten op verzoek: zustersloep en verhuurvloot, de altijd-varen-garantie, opzegtermijn, "zo kopen we de sloepen" (reserveringsbijdrage, besteldatum) en "wie zit hierachter". Founding sloepmaten (prijs drie jaar vast) staat nog op /duo-of-solo, /reserveer en /aanbod; één regel in config om ook dat weg te halen.
- Verrekenen van ongebruikte dagdelen via verhuur: uit, niet op de site.

## Open keuzes

- De diavoorstelling in de hero wisselt elke zes seconden. Lighthouse rekent die wissel mee in de Speed Index, waardoor de performance-score op mobiel van 98 naar 92 à 93 gaat. Wil je 95 of hoger, dan is de eenvoudigste keuze: wisselen pas na een tik op een stip (autoplay uit in `components/Diashow.tsx`).

- Mailkoppeling: de formulieren loggen elke aanvraag en mailen pas als `RESEND_API_KEY` en `AANMELD_NAAR` op Vercel staan. Tot die tijd zie je wel de bevestigingsstaat, maar komt er geen e-mail.
- De Open Graph-afbeelding (`app/opengraph-image.jpg`) is nog de oude foto van bovenaf met gasten. Vervang hem door de Prinsen in hoge resolutie zodra die er is.
- De hero-foto is 768 px breed en daardoor zacht op grote schermen.
- Sociale bewijskracht (klanten, logo's) pas als het echt is.
- De foto's van bovenaf en van de Green Egg tonen gasten en een tas met een merknaam (Fever-Tree). Op verzoek weer op de site; vervang ze door eigen beeld zodra dat er is.
- Domein: metadata rekent met `https://sloepmaten.nl` (`site.domein`). Zet het domein op Vercel of pas de waarde aan.
