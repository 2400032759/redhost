import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { Testimonials } from "@/components/Testimonials";
import {
  CheckCircle2, Zap, Shield, Rocket, Code2, Smartphone,
  Palette, Globe, BarChart3, Cloud, Layout, Server, Database,
  Search, Share2, PenTool, MonitorSmartphone, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const allServices = [
    {
      id: "web",
      title: "Web Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Scalable, high-performance websites tailored to your business goals.",
      subService: [
        "Corporate Websites", "E-Commerce Platforms", "SaaS Applications", "Landing Pages", "CMS Integration"
      ]
    },
    {
      id: "app",
      title: "App Development",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      description: "Native and cross-platform mobile apps for iOS and Android.",
      subService: [
        "iOS Development", "Android Development", "React Native", "Flutter", "App Maintenance"
      ]
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: <Palette className="h-8 w-8 text-primary" />,
      description: "User-centric designs that drive engagement and retention.",
      subService: [
        "User Research", "Wireframing", "Prototyping", "Design Systems", "Mobile App UI"
      ]
    },
    {
      id: "growth",
      title: "Digital Growth (SEO)",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      description: "Data-driven strategies to boost your visibility and conversions.",
      subService: [
        "Technical SEO", "Content Marketing", "Social Media Strategy", "PPC Campaigns", "Analytics"
      ]
    },
    {
      id: "branding",
      title: "Branding & Identity",
      icon: <PenTool className="h-8 w-8 text-primary" />,
      description: "Crafting a unique voice and visual identity for your brand.",
      subService: [
        "Logo Design", "Brand Guidelines", "Marketing Collateral", "Rebranding", "Visual Language"
      ]
    },
    {
      id: "enterprise",
      title: "Enterprise Solutions",
      icon: <Server className="h-8 w-8 text-primary" />,
      description: "Robust infrastructure and software for large-scale operations.",
      subService: [
        "Cloud Migration", "API Integration", "Database Design", "Cybersecurity", "DevOps"
      ]
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
        "Free Web hosting(1 Year)",
        "2 revisions included",
        "7-day delivery",
        "Mobile responsive",
        { label: "Basic UI/UX", included: true },
        { label: "SEO-optimised", included: false },
        { label: "Priority support", included: false },
        { label: "Free domain", included: false },
        { label: "Custom API Integration", included: false },
      ]
    },
    {
      title: "Gold",
      price: "₹7,999",
      description: "Ideal for growing businesses",
      features: [
        "Premium landing page design",
        "Up to 15 pages",
        "Free Web hosting(1 Year)",
        "3 revisions included",
        "7-day delivery",
        "Mobile responsive",
        "Basic SEO",
        "Advanced UI/UX",
        { label: "Support Assist", included: true },
        { label: "Free domain", included: false },
        { label: "Custom API Integration", included: false },
      ],
      isPopular: true
    },
    {
      title: "Platinum",
      price: "₹14,999",
      description: "Complete solution for enterprises",
      features: [
        "Premium animated landing page",
        "Up to 20 pages",
        "Top-notch UI/UX",
        "Free hosting & VPS (1 month)",
        "Free domain",
        "3 revisions included",
        "7-day delivery",
        "Basic SEO",
        "Priority support",
        "Advanced animations",
        { label: "Custom API Integration", included: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#FF2A45]/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        {/* Premium Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm mb-6 animate-pulse cursor-default">
            <span className="text-sm font-sans font-bold tracking-wide uppercase text-red-500">
              Warning: High Demand - Limited Slots Available
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 animate-fade-in-up">
            <span className="text-white">Dominate</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#B30000]">Your Industry.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed animate-fade-in-up delay-100 mb-8">
            Don't settle for average. We build digital assets that crush competitors.
            <span className="text-white font-bold block mt-2">Scale faster with RedHost.</span>
          </p>
          <div className="animate-fade-in-up delay-200">
            <Link to="/quotation">
              <Button size="lg" className="h-14 px-8 text-lg font-orbitron bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white shadow-[#D92626]/40 transition-all duration-300 rounded-xl border-none">
                Book Priority Consultation <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 font-sans">
              Only 2 slots remaining for this week.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (The "All Services" View) */}
      <section className="py-12 md:py-20 relative bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-4">Comprehensive <span className="text-primary">Capabilities</span></h2>
            <p className="text-muted-foreground text-lg font-sans">Hover over any service to explore detailed offerings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* FOMO Badge */}
                {(index === 0 || index === 1 || index === 3) && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                    <span className="text-[10px] font-bold font-orbitron text-red-400 uppercase tracking-wider flex items-center gap-1">
                      <Zap className="w-3 h-3" /> High Demand
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-orbitron mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground font-sans text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Sub Services List (Visible always, emphasized on hover) */}
                  <div className="space-y-3 pt-6 border-t border-white/5">
                    {service.subService.map((sub, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-sans text-muted-foreground group-hover:text-white transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                        {sub}
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="mt-8 pt-4">
                    <Link to="/quotation">
                      <Button variant="outline" className="w-full border-primary/20 hover:bg-[#D92626] hover:text-white group-hover:border-transparent transition-all duration-300 font-orbitron group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                        Book {service.title ? service.title.split(' ')[0] : 'This'} Strategy
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-4">Web Development <span className="text-primary">Packages</span></h2>
            <p className="text-muted-foreground text-lg font-sans">Transparent pricing for standard web projects. Custom quotes available.</p>
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

          <div className="text-center mt-12">
            <Link to="/quotation">
              <Button className="font-orbitron text-lg px-8 py-6 rounded-xl shadow-neon hover:shadow-neon-strong transition-all bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white border-none">
                Get Custom Quote for Enterprise / Mobile Apps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The RedHost Standard */}
      <section className="py-20 relative bg-muted/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-6">The <span className="text-primary">RedHost</span> Standard</h2>
              <p className="text-muted-foreground text-xl font-sans mb-8 leading-relaxed">
                We don't compete with freelancers. We compete with global consultancies.
                Our delivery framework ensures Japanese precision in every line of code.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Enterprise Security", desc: "Bank-grade protection for your data.", icon: <Shield className="w-6 h-6 text-primary" /> },
                  { title: "99.9% Uptime", desc: "Reliable hosting architecture.", icon: <Server className="w-6 h-6 text-primary" /> },
                  { title: "24/7 Support", desc: "Always here when you need us.", icon: <CheckCircle2 className="w-6 h-6 text-primary" /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-orbitron mb-1">{item.title}</h3>
                      <p className="text-muted-foreground font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold font-orbitron mb-6 text-center">Our Process</h3>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Discovery", desc: "Deep dive into business goals." },
                    { step: "02", title: "Strategy", desc: "Architecture & UX planning." },
                    { step: "03", title: "Development", desc: "Agile sprints & rigorous testing." },
                    { step: "04", title: "Launch", desc: "Deployment & growth monitoring." },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="text-4xl font-bold font-orbitron text-primary/20 group-hover:text-primary transition-colors">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-orbitron">{step.title}</h4>
                        <p className="text-sm text-muted-foreground font-sans">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div >
        </div >
      </section >

      {/* Testimonials */}
      < section className="py-20 bg-background relative border-t border-border/50" >
        <div className="container mx-auto px-4 mb-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-6">
            Client <span className="text-primary">Success</span>
          </h2>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Testimonials />
        </div>
      </section >

      <Footer />
    </div >
  );
};

export default Services;
