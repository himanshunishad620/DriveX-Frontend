import { useId } from "react";
import type {
  GetClassName,
  Size,
  TextInputProps,
} from "../../../types/ComponentsProps";

const TextInput: React.FC<TextInputProps> = (props) => {
  const uniqueId = useId();
  const baseClass =
    " border-2 border-gray-300 bg-white px-4 outline-none placeholder:text-gray-400 placeholder:text-[12px] rounded-xl w-full focus:border-blue-600";
  const sizeObject: Size = {
    sm: "h-10 text-[12px]",
    md: "h-11 text-sm",
    lg: "h-12 text-md",
  };
  const getClassName: GetClassName = (key, sizeObject, baseClass) => {
    return sizeObject[key] + baseClass;
  };

  return (
    <div
      className={`flex flex-col focus-within:[&>label]:text-blue-500 ${props.parentWidth ? "w-full" : "w-80"} `}
    >
      <label
        className="text-[12px] font-semibold text-gray-500 peer-focus:text-amber-200"
        htmlFor={uniqueId}
      >
        {props.label}
      </label>
      <input
        id={uniqueId}
        className={`peer ${getClassName(props.size || "sm", sizeObject, baseClass)}`}
        type={props.type}
        required={props.required}
        placeholder={props.placeHolder}
        pattern={props.pattern}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      />
      <p className="text-[12px] text-gray-400">{props.helperText}</p>
    </div>
  );
};

export default TextInput;
