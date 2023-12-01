import React from "react";
import Navbar from "./Navbar";
import { Box, Button } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ margin: "auto" }}>
      <Navbar />
      <Box>
        <Outlet />
      </Box>
      {/* 
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          mt: "12px",
        }}
      >
        <Button variant="contained">Next</Button>
      </Box> */}
    </div>
  );
};

export default Layout;
