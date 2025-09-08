import React from "react";
import logo from "./../../../assets/Logo2.svg";
// import { BiX } from "react-icons/bi";
import Button from "../reusable/Button";
import { RiLoginBoxLine } from "react-icons/ri";
const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 left-0 z-3 flex w-full items-center justify-between bg-white px-5 py-4 md:px-15">
      <img src={logo} alt="" />
      <Button label="SignUp" icon={RiLoginBoxLine} size="sm" />
    </nav>
  );
};

export default NavBar;
