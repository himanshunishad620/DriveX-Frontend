import React, { useState } from "react";
// import Button from "../UI/reusable/Button";
// import LightButton from "../UI/reusable/LightButton";
import { FiUploadCloud } from "react-icons/fi";
import UploadIcon from "./../../../assets/uploadIcon.png";
import type { UploadFilePopUpProps } from "../../../types/ComponentsProps";
import { useFileUploadContext } from "../../../context/FileUploadProvider";
import { getFileSize } from "../../../helper/helperMethod";
import Button from "../reusable/Button";
import LightButton from "../reusable/LightButton";
import { useToast } from "../../../hooks/useToast";
import { MdClose } from "react-icons/md";

const FileUpload: React.FC<UploadFilePopUpProps> = (props) => {
  const [file, setFile] = useState<File>();
  const { uploadFile } = useFileUploadContext();
  const { showWarning } = useToast();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log("No files selected");
      return;
    }
    if (!getFileSize(e.target.files[0])) return alert("To Large file!");
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handleFileUpload = () => {
    if (!file) {
      showWarning("Please Select File!");
      return;
    }
    uploadFile(file);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div className="h-78 w-90 bg-white p-5 md:w-100">
      <p className="text-center text-lg font-bold text-[#333F4E]">
        Upload File
      </p>
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="fileUpload"
      />
      <label htmlFor="fileUpload">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="my-5 flex h-40 flex-1 cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-md border-1 border-dashed border-gray-500 bg-gray-100 duration-400 hover:bg-gray-200"
        >
          <img className="h-20 w-20" src={UploadIcon} alt="" />
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-500">Browse File</span>
          </p>
          <div className="h-4 w-9/10 overflow-hidden">
            {file && (
              <p className="text-center text-[12px] font-semibold text-gray-400">
                {file.name}
              </p>
            )}
          </div>
          <p className="text-[10px] text-red-500">
            Videos : Max Size 100MB, Others : Max Size 10MB
          </p>
        </div>
      </label>
      <div className="flex h-10 w-full justify-end gap-2">
        <div className="w-27">
          <LightButton
            parentWidth={true}
            size="sm"
            label="Cancel"
            icon={MdClose}
            onClick={() => props.setUploadFileToggle((pre) => !pre)}
          />
        </div>
        <div className="w-27">
          <Button
            icon={FiUploadCloud}
            parentWidth={true}
            size="sm"
            label="Upload"
            onClick={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
