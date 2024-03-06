import { statsData } from "@/data";

const Stats = () => {
  return (
    <div className=" bg-accent-light">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-accent">
          {statsData.map((stat, idx) => (
            <Stat key={idx} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface IStatProps {
  name: string;
  value: string;
}

const Stat = ({ name, value }: IStatProps) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-[84px] text-accent">{value}</h1>
      <p>{name}</p>
    </div>
  );
};

export default Stats;
