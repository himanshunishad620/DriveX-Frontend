import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
// import { FaSpinner } from "react-icons/fa";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-white">
      <DotLottieReact
        className="h-100 w-full"
        src="/loading.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Loader;
