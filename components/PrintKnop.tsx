"use client";

import { Knop } from "./ui/Knop";

export function PrintKnop({ label }: { label: string }) {
  return (
    <Knop type="button" onClick={() => window.print()} className="niet-printen">
      {label}
    </Knop>
  );
}
