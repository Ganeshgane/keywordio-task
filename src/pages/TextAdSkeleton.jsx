import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box, Typography } from "@mui/material";

function TextAdSkeleton() {
  return (
    <Box
      columnGap={1}
      sx={{ width: 400, backgroundColor: "white", my: "50px" }}
    >
      <Box p="12px">
        <Skeleton variant="rectangular" width="100%" height={60} />
        <Box sx={{ height: "120px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Box>
        <Skeleton variant="rounded" width="100%" height={60} />
      </Box>
      <Box textAlign="center">
        <Typography variant="text">Create</Typography>
        <Typography variant="h6">Text Ad</Typography>
      </Box>
    </Box>
  );
}

export default TextAdSkeleton;
