import Link from "next/link";
import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";

const tabData = [
  {
    name: "Exam Scorecard",
    path: "exam-scorecard",
  },
  {
    name: "Exam Analysis",
    path: "exam-analysis",
  },
];

interface AnalysisHeaderProps {
  id: string | string[] | undefined;
  currentTab: string;
  currentPage: number;
  pageSize: number;
  totalCount: number;
}

const AnalysisHeader: React.FC<AnalysisHeaderProps> = ({
  id,
  currentTab,
  currentPage,
  pageSize,
  totalCount,
}) => {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalCount);

  return (
    <div className="w-full flex items-center justify-between gap-4  border-b border-[#F2F2F2]">
      <nav className="w-full md:w-fit flex items-center justify-start gap-2 lg:gap-5">
        {tabData.map(({ name, path }, index) => (
          <Link
            key={index}
            href={`${id}?tab=${path}`}
            className={cn(
              "text-sm text-center font-normal px-6 lg:px-10 pb-4",
              path === currentTab
                ? "text-muted-400 border-b-2 border-primary-400"
                : "text-muted-200"
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center justify-end gap-3">
        <p className="text-xs font-normal text-[#222223] flex items-center gap-1">
          <span>{startItem} - {endItem} </span>
          <span className="text-[#747679]">of</span>
          <span>{totalCount}</span>
        </p>
        <Ellipsis className="rotate-90" />
      </div>
    </div>
  );
};

export default AnalysisHeader;
