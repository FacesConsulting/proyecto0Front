"use client";

import { Box, Toolbar } from "@mui/material";
import HeaderClinic from "../header/HeaderClinic";

const BoxClinic = ({ children }: any) => {
  return (
    <Box>
      <HeaderClinic />
      <Box component={"main"} sx={{flexGrow:1, p:3}}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default BoxClinic;
