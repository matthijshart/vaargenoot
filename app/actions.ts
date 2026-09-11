"use server";

import { modellen, producten, site } from "@/content/config";
import type { Taal } from "@/lib/taal";
import { fouttekst, proefvaarRegels, reserveerRegels, valideer, type Fouten, type Regel } from "@/lib/validatie";

export type FormulierStatus = {
  status: "leeg" | "fout" | "klaar";
  fouten?: Fouten;
  melding?: string;
};

function lees(formData: FormData, regels: Regel[]) {
  const waarden: Record<string, string> = {};
  for (const r of regels) {
    waarden[r.naam] = String(formData.get(r.naam) ?? "")
      .replace(/[\r\n\t]+/g, " ")
      .trim()
      .slice(0, 200);
  }
  return waarden;
}

/** De taal van het formulier, voor de foutteksten. Het bericht aan ons is altijd Nederlands. */
function taalVan(formData: FormData): Taal {
  return formData.get("taal") === "en" ? "en" : "nl";
}

/**
 * Verstuurt een formulier per e-mail via Resend zodra RESEND_API_KEY en
 * AANMELD_NAAR in de omgeving staan. Zonder die twee wordt alleen gelogd,
 * zodat de site ook zonder mailkoppeling werkt en test.
 */
async function verstuur(onderwerp: string, regels: string[], antwoordAan: string, taal: Taal): Promise<FormulierStatus> {
  console.log(`[${onderwerp}]`, regels.join(" | "));
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
        reply_to: antwoordAan,
        subject: onderwerp,
        text: regels.join("\n"),
      }),
    });
    if (!antwoord.ok) {
      console.error(`[${onderwerp}] mail mislukt`, antwoord.status, await antwoord.text());
      return { status: "fout", melding: fouttekst[taal].algemeen };
    }
    return { status: "klaar" };
  } catch (fout) {
    console.error(`[${onderwerp}] mail mislukt`, fout);
    return { status: "fout", melding: fouttekst[taal].algemeen };
  }
}

/** Honeypot: een verborgen veld dat mensen leeg laten. */
function spam(formData: FormData) {
  return String(formData.get("website") ?? "").length > 0;
}

export async function reserveer(_vorige: FormulierStatus, formData: FormData): Promise<FormulierStatus> {
  if (spam(formData)) return { status: "klaar" };
  const taal = taalVan(formData);
  const w = lees(formData, reserveerRegels);
  const fouten = valideer(reserveerRegels, w, taal);
  if (Object.keys(fouten).length > 0) return { status: "fout", fouten };

  const model = modellen[w.model as keyof typeof modellen];
  const product = producten[w.product as keyof typeof producten];
  return verstuur(
    `Reservering: ${w.bedrijf}, ${model.naam} ${product.naam}`,
    [
      `Bedrijf: ${w.bedrijf}`,
      `Contactpersoon: ${w.contactpersoon}`,
      `E-mail: ${w.email}`,
      `Telefoon: ${w.telefoon}`,
      `Model: ${model.naam}`,
      `Product: ${product.naam}`,
      `Duo-partner: ${w.duoPartner || "geen"}`,
      `Teamgrootte: ${w.teamgrootte || "niet ingevuld"}`,
      `Taal: ${taal === "en" ? "Engels" : "Nederlands"}`,
      `Tijd: ${new Date().toISOString()}`,
    ],
    w.email,
    taal,
  );
}

export async function proefvaren(_vorige: FormulierStatus, formData: FormData): Promise<FormulierStatus> {
  if (spam(formData)) return { status: "klaar" };
  const taal = taalVan(formData);
  const w = lees(formData, proefvaarRegels);
  const fouten = valideer(proefvaarRegels, w, taal);
  if (Object.keys(fouten).length > 0) return { status: "fout", fouten };

  return verstuur(
    `Proefvaart: ${w.bedrijf}`,
    [
      `Bedrijf: ${w.bedrijf}`,
      `Naam: ${w.naam}`,
      `E-mail: ${w.email}`,
      `Telefoon: ${w.telefoon}`,
      `Teamgrootte: ${w.teamgrootte || "niet ingevuld"}`,
      `Voorkeursdag: ${w.voorkeursdag || "geen voorkeur"}`,
      `Taal: ${taal === "en" ? "Engels" : "Nederlands"}`,
      `Tijd: ${new Date().toISOString()}`,
    ],
    w.email,
    taal,
  );
}
