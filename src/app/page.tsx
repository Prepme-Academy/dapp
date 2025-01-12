import {
  CTASection,
  ExamSection,
  FAQSection,
  FeatureSection,
  Footer,
  HeroSection,
  InfoSection,
  TestimonialSection,
} from "@/components/landing-page/sections";

export default function Home() {
  return (
    <main>
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
