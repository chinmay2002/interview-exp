"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { NavLinks } from "@/constants/NavLinks";
const Navbar = () => {
  const navlinks = NavLinks[1].Links;
  return (
    <Box
      sx={{
        component: "div",
        bgcolor: "white",
        display: "flex",
        maxWidth: "100%",
        maxHeight: "200px",
        padding: "10px",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {}
      <Typography sx={NavLinks[0].style}>{NavLinks[0].Logo}</Typography>

      <Box
        display={"flex"}
        sx={{ justifyContent: "center", alignContent: "center" }}
      >
        {navlinks.map((nav) => {
          if (nav.id < 4) {
            return (
              <Link id={nav.id} href={nav.linkRef}>
                <Button sx={nav.style}>{nav.title}</Button>
              </Link>
            );
          } else {
            return (
              <Link id={nav.id} href={nav.linkRef}>
                <Button sx={nav.style}>{nav.title}</Button>
              </Link>
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default Navbar;
