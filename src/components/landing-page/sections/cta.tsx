"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      data-label="get-started"
      aria-label="get-started"
      className="md:pt-[1.8125rem] pb-[5rem] lg:pt-[6.75rem] lg:pb-[8rem] px-4"
    >
      <div className="rounded-t-2xl w-full relative max-w-[77.5rem] lg:px-[5rem] lg:pt-[4rem] lg:pb-[2.5rem] bg-royal-blue mx-auto text-center text-white px-2 py-10">
        <h1 className="text-[2rem] leading-[2.42rem] lg:text-[3rem] lg:leading-[3.63rem] font-semibold mb-3">
          Ready to Excel?
        </h1>
        <p className="max-w-[38.4375rem] mx-auto text-base mb-[2.5rem]">
          Prepme is your all-in-one tool for smarter, faster, and more engaging
          exam prep. Whether you&apos;re brushing up on math or tackling past
          questions, Prepme is here to guide you every step of the way.
        </p>
        <Button
          variant="secondary"
          className="white-gradient-border shadow-buttonshadow"
          asChild
        >
          <Link href="/login"> Start practicing for free</Link>
        </Button>
        <Image
          src="/background/svg/paper-cut-2.svg"
          alt="Paper cut"
          width={1240}
          height={66}
          className="absolute -bottom-10 md:-bottom-14 left-0 w-full max-w-full object-cover h-[4.12rem]"
        />
      </div>
    </section>
  );
}
