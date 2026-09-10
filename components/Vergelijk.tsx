import { vergelijk } from "@/content/vergelijk";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

/**
 * Kopen, leasen of deel-eigenaar. Op desktop een tabel met de kolom van
 * Sloepmaten uitgelicht, op mobiel drie kaarten onder elkaar met
 * Sloepmaten bovenaan.
 */
export function Vergelijk() {
  const { kolommen, rijen, wij } = vergelijk;
  const volgorde = [wij, ...kolommen.map((_, i) => i).filter((i) => i !== wij)];

  return (
    <Sectie id="vergelijking">
      <Container>
        <SectieKop label={vergelijk.label} kop={vergelijk.kop} intro={vergelijk.intro} />

        {/* Desktop: tabel */}
        <div className="mt-12 hidden md:block lg:mt-16">
          <table className="w-full border-collapse text-[15px]">
            <thead>
              <tr className="border-b border-nevel">
                <th className="w-[9rem] py-4 pr-6 text-left align-bottom text-[13px] font-medium text-zacht" scope="col" />
                {kolommen.map((k, i) => (
                  <th
                    key={k}
                    scope="col"
                    className={cn(
                      "py-4 pr-6 text-left align-bottom font-kop text-[22px] font-light leading-tight text-nacht",
                      i === wij && "rounded-t-2xl bg-wit px-5",
                    )}
                  >
                    {i === wij && <span aria-hidden className="mb-3 block h-px w-6 bg-messing" />}
                    {k}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rijen.map((rij, r) => (
                <tr key={rij.label} className="border-b border-nevel">
                  <th scope="row" className="py-4 pr-6 text-left align-top text-[14px] font-medium text-zacht">
                    {rij.label}
                  </th>
                  {rij.waarden.map((w, i) => (
                    <td
                      key={i}
                      className={cn(
                        "py-4 pr-6 align-top leading-snug",
                        i === wij ? "bg-wit px-5 font-medium text-nacht" : "text-inkt",
                        i === wij && r === rijen.length - 1 && "rounded-b-2xl",
                      )}
                    >
                      {w}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobiel: kaarten */}
        <div className="mt-10 grid gap-4 md:hidden">
          {volgorde.map((i) => (
            <div
              key={kolommen[i]}
              className={cn(
                "rounded-2xl border p-5",
                i === wij ? "border-lucht bg-wit" : "border-nevel bg-schuim",
              )}
            >
              {i === wij && <span aria-hidden className="mb-3 block h-px w-6 bg-messing" />}
              <h3 className="text-[24px] text-nacht">{kolommen[i]}</h3>
              <dl className="mt-4 divide-y divide-nevel border-t border-nevel">
                {rijen.map((rij) => (
                  <div key={rij.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3">
                    <dt className="text-[14px] font-medium text-zacht">{rij.label}</dt>
                    <dd className={cn("text-[15px] leading-snug", i === wij ? "font-medium text-nacht" : "text-inkt")}>
                      {rij.waarden[i]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-[62ch] text-[13px] leading-relaxed text-zacht">{vergelijk.onder}</p>
      </Container>
    </Sectie>
  );
}
