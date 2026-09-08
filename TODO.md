# TODO

## Foto's

Er is nu één echte bronfoto: `foto-bron/sloep-bovenaf.png` (1194 x 1212,
via GitHub geüpload). Alle beelden op de site zijn uitsnedes daaruit, gemaakt
door `scripts/foto-crops.mjs`. Dat werkt, maar let op:

- De resolutie is laag voor de hero op grote schermen. Een bron van minimaal
  2400 pixels breed is nodig.
- Op de foto staat een tas met een merknaam (Fever-Tree) en kijken mensen in
  de camera. Voor de definitieve site: eigen foto's zonder merken van derden.
- De plaatshouders in `public/foto/tmp/` worden niet meer gebruikt, behalve
  door `scripts/plaatshouders.mjs`. Ze kunnen weg zodra de shotlist er is.

Nieuwe bron: zet de foto in `foto-bron/`, pas de kaders aan in
`scripts/foto-crops.mjs`, draai het script.

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

## Sloep in lagen

De sectie `components/SloepLagen.tsx` bouwt de sloep bij het scrollen laag
voor laag op: romp, ligdek, kussens, tafel, geluid en koelkast, bimini. De
lagen nu zijn schematische plaatshouders uit `scripts/lagen.mjs`.

Voor echte lagen zijn zes beelden nodig van dezelfde sloep, van bovenaf,
zelfde camera, zelfde kader (staand, 3:4, bijvoorbeeld 1200 x 1600):

1. `01-romp.png`: alleen de kale romp met vloer.
2. `02-ligdek.png`: alleen het ligdek en de vloerdelen.
3. `03-kussens.png`: alleen de kussens.
4. `04-tafel.png`: alleen de tafel.
5. `05-geluid-koelkast.png`: alleen speakers en koelkast.
6. `06-bimini.png`: alleen de bimini.

Transparante achtergrond, elk beeld alleen zijn eigen onderdeel. Twee manieren:

- Uit een 3D-model (Blender): per onderdeel renderen met dezelfde camera.
  Het mooiste resultaat.
- Met AI-beeldgeneratie: eerst één volledig beeld van bovenaf, daarna per
  stap een onderdeel laten weghalen (zie de prompts in de chat). Dat levert
  opeenstapelende beelden zonder transparantie op. Die werken ook, maar dan
  zonder de open ruimte tussen de lagen: zet dan `STAP` in
  `components/SloepLagen.tsx` op 0.

Zet de bestanden in `public/foto/lagen/` en pas de imports in
`content/lagen.ts` aan.

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
- FAQ hulp onderweg: de site belooft één aanspreekpunt en bereikbaarheid
  tijdens het varen. Bevestig telefoonnummer en tijden (`content/vragen.ts`).
- Sectie "Een dag op het water": barbecue en zwemmen staan als onderdeel
  van de dienst. Bevestig of er een barbecue aan boord is of dat je die
  meeneemt (`content/ervaring.ts`).
- Schoonmaak na elke vaart staat op meerdere plekken. Bevestig.
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
