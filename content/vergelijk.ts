import { aandelen } from "./aandeel";
import { eigenSloepPerJaar, kosten } from "./kosten";

const notatie = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });
/** Afgerond op 50 voor berekende bedragen. */
const getal = (n: number) => notatie.format(Math.round(n / 50) * 50);
/** Exact, voor de eigen prijs. */
const exact = (n: number) => notatie.format(n);

/**
 * Kopen, leasen of deel-eigenaar. Drie kolommen, eerlijk: lease en een
 * eigen sloep zijn altijd beschikbaar, Sloepmaten is een deel van de
 * prijs. De leaseprijs is een marktindicatie (zie TODO.md, Positionering).
 */
export const vergelijk = {
  label: "De vergelijking",
  kop: "Kopen, leasen of deel-eigenaar.",
  intro: "Een sloep vaart een paar dagen per maand. Waarom zou je voor alle andere dagen betalen?",
  kolommen: ["Eigen sloep", "Lease van een hele sloep", "Sloepmaten"] as const,
  /** Index van de kolom die eruit springt. */
  wij: 2,
  rijen: [
    {
      label: "Vooraf",
      waarden: [`Rond de ${getal(kosten.aanschaf)} euro`, "Geen", "Geen"],
    },
    {
      label: "Per maand",
      waarden: [
        `Circa ${getal(eigenSloepPerJaar() / 12)} euro aan vaste kosten, indicatief`,
        "Al snel ruim 2.000 euro, exclusief btw",
        `Vanaf ${exact(aandelen[0].prijs ?? 0)} euro, indicatief`,
      ],
    },
    {
      label: "Je betaalt voor",
      waarden: ["De hele sloep, ook als hij stilligt", "De hele sloep, ook als hij stilligt", "Je deel"],
    },
    {
      label: "Eigendom",
      waarden: ["Van jou", "Van de leasemaatschappij", "Deel van jou"],
    },
    {
      label: "Beheer",
      waarden: ["Zelf: ligplaats, onderhoud, winterstalling, verzekering", "Geregeld", "Geregeld"],
    },
    {
      label: "Varen",
      waarden: ["Wanneer je wilt", "Wanneer je wilt", "Je vaste deel via vaarpunten, plus elk vrij dagdeel"],
    },
    {
      label: "Schipper",
      waarden: ["Zelf regelen", "Via de aanbieder", "Bij te boeken"],
    },
  ],
  onder: "Bedragen indicatief. De lease-indicatie is wat aanbieders in Amsterdam vragen voor een vergelijkbare elektrische sloep.",
};
