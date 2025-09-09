import type { IconButtonProps } from "../../../types/ComponentsProps";
const IconButton: React.FC<IconButtonProps> = (props) => {
  const Icon = props.icon;
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={`flex aspect-square h-9 w-9 cursor-pointer items-center justify-center rounded-full duration-200 ${props.bg ? "border-2 border-blue-500 bg-blue-50" : "hover:bg-[#DFE8F9]"}`}
    >
      <Icon className={`${props.iconColor} text-xl`} />
    </button>
  );
};

export default IconButton;
