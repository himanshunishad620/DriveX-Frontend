import React from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { FaFileImage } from "react-icons/fa6";
import { FaFileCircleQuestion } from "react-icons/fa6";
import IconPlate from "../reusable/IconPlate";

import type {
  FileListItemProps,
  IconObject,
} from "../../../types/ComponentsProps";
const iconObject: IconObject = {
  document: {
    icon: HiDocumentText,
    color: "#FF7474",
  },
  image: {
    icon: FaFileImage,
    color: "#3DD9B3",
  },
  media: {
    icon: FaPhotoVideo,
    color: "#F9AB72",
  },
  other: {
    icon: FaFileCircleQuestion,
    color: "#EEA8FD",
  },
};
const RecentUploadItem: React.FC<FileListItemProps> = (props) => {
  const date = new Date(props.createdAt);

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (
    <div className="my-0 flex h-14 w-full items-center justify-between gap-4 px-3 md:my-2 md:px-7">
      <div className="flex h-full items-center gap-1 overflow-x-hidden md:gap-3">
        <IconPlate
          color={iconObject[props.fileType].color}
          icon={iconObject[props.fileType].icon}
        />
        <p className="text-sm font-semibold whitespace-nowrap text-[#333F4E]">
          {props.name}
          <br />
          <span className="mt-1 text-center text-sm font-normal text-gray-400">
            {date.toLocaleString("en-US", options)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RecentUploadItem;
