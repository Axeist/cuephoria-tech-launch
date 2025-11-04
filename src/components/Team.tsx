import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import founderImage from "@/assets/founder-ranjith.jpg";
import cofounderImage from "@/assets/cofounder-krishna.jpg";

const team = [
  {
    name: "Mr. Ranjith Kumar S",
    role: "Founder & CEO",
    image: founderImage,
    bio: "6+ years of corporate experience spanning sales and operations, specializing in technology and application development. Visionary leader driving Cuephoria's technical innovation.",
    specialization: "Tech & Application Development",
  },
  {
    name: "Mr. Krishna M Bajaj",
    role: "Co-Founder & CMO",
    image: cofounderImage,
    bio: "Entrepreneurial leader managing multiple successful ventures including TipNTop and Bamboo Garden. Expert in sales, marketing, and snooker club operations.",
    specialization: "Sales & Marketing",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced visionaries driving innovation and excellence in technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden group hover:shadow-[0_0_40px_rgba(0,200,255,0.3)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-background">{member.specialization}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex gap-3 pt-2">
                    <a
                      href="mailto:contact@cuephoria.in"
                      className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                    >
                      <Mail className="w-5 h-5 text-foreground group-hover/icon:text-primary transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-foreground group-hover/icon:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
