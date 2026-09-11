/** Twee talen: Nederlands op de gewone paden, Engels onder /en. */
export type Taal = "nl" | "en";

/** Nederlands pad naar het Engelse pad. */
export const paden: Record<string, string> = {
  "/": "/en",
  "/duo-of-solo": "/en/duo-or-solo",
  "/zo-werkt-het": "/en/how-it-works",
  "/sloepen": "/en/boats",
  "/vragen": "/en/faq",
  "/over": "/en/about",
  "/proefvaren": "/en/trial-trip",
  "/reserveer": "/en/reserve",
  "/aanbod": "/en/offer",
  "/privacy": "/en/privacy",
};

export function taalUitPad(pad: string): Taal {
  return pad === "/en" || pad.startsWith("/en/") ? "en" : "nl";
}

/** Hetzelfde pad in de andere taal. Onbekend pad: de voorpagina. */
export function wissel(pad: string): { taal: Taal; href: string; label: string } {
  if (taalUitPad(pad) === "nl") return { taal: "en", href: paden[pad] ?? "/en", label: "English" };
  const nl = Object.entries(paden).find(([, en]) => en === pad)?.[0] ?? "/";
  return { taal: "nl", href: nl, label: "Nederlands" };
}

/** Het pad in een taal, vanuit het Nederlandse pad. */
export function pad(taal: Taal, nlPad: string) {
  return taal === "nl" ? nlPad : (paden[nlPad] ?? "/en");
}
