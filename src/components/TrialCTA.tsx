import { ArrowRight } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { CUETRONIX_URL } from "@/lib/cuetronix";
import { cn } from "@/lib/utils";

interface TrialCTAProps extends Omit<ButtonProps, "asChild"> {
  label?: string;
  showArrow?: boolean;
  external?: boolean;
}

const TrialCTA = ({
  label = "Start 14-Day Free Trial",
  showArrow = true,
  external = true,
  className,
  size = "lg",
  ...props
}: TrialCTAProps) => {
  return (
    <Button
      asChild
      size={size}
      className={cn(
        "bg-gradient-to-r from-[#8B29FF] to-[#E028B9] hover:from-[#7A20EE] hover:to-[#D020A8] text-white shadow-[0_0_24px_rgba(139,41,255,0.35)]",
        className
      )}
      {...props}
    >
      <a
        href={CUETRONIX_URL}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
        {showArrow && <ArrowRight className="ml-2 w-4 h-4" />}
      </a>
    </Button>
  );
};

export default TrialCTA;
