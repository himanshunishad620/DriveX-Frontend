import React from "react";
import TextInput from "../reusable/TextInput";
import useFormHook from "../../../hooks/useFormHook";
import TextArea from "../reusable/TextArea";
import Button from "../reusable/Button";
import { IoMdSend } from "react-icons/io";
import IconButton from "../reusable/IconButton";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import type { IconType } from "react-icons";
import { RiLinkM } from "react-icons/ri";

const ContactSection: React.FC = () => {
  const { values, handleChange } = useFormHook({
    firstName: "",
    lastname: "",
    email: "",
    message: "",
  });
  console.log(values);
  return (
    <>
      <h1 className="pt-2 text-center text-3xl font-semibold text-gray-600 md:text-5xl">
        Contact Us
      </h1>
      <div className="flex w-full flex-col-reverse px-5 md:flex-row md:px-10">
        <div className="flex w-full flex-col gap-4 p-1 md:w-1/2 md:p-5 md:px-30">
          <h1 className="pt-2 text-center text-3xl font-semibold text-gray-600 md:text-left md:text-4xl md:text-blue-500">
            Get in Touch
          </h1>
          {/* <h1 className="pt-2 text-center text-3xl font-semibold text-gray-600 md:text-5xl">
        Features
      </h1> */}
          <LinkedText
            subTitle="LinkedIn"
            icon={FaLinkedinIn}
            link="https://www.linkedin.com/in/himanshunishad620"
            description="linkedin.com/in/himanshunishad620"
          />
          <LinkedText
            subTitle="Email"
            icon={MdOutlineEmail}
            link="mailto:himanshunishad620.gmail.com"
            description="himanshunishad620.gmail.com"
          />
          <LinkedText
            subTitle="Github"
            icon={FiGithub}
            link="https://github.com/himanshunishad620"
            description="github.com/himanshunishad620"
          />
          <LinkedText
            subTitle="Phone"
            icon={MdLocalPhone}
            link="tel:+91 7317767796"
            description="+91 7317767796"
          />
        </div>
        <div className="w-full p-1 md:w-1/2 md:p-5">
          <form className="mt-3 flex flex-col items-center justify-center gap-2 rounded-2xl border-1 border-blue-500 bg-blue-50 px-2 py-5 md:mt-0">
            <div className="flex w-full gap-2 md:w-5/7">
              <div className="w-1/2">
                <TextInput
                  label="First Name"
                  placeHolder="Please enter your nice name."
                  // placeHolder="Firt Name"
                  name="firstName"
                  parentWidth={true}
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <TextInput
                  label="Last Name"
                  placeHolder="Please enter your nice name."
                  // placeHolder="Last Name"
                  parentWidth={true}
                  name="lastName"
                  type="text"
                  value={values.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full md:w-5/7">
              <TextInput
                label="Email"
                placeHolder="Please enter your valid email."
                // placeHolder="Email"
                parentWidth={true}
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-5/7">
              <TextArea
                label="Message"
                // helperText="Please type your honest suggestions and feedback."
                placeHolder="Please type your honest suggestions and feedback."
                name="message"
                parentWidth={true}
                value={values.message}
                onChange={handleChange}
                rows={6}
              />
            </div>
            <div className="w-full md:w-5/7">
              <Button
                label="Submit"
                size="md"
                parentWidth={true}
                icon={IoMdSend}
                // isLoading={true}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

type Props = {
  icon: IconType;
  description: string;
  subTitle: string;
  link: string;
};
const LinkedText: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center gap-3">
      <a
        target="_blank"
        className="text-sm font-medium text-gray-500"
        href={props.link}
      >
        <IconButton icon={props.icon} iconColor="text-blue-500" bg={true} />
      </a>

      <div>
        <p className="text-md mb-[-6px] font-semibold text-blue-500">
          {props.subTitle}
        </p>
        <a
          target="_blank"
          className="flex items-center text-sm font-medium text-gray-500"
          href={props.link}
        >
          {/* <p > */}
          <RiLinkM className="text-lg" />
          {props.description}
          {/* </p> */}
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
