import { cn } from "@/lib/utils";

interface CuephoriaTechLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const sizeClasses = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl",
};

const CuephoriaTechLogo = ({
  className,
  size = "md",
  showTagline = false,
}: CuephoriaTechLogoProps) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className={cn("font-extrabold tracking-tight leading-none", sizeClasses[size])}>
        <span className="text-foreground/90">CUEPHORIA</span>
        <span className="bg-gradient-to-r from-[#E028B9] via-[#B030E8] to-[#8B29FF] bg-clip-text text-transparent">
          {" "}TECH
        </span>
      </div>
      {showTagline && (
        <span className="text-xs text-muted-foreground mt-0.5 tracking-wide">
          Technology Simplified
        </span>
      )}
    </div>
  );
};

export default CuephoriaTechLogo;
