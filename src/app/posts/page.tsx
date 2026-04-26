import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Notes from Mohamed Abdullah on performance media buying, MENA e-commerce, tracking, and creative strategy.",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function PostsPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Nav />
      <main className="pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Posts
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1] tracking-[-0.045em]">
              Notes from inside the{" "}
              <span className="font-serif italic font-normal text-[var(--color-accent)]">
                ad account.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-[var(--color-fg-muted)]">
              Lessons, frameworks, and post-mortems from running performance
              media for MENA brands. Short, honest, and written for operators —
              not search engines.
            </p>
          </Reveal>

          <hr className="accent-divider mt-14" aria-hidden />

          <ul className="mt-10 space-y-4">
            {sorted.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/posts/${p.slug}`}
                  className="group block rounded-3xl border border-[var(--color-border)] bg-white/[0.015] p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:bg-white/[0.04] sm:p-9"
                >
                  <div className="flex flex-wrap items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                    <span aria-hidden>·</span>
                    <span>{p.readingTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-pretty text-[var(--color-fg-muted)]">
                    {p.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <ul className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[0.7rem] text-[var(--color-fg-muted)]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent)]">
                      Read post
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>

          {sorted.length === 0 && (
            <p className="mt-12 text-[var(--color-fg-muted)]">
              No posts yet — first ones land soon.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
