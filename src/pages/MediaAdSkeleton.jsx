import { Box, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import * as React from "react";

function MediaAdSkeleton() {
  return (
    <Box
      columnGap={1}
      sx={{ width: 400, backgroundColor: "white", my: "50px" }}
    >
      <Box p="12px">
        <Skeleton variant="rectangular" width="100%" height={60} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "120px",
            mt: "8px",
          }}
        >
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSahwSOD8WdkSu2xgNvoUiiqC7QMdAhC_TFn-gFmJ9j_2oXkAqY"
            alt="media image title"
            style={{ height: 100, width: "100%", objectFit: "contain" }}
          />
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSahwSOD8WdkSu2xgNvoUiiqC7QMdAhC_TFn-gFmJ9j_2oXkAqY"
            alt="media image title"
            style={{ height: 100, width: "100%", objectFit: "contain" }}
          />
        </Box>
        <Skeleton variant="rounded" width="100%" height={60} />
      </Box>
      <Box textAlign="center">
        <Typography variant="text">Create</Typography>
        <Typography variant="h6">Media Ad</Typography>
      </Box>
    </Box>
  );
}

export default MediaAdSkeleton;
