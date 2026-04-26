"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "/cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

function CairoTime() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);
  if (!now) return null;
  return (
    <span className="tabular text-[var(--color-fg)]">
      {now}{" "}
      <span className="text-[var(--color-fg-dim)]">Cairo</span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-3xl font-semibold tracking-tight"
            >
              MA<span className="accent">.</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-[var(--color-fg-muted)]">
              Mohamed Abdullah — Performance Media Buyer · Cairo, Egypt.
              Available for selective engagements with brands across MENA.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <SocialIcon
              href="#"
              label="LinkedIn"
              Icon={Linkedin}
            />
            <SocialIcon href="#" label="X / Twitter" Icon={XIcon} />
            <SocialIcon href="#" label="Instagram" Icon={Instagram} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-fg-dim)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mohamed Abdullah. All rights reserved.</p>
          <p>
            <CairoTime />
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-fg)]"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2H21.5l-7.51 8.585L23 22h-6.91l-5.41-7.06L4.4 22H1.14l8.05-9.197L1 2h7.094l4.886 6.46L18.244 2Zm-1.21 18h1.92L7.05 4H5.02l12.014 16Z" />
    </svg>
  );
}
