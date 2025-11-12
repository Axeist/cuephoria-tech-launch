import { Star, MapPin, Phone, Calendar, Package } from "lucide-react";
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
  subscription: string;
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
    subscription: "Gold Advanced",
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
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: clients.length > 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {clients.map((client) => (
                  <CarouselItem key={client.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-500 h-full group hover:shadow-[0_0_40px_rgba(140,60,255,0.3)]">
                      <CardContent className="p-6">
                        {/* Logo and Rating */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/30 bg-background/50 p-2 group-hover:border-primary/60 transition-all">
                            <img
                              src={client.logo}
                              alt={client.name}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                // Fallback if image fails to load
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: client.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-primary text-primary"
                              />
                            ))}
                          </div>
                        </div>

                        {/* Client Name */}
                        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gradient transition-colors">
                          {client.name}
                        </h3>

                        {/* Location */}
                        <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                          <div>
                            <p className="font-semibold text-foreground">{client.location}</p>
                            <p className="text-xs">{client.address}</p>
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                          <Phone className="w-4 h-4 text-primary" />
                          <a
                            href={`tel:${client.phone}`}
                            className="hover:text-primary transition-colors"
                          >
                            {client.phone}
                          </a>
                        </div>

                        {/* Subscription Info */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-xs">
                            <Package className="w-3.5 h-3.5 text-primary" />
                            <span className="font-semibold text-primary">{client.subscription}</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/30 text-xs">
                            <Calendar className="w-3.5 h-3.5 text-secondary" />
                            <span className="font-semibold text-secondary">{client.purchaseDate}</span>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="pt-4 border-t border-border/50">
                          <p className="text-sm text-muted-foreground italic leading-relaxed">
                            "{client.testimonial}"
                          </p>
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

