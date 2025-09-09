import { useState } from "react";
import type { FormValues } from "../types/HookProps";

export default function useFormHook<T extends FormValues>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
  setValues((pre)=>({...pre,[e.target.name]:e.target.value}))
};
  return { values, handleChange };
}
