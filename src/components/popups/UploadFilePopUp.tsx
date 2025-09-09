import React from "react";
import FileUploader from "../UI/other/FileUploader";
import type { UploadFilePopUpProps } from "../../types/ComponentsProps";
import UploadingList from "../UI/other/UploadingList";

const UploadFilePopUp: React.FC<UploadFilePopUpProps> = (props) => {
  return (
    <div className="fixed top-0 left-0 z-11 flex h-screen w-screen flex-col items-center justify-center bg-black/40 md:flex-row">
      <FileUploader setUploadFileToggle={props.setUploadFileToggle} />
      <UploadingList />
    </div>
  );
};

export default UploadFilePopUp;
