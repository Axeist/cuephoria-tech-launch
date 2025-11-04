import { Code, Database, Globe, Gamepad2, Cloud, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: ShoppingCart,
    title: "Cuephoria POS System",
    description: "Industry-leading point-of-sale solution designed specifically for gaming lounges and cafes with advanced inventory, billing, and analytics.",
    gradient: "from-primary to-blue-400",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Custom-built, responsive websites that captivate your audience and drive business growth with modern technologies.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    description: "Secure domain registration and reliable hosting solutions to keep your digital presence always online and accessible.",
    gradient: "from-cyan-400 to-primary",
  },
  {
    icon: Database,
    title: "Cloud Database",
    description: "Scalable cloud database solutions ensuring your data is secure, accessible, and optimized for peak performance.",
    gradient: "from-primary to-purple-400",
  },
  {
    icon: Gamepad2,
    title: "Gaming Management",
    description: "Specialized software solutions for gaming lounge operations, from booking systems to player management.",
    gradient: "from-purple-400 to-blue-400",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Enterprise-grade cloud infrastructure and services to scale your business without limits.",
    gradient: "from-blue-400 to-primary",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to elevate your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,200,255,0.3)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
