import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import founderImage from "@/assets/founder-ranjith.jpg";
import cofounderImage from "@/assets/cofounder-krishna.jpg";

const team = [
  {
    name: "Mr. Ranjith Kumar S",
    role: "Founder & CEO",
    image: founderImage,
    phone: "8667637565",
    bio: "With over 6 years of distinguished corporate experience, Ranjith has mastered the art of transforming business challenges into technological solutions. His career journey began in sales, where he developed a deep understanding of customer needs and market dynamics. This foundation propelled him into operations management, where he orchestrated seamless processes across multiple business verticals.",
    expertise: "As a technology visionary, Ranjith specializes in application development and system architecture, with a particular focus on gaming and entertainment management software. His hands-on approach to product development ensures that every solution addresses real-world operational challenges. Under his leadership, Cuephoria Tech has developed cutting-edge POS systems and management platforms that revolutionize how gaming lounges and entertainment venues operate.",
    achievements: "Pioneer in gaming lounge technology solutions, expert in React & modern web technologies, proven track record in business operations optimization.",
    specialization: "Tech & Application Development",
    email: "ranjithkirloskar@gmail.com",
    linkedin: "https://www.linkedin.com/in/ranjithkumars-pro",
  },
  {
    name: "Mr. Krishna M Bajaj",
    role: "Co-Founder & CMO",
    image: cofounderImage,
    phone: "8637625155",
    bio: "Krishna is a dynamic entrepreneurial force with a proven track record of building and scaling multiple successful businesses. As the driving force behind TipNTop and Bamboo Garden, he has demonstrated exceptional ability in creating memorable customer experiences and building strong brand identities in competitive markets.",
    expertise: "His expertise in sales and marketing strategy is complemented by hands-on operational knowledge gained from running Cuephoria Gaming Lounge, Trichy's premier 8-ball club and gaming destination. This unique perspective allows him to understand the operational needs of entertainment venues from the ground up, making him invaluable in shaping products that truly serve the industry.",
    achievements: "Multi-business owner and operator, expert in snooker club management and gaming lounge operations, master of customer acquisition and retention strategies.",
    specialization: "Sales & Marketing",
    email: "Krishnambaja@gmail.com",
    linkedin: "https://www.linkedin.com/in/krish-bajaj-45115413a",
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
                    className={`w-full h-[420px] md:h-[460px] object-cover ${index === 0 ? "object-[50%_42%]" : "object-center"} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-background">{member.specialization}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-gradient transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gradient-secondary font-semibold text-lg mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">📞 {member.phone}</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.expertise}
                    </p>
                    <div className="pt-2">
                      <p className="text-xs font-semibold text-primary mb-2">Key Achievements:</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {member.achievements}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href={`mailto:${(member as any).email ?? "contact@cuephoria.in"}`}
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/40 hover:to-secondary/40 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                    >
                      <Mail className="w-5 h-5 text-primary group-hover/icon:text-foreground transition-colors" />
                    </a>
                    <a
                      href={(member as any).linkedin ?? "#"}
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/40 hover:to-secondary/40 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-primary group-hover/icon:text-foreground transition-colors" />
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
