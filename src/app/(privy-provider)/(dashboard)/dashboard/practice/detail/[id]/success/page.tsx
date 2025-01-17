"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useExamAnalysis } from "@/lib/actions/exam.action";
import useExamStore from "@/store/examStore";
import { formatAxiosErrorMessage } from "@/utils/errors";
import { usePrivy } from "@privy-io/react-auth";
import { AxiosError } from "axios";
import { X } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const tabData = [
  {
    name: "Success",
    path: "success",
  },
  // {
  //   name: "Quest",
  //   path: "quest",
  // },
  {
    name: "Nft",
    path: "nft",
  },
];

export default function PracticeSuccessPage() {
  const params = useParams();
  const { id } = params;
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || tabData[0].path;

  const renderCardContent = () => {
    switch (currentTab) {
      case "success":
        return <SuccessTab id={id} />;
      case "quest":
        return <QuestTab id={id} />;
      case "nft":
        return <NftTab id={id} />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full h-full flex items-center justify-center bg-[#0E1824F7]">
      {renderCardContent()}
    </section>
  );
}

const SuccessTab = ({ id }: { id: string | string[] | undefined }) => {
  const router = useRouter();
  const { user } = usePrivy();
  const authUserId = user?.id || "";
  const address = user?.wallet?.address || "";
  const { setExamData, addToExamHistory } = useExamStore();

  const {
    data: analysisData,
    isLoading,
    isError,
    error,
  } = useExamAnalysis(Number(id), authUserId, address);

  useEffect(() => {
    if (analysisData?.data) {
      setExamData(analysisData.data);
      addToExamHistory(analysisData.data);
    }
  }, [analysisData, setExamData, addToExamHistory]);

  if (isLoading) {
    return (
      <Card className="w-full max-w-[483px] mx-auto p-4 border-grey-500 flex flex-col items-center justify-center relative animate-pulse">
        <div className="absolute right-3 top-3 w-10 h-10 bg-gray-200 rounded-full" />

        <div className="flex flex-col items-center justify-center gap-2 mt-6 relative">
          {/* Fire icon placeholder */}
          <div className="w-[99px] h-[99px] bg-gray-200 rounded-full" />
          {/* Streak number placeholder */}
          <div className="h-24 w-24 bg-gray-200 rounded-lg mt-2" />
          {/* "day streak" text placeholder */}
          <div className="h-6 w-24 bg-gray-200 rounded mt-2" />
        </div>

        <Card className="w-full p-3 bg-transparent border-[#DFE2E6] mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {Array(2)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  <div className="w-8 h-4 bg-gray-200 rounded" />
                </div>
              ))}
          </div>

          <Card className="w-full mt-3 py-4 px-8 border-grey-500">
            <div className="h-4 w-full bg-gray-200 rounded mb-2" />
            <div className="h-4 w-3/4 bg-gray-200 rounded mx-auto" />
          </Card>
        </Card>
      </Card>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex flex-col items-center justify-center h-full">
        <Card className="w-full max-w-[635px] min-h-28 mx-auto px-3 py-4 border-grey-500 space-y-3 flex flex-col items-start justify-start">
          <p className="text-red-500 text-sm font-normal">
            Error loading exam score data.{" "}
            {formatAxiosErrorMessage(error as AxiosError)}
          </p>
          <Button
            variant={"unstyled"}
            className="bg-primary-400 text-white w-fit px-6 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </Card>
      </div>
    );
  }

  const {
    correct,
    incorrect,
    unanswered,
    noOfQuestions,
    percentage,
    examTest,
    xpEarned,
  } = analysisData.data;

  return (
    <Card className="w-full max-w-[483px] mx-auto p-4 border-grey-500 space-y-6 flex flex-col items-center justify-center relative">
      <Button
        variant={"unstyled"}
        className="absolute right-3 top-3 rounded-full w-10 h-10 bg-[#EFF8FF] flex items-center justify-center "
        onClick={() => router.replace(`/dashboard/practice`)}
      >
        <X className="h-4 w-4" />
      </Button>
      <div className="flex flex-col items-center justify-center gap-3">
        <Image
          src="/icons/dashboard/success.svg"
          alt="info icon"
          width={50}
          height={50}
          priority
        />
        <h6 className="text-xs text-center text-muted-400 select-none flex items-center justify-start gap-1 w-fit rounded-full bg-[#FFF0A6] px-2 py-1">
          {percentage}% Amazing
        </h6>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <h4 className="text-xs font-normal text-muted-400">You scored</h4>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-500 text-center">
            {correct}/{noOfQuestions}
          </h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <h4 className="text-xs font-normal text-muted-400 inline-flex gap-1 uppercase">
            <Image
              src="/icons/dashboard/bolt.svg"
              alt="bolt icon"
              width={16}
              height={16}
              priority
            />
            <span>XP</span>
          </h4>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-500 text-center">
            {xpEarned}
          </h2>
        </div>
      </div>

      <Card className="w-full p-3 bg-grey-200 border-grey-200 space-y-3 flex flex-col items-start justify-start">
        <CardHeader className="px-0 py-0 items-center justify-between flex-row gap-3 space-y-0 w-full">
          <div className="flex items-center justify-start gap-2">
            <Image
              src="/icons/dashboard/scorebreakdown.svg"
              alt="scroe break down icon"
              width={18}
              height={18}
              priority
            />
            <h2 className="text-xs font-normal text-muted-500">
              Score breakdown
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4 w-full">
          <Card className="w-full p-3 min-h-12 border-primary-400 shadow-[0px_1px_0px_0px_#1877f2] space-y-3 flex flex-col items-center justify-center">
            <div className="flex items-center justify-start gap-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.82294 6.14746C1.16044 6.76021 0 8.1488 0 9.76409C0 10.9526 0.628187 12.0186 1.62237 12.743L1.62294 12.7419L1.04278 14.0926C0.942656 14.3257 1.12134 14.589 1.35706 14.5523C2.85528 14.3193 3.70525 13.6262 3.70919 13.623C4.03837 13.6836 4.38034 13.7158 4.73131 13.7158C5.46831 13.7158 6.16581 13.5749 6.78756 13.3237L2.82294 6.14746Z"
                  fill="#FFCF4D"
                />
                <path
                  d="M3.42183 5.96631C3.21608 6.01568 3.01617 6.07659 2.82296 6.14781C2.5698 6.74075 2.43152 7.37921 2.43152 8.04475C2.43152 10.4558 4.24093 12.5136 6.7873 13.3234C7.01208 13.2326 7.22727 13.1278 7.43052 13.0096L3.42183 5.96631Z"
                  fill="#FFB629"
                />
                <path
                  d="M13.7722 11.9557L13.773 11.9572C13.7722 11.9557 14.0542 11.3938 14.0542 11.3938C15.114 10.4285 16 9.28113 16 7.86816C16 7.77453 15.9971 7.68147 15.9915 7.58903C15.8176 4.72297 12.9802 2.44385 9.50555 2.44385C6.03514 2.44385 3.20049 4.71738 3.02017 7.57844C3.01414 7.67438 3.01105 7.771 3.01105 7.86819C3.01105 10.864 6.50014 12.94 9.50552 13.0028C9.9872 13.0128 10.4567 12.9586 10.9085 12.8755C10.9139 12.8798 12.0806 13.8312 14.1372 14.151C14.4608 14.2014 14.5189 13.6941 14.5189 13.6941L13.7722 11.9557Z"
                  fill="#FF5876"
                />
                <path
                  d="M14.519 13.6943C14.4337 13.8127 14.2948 13.886 14.1373 13.8615C12.3342 13.581 11.2151 12.8152 10.963 12.6277C10.9274 12.6012 10.8826 12.5908 10.8389 12.5984C10.4085 12.6735 9.96264 12.7132 9.50558 12.7132C6.03517 12.7132 3.20067 10.4397 3.02036 7.57861C3.0143 7.67458 3.01111 7.77114 3.01111 7.86836C3.01111 10.8641 5.9188 13.2927 9.50558 13.2927C9.98736 13.2927 10.4567 13.2486 10.9086 13.1654C10.914 13.1698 12.0807 14.1211 14.1373 14.441C14.4608 14.4913 14.7061 14.13 14.5687 13.81L14.519 13.6943Z"
                  fill="#E6485D"
                />
                <path
                  d="M13.8382 11.3298C13.7974 11.3603 13.773 11.4079 13.773 11.4588V11.9574C15.1377 10.963 16 9.49981 16 7.86837C16 7.771 15.9968 7.67425 15.9907 7.57812C15.897 9.06691 15.0849 10.3967 13.8382 11.3298Z"
                  fill="#E6485D"
                />
              </svg>

              <span className="text-xs font-normal text-muted-400">
                Questions
              </span>
            </div>
            <h2 className="text-base text-center font-medium text-muted-500">
              {examTest.noOfQuestions}
            </h2>
          </Card>
          <Card className="w-full p-3 min-h-12 border-[#77C93E] shadow-[0px_1px_0px_0px_#77C93E] shadow-successshadow space-y-3 flex flex-col items-center justify-center">
            <div className="flex items-center justify-start gap-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.82294 6.14746C1.16044 6.76021 0 8.1488 0 9.76409C0 10.9526 0.628187 12.0186 1.62237 12.743L1.62294 12.7419L1.04278 14.0926C0.942656 14.3257 1.12134 14.589 1.35706 14.5523C2.85528 14.3193 3.70525 13.6262 3.70919 13.623C4.03837 13.6836 4.38034 13.7158 4.73131 13.7158C5.46831 13.7158 6.16581 13.5749 6.78756 13.3237L2.82294 6.14746Z"
                  fill="#FFCF4D"
                />
                <path
                  d="M3.42183 5.96631C3.21608 6.01568 3.01617 6.07659 2.82296 6.14781C2.5698 6.74075 2.43152 7.37921 2.43152 8.04475C2.43152 10.4558 4.24093 12.5136 6.7873 13.3234C7.01208 13.2326 7.22727 13.1278 7.43052 13.0096L3.42183 5.96631Z"
                  fill="#FFB629"
                />
                <path
                  d="M13.7722 11.9557L13.773 11.9572C13.7722 11.9557 14.0542 11.3938 14.0542 11.3938C15.114 10.4285 16 9.28113 16 7.86816C16 7.77453 15.9971 7.68147 15.9915 7.58903C15.8176 4.72297 12.9802 2.44385 9.50555 2.44385C6.03514 2.44385 3.20049 4.71738 3.02017 7.57844C3.01414 7.67438 3.01105 7.771 3.01105 7.86819C3.01105 10.864 6.50014 12.94 9.50552 13.0028C9.9872 13.0128 10.4567 12.9586 10.9085 12.8755C10.9139 12.8798 12.0806 13.8312 14.1372 14.151C14.4608 14.2014 14.5189 13.6941 14.5189 13.6941L13.7722 11.9557Z"
                  fill="#FF5876"
                />
                <path
                  d="M14.519 13.6943C14.4337 13.8127 14.2948 13.886 14.1373 13.8615C12.3342 13.581 11.2151 12.8152 10.963 12.6277C10.9274 12.6012 10.8826 12.5908 10.8389 12.5984C10.4085 12.6735 9.96264 12.7132 9.50558 12.7132C6.03517 12.7132 3.20067 10.4397 3.02036 7.57861C3.0143 7.67458 3.01111 7.77114 3.01111 7.86836C3.01111 10.8641 5.9188 13.2927 9.50558 13.2927C9.98736 13.2927 10.4567 13.2486 10.9086 13.1654C10.914 13.1698 12.0807 14.1211 14.1373 14.441C14.4608 14.4913 14.7061 14.13 14.5687 13.81L14.519 13.6943Z"
                  fill="#E6485D"
                />
                <path
                  d="M13.8382 11.3298C13.7974 11.3603 13.773 11.4079 13.773 11.4588V11.9574C15.1377 10.963 16 9.49981 16 7.86837C16 7.771 15.9968 7.67425 15.9907 7.57812C15.897 9.06691 15.0849 10.3967 13.8382 11.3298Z"
                  fill="#E6485D"
                />
              </svg>

              <span className="text-xs font-normal text-muted-400">
                Correct
              </span>
            </div>
            <h2 className="text-base text-center font-medium text-muted-500">
              {correct}
            </h2>
          </Card>
          <Card className="w-full p-3 min-h-12 border-[#FE646F] shadow-[0px_1px_0px_0px_#FE646F] space-y-3 flex flex-col items-center justify-center">
            <div className="flex items-center justify-start gap-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.82294 6.14746C1.16044 6.76021 0 8.1488 0 9.76409C0 10.9526 0.628187 12.0186 1.62237 12.743L1.62294 12.7419L1.04278 14.0926C0.942656 14.3257 1.12134 14.589 1.35706 14.5523C2.85528 14.3193 3.70525 13.6262 3.70919 13.623C4.03837 13.6836 4.38034 13.7158 4.73131 13.7158C5.46831 13.7158 6.16581 13.5749 6.78756 13.3237L2.82294 6.14746Z"
                  fill="#FFCF4D"
                />
                <path
                  d="M3.42183 5.96631C3.21608 6.01568 3.01617 6.07659 2.82296 6.14781C2.5698 6.74075 2.43152 7.37921 2.43152 8.04475C2.43152 10.4558 4.24093 12.5136 6.7873 13.3234C7.01208 13.2326 7.22727 13.1278 7.43052 13.0096L3.42183 5.96631Z"
                  fill="#FFB629"
                />
                <path
                  d="M13.7722 11.9557L13.773 11.9572C13.7722 11.9557 14.0542 11.3938 14.0542 11.3938C15.114 10.4285 16 9.28113 16 7.86816C16 7.77453 15.9971 7.68147 15.9915 7.58903C15.8176 4.72297 12.9802 2.44385 9.50555 2.44385C6.03514 2.44385 3.20049 4.71738 3.02017 7.57844C3.01414 7.67438 3.01105 7.771 3.01105 7.86819C3.01105 10.864 6.50014 12.94 9.50552 13.0028C9.9872 13.0128 10.4567 12.9586 10.9085 12.8755C10.9139 12.8798 12.0806 13.8312 14.1372 14.151C14.4608 14.2014 14.5189 13.6941 14.5189 13.6941L13.7722 11.9557Z"
                  fill="#FF5876"
                />
                <path
                  d="M14.519 13.6943C14.4337 13.8127 14.2948 13.886 14.1373 13.8615C12.3342 13.581 11.2151 12.8152 10.963 12.6277C10.9274 12.6012 10.8826 12.5908 10.8389 12.5984C10.4085 12.6735 9.96264 12.7132 9.50558 12.7132C6.03517 12.7132 3.20067 10.4397 3.02036 7.57861C3.0143 7.67458 3.01111 7.77114 3.01111 7.86836C3.01111 10.8641 5.9188 13.2927 9.50558 13.2927C9.98736 13.2927 10.4567 13.2486 10.9086 13.1654C10.914 13.1698 12.0807 14.1211 14.1373 14.441C14.4608 14.4913 14.7061 14.13 14.5687 13.81L14.519 13.6943Z"
                  fill="#E6485D"
                />
                <path
                  d="M13.8382 11.3298C13.7974 11.3603 13.773 11.4079 13.773 11.4588V11.9574C15.1377 10.963 16 9.49981 16 7.86837C16 7.771 15.9968 7.67425 15.9907 7.57812C15.897 9.06691 15.0849 10.3967 13.8382 11.3298Z"
                  fill="#E6485D"
                />
              </svg>

              <span className="text-xs font-normal text-muted-400">
                Incorrect
              </span>
            </div>
            <h2 className="text-base text-center font-medium text-muted-500">
              {incorrect}
            </h2>
          </Card>
          <Card className="w-full p-3 min-h-12 border-[#E6C729] shadow-[0px_1px_0px_0px_#E6C729] space-y-3 flex flex-col items-center justify-center">
            <div className="flex items-center justify-start gap-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.82294 6.14746C1.16044 6.76021 0 8.1488 0 9.76409C0 10.9526 0.628187 12.0186 1.62237 12.743L1.62294 12.7419L1.04278 14.0926C0.942656 14.3257 1.12134 14.589 1.35706 14.5523C2.85528 14.3193 3.70525 13.6262 3.70919 13.623C4.03837 13.6836 4.38034 13.7158 4.73131 13.7158C5.46831 13.7158 6.16581 13.5749 6.78756 13.3237L2.82294 6.14746Z"
                  fill="#FFCF4D"
                />
                <path
                  d="M3.42183 5.96631C3.21608 6.01568 3.01617 6.07659 2.82296 6.14781C2.5698 6.74075 2.43152 7.37921 2.43152 8.04475C2.43152 10.4558 4.24093 12.5136 6.7873 13.3234C7.01208 13.2326 7.22727 13.1278 7.43052 13.0096L3.42183 5.96631Z"
                  fill="#FFB629"
                />
                <path
                  d="M13.7722 11.9557L13.773 11.9572C13.7722 11.9557 14.0542 11.3938 14.0542 11.3938C15.114 10.4285 16 9.28113 16 7.86816C16 7.77453 15.9971 7.68147 15.9915 7.58903C15.8176 4.72297 12.9802 2.44385 9.50555 2.44385C6.03514 2.44385 3.20049 4.71738 3.02017 7.57844C3.01414 7.67438 3.01105 7.771 3.01105 7.86819C3.01105 10.864 6.50014 12.94 9.50552 13.0028C9.9872 13.0128 10.4567 12.9586 10.9085 12.8755C10.9139 12.8798 12.0806 13.8312 14.1372 14.151C14.4608 14.2014 14.5189 13.6941 14.5189 13.6941L13.7722 11.9557Z"
                  fill="#FF5876"
                />
                <path
                  d="M14.519 13.6943C14.4337 13.8127 14.2948 13.886 14.1373 13.8615C12.3342 13.581 11.2151 12.8152 10.963 12.6277C10.9274 12.6012 10.8826 12.5908 10.8389 12.5984C10.4085 12.6735 9.96264 12.7132 9.50558 12.7132C6.03517 12.7132 3.20067 10.4397 3.02036 7.57861C3.0143 7.67458 3.01111 7.77114 3.01111 7.86836C3.01111 10.8641 5.9188 13.2927 9.50558 13.2927C9.98736 13.2927 10.4567 13.2486 10.9086 13.1654C10.914 13.1698 12.0807 14.1211 14.1373 14.441C14.4608 14.4913 14.7061 14.13 14.5687 13.81L14.519 13.6943Z"
                  fill="#E6485D"
                />
                <path
                  d="M13.8382 11.3298C13.7974 11.3603 13.773 11.4079 13.773 11.4588V11.9574C15.1377 10.963 16 9.49981 16 7.86837C16 7.771 15.9968 7.67425 15.9907 7.57812C15.897 9.06691 15.0849 10.3967 13.8382 11.3298Z"
                  fill="#E6485D"
                />
              </svg>

              <span className="text-xs font-normal text-muted-400">
                Unanswerd
              </span>
            </div>
            <h2 className="text-base text-center font-medium text-muted-500">
              {unanswered}
            </h2>
          </Card>
        </CardContent>
      </Card>
      <CardFooter className="border-t border-grey-200 pt-5 px-0 pb-0 space-x-4 justify-end w-full">
        <Button
          type="button"
          variant={"unstyled"}
          className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-9 px-9 lg:px-9 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          onClick={() => router.push(`/dashboard/analysis/detail/${id}`)}
        >
          Review testscore
        </Button>

        <Button
          variant={"unstyled"}
          className="bg-primary-400 text-white w-fit px-6 lg:px-9 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          onClick={() => router.push(`success?tab=${tabData[1].path}`)}
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
};

