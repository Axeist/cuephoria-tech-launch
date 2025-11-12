import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ShoppingCart, Users, TrendingUp, Package, 
  CreditCard, Calendar, UserCog, FileText,
  Zap, Shield, Cloud, BarChart3, MessageSquare,
  Clock, Database, Smartphone
} from "lucide-react";
import posDashboard from "@/assets/pos-dashboard.png";
import posSales from "@/assets/pos-sales.png";
import posStations from "@/assets/pos-stations.png";
import posProducts from "@/assets/pos-products.png";
import posCustomers from "@/assets/pos-customers.png";
import posReports from "@/assets/pos-reports.png";
import posBookings from "@/assets/pos-bookings.png";
import posStaff from "@/assets/pos-staff.png";

const features = [
  {
    icon: ShoppingCart,
    title: "Core Sales & Checkout",
    description: "Lightning-fast Point of Sale with cart management, discounts, split payments, and saved carts. Complete with digital receipts and promotional popup system.",
    image: posSales,
    details: [
      "Fast carting with item quantities and notes",
      "Multiple payment methods including PhonePe UPI integration",
      "Split payments support (cash + UPI combinations)",
      "Saved carts for quick retrieval",
      "On-screen receipt preview and print templates",
      "Automated promotional popups and coupon handling"
    ]
  },
  {
    icon: BarChart3,
    title: "Real-time Dashboard & Analytics",
    description: "Comprehensive business intelligence with live sales tracking, inventory alerts, and customer analytics. Make data-driven decisions with intuitive visualizations.",
    image: posDashboard,
    details: [
      "Real-time sales overview and KPI tracking",
      "Active sessions monitoring across all stations",
      "Critical inventory alerts and low-stock warnings",
      "Customer activity and loyalty analytics",
      "Daily, weekly, and monthly trend analysis",
      "Quick-action buttons for common operations"
    ]
  },
  {
    icon: Package,
    title: "Advanced Inventory Management",
    description: "Never run out of stock again. Comprehensive product management with categories, pricing, tax configuration, and automated alerts.",
    image: posProducts,
    details: [
      "Multi-category product organization",
      "Advanced search and filtering capabilities",
      "Zero-stock and low-stock detection",
      "Stock value and profit tracking",
      "Bulk import/export functionality",
      "Detailed stock logs and history"
    ]
  },
  {
    icon: Zap,
    title: "Gaming Station Management",
    description: "Specialized module for managing gaming stations, billiards tables, and VR setups. Track sessions, availability, and automate billing.",
    image: posStations,
    details: [
      "Multi-type station support (PS5, 8-Ball, VR)",
      "Real-time availability tracking",
      "Session start/stop with automatic time tracking",
      "Hourly rate configuration per station",
      "Active session monitoring dashboard",
      "Quick session transfer between stations"
    ]
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    description: "Build lasting relationships with comprehensive customer profiles, purchase history, loyalty programs, and WhatsApp integration.",
    image: posCustomers,
    details: [
      "Detailed customer profiles with contact info",
      "Purchase history and spending analytics",
      "Loyalty points system integration",
      "WhatsApp messaging for promotions",
      "Customer segmentation by value",
      "Membership benefits tracking"
    ]
  },
  {
    icon: FileText,
    title: "Comprehensive Reporting",
    description: "Generate detailed reports for sales, products, customers, and expenses. Export data for accounting and analysis.",
    image: posReports,
    details: [
      "Sales reports by payment method",
      "Product performance analytics",
      "Gaming station revenue tracking",
      "Transaction history with search",
      "Expense tracking and categorization",
      "Export to CSV for accounting software"
    ]
  },
  {
    icon: Calendar,
    title: "Booking Management",
    description: "Advanced booking system with calendar view, coupon management, and marketing campaign insights. Perfect for events and tournaments.",
    image: posBookings,
    details: [
      "Calendar and list view bookings",
      "Advanced filtering by date, station, customer",
      "Coupon code creation and tracking",
      "Marketing campaign analytics",
      "Customer booking history",
      "No-show tracking and analytics"
    ]
  },
  {
    icon: UserCog,
    title: "Staff & Payroll Management",
    description: "Manage your team with attendance tracking, shift management, role-based access, and automated payroll calculations.",
    image: posStaff,
    details: [
      "Staff directory with role assignment",
      "Clock-in/out attendance system",
      "Shift scheduling and management",
      "Leave request workflow",
      "Monthly payroll calculations",
      "PIN-based security for sensitive actions"
    ]
  }
];

