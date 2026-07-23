import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import LocaleHtml from "@/components/LocaleHtml";
import { getContent } from "@/lib/content";

export default function Home() {
  const dict = getContent("en");

  return (
    <div lang="en" dir="ltr" className="flex flex-col min-h-screen bg-ink">
      <LocaleHtml lang="en" dir="ltr" />
      <Nav lang="en" content={dict.nav} />
      <main className="flex-1">
        <Hero lang="en" content={dict.hero} />
        <About lang="en" content={dict.about} />
        <Services lang="en" content={dict.services} />
      </main>
      <Footer
        lang="en"
        content={dict.footer}
        proposalModalContent={dict.proposalModal}
      />
    </div>
  );
}
