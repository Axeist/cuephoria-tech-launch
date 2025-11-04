import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import posImage from "@/assets/pos-system.jpg";

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
  return (
    <section id="pos" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

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
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center flex-shrink-0">
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

            <div className="pt-4">
              <a
                href="https://admin.cuephoria.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,200,255,0.5)]"
              >
                View Live Demo
                <Zap className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl hover:shadow-[0_0_40px_rgba(0,200,255,0.4)] transition-all duration-500">
              <img
                src={posImage}
                alt="Cuephoria POS System"
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
    </section>
  );
};

export default POSFeatures;
