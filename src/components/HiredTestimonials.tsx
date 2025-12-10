import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        id: 1,
        image: "https://tse4.mm.bing.net/th/id/OIP.-kDJTdPxEpMdroE-GghZwAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        content: "RedHost's portfolio builder helped me showcase my skills with a design that stood out. Interviewers at Deloitte were genuinely impressed by the professional presentation.",
        name: "Aditya Sharma",
        role: "Deloitte (12 LPA)"
    },
    {
        id: 2,
        image: "", // Fallback to initials
        content: "The personal branding features are incredible. RedHost helped me present my experience professionally, landing me a prestigious role at McKinsey & Company.",
        name: "Gayatri Cheedella",
        role: "McKinsey & Company (27 LPA)"
    },
    {
        id: 3,
        image: "https://yt3.googleusercontent.com/ytc/AGIKgqMDsZVIFH9OMFRU8UglpFuEUwp7r8051grg8G82Bw=s900-c-k-c0x00ffffff-no-rj",
        content: "Investing in professional personal branding was the best decision. Zomato recruiters specifically mentioned my portfolio quality during the hiring process.",
        name: "Mahesh Shetty",
        role: "Zomato (8 LPA)"
    }
];

export const HiredTestimonials = () => {
    return (
        <div className="relative w-full overflow-hidden group">
            {/* Left/Right Fade Masks to smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <div className="flex gap-8 w-full group-hover:[animation-play-state:paused]">
                {/* First Marquee Set */}
                <div className="flex shrink-0 animate-marquee gap-8 min-w-full items-stretch">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`a-${index}`} testimonial={testimonial} />
                    ))}
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`a-dup-${index}`} testimonial={testimonial} />
                    ))}
                </div>

                {/* Second Marquee Set (for seamless loop) */}
                <div className="flex shrink-0 animate-marquee gap-8 min-w-full items-stretch" aria-hidden="true">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`b-${index}`} testimonial={testimonial} />
                    ))}
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`b-dup-${index}`} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="w-[350px] md:w-[450px] shrink-0 whitespace-normal h-full">
        <Card
            className="bg-muted/10 border-white/5 backdrop-blur-sm hover:bg-muted/20 transition-all duration-300 group/card relative overflow-hidden h-full flex flex-col"
        >
            {/* Decorative Quote Icon Background */}
            <div className="absolute top-4 right-4 text-primary/10 transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-12">
                <Quote size={80} strokeWidth={1} />
            </div>

            <CardContent className="p-8 flex flex-col h-full relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="flex-grow mb-8">
                    <p className="text-xl leading-relaxed text-muted-foreground font-rajdhani italic relative">
                        <span className="text-primary text-4xl leading-none absolute -left-2 -top-2 opacity-50">"</span>
                        {testimonial.content}
                        <span className="text-primary text-4xl leading-none absolute -bottom-4 opacity-50">"</span>
                    </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" />
                        <Avatar className="h-14 w-14 border-2 border-primary/20 relative z-10">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                            <AvatarFallback className="bg-primary/20 text-primary font-bold">
                                {testimonial.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                    </div>

                    <div>
                        <h4 className="font-orbitron font-bold text-lg text-foreground group-hover/card:text-primary transition-colors">
                            {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground font-rajdhani font-bold text-primary/80">
                            {testimonial.role}
                        </p>
                    </div>
                </div>
            </CardContent>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-center" />
        </Card>
    </div>
);
