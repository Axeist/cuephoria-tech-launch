import { Facebook, Twitter, Instagram, Linkedin, Mail, Scale, Shield } from "lucide-react";
import CuephoriaTechLogo from "@/components/brand/CuephoriaTechLogo";
import TrialCTA from "@/components/TrialCTA";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CUETRONIX_URL, TRIAL_SUBTEXT } from "@/lib/cuetronix";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="border-b border-border/50 bg-gradient-to-r from-[#8B29FF]/10 to-[#E028B9]/10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">Start your 14-day free trial — no auto-pay mandate</p>
            <p className="text-sm text-muted-foreground mt-1">{TRIAL_SUBTEXT}</p>
          </div>
          <TrialCTA size="default" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="space-y-4 lg:col-span-2">
            <a href="/" className="inline-block">
              <CuephoriaTechLogo size="md" showTagline />
            </a>
            <p className="text-muted-foreground text-sm max-w-sm">
              Cuephoria Tech builds venue software. Cuetronix is our flagship all-in-one OS for gaming
              lounges, snooker clubs, and cafes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href={CUETRONIX_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Cuetronix
                </a>
              </li>
              <li>
                <a href="/pos" className="hover:text-primary transition-colors">
                  Product Overview
                </a>
              </li>
              <li>
                <a href={CUETRONIX_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Start Free Trial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="/#team" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#team" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="/#clients" className="hover:text-primary transition-colors">Our Clients</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="mailto:sales@cuephoriatech.in" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  sales@cuephoriatech.in
                </a>
              </li>
              <li>+91 8637625155</li>
              <li>+91 8667637565</li>
              <li>
                <a href="https://cuephoriatech.in" className="hover:text-primary transition-colors">
                  cuephoriatech.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Cuephoria Tech. All rights reserved. Cuetronix is a product of Cuephoria Tech.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm">
                <Dialog>
                  <DialogTrigger className="text-muted-foreground hover:text-primary inline-flex items-center gap-2">
                    <Scale className="w-4 h-4" /> Terms & Conditions
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Terms & Conditions</DialogTitle>
                      <DialogDescription>
                        By using Cuephoria products and services, you agree to fair-use, lawful usage, and payment terms.
                        Cuetronix offers a 14-day free trial with no auto-pay mandate — we never auto-charge when your trial ends.
                        Data entered remains yours; we process it to provide the service. Contact us for any clarifications.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger className="text-muted-foreground hover:text-primary inline-flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Privacy Policy
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Privacy Policy</DialogTitle>
                      <DialogDescription>
                        We collect only necessary information to operate our services. Sensitive payment data is never stored by us.
                        We use role-based access and industry security practices. You can request data export or deletion at any time by emailing support@cuephoriatech.in.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label="Twitter">
                  <Twitter className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
