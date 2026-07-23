import type { TeamContent, FooterContent, ProposalModalContent } from "./types";

export const commonContact = {
  phone: "+971 52 298 8611",
  email: "supportcenter@jrdream.com",
  addressEn: "Tower 1, Mazyad Mall Offices Floor 9, Office 30 - Abu Dhabi - United Arab Emirates",
  addressAr: "البرج 1، مكاتب مزيد مول الطابق 9، مكتب 30 - أبوظبي - الإمارات العربية المتحدة",
  hoursEn: "Sun – Thu: 8:00 AM – 6:00 PM GST",
  hoursAr: "الأحد – الخميس: 8:00 صباحاً – 6:00 مساءً",
  emailPlaceholder: "sultan@company.ae",
  phonePlaceholder: "+971 50 123 4567",
};

export function getTeamContent(lang: "en" | "ar"): TeamContent {
  const isAr = lang === "ar";
  return {
    eyebrow: isAr ? "القيادة والخبرة" : "Leadership & Expertise",
    title: isAr ? "فريق العمل" : "Meet Our Team",
    subtitle: isAr
      ? "نخبة من المحترفين يعملون معاً لتقديم حلول استثنائية في إدارة العقارات والمشاريع والمرافق في الإمارات."
      : "Dedicated professionals working together to deliver exceptional property, projects, and facilities management solutions across the UAE.",
    founder: {
      name: isAr ? "جوزيف داس" : "Joseph Dass",
      role: isAr ? "المؤسس / المدير التنفيذي" : "Founder / Director",
      bio: isAr
        ? "يمتلك جوزيف خبرة تمتد لأكثر من عقدين في قطاع إدارة العقارات والأصول، ويقود جي آر دريم برؤية تهدف إلى إعادة تعريف استشارات إدارة العقارات والمرافق في الإمارات."
        : "With over two decades of experience in the property and asset management sector, Joseph leads JR Dream with a vision to redefine real estate and facilities management consulting in the UAE.",
      image: "/josephdass.jpg",
      email: "jdass@jrdream.com",
      linkedin: "https://www.linkedin.com/in/jrdass/",
    },
    members: [
      {
        name: isAr ? "داريوس لوتينو" : "Darius Lotino",
        role: isAr ? "مدير مشاريع (الهندسة)" : "Project Manager (Engineering)",
        credentials: "MBA, PEE, ACPE",
        image: "/darius.png",
        linkedin: "https://www.linkedin.com/in/darius-z-lotino-mba-pee-acpe-4b1427177/",
      },
      {
        name: isAr ? "جينيفر روبين" : "Jennifer Robin",
        role: isAr ? "مهندسة مشاريع" : "Project Engineer",
        image: "/jennifer.png",
        linkedin: "https://www.linkedin.com/in/jjennifer-robin/",
      },
      {
        name: isAr ? "يوهانس" : "Johanas",
        role: isAr ? "مستشار أول للمرافق" : "Senior Facilities Consultant",
        image: "/johanas.png",
      },
      {
        name: isAr ? "بيجو" : "Biju",
        role: isAr ? "مستشار العمليات والدعم الفني" : "Operations & Technical Advisor",
        image: "/biju.png",
      },
      {
        name: isAr ? "بيتر" : "Peter",
        role: isAr ? "مسؤول الأصول والامتثال" : "Asset & Compliance Lead",
        image: "/peter.png",
      },
    ],
  };
}

export function getFooterContent(lang: "en" | "ar"): FooterContent {
  const isAr = lang === "ar";
  return {
    tagline: "",
    address: isAr ? commonContact.addressAr : commonContact.addressEn,
    phone: commonContact.phone,
    email: commonContact.email,
    hours: isAr ? commonContact.hoursAr : commonContact.hoursEn,
    requestProposalBtn: isAr ? "طلب تقديم عرض" : "Request a Proposal",
    sections: [],
    copyright: isAr
      ? "© 2026 استشارات جي آر دريم لإدارة العقارات والمرافق."
      : "© 2026 JR Dream Property & Facilities Management Consultancy.",
    rights: isAr ? "جميع الحقوق محفوظة." : "All Rights Reserved.",
  };
}

export function getProposalModalContent(lang: "en" | "ar"): ProposalModalContent {
  const isAr = lang === "ar";
  return {
    title: isAr ? "طلب تقديم عرض أسعار مخصص" : "Request a Custom Proposal",
    subtitle: isAr
      ? "أخبرنا عن عقاراتك وأهداف الإدارة. سيقوم فريقنا الاستشاري في أبوظبي بالرد عليك خلال 24 ساعة."
      : "Tell us about your property and management goals. Our advisory team in Abu Dhabi will respond within 24 hours.",
    nameLabel: isAr ? "الاسم الكامل" : "Full Name",
    namePlaceholder: isAr ? "مثال: سلطان المنصوري" : "e.g. Sultan Al Mansoori",
    emailLabel: isAr ? "البريد الإلكتروني" : "Email Address",
    emailPlaceholder: commonContact.emailPlaceholder,
    phoneLabel: isAr ? "رقم الهاتف" : "Phone Number",
    phonePlaceholder: commonContact.phonePlaceholder,
    propertyTypeLabel: isAr ? "فئة العقار" : "Property Category",
    propertyOptions: isAr
      ? [
          "برج مكاتب تجاري",
          "مجمع سكني فاخر",
          "مركز تجاري ومتعدد الاستخدامات",
          "منشأة لوجستية وصناعية",
          "أصل حكومي أو ثقافي",
        ]
      : [
          "Commercial Office Tower",
          "Luxury Residential Complex",
          "Retail & Mixed-Use Hub",
          "Industrial & Logistics Facility",
          "Government & Cultural Asset",
        ],
    serviceTypeLabel: isAr ? "نطاق الخدمة الرئيسي" : "Primary Service Scope",
    serviceOptions: isAr
      ? [
          "الإدارة الشاملة للمرافق (TFM)",
          "إدارة العقارات والتأجير",
          "تحديث الكهروميكانيك وكفاءة الطاقة",
          "استشارات عقارية استراتيجية",
        ]
      : [
          "Total Facilities Management (TFM)",
          "Property Management & Leasing",
          "MEP & Energy Efficiency Retrofit",
          "Strategic Real Estate Consulting",
        ],
    messageLabel: isAr ? "تفاصيل المشروع والمتطلبات الخاصة" : "Project Details & Specific Requirements",
    messagePlaceholder: isAr
      ? "حدد مساحة المبنى (قدم مربع)، الموقع، الجدول الزمني، أو التحديات الحالية..."
      : "Specify building area (sq ft), location, timeline, or current challenges...",
    submitBtn: isAr ? "إرسال طلب العرض" : "Submit Proposal Request",
    successTitle: isAr ? "تم استلام طلب تقديم العرض" : "Proposal Request Received",
    successMsg: isAr
      ? "شكراً لتواصلك مع جي آر دريم. سيقوم مدير المحفظة بمراجعة تفاصيلك والتواصل معك قريباً."
      : "Thank you for reaching out to JR Dream. A senior portfolio director will review your specifications and contact you shortly.",
    closeBtn: isAr ? "إغلاق النافذة" : "Close Window",
  };
}
