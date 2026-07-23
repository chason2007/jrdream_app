import type { Content } from "./types";
import { getTeamContent, getFooterContent, getProposalModalContent } from "./common";
import { createServiceItems } from "./helpers";

export function createContent(lang: "en" | "ar"): Content {
  const isAr = lang === "ar";
  return {
    dir: isAr ? "rtl" : "ltr",
    htmlLang: isAr ? "ar" : "en",
    nav: {
      links: [
        { label: isAr ? "المرافق" : "Facilities", href: "#facilities" },
        { label: isAr ? "أعمالنا" : "Portfolio", href: "#portfolio" },
        { label: isAr ? "لماذا نحن" : "Why Us", href: "#why-us" },
      ],
      clientPortal: isAr ? "بوابة العملاء" : "Client Portal",
    },
    hero: {
      eyebrow: "",
      headlineLead: isAr ? "أفضل إدارة للمرافق" : "Great facilities management is",
      headlineAccent: isAr ? "لا تُرى." : "invisible.",
      lede: "[subheading]",
      ctaPrimary: isAr ? "تحدّث إلينا" : "Speak with us",
      ctaSecondary: isAr ? "الدخول إلى البوابة" : "Enter client portal",
    },
    services: {
      eyebrow: "",
      title: isAr ? "الخدمات المقدمة" : "Services Offered",
      mission: "",
      items: createServiceItems(
        isAr
          ? [
              "إدارة العقارات",
              "إدارة المرافق",
              "استشارات عقارية",
              "إدارة مشاريع التجديد",
              "إدارة مشاريع إعادة التطوير",
              "مسح وتقييم حالة العقارات",
              "الاستلام بعد الإنجاز",
              "تسليم العقارات",
              "التجهيزات والتصميم التجاري",
            ]
          : [
              "Property Management",
              "Facilities Management",
              "Property Consultant",
              "Refurbishment Project Management",
              "Redevelopment Project Management",
              "Property Conditional Survey",
              "Post Completion Takeover",
              "Property Handover",
              "Commercial Fitout",
            ]
      ),
    },
    about: {
      eyebrow: "",
      title: isAr
        ? "استشارات إدارة العقارات والمشاريع والمرافق"
        : "Property, Projects & Facilities Consultancy",
      headline: "",
      paragraphs: isAr
        ? [
            "تأسست جي آر دريم في عام 2024، وتجمع بين أكثر من 17 عاماً من الخبرة في دولة الإمارات في مجالات العقارات والمرافق واستراتيجيات بيئة العمل — مما يساعد العملاء على تحويل المساحات المعقدة إلى بيئات عملية ومستدامة وملهمة.",
            "يعتمد نهجنا على التكنولوجيا الحديثة، مع التركيز على القرارات المدعومة بالبيانات والشفافية والتميز التشغيلي عبر جميع مراحل المشروع — من التخطيط الاستراتيجي وإدارة التصميم إلى التنفيذ والأداء المستدام للأصول.",
            "نفتخر بكوننا شريكاً موثوقاً للمؤسسات التي تساهم في تشكيل مستقبل دولة الإمارات العربية المتحدة، حيث نجمع بين أفضل الممارسات العالمية والمعرفة المحلية الإقليمية.",
          ]
        : [
            "Founded in 2024, JR Dream brings together over 17 years of UAE experience in real estate, facilities, and workplace strategy — helping clients turn complex spaces into efficient, sustainable, and inspiring environments.",
            "Our approach is technology-led, emphasizing data-driven decisions, transparency, and operational excellence across every project phase — from strategic planning and design management to delivery and ongoing asset performance.",
            "We are proud to serve as trusted partners for organizations shaping the future of the UAE, combining global best practices with local insight.",
          ],
      stats: [],
    },
    team: getTeamContent(lang),
    footer: getFooterContent(lang),
    proposalModal: getProposalModalContent(lang),
  };
}
