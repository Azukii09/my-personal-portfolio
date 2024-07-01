import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
    },
    colors: {
      primary: "#2F2F2F",
      secondary: "#66666E",
      ternary:"#9999A1",
      contras: "#F4F4F6",
      accent: "#E6E6E9",
      // info: "#BBDDF4",
      // warning: "#FACD2B",
      // success: "#26FF2A",
      // danger: "#FF213F",
    }
  },
  plugins: [],
};
export default config;
