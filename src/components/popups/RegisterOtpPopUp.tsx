import Button from "../UI/reusable/Button";
import OtpInput from "../UI/reusable/OtpInput";
import { useState } from "react";
import type { RegisterPopupProps } from "../../types/ComponentsProps";
import { useRegisterMutation } from "../../api/authApi";
import LinkText from "../UI/reusable/LinkText";
import { useToast } from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";
import IconButton from "../UI/reusable/IconButton";
import { BiX } from "react-icons/bi";

const RegisterOtpPopUp: React.FC<RegisterPopupProps> = (props) => {
  const [otp, setOtp] = useState<string>("");
  const { showSuccess, showError } = useToast();
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  // console.log(props.email, props.password);
  const handleChange = (value: string) => {
    setOtp(value); // save OTP in state
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await register({
        email: props.email,
        password: props.password,
        otp,
      }).unwrap();
      showSuccess("Registered Successfuly!");
      console.log(res);
      navigate("../");
    } catch (error) {
      showError("Invalid OTP!");
      console.log(error);
    }
  };
  // const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };
  // console.log(otp);
  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/20">
      <form
        onSubmit={handleSubmit}
        className="shadow-3d relative flex flex-col items-center gap-3 rounded-2xl bg-gray-100 p-5"
      >
        <h1 className="text-2xl font-semibold text-blue-500">Enter OTP</h1>
        <p className="mt-[-12px] text-center text-[12px] text-gray-400">
          We have sent a code to
          <br />{" "}
          <span className="text-[14px] font-medium text-gray-800">
            {props.email}
          </span>
        </p>

        <OtpInput length={6} onChange={handleChange} />
        <Button
          size="sm"
          label="Submit"
          isLoading={isLoading}
          parentWidth={true}
        />
        <LinkText
          targetPage=""
          text="Did not get the OTP?"
          linkText="Resend OTP"
          align="center"
        />
        <div className="absolute top-2 right-2">
          <IconButton
            icon={BiX}
            iconColor="text-gray-400"
            onClick={() => props.setShow(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterOtpPopUp;
