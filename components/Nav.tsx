"use client";

import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  // Geen scroll achter het open menu.
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [open, lenis]);

  useMotionValueEvent(scrollY, "change", (y) => {
    const vorige = scrollY.getPrevious() ?? 0;
    setGescrold(y > 8);
    // Op mobiel blijft de nav altijd staan: de knop is daar de vaste weg naar het formulier.
    if (y < 80 || window.innerWidth < 768) {
      setVerborgen(false);
      return;
    }
    const delta = y - vorige;
    if (delta > 2) setVerborgen(true);
    else if (delta < -2) setVerborgen(false);
  });

  return (
    <>
      <m.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
          gescrold || open
            ? "bg-schuim/80 shadow-[0_1px_0_0_var(--color-nevel)] backdrop-blur-md"
            : "bg-transparent",
        )}
        animate={{ y: verborgen && !reduced && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <nav
          aria-label="Hoofdmenu"
          className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          <AnkerLink
            href="/"
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

          <div className="flex items-center gap-2">
            {/* Vaste breedte: geen verschuiving als het lettertype wisselt. */}
          <KnopLink href="#aanmelden" className="h-10 min-w-[200px] px-5 text-[14px]">
              {site.cta}
            </KnopLink>
            <button
              type="button"
              aria-label={open ? "Menu sluiten" : "Menu openen"}
              aria-expanded={open}
              aria-controls="mobiel-menu"
              onClick={() => setOpen((o) => !o)}
              className="relative -mr-2 flex h-10 w-10 items-center justify-center rounded-full text-nacht transition-colors duration-150 hover:bg-nevel/60 active:scale-[0.98] md:hidden"
            >
              <span
                aria-hidden
                className={cn(
                  "absolute h-px w-[18px] bg-current transition-transform duration-300 ease-zacht",
                  open ? "rotate-45" : "-translate-y-[4px]",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute h-px w-[18px] bg-current transition-transform duration-300 ease-zacht",
                  open ? "-rotate-45" : "translate-y-[4px]",
                )}
              />
            </button>
          </div>
        </nav>
      </m.header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobiel-menu"
            key="menu"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-schuim/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-1 px-5 pb-24">
              {nav.map((item) => (
                <li key={item.href}>
                  <AnkerLink
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-kop text-[34px] font-light leading-tight text-nacht transition-colors duration-150 hover:text-gracht"
                  >
                    {item.label}
                  </AnkerLink>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
