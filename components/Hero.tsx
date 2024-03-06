import ArrowButton from "./ui/ArrowButton";

const Hero = () => {
  return (
    <div className="bg-hero bg-center bg-no-repeat xl:h-[840px] xl:rounded-bl-[200px]">
      <div className="section-container padding-container h-full">
        <div className="h-full flex flex-col justify-center gap-4 lg:w-[60%]">
          <h1>Let's Create Your Dream Interior</h1>
          <p className="lead lg:max-w-[70%]">
            The world needs innovators and problem solvers who turn challenges
            into greater opportunities.
          </p>
          <ArrowButton className="max-w-[200px] " text="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
