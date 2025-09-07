import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
type Props = {
  content: string;
};
const ErrorPopUp: React.FC<Props> = (props) => {
  return (
    <div className="shadow-3d my-1 flex h-14 w-75 items-center gap-2 rounded-xl border-3 border-red-500 bg-red-50 px-2">
      <MdOutlineErrorOutline className="text-3xl text-red-500" />
      <div>
        <p className="text-[13px] font-semibold text-red-500">Error!</p>
        <p className="mt-[-4px] text-[12px] font-medium text-red-500">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default ErrorPopUp;
