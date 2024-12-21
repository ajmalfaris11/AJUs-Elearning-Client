"use client"; // Ensures this component is rendered on the client side for proper theme management.
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes"; 
import { BiMoon, BiSun } from "react-icons/bi"; // Icons for light and dark theme toggling.

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false); // Tracks if the component is mounted to avoid hydration issues.
  const { theme, setTheme } = useTheme(); // Provides the current theme and function to toggle themes.

  useEffect(() => setMounted(true), []); // Ensures the component is mounted before interacting with the DOM.

  if (!mounted) {
    return null; // Prevents rendering until the component is mounted to avoid mismatch issues.
  }

  return (
    <div className="flex items-center justify-center mx-4"> {/* Container for the theme toggle button */}
      {theme === "light" ? ( 
        <BiMoon
          className="coursor-pointer" 
          fill="black" 
          size={25} 
          onClick={() => setTheme("dark")} // Toggles the theme to dark when clicked.
        />
      ) : (
        <BiSun
          size={25} 
          className="cursor-pointer" 
          onClick={() => setTheme("light")} // Toggles the theme to light when clicked.
        />
      )}
    </div>
  );
};
