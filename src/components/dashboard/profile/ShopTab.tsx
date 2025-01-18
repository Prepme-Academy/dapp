"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useUserInfo } from "@/lib/actions";
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ShopTab: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      <ShopCollectables />
      <Card className="w-full px-3 py-5 border-gray-200 gap-5 flex flex-col md:flex-row items-start justify-between">
        <div className="flex flex-col md:flex-row md:items-center justify-start gap-2">
          <Image
            src="/icons/dashboard/fire.svg"
            alt="fire icon"
            width={32}
            height={32}
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <h4 className="text-base font-medium text-muted-500">
              Streak Freeze
            </h4>
            <p className="text-xs font-normal text-grey">
              Streak freeze keeps your streak preserved for one complete day of
              non-activity.
            </p>
          </div>
        </div>
        <Button
          variant={"unstyled"}
          className="bg-primary-400 text-white gradient-border w-fit h-8 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 inline-flex gap-1"
          disabled
        >
          <span>Get 1 for</span>{" "}
          <Image
            src="/icons/dashboard/bolt.svg"
            alt="bolt icon"
            width={14}
            height={14}
            priority
          />{" "}
          <span>300 </span>
        </Button>
      </Card>
      <Card className="w-full px-3 py-5 border-gray-200 gap-5 flex flex-col items-start justify-start">
        <div className="flex flex-col md:flex-row md:items-center justify-start gap-2">
          <Image
            src="/icons/dashboard/bolt.svg"
            alt="bolt icon"
            width={32}
            height={32}
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <h4 className="text-base font-medium text-muted-500">Buy XP</h4>
            <p className="text-xs font-normal text-grey">
              Get more XP and enjoy your game to the fullest
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <button
            type="button"
            disabled
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Card className="w-full p-3 border-gray-200 gap-2 flex flex-col items-start justify-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F0F8FF]">
                <Image
                  src="/icons/dashboard/bolt.svg"
                  alt="bolt icon"
                  width={18}
                  height={18}
                />
              </div>
              <h4 className="text-sm font-normal text-muted-500">
                Get 1500 XP for
              </h4>
              <p className="text-xs font-normal flex items-center justify-start text-muted-400 gap-2">
                <Image
                  src="/icons/logo-oc.svg"
                  width={20}
                  height={20}
                  alt="Open Campus Logo"
                />
                <span>0.001 EDU</span>
              </p>
            </Card>
          </button>
          <button
            type="button"
            disabled
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Card className="w-full p-3 border-gray-200 gap-2 flex flex-col items-start justify-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F0F8FF]">
                <Image
                  src="/icons/dashboard/bolt2.svg"
                  alt="bolt icon"
                  width={18}
                  height={18}
                />
              </div>
              <h4 className="text-sm font-normal text-muted-500">
                Get 3500 XP for
              </h4>
              <p className="text-xs font-normal flex items-center justify-start text-muted-400 gap-2">
                <Image
                  src="/icons/logo-oc.svg"
                  width={20}
                  height={20}
                  alt="Open Campus Logo"
                />
                <span>0.51 EDU</span>
              </p>
            </Card>
          </button>
          <button
            type="button"
            disabled
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Card className="w-full p-3 border-gray-200 gap-2 flex flex-col items-start justify-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F0F8FF]">
                <Image
                  src="/icons/dashboard/bolt3.svg"
                  alt="bolt icon"
                  width={18}
                  height={18}
                />
              </div>
              <h4 className="text-sm font-normal text-muted-500">
                Get 7000 XP for
              </h4>
              <p className="text-xs font-normal flex items-center justify-start text-muted-400 gap-2">
                <Image
                  src="/icons/logo-oc.svg"
                  width={20}
                  height={20}
                  alt="Open Campus Logo"
                />
                <span>1.500 EDU</span>
              </p>
            </Card>
          </button>
        </div>
      </Card>
      <Card className="w-full px-3 py-5 border-gray-200 gap-5 flex flex-col items-start justify-start">
        <div className="flex flex-col md:flex-row md:items-center justify-start gap-2">
          <Image
            src="/icons/dashboard/hourglass.svg"
            alt="bolt icon"
            width={32}
            height={32}
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <h4 className="text-base font-medium text-muted-500">Get Timer</h4>
            <p className="text-xs font-normal text-grey">
              Get more XP and enjoy your game to the fullest
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <button
            type="button"
            disabled
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Card className="w-full p-3 border-gray-200 gap-2 flex flex-col items-start justify-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F0F8FF]">
                <Image
                  src="/icons/dashboard/bolt.svg"
                  alt="bolt icon"
                  width={18}
                  height={18}
                />
              </div>
              <h4 className="text-sm font-normal text-muted-500">
                Get 1500 XP for
              </h4>
              <p className="text-xs font-normal flex items-center justify-start text-muted-400 gap-2">
                <Image
                  src="/icons/logo-oc.svg"
                  width={20}
                  height={20}
                  alt="Open Campus Logo"
                />
                <span>0.001 EDU</span>
              </p>
            </Card>
          </button>
          <button
            type="button"
            disabled
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Card className="w-full p-3 border-gray-200 gap-2 flex flex-col items-start justify-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F0F8FF]">
                <Image
                  src="/icons/dashboard/bolt2.svg"
                  alt="bolt icon"
                  width={18}
                  height={18}
                />
              </div>
              <h4 className="text-sm font-normal text-muted-500">
                Get 3500 XP for
              </h4>
              <p className="text-xs font-normal flex items-center justify-start text-muted-400 gap-2">
                <Image
                  src="/icons/logo-oc.svg"
                  width={20}
                  height={20}
                  alt="Open Campus Logo"
                />
                <span>0.51 EDU</span>
              </p>
            </Card>
          </button>
          <button
            type="button"
            disabled
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Card className="w-full p-3 border-gray-200 gap-2 flex flex-col items-start justify-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F0F8FF]">
                <Image
                  src="/icons/dashboard/bolt3.svg"
                  alt="bolt icon"
                  width={18}
                  height={18}
                />
              </div>
              <h4 className="text-sm font-normal text-muted-500">
                Get 7000 XP for
              </h4>
              <p className="text-xs font-normal flex items-center justify-start text-muted-400 gap-2">
                <Image
                  src="/icons/logo-oc.svg"
                  width={20}
                  height={20}
                  alt="Open Campus Logo"
                />
                <span>1.500 EDU</span>
              </p>
            </Card>
          </button>
        </div>
      </Card>
    </div>
  );
};

