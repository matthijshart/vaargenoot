import { foto } from "./foto";

/**
 * Waar je van geniet. Alles van een eigen sloep, zonder het werk.
 */
export const ervaring = {
  label: "Een dag op het water",
  kop: "Alles van een eigen sloep, zonder het werk.",
  intro: "Een eigen sloep ligt het grootste deel van het jaar stil en kost door. Bij Sloepmaten blijft alleen het varen over.",
  punten: [
    { kop: "Met de hele club", tekst: "Vrienden, familie, collega's. Iedereen past aan boord." },
    { kop: "Barbecue met je gezin", tekst: "Green Egg aan boord, een lange avond op het water." },
    { kop: "Ligdek en koelkast", tekst: "Liggen in de zon, koud drinken binnen handbereik." },
    { kop: "Een dagje zwemmen", tekst: "Aanmeren op een stille plek en het water in." },
    { kop: "Schipper aan boord", tekst: "Boek er een bij en zit zelf aan tafel." },
    { kop: "Ook in de winter", tekst: "Het Light Festival, soep en thee, fleecedekens aan boord." },
  ],
  beelden: [foto.greenEgg, foto.detailKoelkast],
};
