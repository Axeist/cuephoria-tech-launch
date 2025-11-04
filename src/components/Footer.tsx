import { Facebook, Twitter, Instagram, Linkedin, Mail, Scale, Shield } from "lucide-react";
import logo from "@/assets/cuephoria-logo.png";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-primary/40 shadow-[0_0_20px_rgba(140,60,255,0.35)] group-hover:shadow-[0_0_30px_rgba(140,60,255,0.55)] transition-shadow">
                <img src={logo} alt="Cuephoria" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Cuephoria Tech</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Empowering businesses with cutting-edge technology solutions and exceptional service.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="/pos" className="hover:text-primary transition-colors">POS System</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Gaming Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#team" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://cuephoria.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Cuephoria.in</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="mailto:Contact@cuephoria.in" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact@cuephoria.in
                </a>
              </li>
              <li className="hover:text-primary transition-colors">+91 8637625155</li>
              <li className="hover:text-primary transition-colors">+91 8667637565</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Policies */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Cuephoria Tech. All rights reserved.
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
                        By using Cuephoria products and services, you agree to fair-use, lawful usage, and payment terms. Data entered remains yours; we process it to provide the service. Refunds are handled case-by-case for subscriptions; one-time licenses are non-refundable after delivery. Contact us for any clarifications.
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
                        We collect only necessary information to operate our services. Sensitive payment data is never stored by us. We use role-based access and industry security practices. You can request data export or deletion at any time by emailing contact@cuephoria.in.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
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
