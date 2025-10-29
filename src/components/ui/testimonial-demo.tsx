import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "https://image2url.com/images/1761637344268-4fdf98f0-c92a-41f4-9e47-1eb841c53bda.jpg",
    testimonial: "We’re extremely satisfied with Red Host’s work. They developed a fully functional website for Guna Ayurveda, Vizag, perfectly tailored to our needs - all within just 3 days!",
    author: "Dr. P. Kamalakar, Guna Ayurveda, Vizag"
  },
  {
    id: 2,
    image: "https://image2url.com/images/1761639029143-0d56ac0d-4c29-4284-8077-a9faac0925eb.png",
    testimonial: "Red Host exceeded our expectations by completing websites for Spark EdX and Spark Phonics on time. Their work quality and results truly impressed us.",
    author: "G. Krishna, Founder, Spark EdX"
  },
  {
    id: 3,
    image: "https://image2url.com/images/1761639755961-8c941dc6-defe-49f0-8657-83315e9d4df7.jpeg",
    testimonial: "Red Host brought our Panda Poori e-commerce vision to life with eye-catching animations and sleek design - on time and budget-friendly!",
    author: "Akhil Verma, Founder, Panda Poori"
  }
];

function ShuffleCards() {
  const [positions, setPositions] = useState<("front"|"middle"|"back")[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <section className="pt-0 pb-12 md:pb-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 font-orbitron">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Real feedback from our valued customers
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative h-[370px] w-[90vw] max-w-[350px] sm:h-[450px] sm:w-[350px] md:-ml-[175px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                image={testimonial.image}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 md:mt-12 flex justify-center">
          <a href="/quotation" className="w-[90vw] max-w-xs sm:w-[55%] min-w-[180px]">
            <Button 
              variant="neon" 
              size="lg" 
              className="neon-equal w-full group animate-neon-pulse px-2 sm:px-6 py-2 sm:py-4 text-sm sm:text-lg font-orbitron font-normal shadow-neon hover:scale-105 transition-transform text-center whitespace-nowrap"
            >
              <span className="inline-block align-middle">Get Your Free Quote Now</span>
              <ArrowRight className="ml-2 sm:ml-3 h-5 sm:h-6 w-5 sm:w-6 group-hover:translate-x-1 transition-transform align-middle" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export { ShuffleCards };
