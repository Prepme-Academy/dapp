/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";
import { useHeroHeightStore } from "../store/hero";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const { setHeight } = useHeroHeightStore();
  const heroImageRef = useRef<HTMLElement | null>(null);
  const router = useRouter();

  function updateHeight() {
    if (heroImageRef.current) {
      setHeight(heroImageRef.current.getBoundingClientRect().height);
    }
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(updateHeight);
    const currentHeroImageRef = heroImageRef.current;

    if (currentHeroImageRef) {
      resizeObserver.observe(currentHeroImageRef);
    }

    return () => {
      if (currentHeroImageRef) {
        resizeObserver.unobserve(currentHeroImageRef);
      }
    };
  }, []);

  return (
    <section
      data-label="hero"
      aria-label="hero"
      className="md:min-h-dvh relative w-full text-white flex flex-col items-center px-5 py-5 lg:px-10 pb-40 lg:pb-72 space-y-20 md:space-y-[7rem] bg-[#1877f2] lg:bg-herobg lg:bg-no-repeat lg:bg-center"
    >
      <div data-label="prepme-logo" aria-label="prepme-logo">
        <Image
          src="/icons/logo-white.svg"
          alt="Prepme Logo"
          width={144}
          height={144}
          className="w-28 sm:w-36"
        />
      </div>
      <div className="flex flex-col items-center text-center space-y-5">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold font-fredoka">
          The Fun way to conquer <br className="hidden sm:block" /> Exams with
          Confidence
        </h1>
        <p className="text-lg">
          Turn Practice into Progress, Progress into Rewards
        </p>
        <Button
          variant="secondary"
          className="w-[240px] white-gradient-border shadow-buttonshadow"
          onClick={() => router.push("/login")}
        >
          Get Started
        </Button>
        <div className="flex items-center space-x-1">
          <span>Powered by</span>
          <Image
            src="/icons/logo-oc.svg"
            width={20}
            height={20}
            alt="Open Campus Logo"
          />
          <span className="font-medium text-lg">Open Campus</span>
        </div>
      </div>
      <aside
        className="absolute -bottom-[30%]  lg:-bottom-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[80%] mx-auto"
        ref={heroImageRef}
      >
        <Image
          className="w-full h-full max-w-[1225px] object-contain"
          src="/background/svg/heroImage.svg"
          alt="hero image"
          width={1255}
          height={720}
        />
      </aside>
    </section>
  );
}
