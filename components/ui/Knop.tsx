import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnkerLink } from "./AnkerLink";

type Variant = "primair" | "licht" | "omlijnd";

type Maat = "normaal" | "klein";

const basis =
  "inline-flex items-center justify-center rounded-full font-medium leading-none transition-[background-color,color,transform,border-color,box-shadow] duration-200 ease-zacht active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100 whitespace-nowrap";

const maten: Record<Maat, string> = {
  normaal: "h-12 px-7 text-[15px]",
  klein: "h-10 px-4 text-[14px] sm:px-5",
};

const varianten: Record<Variant, string> = {
  primair: "bg-nacht text-wit hover:bg-gracht hover:shadow-[0_10px_24px_-14px_rgba(11,31,51,0.6)]",
  licht: "bg-wit text-nacht hover:bg-lucht hover:shadow-[0_10px_24px_-14px_rgba(0,0,0,0.5)]",
  omlijnd: "border border-nevel text-nacht hover:border-gracht hover:text-gracht",
};

export function Knop({
  variant = "primair",
  maat = "normaal",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; maat?: Maat }) {
  return <button className={cn(basis, maten[maat], varianten[variant], className)} {...rest} />;
}

export function KnopLink({
  href,
  variant = "primair",
  maat = "normaal",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  maat?: Maat;
  className?: string;
  children: ReactNode;
}) {
  return (
    <AnkerLink href={href} className={cn(basis, maten[maat], varianten[variant], className)}>
      {children}
    </AnkerLink>
  );
}

/** Tekstlink met onderstreping die op hover van kleur wisselt. */
export function TekstLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <AnkerLink
      href={href}
      className={cn(
        "inline-flex items-center gap-1 py-3 font-medium text-gracht underline decoration-lucht decoration-1 underline-offset-[6px] transition-colors duration-150 hover:text-nacht hover:decoration-gracht active:scale-[0.98]",
        className,
      )}
    >
      {children}
    </AnkerLink>
  );
}
