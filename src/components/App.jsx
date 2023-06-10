import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Feed from "./Feed";
import VideoDetail from "./VideoDetail";
import ChannelDetail from "./ChannelDetail";
import SearchFeed from "./SearchFeed";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" exact element={<ChannelDetail />} />
        <Route path="/search/searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
