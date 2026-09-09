"use client";

import { AnimatePresence, m, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { verdelen, type Cel } from "@/content/verdelen";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";

const EASE = [0.2, 0.7, 0.2, 1] as const;
const N = verdelen.stappen.length;

/**
 * Vastgepinde sectie van 350vh. Bij het scrollen loopt het voorbeeld in
 * zes stappen door: punten, doordeweeks, weekend, vrij, ruilen, teller.
 * Bij prefers-reduced-motion staat de laatste stap stil, met alle stappen.
 */
export function Verdelen() {
  const reduced = useReducedMotion();
  const kader = useRef<HTMLElement>(null);
  const [stap, setStap] = useState(0);
  const { scrollYProgress } = useScroll({ target: kader, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const s = Math.min(N - 1, Math.max(0, Math.floor(v * (N + 0.4))));
    if (s !== stap) setStap(s);
  });

  const actief = reduced ? N - 1 : stap;

  if (reduced) {
    return (
      <section id="verdelen" className="scroll-mt-16 bg-schuim py-20 sm:py-28">
        <Container>
          <Kop />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Kalender stap={N - 1} />
            </div>
            <Stappen actief={N - 1} className="lg:col-span-6" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section ref={kader} id="verdelen" className="relative scroll-mt-0 bg-schuim" style={{ height: "350vh" }}>
      <div className="sticky top-0 h-svh overflow-hidden">
        <Container className="flex h-full flex-col pt-20 pb-8 sm:pt-24 sm:pb-12">
          <Kop />
          <div className="grid min-h-0 flex-1 grid-rows-[1fr_auto] items-center gap-5 lg:grid-cols-12 lg:grid-rows-1 lg:gap-16">
            <div className="flex min-h-0 items-center justify-center lg:col-span-6">
              <Kalender stap={actief} />
            </div>
            <Stappen actief={actief} className="lg:col-span-6" />
          </div>
        </Container>
      </div>
    </section>
  );
}

function Kop() {
  return (
    <div className="shrink-0">
      <p className="mb-2 text-[14px] font-medium text-gracht">{verdelen.label}</p>
      <h2 className="text-[28px] text-nacht sm:text-[36px] lg:text-[44px]">{verdelen.kop}</h2>
      <p className="mt-2 hidden text-[15px] text-zacht sm:block sm:text-[16px]">{verdelen.intro}</p>
    </div>
  );
}

function vind(lijst: Cel[], dag: number, dagdeel: number) {
  return lijst.find((c) => c.dag === dag && c.dagdeel === dagdeel);
}

function Kalender({ stap }: { stap: number }) {
  const s = verdelen.stappen[stap];
  // Bij de ruil verhuist Anne naar zaterdagmiddag.
  const anderen = s.ruil
    ? verdelen.anderen.map((c) => (c.wie === "Anne" ? { ...c, dag: 5, dagdeel: 1 } : c))
    : verdelen.anderen;

  return (
    <div className="w-full max-w-[460px] rounded-[28px] border border-nevel bg-wit p-4 shadow-[0_24px_60px_-30px_rgba(11,31,51,0.35)] sm:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="font-kop text-[22px] font-light leading-tight text-nacht sm:text-[24px]">{verdelen.sloep}</p>
          <p className="text-[12px] text-zacht sm:text-[13px]">{verdelen.aandeel}</p>
        </div>
        <div className="flex items-baseline gap-4 text-right">
          <Teller waarde={s.punten} max={verdelen.maxPunten} label={verdelen.punten} groot />
          <Teller waarde={s.weekend} max={verdelen.maxWeekend} label={verdelen.weekend} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-[3.2rem_repeat(7,1fr)] gap-1 text-[11px] text-zacht sm:mt-5 sm:gap-1.5 sm:text-[12px]">
        <div />
        {verdelen.dagen.map((d, i) => (
          <div key={d} className={cn("pb-1 text-center", i >= 5 && "text-nacht")}>
            {d}
          </div>
        ))}
        {verdelen.dagdelen.map((dd, r) => (
          <div key={dd} className="contents">
            <div className="flex items-center">{dd}</div>
            {verdelen.dagen.map((d, k) => {
              const mij = vind(s.jouw, k, r);
              const ander = vind(anderen, k, r);
              const vrij = s.vrij && s.vrij.dag === k && s.vrij.dagdeel === r;
              const weekend = k >= 5;
              const inhoud = mij ? verdelen.jij : ander ? ander.wie : "";
              const sleutel = `${inhoud}-${vrij ? "vrij" : ""}`;
              return (
                <div
                  key={d + dd}
                  className={cn(
                    "relative flex h-9 items-center justify-center overflow-hidden rounded-md border text-[11px] sm:h-10 sm:text-[12px]",
                    mij
                      ? "border-lucht bg-lucht font-semibold text-nacht"
                      : ander
                        ? "border-nevel bg-nevel text-zacht"
                        : weekend
                          ? "border-nevel bg-schuim"
                          : "border-nevel bg-wit",
                  )}
                >
                  <AnimatePresence initial={false} mode="popLayout">
                    <m.span
                      key={sleutel}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="truncate px-1"
                    >
                      {inhoud}
                    </m.span>
                  </AnimatePresence>
                  {mij && vrij && (
                    <span className="absolute right-0.5 top-0.5 rounded-full bg-messing px-1 text-[9px] font-semibold leading-[14px] text-nacht">
                      0
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-4 h-9 border-t border-nevel pt-3 sm:mt-5">
        <AnimatePresence initial={false} mode="wait">
          <m.p
            key={stap}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="flex items-center gap-2 text-[12px] text-inkt sm:text-[13px]"
          >
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-messing" />
            {s.melding}
          </m.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Teller({ waarde, max, label, groot = false }: { waarde: number; max: number; label: string; groot?: boolean }) {
  return (
    <div>
      <p className={cn("font-kop font-light leading-none text-nacht tabular-nums", groot ? "text-[30px] sm:text-[34px]" : "text-[22px] sm:text-[24px]")}>
        <AnimatePresence initial={false} mode="popLayout">
          <m.span
            key={waarde}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="inline-block"
          >
            {waarde}
          </m.span>
        </AnimatePresence>
        <span className="text-[13px] text-zacht"> {verdelen.van} {max}</span>
      </p>
      <p className="text-[11px] text-zacht sm:text-[12px]">{label}</p>
    </div>
  );
}

function Stappen({ actief, className }: { actief: number; className?: string }) {
  const s = verdelen.stappen[actief];
  return (
    <div className={cn("min-w-0", className)}>
      {/* Mobiel: alleen de actieve stap. */}
      <div className="lg:hidden">
        <AnimatePresence initial={false} mode="wait">
          <m.div
            key={actief}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <p className="text-[12px] text-zacht tabular-nums">
              {actief + 1} {verdelen.van} {N}
            </p>
            <p className="mt-1 font-kop text-[22px] font-light leading-tight text-nacht">{s.kop}</p>
            <p className="mt-1 text-[14px] leading-relaxed text-zacht">{s.tekst}</p>
          </m.div>
        </AnimatePresence>
      </div>

      {/* Desktop: alle stappen, de actieve licht op. */}
      <ol className="hidden divide-y divide-nevel border-y border-nevel lg:block">
        {verdelen.stappen.map((st, i) => {
          const aan = i === actief;
          const geweest = i < actief;
          return (
            <li key={st.kop} className="py-3.5 transition-opacity duration-300" style={{ opacity: aan ? 1 : geweest ? 0.6 : 0.35 }}>
              <div className="flex items-baseline gap-4">
                <span className="w-5 shrink-0 font-kop text-[18px] font-light text-messing tabular-nums">{i + 1}</span>
                <div>
                  <p className="font-kop text-[22px] font-light leading-tight text-nacht">{st.kop}</p>
                  <m.p
                    initial={false}
                    animate={{ height: aan ? "auto" : 0, opacity: aan ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden text-[15px] leading-relaxed text-zacht"
                  >
                    <span className="block pt-1">{st.tekst}</span>
                  </m.p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
