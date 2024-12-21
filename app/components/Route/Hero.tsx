"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full py-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Left Section: Heading and Buttons */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Studying <span className="text-[#6126d7]">Online</span> is now{" "}
            much easier
          </h1>
          <p className="text-gray-600 mt-4 dark:text-white">
            AJU'S is an interesting platform that will teach you in <br />
            more an interactive way.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link
              href="/"
              className="px-6 py-3 bg-[#6126d7] text-white rounded-full font-medium hover:bg-purple-700"
            >
              Join Now
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Right Section: Image and Icons */}
        <div className="mt-10 md:mt-0 relative">
          <Image
            src={require("../../../public/assets/Hero.png")}
            alt="Student with Laptop"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
