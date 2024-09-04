import { ICountriesOption } from "../types";
import { Dispatch, SetStateAction, useState } from "react";

interface IOptionsProps {
  options: ICountriesOption[];
  selectedOption: ICountriesOption | null;
  setSelectedOption: Dispatch<SetStateAction<ICountriesOption | null>>;
}

const Options = ({
  options,
  selectedOption,
  setSelectedOption,
}: IOptionsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      {options.map((opt) => (
        <div
          key={opt.index}
          onMouseEnter={() => setHoveredIndex(opt.index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => !selectedOption && setSelectedOption(opt)}
          style={{
            boxShadow:
              hoveredIndex === opt.index
                ? "0 0 15px rgba(0, 0, 0, 0.5)"
                : undefined,
            backgroundColor: selectedOption
              ? opt.isCorrect
                ? "#ADD899" // Green for the correct option
                : selectedOption.index === opt.index
                ? "#FF6B6B" // Red for the wrong selected option
                : "transparent"
              : "transparent",
          }}
          className={"flag-option"}
        >
          {opt.name}
        </div>
      ))}
    </div>
  );
};
export default Options;
