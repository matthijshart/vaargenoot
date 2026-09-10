"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Tekst } from "./Tekst";

export type AccordionItem = { vraag: string; antwoord: string };

function Item({ vraag, antwoord, open, onToggle }: AccordionItem & { open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <li className="border-b border-lijn">
      <h3 className="text-[17px] font-medium md:text-[18px]">
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
      </h3>
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

/** Accordion met dunne lijnen, één item tegelijk open. */
export function Accordion({ items, eersteOpen = true, className }: { items: AccordionItem[]; eersteOpen?: boolean; className?: string }) {
  const [open, setOpen] = useState<number | null>(eersteOpen ? 0 : null);
  return (
    <ul className={cn("border-t border-lijn", className)}>
      {items.map((item, i) => (
        <Item key={item.vraag} {...item} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
      ))}
    </ul>
  );
}
