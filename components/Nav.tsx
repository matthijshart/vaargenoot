"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { AnkerLink } from "./ui/AnkerLink";
import { KnopLink } from "./ui/Knop";

/**
 * Sticky nav. Doorschijnend met blur na 8px scroll,
 * verbergt zich bij omlaag scrollen en komt terug bij omhoog.
 */
export function Nav() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const [gescrold, setGescrold] = useState(false);
  const [verborgen, setVerborgen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const vorige = scrollY.getPrevious() ?? 0;
    setGescrold(y > 8);
    if (y < 80) {
      setVerborgen(false);
      return;
    }
    const delta = y - vorige;
    if (delta > 2) setVerborgen(true);
    else if (delta < -2) setVerborgen(false);
  });

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        gescrold
          ? "bg-schuim/80 shadow-[0_1px_0_0_var(--color-nevel)] backdrop-blur-md"
          : "bg-transparent",
      )}
      animate={{ y: verborgen && !reduced ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <nav
        aria-label="Hoofdmenu"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <AnkerLink
          href="#top"
          className="font-kop text-[22px] font-light tracking-tight text-nacht"
        >
          {site.naam}
        </AnkerLink>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <AnkerLink
                href={item.href}
                className="text-[15px] font-medium text-zacht transition-colors duration-150 hover:text-nacht"
              >
                {item.label}
              </AnkerLink>
            </li>
          ))}
        </ul>

        <KnopLink href="#aanmelden" className="px-5 py-2.5 text-[14px]">
          {site.ctaKort}
        </KnopLink>
      </nav>
    </motion.header>
  );
}
