import { Code, Database, Globe, Gamepad2, Cloud, ShoppingCart, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CUETRONIX_URL } from "@/lib/cuetronix";

const services = [
  {
    icon: ShoppingCart,
    title: "Cuetronix",
    description: "Our flagship all-in-one venue OS — POS, booking, billing, staff, and analytics. Start your 14-day free trial today.",
    gradient: "from-[#8B29FF] to-[#E028B9]",
    cuetronixLink: true,
  },
  {
    icon: Gamepad2,
    title: "Gaming Management",
    description: "Station booking, session billing, and player management — powered by Cuetronix for gaming lounge operations.",
    gradient: "from-purple-400 to-blue-400",
    cuetronixLink: true,
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Custom-built, responsive websites that captivate your audience and drive business growth with modern technologies.",
    gradient: "from-blue-400 to-cyan-400",
    cuetronixLink: false,
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    description: "Secure domain registration and reliable hosting solutions to keep your digital presence always online and accessible.",
    gradient: "from-cyan-400 to-primary",
    cuetronixLink: false,
  },
  {
    icon: Database,
    title: "Cloud Database",
    description: "Scalable cloud database solutions ensuring your data is secure, accessible, and optimized for peak performance.",
    gradient: "from-primary to-purple-400",
    cuetronixLink: false,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Enterprise-grade cloud infrastructure and services to scale your business without limits.",
    gradient: "from-blue-400 to-primary",
    cuetronixLink: false,
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  const buildMessage = () =>
    `Service: ${selected}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nRequirements:\n${requirements}`;

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/918667635565?text=${encodeURIComponent(buildMessage())}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Service Inquiry: ${selected ?? "Cuephoria Service"}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:sales@cuephoriatech.in?subject=${subject}&body=${body}`;
  };

  const handleCardClick = (service: (typeof services)[0]) => {
    if (service.cuetronixLink) {
      window.open(CUETRONIX_URL, "_blank", "noopener,noreferrer");
      return;
    }
    setSelected(service.title);
    setOpen(true);
  };

  return (
    <section id="services" className="py-16 relative bg-card/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in-up">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Also from Cuephoria Tech
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Additional <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Need software for your venue? Start with{" "}
            <a href={CUETRONIX_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Cuetronix
            </a>{" "}
            — 14-day free trial, no auto-pay mandate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                onClick={() => handleCardClick(service)}
                className="relative overflow-hidden card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(139,41,255,0.25)] animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-5 space-y-3">
                  <div
                    className={`w-12 h-12 rounded-xl ring-1 ring-primary/40 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 pt-1 text-primary text-sm font-medium">
                    {service.cuetronixLink ? (
                      <>
                        <span>Start 14-day free trial</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Get a tailored quote</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">{selected}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Tell us what you need and how to contact you. Choose WhatsApp or Email to send your inquiry instantly.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div className="grid sm:grid-cols-3 gap-3">
              <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <Textarea
              placeholder="Describe your requirements..."
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              className="min-h-28"
            />
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button variant="outline" onClick={() => setOpen(false)} className="border-primary text-foreground hover:bg-primary/10">
                Cancel
              </Button>
              <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-500/90 text-white">
                Send via WhatsApp
              </Button>
              <Button onClick={handleEmail} className="bg-gradient-to-r from-[#8B29FF] to-[#E028B9] text-white">
                Send via Email
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
