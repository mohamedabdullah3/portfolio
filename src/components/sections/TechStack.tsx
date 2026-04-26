import Reveal from "@/components/ui/Reveal";

const stack = [
  {
    label: "Ad Platforms",
    items: ["Meta Ads", "Google Ads", "TikTok Ads", "Snapchat Ads", "X Ads"],
  },
  {
    label: "Analytics & Tracking",
    items: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Looker Studio",
      "Windsor.ai",
    ],
  },
  {
    label: "E-commerce",
    items: ["Salla", "Shopify", "WooCommerce"],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
            Stack
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.8vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
            The stack I{" "}
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              work with.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-px overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-border)]">
          {stack.map((row, i) => (
            <Reveal
              key={row.label}
              delay={i * 0.06}
              className="grid grid-cols-1 gap-6 bg-[var(--color-bg)] p-7 sm:p-9 md:grid-cols-12 md:items-center"
            >
              <div className="md:col-span-3 text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-fg-dim)]">
                {row.label}
              </div>
              <ul className="md:col-span-9 flex flex-wrap gap-2">
                {row.items.map((it) => (
                  <li
                    key={it}
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-fg)]"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-fg-dim)] transition-colors group-hover:bg-[var(--color-accent)]"
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
