"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      data-label="hero"
      aria-label="hero"
      className="text-white relative overflow-hidden"
    >
      <div className="pt-[1.75rem] lg:pt-[2.765625rem] pb-[11.5625rem] lg:pb-[19.3375rem] isolate relative bg-[#1877f2] px-[0.8125rem]">
        <Image
          src="/icons/logo-white.svg"
          alt="Prepme Logo"
          width={158}
          height={39.5}
          data-label="prepme-logo"
          aria-label="prepme-logo"
          className="hidden md:block mb-[1.203125rem] mx-auto"
          priority
        />
        <Image
          src="/icons/logo-white.svg"
          alt="Prepme Logo"
          width={98}
          height={25}
          data-label="prepme-logo"
          aria-label="prepme-logo"
          className="md:hidden block mb-[1.1875rem] mx-auto"
          priority
        />
        <span className="hidden md:flex items-center justify-center absolute -z-10 -top-16 left-[4.3rem] w-full h-full">
          <Image
            src="/background/svg/pattern.svg"
            alt="Pattern"
            width={1115}
            height={448}
            className="object-contain max-w-full"
          />
        </span>
        <span className="md:hidden flex items-center justify-center absolute -z-10 left-0 top-10 w-full h-full">
          <Image
            src="/background/svg/pattern-mobile.svg"
            alt="Pattern"
            width={306.63}
            height={504.87}
            className="object-cover max-w-full"
          />
        </span>
        <div className="pt-[7.5rem] lg:pt-[5.5625rem] text-center relative isolate">
          <h1 className="text-[2.75rem] leading-[3.3275rem] mb-[0.875rem] md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold font-fredoka">
            The Fun way to conquer <br className="hidden sm:block" /> Exams with
            Confidence
          </h1>
          <p className="text-base lg:text-xl mb-[2.1875rem]">
            Turn Practice into Progress, Progress into Rewards
          </p>
          <Button
            variant="secondary"
            className="!py-3 h-auto px-5 text-sm lg:text-base !max-w-[15.125rem] block w-full mx-auto white-gradient-border shadow-buttonshadow"
            onClick={() => router.push("/login")}
          >
            Get Started
          </Button>
          <div className="flex items-center mt-[2.1875rem] lg:mt-3 text-[0.625rem] lg:text-xs mx-auto w-fit space-x-2">
            <span>Powered by</span>
            <Image
              src="/icons/logo-oc.svg"
              width={36.86}
              height={35.6}
              alt="Open Campus Logo"
              // placeholder="blur"
            />
            <span className="font-bold text-[0.948125rem] lg:text-[1.29375rem]">
              Open Campus
            </span>
          </div>
        </div>
        <Image
          src="/background/svg/paper-cut.svg"
          alt="Paper cut"
          width={1535}
          height={65.92}
          className="absolute -bottom-16 left-0 w-full object-cover h-[4.12rem]"
        />
      </div>
      <Image
        className="px-[0.8125rem] sm:mx-auto object-contain max-w-full relative z-50 -mt-[6rem] md:-mt-[8rem] lg:-mt-[12rem]"
        src="/background/prepme.png"
        alt="hero image"
        width={1255}
        height={720}
      />
    </section>
  );
}
