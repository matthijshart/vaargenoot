import { cn } from "@/lib/utils";

export type Punt = { kop: string; tekst: string };

/**
 * Punten. Op mobiel een rustige lijst onder elkaar met dunne lijnen,
 * vanaf sm kaarten in een raster. Op desktop komt een kaart bij hover
 * licht omhoog en groeit het messing streepje.
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
        "divide-y divide-nevel border-y border-nevel",
        "sm:grid sm:gap-4 sm:divide-y-0 sm:border-0",
        kolommen === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
        className,
      )}
    >
      {punten.map((p) => (
        <li
          key={p.kop}
          className={cn(
            "group grid grid-cols-[1.5rem_1fr] items-baseline gap-x-3 py-4",
            "sm:block sm:rounded-2xl sm:border sm:border-nevel sm:p-6 sm:transition-[transform,box-shadow,border-color] sm:duration-300 sm:ease-zacht",
            "md:hover:-translate-y-1 md:hover:border-lucht md:hover:shadow-[0_18px_40px_-24px_rgba(11,31,51,0.35)]",
            toon === "wit" ? "sm:bg-wit" : "sm:bg-schuim",
          )}
        >
          <span
            aria-hidden
            className="block h-px w-4 translate-y-[-3px] bg-messing sm:w-6 sm:translate-y-0 sm:transition-[width] sm:duration-300 sm:ease-zacht sm:group-hover:w-10"
          />
          <div className="sm:mt-4">
            <h3 className="font-sans text-[16px] font-medium text-nacht">{p.kop}</h3>
            <p className="mt-1 text-[14px] leading-relaxed text-zacht sm:mt-1.5 sm:text-[15px]">{p.tekst}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
