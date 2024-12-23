import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { questsData } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";

interface QuestCardProps {
  showAllLink: boolean;
}

const QuestCard: React.FC<QuestCardProps> = ({ showAllLink }) => {
  return (
    <Card className="w-full p-3 shadow-cardshadow border-none space-y-3">
      <CardHeader className="px-0 py-0 items-center justify-between flex-row space-y-0">
        <div className="flex items-center justify-start gap-2">
          <Image
            src="/icons/dashboard/quest.svg"
            alt="quest icon"
            width={20}
            height={20}
          />
          <h3 className="text-lg font-medium text-muted-500">Daily Quests</h3>
        </div>
        {showAllLink && (
          <Link
            href="/dashboard/quests"
            className="text-sm font-normal text-primary-400"
          >
            View all
          </Link>
        )}
      </CardHeader>
      <CardContent className="p-0 flex flex-col items-start justify-start gap-y-3">
        {questsData.map((quest) => (
          <Card
            key={quest.id}
            className="w-full px-3 py-1 flex items-start justify-start gap-x-3 border-primary-200"
          >
            <Image
              src="/icons/dashboard/box.svg"
              alt="quest box"
              width={32}
              height={32}
            />
            <div className="flex flex-col items-start justify-start gap-2  w-full">
              <h4 className="text-sm font-normal text-muted-500">
                {quest.title}
              </h4>
              <div className="w-full flex items-center gap-2">
                <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
                  <div
                    className="h-full bg-green-600 absolute"
                    style={{ width: `${quest.percentage}%` }}
                  >
                    <div className="h-0.5 bg-green-300 absolute top-1/2 left-0 w-full transform -translate-y-1/2"></div>
                  </div>
                </div>
                <span className="text-sm font-normal text-muted-500">
                  {quest.percentage}%
                </span>
              </div>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestCard;
