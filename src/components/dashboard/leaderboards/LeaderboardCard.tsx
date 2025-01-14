"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LeaderboardEntry } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LeaderboardCardProps {
  showTitle: boolean;
  className?: string;
  data: LeaderboardEntry[];
  authId: string;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({
  showTitle,
  className,
  data,
  authId
}) => {
  const router = useRouter();

  return (
    <Card className="w-full p-3 shadow-cardshadow border-gray-100 space-y-3">
      {data.length === 0 ? (
        <CardContent
          className={cn(
            "w-full px-0 pb-0 flex flex-col items-center justify-center gap-2",
            showTitle ? "h-[70vh]" : ""
          )}
        >
          <Image
            src="/icons/dashboard/leaderboard.svg"
            alt="leaderboard icon"
            width={54}
            height={54}
            priority
          />
          <h3 className="text-lg font-medium text-muted-500 text-center">
            Unlock Leaderboard
          </h3>
          <p className="text-center text-xs font-normal text-grey w-full">
            Practice at least one exam to join the leaderboard
          </p>
          {showTitle && (
            <Button
              variant={"unstyled"}
              className="bg-primary-400 text-white w-fit h-10 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              onClick={() => router.push("/dashboard/practice")}
            >
              Practice an exam now
            </Button>
          )}
        </CardContent>
      ) : (
        <div className="w-full space-y-4">
          {showTitle ? (
            <>
              <CardHeader className="px-0 py-0 items-center justify-between flex-row space-y-0">
                <h3 className="text-base md:text-lg font-normal text-muted-500">
                  Top 20 moves to the next board
                </h3>
                <h4 className="text-base md:text-lg font-normal text-muted-500 flex items-center justify-end gap-2">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_108_15375)">
                      <path
                        d="M12.8963 2.49037H12.4508L7.99999 3.13424L3.54916 2.49037H3.03938C2.48974 2.49037 2.04419 2.04482 2.04419 1.49519C2.04416 0.945553 2.48974 0.5 3.03938 0.5H12.8963C13.4459 0.5 13.8915 0.945553 13.8915 1.49519C13.8915 2.04482 13.4459 2.49037 12.8963 2.49037Z"
                        fill="#B98080"
                      />
                      <path
                        d="M12.9607 0.5H11.9949C12.5445 0.5 12.9901 0.945553 12.9901 1.49519C12.9901 2.04482 12.5445 2.49037 11.9949 2.49037H12.9607C13.5103 2.49037 13.9559 2.04482 13.9559 1.49519C13.9559 0.945553 13.5103 0.5 12.9607 0.5Z"
                        fill="#AE6C6C"
                      />
                      <path
                        d="M12.3865 3.73955V2.49023H3.54919V3.73955C3.54919 5.67758 4.78792 7.32606 6.51679 7.93696C6.75541 8.02128 6.91496 8.24679 6.91496 8.49983C6.91496 8.7529 6.75541 8.97841 6.51679 9.06269C4.78795 9.67359 3.54919 11.3221 3.54919 13.2601V14.5094H12.3864V13.2601C12.3864 11.3221 11.1477 9.67359 9.41884 9.06269C9.18023 8.97838 9.02068 8.75286 9.02068 8.49983H9.08507C9.08507 8.24676 9.18023 8.02128 9.41884 7.93696C11.1477 7.3261 12.3865 5.67758 12.3865 3.73955Z"
                        fill="#EFEDEF"
                      />
                      <path
                        d="M3.54919 2.49023V3.12119H10.8667C11.2082 3.12119 11.4851 3.39805 11.4851 3.73955C11.4851 5.67156 10.254 7.31583 8.53357 7.93123C8.3207 8.00737 8.15787 8.1891 8.12558 8.41284C8.08415 8.69994 8.25181 8.96882 8.51747 9.06269C10.2463 9.67359 11.4851 11.3221 11.4851 13.2601V14.5094H12.4509V13.2601C12.4509 11.3281 11.2198 9.68383 9.49936 9.06842C9.2865 8.99229 9.12367 8.81056 9.09138 8.58681C9.04994 8.29971 9.21761 8.03084 9.48326 7.93696C11.2121 7.32606 12.4509 5.67755 12.4509 3.73955V3.12122V2.49023H3.54919Z"
                        fill="#D7D0D6"
                      />
                      <path
                        d="M12.8963 16.5004H3.03938C2.48974 16.5004 2.04419 16.0549 2.04419 15.5053C2.04419 14.9556 2.48974 14.5101 3.03938 14.5101H3.54922L8.00005 13.8662L12.4509 14.5101H12.8963C13.446 14.5101 13.8915 14.9556 13.8915 15.5053C13.8915 16.0549 13.4459 16.5004 12.8963 16.5004Z"
                        fill="#B98080"
                      />
                      <path
                        d="M12.9607 14.5098H11.9949C12.5445 14.5098 12.9901 14.9553 12.9901 15.505C12.9901 16.0546 12.5445 16.5001 11.9949 16.5001H12.9607C13.5103 16.5001 13.9559 16.0546 13.9559 15.505C13.9559 14.9553 13.5103 14.5098 12.9607 14.5098Z"
                        fill="#AE6C6C"
                      />
                      <path
                        d="M10.1433 11.0176H9.67449C9.20309 11.0176 8.73651 10.6766 8.65941 10.2115L8.46815 9.05795C8.3708 8.47081 8.82369 7.93666 9.41884 7.93666C10.5738 7.52858 11.5093 6.65705 12.0036 5.5459H3.932C4.4263 6.65708 5.36183 7.52858 6.51676 7.93666C7.11191 7.93666 7.56481 8.47081 7.46746 9.05795L7.2762 10.2115C7.19909 10.6766 6.79687 11.0176 6.3255 11.0176H5.79235C4.56341 11.0176 3.55589 12.0064 3.54926 13.2353C3.54923 13.2435 3.54919 13.2517 3.54919 13.2598V14.5092H12.3864V13.2598C12.3864 13.2517 12.3864 13.2435 12.3864 13.2353C12.3797 12.0064 11.3722 11.0176 10.1433 11.0176Z"
                        fill="#FED402"
                      />
                      <path
                        d="M12.4508 13.2353C12.4442 12.0064 11.4367 11.0176 10.2077 11.0176H9.67455C9.20315 11.0176 8.80096 10.6766 8.72386 10.2115L8.5326 9.05795C8.43525 8.47081 8.88814 7.93666 9.48329 7.93666C10.6382 7.52858 11.5737 6.65705 12.0681 5.5459H11.1023C10.608 6.65708 9.67243 7.52858 8.5175 7.93666C7.92235 7.93666 7.46945 8.47081 7.5668 9.05795L7.75806 10.2115C7.83517 10.6766 8.23739 11.0176 8.70876 11.0176H9.24194C10.4709 11.0176 11.4784 12.0064 11.485 13.2353C11.4851 13.2435 11.4851 13.2517 11.4851 13.2598V14.5092H12.4509V13.2598C12.4509 13.2517 12.4509 13.2435 12.4508 13.2353Z"
                        fill="#FAC600"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_15375">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>7 days</span>
                </h4>
              </CardHeader>
              <ul className="mt-4 w-full h-12 px-4 rounded-lg flex items-center justify-between bg-grey-400">
                <li className="text-sm font-medium text-muted-500">Scholars</li>
                <li className="text-sm font-medium text-muted-500">Total XP</li>
              </ul>
            </>
          ) : (
            <CardHeader className="px-0 py-0 items-center justify-between flex-row space-y-0">
              <div className="flex items-center justify-start gap-2">
                <Image
                  src="/icons/dashboard/leaderboard.svg"
                  alt="leaderboard icon"
                  width={20}
                  height={20}
                />
                <h3 className="text-lg font-medium text-muted-500">
                  Leaderboard
                </h3>
              </div>
              <Link
                href="/dashboard/leaderboard"
                className="text-sm font-normal text-primary-400"
              >
                View all
              </Link>
            </CardHeader>
          )}

          <CardContent
            className={cn(
              "p-2 flex flex-col items-start justify-start w-full rounded",
              className
            )}
          >
            {data.map((lead, index) => (
              <div
                key={lead.user.id}
                className={cn(
                  "w-full flex items-center justify-between gap-x-3 rounded py-2 px-2",
                  lead.user.authId === authId
                    ? "bg-primary-100 border border-primary-400"
                    : ""
                )}
              >
                <div className="flex items-center justify-start gap-2">
                  <div className="w-8 h-8 bg-grey-100 rounded-full flex items-center justify-center text-sm font-normal text-muted-500">
                    {index === 0 ? (
                      <svg
                        width="22"
                        height="27"
                        viewBox="0 0 22 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1785 11.3214V1.89927C15.1785 1.49862 14.8537 1.17383 14.453 1.17383H6.0226C5.62195 1.17383 5.29716 1.49862 5.29716 1.89927V11.3214C5.29716 11.722 5.62195 12.0468 6.0226 12.0468H14.453C14.8537 12.0468 15.1785 11.722 15.1785 11.3214Z"
                          fill="#E17A09"
                        />
                        <path
                          d="M14.4537 11.3213H6.02332V1.89919H14.4537V11.3213Z"
                          fill="#FF8500"
                        />
                        <path
                          d="M13.1401 11.3214V1.89927C13.1401 1.49862 12.8153 1.17383 12.4147 1.17383H8.06201C7.66136 1.17383 7.33657 1.49862 7.33657 1.89927V11.3214C7.33657 11.722 7.66136 12.0468 8.06201 12.0468H12.4147C12.8153 12.0468 13.1401 11.722 13.1401 11.3214Z"
                          fill="#ECA51B"
                        />
                        <path
                          d="M12.4148 11.3213H8.06212V1.89919H12.4148V11.3213Z"
                          fill="#FFBC00"
                        />
                        <path
                          d="M11.5324 6.03716C11.9862 6.57728 12.7439 6.74998 13.3873 6.46045C14.2804 6.05833 15.3209 6.55865 15.563 7.50852C15.7374 8.19255 16.3452 8.6768 17.0504 8.69457C18.0299 8.71997 18.7495 9.62243 18.5556 10.5824C18.416 11.2741 18.7537 11.9742 19.3811 12.2968C20.2522 12.7446 20.5095 13.8697 19.9186 14.6511C19.4928 15.2141 19.4928 15.9912 19.9186 16.5534C20.5095 17.3348 20.253 18.4599 19.3811 18.9077C18.7537 19.2303 18.416 19.9304 18.5556 20.622C18.7487 21.5821 18.0291 22.4845 17.0504 22.5099C16.3452 22.5277 15.7374 23.0128 15.563 23.696C15.3209 24.645 14.2804 25.1462 13.3873 24.744C12.7439 24.4545 11.9862 24.6272 11.5324 25.1673C10.9026 25.9174 9.74783 25.9174 9.11797 25.1673C8.6642 24.6272 7.90652 24.4545 7.26311 24.744C6.36997 25.1462 5.32953 24.6458 5.08741 23.696C4.91301 23.0119 4.30517 22.5277 3.59996 22.5099C2.62047 22.4845 1.90088 21.5821 2.09475 20.622C2.23443 19.9304 1.89665 19.2303 1.26933 18.9077C0.398201 18.4599 0.140841 17.3348 0.731753 16.5534C1.15758 15.9904 1.15758 15.2132 0.731753 14.6511C0.140841 13.8697 0.397355 12.7446 1.26933 12.2968C1.89665 11.9742 2.23443 11.2741 2.09475 10.5824C1.90173 9.62243 2.62132 8.71997 3.59996 8.69457C4.30517 8.6768 4.91301 8.19171 5.08741 7.50852C5.32953 6.5595 6.36997 6.05833 7.26311 6.46045C7.90652 6.74998 8.6642 6.57728 9.11797 6.03716C9.74783 5.28709 10.9026 5.28709 11.5324 6.03716Z"
                          fill="#FFCE00"
                        />
                        <path
                          d="M10.3253 23.4938C14.6839 23.4938 18.2172 19.9605 18.2172 15.6019C18.2172 11.2433 14.6839 7.70996 10.3253 7.70996C5.96669 7.70996 2.43335 11.2433 2.43335 15.6019C2.43335 19.9605 5.96669 23.4938 10.3253 23.4938Z"
                          fill="#FFB629"
                        />
                        <path
                          d="M10.3885 22.8072C14.3334 22.8072 17.5313 19.6092 17.5313 15.6643C17.5313 11.7194 14.3334 8.52148 10.3885 8.52148C6.44357 8.52148 3.24561 11.7194 3.24561 15.6643C3.24561 19.6092 6.44357 22.8072 10.3885 22.8072Z"
                          fill="#FFF0C5"
                        />
                        <path
                          d="M10.7166 19.1151C10.5333 19.1151 10.4055 19.079 10.3333 19.0068C10.261 18.929 10.2249 18.7957 10.2249 18.6068V13.7734C10.2249 13.5901 10.261 13.4623 10.3333 13.3901C10.4055 13.3179 10.536 13.2818 10.7249 13.2818C10.9083 13.2818 11.036 13.3207 11.1083 13.3984C11.1805 13.4707 11.2166 13.6012 11.2166 13.7901V18.6151C11.2166 18.7984 11.1805 18.929 11.1083 19.0068C11.036 19.079 10.9055 19.1151 10.7166 19.1151ZM9.43325 15.4568C9.30547 15.5734 9.19159 15.6318 9.09159 15.6318C8.99159 15.6262 8.88047 15.5568 8.75825 15.4234C8.64159 15.2957 8.58603 15.1762 8.59159 15.0651C8.6027 14.954 8.68047 14.8345 8.82492 14.7068L10.2499 13.4484C10.3777 13.3373 10.4916 13.2873 10.5916 13.2984C10.6971 13.304 10.8083 13.3707 10.9249 13.4984C11.0471 13.6262 11.1027 13.7457 11.0916 13.8568C11.0805 13.9679 10.9999 14.0873 10.8499 14.2151L9.43325 15.4568Z"
                          fill="#FF8500"
                        />
                      </svg>
                    ) : index === 1 ? (
                      <svg
                        width="22"
                        height="27"
                        viewBox="0 0 22 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1783 11.3223V1.90025C15.1783 1.4996 14.8536 1.1748 14.4529 1.1748H6.02248C5.62183 1.1748 5.29704 1.4996 5.29704 1.90025V11.3223C5.29704 11.723 5.62183 12.0478 6.02248 12.0478H14.4529C14.8536 12.0478 15.1783 11.723 15.1783 11.3223Z"
                          fill="#7B7D7E"
                        />
                        <path
                          d="M14.4536 11.3223H6.0232V1.90017H14.4536V11.3223Z"
                          fill="#909FAE"
                        />
                        <path
                          d="M13.14 11.3223V1.90025C13.14 1.4996 12.8152 1.1748 12.4146 1.1748H8.06189C7.66124 1.1748 7.33644 1.4996 7.33644 1.90025V11.3223C7.33644 11.723 7.66124 12.0478 8.06189 12.0478H12.4146C12.8152 12.0478 13.14 11.723 13.14 11.3223Z"
                          fill="#9FA6AC"
                        />
                        <path
                          d="M12.4146 11.3223H8.06187V1.90017H12.4146V11.3223Z"
                          fill="#CAD3DA"
                        />
                        <path
                          d="M11.5323 6.03716C11.9861 6.57728 12.7437 6.74998 13.3871 6.46045C14.2803 6.05833 15.3207 6.55865 15.5629 7.50852C15.7373 8.19255 16.3451 8.6768 17.0503 8.69457C18.0298 8.71997 18.7494 9.62243 18.5555 10.5824C18.4158 11.2741 18.7536 11.9742 19.3809 12.2968C20.2521 12.7446 20.5094 13.8697 19.9185 14.6511C19.4927 15.2141 19.4927 15.9912 19.9185 16.5534C20.5094 17.3348 20.2529 18.4599 19.3809 18.9077C18.7536 19.2303 18.4158 19.9304 18.5555 20.622C18.7485 21.5821 18.0289 22.4845 17.0503 22.5099C16.3451 22.5277 15.7373 23.0128 15.5629 23.696C15.3207 24.645 14.2803 25.1462 13.3871 24.744C12.7437 24.4545 11.9861 24.6272 11.5323 25.1673C10.9024 25.9174 9.7477 25.9174 9.11785 25.1673C8.66408 24.6272 7.90639 24.4545 7.26299 24.744C6.36985 25.1462 5.3294 24.6458 5.08728 23.696C4.91289 23.0119 4.30504 22.5277 3.59984 22.5099C2.62035 22.4845 1.90076 21.5821 2.09462 20.622C2.23431 19.9304 1.89652 19.2303 1.26921 18.9077C0.398079 18.4599 0.140719 17.3348 0.731631 16.5534C1.15746 15.9904 1.15746 15.2132 0.731631 14.6511C0.140719 13.8697 0.397233 12.7446 1.26921 12.2968C1.89652 11.9742 2.23431 11.2741 2.09462 10.5824C1.9016 9.62243 2.6212 8.71997 3.59984 8.69457C4.30504 8.6768 4.91289 8.19171 5.08728 7.50852C5.3294 6.5595 6.36985 6.05833 7.26299 6.46045C7.90639 6.74998 8.66408 6.57728 9.11785 6.03716C9.7477 5.28709 10.9024 5.28709 11.5323 6.03716Z"
                          fill="#AEC0D1"
                        />
                        <path
                          d="M10.3252 23.4938C14.6838 23.4938 18.2171 19.9605 18.2171 15.6019C18.2171 11.2433 14.6838 7.70996 10.3252 7.70996C5.96657 7.70996 2.43323 11.2433 2.43323 15.6019C2.43323 19.9605 5.96657 23.4938 10.3252 23.4938Z"
                          fill="#C4D2DD"
                        />
                        <path
                          d="M10.3883 22.8072C14.3332 22.8072 17.5312 19.6092 17.5312 15.6643C17.5312 11.7194 14.3332 8.52148 10.3883 8.52148C6.44345 8.52148 3.24548 11.7194 3.24548 15.6643C3.24548 19.6092 6.44345 22.8072 10.3883 22.8072Z"
                          fill="#D8E4EE"
                        />
                        <path
                          d="M9.12492 19.0651C8.99714 19.0651 8.88047 19.0151 8.77492 18.9151C8.67492 18.8095 8.62492 18.6873 8.62492 18.5484C8.62492 18.4595 8.63047 18.3734 8.64159 18.2901C8.6527 18.2068 8.6777 18.1262 8.71659 18.0484C8.75547 17.9707 8.81381 17.8957 8.89159 17.8234C9.14714 17.6123 9.40547 17.4179 9.66659 17.2401C9.93325 17.0623 10.1888 16.8929 10.4333 16.7318C10.6777 16.5707 10.8971 16.4095 11.0916 16.2484C11.286 16.0818 11.4388 15.9095 11.5499 15.7318C11.661 15.5484 11.7166 15.3512 11.7166 15.1401C11.7166 14.9679 11.6805 14.8123 11.6083 14.6734C11.5416 14.5345 11.4333 14.4234 11.2833 14.3401C11.1333 14.2568 10.9333 14.2151 10.6833 14.2151C10.511 14.2151 10.3583 14.2401 10.2249 14.2901C10.0971 14.3401 9.98881 14.4123 9.89992 14.5068C9.81659 14.6012 9.74992 14.7179 9.69992 14.8568C9.65547 14.9901 9.63325 15.1429 9.63325 15.3151C9.63325 15.4095 9.62492 15.4929 9.60825 15.5651C9.59159 15.6373 9.54714 15.6957 9.47492 15.7401C9.40825 15.779 9.29159 15.7984 9.12492 15.7984C8.95825 15.7984 8.83881 15.7734 8.76659 15.7234C8.69992 15.6734 8.65825 15.6068 8.64159 15.5234C8.63047 15.4345 8.62492 15.3429 8.62492 15.2484C8.62492 14.9707 8.66936 14.7095 8.75825 14.4651C8.8527 14.2151 8.98881 13.9984 9.16659 13.8151C9.34436 13.6262 9.55825 13.479 9.80825 13.3734C10.0638 13.2623 10.3527 13.2068 10.6749 13.2068C11.0805 13.2068 11.436 13.2901 11.7416 13.4568C12.0527 13.6234 12.2944 13.8568 12.4666 14.1568C12.6444 14.4568 12.7333 14.8151 12.7333 15.2318C12.7333 15.4484 12.6999 15.6512 12.6333 15.8401C12.5666 16.029 12.4749 16.2068 12.3583 16.3734C12.2416 16.5345 12.1055 16.6845 11.9499 16.8234C11.7999 16.9623 11.636 17.0957 11.4583 17.2234C11.286 17.3457 11.111 17.4623 10.9333 17.5734C10.7555 17.679 10.5833 17.7818 10.4166 17.8818L10.0999 18.0484H12.4666C12.561 18.0484 12.6471 18.0595 12.7249 18.0818C12.8027 18.0984 12.861 18.1429 12.8999 18.2151C12.9444 18.2873 12.9666 18.404 12.9666 18.5651C12.9666 18.7207 12.9444 18.8345 12.8999 18.9068C12.8555 18.979 12.7944 19.0234 12.7166 19.0401C12.6388 19.0568 12.5499 19.0651 12.4499 19.0651H9.12492Z"
                          fill="#909FAE"
                        />
                      </svg>
                    ) : index === 2 ? (
                      <svg
                        width="22"
                        height="27"
                        viewBox="0 0 22 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1783 11.3223V1.90025C15.1783 1.4996 14.8536 1.1748 14.4529 1.1748H6.02248C5.62183 1.1748 5.29704 1.4996 5.29704 1.90025V11.3223C5.29704 11.723 5.62183 12.0478 6.02248 12.0478H14.4529C14.8536 12.0478 15.1783 11.723 15.1783 11.3223Z"
                          fill="#955C1F"
                        />
                        <path
                          d="M14.4536 11.3223H6.0232V1.90017H14.4536V11.3223Z"
                          fill="#C47B2C"
                        />
                        <path
                          d="M13.14 11.3223V1.90025C13.14 1.4996 12.8152 1.1748 12.4146 1.1748H8.06189C7.66124 1.1748 7.33644 1.4996 7.33644 1.90025V11.3223C7.33644 11.723 7.66124 12.0478 8.06189 12.0478H12.4146C12.8152 12.0478 13.14 11.723 13.14 11.3223Z"
                          fill="#D9AC7D"
                        />
                        <path
                          d="M12.4146 11.3223H8.06187V1.90017H12.4146V11.3223Z"
                          fill="#F9C794"
                        />
                        <path
                          d="M11.5323 6.03716C11.9861 6.57728 12.7437 6.74998 13.3871 6.46045C14.2803 6.05833 15.3207 6.55865 15.5629 7.50852C15.7373 8.19255 16.3451 8.6768 17.0503 8.69457C18.0298 8.71997 18.7494 9.62243 18.5555 10.5824C18.4158 11.2741 18.7536 11.9742 19.3809 12.2968C20.2521 12.7446 20.5094 13.8697 19.9185 14.6511C19.4927 15.2141 19.4927 15.9912 19.9185 16.5534C20.5094 17.3348 20.2529 18.4599 19.3809 18.9077C18.7536 19.2303 18.4158 19.9304 18.5555 20.622C18.7485 21.5821 18.0289 22.4845 17.0503 22.5099C16.3451 22.5277 15.7373 23.0128 15.5629 23.696C15.3207 24.645 14.2803 25.1462 13.3871 24.744C12.7437 24.4545 11.9861 24.6272 11.5323 25.1673C10.9024 25.9174 9.7477 25.9174 9.11785 25.1673C8.66408 24.6272 7.90639 24.4545 7.26299 24.744C6.36985 25.1462 5.3294 24.6458 5.08728 23.696C4.91289 23.0119 4.30504 22.5277 3.59984 22.5099C2.62035 22.4845 1.90076 21.5821 2.09462 20.622C2.23431 19.9304 1.89652 19.2303 1.26921 18.9077C0.398079 18.4599 0.140719 17.3348 0.731631 16.5534C1.15746 15.9904 1.15746 15.2132 0.731631 14.6511C0.140719 13.8697 0.397233 12.7446 1.26921 12.2968C1.89652 11.9742 2.23431 11.2741 2.09462 10.5824C1.9016 9.62243 2.6212 8.71997 3.59984 8.69457C4.30504 8.6768 4.91289 8.19171 5.08728 7.50852C5.3294 6.5595 6.36985 6.05833 7.26299 6.46045C7.90639 6.74998 8.66408 6.57728 9.11785 6.03716C9.7477 5.28709 10.9024 5.28709 11.5323 6.03716Z"
                          fill="#CF9C69"
                        />
                        <path
                          d="M10.3252 23.4938C14.6838 23.4938 18.2171 19.9605 18.2171 15.6019C18.2171 11.2433 14.6838 7.70996 10.3252 7.70996C5.96657 7.70996 2.43323 11.2433 2.43323 15.6019C2.43323 19.9605 5.96657 23.4938 10.3252 23.4938Z"
                          fill="#DDAF84"
                        />
                        <path
                          d="M10.3883 22.8072C14.3332 22.8072 17.5312 19.6092 17.5312 15.6643C17.5312 11.7194 14.3332 8.52148 10.3883 8.52148C6.44345 8.52148 3.24548 11.7194 3.24548 15.6643C3.24548 19.6092 6.44345 22.8072 10.3883 22.8072Z"
                          fill="#EDC092"
                        />
                        <path
                          d="M10.7416 19.1568C10.4471 19.1568 10.1749 19.1123 9.92492 19.0234C9.67492 18.929 9.4527 18.804 9.25825 18.6484C9.06381 18.4873 8.91103 18.304 8.79992 18.0984C8.69436 17.8929 8.63603 17.679 8.62492 17.4568C8.62492 17.2123 8.80547 17.0901 9.16659 17.0901C9.2777 17.0901 9.36103 17.1012 9.41659 17.1234C9.47214 17.1457 9.51659 17.1873 9.54992 17.2484C9.58325 17.3095 9.61659 17.3929 9.64992 17.4984C9.68881 17.6095 9.7527 17.7179 9.84159 17.8234C9.93603 17.929 10.0583 18.0179 10.2083 18.0901C10.3583 18.1568 10.5388 18.1901 10.7499 18.1901C10.9777 18.1901 11.1749 18.154 11.3416 18.0818C11.5083 18.004 11.636 17.8984 11.7249 17.7651C11.8194 17.6318 11.8666 17.479 11.8666 17.3068C11.8666 17.1345 11.8194 16.9873 11.7249 16.8651C11.636 16.7373 11.5138 16.6401 11.3583 16.5734C11.2027 16.5012 11.0249 16.4651 10.8249 16.4651C10.7194 16.4651 10.6249 16.4568 10.5416 16.4401C10.4638 16.4234 10.3999 16.3818 10.3499 16.3151C10.3055 16.2484 10.2833 16.1373 10.2833 15.9818C10.2833 15.8207 10.3055 15.7095 10.3499 15.6484C10.3999 15.5818 10.4666 15.5401 10.5499 15.5234C10.6333 15.5068 10.7277 15.4984 10.8333 15.4984C11.0221 15.4984 11.1777 15.4734 11.2999 15.4234C11.4277 15.3734 11.5249 15.304 11.5916 15.2151C11.6583 15.1262 11.6916 15.0262 11.6916 14.9151C11.6916 14.7651 11.6555 14.6345 11.5833 14.5234C11.511 14.4068 11.4083 14.3179 11.2749 14.2568C11.1471 14.1901 10.9944 14.1568 10.8166 14.1568C10.6555 14.1568 10.5166 14.179 10.3999 14.2234C10.2833 14.2623 10.1805 14.3207 10.0916 14.3984C10.0083 14.4762 9.93047 14.5707 9.85825 14.6818C9.77492 14.8429 9.6777 14.9373 9.56659 14.9651C9.46103 14.9929 9.32214 14.9568 9.14992 14.8568C9.01103 14.7734 8.9277 14.6845 8.89992 14.5901C8.87214 14.4901 8.89159 14.3762 8.95825 14.2484C8.97492 14.2095 9.00547 14.1512 9.04992 14.0734C9.09992 13.9901 9.16936 13.9012 9.25825 13.8068C9.3527 13.7068 9.46659 13.6123 9.59992 13.5234C9.73325 13.429 9.89714 13.3512 10.0916 13.2901C10.286 13.229 10.511 13.1984 10.7666 13.1984C11.0777 13.1984 11.3527 13.2484 11.5916 13.3484C11.8305 13.4429 12.0333 13.5707 12.1999 13.7318C12.3666 13.8873 12.4916 14.0651 12.5749 14.2651C12.6638 14.4595 12.7083 14.6623 12.7083 14.8734C12.7083 15.0623 12.6721 15.2318 12.5999 15.3818C12.5277 15.5318 12.4388 15.6568 12.3333 15.7568C12.2277 15.8568 12.1221 15.9318 12.0166 15.9818C12.1333 16.0318 12.2416 16.1012 12.3416 16.1901C12.4471 16.279 12.5388 16.3845 12.6166 16.5068C12.6999 16.6234 12.7638 16.7484 12.8083 16.8818C12.8527 17.0151 12.8749 17.1512 12.8749 17.2901C12.8749 17.6457 12.7833 17.9651 12.5999 18.2484C12.4221 18.5318 12.1721 18.754 11.8499 18.9151C11.5277 19.0762 11.1583 19.1568 10.7416 19.1568Z"
                          fill="#C47B2C"
                        />
                      </svg>
                    ) : (
                      lead.rank
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-500 text-sm font-normal text-white uppercase">
                    {lead.user.username.charAt(0)}
                  </div>
                  <h4 className="text-xs font-normal text-muted-500">
                    {lead.user.username}
                  </h4>
                </div>
                <h2 className="text-xs font-normal text-muted-500">
                  {lead.xpEarned} XP
                </h2>
              </div>
            ))}
          </CardContent>
        </div>
      )}
    </Card>
  );
};

export default LeaderboardCard;
