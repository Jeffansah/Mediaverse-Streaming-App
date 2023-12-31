import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        src="https://i.ibb.co/RppfvY6/play-removebg.png"
        alt="logo"
        height={45}
      />
      <Typography
        ml={1}
        sx={{ color: "#cf5bfd", fontWeight: "Bold", fontSize: "22px" }}
      >
        MediaVerse
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
