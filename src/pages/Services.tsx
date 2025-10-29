import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";

const Services = () => {
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

  const serviceFeatures = [
    {
      title: "Modern Design",
      description: "Beautiful, contemporary designs with Japanese tech aesthetics that make your brand stand out and engage your visitors."
    },
    {
      title: "Responsive Layout",
      description: "Your website will look perfect on all devices - desktop, tablet, and mobile with fluid animations."
    },
    {
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your website rank higher in search results and attract more visitors."
    },
    {
      title: "Fast Performance",
      description: "Optimized code and hosting ensure lightning-fast load times for better user experience and conversions."
    },
    {
      title: "Expert Support",
      description: "Our dedicated team is always ready to help you with any questions or updates, 24/7 availability."
    },
    {
      title: "Regular Updates",
      description: "Keep your website fresh with easy content updates and maintenance support from our expert team."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-orbitron">
              Our <span className="neon-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rajdhani">
              Choose the perfect plan that fits your business needs. All plans include modern Japanese-inspired design, 
              responsive layout, and expert support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
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

          <div className="max-w-5xl mx-auto mt-20 space-y-12">
            <div className="text-center animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-orbitron">
                What's <span className="neon-text">Included</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary font-orbitron neon-text">{feature.title}</h3>
                  <p className="text-muted-foreground font-rajdhani">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
