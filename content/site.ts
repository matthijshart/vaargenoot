export const site = {
  naam: "Vaargenoot",
  plaats: "Amsterdam",
  titel: "Vaargenoot. Jouw sloep. Onze zorg.",
  omschrijving:
    "Word deeleigenaar van een elektrische sloep in de Amsterdamse grachten. Maximaal vier vaargenoten per sloep, alles inbegrepen. Zes nieuwe sloepen in vaarseizoen 2027.",
  seizoen: "vaarseizoen 2027",
  /** Eén werkwoord op elke knop. */
  cta: "Aanmelden voor 2027",
  disclaimer: "Prijzen en specificaties zijn indicatief.",
  /** Contactgegevens. Leeg laten tot ze vaststaan; de footer toont ze alleen als ze ingevuld zijn. */
  email: "",
  kvk: "",
};

export const nav = [
  { label: "De sloepen", href: "#sloepen-specificaties" },
  { label: "Bedrijven", href: "#bedrijven" },
  { label: "Jouw aandeel", href: "#aandeel" },
  { label: "Zo werkt het", href: "#zo-werkt-het" },
  { label: "Vragen", href: "#vragen" },
] as const;
