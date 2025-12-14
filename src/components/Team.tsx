import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import founderImage from "@/assets/founder-ranjith.jpg";
import cofounderImage from "@/assets/cofounder-krishna.jpg";
import headOpsImage from "@/assets/head-operations-mallesh.jpg";

// Type definition for achievements
type Achievement = string | { text: string; image?: string };

interface TeamMember {
  name: string;
  role: string;
  image: string;
  phone: string;
  bio: string;
  expertise: string;
  achievements: Achievement | Achievement[];
  specialization: string;
  email?: string;
  linkedin?: string;
  isLeadership?: boolean; // Distinguish between leadership and team members
}

const leadership: TeamMember[] = [
  {
    name: "Mr. Ranjith Kumar S",
    role: "Founder & CEO",
    image: founderImage,
    phone: "+91 8667637565",
    bio: "With over 6 years of distinguished corporate experience, Ranjith has mastered the art of transforming business challenges into technological solutions. His career journey began in sales, where he developed a deep understanding of customer needs and market dynamics. This foundation propelled him into operations management, where he orchestrated seamless processes across multiple business verticals.",
    expertise: "As a technology visionary, Ranjith specializes in application development and system architecture, with a particular focus on gaming and entertainment management software. His hands-on approach to product development ensures that every solution addresses real-world operational challenges. Under his leadership, Cuephoria Tech has developed cutting-edge POS systems and management platforms that revolutionize how gaming lounges and entertainment venues operate.",
    achievements: "Pioneer in gaming lounge technology solutions, expert in React & modern web technologies, proven track record in business operations optimization.",
    specialization: "Tech & Application Development",
    email: "ranjithkumar@cuephoriatech.in",
    linkedin: "https://www.linkedin.com/in/ranjithkumars-pro",
    isLeadership: true,
  },
  {
    name: "Mr. Krishna M Bajaj",
    role: "Co-Founder & CMO",
    image: cofounderImage,
    phone: "+91 8637625155",
    bio: "Krishna is a dynamic entrepreneurial force with a proven track record of building and scaling multiple successful businesses. As the driving force behind TipNTop and Bamboo Garden, he has demonstrated exceptional ability in creating memorable customer experiences and building strong brand identities in competitive markets.",
    expertise: "His expertise in sales and marketing strategy is complemented by hands-on operational knowledge gained from running Cuephoria Gaming Lounge, Trichy's premier 8-ball club and gaming destination. This unique perspective allows him to understand the operational needs of entertainment venues from the ground up, making him invaluable in shaping products that truly serve the industry.",
    achievements: "Multi-business owner and operator, expert in snooker club management and gaming lounge operations, master of customer acquisition and retention strategies.",
    specialization: "Sales & Marketing",
    email: "sales@cuephoriatech.in",
    linkedin: "https://www.linkedin.com/in/krish-bajaj-45115413a",
    isLeadership: true,
  },
  {
    name: "Mr. G. Mallesh",
    role: "Head of Operations",
    image: headOpsImage,
    phone: "+91 8148102255",
    bio: "At Cuephoria Tech, operational excellence is not just a goal—it is a discipline. As Head of Operations, Mallesh brings a rare convergence of technical foresight and strategic execution to our leadership team. A distinguished technologist and innovator, he has built a reputation for transforming complex challenges into scalable, real-world solutions at the intersection of Software, IoT, and Applied AI.",
    expertise: "Mallesh's background is defined by high-impact performance. From founding Techno Zenith to securing National and State-level hackathon victories, he has consistently demonstrated an ability to navigate high-pressure environments with precision. His pending patent for agricultural automation and his history of mentoring over 1,000 technologists underscores a leadership style that is both innovative and deeply grounded in knowledge sharing. At Cuephoria Tech, Mallesh architects the systems that allow our vision to thrive, ensuring that every project bridges the gap between ambitious concepts and flawless delivery.",
    achievements: [
      // Add achievements with images here when available
      // Example format:
      // { text: "Founded Techno Zenith", image: "@/assets/achievements/techno-zenith.jpg" },
      // { text: "National Hackathon Winner", image: "@/assets/achievements/national-hackathon.jpg" },
    ],
    specialization: "Operations & Innovation",
    email: "support@cuephoriatech.in",
    linkedin: "#",
    isLeadership: true,
  },
];

