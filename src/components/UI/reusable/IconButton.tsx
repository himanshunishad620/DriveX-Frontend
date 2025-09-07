// import { FaSpinner } from "react-icons/fa";
// import { FiUploadCloud } from "react-icons/fi";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import type { IconButtonProps } from "../../../types/ComponentsProps";
const IconButton: React.FC<IconButtonProps> = (props) => {
  const Icon = props.icon;
  // console.log(<props.icon />);
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="flex aspect-square h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white duration-200 hover:bg-[#DFE8F9]"
    >
      <Icon className={`${props.iconColor} text-xl`} />
      {/* <props.icon /> */}
    </button>
  );
};

export default IconButton;
