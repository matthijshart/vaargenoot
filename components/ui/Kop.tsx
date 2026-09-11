import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Tekst } from "./Tekst";

/**
 * Sectiekop: één boodschap per scherm. Optioneel een kleine regel erboven
 * en één alinea eronder. Altijd links uitgelijnd, op hetzelfde raster.
 */
export function Kop({
  boven,
  kop,
  intro,
  niveau = 2,
  className,
  children,
}: {
  boven?: string;
  kop: string;
  intro?: string;
  niveau?: 1 | 2;
  className?: string;
  children?: ReactNode;
}) {
  const Tag = niveau === 1 ? "h1" : "h2";
  return (
    <div className={cn("max-w-[44rem]", className)}>
      {boven && <p className="label mb-5 text-blauw">{boven}</p>}
      <Tag
        className={cn(
          niveau === 1
            ? "text-[46px] md:text-[72px] lg:text-[84px]"
            : "text-[38px] md:text-[52px] lg:text-[60px]",
        )}
      >
        {kop}
      </Tag>
      {intro && (
        <p className={"maat mt-5 text-[18px] leading-relaxed text-grijs md:mt-6 md:text-[20px]"}>
          <Tekst>{intro}</Tekst>
        </p>
      )}
      {children}
    </div>
  );
}
