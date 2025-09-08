import React, { useState } from "react";
import { CgFacebook } from "react-icons/cg";
// import { RiFileCopyLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import IconButton from "../UI/reusable/IconButton";
import { BiX } from "react-icons/bi";
type Props = {
  handleShareFilePopUpToggle: () => void;
  url: string;
};

const ShareFilePopUp: React.FC<Props> = (props) => {
  const [copied, setCopied] = useState<boolean>(false);
  console.log(props.url);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.url);
      setCopied(true);
      // setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="fixed top-0 left-0 z-6 flex h-screen w-screen items-center justify-center bg-black/20">
      <div className="relative flex w-70 flex-col justify-between gap-2 rounded-lg bg-white p-4">
        <div className="absolute top-3 right-3">
          <IconButton
            icon={BiX}
            iconColor="text-gray-400"
            onClick={props.handleShareFilePopUpToggle}
          />
        </div>
        <p className="px-2 text-xl font-semibold text-gray-500">Share File</p>
        <p className="px-2 text-[14px] leading-4 text-gray-400">
          Share this link via
        </p>
        <div className="flex w-full justify-evenly">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${props.url}`}
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100"
          >
            <CgFacebook className="text-xl text-blue-500" />
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(props.url)}`}
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100"
          >
            <FaWhatsapp className="text-xl text-green-500" />
          </a>
          <a
            href={`https://t.me/share/url?url=${props.url}&text=Check%20this%20out!`}
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100"
          >
            <FaTelegramPlane className="text-xl text-blue-500" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${props.url}&text=Check%20this%20out!`}
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100"
          >
            <FaTwitter className="text-xl text-blue-500" />
          </a>
        </div>
        <p className="px-2 text-[14px] leading-4 text-gray-400">Or copy link</p>
        <div className="flex w-full items-center justify-between gap-1 rounded border-1 border-gray-500 p-1">
          <div className="scrollbar-hide overflow-scroll">
            <p className="px-1 text-[14px] leading-4 whitespace-nowrap text-gray-400">
              {props.url}
            </p>
          </div>
          <div onClick={handleCopy}>
            {copied ? (
              <IconButton icon={LuCopyCheck} iconColor="text-gray-500" />
            ) : (
              <IconButton icon={LuCopy} iconColor="text-gray-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareFilePopUp;
