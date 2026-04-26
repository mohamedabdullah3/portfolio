import Reveal from "@/components/ui/Reveal";
import {
  MetaIcon,
  GoogleIcon,
  TikTokIcon,
  SnapchatIcon,
  XIcon,
  GA4Icon,
  GTMIcon,
  LookerIcon,
  WindsorIcon,
  SallaIcon,
  ShopifyIcon,
  WooIcon,
} from "@/components/icons/BrandIcon";

interface StackItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const stack: { label: string; items: StackItem[] }[] = [
  {
    label: "Ad Platforms",
    items: [
      { name: "Meta Ads", Icon: MetaIcon },
      { name: "Google Ads", Icon: GoogleIcon },
      { name: "TikTok Ads", Icon: TikTokIcon },
      { name: "Snapchat Ads", Icon: SnapchatIcon },
      { name: "X Ads", Icon: XIcon },
    ],
  },
  {
    label: "Analytics & Tracking",
    items: [
      { name: "Google Analytics 4", Icon: GA4Icon },
      { name: "Google Tag Manager", Icon: GTMIcon },
      { name: "Looker Studio", Icon: LookerIcon },
      { name: "Windsor.ai", Icon: WindsorIcon },
    ],
  },
  {
    label: "E-commerce",
    items: [
      { name: "Salla", Icon: SallaIcon },
      { name: "Shopify", Icon: ShopifyIcon },
      { name: "WooCommerce", Icon: WooIcon },
    ],
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
              <ul className="md:col-span-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {row.items.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="group flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-[var(--color-fg-muted)] transition-colors group-hover:bg-[var(--color-accent)]/10 group-hover:text-[var(--color-accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="truncate text-sm text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-fg)]">
                      {name}
                    </span>
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
