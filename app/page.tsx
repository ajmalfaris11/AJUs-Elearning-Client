"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import HeroSection from "./components/Route/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="AJUS E-Learning"
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />

      <Header 
      open={open} 
      setOpen={setOpen} 
      activeItem={activeItem}
      setRoute = {setRoute}
      route={route}
      />

      <HeroSection />
    </div>
  );
};

export default Page;
