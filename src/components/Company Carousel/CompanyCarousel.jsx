import React, { useState } from "react";

import { Box, Typography } from "@mui/material";

const CompanyCarousel = () => {
  const [collegeName, setCollegeName] = useState("Bharati Vidyapeeth");
  return (
    <>
      <Box>
        <Typography>ACE YOUR CAMPUS INTERVIEWS</Typography>
        <Typography>
          Find
          <Typography>{collegeName}’s</Typography>
          exclusive interview experiences
        </Typography>
      </Box>
    </>
  );
};

export default CompanyCarousel;
