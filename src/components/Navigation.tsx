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
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <img src={logo} alt="Redhost Logo" className="h-12 w-auto object-contain" />
              <img src={syntaxBg} alt="Logo Graphic" className="h-10 w-auto object-contain opacity-80" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {[
                { path: "/", label: "Home" },
                { path: "/projects", label: "Our Projects" },
                { path: "/services", label: "Services" },
                { path: "/mvp", label: "MVP Builder" },
                { path: "/portfolio", label: "Portfolio Builder" },
                { path: "/quotation", label: "Strategy Call" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold font-rajdhani tracking-wider uppercase transition-all duration-300 hover:text-primary ${isActive(link.path)
                    ? "text-primary scale-105 shadow-[0_0_10px_rgba(220,38,38,0.4)] bg-clip-text"
                    : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary shadow-[0_0_8px_var(--primary)] animate-pulse" />
                  )}
                </Link>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-border/50 mx-2" />

            <div className="flex items-center gap-4">
              {/* Get Started Button */}
              <Link to="/quotation" onClick={() => { if (scrollToTopOnGetStarted) window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <Button
                  className="bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white border-none shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] rounded-md px-6 py-5 font-orbitron tracking-widest uppercase transition-all duration-300 active:scale-95"
                >
                  Get Started
                </Button>
              </Link>

              {/* Audio Toggle */}
              {audio && (
                <Button
                  variant="ghost"
                  size="icon"
                  className={`ml-2 relative group overflow-hidden border border-transparent hover:border-primary/30 ${!audio.muted && "text-primary"}`}
                  onClick={audio.toggle}
                  aria-label={audio.muted ? "Unmute" : "Mute"}
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {audio.muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5 animate-pulse" />}
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-foreground hover:text-primary transition-colors relative group"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] p-0 lg:hidden flex flex-col bg-background/95 backdrop-blur-xl animate-fade-in"
          style={{ minHeight: '100vh' }}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between border-b border-border/20">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                <img src={logo} alt="Redhost Logo" className="h-12 w-auto object-contain" />
                <img src={syntaxBg} alt="Logo Graphic" className="h-10 w-auto object-contain opacity-80" />
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full hover:bg-muted/20 transition-colors border border-transparent hover:border-primary/30"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-6 p-8">
            {[
              { path: "/", label: "Home" },
              { path: "/projects", label: "Our Projects" },
              { path: "/services", label: "Services" },
              { path: "/mvp", label: "MVP Builder" },
              { path: "/portfolio", label: "Portfolio Builder" },
              { path: "/quotation", label: "Strategy Call" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-orbitron font-medium transition-all duration-200 ${isActive(link.path) ? "text-primary scale-110 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-8 w-full max-w-xs flex flex-col gap-4">
              <Link to="/quotation" onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <Button className="w-full h-12 text-lg font-orbitron bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white border-none shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                  Get Started
                </Button>
              </Link>

              {audio && (
                <Button
                  variant="outline"
                  className="w-full h-12 border-primary/30 hover:bg-primary/5"
                  onClick={() => audio.toggle()}
                >
                  {audio.muted ? (
                    <span className="flex items-center gap-2">Unmute Sound <VolumeX className="h-4 w-4" /></span>
                  ) : (
                    <span className="flex items-center gap-2 text-primary">Mute Sound <Volume2 className="h-4 w-4" /></span>
                  )}
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navigation;