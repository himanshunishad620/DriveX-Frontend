import type { RegisterPopupProps } from "./ComponentsProps";

export type FormValues = {
  [key: string]: string | number;
};

export type HandleChange=(e:React.ChangeEvent<HTMLInputElement>)=>void

export type RegisterApi = Pick<RegisterPopupProps, "password" | "email"> & {
  otp:string
}

export type FileUpload={
  progress:number;
  name:string;
  controller:AbortController;
  cancelUpload:(abt:AbortController,id:string)=>void;
  id:string;
  size:number;
}

// export type FileDetails={
//   name:string;
//   size:number;
//   fileType:string;
// }

export type AuthContextType = {
  isAuthenticating:boolean;
  isAuthenticated: boolean;
  userId: string | null;
  // name: string | null;
  doLogin: (id: string) => void;
  doLogout: () => void;
};
