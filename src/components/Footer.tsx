import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowRight, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/letter-head-logo.png";
import syntaxBg from "@/assets/syntax-white-bg-r.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background decoration - Clean */}
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-card/50 border border-white/5 backdrop-blur-sm">
                <img src={logo} alt="Redhost Logo" className="h-10 w-auto object-contain" />
                <img src={syntaxBg} alt="Logo Graphic" className="h-8 w-auto object-contain opacity-80" />
              </div>
            </div>
            <p className="text-muted-foreground/80 font-sans text-sm leading-relaxed max-w-sm">
              Hyderabad’s premier web development agency. We blend Japanese precision with modern design to build digital systems that scale.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-500 hover:bg-blue-500/5 transition-all duration-300">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-sans font-semibold text-sm mb-6 text-foreground uppercase tracking-widest opacity-80">Company</h3>
            <ul className="space-y-4 font-sans text-sm">
              {['Home', 'Services', 'Our Projects', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-sans font-semibold text-sm mb-6 text-foreground uppercase tracking-widest opacity-80">Services</h3>
            <ul className="space-y-4 font-sans text-sm">
              {['Custom Web Development', 'E-Commerce Solutions', 'UI/UX Design', 'SEO Optimization', 'App Development'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="font-sans font-semibold text-sm mb-6 text-foreground uppercase tracking-widest opacity-80">Get in Touch</h3>
              <ul className="space-y-4 font-sans text-sm">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-blue-500 mt-0.5" />
                  <span>Madhapur, Hyderabad,<br />Telangana, India</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors cursor-pointer">
                  <Phone className="h-4 w-4 text-blue-500" />
                  <span>+91 90594 7128</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors cursor-pointer">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <span>contact@redhost.tech</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/5 pt-6">
              <h4 className="font-sans font-medium text-xs mb-3 text-muted-foreground uppercase tracking-wide">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <Button size="icon" className="shrink-0 bg-blue-600 hover:bg-blue-500 h-9 w-9">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-sans">
          <p>&copy; {new Date().getFullYear()} RedHost. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;