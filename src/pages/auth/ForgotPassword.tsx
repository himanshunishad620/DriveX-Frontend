import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useForgotPasswordMutation } from "../../api/authApi";
import illustration from "../../assets/Illustration.svg";
import logo from "../../assets/Logo.svg";
import Button from "../../components/UI/reusable/Button";
import TextInput from "../../components/UI/reusable/TextInput";
import useFormHook from "../../hooks/useFormHook";
import { useToast } from "../../hooks/useToast";
import { useState } from "react";

const ForgotPassword: React.FC = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const { values, handleChange } = useFormHook({
    email: "",
  });
  const { showSuccess, showError } = useToast();
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(values).unwrap();
      showSuccess(res.msg);
      setIsEmailSent(true);
    } catch (error: any) {
      showError(error.data.msg);
    }
  };
  if (isEmailSent)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <IoCheckmarkDoneCircleOutline className="animate-pulse text-9xl text-blue-500" />
        <h1 className="text-2xl text-gray-400">
          Reset email sent successfuly!
        </h1>
      </div>
    );
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
          className="shadow-3d flex w-90 flex-col items-center justify-center gap-5 rounded-xl bg-white p-10"
        >
          <h1 className="text-2xl font-semibold text-blue-500">
            Forgot Password
          </h1>
          <TextInput
            type="email"
            label="Email"
            name="email"
            value={values.email}
            placeHolder="e.g. abc@mail.com"
            size="md"
            parentWidth={true}
            helperText="Please enter your registered email."
            required={true}
            onChange={handleChange}
          />

          {/* </div> */}
          <Button
            label="Get Reset Link"
            size="sm"
            parentWidth={true}
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
