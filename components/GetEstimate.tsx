import { RiPhoneLine } from "@remixicon/react";
import ArrowButton from "./ui/ArrowButton";
import Image from "next/image";

const GetEstimate = () => {
  return (
    <div className="section-container padding-container">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-0">
        <div className="flex-1 flex flex-col gap-12 justify-center">
          <h2>We Tackle The Most Challenging Designs</h2>
          <p className="lead lg:max-w-[70%]">
            The world needs innovators and problem solvers who turn challenges
            into greater opportunities. We have an insatiable curiosity about
            transformative trends challenging the status.
          </p>
          <div className="flex gap-4">
            <div className="rounded-full p-6 bg-accent-light">
              <RiPhoneLine className="text-accent" />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <p className="font-bold hover:text-accent transition duration-300">
                012345678
              </p>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <ArrowButton text="Get Free Estimate" />
        </div>
        <div className="flex-1 flex justify-left items-center rounded-tr-5xl rounded-bl-5xl overflow-hidden">
          <Image
            src="/assets/about/img.png"
            width={570}
            height={570}
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default GetEstimate;
