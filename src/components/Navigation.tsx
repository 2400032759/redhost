import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Menu, X } from "lucide-react";
import { useAudio } from "@/components/BackgroundAudio";
import logo from "@/assets/letter-head-logo.png";
import syntaxBg from "@/assets/syntax-white-bg-r.png";

type NavigationProps = {
  scrollToTopOnGetStarted?: boolean;
};

const Navigation = ({ scrollToTopOnGetStarted }: NavigationProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const audio = (() => {
    try {
      return useAudio();
    } catch (e) {
      return null;
    }
  })();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
            {/* Our Projects immediately after Home */}
            <Link 
              to="/projects" 
              className={`font-medium transition-all hover:text-primary font-rajdhani text-lg hover:neon-text ${
                isActive("/projects") ? "text-primary neon-text" : "text-foreground"
              }`}
            >
              Our Projects
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
              Portfolio Builder
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
            <Link to="/quotation" onClick={() => { if (scrollToTopOnGetStarted) window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
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
          {/* (desktop audio toggle kept next to Get Started; mobile toggle is in the overlay) */}

          {/* Mobile menu button */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md neon-border animate-neon-pulse"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[999] p-0 md:hidden flex flex-col"
          style={{
            background: 'linear-gradient(135deg, #0a0618 0%, #1a0a2d 100%)',
            minHeight: '100vh',
            minWidth: '100vw',
          }}
        >
          <div className="w-full h-full flex flex-col">
            <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-background z-20">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <div className="flex items-center gap-2 p-1 rounded-md neon-border animate-neon-pulse glass-card">
                  <img src={logo} alt="Letterhead logo" className="h-10 w-auto rounded-sm object-contain" />
                  <img src={syntaxBg} alt="Syntax background" className="h-8 w-auto rounded-sm object-contain" />
                </div>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md neon-border animate-neon-pulse glass-card" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 w-full flex-1 justify-center px-6">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-lg font-medium neon-text bg-background w-full p-4 rounded-md shadow">Home</Link>
              <Link to="/projects" onClick={() => setMobileOpen(false)} className="text-lg font-medium neon-text bg-background w-full p-4 rounded-md shadow">Our Projects</Link>
              <Link to="/services" onClick={() => setMobileOpen(false)} className="text-lg font-medium neon-text bg-background w-full p-4 rounded-md shadow">Services</Link>
              <Link to="/mvp" onClick={() => setMobileOpen(false)} className="text-lg font-medium neon-text bg-background w-full p-4 rounded-md shadow">MVP Builder</Link>
              <Link to="/portfolio" onClick={() => setMobileOpen(false)} className="text-lg font-medium neon-text bg-background w-full p-4 rounded-md shadow">Portfolio Builder</Link>
              <Link to="/quotation" onClick={() => setMobileOpen(false)} className="text-lg font-medium neon-text bg-background w-full p-4 rounded-md shadow">Get Quotation</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-lg font-medium neon-text bg-background w-full p-4 rounded-md shadow">Contact</Link>

              <div className="pt-6 pb-8">
                <Link to="/quotation" onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <Button variant="neon" size="lg" className="w-full bg-background shadow">Get Started</Button>
                </Link>
              </div>

              {audio && (
                <div className="pt-4">
                  <Button
                    variant="neon"
                    size="sm"
                    className="animate-neon-pulse shadow-neon-strong glass-card"
                    onClick={() => audio.toggle()}
                    aria-pressed={!audio.muted}
                    aria-label={audio.muted ? "Unmute background music" : "Mute background music"}
                  >
                    {audio.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;