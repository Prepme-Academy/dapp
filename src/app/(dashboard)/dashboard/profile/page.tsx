import { MyEarningTab, ShopTab } from "@/components/dashboard/profile";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Profile",
};

const tabData = [
  {
    name: "My Earnings",
    path: "earning",
  },
  {
    name: "Shop",
    path: "shop",
  },
];

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{
    tab: string | undefined;
  }>;
}) {
  const params = await searchParams;
  const currentTab = params.tab || "earning";

  const pageContent = currentTab === "earning" ? <MyEarningTab /> : <ShopTab />;

  return (
    <section className="space-y-4">
      <nav className="w-full flex items-center justify-start gap-2 lg:gap-5">
        {tabData.map(({ name, path }, index) => (
          <Link
            key={index}
            href={`profile?tab=${path}`}
            className={cn(
              "text-base md:text-lg text-center lg:text-xl font-medium px-6 lg:px-10 py-4",
              path === currentTab
                ? "text-muted-400 border-b-2 border-primary-400"
                : "text-muted-200"
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
      <Suspense key={currentTab} fallback={"loading..."}>
        {pageContent}
      </Suspense>
    </section>
  );
}
