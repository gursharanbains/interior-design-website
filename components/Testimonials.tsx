import { testimonialData } from "@/data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="section-container padding-container">
      <div className="bg-accent-light rounded-4xl mt-6 px-8 py-16 flex flex-col items-center text-center gap-12">
        <h2 className="lg:max-w-[30%] text-4xl">What People Think About Us</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {testimonialData.map((testimonial, idx) => (
            <Testimonial key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ITestimonialProps {
  name: string;
  city: string;
  country: string;
  description: string;
  avatarHref: string;
}

const Testimonial = ({
  name,
  city,
  country,
  description,
  avatarHref,
}: ITestimonialProps) => {
  return (
    <div className="bg-white rounded-3xl px-6 py-10 flex flex-col gap-4">
      <div className="flex gap-4">
        <Image src={avatarHref} width={50} height={50} alt="avatar" />
        <div className="flex flex-col gap-2">
          <h4>{name}</h4>
          <p className="font-extralight text-sm">
            {city}, {country}
          </p>
        </div>
      </div>
      <p className="text-sm font-light text-left">{description}</p>
    </div>
  );
};

export default Testimonials;
