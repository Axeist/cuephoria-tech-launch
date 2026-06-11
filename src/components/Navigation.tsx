import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CuetronixLogo from "@/components/brand/CuetronixLogo";
import TrialCTA from "@/components/TrialCTA";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const goToHomeHash = (hash: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/${hash ? `#${hash}` : ""}`;
      return;
    }
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinkClass = "text-foreground hover:text-primary transition-colors";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex-shrink-0 group">
            <CuetronixLogo
              variant="stacked"
              className="h-14 sm:h-16 w-auto group-hover:opacity-90 transition-opacity"
            />
          </a>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button onClick={() => goToHomeHash("cuetronix")} className={navLinkClass}>
              Cuetronix
            </button>
            <button onClick={() => goToHomeHash("services")} className={navLinkClass}>
              Services
            </button>
            <button onClick={() => goToHomeHash("team")} className={navLinkClass}>
              Team
            </button>
            <button onClick={() => goToHomeHash("contact")} className={navLinkClass}>
              Contact
            </button>
            <a href="/blog" className={navLinkClass}>
              Blog
            </a>
            <a href="/pos" className={navLinkClass}>
              Product
            </a>
            <TrialCTA size="default" className="text-sm px-4 py-2 h-9" />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in bg-background/95 backdrop-blur-lg rounded-xl p-4 border border-border/60">
            <button onClick={() => goToHomeHash("cuetronix")} className="block w-full text-left text-foreground hover:text-primary">
              Cuetronix
            </button>
            <button onClick={() => goToHomeHash("services")} className="block w-full text-left text-foreground hover:text-primary">
              Services
            </button>
            <button onClick={() => goToHomeHash("team")} className="block w-full text-left text-foreground hover:text-primary">
              Team
            </button>
            <button onClick={() => goToHomeHash("clients")} className="block w-full text-left text-foreground hover:text-primary">
              Clients
            </button>
            <button onClick={() => goToHomeHash("contact")} className="block w-full text-left text-foreground hover:text-primary">
              Contact
            </button>
            <a href="/blog" className="block w-full text-left text-foreground hover:text-primary">
              Blog
            </a>
            <a href="/pos" className="block w-full text-left text-foreground hover:text-primary">
              Product
            </a>
            <TrialCTA className="w-full" size="default" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
