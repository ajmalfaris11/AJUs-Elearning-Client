'use client'
import React, { FC, useState } from 'react'
import SidebarProfile from './SidebarProfile'
import { useLogOutQuery } from '../../../redux/features/auth/authApi';
import { signOut } from 'next-auth/react';


type Props = {
    user:any;
}

const Profile:FC<Props> = ({user}) => {
    const [scroll, setScroll] = useState(false);
    const [avatar, setAvatar] = useState(null)
    const [active, setActive] = useState(1);

    const [logout, setLoggout] = useState(false);
    const {} = useLogOutQuery(undefined, {
        skip: !logout ? true : false,
    });

    const logoutHangler = async () => {
        signOut();
        setLoggout(true);

    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 85) {
                setScroll(true);
            } else {
                setScroll(false); 
            }
        })
    }  

  return (
    <div className='[w-85%] flex mx-auto'>
        <div className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-[#6126d7] p-2 bg-opacity-90 border rounded-xl shadow-sm mt-[60px] mb-[60px] sticky border-[#6126d7] ${scroll ? "top-[120px]" : "top-[30px"} left-[30px]`}>
            
            <SidebarProfile 
            user={user}
            active={active}
            avatar={avatar}
            setActive={setActive}
            logoutHangler={logoutHangler}

            />
        </div>
    </div>
  )
}

export default Profile