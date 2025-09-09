import { createContext, useContext } from "react";
import type { WrapperProps } from "../types/ComponentsProps";
import useFileUpload from "../hooks/useFileUpload";

const FileUploadContext = createContext<any>("");

export const FileUploadProvider: React.FC<WrapperProps> = ({ children }) => {
  const { uploadFile, fileUploadingArray } = useFileUpload();
  return (
    <FileUploadContext.Provider value={{ uploadFile, fileUploadingArray }}>
      {children}
    </FileUploadContext.Provider>
  );
};
export const useFileUploadContext = (): any => {
  const context = useContext(FileUploadContext);
  if (!context) {
    throw new Error("useAuthContext must be used inside an AuthProvider");
  }
  return context;
};
