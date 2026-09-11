"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menu } from "@/content/menu";
import { taalUitPad, wissel } from "@/lib/taal";
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
  const taal = taalUitPad(pad);
  const { cta, nav, site, ui } = menu(taal);
  const ander = wissel(pad);

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

  return (
    <header
      className={cn(
        "niet-printen fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-200",
        gescrold || open ? "border-b border-lijn bg-wit" : "border-b border-transparent bg-wit/80 backdrop-blur-sm",
      )}
    >
      <nav aria-label={ui.hoofdmenu} className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-10">
          <Link href={taal === "nl" ? "/" : "/en"} className="kop text-[20px] tracking-[-0.03em] md:text-[24px]">
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
                  pad === item.href ? "text-antraciet" : "text-grijs hover:text-antraciet",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-5">
          <Link
            href={ander.href}
            hrefLang={ander.taal}
            aria-label={`${ui.taal}: ${ander.label}`}
            className="hidden text-[15px] font-medium text-grijs transition-colors duration-200 hover:text-antraciet lg:inline"
          >
            {ander.label}
          </Link>
          <Link href={cta.reserveer.href} className="hidden text-[15px] font-medium text-antraciet transition-colors duration-200 hover:text-grijs md:inline">
            {cta.reserveer.label}
          </Link>
          <KnopLink href={cta.proefvaren.href} className="h-9 px-4 text-[14px] sm:h-10 sm:px-5 sm:text-[15px]">
            {cta.proefvaren.label}
          </KnopLink>
          <button
            type="button"
            aria-label={open ? ui.menuDicht : ui.menuOpen}
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
          {[...nav, cta.reserveer, { label: ander.label, href: ander.href }].map((item) => (
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
