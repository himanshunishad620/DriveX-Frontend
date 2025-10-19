import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound: React.FC = () => {
  return (
    <DotLottieReact
      className="h-full w-full"
      src="/pagenotfound.lottie"
      loop
      autoplay
    />
  );
};

export default NotFound;
