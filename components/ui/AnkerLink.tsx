"use client";

import { useLenis } from "lenis/react";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/** Ankerlink die via Lenis scrollt in plaats van te springen. */
export function AnkerLink({ href, children, onClick, ...rest }: Props) {
  const lenis = useLenis();

  function klik(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (!href.startsWith("#") || !lenis) return;
    const doel = document.querySelector(href);
    if (!doel) return;
    e.preventDefault();
    // Respecteer de scroll-margin-top van het doel, net als een gewone ankerlink.
    const marge = parseInt(getComputedStyle(doel).scrollMarginTop, 10) || 0;
    lenis.scrollTo(doel as HTMLElement, { offset: -marge });
    history.replaceState(null, "", href);
  }

  return (
    <a href={href} onClick={klik} {...rest}>
      {children}
    </a>
  );
}
