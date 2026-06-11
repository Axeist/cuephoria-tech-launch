import { ShieldCheck } from "lucide-react";
import { TRIAL_SUBTEXT } from "@/lib/cuetronix";
import TrialBadge from "@/components/TrialBadge";
import { cn } from "@/lib/utils";

interface NoMandateBannerProps {
  className?: string;
  variant?: "strip" | "card";
}

const NoMandateBanner = ({ className, variant = "strip" }: NoMandateBannerProps) => {
  if (variant === "card") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-primary/30 bg-card/60 backdrop-blur-sm p-6 md:p-8",
          className
        )}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B29FF] to-[#E028B9] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-2 flex-1">
            <TrialBadge compact />
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {TRIAL_SUBTEXT}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={cn("py-6 border-y border-border/50 bg-card/20", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          <TrialBadge />
          <p className="text-sm text-muted-foreground max-w-xl">{TRIAL_SUBTEXT}</p>
        </div>
      </div>
    </section>
  );
};

export default NoMandateBanner;
