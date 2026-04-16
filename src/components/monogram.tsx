import type { SVGProps } from "react";

export function Monogram({
  size = 28,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient id="nl-g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-tide-bright)" />
          <stop offset="1" stopColor="var(--color-tide-deep)" />
        </linearGradient>
      </defs>
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="7.25" fill="url(#nl-g)" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="14"
        fontWeight="700"
        fill="var(--color-ink-0)"
        letterSpacing="-0.02em"
      >
        nl
      </text>
    </svg>
  );
}
