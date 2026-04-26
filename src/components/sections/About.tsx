import Reveal from "@/components/ui/Reveal";

const skills = [
  "Meta Ads",
  "Google Ads",
  "TikTok",
  "Snapchat",
  "GA4 + GTM",
  "Salla / Shopify",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Avatar */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--color-border)]">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 80% at 30% 20%, rgba(255,122,69,0.45) 0%, rgba(255,122,69,0.08) 38%, transparent 70%), linear-gradient(180deg, #1d1d22 0%, #0e0e10 100%)",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="font-display text-[clamp(5rem,18vw,11rem)] font-semibold tracking-[-0.06em] leading-none text-[var(--color-fg)]/90">
                    MA
                  </div>
                  <div className="mt-4 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-muted)]">
                    Mohamed Abdullah · Cairo
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/70 px-4 py-3 backdrop-blur">
                <div className="text-xs text-[var(--color-fg-muted)]">
                  Performance Media Buyer
                </div>
                <div className="text-xs text-[var(--color-fg)]/80">
                  3+ yrs · MENA
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7 lg:pt-6">
            <Reveal>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
                About
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance font-display text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1] tracking-[-0.04em]">
                I don&apos;t run ads.{" "}
                <span className="font-serif italic font-normal text-[var(--color-accent)]">
                  I build performance systems.
                </span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-pretty text-[var(--color-fg-muted)]">
              <Reveal delay={0.1}>
                <p>
                  I&apos;m Mohamed Abdullah, a Performance Media Buyer based in
                  Cairo with 3+ years managing multi-channel paid media for
                  e-commerce and retail brands across Saudi Arabia, the Gulf,
                  and Egypt.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  My approach is diagnostic before it&apos;s tactical. When I
                  take over an account, I audit the funnel, fix the tracking,
                  restructure campaigns by audience and intent, and rebuild the
                  creative testing framework from scratch. The result: brands
                  like Lord Milano grew 400%+ in sales after I rebuilt their
                  media strategy from the ground up.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  I work hands-on with Meta, Google Ads, TikTok, Snapchat, and X
                  — backed by deep tracking infrastructure (GA4, GTM,
                  server-side events) and a data-first reporting layer using
                  Looker Studio and Windsor.ai.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <ul className="mt-10 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-[var(--color-border)] bg-white/[0.02] px-3.5 py-1.5 text-xs text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
