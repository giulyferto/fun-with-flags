import { useEffect, useState } from "react";
import { countries } from "../countries";
import { shuffleArray } from "../utils/common-utils";
import Flag from "../common/Flag";

const RandomFlag = () => {
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [shuffledFlags, setShuffledFlags] = useState([...countries]);

  useEffect(() => {
    setShuffledFlags(shuffleArray([...countries]));
    const interval = setInterval(() => {
      handleClick();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setShuffledFlags(shuffleArray([...shuffledFlags]));
    setCurrentFlagIndex((prevIndex) =>
      prevIndex === shuffledFlags.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div>
      <Flag
        width={200}
        height={100}
        code={shuffledFlags[currentFlagIndex].code}
        onClick={handleClick}
      />
    </div>
  );
};

export default RandomFlag;
