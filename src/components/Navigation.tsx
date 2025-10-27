import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/components/BackgroundAudio";
import logo from "@/assets/letter-head-logo.png";
import syntaxBg from "@/assets/syntax-white-bg-r.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const audio = (() => {
    try {
      return useAudio();
    } catch (e) {
      return null;
    }
  })();

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
            {/* Desktop toggle placed immediately after Get Started */}
            {audio && (
              <div className="hidden md:inline-flex">
                <Button
                  variant="neon"
                  size="sm"
                  className="animate-neon-pulse shadow-neon-strong ml-2"
                  onClick={audio.toggle}
                  aria-pressed={!audio.muted}
                  aria-label={audio.muted ? "Unmute background music" : "Mute background music"}
                >
                  {audio.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
              </div>
            )}
          </div>
          {/* Audio toggle - visible on all screen sizes */}
          {audio && (
            <div className="flex items-center ml-4 md:hidden">
              <Button
                variant="neon"
                size="sm"
                className="animate-neon-pulse shadow-neon-strong"
                onClick={audio.toggle}
                aria-pressed={!audio.muted}
                aria-label={audio.muted ? "Unmute background music" : "Mute background music"}
              >
                {audio.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;