import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        id: 1,
        image: "https://image2url.com/images/1761637344268-4fdf98f0-c92a-41f4-9e47-1eb841c53bda.jpg",
        content: "Developed a fully functional website tailored to our needs in just 3 days.",
        name: "Dr. P. Kamalakar",
        role: "Guna Ayurveda"
    },
    {
        id: 2,
        image: "https://image2url.com/images/1761639029143-0d56ac0d-4c29-4284-8077-a9faac0925eb.png",
        content: "Exceeded expectations on quality and timing. Truly impressive results.",
        name: "G. Krishna",
        role: "Spark EdX"
    },
    {
        id: 3,
        image: "https://image2url.com/images/1761639755961-8c941dc6-defe-49f0-8657-83315e9d4df7.jpeg",
        content: "Brought our e-commerce vision to life with sleek design and perfect execution.",
        name: "Akhil Verma",
        role: "Panda Poori"
    }
];

export const Testimonials = () => {
    return (
        <div className="relative w-full overflow-hidden group">
            {/* Left/Right Fade Masks - Softer */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <div className="flex gap-6 w-full group-hover:[animation-play-state:paused]">
                {/* First Marquee Set */}
                <div className="flex shrink-0 animate-marquee gap-6 min-w-full items-stretch">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`a-${index}`} testimonial={testimonial} />
                    ))}
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`a-dup-${index}`} testimonial={testimonial} />
                    ))}
                </div>

                {/* Second Marquee Set */}
                <div className="flex shrink-0 animate-marquee gap-6 min-w-full items-stretch" aria-hidden="true">
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
    <div className="w-[320px] md:w-[380px] shrink-0 whitespace-normal h-full">
        <Card
            className="bg-white/5 border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group/card relative overflow-hidden h-full flex flex-col rounded-2xl"
        >
            <div className="absolute top-6 right-6 text-white/5 group-hover/card:text-white/10 transition-colors">
                <Quote size={40} className="fill-current" />
            </div>

            <CardContent className="p-8 flex flex-col h-full relative z-10">
                {/* Stars - Blue/Cyan */}
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-blue-500 text-blue-500" />
                    ))}
                </div>

                {/* Content - Short & Clean */}
                <blockquote className="flex-grow mb-6">
                    <p className="text-lg leading-relaxed text-muted-foreground/90 font-sans">
                        "{testimonial.content}"
                    </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    <Avatar className="h-10 w-10 border border-white/10">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                        <AvatarFallback className="bg-blue-900/50 text-blue-200 text-xs">
                            {testimonial.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                        <h4 className="font-bold text-base text-white/90 font-sans">
                            {testimonial.name}
                        </h4>
                        <p className="text-xs text-muted-foreground/60 font-sans">
                            {testimonial.role}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);
