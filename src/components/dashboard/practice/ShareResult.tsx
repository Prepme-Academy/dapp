"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExamTest } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import ShareIcon from "/public/icons/dashboard/share.svg";
import Cloud from "/public/icons/dashboard/cloud.svg";
import SmallCloud from "/public/icons/dashboard/smallCloud.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { referralSocialLinks } from "../referral/routes";

interface ShareResultProps {
  score: number;
  examTest: ExamTest;
}

const ShareResult: React.FC<ShareResultProps> = ({ score, examTest }) => {
  const router = useRouter();
  return (
    <Card className="w-full max-w-[483px] mx-auto p-4 border-grey-500 space-y-6 flex flex-col items-center justify-center relative">
      <div className="w-full flex items-center justify-between gap-3">
        <h3 className="text-xl md:text-[22px] font-medium text-[#334058]">
          Share Result
        </h3>
        <Button
          variant={"unstyled"}
          className="rounded-full w-10 h-10 bg-[#EFF8FF] flex items-center justify-center "
          onClick={() => router.back()}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-full rounded-3xl bg-share-linear grid grid-cols-1 lg:grid-cols-[1fr_158px] items-start justify-start gap-4 pt-4">
        <div className="w-full relative flex flex-col items-start justify-start gap-3 text-[#18487F] pl-4">
          <h6 className="text-sm font-normal">I scored </h6>
          <h2 className="text-2xl md:text-3xl font-semibold">{score}</h2>
          <div className="flex items-start justify-start gap-2 2-full">
            <h6 className="text-sm font-normal">on</h6>
            <div className="flex items-start justify-start gap-1">
              <div className="w-8 h-8 bg-grey-600 rounded-full flex items-center justify-center">
                <Image
                  src={examTest.exam.logo}
                  alt={`${examTest.exam.name} logo`}
                  width={27}
                  height={27}
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-2 flex-grow">
                <h5 className="text-xs font-normal text-secondary-300 uppercase">
                  {examTest.exam.name}
                </h5>
                <h3 className="text-sm font-normal text-muted-500">
                  {examTest.title}
                </h3>
              </div>
            </div>
          </div>
          <Image src={Cloud} alt="cloud icon" className="absolute top-0 left-[200px]" />
          <Image src={SmallCloud} alt="small cloud icon" className="absolute bottom-8 left-[200px]" />
          
        </div>
        <div className="w-full hidden md:flex items-end justify-end">
          <Image src={ShareIcon} alt="share icon" />
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-3">
        <h3 className="text-sm font-normal text-[#292D32]">
          Share your result
        </h3>
        <nav className="flex flex-wrap items-start justify-start gap-4 w-full">
          {referralSocialLinks.map((link) => (
            <div
              key={link.id}
              className="flex flex-col items-center justify-center gap-1"
            >
              <Link
                href={link.href}
                target="_blank"
                className="w-12 h-12 bg-grey-100 rounded-full flex items-center justify-center"
              >
                <Image
                  src={link.icon}
                  alt="social link"
                  width={20}
                  height={20}
                />
              </Link>
              <span className="text-sm font-normal text-[#292D32]">
                {link.name}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-12 h-12 bg-grey-100 rounded-full flex items-center justify-center">
              <Image
                src={"/icons/tiktok.svg"}
                alt="save icon"
                width={20}
                height={20}
              />
            </div>
            <span className="text-sm font-normal text-[#292D32]">
              Save Image
            </span>
          </div>
        </nav>
      </div>
    </Card>
  );
};

export default ShareResult;
