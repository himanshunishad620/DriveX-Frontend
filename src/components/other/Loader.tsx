import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect, useState } from "react";

const Loader: React.FC = () => {
  const [loaderText, setLoaderText] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoaderText("Server being restart!");
    }, 7000);
    setTimeout(() => {
      setLoaderText("It may take few seconds!");
    }, 15000);
    setTimeout(() => {
      setLoaderText("Almost done!");
    }, 25000);
  }, []);
  return (
    <div className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center">
        <DotLottieReact
          className="h-100 w-full"
          src="/loading.lottie"
          loop
          autoplay
        />
        <p className="mt-[-300px ] text-xl">{loaderText}</p>
      </div>
    </div>
  );
};

export default Loader;
