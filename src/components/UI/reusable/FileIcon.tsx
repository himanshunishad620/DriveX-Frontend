// @ts-ignore
import * as fileIcons from "file-icons-js";
import "file-icons-js/css/style.css";

type Props = { filename: string };

const FileIcon = ({ filename }: Props) => {
  const className = fileIcons.getClassWithColor(filename);
  return (
    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-gray-100">
      <i
        className={className}
        style={{
          display: "inline-flex",
          fontStyle: "normal",
          alignItems: "center",
          scale: 2,
          justifyContent: "center",
        }}
      ></i>
    </div>
  );
};
export default FileIcon;
