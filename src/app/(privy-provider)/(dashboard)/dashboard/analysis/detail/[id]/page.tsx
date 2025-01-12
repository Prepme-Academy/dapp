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
import { usePrivy } from "@privy-io/react-auth";
import { useExamAnalysis } from "@/lib/actions/exam.action";

export default function AnalysisInfoPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "exam-scorecard";

  const { user } = usePrivy();
  const authUserId = user?.id;

  const {
    data: analysisData,
    isLoading,
    isError,
    error
  } = useExamAnalysis(Number(params.id), authUserId || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading exam analysis data. {error.message}</div>;
  }

  const { currentPage, pageSize, totalCount } = analysisData.data;

  const pageContent =
    currentTab === "exam-scorecard" ? (
      <ExamScoreCardTab id={params.id} analysisData={analysisData.data} />
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
          <AnalysisHeader
            id={params.id}
            currentTab={currentTab}
            currentPage={currentPage}
            pageSize={pageSize}
            totalCount={totalCount}
          />
          <Suspense key={currentTab} fallback={"loading..."}>
            {pageContent}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
