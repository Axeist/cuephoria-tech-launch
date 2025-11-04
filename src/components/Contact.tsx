import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Contact@cuephoria.in",
    link: "mailto:Contact@cuephoria.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8637625155",
    link: "tel:+918637625155",
  },
  {
    icon: Phone,
    label: "Founder's Line",
    value: "+91 8667637565",
    link: "tel:+918667637565",
  },
  {
    icon: MapPin,
    label: "Website",
    value: "cuephoria.in",
    link: "https://cuephoria.in",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4 animate-fade-in">
              <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <a
                          key={index}
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-background" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {info.value}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50 overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-foreground font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-foreground font-semibold">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-foreground font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-gradient border-border/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
