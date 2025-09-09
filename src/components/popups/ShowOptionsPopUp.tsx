import React, { useEffect, useRef } from "react";
import { MdOutlineFileDownload, MdOutlineDeleteForever } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiShareFill } from "react-icons/ri";
type Props = {
  url: string;
  handleShowOptionsToggle: () => void;
  handleDeletePopUpToggle: () => void;
  handleRenameFilePopUpToggle: () => void;
  handleShareFilePopUpToggle: () => void;
};
const ShowOptionsPopUp: React.FC<Props> = (props) => {
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    box.addEventListener("mouseleave", props.handleShowOptionsToggle);
    return () => {
      box.removeEventListener("mouseleave", props.handleShowOptionsToggle);
    };
  });
  return (
    <div
      ref={boxRef}
      className="shadow-3d absolute top-12 right-4 z-4 flex w-4/5 flex-col items-center justify-center overflow-x-hidden rounded-lg bg-white p-1"
    >
      <a
        onClick={() => props.handleShowOptionsToggle()}
        className="flex h-8 w-full items-center gap-2 border-t-1 border-gray-100 p-1 duration-200 hover:bg-green-100 [&:nth-child(1)]:border-none"
        href={props.url}
        download
      >
        <div className="flex aspect-square h-full items-center justify-center rounded-full bg-green-100">
          <MdOutlineFileDownload className="text-green-500" />
        </div>
        <p className="text-[11px] font-medium text-gray-500">Download</p>
      </a>

      <div
        onClick={props.handleRenameFilePopUpToggle}
        className="flex h-8 w-full cursor-pointer items-center gap-2 border-t-1 border-gray-300 p-1 hover:bg-orange-100 [&:nth-child(1)]:border-none"
      >
        <div className="flex aspect-square h-full items-center justify-center rounded-full bg-orange-100">
          <MdOutlinePublishedWithChanges className="text-orange-500" />
        </div>
        <p className="text-[11px] font-medium text-gray-500">Rename</p>
      </div>
      <div
        onClick={props.handleShareFilePopUpToggle}
        className="flex h-8 w-full cursor-pointer items-center gap-2 border-t-1 border-gray-300 p-1 hover:bg-pink-100 [&:nth-child(1)]:border-none"
      >
        <div className="flex aspect-square h-full items-center justify-center rounded-full bg-pink-100">
          <RiShareFill className="text-pink-500" />
        </div>
        <p className="text-[11px] font-medium text-gray-500">Share</p>
      </div>
      <div
        onClick={props.handleDeletePopUpToggle}
        className="flex h-8 w-full cursor-pointer items-center gap-2 border-t-1 border-gray-300 p-1 duration-200 hover:bg-red-100 [&:nth-child(1)]:border-none"
      >
        <div className="flex aspect-square h-full items-center justify-center rounded-full bg-red-100">
          <MdOutlineDeleteForever className="text-red-500" />
        </div>
        <p className="text-[11px] font-medium text-gray-500">Remove</p>
      </div>
    </div>
  );
};

export default ShowOptionsPopUp;
