import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { cvData } from "@/data/cv-data";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Mohamed Abdullah — Performance Media Buyer. Full CV with experience, skills, and tools.",
};

export default function CVPage() {
  return (
    <div className="min-h-screen print-light">
      {/* Toolbar */}
      <header className="no-print sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <PrintButton />
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Header */}
        <section className="border-b border-[var(--color-border)] pb-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1] tracking-[-0.04em]">
                {cvData.name}
              </h1>
              <p className="mt-3 text-lg text-[var(--color-fg-muted)]">
                {cvData.role}
              </p>
            </div>
            <ul className="flex flex-col gap-1.5 text-sm text-[var(--color-fg-muted)] sm:items-end">
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> {cvData.location}
              </li>
              <li className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> {cvData.email}
              </li>
              <li className="inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> {cvData.phone}
              </li>
            </ul>
          </div>
        </section>

        {/* Summary */}
        <Section label="Summary">
          <p className="max-w-3xl text-pretty text-[var(--color-fg-muted)]">
            {cvData.summary}
          </p>
        </Section>

        {/* Highlights */}
        <Section label="Highlights">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4">
            {cvData.highlights.map((h) => (
              <div key={h.label} className="bg-[var(--color-bg)] p-5">
                <div className="font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-accent)] tabular">
                  {h.value}
                </div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section label="Experience">
          <ul className="space-y-9">
            {cvData.experience.map((e, i) => (
              <li key={i} className="grid gap-2 md:grid-cols-12">
                <div className="md:col-span-3 text-sm text-[var(--color-fg-muted)]">
                  {e.period}
                  <div className="mt-0.5 text-xs text-[var(--color-fg-dim)]">
                    {e.location}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                    {e.role}
                  </h3>
                  <div className="mt-1 text-sm text-[var(--color-accent)]">
                    {e.company}
                  </div>
                  <ul className="mt-4 space-y-2.5 text-[var(--color-fg-muted)]">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section label="Skills">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {cvData.skills.map((s) => (
              <li
                key={s}
                className="rounded-xl border border-[var(--color-border)] bg-white/[0.015] px-4 py-2.5 text-sm text-[var(--color-fg-muted)]"
              >
                {s}
              </li>
            ))}
          </ul>
        </Section>

        {/* Tools */}
        <Section label="Tools">
          <div className="space-y-5">
            {Object.entries(cvData.tools).map(([k, v]) => (
              <div key={k} className="grid gap-3 md:grid-cols-12">
                <div className="md:col-span-3 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
                  {k}
                </div>
                <ul className="md:col-span-9 flex flex-wrap gap-2">
                  {v.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[var(--color-fg-muted)]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section label="Education">
          <ul className="space-y-3">
            {cvData.education.map((e, i) => (
              <li key={i} className="grid gap-1 md:grid-cols-12">
                <div className="md:col-span-3 text-sm text-[var(--color-fg-muted)]">
                  {e.period}
                </div>
                <div className="md:col-span-9">
                  <div className="font-medium">{e.degree}</div>
                  <div className="text-sm text-[var(--color-fg-muted)]">
                    {e.school}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Certifications */}
        <Section label="Certifications">
          <ul className="space-y-2 text-[var(--color-fg-muted)]">
            {cvData.certifications.map((c) => (
              <li key={c} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                {c}
              </li>
            ))}
          </ul>
        </Section>

        {/* Languages */}
        <Section label="Languages">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {cvData.languages.map((l) => (
              <li
                key={l.name}
                className="flex items-center justify-between rounded-xl border border-[var(--color-border)] px-4 py-3"
              >
                <span className="font-medium">{l.name}</span>
                <span className="text-sm text-[var(--color-fg-muted)]">
                  {l.level}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[var(--color-border)] py-10 last:border-b-0">
      <h2 className="mb-7 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
        {label}
      </h2>
      {children}
    </section>
  );
}
