import { MdOutlineSignalCellularConnectedNoInternet4Bar } from "react-icons/md";

const Offline = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <MdOutlineSignalCellularConnectedNoInternet4Bar className="text-9xl text-gray-500" />
      <p className="text-center text-2xl font-bold text-gray-500 md:text-3xl">
        No Internet Connection
      </p>
      <p className="mx-3 text-center text-lg font-normal text-gray-500 md:mx-0 md:text-lg">
        Please make sure that you have stable internet connection
      </p>
    </div>
  );
};

export default Offline;
