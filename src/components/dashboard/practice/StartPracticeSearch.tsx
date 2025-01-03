"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useExamTypes } from "@/lib/actions/exam.action";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";

interface ExamOption {
  value: string;
  label: string;
}

const StartPracticeSearch: React.FC = () => {
  const { data, isLoading } = useExamTypes();

  const [selectedExam, setSelectedExam] =
    useState<SingleValue<ExamOption>>(null);

  const [subjectOptions, setSubjectOptions] = useState<ExamOption[]>([]);

  const [yearOptions, setYearOptions] = useState<ExamOption[]>([]);

  const [selectedSubject, setSelectedSubject] =
    useState<SingleValue<ExamOption>>(null);

  const [selectedYear, setSelectedYear] =
    useState<SingleValue<ExamOption>>(null);

  const router = useRouter();

  useEffect(() => {
    if (selectedExam) {
      const exam = data?.data.find(
        (exam) => exam.name === selectedExam.label
      );
      if (exam) {
        setSubjectOptions(
          exam.subjects.map((subject) => ({
            value: subject.name,
            label: subject.name,
          }))
        );
        setYearOptions([]);
        setSelectedSubject(null);
        setSelectedYear(null);
      }
    }
  }, [selectedExam, data]);

  useEffect(() => {
    if (selectedSubject && selectedExam) {
      const exam = data?.data.find(
        (exam) => exam.name === selectedExam.label
      );
      const subject = exam?.subjects.find(
        (subject) => subject.name === selectedSubject.label
      );
      if (subject) {
        setYearOptions(
          subject.years.map((year) => ({
            value: year,
            label: year,
          }))
        );
      }
    }
  }, [selectedSubject, selectedExam, data]);

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
      type: selectedExam?.value || "",
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
          {isLoading ? (
            <div className="w-full h-10 rounded-lg bg-gray-300 animate-pulse" />
          ) : (
            <Select
              id="exam_type"
              options={
                data?.data.map((exam) => ({
                  value: exam.name,
                  label: exam.name,
                })) || []
              }
              value={selectedExam}
              onChange={handleChangeExam}
              placeholder="WAEC, GRE....."
              className="w-full"
              filterOption={filterOption}
            />
          )}
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
            isDisabled={!selectedExam}
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
            isDisabled={!selectedSubject}
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
