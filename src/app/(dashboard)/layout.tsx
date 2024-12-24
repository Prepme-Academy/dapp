import {
  DashboardHeader,
  DashboardRightSidebar,
  DashboardSidebar,
} from "@/components/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Prepme Academy | Dashboard - %s",
    default: "Prepme Academy | Dashboard",
  },
  description: "The Fun way to conquer Exams with Confidence",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="lg:h-screen flex flex-col">
      <DashboardHeader />
      <div className="flex flex-col lg:flex-row items-start lg:flex-1 lg:overflow-hidden">
        <DashboardSidebar />
        <section className="w-full lg:max-w-full lg:flex-1 p-4 lg:overflow-y-auto lg:h-full">
          {children}
        </section>
        <DashboardRightSidebar />
      </div>
    </main>
  );
}