// Team members section - hidden for now but kept for future use
const teamMembers: TeamMember[] = [
  // Add more team members here in the future
];

const Team = () => {
  const renderAchievements = (achievements: Achievement | Achievement[]) => {
    // Handle string achievements (for existing members)
    if (typeof achievements === "string") {
      return (
        <p className="text-xs text-muted-foreground leading-relaxed">
          {achievements}
        </p>
      );
    }

    // Handle array of achievements
    const achievementsArray = Array.isArray(achievements) ? achievements : [achievements];
    
    // If empty array, return placeholder
    if (achievementsArray.length === 0) {
      return (
        <p className="text-xs text-muted-foreground leading-relaxed italic">
          Achievements to be added...
        </p>
      );
    }
    
    return (
      <div className="space-y-3">
        {achievementsArray.map((achievement, idx) => {
          if (typeof achievement === "string") {
            return (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {achievement}
                </p>
              </div>
            );
          }
          
          // Achievement with image
          return (
            <div key={idx} className="flex gap-3 items-start group/achievement">
              {achievement.image && (
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-primary/20 group-hover/achievement:border-primary/50 transition-colors shadow-sm">
                  <img
                    src={achievement.image}
                    alt={achievement.text}
                    className="w-full h-full object-cover group-hover/achievement:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {achievement.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderMemberCard = (member: TeamMember, index: number, isLeadership: boolean) => {
    const imageHeight = isLeadership ? "h-[420px] md:h-[460px]" : "h-[300px] md:h-[320px]";
    const padding = isLeadership ? "p-6" : "p-4";
    const titleSize = isLeadership ? "text-2xl" : "text-xl";
    const roleSize = isLeadership ? "text-lg" : "text-base";
    const bioTextSize = isLeadership ? "text-sm" : "text-xs";
    
    // Image positioning based on member
    let imagePosition = "object-center";
    if (isLeadership) {
      if (index === 0) {
        imagePosition = "object-[50%_42%]";
      } else if (index === 1) {
        imagePosition = "object-[50%_11%]";
      } else {
        imagePosition = "object-center";
      }
    } else {
      imagePosition = "object-center";
    }

    return (
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
              className={`w-full ${imageHeight} object-cover ${imagePosition} group-hover:scale-105 transition-transform duration-500`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            
            {/* Floating Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
              <span className="text-xs font-semibold text-background">{member.specialization}</span>
            </div>
          </div>

          <div className={`${padding} space-y-4`}>
            <div>
              <h3 className={`${titleSize} font-bold text-foreground mb-1 group-hover:text-gradient transition-colors`}>
                {member.name}
              </h3>
              <p className={`text-gradient-secondary font-semibold ${roleSize} mb-2`}>{member.role}</p>
              <p className={`${bioTextSize} text-muted-foreground`}>📞 {member.phone}</p>
            </div>

            <div className={`space-y-3 ${bioTextSize}`}>
              <p className="text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {member.expertise}
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold text-primary mb-2">Key Achievements:</p>
                {renderAchievements(member.achievements)}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={`mailto:${member.email ?? "sales@cuephoriatech.in"}`}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/40 hover:to-secondary/40 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
              >
                <Mail className="w-5 h-5 text-primary group-hover/icon:text-foreground transition-colors" />
              </a>
              <a
                href={member.linkedin ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/40 hover:to-secondary/40 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover/icon:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

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

        {/* Leadership Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {leadership.map((member, index) => renderMemberCard(member, index, true))}
        </div>

        {/* Team Members Section - Hidden for now, uncomment when ready to show */}
        {false && teamMembers.length > 0 && (
          <>
            <div className="text-center mb-12 animate-fade-in-up">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Our <span className="text-gradient">Team</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated professionals bringing expertise and passion to every project
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => renderMemberCard(member, index, false))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Team;
