"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { sectieVariants, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Sectie die één keer opkomt bij in beeld komen.
 * Alleen de sectie beweegt, nooit de losse onderdelen.
 */
export function Sectie({
  id,
  children,
  className,
  donker = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  donker?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <m.section
      id={id}
      className={cn(
        "scroll-mt-16 py-20 sm:py-28 lg:py-32",
        donker ? "bg-nacht text-wit" : "bg-schuim text-inkt",
        className,
      )}
      initial={reduced ? false : "verborgen"}
      whileInView="zichtbaar"
      viewport={viewportOnce}
      variants={sectieVariants}
    >
      {children}
    </m.section>
  );
}
