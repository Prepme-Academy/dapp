import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const StartPracticeSearch: React.FC = () => {
  return (
    <Card className="p-4 border-grey-300 rounded-2xl bg-authbg bg-cover bg-no-repeat flex flex-col items-start justify-start gap-6">
      <CardHeader className="px-0 py-0 items-center justify-between gap-5 lg:flex-row space-y-0 w-full">
        <h1 className="text-xl font-medium text-muted-500">
          Start your practice 💪🏼
        </h1>
        <Button
          variant={"unstyled"}
          className="bg-primary-400 text-white w-fit px-9 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hidden lg:inline-flex"
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
          <input
            type="text"
            className="w-full h-10 border border-muted-100 rounded-lg outline-none focus:border-primary-500 placeholder:text-secondary-300 px-4"
            placeholder="WAEC, GRE....."
            id="exam_type"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label
            htmlFor="subject"
            className="text-sm font-normal text-muted-500"
          >
            Subject
          </label>
          <input
            type="text"
            className="w-full h-10 border border-muted-100 rounded-lg outline-none focus:border-primary-500 placeholder:text-secondary-300 px-4"
            placeholder="MTH, ENG....."
            id="subject"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label htmlFor="year" className="text-sm font-normal text-muted-500">
            Year
          </label>
          <input
            type="number"
            className="w-full h-10 border border-muted-100 rounded-lg outline-none focus:border-primary-500 placeholder:text-secondary-300 px-4"
            placeholder="2021, 2022....."
            id="year"
          />
        </div>
      </CardContent>
      <Button
        variant={"unstyled"}
        className="bg-primary-400 text-white w-fit px-9 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 lg:hidden"
      >
        Search
      </Button>
    </Card>
  );
};

export default StartPracticeSearch;
