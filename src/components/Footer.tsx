import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          {/* Logo & Brand */}
          <Link to="/" className="flex flex-col items-center space-y-4 group">
            <img src="/fynuu-logo.png" alt="Fynuu" className="w-20 h-20 transition-transform group-hover:scale-110" />
            <span className="text-3xl font-bold gradient-text">Fynuu</span>
          </Link>
          
          {/* Engaging Tagline */}
          <div className="max-w-2xl space-y-4">
            <p className="text-xl text-foreground font-medium">Your friendly & secure companion for everyday life. ☺️</p>
            <p className="text-muted-foreground">
              Chat, plan, shop, and stay healthy — all in one place with intelligent assistance.
            </p>
          </div>

          {/* CTA Button */}
          

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="mailto:nikgames.lab@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/askfynuu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://x.com/askfynuu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X (Twitter)">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">"Fynuu is here for you." ❤️</p>
        </div>
      </div>
    </footer>;
};
export default Footer;