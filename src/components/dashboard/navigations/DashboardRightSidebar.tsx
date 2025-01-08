"use client";

import { Card } from "@/components/ui/card";
import { LeaderboardCard } from "../leaderboards";
import { QuestCard } from "../quests";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AdsComponent from "./AdsComponent";
import { questsData } from "@/utils/constant";
import { usePathname } from "next/navigation";
import { EditProfile } from "../profile";
import Link from "next/link";

const DashboardRightSidebar: React.FC = () => {
  const pathname = usePathname();
  const shouldHideSidebar = /^\/dashboard\/analysis\/detail\/[^/]+$/.test(
    pathname
  );

  if (shouldHideSidebar) {
    return null;
  }

  return (
    <aside className="hidden lg:flex flex-col gap-y-4 items-start justify-start w-80 h-full bg-white p-4 border-l border-secondary-200 flex-shrink-0 overflow-y-auto relative rounded-s-3xl">
      {pathname === "/dashboard/profile" && <EditProfile />}
      {pathname !== "/dashboard/quests" &&
        pathname !== "/dashboard/profile" && (
          <QuestCard showAllLink={true} quests={questsData.slice(0, 1)} />
        )}
      {pathname !== "/dashboard/leaderboard" &&
        pathname !== "/dashboard/profile" && (
          <LeaderboardCard
            showTitle={false}
            className="border border-primary-200"
            data={[]}
          />
        )}
      <Card className="w-full p-3 border-gray-200 space-y-3 flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <Image
            src="/icons/dashboard/community.svg"
            alt="leaderboard icon"
            width={34}
            height={34}
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <h4 className="text-sm font-medium text-muted-500">
              Join the Community
            </h4>
            <p className="text-xs font-normal text-grey">
              Be part of the community{" "}
            </p>
          </div>
        </div>
        <Link
          href="https://t.me/prepmeacademy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant={"unstyled"}
            className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-8 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Join
          </Button>
        </Link>
      </Card>
      {pathname !== "/dashboard/profile" && <AdsComponent />}
    </aside>
  );
};

export default DashboardRightSidebar;
