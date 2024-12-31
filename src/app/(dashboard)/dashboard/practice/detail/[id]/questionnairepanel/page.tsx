import { AnswerBoard } from "@/components/dashboard/practice";

type Params = Promise<{ id: string }>;

export default async function QuestionnairePanelPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  return (
    <div className="w-full h-full overflow-auto relative">
      <AnswerBoard id={id} />
    </div>
  );
}
