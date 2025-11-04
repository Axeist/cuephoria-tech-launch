import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import POSFeatures from "@/components/POSFeatures";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <POSFeatures />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
