import {
  ExploreExamType,
  ExplorePastQuestions,
  StartPracticeSearch,
} from "@/components/dashboard/practice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice",
};

type SearchParams = Promise<{
  exam_type: string | undefined;
  search: string | undefined;
  subject: string | undefined;
  year: string | undefined;
}>;

export default async function PracticePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedSearchParams = await searchParams;
  const { exam_type, search, subject, year } = resolvedSearchParams;

  const params = {
    exam_type,
    search,
    subject,
    year,
  };
  console.log("🚀 ~ PracticePage ~ params:", params);

  return (
    <section className="space-y-4">
      <StartPracticeSearch />
      <ExploreExamType />
      <ExplorePastQuestions />
    </section>
  );
}
