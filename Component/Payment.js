import React, { useState } from "react";
import { Box } from "@mui/material";
import { green, red } from "@mui/material/colors";

function Payment({ payment_status, payment }) {
  return (
    <Box
      sx={
        payment === "paid"
          ? { background: green[500], p: 1, borderRadius: "12px", color: "white" }
          : { background: red[500], p: 1, borderRadius: "12px", color: "white" }
      }
    >
      {payment_status}
    </Box>
  );
}

export default Payment;
