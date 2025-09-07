import { useState } from "react";
import type { FormValues, HandleChange } from "../types/HookProps";

export default function useFormHook<T extends FormValues>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange:HandleChange = (e) => {
  setValues((pre)=>({...pre,[e.target.name]:e.target.value}))
};
// console.log(values)
  return { values, handleChange };
}
