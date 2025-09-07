import React from "react";
// import IconButton from "../reusable/IconButton";
import { FaPhotoVideo } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { FaFileImage } from "react-icons/fa6";
import { FaFileCircleQuestion } from "react-icons/fa6";
import IconPlate from "../reusable/IconPlate";

// import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

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
  //recent upload file items componenet
  const date = new Date(props.createdAt);

  // Format options
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // for AM/PM
    day: "numeric",
    month: "long", // e.g., September
    year: "numeric",
  };

  // Format in local timezone
  return (
    <div className="my-0 flex h-14 w-full items-center justify-between gap-4 px-4 md:my-2 md:px-7">
      <div className="flex h-full items-center gap-3 overflow-x-hidden">
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
      {/* <IconButton
        icon={PiDotsThreeOutlineVerticalLight}
        iconColor="text-gray-500"
      /> */}
    </div>
  );
};

export default RecentUploadItem;
