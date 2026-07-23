import type { Content } from "./types";
import { createServiceItems } from "./helpers";
import { getTeamContent, getFooterContent, getProposalModalContent } from "./common";

export const enContent: Content = {
  dir: "ltr",
  htmlLang: "en",
  nav: {
    links: [
      { label: "Facilities", href: "#facilities" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Why Us", href: "#why-us" },
    ],
    clientPortal: "Client Portal",
  },
  hero: {
    eyebrow: "",
    headlineLead: "Great facilities management is",
    headlineAccent: "invisible.",
    lede: "[subheading]",
    ctaPrimary: "Speak with us",
    ctaSecondary: "Enter client portal",
  },
  services: {
    eyebrow: "",
    title: "Services Offered",
    mission: "",
    items: createServiceItems([
      "Property Management",
      "Facilities Management",
      "Property Consultant",
      "Refurbishment Project Management",
      "Redevelopment Project Management",
      "Property Conditional Survey",
      "Post Completion Takeover",
      "Property Handover",
      "Commercial Fitout",
    ]),
  },
  about: {
    eyebrow: "",
    title: "Property, Projects & Facilities Consultancy",
    headline: "",
    paragraphs: [
      "Founded in 2024, JR Dream brings together over 17 years of UAE experience in real estate, facilities, and workplace strategy — helping clients turn complex spaces into efficient, sustainable, and inspiring environments.",
      "Our approach is technology-led, emphasizing data-driven decisions, transparency, and operational excellence across every project phase — from strategic planning and design management to delivery and ongoing asset performance.",
      "We are proud to serve as trusted partners for organizations shaping the future of the UAE, combining global best practices with local insight.",
    ],
    stats: [],
  },
  team: getTeamContent("en"),
  footer: getFooterContent("en"),
  proposalModal: getProposalModalContent("en"),
};
