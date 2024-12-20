'use client'; // Indicates this file should be treated as a client-side module in Next.js
import * as React from 'react'; 
import { ThemeProvider as NextThemesProvider } from "next-themes"; 
import type { ThemeProviderProps } from 'next-themes'; 

// ThemeProvider component which wraps the NextThemesProvider for managing the theme
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        // Using NextThemesProvider to enable theme management, passing down props and children
        <NextThemesProvider {...props}>
            {children} {/* Render the children components passed to ThemeProvider */}
        </NextThemesProvider>
    )
}
