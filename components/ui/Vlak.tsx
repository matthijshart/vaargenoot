import { cn } from "@/lib/utils";
import { Tekst } from "./Tekst";

/** Neutraal vlak waar nog beeld ontbreekt. Geen placeholderfoto. */
export function Vlak({ wat, ratio = "4 / 3", className }: { wat: string; ratio?: string; className?: string }) {
  return (
    <div
      className={cn("flex items-end rounded-kaart border border-lijn bg-room p-4", className)}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Beeld volgt: ${wat}`}
    >
      <p className="text-[14px] text-grijs">
        <Tekst>{`[INVULLEN: beeld, ${wat}]`}</Tekst>
      </p>
    </div>
  );
}
