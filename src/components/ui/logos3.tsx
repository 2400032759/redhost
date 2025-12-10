"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
    id: string;
    description: string;
    image: string;
    className?: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    heading = "Trusted by these companies",
    logos = [
        {
            id: "logo-1",
            description: "Logo 1",
            image: "https://image2url.com/images/1765211788021-95f79183-faf0-4d87-9018-10d6529fd191.jpg",
            className: "h-12 w-auto",
        },
        {
            id: "logo-2",
            description: "Logo 2",
            image: "https://image2url.com/images/1765211905763-7d556487-c934-41a3-a46b-3a4b15fc5068.jpg",
            className: "h-12 w-auto",
        },

        {
            id: "logo-4",
            description: "Logo 4",
            image: "https://image2url.com/images/1765212129732-2f2989c5-6357-4daa-afa9-b51a15d02909.png",
            className: "h-12 w-auto",
        },
        {
            id: "logo-5",
            description: "Logo 5",
            image: "https://image2url.com/images/1765212232073-ddb30f0c-483c-47f6-92ff-030c97da8f38.png",
            className: "h-12 w-auto",
        },
        {
            id: "logo-6",
            description: "Logo 6",
            image: "https://image2url.com/images/1765212318903-7dc5950d-45ee-488b-b2bd-0566bd3370ac.png",
            className: "h-12 w-auto",
        },
        {
            id: "logo-7",
            description: "Logo 7",
            image: "https://image2url.com/images/1765211983276-021e32af-7cd8-4f8f-a3a1-ed5b1a30828c.jpg",
            className: "h-12 w-auto",
        },

    ],
}: Logos3Props) => {
    return (
        <section className="pt-0 pb-8">
            <div className="container flex flex-col items-center text-center">
                <h1 className="mt-2 mb-1 text-2xl font-bold text-pretty lg:text-4xl text-foreground font-orbitron">
                    {heading}
                </h1>
            </div>
            <div className="pt-3 md:pt-4 lg:pt-6">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[AutoScroll({ playOnInit: true })]}
                    >
                        <CarouselContent className="ml-0">
                            {logos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                                >
                                    <div className="mx-14 flex shrink-0 items-center justify-center">
                                        <div>
                                            <img
                                                src={logo.image}
                                                alt={logo.description}
                                                className={`${logo.className} grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export { Logos3 };
