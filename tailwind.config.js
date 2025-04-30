/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Removed the backgroundImage extension for 'wood-grain-pattern'
      animation: {
        "pulse-subtle": "pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(157, 23, 77, 0.4)",
          },
          "50%": {
            transform: "scale(1.03)",
            boxShadow: "0 0 0 10px rgba(157, 23, 77, 0)",
          },
        },
      },
    },
  },
  plugins: [
    // Keeping the addVariant plugin for potential future use,
    // remove if definitely not needed.
    function ({ addVariant }) {
      addVariant("before", "&::before");
      addVariant("after", "&::after");
    },
  ],
};
