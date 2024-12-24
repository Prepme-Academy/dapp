export default function QuestionaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-authbg bg-no-repeat h-dvh overflow-auto lg:overflow-hidden flex flex-col fixed top-0 left-0 z-40 w-full bg-white">
      {children}
    </main>
  );
}
