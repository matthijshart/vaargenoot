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

/** Dun vinkje, alleen waar het betekenis draagt: iets dat je krijgt of kunt. */
export function Vinkje({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={cn("h-[18px] w-[18px] shrink-0 text-blauw", className)} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

/** Lijst met dunne lijnen, zonder labels. Met `vinkjes` een vinkje voor elk punt. */
export function Lijst({
  items,
  className,
  kolommen = 1,
  vinkjes = false,
}: {
  items: string[];
  className?: string;
  kolommen?: 1 | 2;
  vinkjes?: boolean;
}) {
  return (
    <ul className={cn("divide-y divide-lijn border-y border-lijn", kolommen === 2 && "sm:grid sm:grid-cols-2 sm:gap-x-10 sm:divide-y-0 sm:border-y-0", className)}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-start gap-3 py-3.5 text-[16px]", kolommen === 2 && "sm:border-b sm:border-lijn")}>
          {vinkjes && <Vinkje className="mt-[3px]" />}
          <span>
            <Tekst>{item}</Tekst>
          </span>
        </li>
      ))}
    </ul>
  );
}
