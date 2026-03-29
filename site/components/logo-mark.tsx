import { clsx } from "clsx";

export function LogoMark({ className, iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  if (iconOnly) {
    return (
      <svg viewBox="0 0 40 40" className={clsx(className)} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Marrow & Tide emblem">
        <circle cx="20" cy="20" r="15.5" stroke="currentColor" strokeWidth="2.2" />
        <path d="M7 23.5C11.2 18.8 17 16.4 24 16.4C28.5 16.4 32.5 17.3 35 18.4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="15" y="10" width="10" height="20" rx="5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="20" cy="10" r="3.2" fill="currentColor" />
        <circle cx="20" cy="30" r="3.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      width="220"
      height="48"
      viewBox="0 0 220 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Marrow and Tide logo"
      className={clsx(className)}
    >
      <g transform="translate(2 4)">
        <circle cx="20" cy="20" r="15.5" stroke="currentColor" strokeWidth="2.2" />
        <path d="M7 23.5C11.2 18.8 17 16.4 24 16.4C28.5 16.4 32.5 17.3 35 18.4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="15" y="10" width="10" height="20" rx="5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="20" cy="10" r="3.2" fill="currentColor" />
        <circle cx="20" cy="30" r="3.2" fill="currentColor" />
      </g>
      <text x="52" y="31" fill="currentColor" fontFamily="var(--font-heading), serif" fontSize="28" letterSpacing="2.8">
        MARROW &amp; TIDE
      </text>
    </svg>
  );
}
