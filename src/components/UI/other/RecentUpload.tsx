import React from "react";
import RecentUploadItem from "./RecentUploadItem";
import type { RecentUploadProps } from "../../../types/ComponentsProps";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const RecentUpload: React.FC<RecentUploadProps> = (props) => {
  const list = [...props.recentUploadList].reverse();
  return (
    <div className="scrollbar-hide relative h-full w-full overflow-scroll rounded-xl bg-white">
      <p className="sticky top-0 left-0 z-5 flex items-center justify-between bg-white p-3 text-xl font-bold text-[#333F4E] md:px-7 md:py-4">
        Recent Files Uploaded
      </p>
      {list.length === 0 && (
        <>
          <DotLottieReact
            className="h-30 md:h-60"
            src="/notfound.lottie"
            loop
            autoplay
          />

          <p className="text-center text-xl font-bold text-gray-500">
            Nothing to show
          </p>
          <p className="text-center text-sm text-gray-400">
            Try uploading some files to get started
          </p>
        </>
      )}
      {list?.map((item, ind) => (
        <RecentUploadItem
          key={ind}
          name={item.name}
          fileType={item.fileType}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
};

export default RecentUpload;
