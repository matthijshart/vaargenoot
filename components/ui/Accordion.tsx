"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Tekst } from "./Tekst";

export type AccordionItem = { vraag: string; antwoord: string };

function Item({ vraag, antwoord, open, onToggle, Kop }: AccordionItem & { open: boolean; onToggle: () => void; Kop: "h2" | "h3" }) {
  const id = useId();
  return (
    <li className="border-b border-lijn">
      <Kop className="font-sans text-[17px] font-medium tracking-normal md:text-[18px]">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-200 hover:text-blauw"
        >
          <span>{vraag}</span>
          <span aria-hidden className="relative mt-2 h-4 w-4 shrink-0 text-grijs">
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
            <span
              className={cn(
                "absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300",
                open && "scale-y-0",
              )}
            />
          </span>
        </button>
      </Kop>
      <div id={id} className="paneel" data-open={open} aria-hidden={!open}>
        <div>
          <p className="maat pb-6 leading-relaxed text-grijs">
            <Tekst>{antwoord}</Tekst>
          </p>
        </div>
      </div>
    </li>
  );
}

/** Accordion met dunne lijnen, één item tegelijk open. `niveau` is het kopniveau van de vragen. */
export function Accordion({
  items,
  eersteOpen = true,
  className,
  niveau = 3,
}: {
  items: AccordionItem[];
  eersteOpen?: boolean;
  className?: string;
  niveau?: 2 | 3;
}) {
  const [open, setOpen] = useState<number | null>(eersteOpen ? 0 : null);
  const Kop = niveau === 2 ? "h2" : "h3";
  return (
    <ul className={cn("border-t border-lijn", className)}>
      {items.map((item, i) => (
        <Item key={item.vraag} {...item} Kop={Kop} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
      ))}
    </ul>
  );
}
