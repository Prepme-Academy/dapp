import one from "../assets/info/one.svg";
import two from "../assets/info/two.svg";
import three from "../assets/info/three.svg";
import four from "../assets/info/four.svg";
import InfoCard, { InfoCardProps } from "../InfoCard";

const cards: InfoCardProps[] = [
  {
    title: "Smart Practice, Real Results",
    description:
      "Access a vast library of past questions tailored to your needs. Filter by exam type, year, and subject to focus on what matters most. Practice smarter, not harder, with questions that match your exam requirements.",
    image: one,
    metadata: {
      datalabel: "",
      imageAlt: "",
      contentDataLabel: "",
    },
  },
  {
    title: "Insights That Drive Success",
    description:
      "Get a clear picture of your progress with easy-to-understand stats. Track your accuracy and speed improvements. Identify your strengths and areas for growth",
    image: two,
    metadata: {
      datalabel: "",
      imageAlt: "",
      contentDataLabel: "",
    },
  },
  {
    title: "Learn, Earn, Level Up",
    description:
      "Make every study session count. Complete daily quests to earn XP and rewards. Maintain study streaks for bonus points. Unlock exclusive NFTs for achieving milestones.",
    image: three,
    metadata: {
      datalabel: "",
      imageAlt: "",
      contentDataLabel: "",
    },
  },
  {
    title: "Compete & Achieve",
    description:
      "Join a thriving community of learners. Challenge yourself against peers worldwide. Climb the weekly leaderboard rankings. Share achievements with fellow scholars. ",
    image: four,
    metadata: {
      datalabel: "",
      imageAlt: "",
      contentDataLabel: "",
    },
  },
];

export default function InfoSection() {
  return (
    <section
      data-label="features"
      aria-label="features"
      className="px-5 md:p-10 space-y-20 my-20"
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Your go-to app to ace your exams
      </h1>
      {cards.map((details, index) => (
        <InfoCard {...details} key={index} />
      ))}
    </section>
  );
}
