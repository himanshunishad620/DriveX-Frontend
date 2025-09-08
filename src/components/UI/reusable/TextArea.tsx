import { useId } from "react";

export interface TextAreaProps {
  placeHolder: string;
  size?: "sm" | "md" | "lg";
  helperText?: string;
  label?: string;
  parentWidth?: boolean;
  required?: boolean;
  pattern?: string;
  name: string;
  value?: string;
  rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const uniqueId = useId();
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
      <textarea
        id={uniqueId}
        // className={`peer ${getClassName(props.size || "sm", sizeObject, baseClass)}`}
        className="w-full resize-none rounded-xl border-2 border-gray-300 bg-white p-4 text-[12px] outline-none placeholder:text-[12px] placeholder:text-gray-400 focus:border-blue-600"
        // type={props.type}
        required={props.required}
        placeholder={props.placeHolder}
        // pattern={props.pattern}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        rows={props.rows}
      />
      <p className="text-[12px] text-gray-400">{props.helperText}</p>
    </div>
  );
};

export default TextArea;
