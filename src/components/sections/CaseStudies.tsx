"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/data/case-studies";
import { trackEvent } from "@/lib/mixpanel";

const slugToEvent: Record<string, string> = {
  "lord-milano": "lord_milano",
  "outlet-pharmacy": "outlet_pharmacy",
  "hayat-alandalus-mall": "hayat_mall",
};

export default function CaseStudies() {
  const reduce = useReducedMotion();

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
              <div
                onClick={() =>
                  trackEvent("Case Study Viewed", {
                    case_study: slugToEvent[cs.slug] ?? cs.slug,
                  })
                }
                className="grid gap-0 lg:grid-cols-12"
              >
                  {/* Big metric */}
                  <div className="relative flex flex-col justify-between border-b border-[var(--color-border)] p-8 sm:p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-50"
                      style={{
                        background:
                          "radial-gradient(120% 80% at 0% 0%, rgba(255,122,69,0.18) 0%, transparent 55%)",
                      }}
                    />
                    <div className="relative">
                      <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
                        {cs.industry}
                      </div>
                      <motion.div
                        initial={{ scale: reduce ? 1 : 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className={
                          "relative mt-10 inline-block max-w-full font-display font-semibold text-[var(--color-accent)] tabular " +
                          (cs.metric.value.length > 6
                            ? "break-words text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.1] tracking-[-0.02em]"
                            : "text-[clamp(3.5rem,9vw,6rem)] leading-[0.9] tracking-[-0.05em]")
                        }
                      >
                        {cs.metric.value}
                        {cs.metric.value.length <= 6 && (
                          <motion.span
                            aria-hidden
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                              duration: 0.7,
                              delay: 0.25,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            style={{ transformOrigin: "left" }}
                            className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[var(--color-accent)]/70"
                          />
                        )}
                      </motion.div>
                      <div className="mt-4 text-sm text-[var(--color-fg-muted)]">
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
