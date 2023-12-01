import { Box } from "@mui/material";
import React from "react";
import AdInsights from "../pages/AdInsights";
import ChartTable from "../pages/ChartTable";

const Dashboard = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      sx={{ backgroundColor: "#eeeeee" }}
    >
      <AdInsights />
      <ChartTable />
    </Box>
  );
};

export default Dashboard;
