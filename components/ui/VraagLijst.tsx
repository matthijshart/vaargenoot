"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export type VraagItem = { vraag: string; antwoord: string };

function Vraag({
  vraag,
  antwoord,
  open,
  onToggle,
}: VraagItem & {
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
          <span aria-hidden className="relative h-4 w-4 shrink-0 text-zacht">
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

/** Uitklapbare vragen, één tegelijk open. De eerste staat standaard open. */
export function VraagLijst({ lijst, className }: { lijst: VraagItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className={cn("border-t border-nevel", className)}>
      {lijst.map((v, i) => (
        <Vraag
          key={v.vraag}
          vraag={v.vraag}
          antwoord={v.antwoord}
          open={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </ul>
  );
}
