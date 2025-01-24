import Image from "next/image";
import React, { FC } from "react";
import avatarDefault from "../../../public/assets/default-user-avatar.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { RiLogoutCircleFill } from "react-icons/ri";

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logoutHangler: any;
};

const SidebarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logoutHangler,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer rounded-md ${
          active === 1 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avatar || avatar ? user.avatar.url || avatar : avatarDefault}
          alt="avatar"
          width={20}
          height={20} 
          className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
        />

        <h5 className="pl-2 800px:block hidden font-medium font-Poppins dark:text-white text-balack">
          My Account
        </h5>
      </div>
        {/* change password */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer rounded-xl ${
          active === 2 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordFill
          size={20}
          className={`${active === 2 ? "text-[#6126d7]" : "text-[#ffffff]"}`}
        />
        <h5 className="pl-2 800px:block hidden font-medium font-Poppins dark:text-white text-balck">
          Change Password
        </h5>
      </div>

        {/* Entrolled Course */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer rounded-xl ${
          active === 3 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera
          size={20}
          className={`${active === 3 ? "text-[#6126d7]" : "text-[#ffffff]"}`}
        />
        <h5 className="pl-2 800px:block hidden font-medium font-Poppins dark:text-white text-balck">
          Entrolled Courses
        </h5>
      </div>

        {/* Logout */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer rounded-xl ${
          active === 4 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => logoutHangler()}
      >
        <RiLogoutCircleFill
          size={24}
          className={`${active === 4 ? "text-[#6126d7]" : "text-[#ffffff]"}`}
        />
        <h5 className="pl-2 800px:block hidden font-medium font-Poppins dark:text-white text-balck">
          Log Out
        </h5>
      </div>

    </div>
  );
};

export default SidebarProfile;
