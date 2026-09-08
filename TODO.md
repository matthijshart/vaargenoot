# TODO

## Foto's

Er staan nog geen echte foto's in `public/foto/`. Externe bronnen (Unsplash,
Pexels, Wikimedia) waren vanuit de bouwomgeving niet bereikbaar, dus de
plaatshouders in `public/foto/tmp/` zijn gegenereerd met
`scripts/plaatshouders.mjs` in de kleuren van het palet. Ze hebben de juiste
beeldverhoudingen, zodat de layout niet verschuift als de echte foto's komen.

Vervangen: zet de definitieve foto's in `public/foto/` en pas de paden aan in
`content/foto.ts`. Gebruik dezelfde beeldverhoudingen.

| Bestand nu                              | Vervangen door | Verhouding |
| --------------------------------------- | -------------- | ---------- |
| `public/foto/tmp/01-hero.jpg`           | shot 01        | 16:8       |
| `public/foto/tmp/02-sloep-amstel.jpg`   | shot 02        | 4:3        |
| `public/foto/tmp/03-sloep-prinsen.jpg`  | shot 03        | 4:3        |
| `public/foto/tmp/04-schipper.jpg`       | shot 04        | 5:6        |
| `public/foto/tmp/05-detail-koelkast.jpg`| shot 05        | 1:1        |
| `public/foto/tmp/06-detail-laadstekker.jpg` | shot 06    | 1:1        |
| `public/foto/tmp/07-zijgracht.jpg`      | shot 07        | 4:3        |

Shots 05 en 06 (details) staan klaar in `content/foto.ts` maar zijn nog niet
op de pagina geplaatst. Kandidaat: naast de sectie Inbegrepen of in de
sloepenkaarten.

### Referentiefoto's

In de chat zijn drie referentiefoto's gedeeld: een sloep van bovenaf met
gasten aan tafel (met watermerk van een derde partij), een sloep van bovenaf
in een gracht met een lange tafel, en een diner aan boord met de stad op de
achtergrond. Die zijn niet als bestand in het project beland en dragen
rechten en watermerken van anderen. Ze zijn de sfeerreferentie voor de
shotlist: sloep van bovenaf, lange tafel, gasten, laag warm licht. Wil je ze
toch tijdelijk gebruiken, zet ze dan in `public/foto/tmp/` en pas
`content/foto.ts` aan.

### Shotlist

01 Hero: sloep bij de Magere Brug, gouden uur, gasten aan tafel, camera laag boven het water.
02 Sloep Amstel driekwart van voren, leeg, ochtend.
03 Sloep Prinsen van bovenaf, ligdek vol kussens.
04 Schipper aan het roer, gasten proosten, tegenlicht.
05 Detail koelkast met ijs en flessen.
06 Detail laadstekker aan de ligplaats, avond.
07 Sloep afgemeerd in een stille zijgracht, lantaarn aan.

## Sloep in 3D

De sectie `components/SloepShowcase.tsx` is scrollgestuurd: de sloep draait
uit een perspectiefhoek naar voren en de punten verschijnen na elkaar. Dat
werkt nu met één foto. Voor een echte rondgang (de sloep van alle kanten,
Apple-stijl) is nodig, één van de twee:

1. Een framereeks: 72 tot 120 beelden van de sloep die rondom draait,
   gelijke belichting en achtergrond, 1600 x 1200, als
   `public/foto/360/amstel/0001.webp` en verder. De showcase kan die reeks
   dan op een canvas afspelen op basis van de scrollpositie.
2. Een 3D-model (GLB) van de sloep, dan met react-three-fiber. Zwaarder in
   laadtijd, wel vrij te draaien.

Optie 1 is sneller te maken, lichter en past beter bij "alles glijdt".

## Inhoud die nog bevestigd moet worden

Deze punten staan op de site als "volgt" of zijn bewust algemeen gehouden.
Niets hiervan is verzonnen.

- Vaartijd op een lading, per sloep (`content/sloepen.ts`).
- Ligplaats, per sloep (`content/sloepen.ts`).
- Reserveren vooruit, per aandeel (`content/aandeel.ts`).
- Weekenden, per aandeel (`content/aandeel.ts`).
- Schipper bijboeken, prijs of voorwaarden (`content/aandeel.ts`).
- Vaker varen dan het vaste aantal: is dat gratis of tegen een tarief? Nu
  staat er "Als de sloep vrij is" zonder bedrag.
- FAQ schade: eigen risico en afhandeling (`content/vragen.ts`).
- FAQ opzeggen: opzegtermijn (`content/vragen.ts`).
- De showcase noemt "Stil en uitstootvrij, ook na 2030". Dat volgt uit de
  uitstootvrije zone vanaf 2030; controleer of dat zo mag staan.
- Proefvaart: is die vrijblijvend en gratis? Nu staat dat nergens.
- Vaarbewijs: de grens van 15 meter en 20 km/u staat in de FAQ. Controleer of
  de topsnelheid van beide sloepen daaronder blijft.

## Rekenblok

Met de opgegeven aannames (`content/kosten.ts`) is een eigen elektrische
sloep per vaart goedkoper dan een half aandeel vanaf ongeveer 10 vaarten
per maand. De vergelijking staat er eerlijk. Als dat niet de bedoeling is,
moeten de aannames of de prijs van een half aandeel anders.

De berekening gaat ervan uit dat het maandbedrag twaalf maanden loopt en de
vaarten per maand binnen het seizoen van zeven maanden vallen.

## Formulier

De Server Action in `app/actions.ts` logt nu naar de console. Nog te doen:
versturen naar Resend (mail) of Airtable (lijst), en een privacyregel bij het
formulier.

## Techniek

- Lighthouse mobiel in de bouwomgeving: Performance 90 tot 95, Accessibility
  100, Best practices 100, SEO 100, CLS 0, LCP 2,1 s. De omgeving heeft een
  trage gedeelde CPU met viervoudige throttling. Meet opnieuw op Vercel; daar
  hoort het stabiel boven 95 te komen.
- De hero-foto heeft bewust geen fade bij laden (wel de lichte schaal): met
  fade telde Chrome de LCP pas na de animatie, 1,5 s later.
- Open Graph-afbeelding en favicon ontbreken nog.
- Mobiel menu: op smalle schermen staan alleen het logo en de knop in de
  nav. De sectielinks zijn op mobiel niet bereikbaar via de nav.
