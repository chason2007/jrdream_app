"use client";

import { useState } from "react";
import Link from "next/link";
import type { Content, Locale } from "@/lib/content";
import ProposalModal from "./ProposalModal";

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Content;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const footerDict = dict.footer;
  const isAr = lang === "ar";

  return (
    <>
      <footer className="bg-ink-2 border-t border-hairline text-stone text-sm pt-16 pb-12 relative overflow-hidden">
        {/* Subtle ambient lighting top border */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-hairline">
            {/* Left Column: Brand & Location */}
            <div className="lg:col-span-5 space-y-6">
              <Link
                href={isAr ? "/ar" : "/"}
                dir="ltr"
                className="inline-block rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                aria-label="JR Dream — home"
              >
                <img
                  src="/logo.png"
                  alt="JR Dream Logo"
                  className="h-12 w-auto rounded-sm"
                />
              </Link>

              <p className="text-stone leading-relaxed max-w-md text-balance">
                {footerDict.tagline}
              </p>

              {/* Proposal CTA Button */}
              <div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-brass text-ink font-medium text-sm rounded-sm transition-all hover:bg-brass-2 hover:shadow-[0_4px_20px_-5px_rgba(198,161,91,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>{footerDict.requestProposalBtn}</span>
                </button>
              </div>

              {/* Location details */}
              <div className="pt-2 space-y-2 text-xs font-mono text-stone/90">
                <div className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-brass shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{footerDict.address}</span>
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <a
                    href={`tel:${footerDict.phone.replace(/\s+/g, "")}`}
                    className="hover:text-bone transition-colors flex items-center gap-1.5"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-brass"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{footerDict.phone}</span>
                  </a>
                  <a
                    href={`mailto:${footerDict.email}`}
                    className="hover:text-bone transition-colors flex items-center gap-1.5"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-brass"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{footerDict.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Navigation Links & Embedded Location Map */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Navigation Links */}
              {footerDict.sections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h3 className="text-xs font-mono uppercase text-bone tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="flex flex-wrap gap-x-8 gap-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            if (link.label.includes("Proposal") || link.label.includes("عرض")) {
                              e.preventDefault();
                              setIsModalOpen(true);
                            }
                          }}
                          className="hover:text-bone transition-colors text-sm font-medium"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Location Map Embed */}
              <div className="w-full h-48 sm:h-56 rounded-md border border-hairline hover:border-brass/40 transition-colors overflow-hidden relative shadow-lg bg-ink">
                <iframe
                  title="JR DREAM Property & Facilities Management Office Location — Mazyad Mall Abu Dhabi"
                  src="https://maps.google.com/maps?q=JR+DREAM+Property+%26+Facilities+Management+Tower+1+Mazyad+Mall+Abu+Dhabi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.5) contrast(1.1) opacity(0.9)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone/70">
            <p>{footerDict.copyright} {footerDict.rights}</p>
          </div>
        </div>
      </footer>

      {/* Proposal Request Modal */}
      <ProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        dict={dict}
      />
    </>
  );
}
