import { cn } from "@/lib/utils";
import {
  cuetronixLogoStacked,
  cuetronixLogoHorizontal,
  cuetronixIcon,
} from "@/assets/brand";

type CuetronixLogoVariant = "stacked" | "horizontal" | "icon";

const sources: Record<CuetronixLogoVariant, string> = {
  stacked: cuetronixLogoStacked,
  horizontal: cuetronixLogoHorizontal,
  icon: cuetronixIcon,
};

interface CuetronixLogoProps {
  variant?: CuetronixLogoVariant;
  className?: string;
  alt?: string;
}

const CuetronixLogo = ({
  variant = "stacked",
  className,
  alt = "Cuetronix — by Cuephoria Tech",
}: CuetronixLogoProps) => {
  return (
    <img
      src={sources[variant]}
      alt={alt}
      className={cn("h-auto object-contain", className)}
      draggable={false}
    />
  );
};

export default CuetronixLogo;
