"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { menu } from "@/content/menu";
import { taalUitPad } from "@/lib/taal";
import { cn } from "@/lib/utils";
import { KnopLink } from "./ui/Knop";

/** Dunne blauwe lijn onder de nav die meegroeit met hoe ver je bent. */
export function Voortgang() {
  const balk = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = balk.current;
    if (!el) return;
    let raf = 0;
    const meet = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      el.style.transform = `scaleX(${p})`;
    };
    const plan = () => {
      if (!raf) raf = requestAnimationFrame(meet);
    };
    plan();
    window.addEventListener("scroll", plan, { passive: true });
    window.addEventListener("resize", plan);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", plan);
      window.removeEventListener("resize", plan);
    };
  }, []);
  return (
    <div aria-hidden className="niet-printen pointer-events-none fixed inset-x-0 top-16 z-50 h-0.5">
      <div ref={balk} className="h-full w-full origin-left bg-antraciet" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

const zonderBalk = ["/reserveer", "/proefvaren", "/aanbod", "/en/reserve", "/en/trial-trip", "/en/offer"];

/**
 * Vaste knoppenbalk onderin op de telefoon. Komt in beeld zodra je voorbij
 * de hero bent, en niet op de pagina's die zelf een formulier zijn.
 */
export function MobieleBalk() {
  const pad = usePathname();
  const { cta } = menu(taalUitPad(pad));
  const [zichtbaar, setZichtbaar] = useState(false);

  useEffect(() => {
    const lees = () => setZichtbaar(window.scrollY > 560);
    const eerste = requestAnimationFrame(lees);
    window.addEventListener("scroll", lees, { passive: true });
    return () => {
      cancelAnimationFrame(eerste);
      window.removeEventListener("scroll", lees);
    };
  }, []);

  if (zonderBalk.includes(pad)) return null;

  return (
    <div
      inert={!zichtbaar}
      className={cn(
        "niet-printen fixed inset-x-0 bottom-0 z-40 border-t border-lijn bg-wit/95 backdrop-blur-sm transition-transform duration-300 ease-out md:hidden",
        zichtbaar ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <Link href={cta.reserveer.href} className="text-[15px] font-medium text-antraciet">
          {cta.reserveer.label}
        </Link>
        <KnopLink href={cta.proefvaren.href} className="h-11 px-5 text-[15px]">
          {cta.proefvaren.label}
        </KnopLink>
      </div>
    </div>
  );
}
