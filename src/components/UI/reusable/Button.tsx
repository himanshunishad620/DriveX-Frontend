// import type { ElementType } from "react";
import { VscBlank } from "react-icons/vsc";
import type {
  ButtonProps,
  GetClassName,
  Size,
} from "../../../types/ComponentsProps";
import Spinner from "./Spinner";
import type { IconType } from "react-icons";

const Button: React.FC<ButtonProps> = (props) => {
  const Icon: IconType = props.icon || VscBlank;
  const baseClass =
    "px-4 rounded-xl bg-[#407BE8] font-medium text-white flex justify-center duration-300 hover:bg-[#1762EF] items-center";
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
        <div className="flex items-center gap-1 md:gap-2">
          {props.icon ? (
            <Icon className="text-xl" />
          ) : (
            <Icon className="hidden" />
          )}
          <p className="">{props.label}</p>
        </div>
      )}
    </button>
  );
};

export default Button;
