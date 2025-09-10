import React from "react";
import { TbLogin2 } from "react-icons/tb";
import { MdUploadFile } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
const HowToUse: React.FC = () => {
  return (
    <section className="w-full px-5 md:px-10">
      <h1 className="pt-2 text-center text-3xl font-semibold text-gray-600 md:text-4xl">
        How It Works
      </h1>
      <div className="flex w-full flex-col gap-4 p-1 md:flex-row md:p-5">
        <div className="h-full w-full rounded-xl border-1 border-blue-500 bg-blue-50 p-5 md:w-1/3">
          <TbLogin2 className="shadow-blue h-10 w-10 rounded-md border-1 border-blue-500 bg-blue-50 p-1 text-lg text-blue-500" />
          <p className="my-3 text-lg font-semibold text-gray-600">
            Signup & Login
          </p>
          <p className="my-2 text-sm leading-4 font-medium text-gray-400">
            Create your free account in seconds and unlock your personal cloud
            storage.
          </p>
        </div>
        <div className="h-full w-full rounded-xl border-1 border-blue-500 bg-blue-50 p-5 md:w-1/3">
          <MdUploadFile className="shadow-blue h-10 w-10 rounded-md border-1 border-blue-500 bg-blue-50 p-1 text-lg text-blue-500" />
          <p className="my-3 text-lg font-semibold text-gray-600">Upload</p>
          <p className="my-2 text-sm leading-4 font-medium text-gray-400">
            Securely upload your images, documents, and videos with just one
            click.
          </p>
        </div>
        <div className="h-full w-full rounded-xl border-1 border-blue-500 bg-blue-50 p-5 md:w-1/3">
          <IoIosShareAlt className="shadow-blue h-10 w-10 rounded-md border-1 border-blue-500 bg-blue-50 p-1 text-lg text-blue-500" />
          <p className="my-3 text-lg font-semibold text-gray-600">Share Link</p>
          <p className="my-2 text-sm leading-4 font-medium text-gray-400">
            Instantly generate a shareable link and send your files anywhere,
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
