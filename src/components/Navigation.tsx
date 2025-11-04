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
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-1 ring-primary/40 shadow-[0_0_18px_rgba(140,60,255,0.35)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(140,60,255,0.6)]">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-primary/40 via-transparent to-secondary/40 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
              <img src={logo} alt="Cuephoria" className="relative w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[1.2rem] font-extrabold tracking-tight bg-gradient-to-r from-primary via-fuchsia-400 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(140,60,255,0.15)]">
                Cuephoria
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[0_0_12px_rgba(140,60,255,0.35)]">
                Tech
              </span>
            </div>
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
