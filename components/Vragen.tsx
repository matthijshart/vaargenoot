"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { vragen } from "@/content/vragen";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

function Vraag({
  vraag,
  antwoord,
  open,
  onToggle,
}: {
  vraag: string;
  antwoord: string;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const reduced = useReducedMotion();

  return (
    <li className="border-b border-nevel">
      <h3 className="font-sans text-[17px] font-medium text-nacht">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-150 hover:text-gracht"
        >
          {vraag}
          <span
            aria-hidden
            className="relative h-4 w-4 shrink-0 text-zacht"
          >
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
            <span
              className={cn(
                "absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-zacht",
                open && "scale-y-0",
              )}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id={id}
            key="antwoord"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[58ch] pb-6 text-[16px] leading-relaxed text-zacht">{antwoord}</p>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Vragen() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Sectie id="vragen" className="bg-wit">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectieKop label={vragen.label} kop={vragen.kop} intro={vragen.intro} />
          </div>
          <ul className="border-t border-nevel lg:col-span-8">
            {vragen.lijst.map((v, i) => (
              <Vraag
                key={v.vraag}
                vraag={v.vraag}
                antwoord={v.antwoord}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </ul>
        </div>
      </Container>
    </Sectie>
  );
}
