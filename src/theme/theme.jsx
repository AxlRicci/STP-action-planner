import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#049DBF",
    green: "#8FC73E",
    orange: "#BF4904",
    burntOrange: "#A62F03",
    white: "#F2F2F2",
    darkGrey: "#4B4B4B",
    black: "#000",
  },
  shadows: {
    med: ".5rem .5rem .5rem 0 rgba(0,0,0, .15)",
    lrg: ".75rem .75rem 1rem 0 rgba(0,0,0, .15)",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;