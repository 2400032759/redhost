import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Award, Clock, HeartHandshake, PhoneCall, Calendar, AlertTriangle, TrendingDown, ShieldCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import heroImage from "@/assets/hero-bg.jpg";
import { Testimonials } from "@/components/Testimonials";
import bigclassesThumb from "@/assets/projects/bigclasses.svg";
import vishwasThumb from "@/assets/projects/vishwas.svg";
import { Logos3 } from "@/components/ui/logos3";
import { AnimatePresence } from "framer-motion";
import JapaneseIntro from "@/components/JapaneseIntro";

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

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
    <>
      <AnimatePresence>
        {showIntro && <JapaneseIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="min-h-screen relative bg-[#041F2E] font-sans selection:bg-[#FF2A45]/30">
        <Navigation />

        {/* Hero Section - Silicon Valley Premium Aesthetic - REFINED */}
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#041F2E] py-32">
          {/* Abstract Background - Soft & Floating */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background" />
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />

          {/* Floating Glows - Softer */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse-slow" />

          <div className="container mx-auto px-4 relative z-10 text-center">

            {/* Microtagline - Premium */}
            <p className="text-sm md:text-base font-sans font-medium tracking-[0.2em] uppercase text-muted-foreground/80 mb-8 animate-fade-in-up">
              Digital systems for brands that think ahead.
            </p>

            {/* Main Headline - Large but Balanced */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 font-orbitron animate-fade-in-up delay-100 leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/90">
                Elevate Your
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D4D] to-[#B30000]">
                Digital Presence.
              </span>
            </h1>

            {/* Subheadline - Concise & Confident - Lighter */}
            <p className="text-lg md:text-xl text-muted-foreground/80 font-light font-sans max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
              Websites, apps, UI/UX, and growth systems — built with precision for teams shaping the future.
            </p>

            {/* CTAs - Floating & Soft */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-md mx-auto sm:max-w-none animate-fade-in-up delay-300">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto rounded-full font-medium font-sans bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] transition-all duration-500 border-none">
                  Book Strategy Call
                </Button>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base w-full sm:w-auto rounded-full font-medium font-sans bg-transparent border border-white/20 text-white hover:bg-[#D92626]/10 hover:border-[#D92626]/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] backdrop-blur-sm transition-all duration-500">
                  See Our Work
                </Button>
              </Link>
            </div>

            {/* FOMO - Subtle & Centered */}
            <p className="mt-8 text-xs text-muted-foreground/50 font-sans animate-fade-in delay-500 tracking-wide">
              Strategy sessions are limited this week.
            </p>

          </div>
        </section>

        {/* Clients Section - Premium */}
        <Logos3 heading="Brands That Choose Precision." />

        {/* Projects Section - Refined */}
        <section className="py-24 md:py-32 bg-muted/5 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 animate-fade-in gap-6 md:gap-6">
              <div className="max-w-3xl text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 md:mb-6">
                  The <span className="text-[#FF4D4D]">Difference</span>
                </h3>
                <p className="text-muted-foreground/80 font-sans font-light text-lg md:text-xl">
                  See how smart teams transform their digital presence.
                </p>
              </div>
              <Link to="/projects" className="hidden md:block">
                <Button variant="outline" className="group font-sans text-base h-12 rounded-full border-white/20 bg-transparent hover:bg-[#D92626]/10 hover:border-[#D92626]/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                  View All Works
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {/* Project 1 */}
              <a href="https://vishwas.io" target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-blue-500/10">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/Proj-assests/vishwas.png"
                    alt="Vishwas.io"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      if (!t.src.endsWith('vishwas.png')) return;
                      t.src = vishwasThumb;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-6 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-orbitron text-base uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Visit Site
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold font-orbitron mb-2 group-hover:text-blue-500 transition-colors">Vishwas.io</h4>
                  <p className="text-base text-muted-foreground font-sans">Ed-Tech Company • Payment Integration</p>
                </div>
              </a>

              {/* Project 2 */}
              <a href="https://bigclasses.ai/" target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-blue-500/10">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="/Proj-assests/bigclasses.png"
                    alt="Big Classes"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      if (!t.src.endsWith('bigclasses.png')) return;
                      t.src = bigclassesThumb;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-6 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-orbitron text-base uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Visit Site
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold font-orbitron mb-2 group-hover:text-blue-500 transition-colors">Big Classes</h4>
                  <p className="text-base text-muted-foreground font-sans">EdTech Platform • AI Integration</p>
                </div>
              </a>

              {/* Project 3 */}
              <a href="https://stately-meerkat-8c4b94.netlify.app/" target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-blue-500/10">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src="https://image2url.com/images/1765207767954-559504ef-addf-4c61-8091-09484116c424.png"
                    alt="CS Coworking"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/ffffff?text=CS+Coworking";
                    }}
                  />
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-blue-500 text-black text-xs font-bold px-3 py-1.5 rounded font-orbitron">
                    PREVIEW
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-6 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-orbitron text-base uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      See Preview
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold font-orbitron mb-2 group-hover:text-blue-500 transition-colors">CS Coworking Spaces</h4>
                  <p className="text-base text-muted-foreground font-sans">Real Estate • Booking System</p>
                </div>
              </a>
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link to="/projects">
                <Button variant="outline" className="w-full font-sans text-xl h-16 border-white/20 bg-transparent hover:bg-[#D92626]/10 hover:border-[#D92626]/50">
                  View All Works <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features - Bento Grid - Refined & Light */}
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 md:mb-20 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                Why Top Brands <span className="text-primary">Trust Us</span>
              </h2>
              <p className="text-muted-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-sans font-light">
                We combine Japanese technical precision with bold modern aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[#FF4D4D]/20 transition-all duration-300 flex flex-col justify-center min-h-[240px] relative overflow-hidden group">
                <Zap className="h-8 w-8 text-primary mb-4 relative z-10 stroke-[1.5]" />
                <h3 className="text-xl md:text-2xl font-bold font-sans mb-2 relative z-10">Lightning Fast Performance</h3>
                <p className="text-muted-foreground/70 font-sans font-light text-base md:text-lg relative z-10 max-w-lg">
                  Built for speed. Optimized for Lighthouse. Loved by Google.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[#FF4D4D]/20 transition-all duration-300 min-h-[240px] flex flex-col justify-center relative overflow-hidden group">
                <Award className="h-8 w-8 text-primary mb-4 relative z-10 stroke-[1.5]" />
                <h3 className="text-lg md:text-xl font-bold font-sans mb-2 relative z-10">Premium Quality</h3>
                <p className="text-muted-foreground/70 font-sans font-light text-base relative z-10">
                  Pixel-perfect UI engineered for modern businesses.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[#FF4D4D]/20 transition-all duration-300 min-h-[240px] flex flex-col justify-center relative overflow-hidden group">
                <Clock className="h-8 w-8 text-primary mb-4 relative z-10 stroke-[1.5]" />
                <h3 className="text-lg md:text-xl font-bold font-sans mb-2 relative z-10">7-Day Delivery</h3>
                <p className="text-muted-foreground/70 font-sans font-light text-base relative z-10">
                  Fast sprints. Zero bottlenecks.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[#FF4D4D]/20 transition-all duration-300 flex flex-col justify-center min-h-[240px] relative overflow-hidden group">
                <HeartHandshake className="h-8 w-8 text-primary mb-4 relative z-10 stroke-[1.5]" />
                <h3 className="text-xl md:text-2xl font-bold font-sans mb-2 relative z-10">Enterprise-Grade Support</h3>
                <p className="text-muted-foreground/70 font-sans font-light text-base md:text-lg relative z-10 max-w-lg">
                  Long-term reliability for high-growth companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing - Silicon Valley Style */}
        <section className="py-24 md:py-32 relative bg-background overflow-hidden">
          {/* Subtle Global Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 md:mb-20 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
                Transparent <span className="text-primary">Investment</span>
              </h2>
              <p className="text-muted-foreground/80 text-lg font-sans font-light max-w-xl mx-auto">
                Clear, founder-friendly pricing. Zero hidden fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto items-stretch">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="animate-fade-in-up hover:transform hover:-translate-y-2 transition-transform duration-500 h-full">
                  {/* Custom scale for PricingCard needed or just use wrapper scaling */}
                  <div className="transform scale-95 h-full">
                    <PricingCard {...plan} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Refined */}
        <section className="py-24 md:py-32 bg-background relative border-t border-white/5">
          <div className="container mx-auto px-4 mb-12 md:mb-16 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-6 text-foreground">
              Trusted by <span className="text-primary">Modern Teams</span>
            </h2>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Testimonials />
          </div>
        </section>

        {/* Final CTA - Premium & Calm */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-blue-900/5 to-background" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-8 leading-tight">
              Your <span className="text-primary">Digital Advantage</span> <br className="hidden md:block" /> Starts Today.
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground/80 font-sans font-light max-w-3xl mx-auto mb-12">
              Build a presence that lasts. Compete with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-xl mx-auto sm:max-w-none">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="h-16 px-10 text-xl font-sans bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white shadow-lg shadow-[#D92626]/30 hover:shadow-[#D92626]/50 transition-all duration-300 w-full sm:w-auto border-none rounded-full relative overflow-hidden">
                  Start Your Transformation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
