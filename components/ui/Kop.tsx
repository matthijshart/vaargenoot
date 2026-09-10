import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Tekst } from "./Tekst";

/**
 * Sectiekop: één boodschap per scherm. Optioneel een kleine regel erboven
 * en één alinea eronder. Gecentreerd of links.
 */
export function Kop({
  boven,
  kop,
  intro,
  midden = false,
  niveau = 2,
  className,
  children,
}: {
  boven?: string;
  kop: string;
  intro?: string;
  midden?: boolean;
  niveau?: 1 | 2;
  className?: string;
  children?: ReactNode;
}) {
  const Tag = niveau === 1 ? "h1" : "h2";
  return (
    <div className={cn("max-w-[44rem]", midden && "mx-auto text-center", className)}>
      {boven && <p className="mb-4 text-[15px] font-medium text-blauw">{boven}</p>}
      <Tag
        className={cn(
          niveau === 1
            ? "text-[40px] md:text-[64px] lg:text-[72px]"
            : "text-[32px] md:text-[44px] lg:text-[52px]",
        )}
      >
        {kop}
      </Tag>
      {intro && (
        <p className={cn("mt-5 text-[18px] leading-relaxed text-grijs md:mt-6 md:text-[20px]", midden ? "mx-auto max-w-[36rem]" : "maat")}>
          <Tekst>{intro}</Tekst>
        </p>
      )}
      {children}
    </div>
  );
}
