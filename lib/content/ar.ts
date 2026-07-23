import type { Content } from "./types";
import { createServiceItems } from "./helpers";
import { getTeamContent, getFooterContent, getProposalModalContent } from "./common";

export const arContent: Content = {
  dir: "rtl",
  htmlLang: "ar",
  nav: {
    links: [
      { label: "المرافق", href: "#facilities" },
      { label: "أعمالنا", href: "#portfolio" },
      { label: "لماذا نحن", href: "#why-us" },
    ],
    clientPortal: "بوابة العملاء",
  },
  hero: {
    eyebrow: "",
    headlineLead: "أفضل إدارة للمرافق",
    headlineAccent: "لا تُرى.",
    lede: "[subheading]",
    ctaPrimary: "تحدّث إلينا",
    ctaSecondary: "الدخول إلى البوابة",
  },
  services: {
    eyebrow: "",
    title: "الخدمات المقدمة",
    mission: "",
    items: createServiceItems([
      "إدارة العقارات",
      "إدارة المرافق",
      "استشارات عقارية",
      "إدارة مشاريع التجديد",
      "إدارة مشاريع إعادة التطوير",
      "مسح وتقييم حالة العقارات",
      "الاستلام بعد الإنجاز",
      "تسليم العقارات",
      "التجهيزات والتصميم التجاري",
    ]),
  },
  about: {
    eyebrow: "",
    title: "استشارات إدارة العقارات والمشاريع والمرافق",
    headline: "",
    paragraphs: [
      "تأسست جي آر دريم في عام 2024، وتجمع بين أكثر من 17 عاماً من الخبرة في دولة الإمارات في مجالات العقارات والمرافق واستراتيجيات بيئة العمل — مما يساعد العملاء على تحويل المساحات المعقدة إلى بيئات عملية ومستدامة وملهمة.",
      "يعتمد نهجنا على التكنولوجيا الحديثة، مع التركيز على القرارات المدعومة بالبيانات والشفافية والتميز التشغيلي عبر جميع مراحل المشروع — من التخطيط الاستراتيجي وإدارة التصميم إلى التنفيذ والأداء المستدام للأصول.",
      "نفتخر بكوننا شريكاً موثوقاً للمؤسسات التي تساهم في تشكيل مستقبل دولة الإمارات العربية المتحدة، حيث نجمع بين أفضل الممارسات العالمية والمعرفة المحلية الإقليمية.",
    ],
    stats: [],
  },
  team: getTeamContent("ar"),
  footer: getFooterContent("ar"),
  proposalModal: getProposalModalContent("ar"),
};
