import React from "react";
import LightButton from "../UI/reusable/LightButton";
import Button from "../UI/reusable/Button";
import TextInput from "../UI/reusable/TextInput";
import useFormHook from "../../hooks/useFormHook";
import { useRenameFileMutation } from "../../api/fileApi";
import { useToast } from "../../hooks/useToast";

type Props = {
  //   renameUrl: string;
  _id: string;
  fileName: string;
  handleRenameFilePopUpToggle: () => void;
};

const RenameFilePopUp: React.FC<Props> = (props) => {
  const { values, handleChange } = useFormHook({ newName: props.fileName });
  //   console.log(props.fileName);
  const [renameFile, { isLoading }] = useRenameFileMutation();
  const { showSuccess, showError } = useToast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await renameFile({
        ...values,
        fileName: props.fileName,
        _id: props._id,
      });
      showSuccess("File Renamed!");
      props.handleRenameFilePopUpToggle();
      //       console.log(res);
    } catch (error) {
      showError("Failed To Rename!");
      console.log(error);
    }
  };
  return (
    <div className="fixed top-0 left-0 z-6 flex h-screen w-screen items-center justify-center bg-black/20">
      <div className="flex flex-col justify-between gap-2 rounded-lg bg-white p-4">
        <p className="px-2 text-xl font-semibold text-gray-500">Rename File</p>
        <form className="flex flex-col gap-4 px-2" onSubmit={handleSubmit}>
          <TextInput
            label="New File Name"
            onChange={handleChange}
            placeHolder="Enter new file name"
            name="newName"
            type="text"
            value={values.newName}
            parentWidth={true}
            required={true}
            helperText="Enter new name without extension"
          />
          <div className="flex justify-between gap-2">
            <LightButton
              label="Cancel"
              size="sm"
              onClick={props.handleRenameFilePopUpToggle}
            />
            <Button label="Rename" size="sm" isLoading={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RenameFilePopUp;
