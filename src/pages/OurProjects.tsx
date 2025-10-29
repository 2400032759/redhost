import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShuffleCards } from "@/components/ui/testimonial-demo";
import { useEffect } from "react";

// local SVG thumbnails (placeholders) - prefer these at runtime
import bigclassesThumb from "@/assets/projects/bigclasses.svg";
import vishwasThumb from "@/assets/projects/vishwas.svg";
import gunaThumb from "@/assets/projects/gunaayurvizag.svg";
import brundavanamThumb from "@/assets/projects/brundavanamgoshala.svg";
import driveEasyThumb from "@/assets/projects/drive-easy.svg";
import aksharaThumb from "@/assets/projects/akshara.svg";
import sriaThumb from "@/assets/projects/sriaurobindo.svg";
import svchomesThumb from "@/assets/projects/svchomes.svg";
import sparkedxThumb from "@/assets/projects/sparkedx.svg";
import xpertThumb from "@/assets/projects/xpertstaffing.svg";
import sparkphonicsThumb from "@/assets/projects/sparkphonics.svg";

const projects = [
  { name: "Big Classes", url: "https://bigclasses.ai/", thumb: bigclassesThumb, slug: "bigclasses" },
  { name: "Vishwas.io", url: "https://vishwas.io", thumb: vishwasThumb, slug: "vishwas" },
  { name: "Guna Ayurveda", url: "https://gunaayurvizag.in/", thumb: gunaThumb, slug: "gunaayurvizag" },
  { name: "Brundavanam Goshala", url: "https://brundavanamgoshala.com/", thumb: brundavanamThumb, slug: "brundavanamgoshala" },
  { name: "Drive Easy Car Rentals", url: "https://drive-easy-taupe.vercel.app/", thumb: driveEasyThumb, slug: "drive-easy" },
  { name: "Akshara Schools", url: "https://www.akshara.in/", thumb: aksharaThumb, slug: "akshara" },
  { name: "Sri Aurobindo Integral School", url: "https://www.sriaurobindointegralschool.com/", thumb: sriaThumb, slug: "sriaurobindo" },
  { name: "SVC Homes", url: "https://www.svchomes.in/", thumb: svchomesThumb, slug: "svchomes" },
  { name: "Spark EdX", url: "https://www.sparkedx.com/", thumb: sparkedxThumb, slug: "sparkedx" },
  { name: "Xpert Staffing", url: "https://xpertstaffing.in/", thumb: xpertThumb, slug: "xpertstaffing" },
  { name: "Spark Phonics", url: "https://sparkphonics.com/", thumb: sparkphonicsThumb, slug: "sparkphonics" },
];

const OurProjects = () => {
  useEffect(() => {
    // ensure page scrolls to top when this route is opened
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <section className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold font-orbitron">
              Our <span className="neon-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground font-rajdhani max-w-2xl mx-auto">
              Here are some of the websites We’ve built recently. We have 2+ years of experience in full-stack & WordPress
              development, handling over 20+ projects. We create modern, responsive websites that help businesses grow.
            </p>
          </div>

          {/* Grid with thumbnails + fallback to favicon if screenshot service fails */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              // build a render list and insert a '+More' tile after Spark Phonics
              const items: Array<any> = [];
              projects.forEach((p) => {
                items.push(p);
                if (p.slug === "sparkphonics") {
                  items.push({ more: true });
                }
              });

              return items.map((item, idx) => {
                if (item.more) {
                  return (
                    <div
                      key={`more-${idx}`}
                      className="glass-card p-6 rounded-lg hover:shadow-neon transition-all duration-200 flex items-center justify-center text-center"
                    >
                      <a href="/projects" className="flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-orbitron text-primary">+More</div>
                        <div className="text-muted-foreground font-rajdhani">See more projects</div>
                      </a>
                    </div>
                  );
                }

                const p = item;
                // runtime fallback (if needed)
                const screenshot = `https://image.thum.io/get/width/800/crop/600/${encodeURIComponent(p.url)}`;
                const favicon = `https://s2.googleusercontent.com/s2/favicons?domain_url=${encodeURIComponent(p.url)}`;
                // try to use a user-provided screenshot in public/projects/{slug}.png first
                const slug = p.slug || p.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                const publicScreenshot = `/projects/${slug}.png`;

                return (
                  <a
                    key={idx}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card p-4 rounded-lg hover:shadow-neon transition-all duration-200 flex flex-col"
                  >
                    <div
                      className="w-full bg-muted/10 rounded-md overflow-hidden flex items-center justify-center relative"
                      style={{ aspectRatio: "16/9" }}
                    >
                      <img
                        src={publicScreenshot}
                        alt={`${p.name} screenshot`}
                        loading="lazy"
                        className="object-contain w-full h-full absolute inset-0"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          const src = target.src || "";
                          if (src.endsWith(`/projects/${slug}.png`)) {
                            target.src = p.thumb || screenshot;
                          } else if (src.endsWith(p.thumb || "")) {
                            target.src = screenshot;
                          } else if (!src.includes(favicon)) {
                            target.src = favicon;
                          }
                        }}
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold font-orbitron">{p.name}</h3>
                        <p className="text-sm text-muted-foreground font-rajdhani">Live website — click to visit</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </a>
                );
              });
            })()}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground font-rajdhani">
              Want a website like these? We build fast, SEO-friendly, responsive sites with clean UI/UX. Get in touch and
              we'll help you get started.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4">
            <a href="/quotation">
              <Button variant="hero" size="lg" className="group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="neon" size="lg">Contact Us</Button>
            </a>
          </div>

          {/* Testimonials - moved from Home: show below CTAs */}
          <div className="mt-12">
            <ShuffleCards />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurProjects;
