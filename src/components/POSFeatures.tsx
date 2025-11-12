import { useState } from "react";
import { CheckCircle, TrendingUp, Users, Zap, Phone } from "lucide-react";
import posImage from "@/assets/pos-system.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Handle transactions in milliseconds with our optimized POS architecture",
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Get instant insights into sales, inventory, and customer behavior",
  },
  {
    icon: Users,
    title: "Multi-user Management",
    description: "Seamlessly manage staff access and roles across your venue",
  },
  {
    icon: CheckCircle,
    title: "Inventory Tracking",
    description: "Never run out of stock with automated inventory management",
  },
];

const POSFeatures = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  const goToContact = () => {
    // If we're already on the home page, just scroll
    if (window.location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      // Navigate to home page with hash
      window.location.href = '/#contact';
    }
  };

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDemoDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDemoDialogOpen(false);
    // Navigate to contact page after dialog closes
    goToContact();
  };

  return (
    <section id="pos" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm">
                <span className="text-sm text-primary font-semibold">Featured Product</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Cuephoria's <span className="text-gradient">Cutting-Edge POS</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The ultimate point-of-sale solution designed specifically for gaming lounges, cafes, and entertainment venues.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-card animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-background" />
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
              <a
                href="#"
                onClick={handleDemoClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(140,60,255,0.5)]"
              >
                View Live Demo
                <Zap className="w-4 h-4" />
              </a>
              <a
                href="/pos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary/50 hover:bg-primary/10 text-foreground font-semibold transition-all duration-300"
              >
                Learn more about POS
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl hover:shadow-[0_0_40px_rgba(140,60,255,0.4)] transition-all duration-500">
              <img
                src={posImage}
                alt="Cuephoria POS system for gaming lounge and snooker club with booking management and inventory tracking"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-lg border border-primary/50 rounded-xl p-4 shadow-xl animate-float">
              <div className="text-3xl font-bold text-gradient mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-lg border border-primary/50 rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-3xl font-bold text-gradient mb-1">&lt;1s</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Dialog */}
      <Dialog open={demoDialogOpen} onOpenChange={(open) => {
        if (!open) {
          handleDialogClose();
        }
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Demo Access Required</DialogTitle>
            <DialogDescription className="text-center pt-2 text-base">
              Please reach out to the sales team <span className="font-semibold">8637625155</span> to get access for the demo.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/30">
              <Phone className="w-5 h-5 text-primary" />
              <a 
                href="tel:8637625155" 
                className="text-lg font-semibold text-primary hover:underline"
              >
                8637625155
              </a>
            </div>
          </div>
          <DialogFooter className="sm:justify-center">
            <Button
              onClick={handleDialogClose}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Go to Contact Page
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default POSFeatures;
