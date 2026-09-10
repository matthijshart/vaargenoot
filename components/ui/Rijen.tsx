import { cn } from "@/lib/utils";
import { Tekst } from "./Tekst";

/** Definitielijst met dunne lijnen: label links, waarde rechts. */
export function Rijen({
  rijen,
  className,
  labelBreedte = "9rem",
}: {
  rijen: { label: string; waarde: string }[];
  className?: string;
  labelBreedte?: string;
}) {
  return (
    <dl className={cn("divide-y divide-lijn border-y border-lijn", className)}>
      {rijen.map((r) => (
        <div key={r.label} className="grid gap-x-6 gap-y-1 py-3.5 sm:grid-cols-[var(--label)_1fr]" style={{ "--label": labelBreedte } as React.CSSProperties}>
          <dt className="text-[15px] text-grijs">{r.label}</dt>
          <dd className="text-[16px] leading-snug">
            <Tekst>{r.waarde}</Tekst>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Lijst met dunne lijnen, zonder labels. */
export function Lijst({ items, className, kolommen = 1 }: { items: string[]; className?: string; kolommen?: 1 | 2 }) {
  return (
    <ul className={cn("divide-y divide-lijn border-y border-lijn", kolommen === 2 && "sm:grid sm:grid-cols-2 sm:gap-x-10 sm:divide-y-0 sm:border-y-0", className)}>
      {items.map((item) => (
        <li key={item} className={cn("py-3 text-[16px]", kolommen === 2 && "sm:border-b sm:border-lijn")}>
          <Tekst>{item}</Tekst>
        </li>
      ))}
    </ul>
  );
}
