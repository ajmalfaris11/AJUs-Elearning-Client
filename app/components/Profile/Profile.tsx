"use client";
import React, { FC, useState } from "react";
import SidebarProfile from "./SidebarProfile";
import { useLogOutQuery } from "../../../redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import ProfileInfo from "./ProfileInfo";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [active, setActive] = useState(1);

  const [logout, setLoggout] = useState(false);
  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  const logoutHangler = async () => {
    signOut();
    setLoggout(true);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <div className="[w-85%] flex mx-auto dark:bg-slate-900 h-[calc(100vh-80px)] p-4">
      <div
        className={`w-[60px] 800px:w-[350px]  dark:bg-slate-900 bg-[#6126d7] p-4 bg-opacity-90 border-2 border-[#5229a5] border-l-[#7835ff] border-b-[#7835ff] rounded-2xl sticky  ${
          scroll ? "top-[120px]" : "top-[30px]"
        }`}
      >
        <SidebarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logoutHangler={logoutHangler}
        />
      </div>
      <div className="bg-white dark:bg-slate-900 w-full h-full dark:text-white text-black shadow-sm">
        {active === 1 && (
          <div className="w-full h-full bg-transparent p-5 overflow-scroll">
            <ProfileInfo avatar={avatar} user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
