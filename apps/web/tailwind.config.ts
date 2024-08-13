import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-blue" : "#2874F0",
        "secondry-yellow":"#FFDF00",
        "secondry-gray":"#333333",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
				boxShadow:
					"0px -16px 75px 0px rgba(0, 0, 0, 0.10), 0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
				// box: " 0px 16px 75px 0px rgba(0, 0, 0, 0.10), 0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
				// boxShadow2: "0px 23px 50px 0px rgba(0, 0, 0, 0.10)",
				// menu: "0px 36px 75px 0px rgba(0, 0, 0, 0.14), 0px 10px 20px 0px rgba(0, 0, 0, 0.10)",
				// sidebar: "2px 0px 10px 0px rgba(0, 0, 0, 0.10);",
			},
    },
  },
  plugins: [],
};
export default config;