const ShopCollectables = () => {
  const { user } = usePrivy();
  const router = useRouter();
  const authUserId = user?.id || "";
  const address = user?.wallet?.address || "";
  const { data: fetchedUserInfo, isLoading: userInfoLoading } =
    useUserInfo(authUserId,address);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <h2 className="text-lg md:text-xl font-medium text-muted-500">
        My Collectibles
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card
          onClick={() =>
            router.push(
              `/dashboard/streak/${fetchedUserInfo?.id || `1212e12e2cq331ce`}`
            )
          }
          className="min-h-36 p-3 shadow-cardshadow border-gray-200  flex flex-col items-center justify-center gap-4"
        >
          <Image
            src="/icons/dashboard/fire.svg"
            alt="fire icon"
            width={40}
            height={40}
            priority
          />
          <h2 className="text-center text-base font-medium text-muted-500">
            Streak Freeze
          </h2>
          <h3 className="text-base font-medium text-primary-500 text-center">
            {userInfoLoading ? (
              <div className="w-6 aspect-auto bg-gray-300 animatin-pulse" />
            ) : (
              fetchedUserInfo?.totalStreaks || 0
            )}
          </h3>
        </Card>
        <Card className="min-h-36 p-3 shadow-cardshadow border-gray-200  flex flex-col items-center justify-center gap-4">
          <Image
            src="/icons/dashboard/bolt.svg"
            alt="bolt icon"
            width={40}
            height={40}
            priority
          />
          <h2 className="text-center text-base font-medium text-muted-500 uppercase">
            xp
          </h2>
          <h3 className="text-base font-medium text-primary-500 text-center">
            {userInfoLoading ? (
              <div className="w-6 aspect-auto bg-gray-300 animatin-pulse" />
            ) : (
              fetchedUserInfo?.totalXp || 0
            )}
          </h3>
        </Card>
        <Card className="min-h-36 p-3 shadow-cardshadow border-gray-200  flex flex-col items-center justify-center gap-4">
          <Image
            src="/icons/dashboard/bolt.svg"
            alt="bolt icon"
            width={40}
            height={40}
            priority
          />
          <h2 className="text-center text-base font-medium text-muted-500">
            Timer
          </h2>
          <h3 className="text-base font-medium text-primary-500 text-center">
            0
          </h3>
        </Card>
      </div>
    </div>
  );
};

export default ShopTab;
