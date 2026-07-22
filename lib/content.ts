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
  services: {
    eyebrow: string;
    title: string;
    mission: string;
    items: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    headline: string;
    paragraphs: string[];
    stats: {
      label: string;
      value: string;
    }[];
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    founder: {
      name: string;
      role: string;
      bio: string;
      image: string;
      email: string;
      linkedin: string;
    };
    members: {
      name: string;
      role: string;
      credentials?: string;
      image: string;
      linkedin?: string;
    }[];
  };
  footer: {
    tagline: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    requestProposalBtn: string;
    sections: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    copyright: string;
    rights: string;
  };
  proposalModal: {
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
  };
}

export const content: Record<Locale, Content> = {
  en: {
    dir: "ltr",
    htmlLang: "en",
    nav: {
      links: [
        { label: "Real Estate", href: "#services" },
        { label: "Facilities", href: "#facilities" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Why Us", href: "#why-us" },
      ],
      clientPortal: "Client Portal",
    },
    hero: {
      eyebrow: "Transforming Spaces. Empowering Vision",
      headlineLead: "Great facilities management is",
      headlineAccent: "invisible.",
      lede: "JR Dream keeps Abu Dhabi's properties running so completely that the work itself disappears — leaving only a building that performs, every hour of every day.",
      ctaPrimary: "Speak with us",
      ctaSecondary: "Enter client portal",
    },
    services: {
      eyebrow: "Our Scope of Work",
      title: "Services Offered",
      mission: "Bringing innovative solutions to optimize the potential of our clients and partners and shaping the future of Real Estate Management.",
      items: [
        {
          num: "01",
          title: "Property Conditional Assessment Survey",
          desc: "Comprehensive structural, technical, and life-cycle evaluations of real estate assets to identify risks, deferments, and optimization priorities.",
        },
        {
          num: "02",
          title: "Property Fabric and MEP Refurbishment",
          desc: "End-to-end refurbishment of architectural fabric and Mechanical, Electrical, and Plumbing (MEP) systems for enhanced operational performance.",
        },
        {
          num: "03",
          title: "Property Redevelopment Concept, Design & Project Management",
          desc: "Strategic redevelopment planning, architectural & engineering concept design, and turnkey project management for maximum asset value.",
        },
        {
          num: "04",
          title: "Property / Community Management & FM Tender Support",
          desc: "Full-spectrum property and community management, including Facilities Management tender preparation, vendor selection, and mobilization.",
        },
        {
          num: "05",
          title: "Automation and Digitization Solutions Consultation",
          desc: "Expert advisory and implementation of smart building automation, IoT monitoring, prop-tech integration, and digital FM workflows.",
        },
      ],
    },
    about: {
      eyebrow: "About JR Dream",
      title: "Property, Projects & Facilities Consultancy",
      headline: "Delivering Tailored Solutions to Aviation, Corporate, and Elite Private Clients",
      paragraphs: [
        "JR Dream is a Property, Projects, and Facilities Management Consultancy based in Abu Dhabi, delivering tailored solutions to Aviation, Corporate, and Elite Private Clients.",
        "Founded in 2024, JR Dream brings together over 17 years of UAE experience in real estate, facilities, and workplace strategy — helping clients turn complex spaces into efficient, sustainable, and inspiring environments.",
        "Our approach is technology-led, emphasizing data-driven decisions, transparency, and operational excellence across every project phase — from strategic planning and design management to delivery and ongoing asset performance.",
        "We are proud to serve as trusted partners for organizations shaping the future of the UAE, combining global best practices with local insight.",
      ],
      stats: [
        { label: "UAE Industry Experience", value: "17+ Years" },
        { label: "Established HQ", value: "Abu Dhabi" },
        { label: "Target Sectors", value: "Aviation & Corporate" },
        { label: "Delivery Model", value: "Data & Tech Led" },
      ],
    },
    team: {
      eyebrow: "Leadership & Expertise",
      title: "Meet Our Team",
      subtitle: "Dedicated professionals working together to deliver exceptional property, projects, and facilities management solutions across the UAE.",
      founder: {
        name: "Joseph Dass",
        role: "Founder / Director",
        bio: "With over two decades of experience in the property and asset management sector, Joseph leads JR Dream with a vision to redefine real estate and facilities management consulting in the UAE.",
        image: "/josephdass.jpg",
        email: "jdass@jrdream.com",
        linkedin: "https://www.linkedin.com/in/jrdass/",
      },
      members: [
        {
          name: "Darius Lotino",
          role: "Project Manager (Engineering)",
          credentials: "MBA, PEE, ACPE",
          image: "/darius.png",
          linkedin: "https://www.linkedin.com/in/darius-z-lotino-mba-pee-acpe-4b1427177/",
        },
        {
          name: "Jennifer Robin",
          role: "Project Engineer",
          image: "/jennifer.png",
          linkedin: "https://www.linkedin.com/in/jjennifer-robin/",
        },
        {
          name: "Johanas",
          role: "Senior Facilities Consultant",
          image: "/johanas.png",
        },
        {
          name: "Biju",
          role: "Operations & Technical Advisor",
          image: "/biju.png",
        },
        {
          name: "Peter",
          role: "Asset & Compliance Lead",
          image: "/peter.png",
        },
      ],
    },
    footer: {
      tagline: "Transforming Spaces. Empowering Vision — Elevating real estate performance and facilities excellence across Abu Dhabi.",
      address: "Tower 1, Mazyad Mall Offices Floor 9, Office 30 - Abu Dhabi - United Arab Emirates",
      phone: "+971 2 600 0100",
      email: "contact@jrdream.ae",
      hours: "Sun – Thu: 8:00 AM – 6:00 PM GST",
      requestProposalBtn: "Request a Proposal",
      sections: [
        {
          title: "Navigation",
          links: [
            { label: "Real Estate", href: "#services" },
            { label: "Facilities", href: "#facilities" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Why Us", href: "#why-us" },
            { label: "Client Portal", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 JR Dream Real Estate & Facilities Management Co. W.L.L.",
      rights: "All rights reserved.",
    },
    proposalModal: {
      title: "Request a Custom Proposal",
      subtitle: "Tell us about your property and management goals. Our advisory team in Abu Dhabi will respond within 24 hours.",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Sultan Al Mansoori",
      emailLabel: "Email Address",
      emailPlaceholder: "sultan@company.ae",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+971 50 123 4567",
      propertyTypeLabel: "Property Category",
      propertyOptions: [
        "Commercial Office Tower",
        "Luxury Residential Complex",
        "Retail & Mixed-Use Hub",
        "Industrial & Logistics Facility",
        "Government & Cultural Asset",
      ],
      serviceTypeLabel: "Primary Service Scope",
      serviceOptions: [
        "Total Facilities Management (TFM)",
        "Property Management & Leasing",
        "MEP & Energy Efficiency Retrofit",
        "Strategic Real Estate Consulting",
      ],
      messageLabel: "Project Details & Specific Requirements",
      messagePlaceholder: "Specify building area (sq ft), location, timeline, or current challenges...",
      submitBtn: "Submit Proposal Request",
      successTitle: "Proposal Request Received",
      successMsg: "Thank you for reaching out to JR Dream. A senior portfolio director will review your specifications and contact you shortly.",
      closeBtn: "Close Window",
    },
  },
  ar: {
    dir: "rtl",
    htmlLang: "ar",
    nav: {
      links: [
        { label: "العقارات", href: "#services" },
        { label: "المرافق", href: "#facilities" },
        { label: "أعمالنا", href: "#portfolio" },
        { label: "لماذا نحن", href: "#why-us" },
      ],
      clientPortal: "بوابة العملاء",
    },
    hero: {
      eyebrow: "تحويل المساحات. تمكين الرؤية",
      headlineLead: "أفضل إدارة للمرافق",
      headlineAccent: "لا تُرى.",
      lede: "تُبقي JR Dream عقارات أبوظبي تعمل بكفاءةٍ تامّة حتى يتلاشى العمل نفسه — فلا يبقى سوى مبنًى يؤدّي مهامه، في كل ساعةٍ من كل يوم.",
      ctaPrimary: "تحدّث إلينا",
      ctaSecondary: "الدخول إلى البوابة",
    },
    services: {
      eyebrow: "نطاق أعمالنا",
      title: "الخدمات المقدمة",
      mission: "تقديم حلول مبتكرة لتعظيم إمكانيات عملائنا وشركائنا وتشكيل مستقبل إدارة العقارات.",
      items: [
        {
          num: "01",
          title: "مسح وتقييم حالة العقارات",
          desc: "تقييم شامل وهيكلي وفني لأصول العقارات لتحديد المخاطر والأولويات الاستراتيجية لتحسين أداء المباني.",
        },
        {
          num: "02",
          title: "تجديد الهيكل الخارجي والأنظمة الكهروميكانيكية (MEP)",
          desc: "إعادة تأهيل وتجديد متكامل لهيكل المبنى والأنظمة الميكانيكية والكهربائية والسباكة لرفع الكفاءة التشغيلية.",
        },
        {
          num: "03",
          title: "مفهوم وتصميم وإدارة مشاريع إعادة تطوير العقارات",
          desc: "تخطيط استراتيجي لإعادة التطوير، وتصميم المفاهيم المعمارية والهندسية، وإدارة المشاريع الشاملة لزيادة قيمة الأصول.",
        },
        {
          num: "04",
          title: "إدارة العقارات والمجمعات ودعم مناقصات إدارة المرافق",
          desc: "إدارة شاملة للعقارات والمجمعات، تشمل إعداد مناقصات إدارة المرافق، اختيار الموردين، والتحضير للتشغيل.",
        },
        {
          num: "05",
          title: "استشارات حلول الأتمتة والتحول الرقمي",
          desc: "تقديم الاستشارات وتطبيق تقنيات المباني الذكية، وأجهزة إنترنت الأشياء (IoT)، والحلول الرقمية لسير العمل.",
        },
      ],
    },
    about: {
      eyebrow: "عن جي آر دريم",
      title: "استشارات إدارة العقارات والمشاريع والمرافق",
      headline: "تقديم حلول مخصصة لقطاعات الطيران والشركات وكبار العملاء المميزين",
      paragraphs: [
        "جي آر دريم هي شركة استشارات متخصصة في إدارة العقارات والمشاريع والمرافق مقرها أبوظبي، تقدم حلولاً مخصصة لقطاعات الطيران والشركات وكبار العملاء المميزين.",
        "تأسست جي آر دريم في عام 2024، وتجمع بين أكثر من 17 عاماً من الخبرة في دولة الإمارات في مجالات العقارات والمرافق واستراتيجيات بيئة العمل — مما يساعد العملاء على تحويل المساحات المعقدة إلى بيئات عملية ومستدامة وملهمة.",
        "يعتمد نهجنا على التكنولوجيا الحديثة، مع التركيز على القرارات المدعومة بالبيانات والشفافية والتميز التشغيلي عبر جميع مراحل المشروع — من التخطيط الاستراتيجي وإدارة التصميم إلى التنفيذ والأداء المستدام للأصول.",
        "نفتخر بكوننا شريكاً موثوقاً للمؤسسات التي تساهم في تشكيل مستقبل دولة الإمارات العربية المتحدة، حيث نجمع بين أفضل الممارسات العالمية والمعرفة المحلية الإقليمية.",
      ],
      stats: [
        { label: "خبرة في قطاع الإمارات", value: "+17 عاماً" },
        { label: "المقر الرئيسي", value: "أبوظبي" },
        { label: "القطاعات المستهدفة", value: "الطيران والشركات" },
        { label: "نموذج تقديم الخدمات", value: "مستند للبيانات والتقنية" },
      ],
    },
    team: {
      eyebrow: "القيادة والخبرة",
      title: "فريق العمل",
      subtitle: "نخبة من المحترفين يعملون معاً لتقديم حلول استثنائية في إدارة العقارات والمشاريع والمرافق في الإمارات.",
      founder: {
        name: "جوزيف داس",
        role: "المؤسس / المدير التنفيذي",
        bio: "يمتلك جوزيف خبرة تمتد لأكثر من عقدين في قطاع إدارة العقارات والأصول، ويقود جي آر دريم برؤية تهدف إلى إعادة تعريف استشارات إدارة العقارات والمرافق في الإمارات.",
        image: "/josephdass.jpg",
        email: "jdass@jrdream.com",
        linkedin: "https://www.linkedin.com/in/jrdass/",
      },
      members: [
        {
          name: "داريوس لوتينو",
          role: "مدير مشاريع (الهندسة)",
          credentials: "MBA, PEE, ACPE",
          image: "/darius.png",
          linkedin: "https://www.linkedin.com/in/darius-z-lotino-mba-pee-acpe-4b1427177/",
        },
        {
          name: "جينيفر روبين",
          role: "مهندسة مشاريع",
          image: "/jennifer.png",
          linkedin: "https://www.linkedin.com/in/jjennifer-robin/",
        },
        {
          name: "يوهانس",
          role: "مستشار أول للمرافق",
          image: "/johanas.png",
        },
        {
          name: "بيجو",
          role: "مستشار العمليات والدعم الفني",
          image: "/biju.png",
        },
        {
          name: "بيتر",
          role: "مسؤول الأصول والامتثال",
          image: "/peter.png",
        },
      ],
    },
    footer: {
      tagline: "تحويل المساحات. تمكين الرؤية — الارتقاء بأداء العقارات والتميّز في إدارة المرافق في أبوظبي.",
      address: "البرج 1، مكاتب مزيد مول الطابق 9، مكتب 30 - أبوظبي - الإمارات العربية المتحدة",
      phone: "+971 2 600 0100",
      email: "contact@jrdream.ae",
      hours: "الأحد – الخميس: 8:00 صباحاً – 6:00 مساءً",
      requestProposalBtn: "طلب تقديم عرض",
      sections: [
        {
          title: "التنقل",
          links: [
            { label: "العقارات", href: "#services" },
            { label: "المرافق", href: "#facilities" },
            { label: "أعمالنا", href: "#portfolio" },
            { label: "لماذا نحن", href: "#why-us" },
            { label: "بوابة العملاء", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 شركة جي آر دريم لإدارة العقارات والمرافق ذ.م.م.",
      rights: "جميع الحقوق محفوظة.",
    },
    proposalModal: {
      title: "طلب تقديم عرض أسعار مخصص",
      subtitle: "أخبرنا عن عقاراتك وأهداف الإدارة. سيقوم فريقنا الاستشاري في أبوظبي بالرد عليك خلال 24 ساعة.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: سلطان المنصوري",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "sultan@company.ae",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "+971 50 123 4567",
      propertyTypeLabel: "فئة العقار",
      propertyOptions: [
        "برج مكاتب تجاري",
        "مجمع سكني فاخر",
        "مركز تجاري ومتعدد الاستخدامات",
        "منشأة لوجستية وصناعية",
        "أصل حكومي أو ثقافي",
      ],
      serviceTypeLabel: "نطاق الخدمة الرئيسي",
      serviceOptions: [
        "الإدارة الشاملة للمرافق (TFM)",
        "إدارة العقارات والتأجير",
        "تحديث الكهروميكانيك وكفاءة الطاقة",
        "استشارات عقارية استراتيجية",
      ],
      messageLabel: "تفاصيل المشروع والمتطلبات الخاصة",
      messagePlaceholder: "حدد مساحة المبنى (قدم مربع)، الموقع، الجدول الزمني، أو التحديات الحالية...",
      submitBtn: "إرسال طلب العرض",
      successTitle: "تم استلام طلب تقديم العرض",
      successMsg: "شكراً لتواصلك مع جي آر دريم. سيقوم مدير المحفظة بمراجعة تفاصيلك والتواصل معك قريباً.",
      closeBtn: "إغلاق النافذة",
    },
  },
};
