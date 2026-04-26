import type { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
  reverse?: boolean;
}

export default function Marquee({ items, className, reverse }: MarqueeProps) {
  // Duplicate the list for a seamless loop.
  const doubled = [...items, ...items];
  return (
    <div
      className={`group relative overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <div
        className="flex w-max gap-14 animate-marquee py-2 will-change-transform group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0 text-[var(--color-fg-muted)]"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />
    </div>
  );
}
