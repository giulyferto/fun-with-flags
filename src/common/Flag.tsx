import { Image } from "antd";

interface IFlagProps {
  width: number;
  height: number;
  code: string;
  onClick?: () => void;
}
// Main Component
const Flag = ({ width, height, code, onClick }: IFlagProps) => {
  

  return (
    <Image
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        cursor: "pointer",
      }}
      onClick={onClick}
      src={`https://flags.fmcdn.net/data/flags/w580/${code.toLocaleLowerCase()}.png`}
      preview={false}
    />
  );
};

export default Flag;
