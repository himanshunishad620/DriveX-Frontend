import React from "react";
import type { IconType } from "react-icons";
import type { CategoryItemsProps } from "../../../types/ComponentsProps";
import { formatToMBorGB } from "../../../helper/helperMethod";

const CategoryItems: React.FC<CategoryItemsProps> = (props) => {
  const Icon: IconType = props.icon;
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-white p-3">
      {/* label */}
      <h5 className="text-md mb-1 font-semibold text-[#333F4E]">
        {props.label}
      </h5>
      {/* icon+line+text  */}
      <div className="flex w-full items-center justify-center gap-3">
        {/* icon  */}
        <div className="flex aspect-square w-1/2 items-center justify-center rounded-full md:w-1/3">
          <div
            className="flex aspect-square w-3/4 items-center justify-center rounded-full md:w-7/8"
            style={{
              boxShadow: `0 0 10px ${props.bgColor}`,
              backgroundColor: `${props.bgColor}`,
            }}
          >
            <Icon className="text-2xl text-white" />
          </div>
        </div>
        {/* vertical line  */}
        <div className="flexY-1 mx-[-7px] h-full w-0 border-1 border-gray-200"></div>

        {/* text box  */}
        <div className="flex w-1/2 flex-col justify-center md:w-2/3">
          {/* space  */}
          <p className="text-[13px] text-gray-500">
            Space :
            <span className="text-[13px] font-semibold text-gray-500">
              {" "}
              {formatToMBorGB(Number(props.space))}
            </span>
          </p>
          {/* no of file  */}
          <p className="text-[13px] text-gray-500">
            Files :
            <span className="text-[13px] font-semibold text-gray-500">
              {" "}
              {props.files}
            </span>
          </p>
        </div>
      </div>
      {/* time  */}
      <p className="mt-0 text-center text-sm text-gray-400">
        Updated on {props.time}{" "}
      </p>
    </div>
  );
};

export default CategoryItems;
