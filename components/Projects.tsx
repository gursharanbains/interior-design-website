import { projectsData } from "@/data";
import { RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="section-container padding-container">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-4xl">Recent Projects</h2>
          <p className="text-[20px] leading-relaxed font-extralight lg:max-w-[60%]">
            With tools to make every part of your process more human and a
            suppor team excited to help you, getting started with us has never
            been easier.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => (
            <Project key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface IProjectProps {
  title: string;
  subTitle: string;
  href: string;
}

const Project = ({ title, subTitle, href }: IProjectProps) => {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="w-full">
        <Image src={href} alt="project image" width={600} height={600} />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl">{title}</h4>
          <p className="font-light">{subTitle}</p>
        </div>
        <div className="flex">
          <div className="rounded-full p-6 bg-accent-light hover:bg-accent transition-all duration-300">
            <RiArrowRightSLine className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
