import { useState } from "react";
import Button from "../reusable/Button";
import UploadFilePopUp from "../../popups/UploadFilePopUp";
import { MdOutlineAddBox } from "react-icons/md";
import IconButton from "../reusable/IconButton";
import { IoMenu } from "react-icons/io5";

// import { FaSpinner } from "react-icons/fa";
// import IconButton from "../reusable/IconButton";
type Props = {
  handleSideBarStyleToggle: () => void;
};
const Header: React.FC<Props> = (props) => {
  // const [count, setCount] = useState(0);
  const [uploadFileToggle, setUploadFileToggle] = useState<boolean>(false);
  // console.log(count);
  return (
    <div className="flex h-17 w-full items-center justify-between px-3 md:h-20 md:px-10">
      <div className="mr-[-10px] block md:hidden">
        <IconButton
          icon={IoMenu}
          iconColor="text-gray-400 scale-[1.4]"
          onClick={props.handleSideBarStyleToggle}
        />
      </div>
      <p className="text-shadow text-2xl font-semibold text-blue-500">
        Hi, Welcome!👋
      </p>
      {/* <IconButton /> */}
      <div className="shadow-blue rounded-2xl">
        <Button
          parentWidth={true}
          label="Add File"
          size="sm"
          icon={MdOutlineAddBox}
          onClick={() => setUploadFileToggle(!uploadFileToggle)}
        />
      </div>
      {uploadFileToggle && (
        <UploadFilePopUp setUploadFileToggle={setUploadFileToggle} />
      )}
    </div>
  );
};

export default Header;
