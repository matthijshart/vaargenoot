"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cta, nav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { KnopLink } from "./ui/Knop";

/**
 * Sticky navigatie: transparant bovenaan, wit met een dunne onderlijn
 * zodra je scrolt. Op mobiel een eenvoudig menu onder de balk.
 */
export function Nav() {
  const [gescrold, setGescrold] = useState(false);
  const [open, setOpen] = useState(false);
  const pad = usePathname();

  useEffect(() => {
    const lees = () => setGescrold(window.scrollY > 8);
    const eerste = requestAnimationFrame(lees);
    window.addEventListener("scroll", lees, { passive: true });
    return () => {
      cancelAnimationFrame(eerste);
      window.removeEventListener("scroll", lees);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Bovenaan de voorpagina staat de nav op de foto: wit, zonder achtergrond.
  const opFoto = pad === "/" && !gescrold && !open;

  return (
    <header
      className={cn(
        "niet-printen fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-200",
        gescrold || open ? "border-b border-lijn bg-wit text-antraciet" : "border-b border-transparent bg-transparent",
        opFoto && "text-wit",
      )}
    >
      <nav aria-label="Hoofdmenu" className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="kop text-[26px] text-current">
          {site.naam}
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pad === item.href ? "page" : undefined}
                className={cn(
                  "text-[15px] font-medium transition-colors duration-200",
                  opFoto ? "text-wit/80 hover:text-wit" : pad === item.href ? "text-antraciet" : "text-grijs hover:text-antraciet",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-5">
          <Link href={cta.reserveer.href} className={cn("hidden text-[15px] font-medium md:inline", opFoto ? "text-wit/90 hover:text-wit" : "text-blauw hover:text-blauw-donker")}>
            {cta.reserveer.label}
          </Link>
          <KnopLink href={cta.proefvaren.href} variant={opFoto ? "licht" : "blauw"} className="h-10 px-4 text-[15px] sm:px-5">
            {cta.proefvaren.label}
          </KnopLink>
          <button
            type="button"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((o) => !o)}
            className="relative -mr-2 flex h-10 w-10 items-center justify-center rounded-knop lg:hidden"
          >
            <span aria-hidden className={cn("absolute h-px w-[18px] bg-current transition-transform duration-300", open ? "rotate-45" : "-translate-y-[4px]")} />
            <span aria-hidden className={cn("absolute h-px w-[18px] bg-current transition-transform duration-300", open ? "-rotate-45" : "translate-y-[4px]")} />
          </button>
        </div>
      </nav>

      <div
        id="mobiel-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-lijn bg-wit lg:hidden"
      >
        <ul className="mx-auto flex max-w-[1200px] flex-col px-5 py-4">
          {[...nav, cta.reserveer].map((item) => (
            <li key={item.href} className="border-b border-lijn">
              <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 text-[22px] font-medium">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
