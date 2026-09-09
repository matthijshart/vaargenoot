import { cn } from "@/lib/utils";

export type Punt = { kop: string; tekst: string };

/**
 * Punten als kaarten. Op mobiel een veegbare rij met snap, vanaf sm een
 * raster. Op desktop komt een kaart bij hover licht omhoog en groeit het
 * messing streepje.
 */
export function PuntKaarten({
  punten,
  kolommen = 3,
  toon = "schuim",
  className,
}: {
  punten: Punt[];
  kolommen?: 2 | 3;
  /** Kaartkleur: schuim op een witte sectie, wit op een schuim-sectie. */
  toon?: "schuim" | "wit";
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "sm:mx-0 sm:grid sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0",
        kolommen === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
        className,
      )}
    >
      {punten.map((p) => (
        <li
          key={p.kop}
          className={cn(
            "group w-[74vw] shrink-0 snap-start rounded-2xl border border-nevel p-5 transition-[transform,box-shadow,border-color] duration-300 ease-zacht sm:w-auto sm:p-6",
            "md:hover:-translate-y-1 md:hover:border-lucht md:hover:shadow-[0_18px_40px_-24px_rgba(11,31,51,0.35)]",
            toon === "wit" ? "bg-wit" : "bg-schuim",
          )}
        >
          <span aria-hidden className="block h-px w-6 bg-messing transition-[width] duration-300 ease-zacht group-hover:w-10" />
          <h3 className="mt-4 font-sans text-[16px] font-medium text-nacht">{p.kop}</h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-zacht sm:text-[15px]">{p.tekst}</p>
        </li>
      ))}
    </ul>
  );
}
