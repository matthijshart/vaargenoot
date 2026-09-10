/**
 * Eén regel onderin een brede foto, in een donker doorschijnend vlak
 * met een messing streepje. Geen tekstschaduw: het vlak zorgt voor
 * het contrast, ook op een lichte foto.
 */
export function Onderschrift({ children }: { children: string }) {
  return (
    <p className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto flex max-w-6xl px-5 sm:bottom-6 sm:px-8">
      <span className="inline-flex items-center gap-3 rounded-full bg-nacht/60 py-1.5 pr-4 pl-3.5 text-[13px] font-medium text-wit backdrop-blur-md">
        <span aria-hidden className="h-px w-5 shrink-0 bg-messing" />
        {children}
      </span>
    </p>
  );
}
