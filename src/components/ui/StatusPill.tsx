"use client";

import { useEffect, useState } from "react";

const formatCairoTime = () =>
  new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Cairo",
    hour12: false,
  }).format(new Date());

export default function StatusPill() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatCairoTime());
    const id = setInterval(() => setTime(formatCairoTime()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.02] px-3 py-1.5 text-xs text-[var(--color-fg-muted)] md:inline-flex"
      aria-label="Currently in Cairo"
    >
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-status-pulse rounded-full bg-emerald-400/80" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="tabular">
        Currently in Cairo · {time ?? "--:--"}
      </span>
    </div>
  );
}
