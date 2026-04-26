"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import StatusPill from "./StatusPill";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/posts", label: "Posts" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight"
        >
          MA<span className="accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-fg)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <StatusPill />
          <Button href="/cv" variant="ghost" size="sm">
            CV
          </Button>
          <Button href="/#contact" variant="primary" size="sm" withArrow>
            Book a Call
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl">
          <ul className="flex flex-col gap-1 px-5 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base text-[var(--color-fg-muted)] hover:bg-white/5 hover:text-[var(--color-fg)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-3 flex gap-3">
              <Button
                href="/cv"
                variant="secondary"
                size="md"
                className="flex-1"
              >
                View CV
              </Button>
              <Button
                href="/#contact"
                variant="primary"
                size="md"
                className="flex-1"
                withArrow
              >
                Book a Call
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
