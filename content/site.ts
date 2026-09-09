export const site = {
  naam: "Sloepmaten",
  plaats: "Amsterdam",
  titel: "Sloepmaten. Jouw sloep. Onze zorg.",
  omschrijving:
    "Word deel-eigenaar van een hoogwaardige, grote elektrische sloep in de Amsterdamse grachten, van alle gemakken voorzien. Geen gedoe, gewoon varen. Zes nieuwe sloepen in vaarseizoen 2027.",
  seizoen: "vaarseizoen 2027",
  /** Eén werkwoord op elke knop. */
  cta: "Aanmelden voor 2027",
  /** Korte variant voor de nav op mobiel. */
  ctaKort: "Aanmelden",
  disclaimer: "Prijzen en specificaties zijn indicatief.",
  /** Contactgegevens. Leeg laten tot ze vaststaan; de footer toont ze alleen als ze ingevuld zijn. */
  email: "",
  kvk: "",
};

export const nav = [
  { label: "De sloepen", href: "/#sloepen-specificaties" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Bedrijven", href: "/bedrijven" },
  { label: "Zo werkt het", href: "/zo-werkt-het" },
  { label: "Vragen", href: "/vragen" },
] as const;
