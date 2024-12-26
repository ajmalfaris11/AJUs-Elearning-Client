import { redirect } from "next/navigation";
import userAuth from "./userAuth";
import React from "react";

interface ProtectedProps {
    children: React.ReactNode;
}

export default function Protected({ children }: ProtectedProps) {
    // Check if the user is authenticated using the `userAuth` utility function.
    const isAuthenticated = userAuth();

    // If authenticated, render the children; otherwise, redirect to the home page (`/`).
    return isAuthenticated ? children : redirect("/");
}