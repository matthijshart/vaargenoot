import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const basis =
  "inline-flex h-12 items-center justify-center rounded-knop bg-blauw px-7 text-[16px] font-medium text-wit whitespace-nowrap transition-[background-color,transform] duration-200 hover:bg-blauw-donker active:scale-[0.98] disabled:opacity-60";

/** De enige primaire knop: blauw met witte tekst. */
export function Knop({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(basis, className)} {...rest} />;
}

export function KnopLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <Link href={href} className={cn(basis, className)}>
      {children}
    </Link>
  );
}

/** Secundaire actie: tekstlink met een dunne pijl. */
export function PijlLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 py-3 text-[16px] font-medium text-blauw transition-colors duration-200 hover:text-blauw-donker",
        className,
      )}
    >
      {children}
      <Pijl />
    </Link>
  );
}

export function Pijl({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={cn("h-[18px] w-[18px] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 10h13M11 4.5 16.5 10 11 15.5" />
    </svg>
  );
}
