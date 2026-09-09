import { foto } from "./foto";

/**
 * Waar je van geniet. Meer dan een sloep: een dag op het water zonder
 * het werk en het gedoe van een eigen boot.
 */
export const ervaring = {
  label: "Een dag op het water",
  kop: "Alles van een eigen sloep, zonder het gedoe.",
  intro:
    "Een boot vraagt meer werk dan je denkt. Ligplaats, laden, onderhoud, schoonmaak, winterstalling. Bij Vaargenoot doe je alleen het leuke deel.",
  punten: [
    { kop: "Met de hele club", tekst: "Vrienden, familie, collega's. Iedereen past aan boord." },
    { kop: "Barbecue met je gezin", tekst: "Een lange avond op het water, het eten komt van boord." },
    { kop: "Ligdek en ijskast", tekst: "Liggen in de zon, koud drinken binnen handbereik." },
    { kop: "Een dagje zwemmen", tekst: "Aanmeren op een stille plek en het water in." },
    { kop: "Schipper als je zelf drinkt", tekst: "Boek een schipper en hef het glas." },
    { kop: "Ook in de winter", tekst: "Het Light Festival, soep en thee, fleecedekens aan boord." },
    { kop: "Zonder een boot te kopen", tekst: "Een vast bedrag per maand. Genieten zonder bezit." },
  ],
  beelden: [foto.detailKoelkast, foto.detailTafel],
};
