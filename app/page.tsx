import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LocaleHtml from "@/components/LocaleHtml";
import { content } from "@/lib/content";

export default function Home() {
  const dict = content.en;

  return (
    <div lang="en" dir="ltr" className="flex flex-col min-h-screen bg-ink">
      <LocaleHtml lang="en" dir="ltr" />
      <Nav lang="en" dict={dict} />
      <main className="flex-1">
        <Hero lang="en" dict={dict} />
      </main>
    </div>
  );
}
