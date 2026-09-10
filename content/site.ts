import { site } from "./config";

export { site };

export const cta = {
  proefvaren: { label: "Kom proefvaren", href: "/proefvaren" },
  reserveer: { label: "Reserveer je sloep", href: "/reserveer" },
};

export const nav = [
  { label: "Duo of Solo", href: "/duo-of-solo" },
  { label: "Zo werkt het", href: "/zo-werkt-het" },
  { label: "De sloepen", href: "/sloepen" },
  { label: "Vragen", href: "/vragen" },
  { label: "Over", href: "/over" },
] as const;

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
