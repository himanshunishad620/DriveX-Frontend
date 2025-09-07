import React from "react";
import { GoTasklist } from "react-icons/go";
type Props = {
  content: string;
};
const StartPopUp: React.FC<Props> = (props) => {
  return (
    <div className="shadow-3d my-1 flex h-14 w-75 items-center gap-2 rounded-xl border-3 border-orange-300 bg-orange-50 px-2">
      <GoTasklist className="text-3xl text-orange-500" />
      <div>
        <p className="text-[13px] font-semibold text-orange-500">Started!</p>
        <p className="mt-[-4px] text-[12px] font-medium text-orange-500">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default StartPopUp;
