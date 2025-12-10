import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/Testimonials";

// Import local assets for fallbacks
import bigclassesThumb from "@/assets/projects/bigclasses.svg";
import vishwasThumb from "@/assets/projects/vishwas.svg";
import gunaThumb from "@/assets/projects/gunaayurvizag.svg";
import brundavanamThumb from "@/assets/projects/brundavanamgoshala.svg";
import driveEasyThumb from "@/assets/projects/drive-easy.svg";
import aksharaThumb from "@/assets/projects/akshara.svg";
import sparkedxThumb from "@/assets/projects/sparkedx.svg";
import xpertThumb from "@/assets/projects/xpertstaffing.svg";
import sparkphonicsThumb from "@/assets/projects/sparkphonics.svg";

const projects = [
  {
    name: "Vishwas.io",
    url: "https://vishwas.io",
    category: "Ed-Tech Company • Payment Integration",
    image: "/Proj-assests/vishwas.png",
    fallback: vishwasThumb,
  },
  {
    name: "Big Classes",
    url: "https://bigclasses.ai/",
    category: "EdTech Platform • AI Integration",
    image: "/Proj-assests/bigclasses.png",
    fallback: bigclassesThumb,
  },
  {
    name: "CS Coworking",
    url: "https://stately-meerkat-8c4b94.netlify.app/",
    category: "Co-Working Spaces • Booking System",
    image: "https://image2url.com/images/1765207767954-559504ef-addf-4c61-8091-09484116c424.png",
    fallback: null,
  },
  {
    name: "Guna Ayurveda",
    url: "https://gunaayurvizag.in/",
    category: "Healthcare • E-commerce",
    image: "/Proj-assests/gunaayurvizag.png",
    fallback: gunaThumb,
  },
  {
    name: "Spark EdX",
    url: "https://www.sparkedx.com/",
    category: "EdTech • Learning Management",
    image: "https://image2url.com/images/1765208102497-2c7b5322-b7c0-478d-b00a-622dc1516f6d.png",
    fallback: sparkedxThumb,
  },
  {
    name: "Drive Easy",
    url: "https://drive-easy-taupe.vercel.app/",
    category: "Car Rentals • Booking App",
    image: "/Proj-assests/drive-easy.png",
    fallback: driveEasyThumb,
  },
  {
    name: "Brundavanam Goshala",
    url: "https://brundavanamgoshala.com/",
    category: "Non-Profit • Community Platform",
    image: "/Proj-assests/brundavanamgoshala.png",
    fallback: brundavanamThumb,
  },
  {
    name: "Akshara Schools",
    url: "https://www.akshara.in/",
    category: "Education • Institutional Website",
    image: "/Proj-assests/akshara.png",
    fallback: aksharaThumb,
  },
  {
    name: "Xpert Staffing",
    url: "https://xpertstaffing.in/",
    category: "HR Solutions • Staffing Portal",
    image: "/Proj-assests/xpertstaffing.png",
    fallback: xpertThumb,
  },
  {
    name: "Spark Phonics",
    url: "https://sparkphonics.com/",
    category: "Education • Interactive Learning",
    image: "/Proj-assests/sparkphonics.png",
    fallback: sparkphonicsThumb,
  },
];

const OurProjects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#FF2A45]/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full overflow-visible pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-3 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-fade-in">
            <span className="text-primary font-orbitron tracking-widest text-xs uppercase">Portfolio Showcase</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-2 animate-fade-in-up">
            <span className="text-white">Digital</span> <span className="text-primary">Excellence</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-sans leading-relaxed animate-fade-in-up delay-100 mb-2">
            We don't just build websites; we engineer digital experiences that drive growth.
            Explore our curated selection of premium projects delivered for industry leaders.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-4 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] block animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden relative bg-muted/20">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const t = e.currentTarget;
                      if (project.fallback && t.src !== project.fallback) {
                        t.src = project.fallback;
                      } else {
                        // Final fallback to screenshot service if local assets fail
                        t.src = `https://image.thum.io/get/width/800/crop/600/${encodeURIComponent(project.url)}`;
                      }
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white font-orbitron tracking-widest uppercase text-sm border border-white/30 px-6 py-2 rounded-full backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white/10">
                      Visit Website
                    </span>
                  </div>
                </div>

                <div className="p-6 border-t border-border/50 bg-card/30 backdrop-blur-sm">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold font-orbitron mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                      <p className="text-sm text-muted-foreground font-sans uppercase tracking-wide">{project.category}</p>
                    </div>
                    <div className="p-2 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Many More Coming Soon Card */}
            <div className="group relative overflow-hidden rounded-xl bg-card/20 border-2 border-dashed border-border/50 hover:border-primary/50 transition-all duration-500 flex flex-col items-center justify-center min-h-[320px] animate-fade-in-up" style={{ animationDelay: `${projects.length * 100}ms` }}>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center p-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-orbitron text-primary">+</span>
                </div>
                <h3 className="text-2xl font-bold font-orbitron text-foreground mb-2">Many More</h3>
                <p className="text-lg text-muted-foreground font-sans tracking-wide">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 text-center border border-primary/20 shadow-[0_0_50px_rgba(220,38,38,0.1)]">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-4">
              Ready to Build Your <span className="text-primary">Legacy?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-sans mb-6 max-w-2xl mx-auto">
              Join the ranks of successful brands that trust RedHost. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/quotation">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-neon hover:shadow-neon-strong transition-all duration-300 bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white font-bold font-orbitron border-none">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-primary/50 text-foreground hover:bg-primary/10 font-orbitron">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-4 bg-background relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 mb-3 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-3">
            Voices of <span className="text-primary">Success</span>
          </h2>
          <p className="text-muted-foreground text-xl font-sans max-w-2xl mx-auto">
            Trusted by founders who demand excellence.
          </p>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Testimonials />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurProjects;
