"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { LogoMark } from "@/components/logo-mark";

interface NavLink {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export function SiteHeader({ links, ctaLabel, ctaHref }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-secondary/20 bg-background/95 backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-8 lg:px-10">
        <nav className="hidden flex-1 items-center gap-8 lg:flex">
          {links.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm uppercase tracking-[0.24em] transition hover:text-accent",
                scrolled ? "text-text" : "text-background",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="flex flex-1 justify-start lg:justify-center" aria-label="Marrow & Tide home">
          <LogoMark className={clsx("h-10 w-auto md:h-11", scrolled ? "text-primary" : "text-background")} />
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          <Link
            href={links[3].href}
            className={clsx(
              "text-sm uppercase tracking-[0.24em] transition hover:text-accent",
              scrolled ? "text-text" : "text-background",
            )}
          >
            {links[3].label}
          </Link>
          <Link
            href={ctaHref}
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-[#b88f46]"
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className={clsx(
            "rounded-full border px-3 py-3 lg:hidden",
            scrolled ? "border-secondary/30 bg-background text-primary" : "border-background/40 bg-primary/25 text-background",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-b border-secondary/20 bg-background px-5 pb-6 pt-2 shadow-medium lg:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md border border-secondary/20 px-4 py-3 text-sm uppercase tracking-[0.22em] text-text transition hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-primary transition hover:bg-[#b88f46]"
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
