"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sectie met de enige beweging op de site: een fade met 12 px verschuiving
 * bij het inscrollen, 400 ms, één keer. Staat de sectie al in beeld bij
 * laden, dan gebeurt er niets. Zonder JavaScript is alles zichtbaar.
 *
 * Toon `wit` staat gewoon op de pagina. Toon `room` en `nacht` worden een
 * grote afgeronde kaart binnen de paginamarge, met de inhoud erin.
 */
export function Sectie({
  id,
  children,
  className,
  toon = "wit",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  toon?: "wit" | "room" | "nacht";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add("onthul");
    const kijker = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("zichtbaar");
          kijker.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    kijker.observe(el);
    return () => kijker.disconnect();
  }, []);

  if (toon === "wit") {
    return (
      <section ref={ref} id={id} className={cn("scroll-mt-20 py-20 md:py-28 lg:py-36", className)}>
        {children}
      </section>
    );
  }

  return (
    <section ref={ref} id={id} className={cn("scroll-mt-20 px-3 py-2 md:px-5 md:py-3.5", className)}>
      <div
        className={cn(
          "mx-auto max-w-[1360px] rounded-kaart px-5 py-16 md:px-16 md:py-24 lg:py-28 [&>div]:px-0",
          toon === "room" ? "bg-room" : "bg-nacht text-wit",
        )}
      >
        {children}
      </div>
    </section>
  );
}
