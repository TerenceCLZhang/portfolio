"use client";

import Image from "next/image";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const tech = [
  { name: "HTML", path: "html-5.svg" },
  { name: "CSS", path: "css-3.svg" },
  { name: "JavaScript", path: "javascript.svg" },
  { name: "TypeScript", path: "typescript.svg" },
  { name: "React", path: "react.svg" },
  { name: "Next.js", path: "nextjs.svg" },
  { name: "Tailwind CSS", path: "tailwindcss.svg" },
  { name: "Python", path: "python.svg" },
  { name: "Java", path: "java.svg" },
  { name: "Visual Studio Code", path: "visual-studio.svg" },
  { name: "Postman", path: "postman.svg" },
  { name: "Git", path: "git.svg" },
  { name: "GitHub", path: "github.svg" },
  { name: "Figma", path: "figma.svg" },
];

const TechStackCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-[90%] mx-auto"
      >
        <CarouselContent>
          {tech.map((item, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
              <div className="flex space-x-5 items-center justify-center border-3 border-gray-400 rounded-xl py-2 px-5 h-20 bg-gray-700">
                <Image
                  src={`/icons/${item.path}`}
                  alt={`${item.name} logo`}
                  width={35}
                  height={35}
                />
                <span className="text-lg font-semibold">{item.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent border-none" />
        <CarouselNext className="bg-transparent border-none" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </>
  );
};

export default TechStackCarousel;
