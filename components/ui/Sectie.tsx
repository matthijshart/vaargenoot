"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sectie met de enige beweging op de site: een fade met 12 px verschuiving
 * bij het inscrollen, 400 ms, één keer. Staat de sectie al in beeld bij
 * laden, dan gebeurt er niets. Zonder JavaScript is alles zichtbaar.
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
  toon?: "wit" | "room";
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

  return (
    <section
      ref={ref}
      id={id}
      className={cn("scroll-mt-20 py-20 md:py-32 lg:py-40", toon === "room" && "bg-room", className)}
    >
      {children}
    </section>
  );
}
