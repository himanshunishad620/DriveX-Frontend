import { Link } from "react-router-dom";
import type { LinKTextProps } from "../../../types/ComponentsProps";

const LinkText: React.FC<LinKTextProps> = (props) => {
  const align: string = "justify-" + props.align || "center";
  return (
    <div className={`my-1 flex w-full gap-x-1 ${align}`}>
      <p className="text-[12px] text-gray-500">{props.text}</p>
      <Link
        className="text-[12px] font-semibold text-blue-500 duration-300 hover:text-[#1762EF]"
        to={props.targetPage}
      >
        {props.linkText}
      </Link>
    </div>
  );
};

export default LinkText;
