import React from "react";
import { TiWarningOutline } from "react-icons/ti";
type Props = {
  content: string;
};
const WarningPopUp: React.FC<Props> = (props) => {
  return (
    <div className="shadow-3d my-1 flex h-14 w-75 items-center gap-2 rounded-xl border-3 border-amber-300 bg-yellow-50 px-2">
      <TiWarningOutline className="text-3xl text-yellow-500" />
      <div>
        <p className="text-[13px] font-semibold text-yellow-500">Warning!</p>
        <p className="mt-[-4px] text-[12px] font-medium text-yellow-500">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default WarningPopUp;
