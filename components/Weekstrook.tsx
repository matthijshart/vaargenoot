import { stappen } from "@/content/stappen";
import { cn } from "@/lib/utils";

/** Kleine illustratie van het reserveren: één vakje "jij". */
export function Weekstrook() {
  const { dagen, dagdelen, jij, bezet } = stappen.week;
  const isBezet = (r: number, k: number) => bezet.some(([br, bk]) => br === r && bk === k);

  return (
    <div
      aria-label="Voorbeeld van een week in de app"
      className="rounded-xl border border-nevel bg-wit p-3 text-[11px] text-zacht"
    >
      <div className="grid grid-cols-[3.4rem_repeat(7,1fr)] gap-1">
        <div />
        {dagen.map((d) => (
          <div key={d} className="pb-1 text-center">
            {d}
          </div>
        ))}
        {dagdelen.map((dd, r) => (
          <div key={dd} className="contents">
            <div className="flex items-center">{dd}</div>
            {dagen.map((d, k) => {
              const mij = r === jij.dagdeel && k === jij.dag;
              return (
                <div
                  key={d + dd}
                  className={cn(
                    "flex h-6 items-center justify-center rounded-[4px] border",
                    mij
                      ? "border-lucht bg-lucht font-semibold text-nacht"
                      : isBezet(r, k)
                        ? "border-nevel bg-nevel"
                        : "border-nevel bg-wit",
                  )}
                >
                  {mij ? "jij" : ""}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
