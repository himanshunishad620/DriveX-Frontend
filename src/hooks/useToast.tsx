import { toast } from "react-toastify";
import WarningPopUp from "../components/popups/WarningPopUp";
import ErrorPopUp from "../components/popups/ErrorPopUp";
import SuccessPopUp from "../components/popups/SuccessPopUp";
import StartPopUp from "../components/popups/StartPopUp";

export const useToast = () => {
  const showError = (content: string) => {
    toast(<ErrorPopUp content={content} />);
  };
  const showWarning = (content: string) => {
    toast(<WarningPopUp content={content} />);
  };
  const showSuccess = (content: string) => {
    toast(<SuccessPopUp content={content} />);
  };
  const startProcess = (content: string) => {
    toast(<StartPopUp content={content} />);
  };
  return { showSuccess, showError, showWarning, startProcess };
};
