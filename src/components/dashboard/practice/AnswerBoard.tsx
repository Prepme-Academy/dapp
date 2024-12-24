"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AnswerBoard: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center justify-start gap-8 py-4 px-4">
      <div className="w-full flex flex-col items-center justify-start">
        <div className="w-full flex items-center justify-end lg:w-fit lg:absolute lg:right-10 lg:top-5">
          <div className="w-fit bg-white border-2 border-[#FF5876] rounded-lg min-h-9 px-4 text-lg md:text-xl font-medium text-muted-500 flex items-center justify-center">
            <span> 00 : </span>
            <span> 29 : </span>
            <span> 59 </span>
          </div>
        </div>
        <div className="w-full max-w-[838px] flex items-center justify-start gap-2">
          <Button
            variant={"unstyled"}
            className="flex items-center justify-start gap-2 text-base font-normal text-[#334058]"
            onClick={() => router.replace("/dashboard/analysis")}
          >
            <X />
            <span> Close</span>
          </Button>
          <Progress value={1} className="w-full" />
          <span className="text-base font-normal text-[#334058]">1/50</span>
        </div>
      </div>
      <Card className="w-full max-w-[635px] mx-auto px-3 py-4 border-grey-500 space-y-3 flex flex-col items-start justify-start">
        <h2 className="w-full text-center text-lg md:text-xl font-medium text-muted-500">
          Moving from left to right across a period, the general rise in the
          first ionization energy can be attributed to the ....
        </h2>
        <div className="space-y-2 w-full">
          {[
            "Increase in screening effect",
            "Increase in nuclear charge",
            "Decrease in screening effect",
            "Decrease in nuclear charge",
          ].map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 border p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="radio"
                name="answer"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">
                {String.fromCharCode(65 + index)}. {option}
              </span>
            </label>
          ))}
        </div>
      </Card>
      <Card className="w-full max-w-[794px] p-3 bg-grey-200 border-grey-200 space-y-3 flex flex-col items-center justify-center">
        <h3 className="text-sm font-normal text-muted-500 text-center flex items-center justify-center gap-2 w-full">
          <Image
            src="/icons/dashboard/questroute.svg"
            alt="quest icon"
            width={16}
            height={16}
          />
          <span> Question route</span>
        </h3>
        <div className="grid grid-cols-10 gap-2">
          {Array.from({ length: 50 }, (_, i) => (
            <button
              key={i}
              className={`p-2 text-center border rounded-md ${
                i === 0 ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </Card>
      <div className="flex items-center justify-between pt-6 w-full max-w-[794px] border-t border-grey-200">
        <Button
          type="button"
          variant={"unstyled"}
          // onClick={() => router.back()}
          className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-9 px-9 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:pointer-events-auto disabled:!cursor-not-allowed transition-all duration-300"
          disabled
        >
          Previous
        </Button>

        <Button
          variant={"unstyled"}
          className="bg-primary-400 text-white w-fit px-6 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AnswerBoard;
