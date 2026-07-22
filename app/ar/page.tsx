import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import LocaleHtml from "@/components/LocaleHtml";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "جيه آر دريم | إدارة العقارات والمرافق",
  description: "استشارات متميّزة في إدارة العقارات والمرافق في أبوظبي",
};

export default function ArabicHome() {
  const dict = content.ar;

  return (
    <div lang="ar" dir="rtl" className="flex flex-col min-h-screen bg-ink">
      <LocaleHtml lang="ar" dir="rtl" />
      <Nav lang="ar" dict={dict} />
      <main className="flex-1">
        <Hero lang="ar" dict={dict} />
        <About lang="ar" dict={dict} />
        <Services lang="ar" dict={dict} />
        <Team lang="ar" dict={dict} />
      </main>
      <Footer lang="ar" dict={dict} />
    </div>
  );
}
