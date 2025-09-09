import React from "react";
import { useFileUploadContext } from "../../../context/FileUploadProvider";
import type { FileUpload } from "../../../types/HookProps";
import UploadingListItem from "./UploadingListItem";
import { FaRegFaceMehBlank } from "react-icons/fa6";
const UploadingList: React.FC = () => {
  const { fileUploadingArray } = useFileUploadContext();
  return (
    <div className="h-78 w-90 bg-white p-2 md:w-100 md:p-5">
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

        {fileUploadingArray.map((item: FileUpload, ind: number) => (
          <UploadingListItem key={ind} {...item} />
        ))}
      </div>
    </div>
  );
};

export default UploadingList;
