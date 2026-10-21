import { Hero, Skills, Projects, Footer } from "@/components/Sections";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
