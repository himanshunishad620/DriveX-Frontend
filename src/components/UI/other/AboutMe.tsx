import React from "react";
import mydp from "./../../../assets/mydp.jpg";
import { FaFile } from "react-icons/fa";
import Button from "../reusable/Button";
const AboutMe: React.FC = () => {
  return (
    <section className="w-full px-5 md:px-10">
      <h1 className="pt-2 text-center text-3xl font-semibold text-gray-600 md:text-5xl">
        About Me
      </h1>
      <div className="flex w-full flex-col gap-4 p-1 md:flex-row md:p-5">
        <div className="flex w-full items-center justify-center p-8 md:w-1/2 md:p-0">
          <img
            className="shadow-blue w-full rounded-full border-8 border-blue-500 md:w-3/7"
            src={mydp}
            alt=""
          />
        </div>
        <div className="flex w-full flex-col justify-between p-1 md:w-1/2 md:p-5">
          <p className="text-xl font-semibold text-gray-500">Hello I'm</p>
          <p className="text-4xl font-bold text-blue-500 md:text-5xl">
            Himanshu Nishad
          </p>
          <p className="text-xl font-semibold text-gray-500 md:text-2xl">
            Aspiring MERN Stack Developer
          </p>
          <i className="my-2 text-[12px] font-medium text-gray-500">
            I’m Himanshu Nishad, a passionate frontend developer who loves
            building clean, user-friendly, and impactful web applications. I
            enjoy turning ideas into real products using modern technologies
            like React, TypeScript, Tailwind, and Node.js.
            <br />
            <br />
            Drive X is one of my projects that reflects my dedication to solving
            real-world problems with simple yet powerful solutions. While users
            see it as a free and easy-to-use cloud storage, recruiters can see
            it as a showcase of my ability to design, develop, and deliver
            complete applications from scratch.
          </i>
          <a href="https://backend-u36p.onrender.com/api/file/download?url=https://res.cloudinary.com/do0rqy4oy/raw/upload/v1757482447/eez5nhxjozva0uegeyll&fileName=Himanshu_Nishad_Frontend_Developer_Resume.pdf">
            <Button label="Download Resume" size="md" icon={FaFile} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
