import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Palette, Sparkles, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const features = [
    {
      icon: Palette,
      title: "Futuristic Japanese Design",
      description: "Crafted with a sleek, modern aesthetic inspired by Japan’s design philosophy - minimalist, powerful and elegant."
    },
    {
      icon: Code2,
      title: "Industry-Grade Code",
      description: "Your portfolio deserves code that’s clean, optimized and built using best development practices - because first impressions now come in milliseconds."
    },
    {
      icon: Sparkles,
      title: "Make an Impression That Lasts",
      description: "Whether it’s a recruiter, client or investor - stand out as a brand, not just another resume."
    }
  ];

  const included = [
    "Custom Japanese tech design",
    "Responsive on all devices",
    "Project showcase section",
    "About me section",
    "Skills & expertise display",
    "Contact form integration",
    "Social media links",
    "Free hosting for 1 month",
    "SEO optimized",
    "Fast loading speed",
    "Easy to update content",
    "Professional domain setup"
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block p-4 glass-card rounded-full mb-4 animate-float">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight neon-text">
              Need a Professional Portfolio to Get Hired?
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-rajdhani">
              Get your stunning portfolio starting at just{" "}
              <span className="text-3xl font-bold neon-text">₹1,499/-</span> INR
            </p>
            <p className="text-lg text-primary-foreground/80">
              Built with Japanese-inspired tech design that makes you stand out 🎨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/quotation">
                <Button 
                  variant="neon" 
                  size="lg" 
                  className="group animate-neon-pulse"
                >
                  Get My Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="hover:scale-105"
                >
                  See Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Portfolio Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why You Need a <span className="neon-text">Professional Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-rajdhani">
              Stand out in the competitive job market with a portfolio that showcases your skills and projects
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
                  <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
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

      {/* Package Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's <span className="neon-text">Included</span>
              </h2>
              <p className="text-muted-foreground text-lg font-rajdhani">
                Everything you need for a professional online presence
              </p>
            </div>

            <Card className="glass-card shadow-neon border-primary/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-orbitron neon-text">Professional Portfolio Package</CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-4xl font-bold text-primary neon-text">₹1,499/-</span>
                  <span className="block text-sm text-muted-foreground mt-2 font-rajdhani">
                    One-time payment • Lifetime ownership
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
                
                <div className="bg-gradient-primary/10 p-4 rounded-lg mb-6 neon-border">
                  <p className="text-sm text-center font-rajdhani">
                    <strong className="text-primary">Special Offer:</strong> Get your portfolio delivered in just 3-5 days!
                  </p>
                </div>

                <div className="text-center">
                  <Link to="/quotation">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="group w-full md:w-auto"
                    >
                      Start Building My Portfolio
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground neon-text">
              Ready to Impress Recruiters?
            </h2>
            <p className="text-xl text-primary-foreground/90 font-rajdhani">
              Get your professional portfolio today and land your dream job!
            </p>
            <Link to="/quotation">
              <Button 
                variant="neon" 
                size="lg" 
                className="group animate-neon-pulse"
              >
                Get Started Now
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-180 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
