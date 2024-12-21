"use client";

import one from "../assets/slides/one.jpg";
import two from "../assets/slides/two.jpg";
import three from "../assets/slides/three.jpg";
import four from "../assets/slides/four.jpg";
import five from "../assets/slides/five.jpg";
import six from "../assets/slides/six.jpg";
import { useHeroHeightStore } from "../store/hero";
import { cn } from "@/lib/utils";
import Image from "next/image";

const slides = [one, two, three, four, five, six];

export default function ExamSection() {
  const { height } = useHeroHeightStore();

  console.log(height);

  return (
    <section
      data-label="logo-quilt"
      aria-label="exams-quilt"
      className="w-full space-y-5"
      style={{
        marginTop: `${Number(height / 1.5) + 50}px`,
      }}
    >
      <h1 className={cn("text-2xl sm:text-3xl font-semibold text-center font-fredoka")}>
        Browse through our exams
      </h1>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <Slides hidden={false} />
        <Slides hidden={true} />
        <Slides hidden={false} />
        <Slides hidden={true} />
      </div>
    </section>
  );
}

function Slides({ hidden = true }: { hidden: boolean }) {
  return (
    <ul
      className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden={hidden}
    >
      {slides.map((slide, index) => (
        <li key={index}>
          <Image
            src={slide}
            alt="Carousel Slide"
            key={index}
            className="w-16 md:w-24 object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
