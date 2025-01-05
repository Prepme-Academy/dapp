"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import five from "../assets/slides/five.jpg";
import four from "../assets/slides/four.jpg";
import one from "../assets/slides/one.jpg";
import six from "../assets/slides/six.jpg";
import three from "../assets/slides/three.jpg";
import two from "../assets/slides/two.jpg";

const slides = [one, two, three, four, five, six];

function Slides({
  hidden = true,
  keyLabel,
}: {
  hidden: boolean;
  keyLabel: string;
}) {
  return (
    <ul
      className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden={hidden}
    >
      {slides.map((slide, index) => (
        <li key={`${keyLabel}-${index}`}>
          <Image
            src={slide}
            alt="Carousel Slide"
            width={141}
            height={59}
            className="object-contain hidden md:block"
          />
          <Image
            src={slide}
            alt="Carousel Slide"
            width={106.69}
            height={48}
            className="object-contain md:hidden"
          />
        </li>
      ))}
    </ul>
  );
}

export default function ExamSection() {
  return (
    <section
      data-label="logo-quilt"
      aria-label="exams-quilt"
      className="w-full mt-[6.25rem] mb-[4.5625rem]"
    >
      <h1
        className={cn(
          "text-[1.625rem] leading-[1.815rem] mb-3 lg:mb-[2.25rem] font-semibold text-center text-shark lg:text-[2.5rem] lg:leading-[3.025rem] font-fredoka"
        )}
      >
        Browse through our exams
      </h1>
      <div className="w-full inline-flex flex-nowrap overflow-hidden py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <Slides hidden={false} keyLabel="w" />
        <Slides hidden={true} keyLabel="x" />
        <Slides hidden={true} keyLabel="y" />
        <Slides hidden={true} keyLabel="z" />
      </div>
    </section>
  );
}
