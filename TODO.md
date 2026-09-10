# TODO

Alles wat nog ingevuld of getoetst moet worden. De placeholders staan in
`content/config.ts` en verschijnen geel gemarkeerd op de site, zodat niets
over het hoofd wordt gezien. Vul ze daar in, de hele site volgt.

## [INVULLEN]

| Wat | Waar op de site | Sleutel in config |
| --- | --- | --- |
| E-mailadres, telefoonnummer, KvK-nummer | footer, privacy, aanbod | `site.email`, `site.telefoon`, `site.kvk` |
| Steiger of adres van de ligplaats | nog nergens getoond | `site.steiger` |
| Werf en type per model | /sloepen | `modellen.*.werf` |
| Uiterste besteldatum | home, /reserveer, /zo-werkt-het, /vragen, /aanbod | `reservering.besteldatum` |
| Tarief schipper per dagdeel, cateringpartners | nog nergens getoond, alleen "regel je erbij" | `extra.schipper`, `extra.catering` |
| Naam oprichter, verhuurbedrijf, sinds, aantal boten, vaarten per jaar | home blok 7, /over | `oprichter.*` |
| Juridische vorm in twee zinnen | /vragen (vraag 4) | `juridisch` |
| Eigen risico bij schade | /vragen (vraag 10) | `schade.eigenRisico` |
| Prijs proefvaart of gratis | /proefvaren | `proefvaren.prijs` |
| Pdf voorbeeldovereenkomst | /duo-of-solo | `voorbeeldovereenkomst` |
| Bewaartermijn gegevens | /privacy | `content/over.ts` |
| Beeld: Prinsen op het water in hoge resolutie | hero home, /sloepen | `public/foto/prinsen.jpg` (nu 768 px breed) |
| Beeld: Amstel op het water | /sloepen (nu neutraal vlak) | `content/foto.ts` |

## [CHECK]

- Barbecue aan boord volgens APV en verzekeraar (`checks.barbecue`, op /sloepen).
- Vaarbewijs: elektrische sloep onder 15 m en 20 km/u (`checks.vaarbewijs`, in /vragen).
- Fiscaal: uitsluiting investeringsaftrek representatieve vaartuigen, BUA (`checks.fiscaal`, in /vragen). De site claimt niets, alleen "vraag je accountant".

## Aannames die je kunt wijzigen

- Zes sloepen voor 2027: vier Prinsen, twee Amstel, allemaal vrij (`sloepen` in config). Werk de beschikbaarheid bij na elke reservering.
- Prijzen: Duo Prinsen € 1.295, Amstel € 995 per bedrijf; Solo Prinsen € 1.995, Amstel € 1.595. Exclusief btw, indicatief.
- Vergelijking: leasen elders vanaf € 2.150 (8,5 m) tot € 2.650 (10 m) per maand exclusief btw, vier tot vijf jaar. Bron: openbare prijzen van een aanbieder, september 2026. De aanbieder wordt nergens genoemd.
- Losse huur staat bewust niet in de vergelijking.
- Verrekenen van ongebruikte dagdelen via verhuur: uit, niet op de site.

## Open keuzes

- Mailkoppeling: de formulieren loggen elke aanvraag en mailen pas als `RESEND_API_KEY` en `AANMELD_NAAR` op Vercel staan. Tot die tijd zie je wel de bevestigingsstaat, maar komt er geen e-mail.
- De Open Graph-afbeelding (`app/opengraph-image.jpg`) is nog de oude foto van bovenaf met gasten. Vervang hem door de Prinsen in hoge resolutie zodra die er is.
- De hero-foto is 768 px breed en daardoor zacht op grote schermen.
- Sociale bewijskracht (klanten, logo's) pas als het echt is.
- Domein: metadata rekent met `https://sloepmaten.nl` (`site.domein`). Zet het domein op Vercel of pas de waarde aan.
