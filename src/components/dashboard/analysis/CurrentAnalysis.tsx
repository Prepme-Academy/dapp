"use client";

import { Card } from "@/components/ui/card";
import { PracticeModal } from "../practice";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { useExams } from "@/lib/actions/exam.action";
import Image from "next/image";

const CurrentAnalysis: React.FC = () => {
  const router = useRouter();
  const { user } = usePrivy();
  const [authUserId, setAuthUserId] = useState<string | null>(null);

  useEffect(() => {
    if (user?.id) {
      setAuthUserId(user.id);
    }
  }, [user]);

  // Fetch exams based on query parameters
  const {
    data: examsData,
    isLoading: isLoadingExams,
    isError,
    error,
  } = useExams({
    type: "JAMB",
    subject: "English Language",
    year: "2022",
    sort: "popularity",
    authUserId: authUserId || "",
  });

  if (isLoadingExams) {
    return (
      <div className="w-full p-3 border border-grey-200 min-h-20 rounded-lg space-y-3 flex flex-col items-start justify-start animation-pulse">
        <div className="w-full h-6 rounded-lg bg-gray-200" />
        <div className="w-3/4 h-6 rounded-lg bg-gray-400" />
        <div className="w-1/2 h-6 rounded-lg bg-gray-300" />
        <div className="w-full h-6 rounded-lg bg-gray-200" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500">
        Error loading exam analysis: {error.message}
      </div>
    );
  }

  if (examsData?.exams.length === 0) {
    return "No Exam Data";
  }

  const examDetail = examsData?.exams[0];

  if (examDetail)
    return (
      <Dialog>
        <Card className="w-full p-3 border-grey-500 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-start lg:justify-between">
          <div className="flex items-start justify-start gap-3">
            <div className="w-12 h-12 bg-grey-600 rounded-full flex items-center justify-center">
              <Image
                src={examDetail.exam.logo}
                alt={`${examDetail.exam.name} logo`}
                width={37}
                height={37}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <h5 className="text-xs font-normal text-secondary-300 uppercase">
                {examDetail.exam.name}
              </h5>
              <h3 className="text-sm font-normal text-muted-500">
                {examDetail.year} {examDetail.subject.name}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 align-top gap-4">
            <div className="flex items-center justify-start gap-2">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_682_1146)">
                  <path
                    d="M9.67221 1.99278H9.33812L5.99999 2.47568L2.66187 1.99278H2.27953C1.86731 1.99278 1.53314 1.65862 1.53314 1.24639C1.53312 0.834165 1.86731 0.5 2.27953 0.5H9.67221C10.0844 0.5 10.4186 0.834165 10.4186 1.24639C10.4186 1.65862 10.0844 1.99278 9.67221 1.99278Z"
                    fill="#B98080"
                  />
                  <path
                    d="M9.7205 0.5H8.99615C9.40838 0.5 9.74255 0.834165 9.74255 1.24639C9.74255 1.65862 9.40838 1.99278 8.99615 1.99278H9.7205C10.1327 1.99278 10.4669 1.65862 10.4669 1.24639C10.4669 0.834165 10.1327 0.5 9.7205 0.5Z"
                    fill="#AE6C6C"
                  />
                  <path
                    d="M9.28986 2.92967V1.99268H2.6619V2.92967C2.6619 4.38319 3.59094 5.61955 4.88759 6.07772C5.06656 6.14096 5.18622 6.31009 5.18622 6.49987C5.18622 6.68967 5.06656 6.85881 4.88759 6.92202C3.59097 7.38019 2.6619 8.61655 2.6619 10.0701V11.0071H9.28983V10.0701C9.28983 8.61655 8.36078 7.38019 7.06413 6.92202C6.88517 6.85878 6.76551 6.68965 6.76551 6.49987H6.8138C6.8138 6.31007 6.88517 6.14096 7.06413 6.07772C8.36078 5.61957 9.28986 4.38319 9.28986 2.92967Z"
                    fill="#EFEDEF"
                  />
                  <path
                    d="M2.6619 1.99268V2.46589H8.15002C8.40615 2.46589 8.6138 2.67354 8.6138 2.92967C8.6138 4.37867 7.6905 5.61187 6.40017 6.07342C6.24053 6.13053 6.1184 6.26682 6.09419 6.43463C6.06311 6.64995 6.18886 6.85161 6.3881 6.92202C7.68473 7.38019 8.6138 8.61658 8.6138 10.0701V11.0071H9.33815V10.0701C9.33815 8.62107 8.41485 7.38787 7.12452 6.92632C6.96487 6.86922 6.84275 6.73292 6.81853 6.56511C6.78746 6.34979 6.9132 6.14813 7.11245 6.07772C8.40907 5.61955 9.33815 4.38316 9.33815 2.92967V2.46592V1.99268H2.6619Z"
                    fill="#D7D0D6"
                  />
                  <path
                    d="M9.67221 12.5001H2.27953C1.86731 12.5001 1.53314 12.1659 1.53314 11.7537C1.53314 11.3415 1.86731 11.0073 2.27953 11.0073H2.66191L6.00004 10.5244L9.33816 11.0073H9.67226C10.0845 11.0073 10.4186 11.3415 10.4186 11.7537C10.4186 12.1659 10.0844 12.5001 9.67221 12.5001Z"
                    fill="#B98080"
                  />
                  <path
                    d="M9.7205 11.0073H8.99615C9.40838 11.0073 9.74255 11.3415 9.74255 11.7537C9.74255 12.1659 9.40838 12.5001 8.99615 12.5001H9.7205C10.1327 12.5001 10.4669 12.1659 10.4669 11.7537C10.4669 11.3415 10.1327 11.0073 9.7205 11.0073Z"
                    fill="#AE6C6C"
                  />
                  <path
                    d="M7.60747 8.38843H7.2559C6.90234 8.38843 6.55241 8.13266 6.49459 7.78389L6.35114 6.9187C6.27813 6.47835 6.6178 6.07774 7.06416 6.07774C7.93036 5.77168 8.63199 5.11803 9.00273 4.28467H2.94903C3.31975 5.11805 4.0214 5.77168 4.8876 6.07774C5.33397 6.07774 5.67364 6.47835 5.60062 6.9187L5.45718 7.78389C5.39935 8.13266 5.09768 8.38843 4.74416 8.38843H4.34429C3.42259 8.38843 2.66695 9.13004 2.66197 10.0517C2.66195 10.0579 2.66193 10.064 2.66193 10.0701V11.0071H9.28986V10.0701C9.28986 10.064 9.28984 10.0579 9.28981 10.0517C9.28482 9.13004 8.52918 8.38843 7.60747 8.38843Z"
                    fill="#FED402"
                  />
                  <path
                    d="M9.33809 10.0517C9.33309 9.13004 8.57748 8.38843 7.65577 8.38843H7.25589C6.90233 8.38843 6.60069 8.13266 6.54286 7.78389L6.39942 6.9187C6.3264 6.47835 6.66607 6.07774 7.11244 6.07774C7.97864 5.77168 8.68026 5.11803 9.05101 4.28467H8.32666C7.95594 5.11805 7.25429 5.77168 6.38809 6.07774C5.94173 6.07774 5.60206 6.47835 5.67507 6.9187L5.81852 7.78389C5.87634 8.13266 6.17801 8.38843 6.53154 8.38843H6.93143C7.85313 8.38843 8.60877 9.13004 8.61374 10.0517C8.61377 10.0579 8.61379 10.064 8.61379 10.0701V11.0071H9.33814V10.0701C9.33814 10.064 9.33812 10.0579 9.33809 10.0517Z"
                    fill="#FAC600"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_682_1146">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-xs font-normal text-muted-400">
                {examDetail.duration} mins
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.47876 1H3.35385C2.46749 1 1.75 1.71749 1.75 2.60385V11.6451C1.75 12.5323 2.46749 13.2498 3.35385 13.2498H8.86626L9.04739 12.5209L7.75241 11.4123C7.34379 11.0623 7.18629 10.5085 7.36129 9.99486C7.39016 9.90736 7.42516 9.82599 7.47766 9.74986C7.69378 9.37624 8.08403 9.13125 8.52765 9.1085L9.33263 9.06213L9.81125 9.03325L10.1324 9.01575L10.7274 7.40578C10.8035 7.19578 10.926 7.02078 11.0835 6.88078V2.60385C11.0835 1.71749 10.366 1 9.47876 1ZM8.74989 6.97878C8.74989 7.15553 8.64314 7.31478 8.47952 7.38303C8.42527 7.40578 8.3684 7.41628 8.3124 7.41628C8.19865 7.41628 8.08665 7.37165 8.00265 7.28853L7.54241 6.82741L6.7138 7.59215C6.5738 7.72165 6.36643 7.74527 6.20018 7.65077L5.46957 7.2334L4.24721 8.45488C4.16146 8.54063 4.04946 8.58263 3.93747 8.58263C3.82547 8.58263 3.71347 8.53976 3.62772 8.45488C3.4571 8.28426 3.4571 8.00689 3.62772 7.83627L5.08632 6.37767C5.22632 6.23767 5.44157 6.20879 5.61307 6.30679L6.35593 6.73116L6.92292 6.20704L6.54493 5.82993C6.4198 5.7048 6.38218 5.51668 6.45043 5.35306C6.5178 5.18944 6.67792 5.08269 6.85467 5.08269H8.3124C8.5539 5.08269 8.74989 5.27868 8.74989 5.52018V6.97878Z"
                  fill="#1877F2"
                />
                <path
                  d="M14.0295 15C13.9437 15 13.858 14.9746 13.7836 14.9239L11.9567 13.6805L10.1297 14.9239C9.97918 15.0254 9.78144 15.0254 9.63269 14.9204C9.48394 14.8163 9.41482 14.6308 9.45944 14.4549L10.0282 12.2097L8.31846 10.7493C8.18284 10.6338 8.13121 10.4466 8.18809 10.2768C8.24496 10.108 8.39983 9.98984 8.57833 9.97934L10.757 9.85597L11.5463 7.7035C11.6093 7.53113 11.7738 7.4165 11.9567 7.4165C12.1395 7.4165 12.304 7.53113 12.367 7.7035L13.1563 9.85597L15.335 9.97934C15.5135 9.98984 15.6675 10.1071 15.7252 10.2768C15.7821 10.4466 15.7305 10.6338 15.5948 10.7493L13.8851 12.2097L14.4539 14.4549C14.4985 14.6308 14.4294 14.8163 14.2806 14.9204C14.2045 14.9738 14.117 15 14.0295 15Z"
                  fill="#8AC9FE"
                />
              </svg>

              {/* <span className="text-xs font-normal text-muted-400">35/50</span> */}
            </div>
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
                {examDetail.noOfQuestions} questions
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <DialogTrigger asChild>
              <Button
                variant={"unstyled"}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit h-10 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                onClick={() =>
                  router.push(
                    `/dashboard/practice/detail/${examDetail.id}/ready`
                  )
                }
              >
                Practice again
              </Button>
            </DialogTrigger>
            <Button
              variant={"unstyled"}
              onClick={() =>
                router.push(`/dashboard/analysis/detail/${examDetail.id}`)
              }
              className="bg-primary-400 text-white w-fit h-10 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              View Analysis
            </Button>
          </div>
        </Card>
        {examDetail && <PracticeModal examDetail={examDetail} />}
      </Dialog>
    );
};

export default CurrentAnalysis;
