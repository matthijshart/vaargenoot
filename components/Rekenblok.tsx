"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { aandeelTekst, passendAandeel } from "@/content/aandeel";
import { aandeelPerJaar, aandeelPerVaart, eigenSloepPerJaar, eigenSloepPerVaart } from "@/content/kosten";
import { euro } from "@/lib/utils";

const MIN = 1;
const MAX = 16;

/** Tekst die wisselt met een korte crossfade. */
function Wissel({ sleutel, children, className }: { sleutel: string; children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <span className={`relative inline-grid ${className ?? ""}`}>
      <AnimatePresence initial={false} mode="popLayout">
        <m.span
          key={sleutel}
          className="col-start-1 row-start-1"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.18, ease: "linear" }}
        >
          {children}
        </m.span>
      </AnimatePresence>
    </span>
  );
}

export function Rekenblok() {
  const t = aandeelTekst.rekenblok;
  const [vaarten, setVaarten] = useState(4);
  const id = useId();

  const aandeel = passendAandeel(vaarten);
  const perVaart = aandeelPerVaart(aandeel.prijs, vaarten);
  const eigen = eigenSloepPerVaart(vaarten);
  const jaar = aandeelPerJaar(aandeel.prijs);
  const eigenJaar = eigenSloepPerJaar();
  const procent = ((vaarten - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="grid gap-10 rounded-2xl border border-wit/15 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <h3 className="text-[26px] text-wit sm:text-[30px]">{t.kop}</h3>
        <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-lucht">{t.tekst}</p>

        <div className="mt-10">
          <label htmlFor={id} className="flex items-baseline justify-between text-[15px] text-lucht">
            <span>{vaarten === 1 ? t.vaart : t.vaarten}</span>
            <span className="font-kop text-[40px] font-light leading-none text-wit tabular-nums">
              {vaarten}
            </span>
          </label>
          <input
            id={id}
            type="range"
            min={MIN}
            max={MAX}
            step={1}
            value={vaarten}
            onChange={(e) => setVaarten(Number(e.target.value))}
            className="schuif mt-4 w-full"
            style={{ "--vul": `${procent}%` } as React.CSSProperties}
            aria-valuetext={`${vaarten} ${t.vaarten}`}
          />
          <div className="mt-2 flex justify-between text-[12px] text-lucht/70 tabular-nums">
            <span>{MIN}</span>
            <span>{MAX}</span>
          </div>
          <p className="mt-4 text-[13px] text-lucht/80">{t.seizoen}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 border-t border-wit/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
        <div>
          <p className="text-[15px] text-lucht">{t.past}</p>
          <Wissel sleutel={aandeel.id} className="mt-1 text-[34px] leading-tight text-wit sm:text-[40px]">
            <span className="font-kop font-light">{aandeel.naam}</span>
          </Wissel>
          <p className="mt-2 text-[15px] text-lucht">
            <Wissel sleutel={`${aandeel.id}-p`}>
              {euro(aandeel.prijs)} {t.perMaand}, {aandeelTekst.indicatief}
            </Wissel>
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
          <dl className="divide-y divide-wit/15 border-y border-wit/15">
            <div className="py-3">
              <dt className="text-[13px] text-lucht">Vaargenoot, {t.perVaart}</dt>
              <dd className="mt-1 font-kop text-[30px] font-light leading-none text-messing tabular-nums">
                <Wissel sleutel={`v-${Math.round(perVaart)}`}>{euro(perVaart)}</Wissel>
              </dd>
            </div>
            <div className="py-3">
              <dt className="text-[13px] text-lucht">Vaargenoot, {t.perJaar}</dt>
              <dd className="mt-1 font-kop text-[24px] font-light leading-none text-wit tabular-nums">
                <Wissel sleutel={`j-${jaar}`}>{euro(jaar)}</Wissel>
              </dd>
            </div>
          </dl>
          <dl className="divide-y divide-wit/15 border-y border-wit/15">
            <div className="py-3">
              <dt className="text-[13px] text-lucht">
                {t.eigen}, {t.perVaart}
              </dt>
              <dd className="mt-1 font-kop text-[30px] font-light leading-none text-wit/70 tabular-nums">
                <Wissel sleutel={`e-${Math.round(eigen)}`}>{euro(eigen)}</Wissel>
              </dd>
            </div>
            <div className="py-3">
              <dt className="text-[13px] text-lucht">
                {t.eigen}, {t.perJaar}
              </dt>
              <dd className="mt-1 font-kop text-[24px] font-light leading-none text-wit/70 tabular-nums">
                {euro(eigenJaar)}
              </dd>
            </div>
          </dl>
        </div>

        <p className="text-[13px] leading-relaxed text-lucht/80">
          {t.eigenToelichting} {t.aannames}
        </p>
      </div>
    </div>
  );
}
