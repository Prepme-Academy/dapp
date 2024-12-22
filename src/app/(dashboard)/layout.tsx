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
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      

      <section className="w-full flex items-center justify-center max-w-[706px] mx-auto pb-10 lg:pb-0">
        {children}
      </section>
    </main>
  );
}
