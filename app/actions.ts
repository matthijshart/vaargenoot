"use server";

import { aanmelden } from "@/content/aanmelden";
import { valideer, type Fouten } from "@/lib/validatie";

export type AanmeldStatus = {
  status: "leeg" | "fout" | "klaar";
  fouten?: Fouten;
  melding?: string;
};

/**
 * Verwerkt een proefvaartaanvraag.
 * Voorlopig alleen naar de console. Later naar Resend of Airtable.
 */
export async function vraagProefvaartAan(
  _vorige: AanmeldStatus,
  formData: FormData,
): Promise<AanmeldStatus> {
  const invoer = {
    naam: String(formData.get("naam") ?? ""),
    email: String(formData.get("email") ?? ""),
    aandeel: String(formData.get("aandeel") ?? ""),
  };

  const fouten = valideer(invoer);
  if (Object.keys(fouten).length > 0) {
    return { status: "fout", fouten };
  }

  try {
    // TODO: vervang door Resend (mail) of Airtable (lijst).
    console.log("[proefvaart]", {
      ...invoer,
      naam: invoer.naam.trim(),
      email: invoer.email.trim().toLowerCase(),
      tijd: new Date().toISOString(),
    });
    return { status: "klaar" };
  } catch {
    return { status: "fout", melding: aanmelden.fouten.algemeen };
  }
}
