import { modellen, producten, site, type ModelId } from "./config";
import type { FotoId } from "./foto";
import { bedrag } from "@/lib/utils";

const ids: ModelId[] = ["prinsen", "amstel"];

export const sloepenPagina = {
  meta: {
    title: "De sloepen",
    description:
      "Prinsen: 10 m, lange tafel, koelkast, Green Egg, bimini. Amstel: 8 m, tot 25 aan boord. Allebei elektrisch en stil, net zo fijn met vier. Altijd schoon klaar in de grachtengordel.",
  },
  kop: "De sloepen.",
  intro: "Twee modellen, allebei elektrisch, allebei stil, gebouwd voor de Amsterdamse grachten. Voor een lunch met vier en een borrel met veertig.",
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
        { label: `${producten.duo.naam}`, waarde: `${bedrag(producten.duo.prijs[id])} per maand per bedrijf, excl. btw` },
        { label: `${producten.solo.naam}`, waarde: `${bedrag(producten.solo.prijs[id])} per maand, excl. btw` },
      ],
      beeld: (id === "prinsen" ? "prinsen" : "bovenaf") as FotoId,
      beeldNoot: `[INVULLEN: beeld, ${id === "prinsen" ? "Prinsen driekwart van voren, hoge resolutie" : "Amstel, hoge resolutie"}]`,
    };
  }),
  ligplaats: site.ligplaats,
  past: {
    boven: "Welke past bij jou",
    kop: "Prinsen of Amstel.",
    kolommen: ids.map((id) => ({
      naam: modellen[id].naam,
      tekst: modellen[id].voorWie,
      detail:
        id === "prinsen"
          ? "De hoofdsloep. Tien meter, een lange tafel, bimini tegen zon en regen, Green Egg aan boord. Tot veertig aan boord, en net zo fijn met vier."
          : "Acht meter, tot vijfentwintig aan boord, dezelfde uitrusting zonder bimini en Green Egg. De laagste instap, voor kleinere groepen.",
    })),
  },
};
