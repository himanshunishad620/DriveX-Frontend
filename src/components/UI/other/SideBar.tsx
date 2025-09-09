import React from "react";
import Logo from "./../../../assets/Logo2.svg";
import Illustration from "./../../../assets/Illustration2.svg";
import { MdDashboard } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { FaFileImage } from "react-icons/fa6";
import { FaFileCircleQuestion } from "react-icons/fa6";
import type { NavItemProps } from "../../../types/ComponentsProps";
import NavItems from "./NavItems";
import LightButton from "../reusable/LightButton";
import { useAuthContext } from "../../../context/AuthProvider";
import { useLogoutMutation } from "../../../api/authApi";
import { MdOutlineLogout } from "react-icons/md";
import { useToast } from "../../../hooks/useToast";
import IconButton from "../reusable/IconButton";
import { BiX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const navItems: NavItemProps[] = [
  {
    label: "Dashboard",
    route: ".",
    icon: MdDashboard,
  },
  {
    label: "Document",
    route: "document",
    icon: HiDocumentText,
  },
  {
    label: "Image",
    route: "image",
    icon: FaFileImage,
  },
  {
    label: "Media",
    route: "media",
    icon: FaPhotoVideo,
  },
  {
    label: "Others",
    route: "other",
    icon: FaFileCircleQuestion,
  },
];

type Props = {
  handleSideBarStyleToggle: () => void;
  sideBarStyleToggle: string;
};

const SideBar: React.FC<Props> = (props) => {
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();
  const { doLogout } = useAuthContext();
  const { showSuccess, showError } = useToast();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/", { replace: true });
      doLogout();
      showSuccess("Logged Out SUccessfuly!");
    } catch (error) {
      showError("Something Went Wrong!");
      console.log(error);
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 z-6 block h-full overflow-x-hidden duration-200 ${props.sideBarStyleToggle} bg-white md:relative md:w-1/4`}
    >
      <div className="absolute top-3.5 right-3.5 block md:hidden">
        <IconButton
          iconColor="text-blue-500 "
          icon={BiX}
          onClick={props.handleSideBarStyleToggle}
        />
      </div>
      <img className="m-10 w-40" src={Logo} alt="" />
      <ul
        onClick={props.handleSideBarStyleToggle}
        className="flex w-full flex-col gap-4"
      >
        {navItems.map((item) => {
          return (
            <NavItems
              key={item.label}
              label={item.label}
              route={item.route}
              icon={item.icon}
            />
          );
        })}
      </ul>
      <div className="my-6 flex w-full justify-center">
        <LightButton
          label="logout"
          isLoading={isLoading}
          onClick={handleLogout}
          size="md"
          icon={MdOutlineLogout}
        />
      </div>
      <img
        className="absolute bottom-3 left-[50%] w-50 translate-x-[-50%] transform"
        src={Illustration}
        alt=""
      />
    </nav>
  );
};

export default SideBar;
