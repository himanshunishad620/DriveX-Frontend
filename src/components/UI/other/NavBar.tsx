import React from "react";
import logo from "./../../../assets/Logo2.svg";
import LightButton from "../reusable/LightButton";
import { BiX } from "react-icons/bi";
const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 left-0 flex w-full items-center justify-between bg-white p-5">
      <img src={logo} alt="" />
      <LightButton label="SignUp" icon={BiX} size="sm" />
    </nav>
  );
};

export default NavBar;
