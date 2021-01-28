import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Khand",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Titillium Web", "sans-serif"],
  headerColor: "#3d3e4d",
  bodyColor: "#3d3e4d",
  headerWeight: 600,
  boldWeight: 600,
  googleFonts: [
    {
      name: "Khand",
      styles: ["600"],
    },
    {
      name: "Titillium Web",
      styles: ["400"],
    },
  ],
  // See below for the full list of options.
});

export default typography;
