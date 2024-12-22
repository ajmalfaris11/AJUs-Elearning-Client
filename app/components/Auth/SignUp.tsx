"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../styles/style";
import Image from "next/image";

// Validation schema using Yup for email and password validation
const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password!").min(6),
});

interface Props {
  set: (route: string) => void; // This prop will be used to change the route (page navigation)
}

const SignUp: React.FC<Props> = ({ setRoute }: any) => {
  const [show, setShow] = useState(false); // State to toggle password visibility

  // Formik initialization and handling form submission
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema, // Validation schema for the form
    onSubmit: async ({ email, password }) => {
      setRoute("Verification")
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik; // Extract Formik methods and values

  return (
    <div>
      {/* Main wrapper for the Sign up page */}
      <div className="800px:flex justify-center items-center justify-items-center">
        {/* Left side image */}
        <div className="w-[75%]">
          <Image
            src={require("../../../public/assets/login.png")}
            alt="image"
          />
        </div>

        {/* Right side Sign up form */}
        <div className="row-auto justify-center flex-col w-[100%] 800px:w-[800px] 800px:px-10">
          <h1 className={styles.title}>Join with AJUS</h1>
          {/* Sign up form */}
          <form onSubmit={handleSubmit}>
            {/* Name input field */}
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
              placeholder="Name"
              className={`${errors.name && touched.name && "border-red-600"} ${
                styles.input
              }`}
            />

            {errors.name && touched.name && (
              <span className="text-red-500 pt-2 block">{errors.name}</span>
            )}

            {/* Email input field */}
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Email"
              className={`${
                errors.email && touched.email && "border-red-600"
              } ${styles.input}`}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 pt-2 block">{errors.email}</span>
            )}

            {/* Password input field */}
            <div className="w-full relative mb-1">
              <input
                type={!show ? "password" : "text"} // Toggle password visibility
                name=""
                value={values.password}
                onChange={handleChange}
                id="password"
                placeholder="Password"
                className={`${
                  errors.password && touched.password && "border-red-600"
                } ${styles.input}`}
              />

              {/* Show/Hide password icon */}
              {!show ? (
                <AiOutlineEyeInvisible
                  className="absolute bottom-3 z-1 right-2 cursor-pointer"
                  size={20}
                  onClick={() => setShow(true)} // Toggle password visibility on click
                />
              ) : (
                <AiOutlineEye
                  className="absolute bottom-3 z-1 right-2 cursor-pointer"
                  size={20}
                  onClick={() => setShow(false)} // Toggle password visibility on click
                />
              )}
            </div>
            <div>
              {/* Display password validation error */}
              {errors.password && touched.password && (
                <span className="text-red-500 pt-2 block">
                  {errors.password}
                </span>
              )}
            </div>

            {/* Submit button */}
            <input
              type="submit"
              value="Sign Up"
              className={`${styles.button} bg-[#6126d7] `}
            />
          </form>

          {/* Alternative sign-in options */}
          <h5 className="text-center font-Poppins text-[14px] text-black dark:text-white mt-5">
            Or join with us
          </h5>
          <div className="flex items-center justify-center my-3 gap-5">
            <FcGoogle size={30} className="cursor-pointer my-3 hover:scale-110 transform transition-transform duration-300" />
            <AiFillGithub size={30} className="cursor-pointer ml-2 hover:scale-110 transform transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Sign-up redirect */}
      <h5 className="text-center font-Poppins text-[14px]">
        Already have an account?{" "}
        <span
          className="text-[#6126d7] font-medium pl-1 cursor-pointer"
          onClick={() => setRoute("Login")} // Change route to Sign-Up page
        >
          Sign in
        </span>
      </h5>
      <br />
    </div>
  );
};

export default SignUp;
