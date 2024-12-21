"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import userOne from "../assets/testimonials/one.png";
import Image from "next/image";

const testimonials = [
  {
    testimonial:
      "I've written JAMB twice, but after practicing on PrepMe, I was able to pass my JAMB exam and got into the uni and course of my choice. Never dreamt studying could be this fun and rewarding!",
    user: "~ Brad - JAMB Student",
    image: userOne,
  },
];

export default function TestimonialSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      data-label="testimonials"
      arai-label="testimonials"
      className={cn("px-3 sm:p-10 py-10 space-y-10")}
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        What Our Students Say
      </h1>

      <div className="mx-auto max-w-full sm:max-w-[85%] max-h-[610px]">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="mx-auto">
            {testimonials.map((detail, index) => (
              <CarouselItem
                key={index}
                className="w-full border p-5 flex flex-col-reverse md:flex-row justify-between rounded-2xl"
              >
                <div className="flex flex-col h-full justify-between space-y-5 text-black/80">
                  <blockquote className="max-w-lg text-xl">
                    &ldquo;{detail.testimonial}&ldquo;
                  </blockquote>
                  <span>{detail.user}</span>
                </div>

                <aside className="mb-5 md:mb-0">
                  <Image
                    src={detail.image}
                    alt={`${detail.user} image`}
                    width={200}
                    height={280}
                    priority
                    className="w-full !h-auto lg:!h-[282px]"
                  />
                </aside>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            {current !== 1 && <CarouselPrevious />}
            <CarouselNext />
          </div>
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </section>
  );
}
