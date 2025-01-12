import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-3xl flex flex-col px-6 py-[2.5rem] w-full">
      <Image width={70} height={70} src={icon} alt={`${title} icon`} />
      <h2 className="text-2xl mb-3 mt-6 text-shaft font-semibold">{title}</h2>
      <p className="text-base text-abbey">{description}</p>
    </div>
  );
};

export default Feature;
