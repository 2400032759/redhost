import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Rocket, Target, CheckCircle2, Clock, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MVP = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Have an Idea?",
      description: "Got a brilliant idea but don't know where to start? We'll help you transform it into reality with precision."
    },
    {
      icon: Rocket,
      title: "Fast Launch",
      description: "Get your working MVP up and running in just 7 days. No delays, no excuses, pure Japanese efficiency."
    },
    {
      icon: Target,
      title: "Investor Ready",
      description: "Create a prototype that's perfect for pitching to investors and stakeholders with stunning design."
    }
  ];

  const included = [
    "Working MVP in 7 days",
    "Up to 5 pages",
    "Core features implementation",
    "Free web hosting for 1 month",
    "Japanese tech-inspired design",
    "Mobile responsive design",
    "Basic testing included",
    "1 revision included",
    "Essential integrations",
    "Prototype ready for investors",
    "Clean, modern design"
  ];

  const process = [
    {
      step: "1",
      title: "Share Your Idea",
      description: "Tell us about your vision, target audience, and core features you need."
    },
    {
      step: "2",
      title: "We Plan & Design",
      description: "Our team creates a blueprint and design mockups for your approval."
    },
    {
      step: "3",
      title: "Development",
      description: "We build your MVP with clean code and essential features."
    },
    {
      step: "4",
      title: "Launch",
      description: "Your MVP goes live in 7 days, ready to test with real users."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block p-3 glass-card rounded-full mb-4 animate-float">
              <Lightbulb className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight font-orbitron">
              💡 Have an Idea? <span className="neon-text">Need an MVP?</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-rajdhani">
              No worries - we'll build your working MVP in just 7 days
            </p>
            <div className="inline-block glass-card backdrop-blur-sm px-6 py-4 rounded-lg border border-primary/30 neon-border">
              <p className="text-3xl font-bold text-primary-foreground font-rajdhani">
                Starting at <span className="neon-text text-4xl">₹4,999/-</span> INR
              </p>
            </div>
            <p className="text-xl text-primary-foreground/80 font-rajdhani">
              Let's turn your idea into reality! 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/quotation">
                <Button 
                  variant="neon" 
                  size="lg" 
                  className="group animate-neon-pulse"
                >
                  Build My MVP
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="hover:scale-105"
                >
                  Discuss My Idea
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
              Why Choose our <span className="neon-text">MVP Builder ?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-rajdhani">
              Perfect for entrepreneurs, startups, and innovators who want to validate their ideas quickly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4 shadow-glow">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-orbitron">{feature.title}</h3>
                  <p className="text-muted-foreground font-rajdhani">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
                What's <span className="neon-text">Included</span>
              </h2>
              <p className="text-muted-foreground text-lg font-rajdhani">
                Everything you need to launch your MVP successfully
              </p>
            </div>

            <Card className="glass-card shadow-neon border-primary/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-orbitron neon-text">MVP Builder Package</CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-4xl font-bold text-primary neon-text">₹4,999/-</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {included.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground font-rajdhani">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-primary/20 text-center">
                  <Link to="/quotation">
                    <Button variant="hero" size="lg" className="group">
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
              Our <span className="neon-text">7-Day Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-rajdhani">
              From idea to launch in just one week with Japanese precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-lg hover:shadow-neon transition-all duration-300 animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 left-6 bg-gradient-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-neon-strong animate-neon-pulse font-orbitron">
                  {item.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-rajdhani">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full neon-border">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold font-rajdhani">Total Time: 7 Days</span>
              <Zap className="h-5 w-5 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground neon-text font-orbitron">
              Ready to Turn Your Idea Into Reality?
            </h2>
            <p className="text-xl text-primary-foreground/90 font-rajdhani">
              Don't let your brilliant idea stay just an idea. Let's build your MVP today!
            </p>
            <Link to="/quotation">
              <Button 
                variant="neon" 
                size="lg" 
                className="group animate-neon-pulse"
              >
                Start Building My MVP
                <Rocket className="ml-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MVP;
