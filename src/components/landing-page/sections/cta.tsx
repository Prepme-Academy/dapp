"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();
  return (
    <section
      data-label="get-started"
      aria-label="get-started"
      className="px-4 py-10 md:px-10 lg:h-[476px] bg-neutral-50"
    >
      <div
        style={{
          background: "url('/background/svg/cta.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="rounded-t-2xl w-full h-full flex flex-col items-center justify-center space-y-5 text-center text-white px-2 py-10 lg:py-0"
      >
        <h1 className="text-3xl md:text-4xl font-semibold">Ready to Excel?</h1>
        <p className="max-w-xl">
          Prepme is your all-in-one tool for smarter, faster, and more engaging
          exam prep. Whether you&apos;re brushing up on math or tackling past
          questions, Prepme is here to guide you every step of the way.
        </p>
        <Button
          variant="secondary"
          className="white-gradient-border shadow-buttonshadow"
          onClick={() => router.push("/login")}
        >
          Start practicing for free
        </Button>
      </div>
    </section>
  );
}
