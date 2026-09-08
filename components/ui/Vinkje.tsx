/** Dun vinkje, het enige icoon op de site. */
export function Vinkje({ className = "text-gracht" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}
