import type { IconType } from "react-icons";
import type {
  ButtonProps,
  GetClassName,
  Size,
} from "../../../types/ComponentsProps";
import Spinner from "./Spinner";
import { VscBlank } from "react-icons/vsc";

const LightButton: React.FC<ButtonProps> = (props) => {
  const Icon: IconType = props.icon || VscBlank;
  const baseClass =
    "px-4 rounded-xl bg-[#DFE8F9] text-[#407BE8] font-semibold  flex justify-center duration-300  items-center";
  const sizeObject: Size = {
    sm: "h-10 text-sm ",
    md: "h-11 text-base ",
    lg: "h-12 text-lg ",
  };
  const getClassName: GetClassName = (key, sizeObject, baseClass) => {
    return (
      sizeObject[key] +
      baseClass +
      (props.parentWidth ? " w-full" : " w-40") +
      (props.isLoading ? " cursor-progress" : " cursor-pointer") +
      (props.margin ? " my-2" : "")
    );
  };
  return (
    <button
      onClick={props.onClick}
      disabled={props.isLoading}
      className={getClassName(props.size || "sm", sizeObject, baseClass)}
    >
      {props.isLoading ? (
        <Spinner />
      ) : (
        <div className="flex items-center gap-2">
          {props.icon ? (
            <Icon className="text-xl" />
          ) : (
            <Icon className="hidden" />
          )}
          {props.label}
        </div>
      )}
    </button>
  );
};

export default LightButton;
