export type Locale = "en" | "ar";

export interface Content {
  dir: "ltr" | "rtl";
  htmlLang: string;
  nav: {
    links: { label: string; href: string }[];
    clientPortal: string;
  };
  hero: {
    eyebrow: string;
    headlineLead: string;
    /** Brass-highlighted closing word(s) of the headline. */
    headlineAccent: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

export const content: Record<Locale, Content> = {
  en: {
    dir: "ltr",
    htmlLang: "en",
    nav: {
      links: [
        { label: "Real Estate", href: "#" },
        { label: "Facilities", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "Why Us", href: "#" },
      ],
      clientPortal: "Client Portal",
    },
    hero: {
      eyebrow: "Real Estate & Facilities Management — Abu Dhabi",
      headlineLead: "Great facilities management is",
      headlineAccent: "invisible.",
      lede: "JR Dream keeps Abu Dhabi's properties running so completely that the work itself disappears — leaving only a building that performs, every hour of every day.",
      ctaPrimary: "Speak with us",
      ctaSecondary: "Enter client portal",
    },
  },
  ar: {
    dir: "rtl",
    htmlLang: "ar",
    nav: {
      links: [
        { label: "العقارات", href: "#" },
        { label: "المرافق", href: "#" },
        { label: "أعمالنا", href: "#" },
        { label: "لماذا نحن", href: "#" },
      ],
      clientPortal: "بوابة العملاء",
    },
    hero: {
      eyebrow: "العقارات وإدارة المرافق — أبوظبي",
      headlineLead: "أفضل إدارة للمرافق",
      headlineAccent: "لا تُرى.",
      lede: "تُبقي JR Dream عقارات أبوظبي تعمل بكفاءةٍ تامّة حتى يتلاشى العمل نفسه — فلا يبقى سوى مبنًى يؤدّي مهامه، في كل ساعةٍ من كل يوم.",
      ctaPrimary: "تحدّث إلينا",
      ctaSecondary: "الدخول إلى البوابة",
    },
  },
};
