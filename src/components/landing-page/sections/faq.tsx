import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Sign up easily with your crypto wallet or social media accounts. Choose your exam type, set your goals, and start practicing immediately.",
  },
  {
    question: "What rewards can I earn?",
    answer:
      "Earn blockchain-verified XP points, unlock achievement badges, collect exclusive NFTs on EDUCHAIN, and compete for top spots on our tamper-proof leaderboard. Every effort counts towards your verified rewards.",
  },
  {
    question: "Is PrepMe free?",
    answer:
      "Yes! PrepMe is completely free to use. Start practicing and earning blockchain-verified rewards today.",
  },
  {
    question: "What exams does PrepMe support?",
    answer:
      "We support major exams including SAT, GRE, JAMB, WAEC, IGCSE, and TOEFL. Our question bank is regularly updated to match the latest exam patterns.",
  },
  {
    question: "How are my rewards stored and verified?",
    answer:
      "PrepMe is built on EDUCHAIN and powered by Open Campus, ensuring your achievements and rewards are securely stored on the blockchain. This means your badges, NFTs, and achievements are truly yours and can be verified anywhere.",
  },
  {
    question: "What makes PrepMe different?",
    answer:
      "We combine serious exam preparation with blockchain-powered rewards: Comprehensive exam-specific content Blockchain-verified performance tracking True ownership of rewards through EDUCHAIN Active community of learners Personalized study recommendations",
  },
  {
    question: "How does the rewards system work?",
    answer:
      "Complete daily quests, maintain practice streaks, and achieve milestones to earn blockchain-verified points and rewards. Your achievements are securely stored on EDUCHAIN, making them truly yours to keep and showcase.",
  },
];

export default function FAQSection() {
  return (
    <section
      data-label="frequently-asked-questions"
      aria-label="frequently-asked-questions"
      className="w-full lg:pt-[4.25rem] lg:pb-[4.25rem] pt-[3rem] md:pt-[5rem] pb-[5rem] px-4"
    >
      <h1 className="text-[2rem] leading-[2.42rem] lg:text-[3rem] lg:leading-[3.63rem] mb-[3.25rem] lg:mb-[3.1875rem] font-semibold text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-[43.0625rem] mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`question-${index + 1}`}
              className="border border-mercury p-6 text-shark rounded-lg"
            >
              <AccordionTrigger className="font-medium mb-1 text-base !no-underline text-start">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
