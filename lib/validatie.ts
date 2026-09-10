/**
 * Validatie voor de twee formulieren: reserveren en proefvaren.
 * Dezelfde regels op de client (bij blur) en op de server (bij verzenden).
 */
export type Fouten = Record<string, string | undefined>;

const emailPatroon = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const fouttekst = {
  verplicht: "Vul dit in.",
  email: "Vul een geldig e-mailadres in.",
  keuze: "Maak een keuze.",
  algemeen: "Er ging iets mis. Probeer het nog een keer, of mail ons.",
};

export type Regel = { naam: string; verplicht?: boolean; email?: boolean; keuzes?: readonly string[] };

export function valideerVeld(regel: Regel, waarde: string): string | undefined {
  const w = waarde.trim();
  if (regel.verplicht && !w) return regel.keuzes ? fouttekst.keuze : fouttekst.verplicht;
  if (!w) return undefined;
  if (regel.email && !emailPatroon.test(w)) return fouttekst.email;
  if (regel.keuzes && !regel.keuzes.includes(w)) return fouttekst.keuze;
  return undefined;
}

export function valideer(regels: Regel[], waarden: Record<string, string>): Fouten {
  const fouten: Fouten = {};
  for (const regel of regels) {
    const fout = valideerVeld(regel, waarden[regel.naam] ?? "");
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
