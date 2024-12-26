"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { examOptions } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select, { SingleValue } from "react-select";

interface ExamOption {
  value: string;
  label: string;
}

const formattedExamOptions: ExamOption[] = examOptions.map((option) => ({
  value: option.id,
  label: option.name,
}));

// Define the options for subjects and years
const subjectOptions: ExamOption[] = [
  { value: "MTH", label: "Mathematics" },
  { value: "ENG", label: "English" },
  // Add more subjects as needed
];

const yearOptions: ExamOption[] = [
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  // Add more years as needed
];

const StartPracticeSearch: React.FC = () => {
  const [selectedExam, setSelectedExam] =
    useState<SingleValue<ExamOption>>(null);
  const [selectedSubject, setSelectedSubject] =
    useState<SingleValue<ExamOption>>(null);
  const [selectedYear, setSelectedYear] =
    useState<SingleValue<ExamOption>>(null);
  const router = useRouter();

  const handleChangeExam = (option: SingleValue<ExamOption>) => {
    setSelectedExam(option);
  };

  const handleChangeSubject = (option: SingleValue<ExamOption>) => {
    setSelectedSubject(option);
  };

  const handleChangeYear = (option: SingleValue<ExamOption>) => {
    setSelectedYear(option);
  };

  const handleSearch = () => {
    const query = {
      exam: selectedExam?.value || "",
      subject: selectedSubject?.value || "",
      year: selectedYear?.value || "",
    };

    const queryString = new URLSearchParams(query).toString();
    router.push(`/dashboard/practice?${queryString}`);
  };

  const filterOption = (option: ExamOption, inputValue: string) => {
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  return (
    <Card className="p-4 border-grey-300 rounded-2xl bg-authbg bg-cover bg-no-repeat flex flex-col items-start justify-start gap-6">
      <CardHeader className="px-0 py-0 items-center justify-between gap-5 lg:flex-row space-y-0 w-full">
        <h1 className="text-xl font-medium text-muted-500">
          Start your practice 💪🏼
        </h1>
        <Button
          variant={"unstyled"}
          className="bg-primary-400 text-white w-fit px-9 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hidden lg:inline-flex"
          onClick={handleSearch}
        >
          Search
        </Button>
      </CardHeader>
      <CardContent className="w-full px-0 pb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label
            htmlFor="exam_type"
            className="text-sm font-normal text-muted-500"
          >
            Exam Type
          </label>
          <Select
            id="exam_type"
            options={formattedExamOptions}
            value={selectedExam}
            onChange={handleChangeExam}
            placeholder="WAEC, GRE....."
            className="w-full"
            filterOption={filterOption}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label
            htmlFor="subject"
            className="text-sm font-normal text-muted-500"
          >
            Subject
          </label>
          <Select
            id="subject"
            options={subjectOptions}
            value={selectedSubject}
            onChange={handleChangeSubject}
            placeholder="MTH, ENG....."
            className="w-full"
            filterOption={filterOption}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label htmlFor="year" className="text-sm font-normal text-muted-500">
            Year
          </label>
          <Select
            id="year"
            options={yearOptions}
            value={selectedYear}
            onChange={handleChangeYear}
            placeholder="2021, 2022....."
            className="w-full"
            filterOption={filterOption}
          />
        </div>
      </CardContent>
      <Button
        variant={"unstyled"}
        className="bg-primary-400 text-white w-fit px-9 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 lg:hidden"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Card>
  );
};

export default StartPracticeSearch;
