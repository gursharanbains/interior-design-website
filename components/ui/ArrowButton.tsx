import { RiArrowRightLine } from "@remixicon/react";

interface IArrowButtonProps {
  text: string;
  className?: string;
  variant?: "primary" | "accent";
}

const ArrowButton = ({
  text,
  className,
  variant = "primary",
}: IArrowButtonProps) => {
  const variantClass = variant == "primary" ? "btn-primary" : "btn-accent";
  return (
    <button
      className={`btn ${variantClass} text-lg font-[600] group max-w-[230px] whitespace-nowrap ${className} `}
    >
      {text}{" "}
      <RiArrowRightLine
        size={24}
        className={`text-2xl transition group-hover:${
          variant == "primary" ? "text-accent" : "text-primary"
        }`}
      />
    </button>
  );
};

export default ArrowButton;
