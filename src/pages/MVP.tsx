import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Rocket, Target, CheckCircle2, Clock, Zap, Cpu, Code2, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonials } from "@/components/Testimonials";

const MVP = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('mvp-offer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#FF2A45]/30">
      <Navigation />

      {/* Hero Section - High Impact & FOMO */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[120px] rounded-full overflow-visible pointer-events-none" />

        {/* Floating Icons (Simulated Animation) */}
        <div className="hidden lg:block absolute top-1/4 left-1/4 animate-bounce duration-[3000ms]">
          <Rocket className="h-12 w-12 text-primary/20 rotate-45" />
        </div>
        <div className="hidden lg:block absolute bottom-1/3 right-1/4 animate-pulse duration-[4000ms]">
          <Code2 className="h-16 w-16 text-primary/10 -rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-red-500/50 bg-red-500/10 backdrop-blur-sm animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-400 font-orbitron tracking-widest text-sm font-bold uppercase">High Demand: Only 2 Slots Left This Week</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold font-orbitron mb-6 leading-tight animate-fade-in-up">
            Don't Let Your Idea <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#B30000]">Die on a Napkin.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed animate-fade-in-up delay-100 mb-8">
            The market waits for no one. We assume the tech risk so you can focus on the business.
            <span className="block mt-4 text-white font-bold text-3xl">
              Launch your standardized MVP in <span className="text-primary underline decoration-dashed underline-offset-8">7 Days</span>.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 animate-fade-in-up delay-200">
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="h-16 px-10 rounded-full text-xl font-orbitron shadow-[0_0_50px_rgba(220,38,38,0.5)] hover:shadow-[0_0_80px_rgba(220,38,38,0.7)] transition-all duration-300 bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white hover:scale-105 border-none"
            >
              Build My MVP Now
              <Rocket className="ml-2 h-6 w-6 animate-bounce" />
            </Button>
            <p className="text-sm font-sans text-muted-foreground">
              *100% IP Ownership • NDA Protected
            </p>
          </div>
        </div>
      </section>

      {/* The Problem / Agitation Section */}
      <section className="py-16 bg-muted/20 relative border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center feature-card">
            <div className="p-8 rounded-2xl bg-background/50 border border-red-500/20">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6 text-red-500">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-orbitron mb-3">Time is Money</h3>
              <p className="font-sans text-muted-foreground">Every day you delay, a competitor is building your idea. Speed is your only advantage.</p>
            </div>
            <div className="p-8 rounded-2xl bg-background/50 border border-primary/20 shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] transform scale-105 z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-orbitron mb-3 text-primary">The RedHost Way</h3>
              <p className="font-sans text-foreground text-lg">We ship fast. 7 Days. Clean Code. Scalable Architecture. No excuses.</p>
            </div>
            <div className="p-8 rounded-2xl bg-background/50 border border-red-500/20">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6 text-red-500">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-orbitron mb-3">Execution is Key</h3>
              <p className="font-sans text-muted-foreground">Investors don't fund ideas. They fund execution. Show them a working product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer - High Value */}
      <section id="mvp-offer" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-orbitron leading-tight">
                An Unbeatable <br /> <span className="text-primary">Stater Pack</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Complete Production-Ready MVP",
                  "Modern Tech Stack (React/Next.js)",
                  "Mobile Responsive Design",
                  "1 Month Free Hosting",
                  "Payment Gateway Setup",
                  "Admin Dashboard Component",
                  "Investor Pitch Deck Template",
                  "Full NDA Protection (Legal Signed)"
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
                  <span className="bg-primary text-black font-bold font-orbitron px-4 py-1 rounded-bl-xl">BEST SELLER</span>
                </div>
                <CardHeader className="text-center pb-2 pt-10">
                  <CardTitle className="text-3xl font-orbitron text-white">MVP Launchpad</CardTitle>
                  <CardDescription className="font-sans text-lg">One-time investment</CardDescription>
                </CardHeader>
                <CardContent className="text-center p-8 pt-4">
                  <div className="mb-6">
                    <span className="text-2xl text-muted-foreground line-through mr-4">₹15,000</span>
                    <span className="text-6xl font-bold text-primary font-orbitron">₹4,999</span>
                  </div>
                  <Link to="/mvp-intake">
                    <Button size="lg" className="w-full text-xl h-14 font-orbitron bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white shadow-neon border-none">
                      Secure My Spot
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                  <p className="mt-4 text-xs text-muted-foreground font-sans">
                    *Limited time pricing for early adopters. Price increases next month.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process - The "Sprint" */}
      <section className="py-20 bg-background relative border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-4">
              The 7-Day <span className="text-primary">Sprint</span>
            </h2>
            <p className="text-xl text-muted-foreground font-sans">We mean it when we say fast.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: Lightbulb, title: "Day 1-2", desc: "Discovery & Blueprint" },
                { icon: Code2, title: "Day 3-5", desc: "Core Development" },
                { icon: Testimonials, iconComponent: Cpu, title: "Day 6", desc: "Testing & Polish" }, // Using generic icon logic
                { icon: Rocket, title: "Day 7", desc: "Deployment & Launch" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Node */}
                  <div className="w-20 h-20 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] group-hover:scale-110 transition-transform duration-300">
                    {step.iconComponent ? <step.iconComponent className="h-8 w-8 text-primary" /> : <step.icon className="h-8 w-8 text-primary" />}
                  </div>
                  <h3 className="text-xl font-bold font-orbitron mb-2">{step.title}</h3>
                  <p className="text-muted-foreground font-sans">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOMO CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 animate-pulse" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-8">
            Stop Dreaming. <span className="text-primary">Start Selling.</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-sans mb-10 max-w-2xl mx-auto">
            Your customers are waiting. The competition is moving. <br />
            Are you ready to take the leap?
          </p>
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D92626] to-[#B30000] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Button
              onClick={scrollToPricing}
              className="relative px-12 py-8 text-2xl bg-black rounded-lg leading-none flex items-center gap-4 text-white font-orbitron border-none hover:bg-black/80"
            >
              <Rocket className="h-8 w-8 text-primary animate-bounce" />
              Launch My MVP
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-background relative border-t border-border/50">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h2 className="text-2xl font-orbitron mb-2">Join the <span className="text-primary">Winner's Circle</span></h2>
        </div>
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MVP;
