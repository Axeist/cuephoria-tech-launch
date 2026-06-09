import { Star, MapPin, Phone, Calendar, Package, Globe, ExternalLink, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface Client {
  id: string;
  name: string;
  logo: string;
  location: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  subscription: string;
  subscriptionDuration?: string;
  purchaseDate: string;
  rating: number;
  testimonial: string;
}

const clients: Client[] = [
  {
    id: "nerfturf",
    name: "Nerfturf",
    logo: "https://iili.io/KpfrAog.jpg",
    location: "Chennai, T Nagar",
    address: "40, S W Boag Rd, CIT Nagar West, T. Nagar, Chennai, Tamil Nadu 600035",
    phone: "9345187098",
    website: "www.nerfturf.in",
    subscription: "Gold Advanced",
    subscriptionDuration: "6 months",
    purchaseDate: "November 2025",
    rating: 5,
    testimonial: "Cuetronix has transformed our gaming lounge operations. The real-time analytics and booking management features have significantly improved our customer experience and streamlined our day-to-day operations. Highly recommended for any entertainment venue looking to modernize their business!",
  },
  {
    id: "bright-buttons",
    name: "Bright Buttons",
    logo: "https://iili.io/fYDDfDb.jpg",
    location: "Trichy, India",
    address: "Eco-friendly clothing brand specializing in handmade, nature-inspired garments",
    phone: "+91 99526 55555",
    email: "support@brightbuttons.in",
    website: "brightbuttons.in",
    subscription: "E-commerce Development",
    subscriptionDuration: "Full Solution",
    purchaseDate: "December 2025",
    rating: 5,
    testimonial: "Working with Cuephoria Tech was an absolute delight! They transformed our vision into a stunning e-commerce platform that perfectly captures the essence of Bright Buttons. The website beautifully showcases our eco-friendly, handmade garments and makes it effortless for customers to discover our unique, nature-inspired collections. The team's attention to detail and understanding of our brand philosophy exceeded our expectations. Our online presence has never been stronger!",
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">OUR CLIENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Leading Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the growing community of venues powered by Cuetronix and Cuephoria Tech
          </p>
        </div>

        {clients.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {clients.map((client) => (
              <Card
                key={client.id}
                className="card-gradient border-2 border-border/50 hover:border-primary/50 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(140,60,255,0.3)] relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <CardContent className="p-6 relative z-10">
                  {/* Header: Logo + Name + Rating */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo - Larger and more visible */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/30 bg-background/50 p-2 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(140,60,255,0.4)] transition-all duration-300">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-primary font-bold text-lg">${client.name.charAt(0)}</div>`;
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Name and Rating */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gradient transition-all duration-300">
                        {client.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: client.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Compact Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground truncate">{client.location}</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a
                        href={`tel:${client.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors truncate"
                      >
                        {client.phone}
                      </a>
                    </div>

                    {/* Email (if exists) */}
                    {client.email && (
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                        <a
                          href={`mailto:${client.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors truncate"
                          title={client.email}
                        >
                          Email
                        </a>
                      </div>
                    )}

                    {/* Website */}
                    {client.website && (
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                        <a
                          href={`https://${client.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors truncate flex items-center gap-1"
                        >
                          {client.website}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Subscription Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-xs">
                      <Package className="w-3.5 h-3.5 text-primary" />
                      <span className="font-semibold text-primary">
                        {client.subscription}
                        {client.subscriptionDuration && ` • ${client.subscriptionDuration}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/30 text-xs">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span className="font-semibold text-secondary">{client.purchaseDate}</span>
                    </div>
                  </div>

                  {/* Compact Testimonial */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="relative">
                      <div className="absolute -top-2 left-0 text-2xl text-primary/20 font-serif">"</div>
                      <p className="text-sm text-muted-foreground leading-relaxed italic pl-4 pr-2 line-clamp-3">
                        {client.testimonial}
                      </p>
                      <div className="absolute -bottom-2 right-0 text-2xl text-primary/20 font-serif">"</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No clients to display yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
