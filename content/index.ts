import type { Taal } from "@/lib/taal";
import * as en from "./en";
import * as nl from "./nl";

export type Inhoud = typeof nl;

/** Alle teksten van de site in één taal. Componenten halen hier hun tekst. */
export function inhoud(taal: Taal): Inhoud {
  return taal === "en" ? en : nl;
}
