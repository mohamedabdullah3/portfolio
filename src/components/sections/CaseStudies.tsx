import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudies() {
  return (
    <section id="work" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
                Selected work
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.8vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
                Selected{" "}
                <span className="font-serif italic font-normal text-[var(--color-accent)]">
                  work.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[var(--color-fg-muted)] sm:text-right">
              Real brands. Real spend. Real returns.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-6">
          {caseStudies.map((cs, i) => (
            <Reveal
              key={cs.slug}
              delay={i * 0.05}
              as="article"
              className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white/[0.015] transition-all duration-500 hover:border-[var(--color-accent)]/40 hover:bg-white/[0.03]"
            >
              <div className="grid gap-0 lg:grid-cols-12">
                {/* Big metric */}
                <div className="relative flex flex-col justify-between border-b border-[var(--color-border)] p-8 sm:p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 0% 0%, rgba(255,107,53,0.18) 0%, transparent 55%)",
                    }}
                  />
                  <div className="relative">
                    <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
                      {cs.industry}
                    </div>
                    <div className="mt-10 font-display text-[clamp(3.5rem,9vw,6rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-[var(--color-accent)] tabular">
                      {cs.metric.value}
                    </div>
                    <div className="mt-3 text-sm text-[var(--color-fg-muted)]">
                      {cs.metric.label}
                    </div>
                  </div>
                  <div className="relative mt-10 flex flex-wrap gap-1.5">
                    {cs.channels.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-2.5 py-1 text-[0.7rem] text-[var(--color-fg-muted)]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Story */}
                <div className="p-8 sm:p-10 lg:col-span-7">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
                    {cs.brand}
                  </h3>

                  <dl className="mt-7 space-y-5">
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-[0.24em] text-[var(--color-fg-dim)]">
                        Challenge
                      </dt>
                      <dd className="mt-1.5 text-[var(--color-fg-muted)]">
                        {cs.challenge}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-[0.24em] text-[var(--color-fg-dim)]">
                        Approach
                      </dt>
                      <dd className="mt-1.5 text-[var(--color-fg-muted)]">
                        {cs.approach}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-[0.24em] text-[var(--color-fg-dim)]">
                        Result
                      </dt>
                      <dd className="mt-1.5 text-[var(--color-fg)]">
                        {cs.result}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
