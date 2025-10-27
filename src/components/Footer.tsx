import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Code2 } from "lucide-react";
import logo from "@/assets/letter-head-logo.png";
import syntaxBg from "@/assets/syntax-white-bg-r.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 p-1 rounded-md neon-border animate-neon-pulse">
                <img src={logo} alt="Letterhead logo" className="h-10 w-auto rounded-sm object-contain" />
                <img src={syntaxBg} alt="Syntax background" className="h-8 w-auto rounded-sm object-contain" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Hyderabad's premier web development experts. Building beautiful, fast and user-friendly websites.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/quotation" className="text-muted-foreground hover:text-primary transition-colors">
                  Get Quotation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Our Plans</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Standard - ₹5,999</li>
              <li className="text-muted-foreground">Gold - ₹7,999</li>
              <li className="text-muted-foreground">Platinum - ₹14,999</li>
              <li className="text-muted-foreground">MVP Builder - ₹4,999*</li>
              <li className="text-muted-foreground">Portfolio Builder - ₹1,499*</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Hyderabad, India</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 90594 7128</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@redhost.tech</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Red Host Web Development Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;