"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useActionState, useState, type ChangeEvent, type FocusEvent } from "react";
import { vraagProefvaartAan, type AanmeldStatus } from "@/app/actions";
import { aanmelden } from "@/content/aanmelden";
import { valideerVeld, type Fouten, type Veld } from "@/lib/validatie";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";
import { Knop } from "./ui/Knop";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";
import { Vinkje } from "./ui/Vinkje";

const begin: AanmeldStatus = { status: "leeg" };

const veldStijl =
  "w-full rounded-xl border bg-wit px-4 py-3.5 text-[16px] text-inkt transition-colors duration-150 placeholder:text-zacht/60 focus:border-gracht focus:outline-none focus-visible:ring-2 focus-visible:ring-lucht";

export function Aanmelden() {
  const [state, actie, bezig] = useActionState(vraagProefvaartAan, begin);
  const [lokaal, setLokaal] = useState<Fouten>({});
  const [waarden, setWaarden] = useState<Record<Veld, string>>({ naam: "", email: "", aandeel: "" });
  const reduced = useReducedMotion();

  const fouten: Fouten = { ...state.fouten, ...lokaal };
  const klaar = state.status === "klaar";

  function controleer(e: FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    const veld = e.target.name as Veld;
    setLokaal((f) => ({ ...f, [veld]: valideerVeld(veld, e.target.value) }));
  }

  function wijzig(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const veld = e.target.name as Veld;
    setWaarden((w) => ({ ...w, [veld]: e.target.value }));
    if (lokaal[veld]) setLokaal((f) => ({ ...f, [veld]: undefined }));
  }

  return (
    <Sectie id="aanmelden">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectieKop label={aanmelden.label} kop={aanmelden.kop} intro={aanmelden.intro} />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <form action={actie} noValidate className="grid gap-5" aria-busy={bezig}>
              <Invoer
                label={aanmelden.velden.naam}
                fout={fouten.naam}
                naam="naam"
                type="text"
                autoComplete="name"
                value={waarden.naam}
                onBlur={controleer}
                onChange={wijzig}
                uit={klaar}
              />
              <Invoer
                label={aanmelden.velden.email}
                fout={fouten.email}
                naam="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={waarden.email}
                onBlur={controleer}
                onChange={wijzig}
                uit={klaar}
              />
              <div>
                <label htmlFor="veld-aandeel" className="mb-2 block text-[14px] font-medium text-nacht">
                  {aanmelden.velden.aandeel}
                </label>
                <select
                  id="veld-aandeel"
                  name="aandeel"
                  value={waarden.aandeel}
                  disabled={klaar}
                  onBlur={controleer}
                  onChange={wijzig}
                  aria-invalid={!!fouten.aandeel}
                  aria-describedby={fouten.aandeel ? "aandeel-fout" : undefined}
                  className={cn(
                    veldStijl,
                    "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22none%22 stroke=%22%235A6B7C%22 stroke-width=%221.25%22><path d=%22M5 8l5 5 5-5%22/></svg>')] bg-[length:20px_20px] bg-[position:right_14px_center] bg-no-repeat pr-11",
                    fouten.aandeel ? "border-gracht" : "border-nevel",
                  )}
                >
                  {aanmelden.opties.map((o) => (
                    <option key={o.waarde} value={o.waarde} disabled={o.waarde === ""}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <Fout id="aandeel-fout" tekst={fouten.aandeel} />
              </div>

              {state.melding && (
                <p role="alert" className="text-[14px] text-gracht">
                  {state.melding}
                </p>
              )}

              <div className="relative mt-2 min-h-14">
                <AnimatePresence initial={false} mode="wait">
                  {klaar ? (
                    <motion.div
                      key="klaar"
                      role="status"
                      initial={reduced ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                      className="flex items-start gap-3 rounded-xl border border-messing/50 bg-wit px-5 py-4"
                    >
                      <Vinkje className="mt-1 text-messing" />
                      <div>
                        <p className="font-medium text-nacht">{aanmelden.klaar}</p>
                        <p className="mt-0.5 text-[15px] text-zacht">{aanmelden.bevestiging}</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="knop"
                      initial={false}
                      exit={reduced ? undefined : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Knop type="submit" disabled={bezig} className="w-full sm:w-auto">
                        {bezig ? aanmelden.bezig : aanmelden.knop}
                      </Knop>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Sectie>
  );
}

function Invoer({
  label,
  fout,
  naam,
  uit,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  fout?: string;
  naam: Veld;
  uit: boolean;
}) {
  return (
    <div>
      <label htmlFor={`veld-${naam}`} className="mb-2 block text-[14px] font-medium text-nacht">
        {label}
      </label>
      <input
        id={`veld-${naam}`}
        name={naam}
        disabled={uit}
        aria-invalid={!!fout}
        aria-describedby={fout ? `${naam}-fout` : undefined}
        className={cn(veldStijl, fout ? "border-gracht" : "border-nevel")}
        {...rest}
      />
      <Fout id={`${naam}-fout`} tekst={fout} />
    </div>
  );
}

function Fout({ id, tekst }: { id: string; tekst?: string }) {
  return (
    <AnimatePresence initial={false}>
      {tekst && (
        <motion.p
          id={id}
          key={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden text-[13px] text-gracht"
        >
          <span className="block pt-2">{tekst}</span>
        </motion.p>
      )}
    </AnimatePresence>
  );
}
