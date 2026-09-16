import type { sloepenPagina as sloepenNl } from "../sloepen";
import type { FotoId } from "../foto";
import { bedrag } from "@/lib/utils";
import { modellen, producten, site, type ModelId } from "./config";

const en = (n: number) => bedrag(n, "en");
const ids: ModelId[] = ["prinsen", "amstel"];

export const sloepenPagina: typeof sloepenNl = {
  meta: {
    title: "The boats",
    description:
      "Prinsen: 10 m, long table, fridge, Green Egg. Amstel: 8 m, a bimini against sun and rain, up to 25 on board. Both electric and quiet, just as nice with four. Always charged and ready in the canal ring.",
  },
  kop: "The boats.",
  intro: "Two models, both electric, both quiet, built for the Amsterdam canals. For a lunch for four and drinks for forty.",
  modellen: ids.map((id) => {
    const m = modellen[id];
    return {
      id,
      naam: m.naam,
      specificaties: [
        { label: "Length", waarde: `${m.lengte} m` },
        { label: "People", waarde: `up to ${m.personen}` },
        { label: "Propulsion", waarde: "Electric" },
        { label: "On board", waarde: m.uitrusting.join(", ") },
        { label: `${producten.duo.naam}`, waarde: `${en(producten.duo.prijs[id])} a month per company, excl. VAT` },
        { label: `${producten.solo.naam}`, waarde: `${en(producten.solo.prijs[id])} a month, excl. VAT` },
      ],
      beeld: (id === "prinsen" ? "bovenaf" : "varend") as FotoId,
    };
  }),
  ligplaats: site.ligplaats,
  past: {
    boven: "Which one suits you",
    kop: "Prinsen or Amstel.",
    kolommen: ids.map((id) => ({
      naam: modellen[id].naam,
      tekst: modellen[id].voorWie,
      detail:
        id === "prinsen"
          ? "The main boat. Ten metres, a long table and a Green Egg on board. Up to forty people, and just as nice with four."
          : "Eight metres, up to twenty-five on board, with a bimini against sun and rain. The same equipment, without the Green Egg. The most affordable option, for smaller groups.",
    })),
  },
};
