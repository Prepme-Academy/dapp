import { ReadyCard } from "@/components/dashboard/practice";
import { Metadata } from "next";

type Params = Promise<{ id: string }>;

export const metadata: Metadata = {
  title: "Ready",
};

export default async function ReadyScreenPage({ params }: { params: Params }) {
  const { id } = await params;

  return <ReadyCard slug={id} />;
}
