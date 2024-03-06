import ArrowButton from "./ui/ArrowButton";

const Connect = () => {
  return (
    <div className="section-container padding-container">
      <div className="bg-primary rounded-6xl flex flex-col items-center text-center p-16 lg:p-24 gap-4 text-white">
        <h2 className="text-white text-[40px] lg:text-[50px]">
          Want to get in touch?
        </h2>
        <p className="text-lg mb-4">Contact us and get a free consultation.</p>
        <ArrowButton text="Connect With Us" variant="accent" />
      </div>
    </div>
  );
};

export default Connect;
