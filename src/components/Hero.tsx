import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/pos-system.jpg";
import logo from "@/assets/cuephoria-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <img
          src={heroBg}
          alt="Tech background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="mx-auto w-28 h-28 rounded-2xl overflow-hidden border border-primary/40 shadow-[0_0_40px_rgba(140,60,255,0.6)]">
            <img src={logo} alt="Cuephoria" className="w-full h-full object-cover" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Next-Generation Technology Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Empower Your Business with{" "}
            <span className="text-gradient">Cutting-Edge Tech</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From advanced POS systems to comprehensive web solutions, we deliver technology that transforms gaming lounges and businesses into digital powerhouses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground group shadow-[0_0_24px_rgba(140,60,255,0.35)]"
            >
              <span className="relative z-10 flex items-center">Start Your Journey</span>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="relative border-primary/60 text-foreground hover:bg-primary/10 backdrop-blur supports-[backdrop-filter]:bg-background/40"
            >
              <span className="flex items-center gap-2">Explore Services <ArrowRight className="w-4 h-4" /></span>
            </Button>
            <a
              href="/pos"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-foreground hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_28px_rgba(140,60,255,0.45)]"
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/15 via-secondary/15 to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Learn more about POS</span>
              <ArrowRight className="w-4 h-4 relative" />
            </a>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 pt-12 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Deployments</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "1s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Tx/day Capacity</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "1.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
