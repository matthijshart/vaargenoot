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
    lenis.scrollTo(doel as HTMLElement, { offset: -72 });
    history.replaceState(null, "", href);
  }

  return (
    <a href={href} onClick={klik} {...rest}>
      {children}
    </a>
  );
}
