import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

const metrics: Metric[] = [
  { value: 1.15, prefix: "$", suffix: "M+", decimals: 2, label: "Purchase value generated" },
  { value: 4.18, suffix: "x", decimals: 2, label: "Average ROAS" },
  { value: 7797, suffix: "+", label: "Purchases tracked" },
  { value: 400, suffix: "%+", label: "Peak sales growth" },
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
              className="bg-[var(--color-bg)] p-7 sm:p-10"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
