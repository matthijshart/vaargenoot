# TODO

## Foto's

Bronfoto's in `foto-bron/`: de sloep van bovenaf (1194 x 1212), het
zijaanzicht met bimini (768 x 576), en twee grachtfoto's (736 breed).
Alle beelden op de site zijn uitsnedes daaruit, gemaakt door
`scripts/foto-crops.mjs`. De hero gebruikt er twee: `hero-breed`
(1194 x 500) vanaf tabletbreedte en `hero-staand` (720 x 900) op de
telefoon. Dat werkt, maar let op:

- De resolutie is laag voor de hero op grote schermen: de band loopt van
  rand tot rand en de bron is 1194 pixels breed. Een bron van minimaal
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

## Pagina-indeling

De voorpagina is kort: hero (foto van rand tot rand, dan de kop "Word
deel-eigenaar van een sloep.", één alinea, de knop en vier feiten), een dag
op het water, de sloepen, een prijsregel, drie verwijzingen (bedrijven, zo
werkt het, vragen) en aanmelden. De details staan op /prijzen, /bedrijven,
/zo-werkt-het en /vragen, elk met het formulier onderaan.

Niet meer op een pagina, bewaard in de code:
Inzicht (kern staat in Een dag op het water, de vignetdata in de FAQ),
SloepLagen (komt terug zodra er echte lagen zijn), Schipper (staat op drie
andere plekken) en Inbegrepen (één regel onder de prijskaarten). Terugzetten
is één import en één regel in `app/page.tsx`.

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

## Sloepen

Beide sloepen 10 meter en tot 40 personen. Amstel zonder bimini, Prinsen
met bimini. Aan boord van beide: koelkast, Green Egg, tafel, ligdek,
kussens, zwemtrap, geluid. Let op: boven de twaalf opvarenden gelden in
Nederland andere regels dan voor pleziervaart, en de FAQ zegt dat een
vaarbewijs onder 15 meter en 20 km/u niet nodig is. Check of dat zo blijft.

## Inhoud die nog bevestigd moet worden

Er staat nergens meer "volgt" op de site. Wat niet vaststaat, is weggelaten
of bewust algemeen gehouden. Niets is verzonnen.

- Vaartijd op een lading en ligplaats, per sloep. Staan niet op de site tot
  ze bekend zijn; toevoegen in `content/sloepen.ts`.
- Varen: de site zegt "Varen wanneer je wilt, ook op de dag zelf" (hero,
  prijskaarten, verwijzing op de voorpagina). Dat volgt uit de opzet in
  `docs/reserveren.md` (vrije dagdelen binnen 48 uur kosten geen vaarpunt).
  De regels zelf (vaarpunten, weekenden) staan alleen op /zo-werkt-het en in
  de FAQ, bewust niet in de hero. Bevestig dat de belofte zo mag staan.
- Vaker varen dan het minimum: is dat gratis of tegen een tarief? Nu staat
  er "Minstens 8 vaarten per maand in het seizoen" zonder bedrag voor meer.
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

## Prijzen

Drie opties: een kwart (695), een half (1.195) en de hele sloep. Voor de
hele sloep is geen prijs opgegeven; er staat "Op aanvraag". Geef een
maandbedrag door en ik zet het erin (`content/aandeel.ts`). Het achtste
aandeel is weggehaald.

Elk met maandprijs, "varen wanneer je wilt", een minimum aantal vaarten
per maand in het seizoen (8 bij een kwart, 16 bij een half) en alles
inbegrepen. Het rekenblok met
schuifregelaar is bewust weggehaald: simpel en helder. Onder de kaarten
staat één vergelijkingszin: een eigen sloep kost rond de 80.000 euro in
aanschaf en daarna circa 16.000 euro per jaar (aannames in
`content/kosten.ts`: 25% restwaarde na tien jaar, 6.000 liggeld, 4.000
winterstalling; onderhoud, verzekering, vignet en stroom niet meegerekend).
De zin in `content/aandeel.ts` rekent zichzelf uit met die aannames. Geef
bedragen voor onderhoud en verzekering door, dan tellen die mee en wordt
het jaarbedrag realistischer.

Niet meer op de site, wel nog te bepalen: reserveren vooruit, weekenden,
schipper bijboeken (prijs of voorwaarden). Ook: welke zeven maanden het
vaarseizoen zijn.

Winter: de site zegt dat je buiten het seizoen ook vaart (Light Festival,
winterdagen, fleecedekens). Tegelijk staat "winterklaar" in de feitenbalk
en bij de prijzen als inbegrepen. Bevestig hoe die twee samengaan.

## Deel-eigenaar

De site zegt nu overal dat je deel-eigenaar wordt, met maximaal vier
sloepmaten per sloep (volgt uit het kleinste aandeel, een kwart).
"Deel-eigenaar" heeft juridische betekenis. Zorg dat de overeenkomst dat
waarmaakt, of pas het woord aan als de structuur een gebruiksrecht wordt.

Let op bij "de hele sloep" en operational lease: lease is juridisch huur
(art. 7:201 BW). Bedrijfsmatig verhuren van pleziervaartuigen is in
Amsterdam vergunningplichtig (Verordening op het binnenwater, Nota Varen),
en bedrijfsmatig vervoer van meer dan twaalf passagiers valt onder de
Binnenvaartwet (passagiersschip, certificaat, bemanningseisen). Controleer
de actuele definities en vraag een standpunt aan de gemeente of Waternet
voordat "lease" op de site komt. Zie de chat voor de afweging tussen
mede-eigendom, een entiteit per sloep en huur.

## Verdeelsysteem

De opzet staat in `docs/reserveren.md`, het voorbeeld op de site in
`components/Verdelen.tsx` met de stappen in `content/verdelen.ts`. De
namen (Eva, Tim, Bo) en de dagdelen zijn illustratief. Bevestig de
getallen: 1, 2 en 3 vaarpunten, weekendgrens 2 en 4, 48 uur, overloop 2.

## Bedrijven

Eigen pagina /bedrijven: wat het oplevert (zes punten), het aanbod (aandeel,
reserveren, inbegrepen, schipper), de drie aandelen met prijs en de knop.
In het formulier de keuze "Een aandeel voor mijn bedrijf". Nog te
bevestigen:
- Geldt dezelfde prijstabel voor bedrijven? Nu staan dezelfde bedragen er,
  indicatief.
- Is er een zakelijk aanbod met schipper standaard erbij? Nu: bij te boeken.
- Fiscaal (btw, kosten voor personeel of representatie): staat bewust
  nergens op de site. Pas opnemen na advies van een accountant.
- Mogen meerdere collega's reserveren in de app, of één beheerder per
  bedrijf? Staat nu niet op de site.

## Formulier en livegang

De Server Action in `app/actions.ts` logt elke aanmelding en mailt via
Resend zodra `RESEND_API_KEY` en `AANMELD_NAAR` in Vercel staan (Settings,
Environment Variables). Zonder eigen domein mailt Resend alleen naar het
adres van je eigen Resend-account, vanaf onboarding@resend.dev. Met een
geverifieerd domein zet je `AANMELD_VAN`. Zie `.env.example`.

Nog te bevestigen voor de livegang:
- "Aanmelden is vrijblijvend" onder de knop.
- "Je hoort persoonlijk van ons, per e-mail": binnen welke termijn?
- E-mailadres en KvK-nummer voor de footer (`content/site.ts`, velden
  `email` en `kvk`; de footer toont ze zodra ze ingevuld zijn).
- Zes nieuwe sloepen in twee modellen (Amstel en Prinsen): klopt dat?
- "Reserveer in de app": is er een app bij de start, of wordt het een
  ander kanaal?
- Wie erachter zit: nergens staat wie Sloepmaten is (mensen, organisatie,
  ervaring). Voor het vertrouwen hoort dat op de site, één alinea is
  genoeg. Tekst aanleveren; past onder de feitenbalk of in de footer.
- "Aanmelden is vrijblijvend" staat nu ook onder de knop in de hero.

## Techniek

- Lighthouse mobiel in de bouwomgeving: Performance 90 tot 95, Accessibility
  100, Best practices 100, SEO 100, CLS 0, LCP 2,1 s. De omgeving heeft een
  trage gedeelde CPU met viervoudige throttling. Meet opnieuw op Vercel; daar
  hoort het stabiel boven 95 te komen.
- De hero-foto heeft bewust geen fade bij laden (wel de lichte schaal): met
  fade telde Chrome de LCP pas na de animatie, 1,5 s later.
- Lighthouse rekent met "simulate" anders dan met "devtools"; vergelijk
  alleen metingen met dezelfde methode. De hero-foto is de LCP; de
  preload heeft een media query per uitsnede, zodat de telefoon het
  brede beeld niet laadt.
