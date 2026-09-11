import type { Taal } from "@/lib/taal";
import * as en from "./en/site";
import * as nl from "./site";

/** Alleen de kleine teksten voor nav, footer en knoppenbalk, voor de client. */
export function menu(taal: Taal): typeof nl {
  return taal === "en" ? en : nl;
}
