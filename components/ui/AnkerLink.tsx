"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/**
 * Link die binnen de pagina via Lenis scrolt en anders gewoon navigeert.
 * "#id" en "/#id" scrollen als het doel op deze pagina staat.
 */
export function AnkerLink({ href, children, onClick, ...rest }: Props) {
  const lenis = useLenis();

  function klik(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || !lenis) return;
    const hash = href.startsWith("#") ? href : href.startsWith("/#") ? href.slice(1) : null;
    if (!hash) return;
    const doel = document.querySelector(hash);
    if (!doel) return;
    e.preventDefault();
    // Respecteer de scroll-margin-top van het doel, net als een gewone ankerlink.
    const marge = parseInt(getComputedStyle(doel).scrollMarginTop, 10) || 0;
    // Even wachten zodat een sluitend menu de scroll weer vrijgeeft.
    requestAnimationFrame(() => lenis.scrollTo(doel as HTMLElement, { offset: -marge, force: true }));
    history.replaceState(null, "", hash);
  }

  return (
    <Link href={href} onClick={klik} {...rest}>
      {children}
    </Link>
  );
}
