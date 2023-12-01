import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Submitted = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/create-ads");
    }, 600);
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid red",
        }}
      >
        <Box
          sx={{
            height: "150px",
            width: "350px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            border: "1px solid green",
          }}
        >
          <CheckCircleIcon />
          Submitted
        </Box>
      </Box>
    </>
  );
};

export default Submitted;
