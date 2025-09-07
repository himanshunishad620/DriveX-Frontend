import React, { useRef } from "react";

interface OTPInputProps {
  length?: number; // number of digits (default: 6)
  onChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onChange }) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // only digits
    if (!value) return;

    e.target.value = value[value.length - 1]; // keep only last digit

    // move to next input
    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    triggerOnChange();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const triggerOnChange = () => {
    const otp = inputsRef.current.map((input) => input?.value || "").join("");
    onChange(otp);
  };

  return (
    <div className="flex w-full justify-evenly gap-2">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          required
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="h-12 w-12 rounded-md border-2 border-gray-300 bg-white text-center text-lg font-semibold text-blue-500 shadow outline-none focus:border-blue-500"
        />
      ))}
    </div>
  );
};

export default OTPInput;
