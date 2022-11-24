/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "bounce 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
