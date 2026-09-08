"use client";

import { m, useMotionValue, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { lagen, type Laag } from "@/content/lagen";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";

/** Afstand tussen de lagen in de stapel, in pixels. */
const STAP = 30;
/** Hoogte waarvandaan een laag neerdaalt. */
const VAL = 260;
/** Begin van de eerste laag en ruimte per laag, als deel van de scroll. */
const START = 0.06;
const PER_LAAG = 0.125;
const DUUR = 0.085;
/** Vanaf hier schuiven de lagen in elkaar. */
const SLUIT = 0.86;

/** Voortgang van v tussen a en b, begrensd op 0 tot 1. */
function deel(v: number, a: number, b: number) {
  return Math.min(1, Math.max(0, (v - a) / (b - a)));
}

function venster(i: number) {
  const start = START + i * PER_LAAG;
  return [start, start + DUUR] as const;
}

/**
 * Vastgepinde sectie van 400vh. Bij het scrollen daalt laag voor laag neer op
 * de stapel: romp, ligdek, kussens, tafel, geluid en koelkast, bimini. Aan het
 * eind schuiven de lagen in elkaar tot één sloep.
 * Bij prefers-reduced-motion staat de stapel stil en compleet.
 */
export function SloepLagen() {
  const reduced = useReducedMotion();
  const kader = useRef<HTMLElement>(null);
  const stil = useMotionValue(1);
  const { scrollYProgress } = useScroll({
    target: kader,
    offset: ["start start", "end end"],
  });
  const voortgang = reduced ? stil : scrollYProgress;

  const kopOpacity = useTransform(voortgang, (v) => (reduced ? 1 : 1 - deel(v, 0.84, 0.91)));
  const slotOpacity = useTransform(voortgang, (v) => (reduced ? 0 : deel(v, 0.92, 1)));

  if (reduced) {
    return (
      <section id="sloepen" className="scroll-mt-16 bg-nacht py-20 text-wit sm:py-28">
        <Container>
          <Kop />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Stapel voortgang={stil} reduced />
            </div>
            <Lijst voortgang={stil} className="lg:col-span-5" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section ref={kader} id="sloepen" className="relative scroll-mt-0 bg-nacht text-wit" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-svh overflow-hidden">
        <Container className="flex h-full flex-col py-14 sm:py-16">
          <div className="relative shrink-0">
            <m.div style={{ opacity: kopOpacity }}>
              <Kop />
            </m.div>
            <m.p
              style={{ opacity: slotOpacity }}
              className="absolute inset-x-0 top-0 font-kop text-[26px] font-light text-wit sm:text-[34px]"
            >
              {lagen.slot}
            </m.p>
          </div>

          <div className="grid min-h-0 flex-1 grid-rows-[1fr_auto] gap-6 lg:grid-cols-12 lg:grid-rows-1 lg:items-center lg:gap-16">
            <div className="min-h-0 lg:col-span-7">
              <Stapel voortgang={voortgang} />
            </div>
            <Lijst voortgang={voortgang} className="lg:col-span-5" />
          </div>
        </Container>
      </div>
    </section>
  );
}

function Kop() {
  return (
    <div>
      <p className="mb-2 text-[14px] font-medium text-lucht">{lagen.label}</p>
      <h2 className="text-[28px] text-wit sm:text-[36px] lg:text-[44px]">{lagen.kop}</h2>
      <p className="mt-2 text-[15px] text-lucht sm:text-[16px]">{lagen.intro}</p>
    </div>
  );
}

function Stapel({ voortgang, reduced = false }: { voortgang: MotionValue<number>; reduced?: boolean }) {
  return (
    <div className="mx-auto h-full w-full max-w-[520px] [perspective:1800px]">
      <div
        className="relative mx-auto aspect-[3/4] h-full max-h-full [transform-style:preserve-3d]"
        style={{ transform: "rotateX(48deg) rotateZ(-10deg)" }}
      >
        {lagen.lijst.map((laag, i) => (
          <LaagBeeld key={laag.id} laag={laag} index={i} voortgang={voortgang} reduced={reduced} />
        ))}
      </div>
    </div>
  );
}

function LaagBeeld({
  laag,
  index,
  voortgang,
  reduced,
}: {
  laag: Laag;
  index: number;
  voortgang: MotionValue<number>;
  reduced: boolean;
}) {
  const [a, b] = venster(index);
  const opacity = useTransform(voortgang, (v) => (reduced ? 1 : deel(v, a, b)));
  const z = useTransform(voortgang, (v) => {
    if (reduced) return index * STAP;
    const landing = 1 - deel(v, a, b);
    const sluiting = deel(v, SLUIT, 1);
    return index * STAP * (1 - sluiting) + VAL * landing;
  });

  return (
    <m.div
      className="absolute inset-0"
      style={{ opacity, z, transformStyle: "preserve-3d" }}
    >
      <Image
        src={laag.beeld}
        alt={laag.alt}
        sizes="(min-width: 1024px) 520px, 80vw"
        className="h-full w-full object-contain"
      />
    </m.div>
  );
}

function Lijst({ voortgang, className }: { voortgang: MotionValue<number>; className?: string }) {
  return (
    <ol className={cn("grid grid-cols-2 gap-x-6 gap-y-2 lg:block lg:space-y-0 lg:divide-y lg:divide-wit/15 lg:border-y lg:border-wit/15", className)}>
      {lagen.lijst.map((laag, i) => (
        <LijstItem key={laag.id} laag={laag} index={i} voortgang={voortgang} />
      ))}
    </ol>
  );
}

function LijstItem({ laag, index, voortgang }: { laag: Laag; index: number; voortgang: MotionValue<number> }) {
  const [a, b] = venster(index);
  const opacity = useTransform(voortgang, (v) => 0.35 + 0.65 * deel(v, a, b));
  const x = useTransform(voortgang, (v) => 10 * (1 - deel(v, a, b)));

  return (
    <m.li style={{ opacity, x }} className="py-1.5 lg:py-4">
      <p className="font-kop text-[20px] font-light leading-tight text-wit sm:text-[24px]">{laag.kop}</p>
      <p className="mt-0.5 hidden text-[14px] leading-relaxed text-lucht sm:block sm:text-[15px]">{laag.tekst}</p>
    </m.li>
  );
}
