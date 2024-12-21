import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-2xl space-y-5 flex flex-col p-5 w-full">
      <Image width={70} height={70} src={icon} alt={`${title} icon`} />
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="max-w-[250px] text-muted-foreground">{description}</p>
    </div>
  );
};

export default Feature;
