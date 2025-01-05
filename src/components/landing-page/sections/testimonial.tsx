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
import Image from "next/image";
import { useEffect, useState } from "react";
import userOne from "../assets/testimonials/one.png";

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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      data-label="testimonials"
      arai-label="testimonials"
      className={cn(
        "px-4 pt-[5rem] lg:pt-[6.9375rem] pb-[5.015rem] lg:pb-[9.125rem]"
      )}
    >
      <h1 className="text-[2rem] leading-[2.42rem] lg:text-[3rem] lg:leading-[3.63rem] mb-[3.375rem] lg:mb-[5.4375rem] font-semibold text-center">
        What Our Students Say
      </h1>

      <div className="mx-auto max-w-[68.125rem] max-h-[610px]">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="mx-auto">
            {testimonials.map((detail, index) => (
              <CarouselItem
                key={index}
                className="w-full border border-mercury px-6 pt-[1.625rem] pb-[1.625rem] lg:pt-[0.8125rem] lg:pl-[2.5rem] lg:pr-[2rem] lg:pb-[1.625rem] flex flex-col-reverse md:flex-row justify-between rounded-3xl"
              >
                <div className="flex flex-col h-full lg:pt-5 justify-between space-y-5 text-black/80">
                  <blockquote className="max-w-[38.0625rem] text-xl lg:text-[1.5rem] lg:leading-[2.5rem]">
                    &ldquo;{detail.testimonial}&ldquo;
                  </blockquote>
                  <span className="inline-block text-base lg:text-[1.25rem]">
                    {detail.user}
                  </span>
                </div>

                <aside className="mb-8 md:mb-0 w-[20.25rem] mx-auto lg:mx-0 max-w-full">
                  <Image
                    src={detail.image}
                    alt={`${detail.user} image`}
                    width={200}
                    height={280}
                    priority
                    className="w-full !h-auto"
                  />
                </aside>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="block">
            {current !== 1 && <CarouselPrevious />}
            <CarouselNext />
          </div>
        </Carousel>
        {/* Slide {current} */}
        <div className="w-fit md:ml-auto md:mr-0 mx-auto flex items-center mt-[1.6875rem] space-x-1">
          {Array(testimonials.length)
            .fill(0)
            .map((_, index) => (
              <span
                key={index}
                className={cn(
                  "transition-all duration-200 h-2 rounded-[1.25rem]",
                  index + 1 === current
                    ? "bg-azure w-[3.3125rem] flex items-center justify-center"
                    : "w-[0.875rem] bg-athens inline-block"
                )}
              >
                {index + 1 === current ? (
                  <span className="inline-block bg-corn-flower-blue rounded-[0.833125rem] w-[2.875rem] h-0.5" />
                ) : null}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
