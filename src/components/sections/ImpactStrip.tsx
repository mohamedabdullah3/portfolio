"use client";

import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  source: string;
}

const metrics: Metric[] = [
  {
    value: 1.15,
    prefix: "$",
    suffix: "M+",
    decimals: 2,
    label: "Purchase value generated",
    source: "across Meta, Google, TikTok campaigns",
  },
  {
    value: 4.18,
    suffix: "x",
    decimals: 2,
    label: "Average ROAS",
    source: "verified through Meta Ads Manager",
  },
  {
    value: 7797,
    suffix: "+",
    label: "Purchases tracked",
    source: "tracked via GA4 + server-side events",
  },
  {
    value: 400,
    suffix: "%+",
    label: "Peak sales growth",
    source: "achieved with Lord Milano in 8 months",
  },
];

export default function ImpactStrip() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[260px] -translate-y-1/2 glow-radial opacity-60"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-12 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
            Impact · across managed accounts
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-border)] lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.08}
              className="bg-[var(--color-bg)]"
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative h-full p-7 transition-colors duration-300 hover:bg-white/[0.02] sm:p-10"
              >
                <div className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--color-fg)]">
                  <Counter
                    to={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    decimals={m.decimals ?? 0}
                  />
                </div>
                <div className="mt-4 text-[0.75rem] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
                  {m.label}
                </div>
                <motion.p
                  variants={{
                    rest: { opacity: 0, y: 4 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-3 text-xs text-[var(--color-fg-dim)]"
                >
                  {m.source}
                </motion.p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
