"use server";

import { aanmelden } from "@/content/aanmelden";
import { site } from "@/content/site";
import { valideer, type Fouten, type Invoer } from "@/lib/validatie";

export type AanmeldStatus = {
  status: "leeg" | "fout" | "klaar";
  fouten?: Fouten;
  melding?: string;
};

function tekst(formData: FormData, naam: string, max = 200) {
  return String(formData.get(naam) ?? "")
    .replace(/[\r\n\t]+/g, " ")
    .trim()
    .slice(0, max);
}

function label(lijst: { waarde: string; label: string }[], waarde: string) {
  return lijst.find((o) => o.waarde === waarde)?.label ?? waarde;
}

/**
 * Verwerkt een aanmelding.
 * Met RESEND_API_KEY en AANMELD_NAAR in de omgeving gaat er een e-mail uit
 * via Resend. Zonder die twee wordt de aanmelding alleen gelogd.
 */
export async function meldAan(_vorige: AanmeldStatus, formData: FormData): Promise<AanmeldStatus> {
  const invoer: Invoer = {
    naam: tekst(formData, "naam"),
    email: tekst(formData, "email").toLowerCase(),
    doel: tekst(formData, "doel"),
    aandeel: tekst(formData, "aandeel"),
    bedrijf: tekst(formData, "bedrijf"),
  };

  const fouten = valideer(invoer);
  if (Object.keys(fouten).length > 0) {
    return { status: "fout", fouten };
  }

  const regels = [
    `Naam: ${invoer.naam}`,
    `E-mail: ${invoer.email}`,
    `Wil: ${label(aanmelden.doelen, invoer.doel)}`,
    `Denkt aan: ${invoer.aandeel ? label(aanmelden.opties, invoer.aandeel) : "geen keuze"}`,
    invoer.bedrijf ? `Bedrijf: ${invoer.bedrijf}` : null,
    `Tijd: ${new Date().toISOString()}`,
  ].filter(Boolean);

  console.log("[aanmelding]", regels.join(" | "));

  const sleutel = process.env.RESEND_API_KEY;
  const naar = process.env.AANMELD_NAAR;
  if (!sleutel || !naar) return { status: "klaar" };

  try {
    const antwoord = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${sleutel}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.AANMELD_VAN ?? `${site.naam} <onboarding@resend.dev>`,
        to: [naar],
        reply_to: invoer.email,
        subject: `Aanmelding ${site.seizoen}: ${invoer.naam}`,
        text: regels.join("\n"),
      }),
    });
    if (!antwoord.ok) {
      console.error("[aanmelding] mail mislukt", antwoord.status, await antwoord.text());
      return { status: "fout", melding: aanmelden.fouten.algemeen };
    }
    return { status: "klaar" };
  } catch (fout) {
    console.error("[aanmelding] mail mislukt", fout);
    return { status: "fout", melding: aanmelden.fouten.algemeen };
  }
}
