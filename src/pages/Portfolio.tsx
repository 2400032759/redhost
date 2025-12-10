import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2, User, Briefcase, Award, Star, TrendingUp, Monitor } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HiredTestimonials } from "@/components/HiredTestimonials";

const Portfolio = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('portfolio-offer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#FF2A45]/30">
      <Navigation />

      {/* Hero Section - Personal Branding */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[120px] rounded-full overflow-visible pointer-events-none" />

        {/* Floating Icons */}
        <div className="hidden lg:block absolute top-1/3 left-1/5 animate-bounce duration-[4000ms]">
          <Briefcase className="h-10 w-10 text-primary/20 -rotate-12" />
        </div>
        <div className="hidden lg:block absolute bottom-1/4 right-1/5 animate-pulse duration-[3000ms]">
          <Award className="h-12 w-12 text-primary/10 rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-fade-in">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-primary font-orbitron tracking-widest text-sm font-bold uppercase">Rank #1 in Applications</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 leading-tight animate-fade-in-up">
            Stop Sending Just <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#B30000]">A Resume.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed animate-fade-in-up delay-100 mb-8">
            Recruiters spend <span className="text-white font-bold">6 seconds</span> on average.
            Capture their attention instantly with a world-class digital portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 animate-fade-in-up delay-200">
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="h-16 px-10 rounded-full text-xl font-orbitron shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_rgba(220,38,38,0.7)] transition-all duration-300 bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white hover:scale-105 border-none"
            >
              Build My Personal Brand
              <User className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-sm font-sans text-muted-foreground">
              *Instant Credibility Boost
            </p>
          </div>
        </div>
      </section>

      {/* Why You Need This */}
      <section className="py-16 bg-muted/20 relative border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                <Monitor className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-orbitron mb-3">Showcase Real Work</h3>
              <p className="font-sans text-muted-foreground">Don't just list skills. Show live projects that prove your expertise.</p>
            </div>
            <div className="p-8 rounded-2xl bg-background/50 border border-primary/20 shadow-[0_0_30px_rgba(220,38,38,0.1)] transform scale-105 z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-orbitron mb-3 text-primary">Career Acceleration</h3>
              <p className="font-sans text-foreground text-lg">Candidates with portfolios get 4x more interview calls and higher salary offers.</p>
            </div>
            <div className="p-8 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-orbitron mb-3">Freelance Magnet</h3>
              <p className="font-sans text-muted-foreground">Attract high-paying freelance clients who trust what they can see.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section id="portfolio-offer" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-orbitron leading-tight">
                The Ultimate <br /> <span className="text-primary">Career Upgrade</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Stunning Japanese Tech Design",
                  "About Me & Skills Section",
                  "Interactive Project Showcase",
                  "Resume/CV Download Button",
                  "Contact & Social Integration",
                  "Mobile Responsive",
                  "SEO Optimized for Your Name"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card/40 border border-border/50 hover:border-primary/50 transition-colors">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
              <Card className="glass-card border-primary/50 relative transform hover:scale-[1.02] transition-transform duration-500 bg-black/40">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-primary/20 text-primary border border-primary/50 font-bold font-orbitron px-4 py-1 rounded-full text-xs">STUDENT / PRO</span>
                </div>
                <CardHeader className="text-center pb-2 pt-10">
                  <CardTitle className="text-3xl font-orbitron text-white">Portfolio Pro</CardTitle>
                  <CardDescription className="font-sans text-lg">One-time investment</CardDescription>
                </CardHeader>
                <CardContent className="text-center p-8 pt-4">
                  <div className="mb-6">
                    <span className="text-2xl text-muted-foreground line-through mr-4">₹5,000</span>
                    <span className="text-6xl font-bold text-primary font-orbitron">₹1,499</span>
                  </div>
                  <Link to="/quotation">
                    <Button size="lg" className="w-full text-xl h-14 font-orbitron bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white shadow-neon border-none">
                      Get Hired Faster
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                  <p className="mt-4 text-xs text-muted-foreground font-sans">
                    *Delivered in 3-5 Business Days
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Using Specific HiredTestimonials */}
      <section className="py-12 bg-background relative border-t border-border/50">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h2 className="text-2xl font-orbitron mb-2">People Who Got <span className="text-primary">Hired</span></h2>
        </div>
        <div className="container mx-auto px-4">
          <HiredTestimonials />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 animate-pulse" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-8">
            Your Future Is <span className="text-primary">Waiting.</span>
          </h2>
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D92626] to-[#B30000] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Button
              onClick={scrollToPricing}
              className="relative px-12 py-8 text-2xl bg-black rounded-lg leading-none flex items-center gap-4 text-white font-orbitron border-none hover:bg-black/80"
            >
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              Launch My Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
