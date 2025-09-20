"use client";

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
import interests from "../data/interests.json";

const InterestsCarousel = () => {
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
      className="w-full mx-auto flex items-center space-x-5"
    >
      <Button
        onClick={() => api?.scrollPrev()}
        className="bg-transparent hover:text-white hover:bg-transparent hover:scale-200"
        aria-label="Previous"
      >
        <ChevronLeft />
      </Button>
      <CarouselContent>
        {interests.map((item, index) => (
          <CarouselItem className="lg:basis-1/2 2xl:basis-1/3" key={index}>
            <div className="flex space-x-3 items-center justify-center border-3 border-gray-400 rounded-xl py-2 px-5 h-20 bg-gray-700">
              <span className="text-lg font-semibold text-white text-center">
                {item}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Button
        onClick={() => api?.scrollNext()}
        className="bg-transparent hover:text-white hover:bg-transparent hover:scale-200"
        aria-label="Next"
      >
        <ChevronRight />
      </Button>
    </Carousel>
  );
};

export default InterestsCarousel;
