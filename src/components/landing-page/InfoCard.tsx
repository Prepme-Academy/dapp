import Image from "next/image";

export interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  metadata: {
    datalabel: string;
    imageAlt: string;
    contentDataLabel: string;
  };
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col space-y-10 w-full max-w-[66rem] mb-[7.5rem] lg:mb-[8.875rem] lg:last-of-type:mb-[6.63rem] last-of-type:mb-[8.5625rem] mx-auto lg:space-y-0 md:even:flex-row md:odd:flex-row-reverse items-center md:justify-between">
      <div className="w-full text-center space-y-5 lg:space-y-0 sm:text-start md:max-w-[26.4375rem]">
        <h1 className="text-2xl sm:text-4xl font-semibold text-blue-500">
          {title}
        </h1>
        <p>{description}</p>
      </div>

      <aside>
        <Image src={image} loading="eager" alt="" />
      </aside>
    </div>
  );
};

export default InfoCard;
