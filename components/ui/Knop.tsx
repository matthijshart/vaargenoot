import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "donker" | "licht" | "wit";

const basis =
  "inline-flex h-12 items-center justify-center rounded-knop px-6 text-[16px] font-medium tracking-[-0.01em] whitespace-nowrap transition-[background-color,color,transform] duration-200 active:scale-[0.98] disabled:opacity-60";

const varianten: Record<Variant, string> = {
  donker: "bg-antraciet text-wit hover:bg-black",
  licht: "bg-room text-antraciet hover:bg-lijn",
  wit: "bg-wit text-antraciet hover:bg-room",
};

/** Pilknop. `donker` is de primaire actie, `licht` de tweede ernaast, `wit` op een donkere band. */
export function Knop({ className, variant = "donker", ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={cn(basis, varianten[variant], className)} {...rest} />;
}

export function KnopLink({ href, className, children, variant = "donker" }: { href: string; className?: string; children: ReactNode; variant?: Variant }) {
  return (
    <Link href={href} className={cn(basis, varianten[variant], className)}>
      {children}
    </Link>
  );
}

/** Tekstlink met een dunne pijl, voor een link in of onder een blok. `licht` op een donkere band. */
export function PijlLink({ href, className, children, licht = false }: { href: string; className?: string; children: ReactNode; licht?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 py-3 text-[16px] font-medium transition-colors duration-200",
        licht ? "text-wit hover:text-wit/80" : "text-antraciet hover:text-grijs",
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
