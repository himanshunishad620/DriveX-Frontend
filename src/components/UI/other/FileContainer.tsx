import React from "react";
import type { FileData } from "../../../types/ComponentsProps";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import FileCard from "./FIleCard";
import { useGetStorageQuery } from "../../../api/fileApi";
type Props = {
  list: FileData[];
};
const FileContainer: React.FC<Props> = (props) => {
  const { isLoading } = useGetStorageQuery(null);
  if (isLoading)
    return (
      <DotLottieReact
        className="h-100 w-full"
        src="/loading.lottie"
        loop
        autoplay
      />
    );
  return (
    <>
      {props.list.length !== 0 ? (
        <div className="grid w-full grid-cols-2 gap-5 py-2 md:grid-cols-5">
          {props.list?.map((item: FileData, ind: number) => (
            <FileCard {...item} key={ind} />
          ))}
        </div>
      ) : (
        <>
          <DotLottieReact
            className="h-60"
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
    </>
  );
};

export default FileContainer;
