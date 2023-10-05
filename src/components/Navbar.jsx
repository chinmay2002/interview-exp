"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box bgcolor="white" display={"flex"}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        InterviewX
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Button>Home</Button>
        <Button>Contact </Button>
        <Button>About</Button>
        <Button>Sign Up</Button>
      </Box>
    </Box>
  );
};

export default Navbar;
