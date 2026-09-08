import { cn } from "@/lib/utils";

export function SectieKop({
  label,
  kop,
  intro,
  donker = false,
  className,
}: {
  label?: string;
  kop: string;
  intro?: string;
  donker?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {label && (
        <p className={cn("mb-4 text-[14px] font-medium", donker ? "text-lucht" : "text-gracht")}>
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-[34px] sm:text-[44px] lg:text-[52px]",
          donker ? "text-wit" : "text-nacht",
        )}
      >
        {kop}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 max-w-[42ch] text-[17px] leading-relaxed sm:text-[19px]",
            donker ? "text-lucht" : "text-zacht",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
