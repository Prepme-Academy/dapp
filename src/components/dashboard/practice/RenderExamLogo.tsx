"use client";

import { examOptions } from "@/utils/constant";
import Image from "next/image";

interface RenderExamLogoProps {
  type: string;
}

const RenderExamLogo: React.FC<RenderExamLogoProps> = ({ type }) => {
  const examOption = examOptions.find((option) => option.name.toLocaleLowerCase() === type.toLocaleLowerCase());

  if (!examOption) {
    return null;
  }

  return (
    <div>
      <Image
        src={examOption.examicon}
        alt={`${type} logo`}
        width={37}
        height={37}
      />
    </div>
  );
};

export default RenderExamLogo;
