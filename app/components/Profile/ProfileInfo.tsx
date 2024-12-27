import React, { FC, useState } from "react";
import { styles } from "../../../app/styles/style";
import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";
import avatarIcon from "../../../public/assets/default-user-avatar.png";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  avatar: string | null;
  user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
  const [name, setName] = useState(user.name);

  const imageHandler = async (e: any) => {
    console.log("img img img");
  };

  const handleSubmit = async (e: any) => {
    console.log("submit");
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full flex justify-center items-center">
          <div className="relative">
            {/* User Avatar */}
            <Image
              src={
                user.avatar || avatar ? user.avatar.url || avatar : avatarIcon
              }
              alt=""
              className="w-[250px] h-[250px] cursor-pointer border-[3px] border-[#6126d7] rounded-full"
            />
            {/* Hidden File Input for Image Upload */}
            <input
              type="file"
              name=""
              id="avatar"
              className="hidden"
              onChange={imageHandler}
              accept="image/png,image/jpg,image/jpeg,image/webp"
            />
            {/* Label for Avatar Input */}
            <label htmlFor="avatar">
              <div className="w-[35px] h-[35px] bg-[#6126d7] rounded-full absolute bottom-5 right-5 flex items-center justify-center cursor-pointer">
                <AiOutlineCamera size={20} className="z-1" />
              </div>
            </label>
          </div>
        </div>
        <br />
        <br />
        <div className="w-full flex flex-col justify-center">
          <form onSubmit={handleSubmit}>
            <div className="m-auto flex flex-col gap-2">
              {/* Name Field */}
              <div className="focus-within:text-[#6126d7]">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium"
                >
                  Username
                </label>
                <div className="relative outline outline-0 focus-within:outline-1 outline-[#6126d7] rounded-md">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none bg-slate-800 px-5 rounded-r-xl rounded-l-md text-[#6126d7]">
                    <FaRegUser />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full  ps-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-[1px] outline-none"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email ID Field */}
              <div className="focus-within:text-[#6126d7]">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium "
                >
                  Email ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none bg-slate-800 px-5 rounded-r-xl rounded-l-md text-[#6126d7]">
                    <MdOutlineMailLock />
                  </div>
                  <input
                    type="email"
                    readOnly
                    required
                    value={user?.email}
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full  ps-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-[1px] outline-none"
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div className="focus-within:text-[#6126d7]">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium"
                >
                  Phone Number
                </label>
                <div className="relative outline outline-0 focus-within:outline-1 outline-[#6126d7] rounded-md">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none bg-slate-800 px-5 rounded-r-xl rounded-l-md text-[#6126d7]">
                    <FaWhatsapp />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full  ps-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-[1px] outline-none"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Update Profile"
                className={`w-full h-[40px] bg-[#6126d7] text-center dark:text-[#fff] text-block rounded-md mt-6 cursonr-pointer`}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
