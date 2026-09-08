import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnkerLink } from "./AnkerLink";

type Variant = "primair" | "licht" | "omlijnd";

const basis =
  "inline-flex h-11 items-center justify-center rounded-full px-6 text-[15px] font-medium leading-none transition-[background-color,color,transform,border-color] duration-150 ease-zacht active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100 whitespace-nowrap";

const varianten: Record<Variant, string> = {
  primair: "bg-nacht text-wit hover:bg-gracht",
  licht: "bg-wit text-nacht hover:bg-lucht",
  omlijnd: "border border-nevel text-nacht hover:border-gracht hover:text-gracht",
};

export function Knop({
  variant = "primair",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={cn(basis, varianten[variant], className)} {...rest} />;
}

export function KnopLink({
  href,
  variant = "primair",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <AnkerLink href={href} className={cn(basis, varianten[variant], className)}>
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
