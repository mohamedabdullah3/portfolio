import Nav from "@/components/ui/Nav";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ImpactStrip from "@/components/sections/ImpactStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <ImpactStrip />
        <About />
        <Services />
        <CaseStudies />
        <TechStack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
