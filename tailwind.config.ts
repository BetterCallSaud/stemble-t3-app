import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'market': 'Chelsea Market',
      'sans': 'Manrope',
      'inter': 'Inter var',
    }
  },
  plugins: [
    
  ],
} satisfies Config;
