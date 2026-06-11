import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NoMandateBanner from "@/components/NoMandateBanner";
import CuetronixShowcase from "@/components/CuetronixShowcase";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return true;
        }
      }
      return false;
    };

    if (!scrollToHash()) {
      setTimeout(() => {
        if (!scrollToHash()) {
          setTimeout(scrollToHash, 300);
        }
      }, 100);
    }

    const handleHashChange = () => setTimeout(scrollToHash, 100);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <NoMandateBanner />
      <CuetronixShowcase />
      <Services />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
