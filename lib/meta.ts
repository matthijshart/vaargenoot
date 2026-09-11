import type { Metadata } from "next";
import { paden, type Taal } from "./taal";

/** Metadata van een pagina, met canonical en hreflang voor beide talen. */
export function paginaMeta(
  taal: Taal,
  nlPad: string,
  m: { title: Metadata["title"]; description: string; robots?: Metadata["robots"] },
): Metadata {
  const en = paden[nlPad] ?? "/en";
  return {
    title: m.title,
    description: m.description,
    robots: m.robots,
    alternates: {
      canonical: taal === "nl" ? nlPad : en,
      languages: { nl: nlPad, en, "x-default": nlPad },
    },
  };
}
