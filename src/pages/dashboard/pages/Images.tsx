import { useEffect, useState } from "react";
import { useGetStorageQuery } from "../../../api/fileApi";
import ToolBar from "../../../components/UI/other/ToolBar";
import type { FileData } from "../../../types/ComponentsProps";
import FileContainer from "../../../components/UI/other/FileContainer";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Images: React.FC = () => {
  const { data, isLoading } = useGetStorageQuery(null);
  const [list, setList] = useState<FileData[]>([]);
  const [rawList, setRawList] = useState<FileData[]>([]);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("./../../", { replace: true });
  };
  useEffect(() => {
    const listItems = data?.result?.files;
    if (listItems) {
      const filtered = listItems.filter((i: any) => i.fileType === "image");
      const sortedList = filtered.sort((a: FileData, b: FileData) => {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
      setList([...sortedList]);
      setRawList([...sortedList]);
    }
  }, [data, isLoading]);

  return (
    <div className="scrollbar-hide relative h-full w-full overflow-scroll px-3 md:px-10">
      <div className="sticky top-0 left-0 z-5 bg-gray-100 pb-3">
        <p className="flex items-center gap-2 py-2 text-2xl font-bold text-[#333F4E] md:py-5 md:text-3xl">
          {/* <span> */}
          <IoMdArrowBack
            className="cursor-pointer text-2xl text-[#333F4E] md:text-3xl"
            onClick={handleNavigate}
          />
          {/* </span> */}
          Images
        </p>
        <ToolBar
          setList={setList}
          list={list}
          setRawList={setRawList}
          rawList={rawList}
        />
      </div>
      <FileContainer list={list} />
    </div>
  );
};

export default Images;
