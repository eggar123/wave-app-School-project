import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      ashGray: "#CAD2C5",
      darkSeaGreen: "#84A98C",
      hookersGreen: "#52796F",
      darkSlateGray: "#354F52",
      charCoal: "#2F3E46"
    },
    fonts: ["Sora", "sans-serif"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
  };
  
  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;
