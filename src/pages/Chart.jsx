import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box } from "@mui/material";

const data = [
  { value: 35, label: "35% Female", color: "#0088FE" },
  { value: 25, label: "25% Unknown", color: "#000000" },
  { value: 40, label: "40% Male", color: "#FF8042" },
];

export default function ChartInsights() {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <PieChart
        series={[
          {
            data: data,
            cx: 200,
            cy: 150,
            innerRadius: 40,
            outerRadius: 80,
          },
        ]}
        height={300}
        width={600}
      />
    </Box>
  );
}
