import { useLocation, useNavigate } from "react-router-dom";
import illustration from "../../assets/Illustration.svg";
import logo from "../../assets/Logo.svg";
import Button from "../../components/UI/reusable/Button";
import TextInput from "../../components/UI/reusable/TextInput";
import useFormHook from "../../hooks/useFormHook";
import { useToast } from "../../hooks/useToast";
import { useResetPasswordMutation } from "../../api/authApi";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const query = new URLSearchParams(location.search);
  const token = query.get("token");
  const { values, handleChange } = useFormHook({
    password: "",
    confirmPassword: "",
  });
  const { showSuccess, showError } = useToast();
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.confirmPassword.trim() !== values.password.trim()) {
      return showError("Password And Confirm Password Not Matched!");
    }
    try {
      const res = await resetPassword({ ...values, token }).unwrap();
      showSuccess(res.msg);
      navigate("./../../auth");
    } catch (error: any) {
      showError(error.data.msg);
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
          className="shadow-3d flex w-90 flex-col items-center justify-center gap-2 rounded-xl bg-white p-10"
        >
          <h1 className="text-2xl font-semibold text-blue-500">
            Reset Password
          </h1>
          <TextInput
            type="password"
            label="Password"
            name="password"
            value={values.password}
            placeHolder="e.g. Abcd@123"
            size="md"
            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            parentWidth={true}
            helperText="Enter your new password."
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
            helperText="Again enter your new password."
            required={true}
            onChange={handleChange}
          />

          {/* </div> */}
          <Button
            label="Reset Password"
            size="sm"
            parentWidth={true}
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
