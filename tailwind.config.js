module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: "519px",

      tablet: "720px",

      laptop: "1023px",

      desktop: "1279px",

      "2xl": "1535px",
    },
    extend: {
      colors: {
        "olive-green": "#4B9093",
        "olive-green-dark": "#2e6b6e",
        "sunset-orange": "#F59A73",
        "sunset-orange-dark": "#d48563",
        "almost-white": "#F4F7F8",
        "gray-second": "#D2D4D4",
        "gray-third": "#7C7C8A",
        "warning-red": "#dc2626",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
