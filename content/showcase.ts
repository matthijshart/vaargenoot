import { foto } from "./foto";

/**
 * Scrollgestuurde presentatie van de sloep.
 * De punten verschijnen na elkaar terwijl de sloep naar voren draait.
 */
export const showcase = {
  label: "De sloep",
  kop: "Bekijk de Amstel van dichtbij.",
  beeld: foto.sloepAmstel,
  punten: [
    { kop: "7,5 meter", tekst: "Ruimte voor 10 personen aan tafel." },
    { kop: "Elektrisch", tekst: "Stil en uitstootvrij, ook na 2030." },
    { kop: "Alles aan boord", tekst: "Koelkast, tafel, ligdek, kussens, bimini, geluid." },
    { kop: "Opgeladen klaar", tekst: "Vaste ligplaats met laadpunt." },
  ],
};
