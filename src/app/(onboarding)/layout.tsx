import { OnboardingProgress } from "@/components/onboarding";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "Prepme | Onboarding - %s",
    default: "Prepme | Onboarding",
  },
  description: "The Fun way to conquer Exams with Confidence",
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-authbg bg-no-repeat lg:h-dvh lg:overflow-hidden flex flex-col px-4 md:px-0">
      <nav className="w-full py-6 md:px-10 lg:px-20 md:py-10 flex items-center justify-between">
        <Link href="/" data-label="prepme-logo" aria-label="prepme-logo">
          <Image
            src="/icons/logo-blue.svg"
            alt="Prepme Logo"
            width={144}
            height={144}
            className="w-28 sm:w-36"
          />
        </Link>
      </nav>
      <OnboardingProgress />

      <section className="w-full flex items-center justify-center bg-white border border-muted-300 shadow-authcardshadow rounded-2xl p-4 max-w-[404px] mx-auto">
        {children}
      </section>
    </main>
  );
}
