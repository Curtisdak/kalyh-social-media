"use client";

import React, { useEffect, useRef, useState } from "react";
import { Ellipsis } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SponsorElements from "./SponsorElements";

const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {

  const slides = [
    ,
    <SponsorElements />,
    <SponsorElements />,
    <SponsorElements />,
    <SponsorElements />,
    <SponsorElements />,
  ];

  return (
    <div className="bg-background  p-4 rounded-md shadow-md flex flex-col text-sm text-muted-foreground">
      <div className="mb-4 flex justify-between items-center text-muted-foreground">
        Sponsor Ads <Ellipsis />{" "}
      </div>
      <div className="flex flex-col gap-4  mb-3"></div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              {slide}
              <p className=" w-full mx-[45%] mt-1">
                {index} / {slides.length - 1}{" "}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-[30%] opacity-70" />
        <CarouselNext className="absolute right-0  top-[30%] opacity-70" />
      </Carousel>

      <div className="flex gap-2 w-full justify-center">
      </div>
    </div>
  );
};

export default Ads;
