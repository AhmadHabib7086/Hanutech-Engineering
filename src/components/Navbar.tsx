"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/src/lib/data";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <div className="flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt="logo"
              width={50}
              height={50}
              className="h-12 w-auto rounded-full object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wide text-ink dark:text-white">
                {siteConfig.brand}
              </span>
              <span className="text-xs text-orange-500 uppercase">
                {siteConfig.tagline}
              </span>
            </div>
          </div>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-brand ${
                  isActive(link.href)
                    ? "text-brand after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand"
                    : "text-ink-soft dark:text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-3">
          <Link
            href="/get-query"
            className="hidden rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            Get Query
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-ink lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-all duration-500 ${
                open ? "rotate-180 scale-110" : "rotate-0 scale-100"
              }`}
            >
              {open ? (
                <path d="M6 6L18 18M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out lg:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <ul className="space-y-1 px-4 py-3">
            {navLinks.map((link, idx) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ease-out ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${idx * 100 + 150}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? "bg-orange-50 text-brand dark:bg-orange-950/40"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li
              className={`transition-all duration-500 ease-out ${
                open
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              }`}
              style={{
                transitionDelay: open
                  ? `${navLinks.length * 100 + 150}ms`
                  : "0ms",
              }}
            >
              <Link
                href="/get-query"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-dark"
              >
                Get Query
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
