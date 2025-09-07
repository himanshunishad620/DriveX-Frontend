import React, { useState } from "react";
import IconButton from "../reusable/IconButton";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import type { FileData } from "../../../types/ComponentsProps";
import ShowOptionsPopUp from "../../popups/ShowOptionsPopUp";
import FileDeletePopUp from "../../popups/FileDeletePopUp";
import RenameFilePopUp from "../../popups/RenameFilePopUp";
import ShareFilePopUp from "../../popups/ShareFilePopUp";
import { formatToMBorGB } from "../../../helper/helperMethod";
import FileIcon from "../reusable/FileIcon";

const FileCard: React.FC<FileData> = (props) => {
  const downloadUrl = `http://localhost:4000/api/file/download?url=${props.downloadUrl}&fileName=${props.name}`;
  const deleteUrl = `deleteFIle?size=${props.size}&type=${props.fileType}&_id=${props._id}&public_id=${props.publicId}&fileName=${props.name}`;
  const [showOptionsToggle, setShowOptionsToggle] = useState<boolean>(false);
  const [deletePopUpToggle, setDeletePopUpToggle] = useState<boolean>(false);
  const [shareFilePopUpToggle, setShareFilePopUpToggle] =
    useState<boolean>(false);
  const [renameFilePopUp, setRenameFilePopUp] = useState<boolean>(false);
  const handleShareFilePopUpToggle = () => {
    setShareFilePopUpToggle(!shareFilePopUpToggle);
  };
  const handleRenameFilePopUpToggle = () => {
    setRenameFilePopUp(!renameFilePopUp);
  };
  const handleShowOptionsToggle = () => {
    setShowOptionsToggle(!showOptionsToggle);
  };
  const handleDeletePopUpToggle = () => {
    setDeletePopUpToggle(!deletePopUpToggle);
  };
  // console.log(props.fileType);
  return (
    <div className="relative aspect-3/2 w-full rounded-xl bg-white">
      <div className="flex items-end justify-between p-3">
        {props.fileType !== "image" ? (
          <FileIcon filename={props.name} />
        ) : (
          <img
            className="h-15 w-15 rounded-full shadow"
            src={props.downloadUrl}
            // src={Demo}
            alt=""
            loading="lazy"
          />
        )}
        <p className="text-gray-800">{formatToMBorGB(props.size)}</p>
      </div>
      <div className="scrollbar-hide mx-3 overflow-scroll">
        <p className="text-[15px] font-semibold whitespace-nowrap text-gray-800">
          {props.name}
        </p>
      </div>
      <div className="absolute top-2 right-2">
        <IconButton
          icon={PiDotsThreeOutlineVerticalLight}
          iconColor="text-gray-500"
          onClick={handleShowOptionsToggle}
        />
      </div>
      {showOptionsToggle && (
        <ShowOptionsPopUp
          url={downloadUrl}
          handleShareFilePopUpToggle={handleShareFilePopUpToggle}
          handleDeletePopUpToggle={handleDeletePopUpToggle}
          handleShowOptionsToggle={handleShowOptionsToggle}
          handleRenameFilePopUpToggle={handleRenameFilePopUpToggle}
        />
      )}
      {deletePopUpToggle && (
        <FileDeletePopUp
          name={props.name}
          deleteUrl={deleteUrl}
          handleDeletePopUpToggle={handleDeletePopUpToggle}
        />
      )}
      {renameFilePopUp && (
        <RenameFilePopUp
          handleRenameFilePopUpToggle={handleRenameFilePopUpToggle}
          _id={props._id}
          fileName={props.name}
        />
      )}
      {shareFilePopUpToggle && (
        <ShareFilePopUp
          handleShareFilePopUpToggle={handleShareFilePopUpToggle}
          url={downloadUrl}
        />
      )}
    </div>
  );
};

export default FileCard;
