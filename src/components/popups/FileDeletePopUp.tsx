import React from "react";
import Button from "../UI/reusable/Button";
import LightButton from "../UI/reusable/LightButton";
import { useDeleteFileMutation } from "../../api/fileApi";
import { useToast } from "../../hooks/useToast";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
type Props = {
  handleDeletePopUpToggle: () => void;
  deleteUrl: string;
  name: string;
};
const FileDeletePopUp: React.FC<Props> = (props) => {
  const [deleteFile, { isLoading }] = useDeleteFileMutation();
  const { showSuccess, showError } = useToast();
  const handleDeleteFile = async () => {
    try {
      await deleteFile(props.deleteUrl);
      showSuccess("File Deleted!");
    } catch (error) {
      showError("Fail To Delete!");
    } finally {
      props.handleDeletePopUpToggle();
    }
  };
  return (
    <div className="fixed top-0 left-0 z-6 flex h-screen w-screen items-center justify-center bg-black/20">
      <div className="flex w-70 flex-col justify-between gap-2 rounded-lg bg-white p-4">
        <p className="px-2 text-xl font-semibold text-gray-500">
          Confirm delete?
        </p>
        <p className="px-2 text-[11px] leading-4 text-gray-400">
          This will permanently remove it from your storage.
        </p>
        <div className="flex justify-between gap-2">
          <LightButton
            onClick={() => props.handleDeletePopUpToggle()}
            label="cancel"
            size="sm"
            icon={IoClose}
          />
          <Button
            label="delete"
            parentWidth={false}
            size="sm"
            icon={MdDelete}
            onClick={handleDeleteFile}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default FileDeletePopUp;
