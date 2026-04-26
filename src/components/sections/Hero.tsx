"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/mixpanel";

const headline = [
  { word: "I", italic: false },
  { word: "turn", italic: false },
  { word: "underperforming", italic: false },
  { word: "ad", italic: false },
  { word: "accounts", italic: false },
  { word: "into", italic: false },
];

const rotatingPhrases = [
  "revenue engines.",
  "scaling stories.",
  "ROAS machines.",
  "growth systems.",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(id);
  }, [reduce]);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.05 },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      {/* Atmospheric glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[110vh] w-[110vw] -translate-x-1/2 glow-radial"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,122,69,0.22) 0%, transparent 60%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, 30, -10, 0], y: [0, -20, 10, 0] }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.02] px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--color-fg-muted)]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              Available for new engagements · Cairo · MENA
            </motion.div>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="text-balance font-display text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
            >
              {headline.map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className={
                    "inline-block " +
                    (w.italic ? "italic font-serif font-normal " : "")
                  }
                  style={{ marginRight: "0.22em" }}
                >
                  {w.word}
                </motion.span>
              ))}
              <span
                className="relative inline-block overflow-hidden align-baseline"
                style={{ minWidth: "min(100%, 12ch)" }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={rotatingPhrases[phraseIndex]}
                    initial={{ y: reduce ? 0 : "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: reduce ? 0 : "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block italic font-serif font-normal text-[var(--color-accent)]"
                  >
                    {rotatingPhrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="mt-8 max-w-2xl text-pretty text-base text-[var(--color-fg-muted)] sm:text-lg"
            >
              Performance Media Buyer based in Cairo. I&apos;ve scaled brands
              across Saudi Arabia and MENA by{" "}
              <span className="text-[var(--color-fg)] font-medium">400%+</span>{" "}
              through strategic media restructuring, full-funnel tracking, and
              ruthless optimization across Meta, Google, TikTok, and Snapchat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                href="#work"
                variant="primary"
                size="lg"
                withArrow
                onClick={() =>
                  trackEvent("CTA Clicked", {
                    location: "hero",
                    cta: "view_work",
                  })
                }
              >
                View My Work
              </Button>
              <Button
                href="/cv"
                variant="secondary"
                size="lg"
                onClick={() =>
                  trackEvent("CTA Clicked", {
                    location: "hero",
                    cta: "download_cv",
                  })
                }
              >
                Download CV
              </Button>
            </motion.div>
          </div>

          {/* Right: large ROAS callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <div className="relative">
              <div className="rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-7 backdrop-blur-sm">
                <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
                  Average ROAS · all accounts
                </div>
                <div className="mt-3 flex items-baseline gap-1 font-display text-[clamp(4rem,10vw,7rem)] font-semibold leading-none tracking-[-0.04em] text-[var(--color-accent)] tabular">
                  4.18
                  <span className="text-3xl text-[var(--color-fg)]">x</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[var(--color-border)] pt-5 text-xs text-[var(--color-fg-muted)]">
                  <div>
                    <div className="text-[var(--color-fg)] font-medium tabular">
                      $1.15M+
                    </div>
                    <div>Purchase value</div>
                  </div>
                  <div>
                    <div className="text-[var(--color-fg)] font-medium tabular">
                      7,797+
                    </div>
                    <div>Purchases tracked</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--color-fg-dim)]"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          scroll
        </motion.div>
      </div>
    </section>
  );
}
