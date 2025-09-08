import type { IconType } from "react-icons";
import type { HandleChange } from "./HookProps";


export interface TextInputProps {
  type: string;
  placeHolder: string;
  size?: "sm" | "md" | "lg";
  helperText?: string;
  label?: string;
  parentWidth?: boolean;
  required?: boolean;
  pattern?: string;
  name:string;
  value?:string;
  onChange:HandleChange;
}

export type UploadFilePopUpProps ={
  setUploadFileToggle:React.Dispatch<React.SetStateAction<boolean>>
}

export type ButtonProps = Required<Pick<TextInputProps, "label" | "size">> &
  Partial<Pick<TextInputProps, "parentWidth">> & {
    isLoading?: boolean;
    margin?:boolean;
    onClick?:React.MouseEventHandler<HTMLButtonElement>;
    icon?: IconType ;
  };

export interface Size {
  sm: string;
  md: string;
  lg: string;
}

export type LinKTextProps = {
  text?: string;
  linkText: string;
  targetPage: string;
  align?: "start" | "center" | "end";
};

export type TextProps = {
  text: string;
};

export interface WrapperProps {
  children: React.ReactNode; // 👈 children type
}

export type RegisterPopupProps = {
email:string,
password:string;
setShow:React.Dispatch<React.SetStateAction<boolean>>;
}

export type NavItemProps = {
  icon: IconType;   // any react-icons component type
  label: string;    // display text
  route: string;    // navigation path
};

export type CategoryItemsProps={
  icon:IconType;
  label:string;
  space:string;
  files:string;
  bgColor:string;
  time:string;
}

export type IconPlateProps={
  icon:IconType;
  color:string
}


export type FileListItemProps={
  createdAt:string;
  fileType:string;
  name:string;
  updatedAt?:string;
}

export type FileData={
  createdAt:string;
  downloadUrl:string;
  fileType:string;
  name:string;
  size:number;
  updatedAt:string;
  _id:string;
  publicId:string;
}

interface FileIcon {
  icon: IconType;
  color: string;
}

export type IconObject= {
  [key: string]: FileIcon;
}

export type RecentUploadProps={
  recentUploadList:FileListItemProps[]
}
// export type HeaderProps={
//   route:string
// }

export type IconButtonProps={
  icon:IconType;
  iconColor:string;
  onClick?:any;
  bg?:boolean
}

export type GetClassName = (m: keyof Size, n: Size, o: string) => string;
