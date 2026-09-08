import { aanmelden } from "@/content/aanmelden";

export type Veld = "naam" | "email" | "aandeel";
export type Fouten = Partial<Record<Veld, string>>;

const geldigeAandelen = aanmelden.opties.map((o) => o.waarde).filter(Boolean);

export function valideerVeld(veld: Veld, waarde: string): string | undefined {
  const w = waarde.trim();
  if (veld === "naam" && w.length < 2) return aanmelden.fouten.naam;
  if (veld === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(w)) return aanmelden.fouten.email;
  if (veld === "aandeel" && !geldigeAandelen.includes(w)) return aanmelden.fouten.aandeel;
  return undefined;
}

export function valideer(invoer: Record<Veld, string>): Fouten {
  const fouten: Fouten = {};
  (Object.keys(invoer) as Veld[]).forEach((veld) => {
    const fout = valideerVeld(veld, invoer[veld]);
    if (fout) fouten[veld] = fout;
  });
  return fouten;
}
