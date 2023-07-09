/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            transform: "translateY(-90px)",
          },
          "50%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(90px)",
          },
        },
        loading: {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        "up-and-down-30px": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-30px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },

        "up-and-down-50px": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-50px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },

        slideDown: {
          "0%": { maxHeight: "0" },
          "100%": { maxHeight: "1000px" },
        },

        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 2s ease-out",
        "fade-out-down": "fade-out-down 1s ease-out",
        "loading-bar": "loading 2s ease-in-out infinite",
        "spin-slow": "rotate 15s linear infinite",
        "spin-md": "rotate 10s linear infinite",
        "spin-fast": "rotate 5s linear infinite",
        "up-and-down-30px": "up-and-down-30px 8s ease-in-out infinite",
        "up-and-down-50px": "up-and-down-50px 10s ease-in-out infinite",
        "slide-down": "slideDown 2s ease-in-out",
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
