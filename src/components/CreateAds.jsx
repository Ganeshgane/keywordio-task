import { Box, Button, Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";
import TextAdSkeleton from "../pages/TextAdSkeleton";
import MediaAdSkeleton from "../pages/MediaAdSkeleton";
import { useNavigate } from "react-router-dom";

const CreateAds = () => {
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  return (
    <Box
      //   height="800px"
      display="flex"
      flexDirection="column"
      //   justifyContent="space-between"
      columnGap={3}
      rowGap={4}
      sx={{
        border: "#eeeeee",
        m: "10px",
        p: "10px",
      }}
    >
      <Typography variant="text">Create Ads</Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        sx={{ backgroundColor: "#eeeeee" }}
      >
        <Box>
          <Checkbox
            checked={state}
            onChange={() => setState(!state)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <TextAdSkeleton />
        </Box>
        <Box>
          <Checkbox
            checked={!state}
            onChange={() => setState(!state)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <MediaAdSkeleton />
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Button
          variant="contained"
          onClick={() => {
            state
              ? navigate("/create-ads/text-ad")
              : navigate("/create-ads/media-ad");
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CreateAds;
