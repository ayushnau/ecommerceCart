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
        "secondary-yellow":"#FFDF00",
        "secondary-gray":"#333333",
        "prmary-text-black":"#212121",
        "secondary-text-gray":"#878787",
        "secondary-emerald-green":"#388e3c",
        "secondary-purple":"#7048C6"
      },
      maxWidth:{
        "8xl" : "1680px"
      },
      boxShadow: {
				boxShadow:
					"0px -16px 75px 0px rgba(0, 0, 0, 0.10), 0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
			},
    },
  },
  plugins: [],
};
export default config;
