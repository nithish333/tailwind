module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ECFDFA",
        },
        secondary: {
          100: "#4FA7A5",
        },
      },
    },
    fontFamily: {
      body: ["Inter"],
    },
    textIndent: (theme) => theme("spacing"),
  },
  variants: {
    textIndent: ["responsive"],
  },
  plugins: [require("tailwindcss-text-indent")()],
};