const additionalFeatures = [
  {
    icon: CreditCard,
    title: "PhonePe Integration",
    description: "Seamless UPI payments with webhook support, status tracking, and automatic reconciliation.",
  },
  {
    icon: MessageSquare,
    title: "AI Assistant",
    description: "Built-in Gemini-powered chatbot for business insights, data analysis, and operational help.",
  },
  {
    icon: Shield,
    title: "Role-Based Security",
    description: "Granular access control with PIN verification for critical operations and staff management.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based",
    description: "Access from anywhere with real-time sync. Built on Supabase for reliability and scalability.",
  },
  {
    icon: Clock,
    title: "Cash Management",
    description: "Start/end cash sessions, vault transfers, and complete cash flow tracking.",
  },
  {
    icon: Database,
    title: "Data Export",
    description: "Export all data to CSV for accounting, backup, or analysis in external tools.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Works perfectly on tablets and phones, allowing mobile point-of-sale operations.",
  },
  {
    icon: TrendingUp,
    title: "Tournament System",
    description: "Complete tournament management with bracket generation, scoring, and public viewing.",
  }
];

const POSDetails = () => {
  useEffect(() => {
    document.title = "POS Software for Gaming Lounge & Snooker Club | Complete Features | Cuephoria Tech";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete POS software solution for gaming lounges and snooker clubs. Features booking management, inventory tracking, real-time analytics, PhonePe integration, staff management, and comprehensive reporting. Trusted by gaming venues across India.');
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://cuephoria.in/pos');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/10 to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-block px-6 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm mb-4">
              <span className="text-sm text-primary font-semibold">COMPREHENSIVE SOLUTION</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Best POS Software for <span className="text-gradient">Gaming Lounge & Snooker Club</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Complete point-of-sale and management system for gaming lounges, snooker clubs, billiards centers, and cafes. Features booking management, inventory tracking, real-time analytics, PhonePe integration, and comprehensive reporting.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a
                href="https://admin.cuephoria.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/50"
              >
                <Zap className="w-5 h-5" />
                View Live Demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary/50 hover:bg-primary/10 text-foreground font-semibold transition-all duration-300"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots moved to bottom of page */}

      {/* Main Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete <span className="text-gradient">Feature Set</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to run a successful gaming lounge or entertainment venue, all in one powerful platform.
            </p>
          </div>

          <div className="space-y-32">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">MODULE {index + 1}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl hover:shadow-primary/40 transition-all duration-500 group">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Even More <span className="text-gradient">Powerful Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional capabilities that make Cuephoria POS the most comprehensive solution for entertainment venues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Simple Pricing That Scales</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Choose the pricing plan that fits your business needs. All plans include core POS, Gaming Stations, Products Management, Customer Management, and Reports & Analytics.</p>
          </div>

          {/* Pricing Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary font-semibold">Monthly</button>
            <button className="px-4 py-2 rounded-lg border border-border/50 hover:bg-primary/5 text-muted-foreground">Quarterly</button>
            <button className="px-4 py-2 rounded-lg border border-border/50 hover:bg-primary/5 text-muted-foreground">6 Months</button>
            <button className="px-4 py-2 rounded-lg border border-border/50 hover:bg-primary/5 text-muted-foreground">Annual</button>
            <button className="px-4 py-2 rounded-lg border border-border/50 hover:bg-primary/5 text-muted-foreground">Lifetime</button>
          </div>

          {/* Monthly Plans */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Monthly Plans</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Silver Basic */}
              <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/20 p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Silver Basic</h4>
                    <p className="text-sm text-muted-foreground">1 Month</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold">₹2,000</div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>All core features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>POS System</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Gaming Stations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Products Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Customer Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Reports & Analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                    <span>✗</span>
                    <span>Booking Access</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                    <span>✗</span>
                    <span>Staff Management</span>
                  </li>
                </ul>
                <a href="/#contact" className="block text-center px-4 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 text-primary font-semibold transition-all">Get Started</a>
              </div>

              {/* Silver Advanced */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-background p-6 shadow-[0_0_30px_rgba(140,60,255,0.25)] hover:shadow-[0_0_40px_rgba(140,60,255,0.35)] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Silver Advanced</h4>
                    <p className="text-sm text-muted-foreground">1 Month</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold">₹3,000</div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>All Silver Basic features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Booking Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Staff Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Public Booking Page</span>
                  </li>
                </ul>
                <a href="/#contact" className="block text-center px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">Get Started</a>
              </div>
            </div>
          </div>

          {/* Quarterly Plans */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Quarterly Plans <span className="text-sm font-normal text-primary">(10% Savings)</span></h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Gold Basic */}
              <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/20 p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Gold Basic</h4>
                    <p className="text-sm text-muted-foreground">3 Months</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold">₹5,400</div>
                    <div className="text-xs text-muted-foreground">₹1,800/month</div>
                  </div>
                </div>
                <div className="mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-semibold inline-block">10% OFF</div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>All Silver Basic features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>3 Months Validity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>10% Savings</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                    <span>✗</span>
                    <span>Booking Access</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                    <span>✗</span>
                    <span>Staff Management</span>
                  </li>
                </ul>
                <a href="/#contact" className="block text-center px-4 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 text-primary font-semibold transition-all">Get Started</a>
              </div>

              {/* Gold Advanced */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-background p-6 shadow-[0_0_30px_rgba(140,60,255,0.25)] hover:shadow-[0_0_40px_rgba(140,60,255,0.35)] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Gold Advanced</h4>
                    <p className="text-sm text-muted-foreground">3 Months</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold">₹8,100</div>
                    <div className="text-xs text-muted-foreground">₹2,700/month</div>
                  </div>
                </div>
                <div className="mb-4 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs text-primary font-semibold inline-block">10% OFF</div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>All Silver Advanced features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>3 Months Validity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>10% Savings</span>
                  </li>
                </ul>
                <a href="/#contact" className="block text-center px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">Get Started</a>
              </div>
            </div>
          </div>

          {/* 6-Month Plans */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">6-Month Plans <span className="text-sm font-normal text-primary">(15% Savings)</span></h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Platinum Basic */}
              <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/20 p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Platinum Basic</h4>
                    <p className="text-sm text-muted-foreground">6 Months</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold">₹10,200</div>
                    <div className="text-xs text-muted-foreground">₹1,700/month</div>
                  </div>
                </div>
                <div className="mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-semibold inline-block">15% OFF</div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>All Silver Basic features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>6 Months Validity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>15% Savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Extended support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Priority email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                    <span>✗</span>
                    <span>Booking Access</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                    <span>✗</span>
                    <span>Staff Management</span>
                  </li>
                </ul>
                <a href="/#contact" className="block text-center px-4 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 text-primary font-semibold transition-all">Get Started</a>
              </div>

              {/* Platinum Advanced */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-background p-6 shadow-[0_0_30px_rgba(140,60,255,0.25)] hover:shadow-[0_0_40px_rgba(140,60,255,0.35)] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Platinum Advanced</h4>
                    <p className="text-sm text-muted-foreground">6 Months</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold">₹15,300</div>
                    <div className="text-xs text-muted-foreground">₹2,550/month</div>
                  </div>
                </div>
                <div className="mb-4 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs text-primary font-semibold inline-block">15% OFF</div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>All Silver Advanced features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>6 Months Validity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>15% Savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Priority support channel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Custom report generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>API access</span>
                  </li>
                </ul>
                <a href="/#contact" className="block text-center px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">Get Started</a>
              </div>
            </div>
          </div>

          {/* Annual Plans */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Annual Plans <span className="text-sm font-normal text-primary">(25% Maximum Savings)</span></h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Diamond Basic */}
              <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/20 p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Diamond Basic</h4>
                    <p className="text-sm text-muted-foreground">12 Months</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold">₹18,000</div>
                    <div className="text-xs text-muted-foreground">₹1,500/month</div>
                  </div>
                </div>
                <div className="mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-semibold inline-block">25% OFF</div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>All Silver Basic features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>12 Months Validity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>25% Maximum Savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Annual business review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Unlimited data retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Premium analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                    <span>✗</span>
                    <span>Booking Access</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                    <span>✗</span>
                    <span>Staff Management</span>
                  </li>
                </ul>
                <a href="/#contact" className="block text-center px-4 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 text-primary font-semibold transition-all">Get Started</a>
              </div>

              {/* Diamond Advanced */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-background p-6 shadow-[0_0_30px_rgba(140,60,255,0.25)] hover:shadow-[0_0_40px_rgba(140,60,255,0.35)] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Diamond Advanced</h4>
                    <p className="text-sm text-muted-foreground">12 Months</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-extrabold">₹27,000</div>
                    <div className="text-xs text-muted-foreground">₹2,250/month</div>
                  </div>
                </div>
                <div className="mb-4 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs text-primary font-semibold inline-block">25% OFF</div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>All Silver Advanced features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>12 Months Validity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>25% Maximum Savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Quarterly strategy sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>White-label options</span>
                  </li>
                </ul>
                <a href="/#contact" className="block text-center px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">Get Started</a>
              </div>
            </div>
          </div>

          {/* Lifetime Plan */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Lifetime License</h3>
            <div className="max-w-2xl mx-auto">
              <div className="rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/20 via-secondary/20 to-background p-8 shadow-[0_0_50px_rgba(140,60,255,0.4)] relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-2 bg-primary text-primary-foreground font-bold text-sm rounded-bl-lg">BEST VALUE</div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                  <div>
                    <h4 className="text-3xl font-bold mb-2">Lifetime License</h4>
                    <p className="text-muted-foreground">Own it forever</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-5xl font-extrabold mb-2">₹80,000</div>
                    <div className="text-sm text-muted-foreground">One-time payment</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>All Features Unlocked</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Lifetime Access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Lifetime Support from Cuephoria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>5 Years of Updates</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Priority Support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Enterprise Features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Booking Access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Staff Management Access</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border border-primary/30 mb-6">
                  <p className="text-sm font-semibold mb-2">Contact for Purchase:</p>
                  <p className="text-sm text-muted-foreground">Name: Krishna</p>
                  <p className="text-sm text-muted-foreground">Phone: <a href="tel:8667857094" className="text-primary hover:underline">8667857094</a></p>
                </div>
                <a href="/#contact" className="block text-center px-6 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all shadow-lg">Contact Sales</a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto p-6 rounded-2xl border border-border/60 card-gradient">
            <h3 className="text-xl font-bold mb-4 text-center">All Plans Include</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>▣ GST invoices provided for all plans</div>
              <div>▣ Optional hardware integration available</div>
              <div>▣ PhonePe UPI supported on all plans</div>
              <div>▣ Offline-first sync capabilities</div>
              <div>▣ India data residency option available</div>
              <div>▣ Regular feature updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built with <span className="text-gradient">Modern Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leveraging the latest web technologies for speed, reliability, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2 animate-fade-in-up">
              <div className="text-4xl font-bold text-gradient">React + TypeScript</div>
              <p className="text-muted-foreground">Modern, type-safe frontend</p>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-gradient">Supabase</div>
              <p className="text-muted-foreground">Cloud database & authentication</p>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-gradient">Tailwind CSS</div>
              <p className="text-muted-foreground">Beautiful, responsive design</p>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-gradient">PhonePe API</div>
              <p className="text-muted-foreground">Secure payment processing</p>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-gradient">Gemini AI</div>
              <p className="text-muted-foreground">Intelligent business assistant</p>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="text-4xl font-bold text-gradient">Vercel</div>
              <p className="text-muted-foreground">Fast, global deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Transform Your <span className="text-gradient">Business?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the venues already using Cuephoria POS to streamline operations and boost revenue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a
                href="https://admin.cuephoria.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/50"
              >
                <Zap className="w-5 h-5" />
                Try Live Demo
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary/50 hover:bg-primary/10 text-foreground font-semibold transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery - bottom */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Product <span className="text-gradient">Screenshots</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore multiple parts of the POS at a glance. All screenshots are from the live product.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              { src: posDashboard, alt: "Dashboard" },
              { src: posSales, alt: "Sales & Checkout" },
              { src: posStations, alt: "Stations" },
              { src: posProducts, alt: "Products" },
              { src: posCustomers, alt: "Customers" },
              { src: posReports, alt: "Reports" },
              { src: posBookings, alt: "Bookings" },
              { src: posStaff, alt: "Staff" },
            ].map((shot, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden border border-primary/30 bg-card/40 group animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <img src={shot.src} alt={shot.alt} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-semibold text-primary">
                    {shot.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default POSDetails;
