import React from "react";
import { FaFileArrowUp } from "react-icons/fa6";
import type { FileUpload } from "../../../types/HookProps";
import IconButton from "../reusable/IconButton";
import { BiX } from "react-icons/bi";
import { formatToMBorGB } from "../../../helper/helperMethod";

const UploadingListItem: React.FC<FileUpload> = (props) => {
  // console.log(props);
  return (
    //     {fileUploadingArray.map((item: FileUpload, ind: number) => (
    <div
      style={{ borderBottom: "1px solid #dfe8f9" }}
      className="flex h-10 w-full justify-between"
    >
      <div className="flex aspect-square h-full items-center justify-center bg-[#DFE8F9]">
        <FaFileArrowUp className="text-xl text-[#407BE8]" />
      </div>
      <div className="flex w-full flex-col justify-center">
        <span className="flex items-center justify-between px-3">
          <div className="w-40 overflow-hidden">
            <p className="text-[11px] whitespace-nowrap text-gray-500">
              {props.name}
            </p>
          </div>
          <p className="w-15 text-[11px] text-gray-500">
            {formatToMBorGB(props.size)}
          </p>
          <p className="mr-2 w-5 text-[11px] text-gray-500 md:mr-0">
            {props.progress}%
          </p>
          <IconButton
            icon={BiX}
            iconColor="text-gray-500"
            onClick={() => props.cancelUpload(props.controller, props.id)}
          />
        </span>
      </div>
    </div>
    // ))}
  );
};

export default UploadingListItem;
