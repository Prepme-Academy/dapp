import { AnswerBoard } from "@/components/dashboard/practice";
import { examQuestions } from "@/utils/constant";

type Params = Promise<{ id: string }>;

export default async function QuestionnairePanelPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const examInfo = examQuestions.find((question) => question.id === id);

  if (examInfo)
    return (
      <div className="w-full h-full overflow-auto relative">
        <AnswerBoard examInfo={{examInfo}} />
      </div>
    );
}
