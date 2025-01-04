import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface QuestsType {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
  percentage: number;
  category: string;
  image: string;
}

interface QuestCardProps {
  showAllLink: boolean;
  quests: QuestsType[];
}

const QuestCard: React.FC<QuestCardProps> = ({ showAllLink, quests }) => {
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
          <h3 className="text-lg font-medium text-muted-500">Achievements</h3>
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
      <CardContent
        className={cn(
          "p-0 grid grid-cols-1 items-start justify-start gap-3",
          showAllLink ? "" : "md:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {quests.map((quest) => (
          <Link
            key={quest.id}
            href="/dashboard/quests"
            className="block w-full"
            aria-disabled={
              quest.isActive === false && quest.isCompleted === false
            }
          >
            <Card
              className={cn(
                "w-full px-3 py-3 flex flex-col",
                quest.isActive === false && quest.isCompleted === false
                  ? "opacity-100 cursor-auto"
                  : "grayscale-0 opacity-100",
                showAllLink ? "lg:flex-row items-center justify-center" : "lg:min-h-52 items-start justify-start gap-3 border-primary-200"
              )}
            >
              <Image
                src={quest.image}
                alt="quest icon"
                width={68}
                height={68}
                className={`rounded-full ${
                  quest.isActive === false && quest.isCompleted === false
                    ? "grayscale opacity-30"
                    : "grayscale-0 opacity-100"
                }`}
              />
              {!showAllLink && (
                <div className="flex flex-col items-start justify-start gap-2 flex-grow">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-sm md:text-base font-medium text-muted-800">
                      {quest.title}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted-500">
                    {quest.description}
                  </p>
                  {/* <div className="w-full flex items-center gap-2">
                <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
                  <div
                    className="h-full bg-green-600 absolute"
                    style={{ width: `${quest.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-normal text-muted-500">
                  {quest.percentage}%
                </span>
              </div> */}
                </div>
              )}
            </Card>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestCard;
