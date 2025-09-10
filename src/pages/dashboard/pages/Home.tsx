import CategoryItems from "../../../components/UI/other/CategoryItems";
import PieChart from "../../../components/UI/other/PieChart";
import { FaPhotoVideo } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { FaFileImage } from "react-icons/fa6";
import { FaFileCircleQuestion } from "react-icons/fa6";
import RecentUpload from "../../../components/UI/other/RecentUpload";
import { useGetStorageQuery } from "../../../api/fileApi";
import { formatToMBorGB } from "../../../helper/helperMethod";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home: React.FC = () => {
  const { data, isLoading } = useGetStorageQuery(null);
  if (isLoading)
    return (
      <DotLottieReact
        className="h-130 w-full"
        src="/loading.lottie"
        loop
        autoplay
      />
    );
  return (
    <div className="grid h-full w-full grid-cols-1 gap-5 p-3 md:grid-cols-2 md:gap-10 md:p-10">
      <div className="grid h-full w-full grid-cols-1 grid-rows-3 gap-3 md:gap-5">
        {/* storage details */}
        <div className="shadow-blue grid h-full w-full grid-cols-2 rounded-xl bg-[#407BE8]">
          <PieChart data={data?.result} />
          <div className="flex h-full w-full flex-col justify-center">
            <h2 className="text-lg font-semibold text-white">Used Storage</h2>
            <p className="text-sm font-semibold text-white">
              {formatToMBorGB(
                data?.result.document.spaceTaken +
                  data?.result.media.spaceTaken +
                  data?.result.image.spaceTaken +
                  data?.result.other.spaceTaken,
              )}
            </p>
          </div>
        </div>

        {/* category */}
        <div className="row-span-2 grid h-full w-full grid-cols-2 grid-rows-2 gap-3 md:gap-5">
          <CategoryItems
            icon={HiDocumentText}
            label="Documents"
            space={`${data?.result.document.spaceTaken}`}
            files={`${data?.result.document.noOfFiles}`}
            bgColor="#FF7474"
            time={data?.local}
          />
          <CategoryItems
            icon={FaFileImage}
            label="Images"
            space={`${data?.result.image.spaceTaken}`}
            files={`${data?.result.image.noOfFiles}`}
            bgColor="#3DD9B3"
            time={data?.local}
          />
          <CategoryItems
            icon={FaPhotoVideo}
            label="Media"
            space={`${data?.result.media.spaceTaken}`}
            files={`${data?.result.media.noOfFiles}`}
            bgColor="#F9AB72"
            time={data?.local}
          />
          <CategoryItems
            icon={FaFileCircleQuestion}
            label="Others"
            space={`${data?.result.other.spaceTaken}`}
            files={`${data?.result.other.noOfFiles}`}
            bgColor="#EEA8FD"
            time={data?.local}
          />
        </div>
      </div>
      {/* recent upload list*/}
      <RecentUpload recentUploadList={data?.result.lastUpload} />
    </div>
  );
};

export default Home;
