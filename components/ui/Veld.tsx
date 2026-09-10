import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const veldStijl =
  "w-full rounded-knop border border-lijn bg-wit px-4 py-3.5 text-[17px] text-antraciet transition-colors duration-200 placeholder:text-grijs/60 hover:border-grijs/60 focus:border-blauw focus:outline-none focus-visible:ring-2 focus-visible:ring-blauw/30 disabled:opacity-60";

export function Label({ htmlFor, children, optioneel }: { htmlFor: string; children: ReactNode; optioneel?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[15px] font-medium">
      {children}
      {optioneel && <span className="font-normal text-grijs"> (optioneel)</span>}
    </label>
  );
}

export function Fout({ id, tekst }: { id: string; tekst?: string }) {
  if (!tekst) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-[14px] text-blauw">
      {tekst}
    </p>
  );
}

type InvoerProps = InputHTMLAttributes<HTMLInputElement> & { label: string; naam: string; fout?: string; optioneel?: boolean };

export function Invoer({ label, naam, fout, optioneel, className, ...rest }: InvoerProps) {
  const id = `veld-${naam}`;
  return (
    <div className={className}>
      <Label htmlFor={id} optioneel={optioneel}>
        {label}
      </Label>
      <input
        id={id}
        name={naam}
        aria-invalid={fout ? true : undefined}
        aria-describedby={fout ? `${id}-fout` : undefined}
        className={cn(veldStijl, fout && "border-blauw")}
        {...rest}
      />
      <Fout id={`${id}-fout`} tekst={fout} />
    </div>
  );
}

type KeuzeProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  naam: string;
  fout?: string;
  optioneel?: boolean;
  opties: { waarde: string; label: string; uit?: boolean }[];
};

const pijl =
  "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22none%22 stroke=%22%235F6670%22 stroke-width=%221.5%22><path d=%22M5 8l5 5 5-5%22/></svg>')] bg-[length:20px_20px] bg-[position:right_14px_center] bg-no-repeat pr-11";

export function Keuze({ label, naam, fout, optioneel, opties, className, ...rest }: KeuzeProps) {
  const id = `veld-${naam}`;
  return (
    <div className={className}>
      <Label htmlFor={id} optioneel={optioneel}>
        {label}
      </Label>
      <select
        id={id}
        name={naam}
        aria-invalid={fout ? true : undefined}
        aria-describedby={fout ? `${id}-fout` : undefined}
        className={cn(veldStijl, pijl, fout && "border-blauw")}
        {...rest}
      >
        {opties.map((o) => (
          <option key={o.waarde} value={o.waarde} disabled={o.uit}>
            {o.label}
          </option>
        ))}
      </select>
      <Fout id={`${id}-fout`} tekst={fout} />
    </div>
  );
}
