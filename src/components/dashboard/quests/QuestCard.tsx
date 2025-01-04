import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "lucide-react";
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
      <CardContent className="p-0 flex flex-col items-start justify-start gap-y-3">
        {quests.map((quest) => (
          <Card
            key={quest.id}
            className={cn(
              "w-full px-3 py-1 flex items-start justify-start gap-x-3 border-primary-200",
              quest.isActive === false && quest.isCompleted === false
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-auto"
            )}
          >
            <Image
              src="/icons/dashboard/box.svg"
              alt="quest box"
              width={32}
              height={32}
            />
            <div className="flex flex-col items-start justify-start gap-2  w-full">
              <div className="flex items-center justify-between w-full">
                <h4 className="text-sm font-medium text-muted-800">
                  {quest.title}
                </h4>
                <div className="flex gap-2">
                  {quest.isActive && <Badge className="text-blue-500" />}
                  {quest.isCompleted && (
                    <Image
                      src="/icons/dashboard/badge.png"
                      alt="badge icon"
                      width={18}
                      height={18}
                      priority
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
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
