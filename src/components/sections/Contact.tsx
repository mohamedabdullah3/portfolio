"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, CalendarClock, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const channels = [
  {
    title: "WhatsApp",
    blurb: "Fastest way to reach me",
    href: "https://wa.me/201146555118",
    cta: "Open WhatsApp",
    Icon: MessageCircle,
  },
  {
    title: "Email",
    blurb: "For longer briefs and proposals",
    href: "mailto:mohamed.abdullah3877@gmail.com",
    cta: "Send email",
    Icon: Mail,
  },
  {
    title: "Book a Call",
    blurb: "30-min discovery call",
    href: "#",
    cta: "Pick a slot",
    Icon: CalendarClock,
  },
];

const budgets = [
  "Under $2k / month",
  "$2k – $5k / month",
  "$5k – $15k / month",
  "$15k – $50k / month",
  "$50k+ / month",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    // Placeholder — wire to Formspree / Resend later via .env
    // eslint-disable-next-line no-console
    console.log("Contact form submission:", payload);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-[420px] glow-radial opacity-70"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-fg-dim)]">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.25rem,5.4vw,4.5rem)] font-semibold leading-[1] tracking-[-0.045em]">
            Got an account that&apos;s{" "}
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              underperforming?
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-pretty text-[var(--color-fg-muted)]">
            Let&apos;s audit it together. The first call is free, and you&apos;ll
            leave with at least 3 specific things to fix — even if we don&apos;t
            end up working together.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {channels.map((c, i) => {
            const Icon = c.Icon;
            const isExternal = /^(https?:|mailto:|tel:)/.test(c.href);
            return (
              <Reveal
                key={c.title}
                delay={i * 0.06}
                className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-white/[0.015] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:bg-white/[0.04]"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]">
                    <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium tracking-[-0.02em]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
                    {c.blurb}
                  </p>
                </div>
                <a
                  href={c.href}
                  target={isExternal && c.href.startsWith("http") ? "_blank" : undefined}
                  rel={isExternal && c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent)]"
                >
                  {c.cta}
                  <span aria-hidden>→</span>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Form */}
        <Reveal delay={0.15} className="mt-14">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-[var(--color-border)] bg-white/[0.015] p-7 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Company" name="company" />
              <SelectField label="Budget Range" name="budget" options={budgets} />
              <div className="sm:col-span-2">
                <Field
                  label="Message"
                  name="message"
                  textarea
                  rows={5}
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-xs text-[var(--color-fg-dim)]">
                {submitted
                  ? "Thanks — I'll get back to you within 24 hours."
                  : "Replies within 24 hours, Sunday–Thursday."}
              </p>
              <Button type="submit" variant="primary" size="lg">
                <span className="inline-flex items-center gap-2">
                  Send message
                  <Send className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  rows,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
}) {
  const baseField =
    "mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-3 text-[var(--color-fg)] placeholder:text-[var(--color-fg-dim)] transition-colors focus:border-[var(--color-accent)] focus:outline-none";
  return (
    <label className="block">
      <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
        {label}
        {required && <span className="ml-1 text-[var(--color-accent)]">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={rows ?? 4}
          className={`${baseField} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={baseField}
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full appearance-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-3 text-[var(--color-fg)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
      >
        <option value="" disabled>
          Select a range…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
