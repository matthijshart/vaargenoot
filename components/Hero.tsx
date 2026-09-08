"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { foto } from "@/content/foto";
import { hero } from "@/content/hero";
import { itemVariants, staggerVariants } from "@/lib/motion";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { KnopLink, TekstLink } from "./ui/Knop";

export function Hero() {
  const reduced = useReducedMotion();
  const kader = useRef<HTMLDivElement>(null);

  // Parallax: de foto beweegt maximaal 6% mee met de scroll.
  const { scrollYProgress } = useScroll({
    target: kader,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section className="pt-28 pb-8 sm:pt-36 sm:pb-12">
      <Container>
        <motion.div
          className="max-w-3xl"
          initial={reduced ? false : "verborgen"}
          animate="zichtbaar"
          variants={staggerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-[44px] leading-[1.02] text-nacht sm:text-[64px] lg:text-[80px]"
          >
            {hero.kop}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-[34ch] text-[18px] leading-relaxed text-zacht sm:mt-8 sm:text-[21px]"
          >
            {hero.intro}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 sm:mt-10"
          >
            <KnopLink href="#aanmelden">{hero.primair}</KnopLink>
            <TekstLink href="#sloepen">{hero.secundair}</TekstLink>
          </motion.div>
        </motion.div>
      </Container>

      <div ref={kader} className="mt-14 sm:mt-20">
        <div className="mx-auto w-full max-w-6xl sm:px-8">
          <div
            className="relative overflow-hidden sm:rounded-2xl"
            style={{ aspectRatio: "16 / 8" }}
          >
            <motion.div
              className="absolute inset-x-0 -top-[3%] -bottom-[3%]"
              style={reduced ? undefined : { y }}
              initial={reduced ? false : { scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <Foto
                src={foto.hero.src}
                alt={foto.hero.alt}
                priority
                fetchPriority="high"
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="h-full w-full bg-nacht"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <Container>
        <p className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[14px] text-zacht sm:mt-8 sm:text-[15px]">
          <span className="font-medium text-nacht">Inbegrepen</span>
          {hero.inbegrepen.map((punt, i) => (
            <span key={punt} className="flex items-baseline gap-2">
              {i > 0 && <span aria-hidden className="text-nevel">·</span>}
              {punt}
            </span>
          ))}
          <span aria-hidden className="text-nevel">·</span>
          <span>{hero.optioneel}</span>
        </p>
      </Container>
    </section>
  );
}
