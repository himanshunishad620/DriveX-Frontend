import React from "react";
import { useFileUploadContext } from "../../../context/FileUploadProvider";
import type { FileUpload } from "../../../types/HookProps";
import UploadingListItem from "./UploadingListItem";
import { FaRegFaceMehBlank } from "react-icons/fa6";
const UploadingList: React.FC = () => {
  const { fileUploadingArray } = useFileUploadContext();
  // console.log(fileUploadingArray);
  // if (!fileUploadingArray.length)
  //   return <div className="h-78 w-100 bg-green-500"></div>;
  return (
    <div className="h-78 w-90 bg-white p-5 md:w-100">
      {/* {!fileUploadingArray.length && (
        <div className="w-full flex-1 bg-red-200"></div>
      )} */}
      <div className="scrollbar-hide relative h-full w-full flex-1 overflow-scroll">
        <p className="sticky top-0 left-0 z-8 mb-2 h-5 bg-white text-center text-lg font-bold text-[#333F4E]">
          Uploading
        </p>
        {!fileUploadingArray.length && (
          <div className="flex h-[calc(260px-20px)] w-full flex-col items-center justify-center gap-1 rounded-md bg-gray-100">
            <FaRegFaceMehBlank className="text-2xl text-gray-400" />
            <p className="text-[10px] font-medium text-gray-400">
              Nothing to show!
            </p>
          </div>
        )}
        {/* <div className="scrollbar-hide w-full overflow-scroll bg-red-200"> */}

        {fileUploadingArray.map((item: FileUpload, ind: number) => (
          <UploadingListItem
            key={ind}
            // id={item.id}
            // progress={item.progress}
            // name={item.name}
            // size={item.size}
            // cancelUpload={item.cancelUpload}
            // controller={item.controller}
            {...item}
          />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default UploadingList;
