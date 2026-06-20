import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { TechnicalImpact } from "@/components/sections/TechnicalImpact";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Experience />
        <Certifications />
        <Skills />
        <TechnicalImpact />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
