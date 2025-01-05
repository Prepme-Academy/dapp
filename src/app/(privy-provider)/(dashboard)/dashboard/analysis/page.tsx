import { CurrentAnalysis } from "@/components/dashboard/analysis";
import { ExplorePastQuestions } from "@/components/dashboard/practice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analysis",
};

export default function AnalysisPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-medium text-muted-500">Analysis</h1>
      <CurrentAnalysis />
      <ExplorePastQuestions />
    </section>
  );
}
