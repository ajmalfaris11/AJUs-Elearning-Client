"use client";
import { Poppins, Josefin_Sans } from "next/font/google"; // Importing fonts from Google Fonts for use in the application
import "./globals.css"; // Import global CSS styles
import { ThemeProvider } from "./utils/theme-provider"; // Import ThemeProvider for handling theme switching
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";

// Set up Poppins font with specific settings (weights and variable)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Porppins",
});

// Set up Josefin Sans font with specific settings (weights and variable)
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

// RootLayout component that wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Type definition for the children prop, which represents the nested content of the layout
}>) {
  return (
    // Main HTML structure with lang="en" for English language
    <html lang="en">
      <body
        // Apply the fonts and background styles to the body element
        className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <Providers>
          <SessionProvider>
            {/* ThemeProvider wraps the children to handle theme management */}
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Custom>{children}</Custom>
              {/* The Toaster component from 'react-hot-toast' is added to provide toast notifications within the application. */}
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  return <>{isLoading ? <Loader /> : <> {children} </>}</>;
};
