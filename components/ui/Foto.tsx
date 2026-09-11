import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

/**
 * Foto in een vaste verhouding, met blur-placeholder en zonder verschuiving.
 * Alleen `priority` op de hero.
 */
export function Foto({
  src,
  alt,
  ratio = "4 / 3",
  sizes = "100vw",
  priority = false,
  className,
  positie,
}: {
  src: StaticImageData;
  alt: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** object-position, bijvoorbeeld "50% 60%". */
  positie?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-room", className)} style={{ aspectRatio: ratio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className="object-cover"
        style={positie ? { objectPosition: positie } : undefined}
      />
      {/* Hairline aan de binnenkant: de foto ligt in de pagina in plaats van erop. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-antraciet/10 ring-inset" />
    </div>
  );
}
