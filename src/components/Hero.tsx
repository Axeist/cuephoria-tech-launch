import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import CuetronixLogo from "@/components/brand/CuetronixLogo";
import TrialCTA from "@/components/TrialCTA";
import TrialBadge from "@/components/TrialBadge";
import { CUETRONIX_URL } from "@/lib/cuetronix";

const useCountUp = (end: number, durationMs = 1200) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame: number;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(1, elapsed / durationMs);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(end * eased));
          if (progress < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(element);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [end, durationMs]);
  return { ref, value } as const;
};

const Hero = () => {
  const venuesCount = useCountUp(20);
  const trialDaysCount = useCountUp(14);

  const scrollToCuetronix = () => {
    document.getElementById("cuetronix")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 saas-grid-bg" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B29FF]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E028B9]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 z-10 pt-28 pb-16 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <CuetronixLogo variant="stacked" className="w-full max-w-[280px] sm:max-w-[320px] mx-auto" />
          <p className="text-sm text-muted-foreground tracking-wide -mt-4">
            by Cuephoria Tech
          </p>

          <TrialBadge className="mx-auto" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Technology Simplified — powered by{" "}
            <span className="text-gradient">Cuetronix</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuephoria Tech builds venue software for gaming lounges, snooker clubs, and cafes.
            <strong className="text-foreground"> Cuetronix</strong> is our all-in-one OS for POS,
            online booking, billing, staff, and analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <TrialCTA size="lg" />
            <Button
              onClick={scrollToCuetronix}
              size="lg"
              variant="outline"
              className="border-primary/60 text-foreground hover:bg-primary/10"
            >
              See Cuetronix
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <a href={CUETRONIX_URL} target="_blank" rel="noopener noreferrer">
                Explore cuetronix.com
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto">
            <div ref={venuesCount.ref} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{venuesCount.value}+</div>
              <div className="text-xs text-muted-foreground">Venues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div ref={trialDaysCount.ref} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{trialDaysCount.value}</div>
              <div className="text-xs text-muted-foreground">Day Free Trial</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
