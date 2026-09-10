"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { foto } from "@/content/foto";
import { hero } from "@/content/hero";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { KnopLink, TekstLink } from "./ui/Knop";

/**
 * Eerst de sloep, dan het naamplaatje. De foto loopt van rand tot rand,
 * direct onder de nav. Daaronder de kop, één regel, de knop en vier feiten.
 * De entree loopt via CSS (zie globals.css), alleen de parallax vraagt
 * JavaScript.
 */
export function Hero() {
  const reduced = useReducedMotion();
  const kader = useRef<HTMLDivElement>(null);

  // Parallax: de foto beweegt maximaal 5% mee met de scroll.
  const { scrollYProgress } = useScroll({
    target: kader,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, (v) => `${(v - 0.5) * 10}%`);
  // En zoomt heel licht in terwijl hij uit beeld glijdt.
  const scale = useTransform(scrollYProgress, (v) => 1 + Math.max(0, v - 0.5) * 0.08);

  return (
    <section className="pt-16 pb-10 sm:pb-14">
      <div ref={kader} className="hero-kader relative overflow-hidden bg-nacht">
        {/* De schaal bij laden zit op deze binnenlaag, binnen het kader dat afsnijdt. */}
        <div className="foto-opkomen absolute inset-0">
          <m.div
            className="absolute inset-x-0 -top-[5%] -bottom-[5%]"
            style={reduced ? undefined : { y, scale }}
          >
            <Foto
              src={foto.heroBreed.src}
              staand={foto.heroStaand.src}
              alt={foto.heroBreed.alt}
              priority
              sizes="100vw"
              className="h-full w-full bg-nacht"
              fotoClassName="object-[50%_45%] md:object-[50%_55%]"
            />
          </m.div>
        </div>
        <p className="absolute inset-x-0 bottom-5 mx-auto flex max-w-6xl items-center gap-3 px-5 text-[13px] font-medium text-wit/90 [text-shadow:0_1px_2px_rgba(11,31,51,0.45)] sm:bottom-6 sm:px-8">
          <span aria-hidden className="h-px w-6 shrink-0 bg-messing" />
          {hero.onderschrift}
        </p>
      </div>

      <Container className="pt-10 sm:pt-12">
        <div className="max-w-5xl">
          <p className="opkomen flex items-center gap-3 text-[14px] font-medium text-gracht">
            <span aria-hidden className="hidden h-px w-6 bg-messing sm:block" />
            {hero.boven}
          </p>
          <h1
            className="opkomen mt-4 text-[40px] leading-[1.02] text-nacht sm:mt-5 sm:text-[52px] lg:text-[64px]"
            style={{ "--vertraging": "0.08s" } as React.CSSProperties}
          >
            {hero.kop}
          </h1>
          <p
            className="opkomen mt-5 max-w-[46ch] text-[17px] leading-relaxed text-inkt sm:mt-6 sm:text-[19px]"
            style={{ "--vertraging": "0.16s" } as React.CSSProperties}
          >
            {hero.sub}
          </p>
          <div
            id="hero-knop"
            className="opkomen mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 sm:mt-8"
            style={{ "--vertraging": "0.24s" } as React.CSSProperties}
          >
            <KnopLink href="#aanmelden">{hero.primair}</KnopLink>
            <TekstLink href={hero.secundairHref}>{hero.secundair}</TekstLink>
          </div>
          <p
            className="opkomen mt-4 text-[14px] text-zacht"
            style={{ "--vertraging": "0.32s" } as React.CSSProperties}
          >
            {hero.toelichting}
          </p>
        </div>

        <dl className="mt-12 divide-y divide-nevel border-y border-nevel sm:mt-16 md:grid md:grid-cols-4 md:gap-8 md:divide-y-0 md:py-8">
          {hero.feiten.map((feit) => (
            <div key={feit.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3.5 md:block md:py-0">
              <dt className="text-[14px] font-medium text-zacht md:text-[13px]">{feit.label}</dt>
              <dd className="text-[15px] leading-snug text-inkt md:mt-2">{feit.waarde}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
