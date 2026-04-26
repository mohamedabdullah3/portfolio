import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative grid min-h-[100svh] place-items-center overflow-hidden px-5 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 glow-radial opacity-70"
      />
      <div className="text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
          404 · page not found
        </p>
        <h1 className="mt-6 font-display text-[clamp(3.5rem,12vw,9rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
          Wrong{" "}
          <span className="font-serif italic font-normal text-[var(--color-accent)]">
            funnel.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-pretty text-[var(--color-fg-muted)]">
          That page didn&apos;t convert. Let&apos;s get you back to something
          that does.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary" size="lg" withArrow>
            Back to home
          </Button>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Or get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
