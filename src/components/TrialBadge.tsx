import { Sparkles } from "lucide-react";
import { NO_MANDATE_SHORT, TRIAL_HEADLINE } from "@/lib/cuetronix";
import { cn } from "@/lib/utils";

interface TrialBadgeProps {
  className?: string;
  compact?: boolean;
}

const TrialBadge = ({ className, compact = false }: TrialBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm",
        compact ? "px-3 py-1" : "px-4 py-2",
        className
      )}
    >
      <Sparkles className={cn("text-primary", compact ? "w-3 h-3" : "w-4 h-4")} />
      <span className={cn("text-foreground font-medium", compact ? "text-xs" : "text-sm")}>
        {TRIAL_HEADLINE}
        {!compact && (
          <span className="text-muted-foreground font-normal"> · {NO_MANDATE_SHORT}</span>
        )}
      </span>
    </div>
  );
};

export default TrialBadge;
