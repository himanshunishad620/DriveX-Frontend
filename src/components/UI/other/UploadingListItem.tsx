import React from "react";
import { FaFileArrowUp } from "react-icons/fa6";
import type { FileUpload } from "../../../types/HookProps";
import IconButton from "../reusable/IconButton";
import { BiX } from "react-icons/bi";
import { formatToMBorGB } from "../../../helper/helperMethod";

const UploadingListItem: React.FC<FileUpload> = (props) => {
  return (
    <div className="flex h-10 w-full items-center justify-between border-b-[1px] border-[#dfe8f9]">
      <div className="flex h-full w-50 items-center gap-2">
        <div className="flex aspect-square h-full items-center justify-center bg-[#DFE8F9]">
          <FaFileArrowUp className="text-xl text-[#407BE8]" />
        </div>
        <div className="scrollbar-hide overflow-x-scroll">
          <p className="text-[11px] whitespace-nowrap text-gray-500">
            {props.name}
          </p>
        </div>
      </div>
      <p className="w-13 text-[11px] text-gray-500">
        {formatToMBorGB(props.size)}
      </p>
      <p className="w-8 text-[11px] text-gray-500">{props.progress}%</p>
      <IconButton
        icon={BiX}
        iconColor="text-gray-500"
        onClick={() => props.cancelUpload(props.controller, props.id)}
      />
    </div>
  );
};

export default UploadingListItem;
