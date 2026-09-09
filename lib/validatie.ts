import { aanmelden } from "@/content/aanmelden";

export type Veld = "naam" | "email" | "doel" | "aandeel" | "bedrijf";
export type Fouten = Partial<Record<Veld, string>>;
export type Invoer = Record<Veld, string>;

const geldigeDoelen = aanmelden.doelen.map((d) => d.waarde);
const geldigeAandelen = aanmelden.opties.map((o) => o.waarde).filter(Boolean);

/** Maximale lengtes, ook op de server afgedwongen. */
export const MAX = { naam: 80, email: 120, bedrijf: 120 } as const;

export function valideerVeld(veld: Veld, waarde: string, invoer?: Partial<Invoer>): string | undefined {
  const w = waarde.trim();
  switch (veld) {
    case "naam":
      if (w.length < 2 || w.length > MAX.naam) return aanmelden.fouten.naam;
      return undefined;
    case "email":
      if (w.length > MAX.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(w)) return aanmelden.fouten.email;
      return undefined;
    case "doel":
      if (!geldigeDoelen.includes(w)) return aanmelden.fouten.doel;
      return undefined;
    case "aandeel":
      // Optioneel: leeg mag, anders een waarde uit de lijst.
      if (w && !geldigeAandelen.includes(w)) return aanmelden.fouten.aandeel;
      return undefined;
    case "bedrijf":
      // Alleen verplicht bij een aandeel voor een bedrijf.
      if (invoer?.aandeel === "bedrijf" && w.length < 2) return aanmelden.fouten.bedrijf;
      if (w.length > MAX.bedrijf) return aanmelden.fouten.bedrijf;
      return undefined;
  }
}

export function valideer(invoer: Invoer): Fouten {
  const fouten: Fouten = {};
  (Object.keys(invoer) as Veld[]).forEach((veld) => {
    const fout = valideerVeld(veld, invoer[veld], invoer);
    if (fout) fouten[veld] = fout;
  });
  return fouten;
}
