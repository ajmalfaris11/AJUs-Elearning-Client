import type { Config } from 'tailwindcss'

// Tailwind CSS configuration object
const config: Config = {
  content: [
    // Specify the file paths where Tailwind CSS will scan for class usage
    './pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}', 
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  darkMode: ["class"], // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      fontFamily: {
        // Custom font families with CSS variable references
        Poppins: ['var(--font-Poppins)'],
        Josefin: ['var(--font-Josefin)'],
      },
      backgroundImage: {
        // Custom background gradient styles
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Radial gradient
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', // Conic gradient
      },
      screens: {
        // Custom screen breakpoints for responsive design
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  plugins: [], // Add Tailwind CSS plugins here if needed
}

export default config
