import type { TextDirection } from "@/types/common";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavContent {
  links: NavLink[];
  clientPortal: string;
}

export interface HeroContent {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  lede: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  mission: string;
  items: ServiceItem[];
}

export interface StatItem {
  label: string;
  value: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  headline: string;
  paragraphs: string[];
  stats: StatItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  image: string;
  linkedin?: string;
}

export interface TeamFounder {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
}

export interface TeamContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  founder: TeamFounder;
  members: TeamMember[];
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface FooterContent {
  tagline: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  requestProposalBtn: string;
  sections: FooterSection[];
  copyright: string;
  rights: string;
}

export interface ProposalModalContent {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  propertyTypeLabel: string;
  propertyOptions: string[];
  serviceTypeLabel: string;
  serviceOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitBtn: string;
  successTitle: string;
  successMsg: string;
  closeBtn: string;
}

export interface Content {
  dir: TextDirection;
  htmlLang: string;
  nav: NavContent;
  hero: HeroContent;
  services: ServicesContent;
  about: AboutContent;
  team: TeamContent;
  footer: FooterContent;
  proposalModal: ProposalModalContent;
}
