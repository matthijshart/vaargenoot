import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Inhoud maximaal 1200 px breed, met zijmarge. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-8", className)}>{children}</div>;
}
