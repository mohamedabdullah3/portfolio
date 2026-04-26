import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
            What I do
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-[clamp(2rem,4.8vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
            What I do{" "}
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              — and how I do it differently.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => {
            const Icon = s.Icon;
            return (
              <Reveal
                key={s.title}
                delay={i * 0.08}
                className="group relative flex flex-col rounded-3xl border border-[var(--color-border)] bg-white/[0.015] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:bg-white/[0.03]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(80% 60% at 50% 0%, rgba(255,122,69,0.12), transparent 60%)",
                  }}
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]">
                  <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>

                <h3 className="relative mt-7 font-display text-2xl font-medium tracking-[-0.02em] sm:text-[1.7rem]">
                  {s.title}
                </h3>
                <p className="relative mt-4 text-[var(--color-fg-muted)]">
                  {s.description}
                </p>

                <div className="relative mt-8 border-t border-[var(--color-border)] pt-5 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
                  {s.tag}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
