"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Smooth scroll voor de hele pagina.
 * Lenis schakelt zichzelf uit bij prefers-reduced-motion.
 * LazyMotion laadt alleen het deel van framer-motion dat de site gebruikt.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        respectReducedMotion: true,
      }}
    >
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </ReactLenis>
  );
}
