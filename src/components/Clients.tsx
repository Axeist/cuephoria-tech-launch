import { Star, MapPin, Phone, Calendar, Package, Globe, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Client {
  id: string;
  name: string;
  logo: string;
  location: string;
  address: string;
  phone: string;
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
    testimonial: "Cuephoria's POS system has transformed our gaming lounge operations. The real-time analytics and booking management features have significantly improved our customer experience and streamlined our day-to-day operations. Highly recommended for any entertainment venue looking to modernize their business!",
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
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">OUR CLIENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Leading Venues</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the growing community of gaming lounges and entertainment venues powered by Cuephoria
          </p>
        </div>

        {clients.length > 0 ? (
          <div className={`max-w-5xl mx-auto ${clients.length === 1 ? 'flex justify-center' : ''}`}>
            <Carousel
              opts={{
                align: clients.length === 1 ? "center" : "start",
                loop: clients.length > 1,
              }}
              className={`w-full ${clients.length === 1 ? 'max-w-2xl' : ''}`}
            >
              <CarouselContent className={clients.length === 1 ? "" : "-ml-2 md:-ml-4"}>
                {clients.map((client) => (
                  <CarouselItem 
                    key={client.id} 
                    className={clients.length === 1 ? "basis-full" : "pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"}
                  >
                    <Card className="card-gradient border-2 border-border/50 hover:border-primary/50 transition-all duration-500 h-full group hover:shadow-[0_0_50px_rgba(140,60,255,0.4)] relative overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <CardContent className="p-8 relative z-10">
                        {/* Logo - Centered */}
                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-background/90 via-background/70 to-background/50 p-4 group-hover:border-primary/60 group-hover:shadow-[0_0_40px_rgba(140,60,255,0.6)] transition-all duration-500 group-hover:scale-105">
                              <img
                                src={client.logo}
                                alt={client.name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-3 border-background shadow-xl group-hover:scale-110 transition-transform">
                              <Star className="w-5 h-5 fill-background text-background" />
                            </div>
                          </div>
                        </div>

                        {/* Client Name - Centered */}
                        <h3 className="text-3xl font-bold mb-3 text-center text-foreground group-hover:text-gradient transition-all duration-300">
                          {client.name}
                        </h3>

                        {/* Rating - Centered */}
                        <div className="flex items-center justify-center gap-1 mb-6 bg-primary/10 px-4 py-2 rounded-full border border-primary/30 w-fit mx-auto">
                          {Array.from({ length: client.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(140,60,255,0.6)]"
                            />
                          ))}
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-3 mb-4 p-3 rounded-lg bg-background/30 border border-border/30 group-hover:border-primary/30 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">{client.location}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{client.address}</p>
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-background/30 border border-border/30 group-hover:border-primary/30 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-primary" />
                          </div>
                          <a
                            href={`tel:${client.phone}`}
                            className="font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {client.phone}
                          </a>
                        </div>

                        {/* Website */}
                        {client.website && (
                          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-background/30 border border-border/30 group-hover:border-primary/30 transition-all">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                              <Globe className="w-5 h-5 text-primary" />
                            </div>
                            <a
                              href={`https://${client.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2 group/link"
                            >
                              {client.website}
                              <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                          </div>
                        )}

                        {/* Subscription Info */}
                        <div className="flex flex-wrap gap-3 mb-6">
                          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/40 text-sm group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(140,60,255,0.4)] transition-all">
                            <Package className="w-4 h-4 text-primary" />
                            <span className="font-bold text-primary">
                              {client.subscription}
                              {client.subscriptionDuration && ` (${client.subscriptionDuration})`}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-secondary/20 to-secondary/10 border-2 border-secondary/40 text-sm group-hover:border-secondary/60 group-hover:shadow-[0_0_20px_rgba(0,200,255,0.4)] transition-all">
                            <Calendar className="w-4 h-4 text-secondary" />
                            <span className="font-bold text-secondary">{client.purchaseDate}</span>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="pt-6 border-t-2 border-border/50 group-hover:border-primary/30 transition-colors">
                          <div className="relative">
                            <div className="absolute -top-3 left-0 text-4xl text-primary/20 font-serif">"</div>
                            <p className="text-base text-muted-foreground leading-relaxed italic pl-6 relative z-10">
                              {client.testimonial}
                            </p>
                            <div className="absolute -bottom-3 right-0 text-4xl text-primary/20 font-serif">"</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {clients.length > 1 && (
                <>
                  <CarouselPrevious className="left-0 md:-left-12" />
                  <CarouselNext className="right-0 md:-right-12" />
                </>
              )}
            </Carousel>
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

