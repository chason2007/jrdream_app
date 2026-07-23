"use client";

import { useState } from "react";
import Link from "next/link";
import type { BaseLocaleProps } from "@/types/common";
import type { NavContent } from "@/lib/content";

function LanguageToggle({ lang }: Readonly<BaseLocaleProps>) {
  const base =
    "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm px-1";
  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <Link
        href="/"
        aria-label="English"
        className={`${base} ${lang === "en" ? "text-bone" : "text-stone hover:text-bone"}`}
      >
        EN
      </Link>
      <span className="text-hairline-2" aria-hidden="true">
        /
      </span>
      <Link
        href="/ar"
        lang="ar"
        aria-label="العربية"
        className={`${base} font-arabic-sans text-base leading-none ${
          lang === "ar" ? "text-bone" : "text-stone hover:text-bone"
        }`}
      >
        ع
      </Link>
    </div>
  );
}

export interface NavProps extends BaseLocaleProps {
  readonly content: NavContent;
}

export default function Nav({ lang, content }: Readonly<NavProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass =
    "text-sm text-stone hover:text-bone transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm px-1";

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-hairline">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
        <Link
          href={lang === "ar" ? "/ar" : "/"}
          dir="ltr"
          className="flex items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          aria-label="JR Dream — home"
        >
          <img src="/logo.png" alt="JR Dream Logo" className="h-10 w-auto rounded-sm" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {content.links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Right cluster: language + portal */}
        <div className="hidden md:flex items-center gap-5">
          <LanguageToggle lang={lang} />
          <button className="px-4 py-2 border border-brass/70 text-brass text-sm font-medium hover:bg-brass/10 transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
            {content.clientPortal}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((o) => !o)}
          className="md:hidden p-2 -me-2 text-bone hover:text-brass transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded-sm"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-ink-2">
          <div className="px-4 py-4 space-y-1">
            {content.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-stone hover:text-bone transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm px-2 py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-hairline mt-3 pt-4 flex items-center justify-between gap-4">
              <LanguageToggle lang={lang} />
              <button className="px-4 py-2 border border-brass/70 text-brass text-sm font-medium hover:bg-brass/10 transition-colors rounded-sm">
                {content.clientPortal}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
