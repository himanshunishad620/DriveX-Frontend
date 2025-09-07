import React from "react";
import { MdOutlineCloudDone } from "react-icons/md";
type Props = {
  content: string;
};
const SuccessPopUp: React.FC<Props> = (props) => {
  return (
    <div className="shadow-3d my-1 flex h-14 w-75 items-center gap-2 rounded-xl border-3 border-green-300 bg-green-50 px-2">
      <MdOutlineCloudDone className="text-3xl text-green-500" />
      <div>
        <p className="text-[13px] font-semibold text-green-500">Successful!</p>
        <p className="mt-[-4px] text-[12px] font-medium text-green-500">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default SuccessPopUp;