const QuestTab = ({ id }: { id: string | string[] | undefined }) => {
  const router = useRouter();
  return (
    <Card className="w-full max-w-[483px] mx-auto p-4 border-grey-500 relative">
      <Button
        variant={"unstyled"}
        className="absolute right-3 top-3 rounded-full w-10 h-10 bg-[#EFF8FF] flex items-center justify-center "
        onClick={() => router.push(`/dashboard/practice`)}
      >
        <X className="h-4 w-4" />
      </Button>
      <h2 className="w-full text-center text-base font-medium text-muted-400 mt-6 pb-3">
        Daily Quests
      </h2>
      <Card className="w-full px-3 py-1 flex items-start justify-start gap-x-3 border-primary-200">
        <Image
          src="/icons/dashboard/box.svg"
          alt="quest box"
          width={32}
          height={32}
        />
        <div className="flex flex-col items-start justify-start gap-2  w-full">
          <h4 className="text-sm font-normal text-muted-500">
            Complete 1 exam
          </h4>
          <div className="w-full flex items-center gap-2">
            <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
              <div
                className="h-full bg-green-600 absolute"
                style={{ width: `100%` }}
              >
                <div className="h-0.5 bg-green-300 absolute top-1/2 left-0 w-full transform -translate-y-1/2"></div>
              </div>
            </div>
            <span className="text-sm font-normal text-muted-500">100%</span>
          </div>
        </div>
      </Card>
      <CardFooter className="border-t border-grey-200 pt-5 px-0 pb-0 space-x-4 justify-end w-full">
        <Button
          type="button"
          variant={"unstyled"}
          className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-9 px-9 lg:px-9 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          onClick={() => router.push(`/dashboard/analysis/detail/${id}`)}
        >
          Review testscore
        </Button>

        <Button
          variant={"unstyled"}
          className="bg-primary-400 text-white w-fit px-6 lg:px-9 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          onClick={() => router.push(`success?tab=${tabData[2].path}`)}
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
};
const NftTab = ({ id }: { id: string | string[] | undefined }) => {
  const router = useRouter();
  return (
    <Card className="w-full max-w-[483px] mx-auto p-4 border-grey-500 flex flex-col items-center justify-center relative">
      <Button
        variant={"unstyled"}
        className="absolute right-3 top-3 rounded-full w-10 h-10 bg-[#EFF8FF] flex items-center justify-center "
        onClick={() => router.push(`/dashboard/practice`)}
      >
        <X className="h-4 w-4" />
      </Button>
      <h2
        className="text-2xl font-medium"
        style={{
          color: "#FFE45C",
          WebkitTextStroke: "2px #D99511",
          fontWeight: "bold",
        }}
      >
        Your Stroke Heading
      </h2>
      <Image
        src="/images/nft.png"
        alt="nft token image"
        width={98}
        height={99}
        priority
        className="py-5 rounded-lg object-cover"
      />
      <div className="w-full flex flex-col items-center justify-center gap-3 pb-4">
        <h3 className="text-base text-center font-medium text-muted-500">
          You earned 1 NFT
        </h3>
        <p className="text-sm text-center text-muted-400">
          Great job completing this daily quest
        </p>
      </div>

      <CardFooter className="border-t border-grey-200 pt-5 px-0 pb-0 space-x-4 justify-end w-full">
        <Button
          type="button"
          variant={"unstyled"}
          className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-9 px-9 lg:px-9 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          onClick={() => router.push(`/dashboard/analysis/detail/${id}`)}
        >
          Review testscore
        </Button>

        <Button
          variant={"unstyled"}
          className="bg-primary-400 text-white w-fit px-6 lg:px-9 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          onClick={() => router.push(`/dashboard/practice`)}
        >
          Done
        </Button>
      </CardFooter>
    </Card>
  );
};
