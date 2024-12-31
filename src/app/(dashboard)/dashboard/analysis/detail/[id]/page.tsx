"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  AnalysisHeader,
  AnalysisSidebar,
  ExamAnalysisTab,
  ExamScoreCardTab,
} from "../misc/components";
import { Suspense } from "react";

export default function AnalysisInfoPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "exam-scorecard";

  const pageContent =
    currentTab === "exam-scorecard" ? (
      <ExamScoreCardTab id={params.id} />
    ) : (
      <ExamAnalysisTab />
    );

  return (
    <section className="space-y-3 w-full">
      <Button
        variant={"unstyled"}
        className="flex items-center justify-start gap-2 text-base font-normal text-[#334058]"
        onClick={() => router.back()}
      >
        <MoveLeft />
        <span> Back</span>
      </Button>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[320px_1fr] xxl:grid-cols-[420px_1fr] gap-4 items-start justify-start">
        <AnalysisSidebar id={params.id} />
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <AnalysisHeader id={params.id} currentTab={currentTab} />
          <Suspense key={currentTab} fallback={"loading..."}>
            {pageContent}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
