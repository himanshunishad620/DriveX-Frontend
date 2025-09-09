import React from "react";
import Button from "../reusable/Button";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useAuthContext } from "../../../context/AuthProvider";

const Banner: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const handleClick = () => {
    if (isAuthenticated) navigate("./dashboard");
    else navigate("./auth");
  };
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
        <Button
          onClick={handleClick}
          label="Dashboard"
          icon={TbLayoutDashboardFilled}
          size="md"
        />
      </div>
      <div className="block w-full p-5 md:block md:w-2/5">
        <DotLottieReact
          className="h-120 w-full scale-x-[-1] transform"
          src="/landingpageanimation.lottie"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Banner;
