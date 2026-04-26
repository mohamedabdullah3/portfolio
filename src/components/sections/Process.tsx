import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Audit",
    when: "Week 1",
    body: "I review your ad accounts, tracking setup, funnel, and historical performance. You get a written diagnosis with specific issues and the opportunity size.",
  },
  {
    n: "02",
    title: "Strategy",
    when: "Week 2",
    body: "We agree on the channels, budget split, audience structure, creative direction, and the KPIs we'll measure against.",
  },
  {
    n: "03",
    title: "Execution",
    when: "Weeks 3–6",
    body: "I rebuild the tracking layer, restructure campaigns, launch creative tests, and start optimization cycles. You get weekly Looker Studio reports.",
  },
  {
    n: "04",
    title: "Scale",
    when: "Month 2+",
    body: "Once we hit target ROAS at base spend, we scale horizontally (new audiences) and vertically (more budget on winners). Continuous optimization is the default state.",
  },
];

export default function Process() {
  return (
    <section className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
            Process
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.8vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
            A clear process.{" "}
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              No agency theater.
            </span>
          </h2>
        </Reveal>

        <ol className="mt-16 space-y-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.06}
              as="li"
              className="group grid grid-cols-1 items-start gap-6 rounded-3xl border border-[var(--color-border)] bg-white/[0.015] p-7 transition-colors hover:border-[var(--color-border-strong)] sm:p-10 md:grid-cols-12"
            >
              <div className="md:col-span-3 lg:col-span-2">
                <div className="font-display text-[clamp(3rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.05em] text-[var(--color-accent)] tabular">
                  {s.n}
                </div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
                  {s.when}
                </div>
              </div>
              <div className="md:col-span-9 lg:col-span-10">
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[var(--color-fg-muted)]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
