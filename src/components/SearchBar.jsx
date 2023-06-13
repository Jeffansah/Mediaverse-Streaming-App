import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const onHandleSubmit = (event) => {
    event.preventDefault();
    searchTerm && navigate(`/search/${searchTerm}`) && setSearchTerm("");
  };

  return (
    <Paper
      component="form"
      onSubmit={onHandleSubmit}
      sx={{
        display: "flex",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        overflow: "hidden",
        width: { xs: "40%", md: "350px" },
      }}
    >
      <input
        style={{ width: "100%" }}
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#cf5bfd" }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
