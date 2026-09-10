"use client";

import Image, { getImageProps, type ImageProps, type StaticImageData } from "next/image";
import { useState } from "react";
import { preload } from "react-dom";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "src" | "alt" | "placeholder"> & {
  src: StaticImageData;
  alt: string;
  /** Beeldverhouding van de omlijsting, bijvoorbeeld "4 / 3". */
  ratio?: string;
  className?: string;
  fotoClassName?: string;
  /** Meteen zichtbaar, zonder fade via JavaScript. Voor de hero. */
  direct?: boolean;
  /**
   * Staande uitsnede voor smalle schermen; `src` is dan het brede beeld
   * vanaf md. Rendert een picture-element, altijd direct zichtbaar.
   */
  staand?: StaticImageData;
};

const BREED = "(min-width: 768px)";
const SMAL = "(max-width: 767.98px)";

/**
 * Foto in vaste verhouding, met blur-placeholder en zachte fade bij laden.
 * Nooit een harde pop: opacity 0 naar 1 in 0,6 s.
 */
export function Foto({ src, alt, ratio, className, fotoClassName, sizes, priority, direct, staand, ...rest }: Props) {
  const [geladen, setGeladen] = useState(false);
  const zichtbaar = direct || staand || geladen;

  return (
    <div
      className={cn("relative overflow-hidden bg-nevel", className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {staand ? (
        <TweeBeelden
          breed={src}
          staand={staand}
          alt={alt}
          sizes={sizes ?? "100vw"}
          priority={priority}
          quality={rest.quality}
          fotoClassName={fotoClassName}
        />
      ) : (
        /* De zachte inzoom bij laden zit op deze laag, de hoverzoom op de foto zelf. */
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-[1400ms] ease-zacht motion-reduce:transition-none",
            zichtbaar ? "scale-100" : "scale-[1.04]",
          )}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            onLoad={direct ? undefined : () => setGeladen(true)}
            className={cn(
              "object-cover transition-opacity duration-[900ms] ease-zacht motion-reduce:transition-none",
              zichtbaar ? "opacity-100" : "opacity-0",
              fotoClassName,
            )}
            {...rest}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Twee uitsnedes van dezelfde foto: staand onder md, breed erboven.
 * De blur staat als laag achter het beeld, per uitsnede, en verdwijnt
 * vanzelf achter de dekkende foto.
 */
function TweeBeelden({
  breed,
  staand,
  alt,
  sizes,
  priority,
  quality,
  fotoClassName,
}: {
  breed: StaticImageData;
  staand: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  quality?: ImageProps["quality"];
  fotoClassName?: string;
}) {
  const gemeen = { alt, fill: true, sizes, quality, placeholder: "empty" as const };
  const { props: b } = getImageProps({ ...gemeen, src: breed });
  const { props: s } = getImageProps({ ...gemeen, src: staand });

  if (priority) {
    preload(s.src, { as: "image", imageSrcSet: s.srcSet, imageSizes: s.sizes, fetchPriority: "high", media: SMAL });
    preload(b.src, { as: "image", imageSrcSet: b.srcSet, imageSizes: b.sizes, fetchPriority: "high", media: BREED });
  }

  return (
    <>
      <Blur data={staand.blurDataURL} className="md:hidden" />
      <Blur data={breed.blurDataURL} className="hidden md:block" />
      <picture>
        <source media={BREED} srcSet={b.srcSet} sizes={b.sizes} />
        <img
          {...s}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className={cn("object-cover", fotoClassName)}
        />
      </picture>
    </>
  );
}

function Blur({ data, className }: { data?: string; className?: string }) {
  if (!data) return null;
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 scale-110 bg-cover bg-center blur-xl", className)}
      style={{ backgroundImage: `url(${data})` }}
    />
  );
}
