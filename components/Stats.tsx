import { statsData } from "@/data";

const Stats = () => {
  return (
    <div className=" bg-accent-light lg:py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 border-accent">
          {statsData.map((stat, idx) => (
            <Stat key={idx} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="h-full w-2 bg-accent" />;
};

interface IStatProps {
  name: string;
  value: string;
}

const Stat = ({ name, value }: IStatProps) => {
  return (
    <div className="flex flex-col gap-4 text-center lg:border-r-2 lg:border-accent lg:last:border-r-0">
      <h1 className="text-[84px] text-accent">{value}</h1>
      <p>{name}</p>
    </div>
  );
};

export default Stats;
