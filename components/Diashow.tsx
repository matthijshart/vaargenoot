"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Beeld = { src: StaticImageData; alt: string; positie?: string };

/**
 * Diavoorstelling voor de hero: de foto's wisselen elke 3,5 seconde met
 * een overvloeiing van 0,7 seconde. Drie stippen om zelf te kiezen. Bij
 * prefers-reduced-motion blijft de eerste foto staan.
 */
export function Diashow({ beelden, interval = 3500 }: { beelden: Beeld[]; interval?: number }) {
  const [actief, setActief] = useState(0);
  const [stil, setStil] = useState(false);
  // Foto twee en drie laden pas na de eerste paint, zodat de eerste foto de LCP blijft.
  const [klaar, setKlaar] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setKlaar(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (stil) return;
    const t = window.setInterval(() => setActief((i) => (i + 1) % beelden.length), interval);
    return () => window.clearInterval(t);
  }, [beelden.length, interval, stil]);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-room md:aspect-[16/7] md:rounded-[28px]">
      {beelden.map((b, i) => (i === 0 || klaar) && (
        <Image
          key={b.alt}
          src={b.src}
          alt={b.alt}
          fill
          sizes="100vw"
          priority={i === 0}
          placeholder="blur"
          aria-hidden={i !== actief}
          className={cn(
            "object-cover transition-opacity duration-[700ms] ease-out motion-reduce:transition-none",
            i === actief ? "opacity-100" : "opacity-0",
          )}
          style={b.positie ? { objectPosition: b.positie } : undefined}
        />
      ))}
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2" role="tablist" aria-label="Foto's">
        {beelden.map((b, i) => (
          <button
            key={b.alt}
            type="button"
            role="tab"
            aria-selected={i === actief}
            aria-label={`Foto ${i + 1} van ${beelden.length}`}
            onClick={() => {
              setActief(i);
              setStil(true);
            }}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={cn(
                "block h-1.5 w-1.5 rounded-full transition-[background-color,transform] duration-300",
                i === actief ? "scale-125 bg-wit" : "bg-wit/55",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
