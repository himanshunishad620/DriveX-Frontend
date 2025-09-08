// import { FaSpinner } from "react-icons/fa";
// import { FiUploadCloud } from "react-icons/fi";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import type { IconButtonProps } from "../../../types/ComponentsProps";
const IconButton: React.FC<IconButtonProps> = (props) => {
  const Icon = props.icon;
  // console.log(<props.icon />);
  return (
    // <div className={`${props.shadow ? "bg-[#DFE8F9]" : null} rounded-full`}>
    <button
      onClick={props.onClick}
      type="button"
      // className="flex aspect-square h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white duration-200 hover:bg-[#DFE8F9]"
      className={`flex aspect-square h-9 w-9 cursor-pointer items-center justify-center rounded-full duration-200 ${props.bg ? "border-2 border-blue-500 bg-blue-50" : "hover:bg-[#DFE8F9]"}`}
    >
      <Icon className={`${props.iconColor} text-xl`} />
      {/* <props.icon /> */}
    </button>
    // </div>
  );
};

export default IconButton;
