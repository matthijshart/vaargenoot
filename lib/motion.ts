import type { Transition, Variants } from "framer-motion";

/** Eén easing voor de hele site. */
export const EASE = [0.2, 0.7, 0.2, 1] as const;

export const DUUR = 0.7;

export const overgang: Transition = { duration: DUUR, ease: EASE };

/** Sectie komt één keer op bij in beeld komen. */
export const sectieVariants: Variants = {
  verborgen: { opacity: 0, y: 16 },
  zichtbaar: { opacity: 1, y: 0, transition: overgang },
};

/** Hero: kinderen komen na elkaar op. */
export const staggerVariants: Variants = {
  verborgen: {},
  zichtbaar: { transition: { staggerChildren: 0.08 } },
};

export const itemVariants: Variants = {
  verborgen: { opacity: 0, y: 16 },
  zichtbaar: { opacity: 1, y: 0, transition: overgang },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
