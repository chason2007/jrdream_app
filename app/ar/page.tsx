import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import LocaleHtml from "@/components/LocaleHtml";
import { getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "جيه آر دريم | إدارة العقارات والمرافق",
  description: "استشارات متميّزة في إدارة العقارات والمرافق في أبوظبي",
};

export default function ArabicHome() {
  const dict = getContent("ar");

  return (
    <div lang="ar" dir="rtl" className="flex flex-col min-h-screen bg-ink">
      <LocaleHtml lang="ar" dir="rtl" />
      <Nav lang="ar" content={dict.nav} />
      <main className="flex-1">
        <Hero lang="ar" content={dict.hero} />
        <About lang="ar" content={dict.about} />
        <Services lang="ar" content={dict.services} />
        <Team lang="ar" content={dict.team} />
      </main>
      <Footer
        lang="ar"
        content={dict.footer}
        proposalModalContent={dict.proposalModal}
      />
    </div>
  );
}
