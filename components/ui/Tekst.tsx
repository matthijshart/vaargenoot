import { Fragment } from "react";

const splitser = /(\[(?:INVULLEN|CHECK): [^\]]+\])/;
const isPlaceholder = /^\[(?:INVULLEN|CHECK): /;

/**
 * Tekst met zichtbare placeholders: alles tussen [INVULLEN: ...] en
 * [CHECK: ...] krijgt een gele markering, zodat het niet over het hoofd
 * wordt gezien. Gewone tekst komt ongewijzigd door.
 */
export function Tekst({ children }: { children: string }) {
  const delen = children.split(splitser);
  if (delen.length === 1) return <>{children}</>;
  return (
    <>
      {delen.map((deel, i) =>
        isPlaceholder.test(deel) ? (
          <mark key={i} className="invullen text-antraciet">
            {deel}
          </mark>
        ) : (
          <Fragment key={i}>{deel}</Fragment>
        ),
      )}
    </>
  );
}

export function heeftPlaceholder(tekst: string) {
  return isPlaceholder.test(tekst) || splitser.test(tekst);
}
