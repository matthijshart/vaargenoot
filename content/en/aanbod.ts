import type { aanbod as aanbodNl } from "../aanbod";
import { bedrag } from "@/lib/utils";
import { inbegrepen, looptijd, modellen, producten, reservering, samen, site, type ModelId } from "./config";

const en = (n: number) => bedrag(n, "en");
const ids: ModelId[] = ["prinsen", "amstel"];

/** Print-friendly summary on one A4. */
export const aanbod: typeof aanbodNl = {
  meta: {
    title: "Offer on one A4",
    description: "Sloepmaten in brief: Duo and Solo with prices, everything included, how you share, contact.",
  },
  noot: "This page fits on one A4.",
  inbegrepenKop: "Everything included",
  contactKop: "Contact",
  kop: "A boat for your company. In co-ownership.",
  sub: "On the Amsterdam canals. On your own, or with one other company. Everything taken care of, one fixed amount a month, twelve months.",
  producten: (["duo", "solo"] as const).map((p) => ({
    naam: producten[p].naam,
    kort: producten[p].kort,
    prijzen: ids.map((m) => `${modellen[m].naam} ${modellen[m].lengte} m: ${en(producten[p].prijs[m])} a month${p === "duo" ? " per company" : ""}`),
    punten: [producten[p].aanBoord, producten[p].beschikbaarheid, producten[p].huisstijl, producten[p].voorkeursrecht],
  })),
  prijsnoot: `Excluding VAT, indicative. Twelve months from ${looptijd.start}. ${reservering.founding}`,
  inbegrepen: inbegrepen.join(", ") + ". " + site.ligplaats + " A skipper and catering you arrange on top.",
  samen: { kop: `${producten.duo.naam}: ${samen.naam.toLowerCase()}`, regels: samen.regels },
  verder: {
    kop: "What happens next",
    regels: [
      `Reserve on the site or on the spot. Agreement within ${reservering.overeenkomstBinnen}, in plain language.`,
      `You sign, we confirm your boat. Delivery ${reservering.oplevering}, in your branding.`,
      looptijd.uitstappen,
      reservering.duoPartnerActie,
    ],
  },
  contact: [site.naam, site.plaats, site.email, site.telefoon, site.domein.replace("https://", "")],
  knop: "Print or save as PDF",
};
