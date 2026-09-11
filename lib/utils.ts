import type { Taal } from "./taal";

export function cn(...delen: Array<string | false | null | undefined>) {
  return delen.filter(Boolean).join(" ");
}

const locale: Record<Taal, string> = { nl: "nl-NL", en: "en-GB" };

/** "€ 1.295" (Nederlands) of "€ 1,295" (Engels), met spatie, zonder decimalen. */
export function bedrag(n: number, taal: Taal = "nl") {
  return `€ ${new Intl.NumberFormat(locale[taal], { maximumFractionDigits: 0 }).format(n)}`;
}

/** Afgerond bedrag, voor bedragen per vaart. */
export function bedragRond(n: number, taal: Taal = "nl") {
  return bedrag(Math.round(n), taal);
}

/** Percentage verschil, afgerond: hoeveel goedkoper b is dan a. */
export function procentMinder(a: number, b: number) {
  return Math.round((1 - b / a) * 100);
}
