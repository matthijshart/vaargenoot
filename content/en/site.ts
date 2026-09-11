import type { cta as ctaNl, footer as footerNl, meta as metaNl, nav as navNl, nietGevonden as nietGevondenNl, ui as uiNl } from "../site";
import { site } from "./config";

export { site };

export const cta: typeof ctaNl = {
  proefvaren: { label: "Come for a trial trip", href: "/en/trial-trip" },
  reserveer: { label: "Reserve your boat", href: "/en/reserve" },
};

export const nav: typeof navNl = [
  { label: "Duo or Solo", href: "/en/duo-or-solo" },
  { label: "How it works", href: "/en/how-it-works" },
  { label: "The boats", href: "/en/boats" },
  { label: "FAQ", href: "/en/faq" },
  { label: "About", href: "/en/about" },
];

export const footer: typeof footerNl = {
  links: [
    ...nav,
    { label: "Trial trip", href: "/en/trial-trip" },
    { label: "Reserve your boat", href: "/en/reserve" },
    { label: "Offer on one A4", href: "/en/offer" },
    { label: "Privacy", href: "/en/privacy" },
  ],
  regel: "Prices indicative and excluding VAT. Co-ownership for companies, not for private individuals.",
};

export const ui: typeof uiNl = {
  optioneel: "optional",
  hoofdmenu: "Main menu",
  menuOpen: "Open menu",
  menuDicht: "Close menu",
  fotos: "Photos",
  foto: (i: number, n: number) => `Photo ${i} of ${n}`,
  privacy: "Privacy",
  taal: "Language",
};

export const meta: typeof metaNl = {
  titel: `${site.naam}. A boat for your company, in co-ownership.`,
  sjabloon: `%s. ${site.naam}`,
  omschrijving: site.omschrijving,
  locale: "en_GB",
};

export const nietGevonden: typeof nietGevondenNl = {
  kop: "This page isn't moored here.",
  intro: "The address is out of date or never existed. Start again on the home page, or come for a trial trip right away.",
  knop: "To the home page",
  titel: "Page not found",
};
