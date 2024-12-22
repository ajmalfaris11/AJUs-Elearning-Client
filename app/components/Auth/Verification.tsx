// Importing required dependencies and styles
import { styles } from "@/app/styles/style";
import React, { FC, useRef, useState } from "react";
import { toast } from "react-hot-toast"; // For showing notifications (not used here but included for potential use)
import { VscWorkspaceTrusted } from "react-icons/vsc"; // Trusted verification icon

// Type definition for props, including a function to set the current route
type Props = {
  setRoute: (route: string) => void;
};

// Type definition for OTP input, representing each digit as a string
type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

const Verification: FC<Props> = ({ setRoute }) => {
  // State to track invalid OTP errors
  const [invalidError, setInvalidError] = useState<boolean>(false);

  // Refs for managing focus of OTP input fields
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // State to store the OTP input values
  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  // Function to handle OTP verification
  const VerificationHandler = async () => {
    setInvalidError(true); // Simulates setting an error when verification fails
  };

  // Handles changes in OTP input fields
  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false); // Reset the error state on input change
    const newVerifyNumber = { ...verifyNumber, [index]: value };

    setVerifyNumber(newVerifyNumber);

    // Logic for moving focus between input fields
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus(); // Move to the previous field if the current one is cleared
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus(); // Move to the next field if input is valid
    }
  };

  return (
    <div className="px-10 w-[400px]">
      {/* Title for the verification page */}
      <h1 className={`${styles.title} tracking-wider`}>Verify Your Account</h1> <br />

      {/* Icon section representing account verification */}
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-[80px] rounded-full bg-[#6126d7] flex items-center justify-center">
          <VscWorkspaceTrusted size={40} className="text-white" />
        </div>
      </div>
      <br />
      <br />

      {/* OTP input fields */}
      <div className="m-auto flex items-center justify-around ">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="number"
            key={key}
            ref={inputRefs[index]}
            className={`w-[65px] h-[65px] bg-transparent border-[2.5px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
              invalidError ? "shake border-red-600" : "border-[#6126d7]"
            }`}
            placeholder=""
            maxLength={1}
            value={verifyNumber[key as keyof VerifyNumber]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <br />

      {/* Verify button */}
      <div className="w-full flex justify-center">
        <button className={`${styles.button} mt-0.5`} onClick={VerificationHandler}>
          VERIFY THE OTP
        </button>
      </div>
      <br />

      {/* Navigation link to sign-in page */}
      <h5 className="text-center font-Poppins text-[14px]">
        Go back to sign in?{" "}
        <span
          className="text-[#6126d7] font-medium pl-1 cursor-pointer hover:text-[#8c53ff]"
          onClick={() => setRoute("Login")}
        >
          Sign in
        </span>
      </h5>
      <br />
    </div>
  );
};

export default Verification;
