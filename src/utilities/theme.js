// theme.js
"use client";
import { createTheme } from "@mui/material/styles";

export const createCustomTheme = () => {
  const theme = createTheme({
    palette: {
      white: "#ffffff",
      primary: {
        light: "#757ce8",
        main: "#313866",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return theme;
};
