/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Acme: ["Acme", "sans-serif"],
      AnticSlab: ["Antic Slab", "serif"],
      Atma: ["Atma", "system-ui"],
      TitiliumWeb: ["'Titillium Web'", "system-ui"],
    },

    extend: {
      colors: {
        light: "#E9EBEA",
        blue: "#1D3557",
        yellow: "#FA7D0A",
        red: "#E63946",
        gray: "#CECFD1",
        blackopacity: "rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        cus: " 0 3px 6px 0px rgba(0, 0, 0, 0.25)",
        cus2: " 0 5px 10px 0px rgba(0, 0, 0, 0.5)",
        sm2: " 0 0 5px 1px",
        glasses: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wiggleUpdate: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        serong: {
          "0%": { transform: "translate(90px,90px)" },
          "25%": { transform: "translate(180px,180px)" },
          "50%": { transform: "translate(270px,270px)" },
          "100%": { transform: "translate(360px,360px)" },
        },
        rotatefull: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        flip: {
          "0%": {
            transform: " rotateY(0deg)",
          },
          "50%": {
            transform: "rotateY(180deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        wiggleUpdate: "wiggleUpdate 3s ease-in-out infinite",
        wiggleSlow: "wiggle 2s linear infinite",
        "spin-slow": "spin 15s linear infinite",
        serong: "serong 5s linear infinite",
        flip: "flip 1s linear infinite ",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
