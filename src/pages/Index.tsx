import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import POSFeatures from "@/components/POSFeatures";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation when page loads
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Scroll to element
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
      }
      return false;
    };

    // Try immediately
    if (!scrollToHash()) {
      // If element not found, try again after a short delay
      setTimeout(() => {
        if (!scrollToHash()) {
          // Try one more time after components are fully rendered
          setTimeout(() => {
            scrollToHash();
          }, 300);
        }
      }, 100);
    }

    // Also handle hash changes (e.g., when navigating from another page)
    const handleHashChange = () => {
      setTimeout(() => {
        scrollToHash();
      }, 100);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <POSFeatures />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
