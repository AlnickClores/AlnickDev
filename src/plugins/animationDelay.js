const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animation-delay": (value) => ({
          "animation-delay": value,
        }),
      },
      {
        values: theme("animationDelay"),
      }
    );
  },
  {
    theme: {
      extend: {
        animationDelay: {
          0: "0ms",
          100: "100ms",
          200: "200ms",
          300: "300ms",
          400: "400ms",
          500: "500ms",
          600: "600ms",
          700: "700ms",
          800: "800ms",
          900: "900ms",
          1000: "1000ms",
        },
      },
    },
  }
);

module.exports = animationDelay;
