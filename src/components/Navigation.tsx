import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cuephoria-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent background scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const goToHomeHash = (hash: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/${hash ? `#${hash}` : ""}`;
      return;
    }
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-primary/40 shadow-[0_0_20px_rgba(140,60,255,0.35)] group-hover:shadow-[0_0_30px_rgba(140,60,255,0.55)] transition-shadow">
              <img src={logo} alt="Cuephoria" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Cuephoria Tech</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => goToHomeHash("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <a href="/pos" className="text-foreground hover:text-primary transition-colors">POS System</a>
            <button onClick={() => goToHomeHash("team")} className="text-foreground hover:text-primary transition-colors">
              Team
            </button>
            <button onClick={() => goToHomeHash("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => goToHomeHash("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in bg-background/95 backdrop-blur-lg rounded-xl p-4 border border-border/60">
            <button onClick={() => goToHomeHash("services")} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <a href="/pos" className="block w-full text-left text-foreground hover:text-primary transition-colors">
              POS System
            </a>
            <button onClick={() => goToHomeHash("team")} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Team
            </button>
            <button onClick={() => goToHomeHash("contact")} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => goToHomeHash("contact")} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
