import { site } from "./config";

export { site };

export const cta = {
  proefvaren: { label: "Kom proefvaren", href: "/proefvaren" },
  reserveer: { label: "Reserveer je sloep", href: "/reserveer" },
};

export const nav: { label: string; href: string }[] = [
  { label: "Duo of Solo", href: "/duo-of-solo" },
  { label: "Zo werkt het", href: "/zo-werkt-het" },
  { label: "De sloepen", href: "/sloepen" },
  { label: "Vragen", href: "/vragen" },
  { label: "Over", href: "/over" },
];

export const footer = {
  links: [
    ...nav,
    { label: "Proefvaren", href: "/proefvaren" },
    { label: "Reserveer je sloep", href: "/reserveer" },
    { label: "Aanbod op één A4", href: "/aanbod" },
    { label: "Privacy", href: "/privacy" },
  ],
  regel: "Prijzen indicatief en exclusief btw. Deeleigendom voor bedrijven, geen particulieren.",
};

/** Kleine interfaceteksten. */
export const ui = {
  optioneel: "optioneel",
  hoofdmenu: "Hoofdmenu",
  menuOpen: "Menu openen",
  menuDicht: "Menu sluiten",
  fotos: "Foto's",
  foto: (i: number, n: number) => `Foto ${i} van ${n}`,
  privacy: "Privacy",
  taal: "Taal",
};

export const meta = {
  titel: `${site.naam}. Een sloep voor je bedrijf, in deeleigendom.`,
  sjabloon: `%s. ${site.naam}`,
  omschrijving: site.omschrijving,
  locale: "nl_NL",
};

export const nietGevonden = {
  kop: "Deze pagina ligt niet aan de steiger.",
  intro: "Het adres klopt niet meer of heeft nooit bestaan. Begin opnieuw op de voorpagina, of kom meteen proefvaren.",
  knop: "Naar de voorpagina",
  titel: "Pagina niet gevonden",
};
