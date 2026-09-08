"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Smooth scroll voor de hele pagina.
 * Lenis schakelt zichzelf uit bij prefers-reduced-motion.
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
      {children}
    </ReactLenis>
  );
}
