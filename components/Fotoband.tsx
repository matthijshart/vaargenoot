"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fotoband } from "@/content/fotoband";
import { Foto } from "./ui/Foto";

/**
 * Brede foto van rand tot rand, met parallax en één regel onderin.
 * Een adempauze tussen twee secties, zelfde taal als de hero.
 */
export function Fotoband() {
  const reduced = useReducedMotion();
  const kader = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: kader,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, (v) => `${(v - 0.5) * 12}%`);

  return (
    <div ref={kader} className="fotoband relative overflow-hidden bg-nacht">
      <m.div
        className="absolute inset-x-0 -top-[6%] -bottom-[6%]"
        style={reduced ? undefined : { y }}
      >
        <Foto
          src={fotoband.beeld.src}
          alt={fotoband.beeld.alt}
          sizes="100vw"
          className="h-full w-full bg-nacht"
          fotoClassName="object-[50%_60%]"
        />
      </m.div>
      <p className="absolute inset-x-0 bottom-5 mx-auto flex max-w-6xl items-center gap-3 px-5 text-[13px] font-medium text-wit/90 [text-shadow:0_1px_2px_rgba(11,31,51,0.45)] sm:bottom-6 sm:px-8 sm:text-[14px]">
        <span aria-hidden className="h-px w-6 shrink-0 bg-messing" />
        {fotoband.tekst}
      </p>
    </div>
  );
}
