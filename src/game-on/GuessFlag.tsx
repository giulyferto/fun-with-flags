import { useEffect, useState } from "react";
import Timer from "./Timer";
import { shuffleArray } from "../utils/common-utils";
import { countries } from "../countries";
import Flag from "../common/Flag";
import { ICountriesData, ICountriesOption } from "../types";
import Options from "./Options";

const GuessFlag = () => {
  const [correctOption, setCorrectOption] = useState<ICountriesData | null>(
    null
  );

  const [options, setOptions] = useState<ICountriesOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<ICountriesOption | null>(
    null
  );

  useEffect(() => {
    if (!countries) return;
    shuffleAndSetOptions();
  }, [countries]);

  useEffect(() => {
    if (!selectedOption) return;
    setTimeout(() => {
      setSelectedOption(null);
      shuffleAndSetOptions();
    }, 600);
  }, [selectedOption]);

  const shuffleAndSetOptions = () => {
    // Shuffle the countries array and pick the first 4 items
    const shuffledCountries = shuffleArray([...countries]).slice(0, 4);

    // Select the first country as the correct option
    const correctOption = shuffledCountries[0];

    // Shuffle the options again to randomize their order
    const finalOptions = shuffleArray(
      shuffledCountries.map((country, index) => ({
        ...country,
        index,
        isCorrect: country === correctOption,
      }))
    );

    setOptions(finalOptions);
    setCorrectOption(correctOption);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2em",
        }}
      >
        <div style={{ maxWidth: "20em" }}>
          <Timer />
        </div>
      </div>
      {correctOption && (
        <div>
          <Flag width={500} height={300} code={correctOption!.code} />
          <Options
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      )}
    </div>
  );
};

export default GuessFlag;
