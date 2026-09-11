"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Beeld = { src: StaticImageData; alt: string; positie?: string; /** "Foto 1 van 3" of "Photo 1 of 3". */ knop: string };

/**
 * Diavoorstelling die het hele kader vult. Foto twee en drie laden pas bij
 * de eerste beweging van de bezoeker (muis, scroll of aanraking), zodat de
 * eerste foto de LCP blijft en de pagina rustig staat tot er iemand is.
 * Daarna wisselen de foto's elke 3,5 seconde met een overvloeiing van 0,7
 * seconde. Stippen om zelf te kiezen. Bij prefers-reduced-motion blijft de
 * eerste foto staan. De ouder bepaalt de maat en is `relative`.
 */
export function Diashow({
  beelden,
  interval = 3500,
  naLaden = 1200,
  stippen = "midden",
  label,
}: {
  beelden: Beeld[];
  interval?: number;
  naLaden?: number;
  stippen?: "midden" | "rechts";
  /** "Foto's" of "Photos". */
  label: string;
}) {
  const [actief, setActief] = useState(0);
  const [stil, setStil] = useState(false);
  const [klaar, setKlaar] = useState(false);

  useEffect(() => {
    let t = 0;
    const beginnen = () => {
      t = window.setTimeout(() => setKlaar(true), naLaden);
    };
    // Pas beginnen als de bezoeker er is: de foto's laden niet mee met de
    // eerste paint, en een pagina die alleen wordt gemeten blijft stil.
    const soorten = ["pointermove", "pointerdown", "scroll", "keydown", "touchstart"] as const;
    const wakker = () => {
      soorten.forEach((soort) => window.removeEventListener(soort, wakker));
      beginnen();
    };
    soorten.forEach((soort) => window.addEventListener(soort, wakker, { once: true, passive: true }));
    return () => {
      window.clearTimeout(t);
      soorten.forEach((soort) => window.removeEventListener(soort, wakker));
    };
  }, [naLaden]);

  useEffect(() => {
    if (!klaar || stil) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const volgende = () => setActief((i) => (i + 1) % beelden.length);
    let tik = 0;
    // Anderhalve seconde om de nieuwe foto's te laden voor de eerste wissel.
    const eerste = window.setTimeout(() => {
      volgende();
      tik = window.setInterval(volgende, interval);
    }, 1500);
    return () => {
      window.clearTimeout(eerste);
      window.clearInterval(tik);
    };
  }, [beelden.length, interval, klaar, stil]);

  return (
    <>
      {beelden.map(
        (b, i) =>
          (i === 0 || klaar) && (
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
          ),
      )}
      <div
        className={cn("absolute bottom-5 flex gap-1", stippen === "midden" ? "inset-x-0 justify-center" : "right-5 md:right-8")}
        role="tablist"
        aria-label={label}
      >
        {beelden.map((b, i) => (
          <button
            key={b.alt}
            type="button"
            role="tab"
            aria-selected={i === actief}
            aria-label={b.knop}
            onClick={() => {
              setActief(i);
              setStil(true);
            }}
            className="flex h-7 w-7 items-center justify-center"
          >
            <span
              className={cn(
                "block h-1.5 w-1.5 rounded-full transition-[background-color,transform] duration-300",
                i === actief ? "scale-125 bg-wit" : "bg-wit/50",
              )}
            />
          </button>
        ))}
      </div>
    </>
  );
}
