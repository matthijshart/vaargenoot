"use client";

import Link from "next/link";
import { useActionState, useState, type ChangeEvent, type FocusEvent } from "react";
import { reserveer, type FormulierStatus } from "@/app/actions";
import { inhoud } from "@/content";
import { type Taal } from "@/lib/taal";
import { reserveerRegels, valideerVeld, type Fouten } from "@/lib/validatie";
import { Invoer, Keuze } from "./ui/Veld";
import { Knop } from "./ui/Knop";

const begin: FormulierStatus = { status: "leeg" };

type Waarden = {
  bedrijf: string;
  contactpersoon: string;
  email: string;
  telefoon: string;
  model: "" | "prinsen" | "amstel";
  product: "" | "duo" | "solo";
  duoPartner: string;
  teamgrootte: string;
};

/**
 * Reserveringsformulier. Dezelfde validatie op de client (bij blur) en
 * op de server. Werkt ook zonder JavaScript: de Server Action valideert
 * en geeft de fouten terug.
 */
export function ReserveerFormulier({ taal }: { taal: Taal }) {
  const [state, actie, bezig] = useActionState(reserveer, begin);
  const [lokaal, setLokaal] = useState<Fouten>({});
  const [w, setW] = useState<Waarden>({
    bedrijf: "",
    contactpersoon: "",
    email: "",
    telefoon: "",
    model: "",
    product: "",
    duoPartner: "",
    teamgrootte: "",
  });
  const { reserveer: t, ui } = inhoud(taal);
  const f = t.formulier;
  const fouten: Fouten = { ...state.fouten, ...lokaal };
  const klaar = state.status === "klaar";

  function controleer(e: FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    const regel = reserveerRegels.find((r) => r.naam === e.target.name);
    if (!regel) return;
    setLokaal((x) => ({ ...x, [regel.naam]: valideerVeld(regel, e.target.value, taal) }));
  }

  function wijzig(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setW((x) => ({ ...x, [name]: value }));
    if (lokaal[name]) setLokaal((x) => ({ ...x, [name]: undefined }));
  }

  const prijsregel = f.prijsregel(w.model, w.product);

  return (
    <form action={actie} noValidate aria-busy={bezig} className="grid gap-6">
      <fieldset disabled={klaar} className="grid gap-6">
        <legend className="mb-2 text-[22px] font-semibold tracking-[-0.01em]">{f.kop}</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <Invoer label={f.velden.bedrijf} naam="bedrijf" autoComplete="organization" value={w.bedrijf} onChange={wijzig} onBlur={controleer} fout={fouten.bedrijf} />
          <Invoer label={f.velden.contactpersoon} naam="contactpersoon" autoComplete="name" value={w.contactpersoon} onChange={wijzig} onBlur={controleer} fout={fouten.contactpersoon} />
          <Invoer label={f.velden.email} naam="email" type="email" inputMode="email" autoComplete="email" value={w.email} onChange={wijzig} onBlur={controleer} fout={fouten.email} />
          <Invoer label={f.velden.telefoon} naam="telefoon" type="tel" inputMode="tel" autoComplete="tel" value={w.telefoon} onChange={wijzig} onBlur={controleer} fout={fouten.telefoon} />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <Keuze label={f.velden.model} naam="model" opties={f.modellen} value={w.model} onChange={wijzig} onBlur={controleer} fout={fouten.model} />
          <Keuze label={f.velden.product} naam="product" opties={f.producten} value={w.product} onChange={wijzig} onBlur={controleer} fout={fouten.product} />
        </div>
        {prijsregel && (
          <p className="-mt-2 text-[15px] font-medium" aria-live="polite">
            {prijsregel}
          </p>
        )}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <Invoer label={f.velden.duoPartner} naam="duoPartner" optioneel={ui.optioneel} autoComplete="off" value={w.duoPartner} onChange={wijzig} />
            <p className="mt-2 text-[14px] text-grijs">{f.duoPartnerHulp}</p>
          </div>
          <div>
            <Invoer label={f.velden.teamgrootte} naam="teamgrootte" optioneel={ui.optioneel} type="text" inputMode="numeric" value={w.teamgrootte} onChange={wijzig} />
            <p className="mt-2 text-[14px] text-grijs">{f.teamgrootteHulp}</p>
          </div>
        </div>
        <input type="hidden" name="taal" value={taal} />
        {/* Honeypot: mensen zien dit veld niet. */}
        <div className="hidden" aria-hidden>
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </fieldset>

      {state.status === "fout" && state.melding && (
        <p role="alert" className="text-[15px] text-blauw">
          {state.melding}
        </p>
      )}

      {klaar ? (
        <div role="status" className="rounded-kaart border border-lijn bg-room p-6">
          <p className="text-[20px] font-semibold tracking-[-0.01em]">{f.klaar}</p>
          <p className="mt-2 text-grijs">{f.bevestiging}</p>
        </div>
      ) : (
        <div>
          <Knop type="submit" disabled={bezig}>
            {bezig ? f.bezig : f.knop}
          </Knop>
          <p className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-grijs">
            {f.onder}{" "}
            <Link href={f.privacy.href} className="underline underline-offset-4 hover:text-antraciet">
              {f.privacy.label}
            </Link>
            .
          </p>
        </div>
      )}
    </form>
  );
}
