import type { Taal } from "./taal";

/**
 * Validatie voor de twee formulieren: reserveren en proefvaren.
 * Dezelfde regels op de client (bij blur) en op de server (bij verzenden),
 * met foutteksten in de taal van de pagina.
 */
export type Fouten = Record<string, string | undefined>;

const emailPatroon = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const fouttekst: Record<Taal, { verplicht: string; email: string; keuze: string; algemeen: string }> = {
  nl: {
    verplicht: "Vul dit in.",
    email: "Vul een geldig e-mailadres in.",
    keuze: "Maak een keuze.",
    algemeen: "Er ging iets mis. Probeer het nog een keer, of mail ons.",
  },
  en: {
    verplicht: "Please fill this in.",
    email: "Please enter a valid email address.",
    keuze: "Please make a choice.",
    algemeen: "Something went wrong. Please try again, or email us.",
  },
};

export type Regel = { naam: string; verplicht?: boolean; email?: boolean; keuzes?: readonly string[] };

export function valideerVeld(regel: Regel, waarde: string, taal: Taal = "nl"): string | undefined {
  const t = fouttekst[taal];
  const w = waarde.trim();
  if (regel.verplicht && !w) return regel.keuzes ? t.keuze : t.verplicht;
  if (!w) return undefined;
  if (regel.email && !emailPatroon.test(w)) return t.email;
  if (regel.keuzes && !regel.keuzes.includes(w)) return t.keuze;
  return undefined;
}

export function valideer(regels: Regel[], waarden: Record<string, string>, taal: Taal = "nl"): Fouten {
  const fouten: Fouten = {};
  for (const regel of regels) {
    const fout = valideerVeld(regel, waarden[regel.naam] ?? "", taal);
    if (fout) fouten[regel.naam] = fout;
  }
  return fouten;
}

export const reserveerRegels: Regel[] = [
  { naam: "bedrijf", verplicht: true },
  { naam: "contactpersoon", verplicht: true },
  { naam: "email", verplicht: true, email: true },
  { naam: "telefoon", verplicht: true },
  { naam: "model", verplicht: true, keuzes: ["prinsen", "amstel"] },
  { naam: "product", verplicht: true, keuzes: ["duo", "solo"] },
  { naam: "duoPartner" },
  { naam: "teamgrootte" },
];

export const proefvaarRegels: Regel[] = [
  { naam: "bedrijf", verplicht: true },
  { naam: "naam", verplicht: true },
  { naam: "email", verplicht: true, email: true },
  { naam: "telefoon", verplicht: true },
  { naam: "teamgrootte" },
  { naam: "voorkeursdag" },
];
