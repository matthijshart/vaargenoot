"use client";

import Link from "next/link";
import { useActionState, useState, type ChangeEvent, type FocusEvent } from "react";
import { proefvaren, type FormulierStatus } from "@/app/actions";
import { inhoud } from "@/content";
import { type Taal } from "@/lib/taal";
import { proefvaarRegels, valideerVeld, type Fouten } from "@/lib/validatie";
import { Invoer } from "./ui/Veld";
import { Knop } from "./ui/Knop";

const begin: FormulierStatus = { status: "leeg" };

export function ProefvaarFormulier({ taal }: { taal: Taal }) {
  const [state, actie, bezig] = useActionState(proefvaren, begin);
  const [lokaal, setLokaal] = useState<Fouten>({});
  const [w, setW] = useState({ bedrijf: "", naam: "", email: "", telefoon: "", teamgrootte: "", voorkeursdag: "" });
  const { proefvaren: t, ui } = inhoud(taal);
  const f = t.formulier;
  const fouten: Fouten = { ...state.fouten, ...lokaal };
  const klaar = state.status === "klaar";

  function controleer(e: FocusEvent<HTMLInputElement>) {
    const regel = proefvaarRegels.find((r) => r.naam === e.target.name);
    if (!regel) return;
    setLokaal((x) => ({ ...x, [regel.naam]: valideerVeld(regel, e.target.value, taal) }));
  }

  function wijzig(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setW((x) => ({ ...x, [name]: value }));
    if (lokaal[name]) setLokaal((x) => ({ ...x, [name]: undefined }));
  }

  return (
    <form action={actie} noValidate aria-busy={bezig} className="grid gap-6">
      <fieldset disabled={klaar} className="grid gap-6">
        <legend className="kop mb-2 text-[26px]">{f.kop}</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <Invoer label={f.velden.bedrijf} naam="bedrijf" autoComplete="organization" value={w.bedrijf} onChange={wijzig} onBlur={controleer} fout={fouten.bedrijf} />
          <Invoer label={f.velden.naam} naam="naam" autoComplete="name" value={w.naam} onChange={wijzig} onBlur={controleer} fout={fouten.naam} />
          <Invoer label={f.velden.email} naam="email" type="email" inputMode="email" autoComplete="email" value={w.email} onChange={wijzig} onBlur={controleer} fout={fouten.email} />
          <Invoer label={f.velden.telefoon} naam="telefoon" type="tel" inputMode="tel" autoComplete="tel" value={w.telefoon} onChange={wijzig} onBlur={controleer} fout={fouten.telefoon} />
          <Invoer label={f.velden.teamgrootte} naam="teamgrootte" optioneel={ui.optioneel} inputMode="numeric" value={w.teamgrootte} onChange={wijzig} />
          <div>
            <Invoer label={f.velden.voorkeursdag} naam="voorkeursdag" optioneel={ui.optioneel} value={w.voorkeursdag} onChange={wijzig} />
            <p className="mt-2 text-[14px] text-grijs">{f.voorkeursdagHulp}</p>
          </div>
        </div>
        <input type="hidden" name="taal" value={taal} />
        <div className="hidden" aria-hidden>
          <label htmlFor="website-p">Website</label>
          <input id="website-p" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </fieldset>

      {state.status === "fout" && state.melding && (
        <p role="alert" className="text-[15px] text-blauw">
          {state.melding}
        </p>
      )}

      {klaar ? (
        <div role="status" className="rounded-kaart bg-room p-6">
          <p className="kop text-[24px]">{f.klaar}</p>
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
