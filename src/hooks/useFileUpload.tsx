import axios from "axios";
import { useState } from "react";
import type { FileUpload } from "../types/HookProps";
import { v4 as uuidv4 } from "uuid";
import { useAuthContext } from "../context/AuthProvider";
import { useGetStorageQuery } from "../api/fileApi";
import { useToast } from "./useToast";
// import { useToast } from "./useToast";

const useFileUpload = () => {
  const { userId } = useAuthContext();
  const { refetch } = useGetStorageQuery(null);
  const { startProcess, showSuccess, showError } = useToast();
  const [fileUploadingArray, setFileUploadingArray] = useState<FileUpload[]>(
    [],
  );
  const uploadFile = async (file: File) => {
    // if (!file) {
    //   return showCustom(<p>File Not Found!</p>);
    // }
    const controller = new AbortController();
    const id: string = uuidv4();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId || "");
    const newFile: FileUpload = {
      id,
      controller,
      name: file.name,
      progress: 0,
      size: file.size,
      cancelUpload: (controller: AbortController, id: string) => {
        controller.abort();
        setFileUploadingArray((pre) =>
          pre.filter((f) => {
            return f.id !== id;
          }),
        );
      },
    };
    try {
      startProcess("File Uploading Started!");
      setFileUploadingArray((pre) => [...pre, newFile]);

      await axios.post<{ url: string }>(
        "https://backend-u36p.onrender.com/api/file/upload",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
          signal: controller.signal,
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              let currentProgress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              setFileUploadingArray((pre) =>
                pre.map((f) => {
                  return f.id === newFile.id
                    ? { ...f, progress: currentProgress }
                    : f;
                }),
              );
            }
          },
        },
      );
      refetch();
      showSuccess(`File Uploaded!`);
      // console.log(res.data);
    } catch (err) {
      console.error("Upload failed", err);
      showError("File Upload Failed!");
    } finally {
      setFileUploadingArray((pre) =>
        pre.filter((f) => {
          return f.id !== id;
        }),
      );
    }
  };
  return { fileUploadingArray, uploadFile };
};

export default useFileUpload;
