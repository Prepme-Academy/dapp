import {
  HeroSection,
  ExamSection,
  InfoSection,
  FeatureSection,
  TestimonialSection,
  FAQSection,
  CTASection,
  Footer,
} from "@/components/landing-page/sections";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ExamSection />
      <InfoSection />
      <FeatureSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
