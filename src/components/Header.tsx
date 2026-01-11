import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingQuickAccess from "./FloatingQuickAccess";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const menuItems = [{
    label: "Home",
    href: "/"
  }, {
    label: "About",
    href: "/about"
  }, /* {
    label: "Docs",
    href: "/docs"
  }, */ {
    label: "Privacy",
    href: "/privacy"
  }, {
    label: "Terms",
    href: "/terms"
  }];
  const handleJoinBeta = () => {
    // Redirect to Google Play Store for Fynuu app
    window.open('https://play.google.com/store/apps/details?id=io.smart.assistant', '_blank');
  };
  return <>
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://res.cloudinary.com/dgsi3q46q/image/upload/v1760289639/icon_transparent_bg_oxibwb.png" alt="Fynuu" className="w-9 h-9" />
            <span className="text-2xl gradient-text font-righteous">fynuu</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => <Link key={item.label} to={item.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              {item.label}
            </Link>)}
            <Button
              onClick={handleJoinBeta}
              className="bg-primary text-white hover:bg-primary/90 rounded-lg px-6 h-12 text-base font-medium transition-all duration-200"
            >
              <svg className="w-7.5 h-7.5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
              </svg>
              Download App
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
            {menuItems.map(item => <Link key={item.label} to={item.href} className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>)}
            <Button
              onClick={() => {
                handleJoinBeta();
                setIsMenuOpen(false);
              }}
              className="w-full mt-2 bg-primary text-white hover:bg-primary/90 rounded-lg px-6 h-12 text-base font-righteous transition-all duration-200"
            >
              <svg className="w-7.5 h-7.5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
              </svg>
              Download App
            </Button>
          </div>
        </div>}
      </div>
    </header>
    <FloatingQuickAccess />
  </>;
};
export default Header;