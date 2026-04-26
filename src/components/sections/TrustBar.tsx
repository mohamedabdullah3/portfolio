import Marquee from "@/components/ui/Marquee";
import { brands } from "@/data/brands";

export default function TrustBar() {
  return (
    <section className="border-y border-[var(--color-border)] py-10">
      <div className="mx-auto mb-7 max-w-7xl px-5 sm:px-8">
        <p className="text-center text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
          Trusted by brands across MENA
        </p>
      </div>
      <Marquee
        items={brands.map((b) => (
          <span
            key={b.name}
            className="font-display text-2xl font-medium text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)] sm:text-3xl"
          >
            {b.name}
          </span>
        ))}
      />
    </section>
  );
}
