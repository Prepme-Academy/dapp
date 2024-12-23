import {
  ExploreExamType,
  ExplorePastQuestions,
  StartPracticeSearch,
} from "@/components/dashboard/practice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice",
};

export default function PracticePage() {
  return (
    <section className="space-y-4">
      <StartPracticeSearch />
      <ExploreExamType />
      <ExplorePastQuestions />
    </section>
  );
}
