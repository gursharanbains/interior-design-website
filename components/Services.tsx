import { servicesData } from "@/data";
import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="section-container padding-container lg:mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 transition-all duration-300">
        {servicesData.map((service, idx) => (
          <Service key={idx} {...service} />
        ))}
      </div>
    </div>
  );
};

interface IServiceProps {
  title: string;
  description: string;
  href: string;
}

const Service = ({ title, description, href }: IServiceProps) => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center hover:bg-accent-light p-10 rounded-3xl xl:aspect-square">
      <h3>{title}</h3>
      <p className="text-sm lg:max-w-[70%] font-light">{description}</p>
      <Link href={href} className="flex gap-2 text-sm group font-[600]">
        View More
        <RiArrowRightLine className="text-2xl text-accent" />
      </Link>
    </div>
  );
};

export default Services;
