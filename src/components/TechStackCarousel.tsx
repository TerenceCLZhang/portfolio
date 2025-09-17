"use client";

import Image from "next/image";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  { name: "Git", path: "git.svg" },
  { name: "GitHub", path: "github.svg" },
  { name: "Figma", path: "figma.svg" },
];

const TechStackCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      className="w-[90%] mx-auto flex items-center space-x-5"
    >
      <Button
        onClick={() => api?.scrollPrev()}
        className="bg-transparent text-gray-300 hover:text-white hover:bg-transparent hover:scale-200"
      >
        <ChevronLeft />
      </Button>
      <CarouselContent>
        {tech.map((item, index) => (
          <CarouselItem className="md:basis-1/3 lg:basis-1/4" key={index}>
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
      <Button
        onClick={() => api?.scrollNext()}
        className="bg-transparent text-gray-300 hover:text-white hover:bg-transparent hover:scale-200"
      >
        <ChevronRight />
      </Button>
    </Carousel>
  );
};

export default TechStackCarousel;
