"use client";

import Image, { type ImageProps, type StaticImageData } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "src" | "alt" | "placeholder"> & {
  src: StaticImageData;
  alt: string;
  /** Beeldverhouding van de omlijsting, bijvoorbeeld "4 / 3". */
  ratio?: string;
  className?: string;
  fotoClassName?: string;
};

/**
 * Foto in vaste verhouding, met blur-placeholder en zachte fade bij laden.
 * Nooit een harde pop: opacity 0 naar 1 in 0,6 s.
 */
export function Foto({ src, alt, ratio, className, fotoClassName, sizes, priority, ...rest }: Props) {
  const [geladen, setGeladen] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden bg-nevel", className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        onLoad={() => setGeladen(true)}
        className={cn(
          "object-cover transition-opacity duration-[600ms] ease-zacht motion-reduce:transition-none",
          geladen ? "opacity-100" : "opacity-0",
          fotoClassName,
        )}
        {...rest}
      />
    </div>
  );
}
