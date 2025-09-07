// @ts-ignore
import * as fileIcons from "file-icons-js";
import "file-icons-js/css/style.css"; // includes colorful icons

type Props = { filename: string };

const FileIcon = ({ filename }: Props) => {
  const className = fileIcons.getClassWithColor(filename);
  //   console.log(className);
  return (
    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-gray-100">
      <i
        className={className}
        style={{
          //   height: "100%",
          //   width: "100%",
          //   backgroundColor: "red",
          //   width: "50px",
          //   fontSize: "47px", // controls actual icon size
          //   //   lineHeight: "5", // prevents box from stretching
          //   padding: 0, // removes extra spacing
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
