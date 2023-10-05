"use client";

import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createCustomTheme } from "../utilities/theme";
import Login from "@/app/signUp/page";

const page = () => {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    setTheme(createCustomTheme());
  }, []);

  return (
    <>
      <Container>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
        </ThemeProvider>
      </Container>
    </>
  );
};

export default page;
