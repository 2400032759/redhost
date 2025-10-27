import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Award, Clock, HeartHandshake } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized websites that load in milliseconds for the best user experience"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Top-notch UI/UX design that converts visitors into customers"
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Get your website live in just 7 days with our streamlined process"
    },
    {
      icon: HeartHandshake,
      title: "Expert Support",
      description: "Dedicated support team ready to help you succeed online"
    }
  ];

  const pricingPlans = [
    {
      title: "Standard",
      price: "₹5,999",
      description: "Perfect for small businesses",
      features: [
        "Basic landing page design",
        "Up to 8 pages",
        "Free web hosting",
        "2 revisions included",
        "7-day delivery",
        "Mobile responsive",
        "SEO optimized"
      ]
    },
    {
      title: "Gold",
      price: "₹7,999",
      description: "Ideal for growing businesses",
      features: [
        "Premium landing page design",
        "Up to 15 pages",
        "Free hosting & domain",
        "3 revisions included",
        "7-day delivery",
        "Mobile responsive",
        "Advanced SEO",
        "Contact forms"
      ],
      isPopular: true
    },
    {
      title: "Platinum",
      price: "₹14,999",
      description: "Complete solution for enterprises",
      features: [
        "Premium animated design",
        "Up to 15 pages",
        "Top-notch UI/UX",
        "Free hosting & VPS (1 month)",
        "Free domain",
        "2 revisions included",
        "7-day delivery",
        "Priority support",
        "Advanced animations"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-orbitron">
              <span className="neon-text">Where Japanese Design</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Meets Modern Web Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-rajdhani">
              We build stunning, high-performance websites with top-notch UI/UX — now with Japanese tech-inspired precision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/services">
                <Button variant="neon" size="lg" className="group animate-neon-pulse">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/quotation">
                <Button variant="hero" size="lg">
                  Get Free Quote
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
              Why Choose <span className="neon-text">Redhost?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-rajdhani">
              We combine cutting-edge technology with creative design to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
              Our <span className="neon-text">Pricing Plans</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-rajdhani">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground font-orbitron neon-text">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-primary-foreground/90 font-rajdhani">
              Get started today and see your vision come to life in just 7 days
            </p>
            <Link to="/quotation">
            <br/>
              <Button 
                variant="neon" 
                size="lg" 
                className="group animate-neon-pulse"
              >
                Get Your Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
