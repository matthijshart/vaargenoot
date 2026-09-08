"use client";

import { m, useMotionValue, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { showcase } from "@/content/showcase";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";

/**
 * Vastgepinde sectie van 300vh. Bij het scrollen draait de sloep uit een
 * perspectiefhoek naar voren, schaalt op, en verschijnen de punten na elkaar.
 * Bij prefers-reduced-motion staat alles direct stil en zichtbaar.
 */
export function SloepShowcase() {
  const reduced = useReducedMotion();
  const kader = useRef<HTMLElement>(null);
  /** Stilstaande voortgang voor de reduced-motion variant: alles zichtbaar. */
  const stil = useMotionValue(1);
  const { scrollYProgress } = useScroll({
    target: kader,
    offset: ["start start", "end end"],
  });

  // Beweging van de sloep over de eerste helft van de scroll.
  const rotateX = useTransform(scrollYProgress, [0, 0.55], [22, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.55], [-14, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.55], [0.82, 1]);
  const y = useTransform(scrollYProgress, [0, 0.55], ["6%", "0%"]);
  const schaduw = useTransform(scrollYProgress, [0, 0.55], [0.15, 0.4]);
  // Functies in plaats van keyframes: zo neemt framer-motion deze waarden
  // niet over in een native ScrollTimeline, die hier het verkeerde element volgt.
  const kopOpacity = useTransform(scrollYProgress, (v) => 1 - deel(v, 0.18, 0.3));
  const kopY = useTransform(scrollYProgress, (v) => -16 * deel(v, 0, 0.3));

  if (reduced) {
    return (
      <section id="sloepen" className="scroll-mt-16 bg-nacht py-20 text-wit sm:py-28">
        <Container>
          <Kop />
          <div className="mt-10 sm:rounded-2xl">
            <Foto
              src={showcase.beeld.src}
              alt={showcase.beeld.alt}
              ratio="4 / 3"
              sizes="(min-width: 1152px) 960px, 100vw"
              className="rounded-2xl"
            />
          </div>
          <Punten voortgang={stil} />
        </Container>
      </section>
    );
  }

  return (
    <section ref={kader} id="sloepen" className="relative scroll-mt-0 bg-nacht text-wit" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <Container className="flex h-full flex-col justify-center py-16">
          <m.div data-showcase="kop" style={{ opacity: kopOpacity, y: kopY }} className="shrink-0">
            <Kop />
          </m.div>

          <div className="relative mt-6 flex-1 min-h-0 [perspective:1400px]">
            <m.div
              data-showcase="sloep"
              className="relative mx-auto h-full max-h-[62svh] w-full max-w-4xl [transform-style:preserve-3d]"
              style={{ rotateX, rotateY, scale, y, transformOrigin: "50% 60%" }}
            >
              <m.div
                aria-hidden
                className="absolute inset-x-[8%] -bottom-[6%] h-[18%] rounded-[50%] bg-inkt blur-2xl"
                style={{ opacity: schaduw }}
              />
              <div className="relative h-full">
                <Foto
                  src={showcase.beeld.src}
                  alt={showcase.beeld.alt}
                  sizes="(min-width: 1152px) 896px, 100vw"
                  className="h-full w-full rounded-2xl ring-1 ring-wit/10"
                />
              </div>
            </m.div>
          </div>

          <Punten voortgang={scrollYProgress} />
        </Container>
      </div>
    </section>
  );
}

/** Voortgang van v tussen a en b, begrensd op 0 tot 1. */
function deel(v: number, a: number, b: number) {
  return Math.min(1, Math.max(0, (v - a) / (b - a)));
}

function Kop() {
  return (
    <div>
      <p className="mb-3 text-[14px] font-medium text-lucht">{showcase.label}</p>
      <h2 className="text-[30px] text-wit sm:text-[40px] lg:text-[48px]">{showcase.kop}</h2>
    </div>
  );
}

function Punten({ voortgang }: { voortgang: MotionValue<number> }) {
  return (
    <ul className="mt-8 grid shrink-0 grid-cols-2 gap-x-6 gap-y-5 border-t border-wit/15 pt-6 lg:grid-cols-4">
      {showcase.punten.map((punt, i) => (
        <Punt key={punt.kop} index={i} voortgang={voortgang} {...punt} />
      ))}
    </ul>
  );
}

function Punt({
  index,
  voortgang,
  kop,
  tekst,
}: {
  index: number;
  voortgang: MotionValue<number>;
  kop: string;
  tekst: string;
}) {
  // Elk punt verschijnt in een eigen venster van de scroll.
  const start = 0.45 + index * 0.11;
  const opacity = useTransform(voortgang, (v) => deel(v, start, start + 0.08));
  const y = useTransform(voortgang, (v) => 12 * (1 - deel(v, start, start + 0.08)));

  return (
    <m.li style={{ opacity, y }} className="min-w-0">
      <p className="font-kop text-[24px] font-light leading-tight text-wit sm:text-[28px]">{kop}</p>
      <p className="mt-1 text-[14px] leading-relaxed text-lucht sm:text-[15px]">{tekst}</p>
    </m.li>
  );
}
