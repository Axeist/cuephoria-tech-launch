import { CheckCircle, TrendingUp, Users, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CuetronixLogo from "@/components/brand/CuetronixLogo";
import TrialCTA from "@/components/TrialCTA";
import TrialBadge from "@/components/TrialBadge";
import { CUETRONIX_URL } from "@/lib/cuetronix";

const features = [
  {
    icon: Zap,
    title: "All-in-One Venue OS",
    description: "POS, billing, inventory, and station management in one platform built for gaming venues.",
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Live dashboards for sales, bookings, staff performance, and revenue insights.",
  },
  {
    icon: Users,
    title: "Online Booking & Staff",
    description: "Customer bookings, payroll, attendance, and multi-user role management.",
  },
  {
    icon: CheckCircle,
    title: "Payments & Loyalty",
    description: "Integrated payments, loyalty programs, and automated receipts for every transaction.",
  },
];

const CuetronixShowcase = () => {
  return (
    <section id="cuetronix" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B29FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E028B9]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <TrialBadge className="mx-auto" />
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            Flagship Product
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet <span className="text-gradient">Cuetronix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The all-in-one gaming venue software by Cuephoria Tech. POS, booking, billing, and
            operations — start with a 14-day free trial, no auto-pay mandate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="rounded-2xl border border-primary/30 bg-card/50 p-6 md:p-8 card-gradient">
              <CuetronixLogo variant="stacked" className="w-full max-w-[240px] mx-auto mb-4" />
              <p className="text-center text-sm text-muted-foreground">By Cuephoria Tech</p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8B29FF] to-[#E028B9] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <TrialCTA />
              <Button asChild variant="outline" className="border-primary/50">
                <a href={CUETRONIX_URL} target="_blank" rel="noopener noreferrer">
                  Explore Cuetronix
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="/pos">Full product details</a>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in space-y-6">
            <div className="rounded-2xl border border-primary/30 p-8 card-gradient neon-border">
              <h3 className="text-2xl font-bold mb-4">Why business owners try Cuetronix</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>14-day free trial — explore every feature before you decide</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>No auto-pay mandate — we never auto-charge when your trial ends</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Built for gaming lounges, snooker clubs, billiards, and cafes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Replace spreadsheets, WhatsApp bookings, and manual billing</span>
                </li>
              </ul>
              <div className="mt-8">
                <TrialCTA className="w-full sm:w-auto" label="Start Free Trial on Cuetronix" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/90 backdrop-blur-lg border border-primary/50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-gradient mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="bg-card/90 backdrop-blur-lg border border-primary/50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-gradient mb-1">&lt;1s</div>
                <div className="text-sm text-muted-foreground">Checkout Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuetronixShowcase;
