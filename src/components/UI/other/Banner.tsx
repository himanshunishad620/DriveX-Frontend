import React from "react";
import Button from "../reusable/Button";
import { BiX } from "react-icons/bi";

const Banner: React.FC = () => {
  return (
    <section className="flex w-full flex-col bg-blue-50 p-5 md:flex-row md:p-10">
      <div className="w-full p-1 md:w-3/5 md:p-5">
        <p className="text-5xl font-semibold text-gray-600 md:text-7xl">
          Your files.
        </p>
        <p className="text-5xl font-semibold text-gray-600 md:text-7xl">
          Your rules.
        </p>
        <p className="text-5xl font-semibold text-gray-600 md:text-7xl">
          <span className="text-blue-500">DriveX</span> makes it simple.
        </p>
        <p className="my-4 text-lg font-medium text-gray-600 md:text-xl">
          A fast, secure cloud drive for teams and creators.
          <br />
          Sync across devices, share with precision, and keep full control of
          you data.
        </p>
        <Button label="Dashboard" icon={BiX} size="md" />
      </div>
      <div className="hidden w-full bg-red-200 p-5 md:block md:w-2/5">d</div>
    </section>
  );
};

export default Banner;
