import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/letter-head-logo.png";
import syntaxBg from "@/assets/syntax-white-bg-r.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg border-b border-primary/20 neon-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-2 p-1 rounded-md neon-border animate-neon-pulse">
              <img
                src={logo}
                alt="Letterhead logo"
                className="h-10 w-auto rounded-sm object-contain"
              />
              <img
                src={syntaxBg}
                alt="Syntax background"
                className="h-8 w-auto rounded-sm object-contain"
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`font-medium transition-all hover:text-primary font-rajdhani text-lg hover:neon-text ${
                isActive("/") ? "text-primary neon-text" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-all hover:text-primary font-rajdhani text-lg hover:neon-text ${
                isActive("/services") ? "text-primary neon-text" : "text-foreground"
              }`}
            >
              Services
            </Link>
            <Link 
              to="/mvp" 
              className={`font-medium transition-all hover:text-primary font-rajdhani text-lg hover:neon-text ${
                isActive("/mvp") ? "text-primary neon-text" : "text-foreground"
              }`}
            >
              MVP Builder
            </Link>
            <Link 
              to="/portfolio" 
              className={`font-medium transition-all hover:text-primary font-rajdhani text-lg hover:neon-text ${
                isActive("/portfolio") ? "text-primary neon-text" : "text-foreground"
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/quotation" 
              className={`font-medium transition-all hover:text-primary font-rajdhani text-lg hover:neon-text ${
                isActive("/quotation") ? "text-primary neon-text" : "text-foreground"
              }`}
            >
              Get Quotation
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-all hover:text-primary font-rajdhani text-lg hover:neon-text ${
                isActive("/contact") ? "text-primary neon-text" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <Link to="/quotation">
              <Button variant="neon" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;