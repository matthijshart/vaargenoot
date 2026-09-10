import { checks, modellen, producten, type ModelId } from "./config";
import { bedrag } from "@/lib/utils";

const ids: ModelId[] = ["prinsen", "amstel"];

export const sloepenPagina = {
  kop: "De sloepen.",
  intro: "Twee modellen, allebei elektrisch, allebei stil. Nergens meer dan twaalf personen.",
  modellen: ids.map((id) => {
    const m = modellen[id];
    return {
      id,
      naam: m.naam,
      specificaties: [
        { label: "Lengte", waarde: `${m.lengte} m` },
        { label: "Personen", waarde: `tot ${m.personen}` },
        { label: "Aandrijving", waarde: "Elektrisch" },
        { label: "Aan boord", waarde: m.uitrusting.join(", ") },
        { label: "Werf en type", waarde: m.werf },
        { label: `${producten.duo.naam}`, waarde: `${bedrag(producten.duo.prijs[id])} per maand per bedrijf, excl. btw` },
        { label: `${producten.solo.naam}`, waarde: `${bedrag(producten.solo.prijs[id])} per maand, excl. btw` },
      ],
      beeld: id === "prinsen" ? "prinsen" : null,
      beeldNoot: id === "prinsen" ? "Prinsen driekwart van voren, hoge resolutie" : "Amstel op het water",
    };
  }),
  check: checks.barbecue,
  past: {
    boven: "Welke past bij jou",
    kop: "Prinsen of Amstel.",
    kolommen: ids.map((id) => ({
      naam: modellen[id].naam,
      tekst: modellen[id].voorWie,
      detail:
        id === "prinsen"
          ? "De hoofdsloep. Tien meter, een lange tafel voor twaalf, bimini tegen zon en regen, barbecue aan boord."
          : "Acht meter, tot tien personen, dezelfde uitrusting zonder bimini en barbecue. De laagste instap.",
    })),
  },
};
