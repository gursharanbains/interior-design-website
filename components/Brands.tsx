import { brandData } from "@/data";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="section-container padding-container mt-6">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {brandData.map((brand, idx) => {
          const { logoHref } = brand;
          return (
            <div className="flex items-center justify-center p-6">
              <Image
                src={logoHref}
                alt="brand logo"
                width={150}
                height={100}
                key={idx}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
