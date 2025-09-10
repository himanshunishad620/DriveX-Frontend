import React from "react";
import { TbCloudUpload } from "react-icons/tb";
import { SiEasyeda } from "react-icons/si";
import { RiSecurePaymentLine } from "react-icons/ri";
const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full px-5 md:px-10">
      <h1 className="pt-2 text-center text-3xl font-semibold text-gray-600 md:text-4xl">
        Features
      </h1>
      <div className="flex w-full flex-col gap-4 p-1 md:flex-row md:p-5">
        <div className="h-full w-full rounded-xl border-1 border-blue-500 bg-blue-50 p-5 md:w-1/3">
          <TbCloudUpload className="shadow-blue h-10 w-10 rounded-md border-1 border-blue-500 bg-blue-50 p-1 text-lg text-blue-500" />
          <p className="my-3 text-lg font-semibold text-gray-600">
            Fast upload and download
          </p>
          <p className="my-2 text-sm leading-4 font-medium text-gray-400">
            Seamlessly upload, download, and share your files within seconds —
            no delays, just pure speed.
          </p>
        </div>
        <div className="h-full w-full rounded-xl border-1 border-blue-500 bg-blue-50 p-5 md:w-1/3">
          <SiEasyeda className="shadow-blue h-10 w-10 rounded-md border-1 border-blue-500 bg-blue-50 p-1 text-lg text-blue-500" />
          <p className="my-3 text-lg font-semibold text-gray-600">
            Easy to use
          </p>
          <p className="my-2 text-sm leading-4 font-medium text-gray-400">
            Designed with simplicity in mind, our platform makes managing files
            effortless for everyone.
          </p>
        </div>
        <div className="h-full w-full rounded-xl border-1 border-blue-500 bg-blue-50 p-5 md:w-1/3">
          <RiSecurePaymentLine className="shadow-blue h-10 w-10 rounded-md border-1 border-blue-500 bg-blue-50 p-1 text-lg text-blue-500" />
          <p className="my-3 text-lg font-semibold text-gray-600">
            Secure & Reliable
          </p>
          <p className="my-2 text-sm leading-4 font-medium text-gray-400">
            Your files are encrypted and safely stored, giving you full control
            and peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
