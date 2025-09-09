import { useGenerateOtpMutation } from "../../api/authApi";
import { useState } from "react";
import illustration from "../../assets/Illustration.svg";
import logo from "../../assets/Logo.svg";
import RegisterOtpPopUp from "../../components/popups/RegisterOtpPopUp";
import Button from "../../components/UI/reusable/Button";
import LinkText from "../../components/UI/reusable/LinkText";
import TextInput from "../../components/UI/reusable/TextInput";
import useFormHook from "../../hooks/useFormHook";
import { useToast } from "../../hooks/useToast";

const Register: React.FC = () => {
  const [generateOtp, { isLoading }] = useGenerateOtpMutation();
  const [show, setShow] = useState<boolean>(false);
  const handleSetShowToggle = () => {
    setShow(!show);
  };
  const { showSuccess, showError } = useToast();
  const { values, handleChange } = useFormHook({
    email: "",
    password: "",
    confirmPassword: "",
  });
  //   email: "mane.aryan@malldrops.com",
  //   password: "Himan@123",
  //   confirmPassword: "Himan@123",
  // });
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.confirmPassword.trim() !== values.password.trim()) {
      return showError("Password And Confirm Password Not Matched!");
    }
    try {
      const res = await generateOtp({ email: values.email }).unwrap();
      console.log(res);

      if (res) {
        showSuccess("OTP Generated Successfuly!");
        setShow(true);
      }
    } catch (error) {
      console.log(error);
      showError("Unable To Generate OTP!");
      setShow(false);
    }
  };
  return (
    <div className="flex h-full w-full">
      <div className="hidden w-1/2 flex-col justify-between bg-[#407BE8] px-40 py-20 md:flex">
        <img src={logo} className="w-40" alt="" />
        <div>
          <h1 className="text-5xl font-bold text-white">
            Manage your files <br />
            the best way
          </h1>
          <p className="mt-6 text-sm text-white">
            Awesome, we've created the perfect place for you <br />
            to store all your documents.
          </p>
        </div>
        <img src={illustration} className="w-60" alt="" />
      </div>
      <div className="flex w-full items-center justify-center bg-gray-100 md:w-1/2">
        <form
          onSubmit={handleSumbit}
          className="shadow-3d flex w-90 flex-col items-center justify-center gap-1 rounded-md bg-white p-10"
        >
          <h1 className="text-2xl font-semibold text-blue-500">Register</h1>
          <TextInput
            type="email"
            label="Email"
            name="email"
            value={values.email}
            placeHolder="e.g. abc@mail.com"
            size="md"
            parentWidth={true}
            helperText="Please enter valid email to get OTP."
            required={true}
            onChange={handleChange}
          />
          <TextInput
            type="password"
            label="Password"
            name="password"
            value={values.password}
            placeHolder="e.g. Abcd@123"
            size="md"
            parentWidth={true}
            helperText="Password must have min 8 character."
            required={true}
            onChange={handleChange}
          />
          <TextInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={values.confirmPassword}
            placeHolder="e.g. Abcd@123"
            size="md"
            parentWidth={true}
            helperText="Re-type you password."
            required={true}
            onChange={handleChange}
          />

          <Button
            label="Submit"
            size="sm"
            parentWidth={true}
            margin={true}
            isLoading={isLoading}
          />
          <LinkText
            targetPage="/auth"
            text="Already have an account?"
            linkText="Go to login"
            align="center"
          />
        </form>
      </div>
      {show && (
        <RegisterOtpPopUp
          setShow={handleSetShowToggle}
          email={values.email}
          password={values.password}
        />
      )}
    </div>
  );
};

export default Register;
